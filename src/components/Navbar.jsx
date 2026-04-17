import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={[
        'fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-6',
        'border-b border-transparent transition-[border-color,background] duration-300',
        scrolled ? 'bg-black/80 backdrop-blur-md !border-white/10' : '',
        'max-md:px-6 max-md:py-5',
      ].join(' ')}
    >
      <a
        href="#"
        className="font-display font-extrabold text-[18px] tracking-[-0.02em] text-white flex items-center gap-[10px] no-underline"
      >
        <div className="w-7 h-7 border-[1.5px] border-brand-yellow text-brand-yellow rounded-[4px] flex items-center justify-center text-[11px] font-extrabold">
          VS
        </div>
        Virtual Slaps
      </a>

      <ul className="flex items-center gap-10 list-none max-md:hidden">
        {[
          { href: '#what-we-are', label: 'What We Do' },
          { href: '#services', label: 'Services' },
          { href: '#market', label: 'Market' },
          { href: '#contact', label: 'Contact' },
        ].map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[12px] font-normal tracking-[0.05em] uppercase text-brand-dim no-underline transition-colors duration-200 hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="font-mono text-[12px] font-medium tracking-[0.05em] uppercase text-black bg-white px-5 py-[10px] no-underline transition-opacity duration-200 hover:opacity-85 max-md:hidden"
      >
        Work With Us
      </a>
    </nav>
  )
}
