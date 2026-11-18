import Seo from '../components/Seo';
import { Head, PageHero, PartnerCard, Cta } from '../components/Ui';
import { PARTNERS } from '../data/site';
import { p } from '../data/images';

export default function Partners() {
  return (
    <>
      <Seo title="Clients and partners" path="/partners" description="The organisations TEDAC collaborates with to extend technical reach and delivery capability." />
      <PageHero crumb={[['Partners']]} title="Strong relationships, stronger delivery" text="Established indigenous Nigerian organisations whose expertise complements ours." image={p('about-3')} />
      <section className="py-24">
        <div className="wrap">
          <Head label="Our network" title="Complementary expertise for every assignment" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{PARTNERS.map((pt) => <PartnerCard key={pt.name} pt={pt} />)}</div>
        </div>
      </section>
      <Cta title="Interested in partnering with TEDAC?" text="We welcome conversations with organisations that share our standards." />
    </>
  );
}
