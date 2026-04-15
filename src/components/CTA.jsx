export default function CTA() {
  return (
    <section className="py-[160px] px-12 text-center relative overflow-hidden max-md:py-[100px] max-md:px-6" id="contact">
      <div className="cta-bg-text absolute inset-0 flex items-center justify-center font-display font-extrabold text-white/[0.02] tracking-[-0.05em] uppercase pointer-events-none leading-none select-none">
        VS
      </div>
      <h2 className="cta-headline font-display font-extrabold tracking-[-0.03em] uppercase leading-[0.95] mb-8 relative z-[1]">
        Let's Build<br />
        <em className="font-serif italic font-normal normal-case">Together</em>
      </h2>
      <p className="font-mono text-[13px] text-brand-dim mb-14 font-light relative z-[1]">
        Whether you're a founder, a studio, a government body, or a fund —<br />
        if gaming is serious for you, this is where the conversation starts.
      </p>
      <div className="flex gap-4 justify-center items-center relative z-[1] max-md:flex-col">
        <a
          href="mailto:hello@virtualslaps.com"
          className="font-mono text-[12px] tracking-[0.08em] uppercase font-medium text-black bg-white px-10 py-4 no-underline transition-opacity duration-200 hover:opacity-85 inline-block"
        >
          Start a Conversation
        </a>
        <a
          href="#what-we-are"
          className="font-mono text-[12px] tracking-[0.08em] uppercase font-normal text-brand-dim border border-white/10 px-10 py-4 no-underline transition-[border-color,color] duration-200 hover:border-white/25 hover:text-white inline-block"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
