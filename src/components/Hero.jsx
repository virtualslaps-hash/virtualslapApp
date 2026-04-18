import SlapSlay from './SlapSlay.jsx'

export default function Hero() {
  return (
    <section className="hero min-h-screen flex flex-col justify-end px-12 pb-20 max-md:px-6 max-md:pb-[60px]">
      <h1 className="hero-headline reveal reveal-delay-1 font-display font-extrabold leading-[0.9] tracking-[-0.03em] uppercase mb-12">
        Build<br />
        to<br />
        <em className="font-serif italic font-normal normal-case tracking-[-0.02em]">
          <SlapSlay />
        </em>
      </h1>

      <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start max-md:gap-6">
        <p className="reveal reveal-delay-2 max-w-[400px] font-mono text-[13px] leading-[1.8] text-brand-dim font-light">
          A studio. A network. A home for gaming.
          <br />
          Built by gaming people, for gaming people —
          <br />
          founders, indie devs, streamers, podcasters, creators,
          and the institutions shaping what's next.
          <br />
          In this together, from day one.
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
