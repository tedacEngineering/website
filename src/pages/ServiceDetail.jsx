import { Link, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, ServiceCard, Cta } from '../components/Ui';
import { SERVICES, SITE } from '../data/site';
import NotFound from './NotFound';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return <NotFound />;
  const others = SERVICES.filter((x) => x.slug !== slug);
  return (
    <>
      <Seo title={s.title} path={`/services/${s.slug}`} description={s.short} />
      <PageHero crumb={[['Services', '/services'], [s.title]]} title={s.title} text={s.short} image={s.image} />
      <section className="py-24">
        <div className="wrap grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="brk"><img src={s.image} alt={s.title} className="cut aspect-[16/9] w-full object-cover" /></div>
            <h2 className="mt-14 text-3xl font-bold">What this service covers</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.short} Every assignment is planned around your objectives, with close attention to safety, quality, efficiency and schedule, and delivered in compliance with applicable statutory and industry requirements.</p>
            <ul className="mt-8 space-y-4">{s.points.map((x) => <li key={x} className="flex gap-3 border-b border-slate-200 pb-4 font-medium"><Check className="shrink-0 text-gold-deep" size={22} />{x}</li>)}</ul>
          </div>
          <aside className="space-y-8">
            <div className="cut bg-navy p-8 text-white">
              <h3 className="text-xl font-bold">Discuss this service</h3>
              <p className="mt-3 text-sm text-white/70">Share your scope and we will respond with how we can support the work.</p>
              <Link to="/contact" className="btn-gold mt-6 w-full">Request a quote</Link>
              <a href={`tel:${SITE.tel}`} className="mt-4 block text-center text-sm text-gold">{SITE.phone}</a>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-bold">Other services</h3>
              {others.map((o) => <Link key={o.slug} to={`/services/${o.slug}`} className="block border-b border-slate-200 py-3 text-sm font-medium hover:text-gold-deep">{o.title}</Link>)}
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-sheet py-20"><div className="wrap grid gap-8 md:grid-cols-3">{others.slice(0, 3).map((o) => <ServiceCard key={o.slug} s={o} />)}</div></section>
      <Cta />
    </>
  );
}
