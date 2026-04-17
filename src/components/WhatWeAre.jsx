import SectionLabel from './SectionLabel.jsx'

const PHASES = [
  {
    label: 'Capability',
    num: '01',
    title: 'Advisory & Dealmaking',
    desc:
      'Operator-led consulting for gaming founders, studios, corporates, and government bodies. Strategy, partnerships, regulatory navigation, and the introductions that move projects forward.',
  },
  {
    label: 'Capability',
    num: '02',
    title: 'Studio Output',
    desc:
      'Our own games, shipped under the Virtual Slaps Studios banner. AI-native production, mobile-first, experimental. The studio exists so we operate in the same reality as the people we advise.',
  },
  {
    label: 'Capability',
    num: '03',
    title: 'Distribution & GTM',
    desc:
      'Everything that happens after a game is built — publishing, ASO, community, monetization, marketing infrastructure. The layer indie developers and small studios are structurally missing.',
  },
  {
    label: 'Capability',
    num: '04',
    title: 'Content & Media',
    desc:
      "Gaming podcasts, editorial, video, and creator collaborations. Serious ecosystems have a media layer. We're building ours — and helping others build theirs.",
  },
  {
    label: 'Capability',
    num: '05',
    title: 'Builder Space & Capital',
    desc:
      'A physical home for founders, creators, and operators in gaming — paired with a small, high-conviction capital vehicle for the studios we believe in. Infrastructure, not just a cheque.',
  },
]

export default function WhatWeAre() {
  return (
    <section className="py-[120px] px-12 max-md:py-20 max-md:px-6" id="what-we-are">
      <SectionLabel><span className="text-brand-yellow">001</span> — What We Do</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        A studio. A network.
        <br />
        <em className="font-serif italic font-normal">A home</em> for gaming —
        <br />
        <span className="text-brand-dim">advisory, studio, content, distribution, and capital, under one roof.</span>
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
            <div className="font-mono text-[10px] tracking-[0.15em] mb-6">
              <span className="text-brand-dim">{p.label} · </span>
              <span className="text-brand-yellow">{p.num}</span>
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
