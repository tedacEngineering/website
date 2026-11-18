import { Check } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Cta } from '../components/Ui';
import { POLICIES } from '../data/site';
import { p } from '../data/images';

export default function Policies() {
  return (
    <>
      <Seo title="HSE and corporate policies" path="/policies" description="TEDAC’s HSE, alcohol and drug, Nigerian content and quality policies." />
      <PageHero crumb={[['HSE & policies']]} title="Safe, compliant and accountable" text="The commitments that guide how we work with people, the environment, local capacity and quality." image={p('hse-1')} />
      <section className="py-20">
        <div className="wrap grid gap-14 lg:grid-cols-4">
          <nav aria-label="Policies" className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 font-mono text-xs text-slate-500">On this page</p>
            {POLICIES.map((x) => <a key={x.id} href={`#${x.id}`} className="block border-l-2 border-slate-200 py-2.5 pl-4 text-sm font-semibold hover:border-gold hover:text-gold-deep">{x.title}</a>)}
          </nav>
          <div className="space-y-20 lg:col-span-3">
            {POLICIES.map((x) => (
              <article key={x.id} id={x.id} className="scroll-mt-32">
                <h2 className="text-3xl font-bold md:text-4xl">{x.title}</h2>
                <div className="my-6 h-1 w-16 bg-gold" />
                <p className="text-lg leading-relaxed text-slate-600">{x.intro}</p>
                <ul className="mt-8 space-y-4">{x.points.map((t) => <li key={t} className="flex gap-3"><Check size={20} className="mt-1 shrink-0 text-gold-deep" /><span>{t}</span></li>)}</ul>
                <p className="mt-8 border-l-4 border-navy bg-sheet p-5 text-sm font-medium">{x.close}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
