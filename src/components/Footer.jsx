import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Linkedin, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';
import { NAV, SITE, SERVICES } from '../data/site';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="pipe" aria-hidden="true" />
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">A multidisciplinary engineering and technical solutions provider for the energy and industrial sectors, supporting clients from concept through execution.</p>
          <div className="mt-6 flex gap-3">
            {[[Linkedin, SITE.social.linkedin, 'LinkedIn'], [Facebook, SITE.social.facebook, 'Facebook'], [Youtube, SITE.social.youtube, 'YouTube']].map(([I, h, l]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-gold hover:bg-gold hover:text-navy"><I size={18} /></a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="mb-4 text-sm font-bold text-white">Company</h3>
          {[{ to: '/', label: 'Home' }, ...NAV, { to: '/partners', label: 'Partners' }, { to: '/policies', label: 'HSE & policies' }].map((n) => <Link key={n.to} to={n.to} className="block py-1.5 text-sm hover:text-gold">{n.label}</Link>)}
        </div>
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-sm font-bold text-white">Services</h3>
          {SERVICES.slice(0, 6).map((s) => <Link key={s.slug} to={`/services/${s.slug}`} className="block py-1.5 text-sm hover:text-gold">{s.title}</Link>)}
          <Link to="/services" className="block py-1.5 text-sm font-semibold text-gold">All services</Link>
        </div>
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-sm font-bold text-white">Contact</h3>
          <p className="flex gap-3 text-sm"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>{SITE.address.join(', ')}</span></p>
          <a href={`tel:${SITE.tel}`} className="mt-3 flex gap-3 text-sm hover:text-gold"><Phone size={16} className="shrink-0 text-gold" />{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`} className="mt-3 flex gap-3 text-sm hover:text-gold"><Mail size={16} className="shrink-0 text-gold" />{SITE.email}</a>
        </div>
      </div>
      {/* Drawing title block */}
      <div className="wrap pb-8">
        <div className="grid border border-white/15 font-mono text-[11px] text-white/55 sm:grid-cols-4">
          {[['Drawn for', 'Energy and industrial clients'], ['Company', SITE.name], ['Website', 'tedacengineering.com'], ['Rev', `© ${new Date().getFullYear()} All rights reserved`]].map(([a, b]) => (
            <div key={a} className="border-b border-white/15 p-3 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><span className="block text-gold/80">{a}</span>{b}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}
