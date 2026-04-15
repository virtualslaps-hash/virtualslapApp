import SectionLabel from './SectionLabel.jsx'

const PHASES = [
  {
    num: 'Phase 01 · Now',
    title: 'Services & Advisory',
    desc:
      'Consulting for gaming startups, indie studios, corporates, and government bodies entering gaming. Founder-led dealmaking, operator execution.',
    active: true,
  },
  {
    num: 'Phase 02 · Parallel',
    title: 'VS Studios',
    desc:
      'Lean studio output. AI-tooled freemium mobile games on Play Store and iOS. Presence and learning, not just hit-chasing.',
  },
  {
    num: 'Phase 03 · Next',
    title: 'Indie Distribution',
    desc:
      'Indie devs build great games. We solve what comes after — publishing, marketing, monetization, discovery. AI-powered, high-margin.',
  },
  {
    num: 'Phase 04 · Building',
    title: 'Content Production',
    desc:
      'Gaming podcasts, streamer support, video, editorial. The media and narrative layer that serious ecosystems run on.',
  },
  {
    num: 'Phase 05 · Vision',
    title: 'Hacker House + Fund',
    desc:
      'Physical builder space in Hyderabad. Infrastructure for founders, streamers, pro players. A small fund backing studios we believe in.',
  },
]

export default function WhatWeAre() {
  return (
    <section className="py-[120px] px-12 max-md:py-20 max-md:px-6" id="what-we-are">
      <SectionLabel>001 — Identity</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        <em className="font-serif italic font-normal">Y Combinator's hacker house</em>
        <br />
        meets ESPN —<br />
        <span className="text-brand-dim">built for the next gaming frontier.</span>
      </p>

      <div className="reveal reveal-delay-2 grid grid-cols-5 border-t border-white/10 mt-20 max-md:grid-cols-2">
        {PHASES.map((p, i) => (
          <div
            key={p.num}
            className={[
              'p-10 px-8 relative overflow-hidden transition-colors duration-300 hover:bg-white/[0.03]',
              i < PHASES.length - 1 ? 'border-r border-white/10' : '',
              'max-md:nth-[5]:border-r-0',
            ].join(' ')}
          >
            <div className="font-mono text-[10px] tracking-[0.15em] text-brand-dim mb-6">
              {p.num}
            </div>
            {p.active && (
              <div className="absolute top-8 right-8 w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
            )}
            <div className="font-display font-bold text-[15px] tracking-[-0.01em] mb-3 leading-[1.3]">
              {p.title}
            </div>
            <div className="font-mono text-[11px] leading-[1.8] text-brand-dim font-light">
              {p.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
