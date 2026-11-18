import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';
import { NAV, SITE } from '../data/site';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  const dark = solid || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${dark ? 'bg-white shadow-lg shadow-navy/10' : 'bg-transparent'}`}>
      <div className={`hidden overflow-hidden bg-navy-950 text-xs text-white/75 transition-all duration-300 lg:block ${solid ? 'max-h-0' : 'max-h-10'}`}>
        <div className="wrap flex h-10 items-center justify-between">
          <span className="flex items-center gap-2"><MapPin size={13} className="text-gold" /> {SITE.address[0]}, {SITE.address[1]}</span>
          <a href={`tel:${SITE.tel}`} className="flex items-center gap-2 hover:text-gold"><Phone size={13} className="text-gold" /> {SITE.phone}</a>
        </div>
      </div>
      <div className="wrap flex h-20 items-center justify-between">
        <Link to="/" aria-label="TEDAC Engineering home"><Logo light={!dark} /></Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `text-sm font-medium transition-colors hover:text-gold ${isActive ? 'text-gold' : dark ? 'text-navy' : 'text-white'}`}>{n.label}</NavLink>
          ))}
          <Link to="/contact" className="btn-gold !py-2.5">Request a quote</Link>
        </nav>
        <button className={`lg:hidden ${dark ? 'text-navy' : 'text-white'}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X size={28} /> : <Menu size={28} />}</button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white pb-6 lg:hidden">
          <div className="wrap">
            {[{ to: '/', label: 'Home' }, ...NAV, { to: '/partners', label: 'Partners' }, { to: '/policies', label: 'HSE & policies' }].map((n) => (
              <NavLink key={n.to} to={n.to} className="block border-b border-slate-100 py-3.5 font-medium text-navy">{n.label}</NavLink>
            ))}
            <Link to="/contact" className="btn-navy mt-5 w-full">Request a quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
