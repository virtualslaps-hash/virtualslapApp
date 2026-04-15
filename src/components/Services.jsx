import SectionLabel from './SectionLabel.jsx'

const SERVICES = [
  {
    num: '01',
    title: 'Ecosystem Architecture',
    desc:
      'You want to enter a gaming market at inflection — as a corporate, a fund, or a government body. You need someone who knows which doors open, which relationships matter, and what the actual landscape looks like on the ground in 2025. We design gaming programs, incubation mandates, and market-entry strategies built on how ecosystems actually work, not how reports describe them.',
    tag: 'Corporates · Govt Bodies · Investors',
  },
  {
    num: '02',
    title: 'Founder-to-Founder Advisory',
    desc:
      "Gaming founders don't need another consultant handing them a deck. They need an operator who's navigated the same rooms — government, corporate, VC, media. We get on the field: fundraising strategy, partnership structuring, regulatory navigation, and introductions that only come from a decade of ecosystem work.",
    tag: 'Gaming Startups · Indie Studios',
  },
  {
    num: '03',
    title: 'Policy & Government Interface',
    desc:
      "Gaming policy is moving fast and most players don't have anyone who speaks both the government's language and the industry's. We do. Incubation design, ministry engagement, compliance frameworks, public-private gaming programs. We've sat on both sides of that table — and we know what gets done.",
    tag: 'Policy · Incubation Design · Compliance',
  },
  {
    num: '04',
    title: 'Distribution & GTM for Indie Devs',
    desc:
      'Indie devs are building genuinely good games. The gap is everything after the build — store listing strategy, ASO, community seeding, influencer pipelines, monetization architecture, publisher conversations. We close that gap. AI-powered where possible, hands-on where it matters.',
    tag: 'Indie Devs · Mobile-First Studios',
  },
]

export default function Services() {
  return (
    <section className="pb-[120px] px-12 max-md:pb-20 max-md:px-6" id="services">
      <SectionLabel>002 — Services</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        Phase One is<br />
        <em className="font-serif italic font-normal">services-first.</em>
        <br />
        <span className="text-brand-dim">Here's what that means.</span>
      </p>

      <div className="reveal reveal-delay-2 grid grid-cols-2 gap-px bg-white/10 border border-white/10 mt-16 max-md:grid-cols-1">
        {SERVICES.map((s) => (
          <div
            key={s.num}
            className="bg-black p-12 relative overflow-hidden transition-colors duration-300 hover:bg-white/[0.03]"
          >
            <div className="font-mono text-[48px] font-light text-white/[0.06] absolute top-6 right-8 leading-none">
              {s.num}
            </div>
            <div className="font-display font-bold text-[22px] tracking-[-0.02em] mb-4 leading-[1.2]">
              {s.title}
            </div>
            <div className="font-mono text-[11.5px] leading-[1.95] text-brand-dim font-light max-w-[420px]">
              {s.desc}
            </div>
            <span className="inline-block mt-6 font-mono text-[10px] tracking-[0.12em] uppercase text-brand-dim border border-white/10 px-3 py-[6px]">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
