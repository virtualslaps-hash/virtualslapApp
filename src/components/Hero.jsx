export default function Hero() {
  return (
    <section className="hero min-h-screen flex flex-col justify-end px-12 pb-20 max-md:px-6 max-md:pb-[60px]">
      <div className="reveal eyebrow-line font-mono text-[11px] tracking-[0.15em] uppercase text-brand-dim mb-6 flex items-center gap-3">
        Hyderabad · Est. 2016 · Phase One Active
      </div>

      <h1 className="hero-headline reveal reveal-delay-1 font-display font-extrabold leading-[0.9] tracking-[-0.03em] uppercase mb-12">
        Gaming's<br />
        Next<br />
        <em className="font-serif italic font-normal normal-case tracking-[-0.02em]">
          Operating
        </em>
        <br />
        Layer
      </h1>

      <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start max-md:gap-6">
        <p className="reveal reveal-delay-2 max-w-[400px] font-mono text-[13px] leading-[1.8] text-brand-dim font-light">
          The capital is moving. Global studios are positioning.
          <br />
          Founders are shipping real games into a market
          <br />
          that hasn't had serious infrastructure — until now.
          <br />
          We are that infrastructure.
        </p>
        <div className="reveal reveal-delay-3 flex gap-12 shrink-0 max-md:gap-8">
          {[
            { num: '$1.5B', label: 'Market · Today' },
            { num: '17%', label: 'YoY Growth' },
            { num: '$7B+', label: 'Projected · 2030' },
          ].map((s) => (
            <div key={s.label} className="text-right">
              <span className="font-display font-extrabold text-[28px] tracking-[-0.03em] block">
                {s.num}
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-brand-dim">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
