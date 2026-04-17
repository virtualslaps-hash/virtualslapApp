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
    title: 'Indie Devs & Studios',
    desc:
      "Teams building real games who need help with everything after the build — distribution, discovery, monetization, community. That's our territory.",
    delay: 2,
  },
  {
    icon: '🎙️',
    title: 'Streamers & Podcasters',
    desc:
      "Gaming's voices — the streamers, podcasters, and video creators building audiences of their own. We amplify, collaborate, and build the media layer together.",
    delay: 3,
  },
  {
    icon: '✴️',
    title: 'Content Creators',
    desc:
      "Editorial writers, video essayists, and gaming journalists. The ones documenting the scene and shaping how it's understood. There's a home here for you too.",
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
    icon: '🏛️',
    title: 'Institutions & Corporates',
    desc:
      'Government bodies, academic institutions, and companies making real moves into gaming. When the work is serious, so is who you partner with.',
    delay: 3,
  },
]

export default function WhoWeServe() {
  return (
    <section className="pb-[120px] px-12 max-md:pb-20 max-md:px-6">
      <SectionLabel><span className="text-brand-yellow">003</span> — The People We Build With</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        <span className="text-brand-dim">If you're building,</span>
        <br />
        creating, or betting on gaming —
        <br />
        <em className="font-serif italic font-normal">you're one of us.</em>
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
