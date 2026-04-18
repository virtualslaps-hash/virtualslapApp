import SectionLabel from './SectionLabel.jsx'

const NUMBERS = [
  {
    num: '$1.5B',
    label: 'Market Size · Now',
    sub: 'The non-RMG gaming market in South Asia, growing at 17% YoY. Capital-light, mobile-first, and severely underserved on infrastructure, distribution, and policy support.',
  },
  {
    num: '17%',
    label: 'Annual Growth Rate',
    sub: 'Consistent compound growth driven by a mobile-first population, rising purchasing power, and maturing payment rails. The curve is still early.',
  },
  {
    num: '$7B+',
    label: 'Projected · 2030',
    sub: "Global gaming VCs are deploying here. The capital has arrived. The operating infrastructure — the layer that makes markets functional — hasn't. That's the gap we occupy.",
  },
]

export default function Market() {
  return (
    <section data-cursor="light" className="bg-white text-black py-[120px] px-12 max-md:py-20 max-md:px-6" id="market">
      <SectionLabel onLight><span className="text-[#B8860B]">004</span> — Why Now</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px] text-black">
        One of the largest<br />
        <em className="font-serif italic font-normal">underbuilt</em> gaming<br />
        <span className="text-black/35">markets on earth.</span>
      </p>

      <div className="reveal reveal-delay-2 grid grid-cols-3 border border-black/10 mt-20 max-md:grid-cols-1">
        {NUMBERS.map((n, i) => (
          <div
            key={n.label}
            className={[
              'p-12',
              i < NUMBERS.length - 1 ? 'border-r border-black/10 max-md:border-r-0 max-md:border-b' : '',
            ].join(' ')}
          >
            <span className="font-display font-extrabold text-[56px] tracking-[-0.04em] leading-none text-black block mb-2">
              {n.num}
            </span>
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-black/40">
              {n.label}
            </span>
            <p className="font-mono text-[12px] leading-[1.7] text-black/50 mt-4 font-light">
              {n.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
