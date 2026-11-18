import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero } from '../components/Ui';
import { ContactForm } from '../components/Forms';
import { SITE } from '../data/site';
import { p } from '../data/images';

export default function Contact() {
  const map = `https://www.google.com/maps?q=${encodeURIComponent('8 Panama Estate, Trans Amadi, Port Harcourt, Rivers State, Nigeria')}&output=embed`;
  const items = [
    [MapPin, 'Visit us', SITE.address.join(', ')],
    [Phone, 'Call us', SITE.phone, `tel:${SITE.tel}`],
    [Mail, 'Email us', SITE.email, `mailto:${SITE.email}`],
    [Clock, 'Response time', 'We reply to every enquiry as soon as we can.'],
  ];
  return (
    <>
      <Seo title="Contact" path="/contact" description="Request a quote, ask a technical question or discuss a partnership with TEDAC Engineering Limited in Port Harcourt." />
      <PageHero crumb={[['Contact']]} title="Let’s talk about your project" text="We welcome enquiries, partnerships and opportunities to work together." image={p('contact-1')} />
      <section className="py-24">
        <div className="wrap grid gap-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map(([I, t, d, h]) => (
                <div key={t} className="flex gap-5 border-l-4 border-gold pl-5">
                  <I className="mt-1 shrink-0 text-gold-deep" size={22} />
                  <div><h2 className="text-base font-bold">{t}</h2>{h ? <a href={h} className="text-slate-600 hover:text-gold-deep">{d}</a> : <p className="text-slate-600">{d}</p>}</div>
                </div>
              ))}
            </div>
            <div className="brk mt-12"><iframe title="TEDAC office location" src={map} loading="lazy" className="h-72 w-full border-0" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
