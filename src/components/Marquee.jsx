const ITEMS = [
  'Gaming Ecosystem',
  'Indie Studio Acceleration',
  'Policy Navigation',
  'Game Distribution',
  'Corporate Partnerships',
  'Esports Infrastructure',
  'Studio Growth',
  'Creator Economy',
  'Government Interface',
  'Investment Readiness',
]

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="border-t border-b border-white/10 overflow-hidden py-4 bg-white/[0.02] relative z-10">
      <div className="flex gap-12 animate-marquee w-max">
        {loop.map((label, i) => (
          <span
            key={i}
            className="marquee-item font-mono text-[11px] tracking-[0.15em] uppercase text-brand-dim whitespace-nowrap flex items-center"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
