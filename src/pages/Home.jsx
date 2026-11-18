import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Seo from '../components/Seo';
import { SheetFrame, Dim, Head, StatsBand, ServiceCard, ProjectCard, NewsCard, PartnerCard, Process, WhyList, HseBand, Cta } from '../components/Ui';
import { SERVICES, PILLARS, INDUSTRIES, PROJECTS, PARTNERS } from '../data/site';
import { useNews } from '../hooks/useContent';
import { p } from '../data/images';

const SLIDES = [
  { img: p('hero-1'), cap: 'Plant and facility engineering' },
  { img: p('hero-2'), cap: 'Pipeline and plant construction' },
  { img: p('hero-3'), cap: 'Asset integrity and reliability' },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  return (
    <header className="relative min-h-[100svh] overflow-hidden bg-navy-950">
      {SLIDES.map((s, k) => (
        <img key={k} src={s.img} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ${k === i ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/10" />
      <div className="grid-paper absolute inset-0 opacity-70" />
      <SheetFrame />
      <div className="wrap relative flex min-h-[100svh] flex-col justify-center pb-52 pt-44 lg:pb-44">
        <p className="rise"><Dim light>Energy and industrial engineering, Port Harcourt</Dim></p>
        <h1 className="rise max-w-4xl text-5xl font-extrabold leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]" style={{ animationDelay: '.12s' }}>
          Engineering solutions. Delivering excellence.
        </h1>
        <div className="rise my-8 h-1 w-24 bg-gold" style={{ animationDelay: '.24s' }} />
        <p className="rise max-w-xl text-lg leading-relaxed text-white/80" style={{ animationDelay: '.3s' }}>
          TEDAC combines engineering expertise, field execution and the right partnerships to take your project from concept to handover, safely and on schedule.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '.42s' }}>
          <Link to="/contact" className="btn-gold">Request a quote</Link>
          <Link to="/services" className="btn-line">Explore our services</Link>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-20 lg:bottom-5">
        <div className="wrap lg:px-12">
          <div className="grid border border-white/20 bg-navy-950/85 backdrop-blur md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map(([t, d]) => (
              <div key={t} className="border-b border-white/15 p-5 md:border-r lg:border-b-0">
                <h3 className="text-base font-bold text-gold">{t}</h3>
                <p className="mt-1 hidden text-sm text-white/65 md:block">{d}</p>
              </div>
            ))}
            <div className="p-5">
              <p className="font-mono text-[11px] text-white/50">Now showing</p>
              <p className="mt-1 text-sm font-semibold text-white">{SLIDES[i].cap}</p>
              <div className="mt-3 flex gap-2">
                {SLIDES.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-1 transition-all ${k === i ? 'w-10 bg-gold' : 'w-5 bg-white/30'}`} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { items: news } = useNews();
  return (
    <>
      <Seo path="/" />
      <Hero />

      {/* Partner ribbon */}
      <section className="overflow-hidden border-b border-slate-200 bg-sheet py-6" aria-label="Partners">
        <div className="marquee flex w-max gap-16 whitespace-nowrap font-display text-lg font-bold text-navy/40">
          {[...PARTNERS, ...PARTNERS].map((x, k) => <span key={k}>{x.name}</span>)}
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="brk"><img src={p('about-1')} alt="Structural steel under construction" className="cut aspect-[4/5] w-full object-cover" /></div>
            <div className="absolute -bottom-8 right-0 max-w-[260px] border-t-4 border-gold bg-navy p-6 text-white shadow-2xl md:-right-8">
              <p className="font-display text-xl font-bold leading-snug">Concept through execution</p>
              <p className="mt-2 text-sm text-white/70">One team across the full project lifecycle.</p>
            </div>
          </div>
          <div>
            <Head label="Who we are" title="A trusted technical partner built on sound engineering" />
            <p className="-mt-6 text-lg leading-relaxed text-slate-600">TEDAC Engineering Limited is a multidisciplinary engineering and technical solutions provider serving the energy and industrial sectors. We deliver engineering consultancy, technical design, project services and professional development.</p>
            <ul className="mt-8 space-y-3">
              {['Engagements shaped around each client’s objectives', 'Engineers who take ownership of the outcome', 'Complementary partnerships for broader technical reach'].map((x) => (
                <li key={x} className="flex gap-3 font-medium"><Check className="mt-0.5 shrink-0 text-gold-deep" size={20} />{x}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-navy mt-10">About TEDAC</Link>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Services */}
      <section className="bg-sheet py-24 md:py-32">
        <div className="wrap">
          <Head label="What we do" title="Nine services, one coordinated team" text="Engineering competence integrated with field execution, supported by qualified personnel and the technical resources each assignment requires." />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        </div>
      </section>

      <Process />

      {/* Industries */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <Head label="Sectors" title="Built for energy and industrial environments" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((x) => (
              <div key={x.t} className="group relative aspect-[3/4] overflow-hidden bg-navy">
                <img src={x.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 border-b-4 border-gold p-6 text-white"><h3 className="text-xl font-bold">{x.t}</h3><p className="mt-1 text-sm text-white/70">{x.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Head light label="Project gallery" title="Recent work across the field" />
            <Link to="/projects" className="btn-line mb-12 self-start md:self-auto">View all projects</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 md:row-span-2"><ProjectCard pr={PROJECTS[0]} to="/projects" /></div>
            {PROJECTS.slice(1, 3).map((pr) => <ProjectCard key={pr.slug} pr={pr} to="/projects" />)}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <Head label="Why TEDAC" title="Why clients choose us" text="Accountability, integrated capability and an uncompromising approach to safety." />
              <div className="brk"><img src={p('about-2')} alt="TEDAC site team" loading="lazy" className="cut-bl aspect-[4/3] w-full object-cover" /></div>
            </div>
          </div>
          <div className="lg:col-span-3 lg:pt-6"><WhyList /></div>
        </div>
      </section>

      <HseBand />

      {/* News */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Head label="News and insights" title="Latest from TEDAC" />
            <Link to="/news" className="btn-navy mb-12 self-start md:self-auto">All news</Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">{news.slice(0, 3).map((n) => <NewsCard key={n.slug} n={n} />)}</div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-sheet py-24">
        <div className="wrap">
          <Head label="Clients and partners" title="Strength through collaboration" text="We work alongside established Nigerian organisations to extend our reach and capability." />
          <div className="grid gap-6 md:grid-cols-3">{PARTNERS.slice(0, 3).map((pt) => <PartnerCard key={pt.name} pt={pt} />)}</div>
          <Link to="/partners" className="btn-navy mt-10">Meet all partners</Link>
        </div>
      </section>

      <Cta />
    </>
  );
}
