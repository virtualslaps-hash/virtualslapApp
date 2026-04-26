const SOCIALS = [
  {
    href: 'https://www.linkedin.com/company/virtualslaps/',
    label: 'LinkedIn',
    path: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    ),
  },
  {
    href: 'https://www.facebook.com/officialvirtualslaps',
    label: 'Facebook',
    path: (
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    ),
  },
  {
    href: 'https://x.com/VirtualSlaps',
    label: 'X',
    path: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    ),
  },
  {
    href: 'https://www.instagram.com/virtualslaps',
    label: 'Instagram',
    path: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 0 1-1.38-.9 3.71 3.71 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.86 5.86 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    ),
  },
  {
    href: 'https://www.youtube.com/@virtualslaps',
    label: 'YouTube',
    path: (
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.13-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.37.5A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.13 2.14c1.87.5 9.37.5 9.37.5s7.5 0 9.37-.5a3.02 3.02 0 0 0 2.13-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.6 15.6V8.4l6.24 3.6-6.24 3.6z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-12 pt-12 pb-8 bg-white/[0.01] max-md:px-8 max-md:pt-8 max-md:pb-6">
      <div className="flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center">
        <div className="font-mono text-[11px] text-brand-dim font-light">
          © 2026 Virtual Slaps Communications Pvt Ltd · CIN: U74999DL2016PTC305818
          <br />
          India · MSME Registered · UDYAM-DL-11-0065131
        </div>
        {/* <ul className="flex gap-8 list-none max-md:flex-wrap max-md:justify-center">
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
        </ul> */}
        <a
          href="#"
          className="flex items-center no-underline"
        >
          <img
            src="/assets/vs_logo_full.png"
            alt="Virtual Slaps · Studio . Foundry . Capital"
            className="h-24 w-auto"
          />
        </a>
      </div>

      <div className="mt-8 pt-6 flex items-center justify-center gap-6">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-brand-dim transition-colors duration-200 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {s.path}
            </svg>
          </a>
        ))}
      </div>
    </footer>
  )
}
