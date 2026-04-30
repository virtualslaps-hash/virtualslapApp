export default function PrivacyPolicy() {
  return (
    <main className="relative z-10 min-h-screen px-12 pt-40 pb-24 max-md:px-6 max-md:pt-32 max-md:pb-16">
      <div className="max-w-2xl mx-auto">

        {/* Eyebrow */}
        <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#888880] mb-6 pt-4">
          Legal · Privacy
        </p>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-[12px] text-[#888880] mb-12 border-b border-white/10 pb-8">
          VS Studios — STATIC&nbsp;&nbsp;·&nbsp;&nbsp;Last updated: 30 April 2026
        </p>

        {/* Sections */}
        <div className="space-y-10 font-mono text-[14px] leading-relaxed text-[#c8c8c0]">

          <section>
            <h2 className="text-white text-[13px] tracking-[0.1em] uppercase mb-3 font-medium">
              Data We Collect
            </h2>
            <p>
              STATIC does not collect, store, or transmit any personal information.
              The game stores only your high score locally on your device using
              standard Android storage. This data never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[13px] tracking-[0.1em] uppercase mb-3 font-medium">
              Third-Party Services
            </h2>
            <p>
              STATIC does not use any third-party analytics, advertising SDKs,
              or tracking services in its current version.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[13px] tracking-[0.1em] uppercase mb-3 font-medium">
              Children's Privacy
            </h2>
            <p>
              STATIC does not knowingly collect data from any users, including
              children under the age of 13.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[13px] tracking-[0.1em] uppercase mb-3 font-medium">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy if the app's data practices change.
              We will notify users through a Play Store update notice.
            </p>
          </section>

          <section>
            <h2 className="text-white text-[13px] tracking-[0.1em] uppercase mb-3 font-medium">
              Contact
            </h2>
            <p>
              For questions about this privacy policy, contact us at{' '}
              <a
                href="mailto:virtualslaps@virtualslaps.com"
                className="text-white underline underline-offset-4 hover:text-[#D4A017] transition-colors duration-200"
              >
                virtualslaps@virtualslaps.com
              </a>
            </p>
          </section>

        </div>

        {/* Footer note */}
        <p className="mt-16 pt-8 border-t border-white/10 font-mono text-[11px] text-[#888880]">
          VS Studios is a division of Virtual Slaps Communications Pvt Ltd, Hyderabad, India.
        </p>

        {/* Back link */}
        <a
          href="/"
          className="inline-block mt-8 font-mono text-[11px] tracking-[0.1em] uppercase text-[#888880] hover:text-white transition-colors duration-200 no-underline"
        >
          ← Back to virtualslaps.com
        </a>

      </div>
    </main>
  )
}
