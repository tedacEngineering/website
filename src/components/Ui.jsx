import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Layers, Handshake, Factory } from 'lucide-react';
import { PROCESS, WHY, SERVICES, STATS } from '../data/site';
import { p } from '../data/images';

/* Drawing-sheet border with zone markers: the site's signature device */
export function SheetFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-3 z-10 hidden border border-gold/45 md:block lg:inset-5">
      <div className="absolute inset-x-0 top-0 flex justify-around font-mono text-[10px] text-gold">
        {[1, 2, 3, 4, 5, 6].map((n) => <span key={n} className="-translate-y-1/2 bg-navy-950 px-2">{n}</span>)}
      </div>
      <div className="absolute inset-y-0 left-0 flex flex-col justify-around font-mono text-[10px] text-gold">
        {['D', 'C', 'B', 'A'].map((n) => <span key={n} className="-translate-x-1/2 bg-navy-950 py-1">{n}</span>)}
      </div>
    </div>
  );
}

export function Dim({ children, light, center }) {
  return <p className={`dim mb-4 text-sm font-medium ${light ? 'text-gold' : 'text-gold-deep'} ${center ? 'justify-center' : ''}`}><span>{children}</span></p>;
}

export function Head({ label, title, text, light, center }) {
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {label && <Dim light={light} center={center}>{label}</Dim>}
      <h2 className={`text-3xl font-bold leading-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>}
    </div>
  );
}

export function PageHero({ crumb, title, text, image }) {
  return (
    <header className="relative overflow-hidden bg-navy-950 pb-20 pt-40 lg:pt-48">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
      <div className="grid-paper absolute inset-0" />
      <SheetFrame />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-xs text-gold">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumb.map(([l, to], i) => (<span key={l} className="flex items-center gap-2"><ChevronRight size={12} />{to ? <Link to={to} className="hover:text-white">{l}</Link> : <span className="text-white/70">{l}</span>}</span>))}
        </nav>
        <h1 className="rise max-w-4xl text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">{title}</h1>
        {text && <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-white/75" style={{ animationDelay: '.15s' }}>{text}</p>}
      </div>
    </header>
  );
}

export function Counter({ n, s = '' }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const k = Math.min((t - t0) / 1400, 1); setV(Math.round(n * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [n]);
  return <span ref={ref}>{v}{s}</span>;
}

export function ServiceCard({ s }) {
  return (
    <Link to={`/services/${s.slug}`} className="group flex flex-col border border-slate-200 bg-white">
      <div className="cut-bl aspect-[16/10] overflow-hidden"><img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
      <div className="flex flex-1 flex-col border-t-4 border-gold p-7">
        <h3 className="text-xl font-bold leading-snug">{s.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.short}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-gold-deep">Read more <ChevronRight size={16} /></span>
      </div>
    </Link>
  );
}

export function ProjectCard({ pr, onOpen, to }) {
  const inner = (
    <>
      <img src={pr.image} alt={pr.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="font-mono text-xs text-gold">{pr.cat}</p>
        <h3 className="mt-1 text-xl font-bold">{pr.title}</h3>
        <p className="text-sm text-white/70">{pr.place}</p>
      </div>
    </>
  );
  const cls = 'group relative block aspect-[4/3] w-full overflow-hidden bg-navy text-left';
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button onClick={() => onOpen(pr)} className={cls}>{inner}</button>;
}

export function NewsCard({ n }) {
  return (
    <Link to={`/news/${n.slug}`} className="group block">
      <div className="aspect-[16/10] overflow-hidden bg-navy"><img src={n.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
      <p className="mt-5 font-mono text-xs text-gold-deep">{n.cat} · {n.date}</p>
      <h3 className="mt-2 text-xl font-bold leading-snug group-hover:text-gold-deep">{n.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
    </Link>
  );
}

export function PartnerCard({ pt }) {
  const initials = pt.name.split(' ').filter((w) => /^[A-Z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
  return (
    <div className="flex h-full flex-col border border-slate-200 bg-white p-7">
      <div className="mb-5 grid h-16 w-full place-items-center bg-sheet">
        {pt.logo ? <img src={pt.logo} alt={pt.name} className="max-h-12 object-contain" /> : <span className="font-display text-2xl font-extrabold text-navy/60">{initials}</span>}
      </div>
      <h3 className="text-lg font-bold">{pt.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{pt.text}</p>
    </div>
  );
}

export function Process() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <img src={p('process-1')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="grid-paper absolute inset-0" />
      <div className="wrap relative">
        <Head light label="How we work" title="From first assessment to final handover" text="One accountable team carries your project through every stage." />
        <ol className="grid gap-px bg-white/15 md:grid-cols-5">
          {PROCESS.map(([t, d], i) => (
            <li key={t} className="bg-navy-900/90 p-7">
              <span className="font-mono text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhyList() {
  return (
    <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      {WHY.map(([t, d]) => (
        <div key={t} className="border-l-4 border-gold pl-5">
          <h3 className="text-lg font-bold">{t}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
        </div>
      ))}
    </div>
  );
}

export function HseBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white">
      <img src={p('hse-1')} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <ShieldCheck className="text-gold" size={44} />
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">Nobody gets hurt. Nothing gets harmed.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">Health, Safety and Environment is built into every stage of project execution, with zero tolerance for working under the influence and a firm commitment to prevent pollution.</p>
          <Link to="/policies" className="btn-gold mt-8">Read our HSE policy</Link>
        </div>
        <ul className="grid gap-px bg-white/15 sm:grid-cols-2">
          {['Hazards controlled before harm', 'Trained, competent personnel', 'Inductions and toolbox meetings', 'Incidents investigated, lessons applied'].map((x) => (
            <li key={x} className="bg-navy-900/85 p-6 font-semibold">{x}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Cta({ title = 'Planning a project that needs engineering you can rely on?', text = 'Tell us about your scope and schedule. We will respond with how we can help.' }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <img src={p('cta-1')} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="grid-paper absolute inset-0" />
      <div className="wrap relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl"><h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2><p className="mt-4 text-lg text-white/75">{text}</p></div>
        <div className="flex flex-wrap gap-4"><Link to="/contact" className="btn-gold">Request a quote</Link><Link to="/services" className="btn-line">Explore services</Link></div>
      </div>
    </section>
  );
}

const STAT_ICONS = { layers: Layers, handshake: Handshake, factory: Factory, shield: ShieldCheck };

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-28">
      <div className="grid-paper absolute inset-0" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rotate-45 bg-gold/10" aria-hidden="true" />
      <div className="wrap relative">
        <div className="mb-14 max-w-4xl">
          <Dim light>TEDAC at a glance</Dim>
          <h2 className="text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl">Nine services under one roof.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => {
            const I = STAT_ICONS[s.icon];
            return (
              <div key={s.l} className="cut border-t-4 border-gold bg-navy-800 p-8">
                <span className="grid h-16 w-16 place-items-center bg-gold text-navy"><I size={32} strokeWidth={2.2} /></span>
                <div className="mt-8 font-sans text-7xl font-extrabold leading-none tabular-nums md:text-8xl"><Counter n={s.n} s={s.s} /></div>
                <p className="mt-5 text-lg font-extrabold leading-snug text-gold">{s.l}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const allServices = SERVICES;
