import SectionLabel from './SectionLabel.jsx'

const NOT = [
  'A VC deploying into studios (that\'s Lumikai, BITKRAFT, Krafton)',
  'A game studio chasing hit titles',
  'A generalist accelerator that added a gaming track',
  'A policy shop that discovered gaming in 2023',
  'An agency that runs campaigns for gaming brands',
  'A coworking space with gaming aesthetics',
]

const IS = [
  'A gaming-native operator — services first, investment later',
  'The access layer: government, corporate, VC, and ecosystem in one room',
  'A studio that ships its own games while advising others',
  'The distribution and GTM infrastructure indie devs don\'t have',
  'The content and media voice that emerging gaming markets lack',
  'The early version of a gaming mafia',
]

export default function Positioning() {
  return (
    <section className="py-[120px] px-12 max-md:py-20 max-md:px-6">
      <SectionLabel><span className="text-brand-yellow">005</span> — Positioning</SectionLabel>
      <p className="big-statement reveal reveal-delay-1 font-display font-bold leading-[1.15] tracking-[-0.02em] max-w-[900px]">
        We occupy the gap<br />
        <em className="font-serif italic font-normal">nobody else</em>
        <br />
        <span className="text-brand-dim">is claiming.</span>
      </p>

      <div className="grid grid-cols-2 gap-20 mt-16 items-start max-md:grid-cols-1 max-md:gap-10">
        <div className="reveal reveal-delay-2">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-dim mb-6">
            Filed under "none of the above"
          </div>
          <ul className="not-list list-none">
            {NOT.map((t) => (
              <li
                key={t}
                className="font-mono text-[13px] leading-[1.7] py-4 border-b border-white/10 text-brand-dim flex items-center font-light"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal reveal-delay-3">
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-brand-dim mb-6">
            What we actually are
          </div>
          <ul className="is-list list-none">
            {IS.map((t) => (
              <li
                key={t}
                className="font-mono text-[13px] leading-[1.7] py-4 border-b border-white/10 text-white flex items-center font-light"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
