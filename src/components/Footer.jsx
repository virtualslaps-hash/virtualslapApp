export default function Footer() {
  return (
    <footer className="border-t border-white/10 p-12 flex items-center justify-between bg-white/[0.01] max-md:flex-col max-md:gap-6 max-md:text-center max-md:p-8">
      <div className="font-mono text-[11px] text-brand-dim font-light">
        © 2025 Virtual Slaps Communications Pvt Ltd · CIN: U74999DL2016PTC305818
        <br />
        Hyderabad, India · MSME Registered · UDYAM-DL-11-0065131
      </div>
      <ul className="flex gap-8 list-none max-md:flex-wrap max-md:justify-center">
        {[
          { href: '#what-we-are', label: 'About' },
          { href: '#services', label: 'Services' },
          { href: '#market', label: 'Market' },
          { href: '#contact', label: 'Contact' },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] tracking-[0.08em] uppercase text-brand-dim no-underline transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="font-mono text-[11px] text-white/10 font-light">Hyderabad · 2025</div>
    </footer>
  )
}
