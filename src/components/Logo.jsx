export default function Logo({ light = true }) {
  return (
    <span className="flex items-center gap-3">
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <path d="M2 4h20v6h-6.500v26h-7V10H2z" fill={light ? '#fff' : '#13305E'} />
        <path d="M20 4h18v6H27v6h9v6h-9v6h11v6H20z" fill="#E8A90E" />
      </svg>
      <span className="leading-none">
        <b className={`block font-sans text-2xl font-extrabold tracking-[.18em] ${light ? 'text-white' : 'text-navy'}`}>TEDAC</b>
        <span className="mt-1 block text-[9px] font-medium tracking-[.32em] text-gold">ENGINEERING LIMITED</span>
      </span>
    </span>
  );
}
