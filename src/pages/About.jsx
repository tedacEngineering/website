import Seo from '../components/Seo';
import { Head, PageHero, Process, WhyList, HseBand, Cta, StatsBand } from '../components/Ui';
import { VALUES, TEAM } from '../data/site';
import { p } from '../data/images';

const CARDS = [
  ['Vision', 'To be the engineering and technical solutions partner that energy and industrial clients turn to first, recognised for reliable delivery and sound technical judgement across the sectors we serve.', 'bg-gold text-navy'],
  ['Mission', 'To deliver engineering consultancy, technical design, project services and professional development by combining practical engineering experience with the right partnerships for each assignment, with a commitment to safety, quality and timely execution.', 'bg-slate-600 text-white'],
  ['Brand promise', 'When you work with TEDAC, you get engineers who take ownership of the outcome, not just the deliverable. Technical judgement, clear communication and honest reporting shape every engagement, from first assessment through final handover.', 'bg-navy text-white'],
];

export default function About() {
  return (
    <>
      <Seo title="About us" path="/about" description="Learn about TEDAC Engineering Limited: our vision, mission, values and the people delivering engineering solutions for energy and industry." />
      <PageHero crumb={[['About us']]} title="Engineers who own the outcome" text="A multidisciplinary engineering and technical solutions provider, building its reputation on technical work, delivery and relationships." image={p('about-3')} />

      <section className="py-24 md:py-32">
        <div className="wrap grid items-center gap-16 lg:grid-cols-2">
          <div className="relative pb-16 pr-10">
            <div className="brk"><img src={p('about-1')} alt="Steel structure" className="cut aspect-[4/5] w-full object-cover" /></div>
            <img src={p('about-2')} alt="Site team" loading="lazy" className="absolute bottom-0 right-0 w-2/5 border-8 border-white object-cover shadow-2xl" />
          </div>
          <div>
            <Head label="Our story" title="Technical excellence, strategic collaboration, continuous advancement" />
            <div className="-mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
              <p>TEDAC delivers engineering consultancy, technical design, project services and professional development, supporting clients across the project lifecycle from concept through execution.</p>
              <p>We combine engineering expertise, practical experience and contemporary technology to address technical requirements with precision and purpose. Each engagement is shaped around the specific objectives of the client, with a focus on sound engineering, safety, efficiency and dependable execution.</p>
              <p>TEDAC works alongside established organisations, industry professionals and technical specialists, bringing together complementary expertise to strengthen project delivery. These relationships are central to how we extend our reach and capabilities across the sectors we serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sheet py-24">
        <div className="wrap grid gap-6 lg:grid-cols-3">
          {CARDS.map(([t, d, c]) => (
            <article key={t} className={`cut p-10 ${c}`}>
              <h2 className="text-3xl font-bold">{t}</h2>
              <p className="mt-5 leading-relaxed opacity-90">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="wrap">
          <Head label="What guides us" title="Innovation, integrity and continuous improvement" text="The values behind every assignment, from the smallest technical task to the most complex project." />
          <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(([t, d]) => <div key={t} className="bg-white p-8"><div className="mb-5 h-1 w-10 bg-gold" /><h3 className="text-xl font-bold">{t}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p></div>)}
          </div>
        </div>
      </section>

      <StatsBand />

      <Process />

      <section className="py-24 md:py-32">
        <div className="wrap">
          <Head label="Leadership" title="The people behind TEDAC" text="Replace these placeholders with the leadership team’s photos, names and roles." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <div key={i}>
                <div className="cut-bl aspect-[4/5] overflow-hidden bg-navy"><img src={m.image} alt={m.role} loading="lazy" className="h-full w-full object-cover" /></div>
                <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
                <p className="text-sm text-gold-deep">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sheet py-24"><div className="wrap"><Head label="Why choose us" title="What you can expect from TEDAC" /><WhyList /></div></section>
      <HseBand />
      <Cta />
    </>
  );
}
