import SectionLabel from './SectionLabel.jsx'

const CARDS = [
  {
    icon: '⚡',
    title: 'Gaming Founders',
    desc:
      "Pre-seed to Series A gaming startups that need an operator's perspective, not a consultant's deck. We've been in those rooms.",
    delay: 1,
  },
  {
    icon: '🎮',
    title: 'Indie Studios',
    desc:
      "Teams building real games that struggle with everything after the build — distribution, discovery, monetization, compliance. That's our territory.",
    delay: 2,
  },
  {
    icon: '🏛️',
    title: 'Government Bodies',
    desc:
      'Public institutions designing gaming programs need partners who understand both the policy layer and the ecosystem on the ground. We do.',
    delay: 3,
  },
  {
    icon: '🏢',
    title: 'Corporates Entering Gaming',
    desc:
      'Established companies making strategic moves into gaming need a guide who operates in the space — not a generalist who read the market report.',
    delay: 1,
  },
  {
    icon: '📈',
    title: 'Gaming Investors',
    desc:
      'Funds deploying into emerging gaming markets need ecosystem intelligence, deal sourcing, and a network that took a decade to build. We share access.',
    delay: 2,
  },
  {
    icon: '🌐',
    title: 'Global Studios, Market Entry',
    desc:
      "International studios entering new markets need a local operator with real relationships across government, platforms, and the creator economy. That's us.",
    delay: 3,
  },
]

export default function WhoWeServe() {
  return (
    <section className="pb-[120px] px-12 max-md:pb-20 max-md:px-6">
      <SectionLabel>003 — Clients</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        <span className="text-brand-dim">We work with whoever</span>
        <br />
        is <em className="font-serif italic font-normal">serious</em> about gaming.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-16 max-md:grid-cols-1">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className={`reveal reveal-delay-${c.delay} p-10 border border-white/10 relative transition-colors duration-300 hover:border-white/25`}
          >
            <span className="text-[28px] mb-5 block">{c.icon}</span>
            <div className="font-display font-bold text-[18px] tracking-[-0.01em] mb-3">
              {c.title}
            </div>
            <div className="font-mono text-[12px] leading-[1.8] text-brand-dim font-light">
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
