import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, ProjectCard, Cta } from '../components/Ui';
import { PROJECTS } from '../data/site';
import { p } from '../data/images';

const CATS = ['All', ...new Set(PROJECTS.map((x) => x.cat))];

export default function Projects() {
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const list = PROJECTS.filter((x) => cat === 'All' || x.cat === cat);
  useEffect(() => {
    const f = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', f);
    return () => window.removeEventListener('keydown', f);
  }, []);
  return (
    <>
      <Seo title="Projects" path="/projects" description="A gallery of TEDAC engineering, fabrication, construction and integrity work." />
      <PageHero crumb={[['Projects']]} title="Work that stands up on site" text="A selection of project scopes across pipelines, fabrication, civil works and asset integrity." image={p('project-1')} />
      <section className="py-20">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap gap-2" role="tablist">
            {CATS.map((c) => <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={`border px-5 py-2 text-sm font-semibold transition-colors ${cat === c ? 'border-navy bg-navy text-white' : 'border-slate-300 hover:border-gold'}`}>{c}</button>)}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((pr) => <ProjectCard key={pr.slug} pr={pr} onOpen={setOpen} />)}</div>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-navy-950/90 p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={open.title}>
          <div className="relative max-h-full w-full max-w-4xl overflow-auto bg-white" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-3 top-3 grid h-10 w-10 place-items-center bg-navy text-white hover:bg-gold hover:text-navy"><X size={20} /></button>
            <img src={open.image} alt={open.title} className="aspect-[16/9] w-full object-cover" />
            <div className="p-8">
              <p className="font-mono text-xs text-gold-deep">{open.cat}</p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">{open.title}</h2>
              <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-2">
                <div><dt className="font-mono text-xs text-slate-500">Location</dt><dd className="mt-1 font-semibold">{open.place}</dd></div>
                <div><dt className="font-mono text-xs text-slate-500">Scope</dt><dd className="mt-1 font-semibold">{open.scope}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      )}
      <Cta title="Have a similar scope in mind?" />
    </>
  );
}
