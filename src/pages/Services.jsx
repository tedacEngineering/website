import Seo from '../components/Seo';
import { Head, PageHero, ServiceCard, Process, Cta } from '../components/Ui';
import { SERVICES } from '../data/site';
import { p } from '../data/images';

export default function Services() {
  return (
    <>
      <Seo title="Our services" path="/services" description="Mechanical fabrication, pipeline and plant construction, civil works, supervision, equipment supply, flange management, manpower supply, project management and asset integrity services." />
      <PageHero crumb={[['Services']]} title="Engineering competence, integrated with field execution" text="Nine service lines delivered across oil and gas facilities, industrial plants and construction projects." image={p('hero-2')} />
      <section className="py-24">
        <div className="wrap">
          <Head label="Service portfolio" title="Everything your project needs, coordinated" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{SERVICES.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
        </div>
      </section>
      <Process />
      <Cta />
    </>
  );
}
