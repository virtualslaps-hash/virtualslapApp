import { useEffect, useRef } from 'react'

/* ---------- Animated ring canvas ---------- */
function RingCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let rings = []
    let dangerRing = null
    let frame = 0

    const W = canvas.width = canvas.offsetWidth
    const H = canvas.height = canvas.offsetHeight
    const cx = W / 2, cy = H / 2

    function spawnRing() {
      rings.push({ r: 10, maxR: Math.min(W, H) * 0.38, speed: 0.6 + Math.random() * 0.5, alpha: 1, lineWidth: 1.5 + Math.random() })
    }
    function spawnDanger() {
      const maxR = Math.min(W, H) * 0.32
      dangerRing = { r: maxR, maxR, speed: 0.55, alpha: 0.9 }
    }

    spawnRing()
    setTimeout(spawnDanger, 2200)

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Normal rings
      rings = rings.filter(ring => ring.alpha > 0.02)
      rings.forEach(ring => {
        ring.r += ring.speed
        if (ring.r >= ring.maxR) ring.alpha -= 0.04
        ctx.beginPath()
        ctx.arc(cx, cy, ring.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,255,255,${ring.alpha * 0.85})`
        ctx.lineWidth = ring.lineWidth
        ctx.stroke()
      })

      // Spawn new ring when last one fades
      if (rings.length === 0 || rings[rings.length - 1].r > 40) {
        if (rings.length < 3) spawnRing()
      }

      // Danger ring
      if (dangerRing) {
        dangerRing.r -= dangerRing.speed
        if (dangerRing.r <= 0) {
          dangerRing = null
          setTimeout(spawnDanger, 3000 + Math.random() * 2000)
        } else {
          ctx.beginPath()
          ctx.setLineDash([6, 6])
          ctx.arc(cx, cy, dangerRing.r, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255,65,65,${dangerRing.alpha})`
          ctx.lineWidth = 1.5
          ctx.stroke()
          ctx.setLineDash([])

          // × at centre
          const s = 7
          ctx.beginPath()
          ctx.moveTo(cx - s, cy - s); ctx.lineTo(cx + s, cy + s)
          ctx.moveTo(cx + s, cy - s); ctx.lineTo(cx - s, cy + s)
          ctx.strokeStyle = `rgba(255,65,65,${dangerRing.alpha * 0.7})`
          ctx.lineWidth = 1.2
          ctx.stroke()
        }
      }

      frame++
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

/* ---------- Rule card ---------- */
function RuleIcon({ type }) {
  // type: 'tap' | 'avoid' | 'collide'
  if (type === 'tap') {
    return (
      <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
        <circle cx="30" cy="30" r="18" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" />
        <circle cx="30" cy="30" r="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="30" cy="30" r="3" fill="white" fillOpacity="0.7" />
      </svg>
    )
  }
  if (type === 'avoid') {
    return (
      <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
        <circle cx="30" cy="30" r="18" stroke="rgb(255,65,65)" strokeWidth="1.5" strokeDasharray="5 5" strokeOpacity="0.9" />
        <line x1="23" y1="23" x2="37" y2="37" stroke="rgb(255,65,65)" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="37" y1="23" x2="23" y2="37" stroke="rgb(255,65,65)" strokeWidth="1.5" strokeOpacity="0.8" />
      </svg>
    )
  }
  if (type === 'collide') {
    return (
      <svg viewBox="0 0 60 60" className="w-10 h-10" fill="none">
        <circle cx="21" cy="30" r="13" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
        <circle cx="39" cy="30" r="13" stroke="white" strokeWidth="1.5" strokeOpacity="0.8" />
        <line x1="30" y1="18" x2="30" y2="42" stroke="rgb(255,65,65)" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />
      </svg>
    )
  }
}

/* ---------- Feature card ---------- */
function FeatureCard({ label, description, accent }) {
  return (
    <div className="border border-white/10 p-6 flex flex-col gap-3 hover:border-white/20 transition-colors duration-300">
      <div
        className="font-mono text-[11px] tracking-[0.15em] uppercase"
        style={{ color: accent || '#888880' }}
      >
        {label}
      </div>
      <p className="font-mono text-[13px] leading-relaxed text-[#c8c8c0]">
        {description}
      </p>
    </div>
  )
}

/* ---------- Page ---------- */
export default function StaticGame() {
  return (
    <main className="relative z-10 min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-12 pt-32 pb-20 max-md:px-6 text-center relative overflow-hidden">

        {/* Ring animation behind hero text */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <RingCanvas />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#888880] mb-6">
            VS Studios · Android
          </p>

          <h1 className="font-display font-extrabold text-[clamp(72px,18vw,180px)] leading-none tracking-[-0.04em] uppercase text-white mb-4">
            STATIC
          </h1>

          <p className="font-serif italic text-[clamp(18px,3vw,28px)] text-[#888880] tracking-[0.05em] mb-8">
            Tap to Survive
          </p>

          <p className="font-mono text-[13px] leading-[1.9] text-[#888880] max-w-[420px] mb-12">
            Rings expand. Time is short. Tap them before they collide —
            or it's over. A pure reflex game that gets faster, denser,
            and harder to breathe in.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.virtualslaps.staticgame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-mono text-[12px] font-medium tracking-[0.08em] uppercase px-8 py-4 no-underline transition-opacity duration-200 hover:opacity-85"
          >
            {/* Google Play icon */}
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.67-11.95L13.15 8.3 3.18 23.76zM20.49 10.6l-2.6-1.52-3.6 3.42 3.6 3.41 2.63-1.53a1.94 1.94 0 0 0 0-3.78zM3 1.06a1.93 1.93 0 0 0-.3 1.04v19.8c0 .37.1.72.3 1.04l.1.1 11.09-11.1v-.26L3.1.96 3 1.06zM13.15 15.7l3.69-3.69-12.67-7.4L13.15 15.7z" />
            </svg>
            Get it on Google Play
          </a>

          <p className="mt-5 font-mono text-[10px] tracking-[0.1em] uppercase text-[#444] ">
            Free · Android · v1.4
          </p>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-white/30" />
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-[#888880]">Scroll</span>
        </div>
      </section>

      {/* ── HOW TO PLAY ──────────────────────────────────── */}
      <section className="px-12 py-24 max-md:px-6 max-md:py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">

          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#888880] mb-4">
            How to Play
          </p>
          <h2 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-tight tracking-[-0.03em] uppercase mb-16 max-md:mb-10">
            Three rules.<br />
            <em className="font-serif italic font-normal normal-case tracking-normal text-[#888880]">No second chances.</em>
          </h2>

          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-6">
            {[
              {
                icon: 'tap',
                label: '01 — Tap',
                title: 'Tap white rings to score',
                desc: 'Each ring you tap earns a point. Bonus rings (double outline) score 3. Miss them and they keep expanding.',
              },
              {
                icon: 'avoid',
                label: '02 — Avoid',
                title: 'Never touch red rings',
                desc: 'Red dashed rings shrink toward zero. Tapping one ends your run instantly. Leave them alone.',
              },
              {
                icon: 'collide',
                label: '03 — Survive',
                title: 'Rings must not collide',
                desc: 'If any two rings touch, it\'s over. Ignore white rings long enough and they crowd each other out.',
              },
            ].map((rule) => (
              <div key={rule.label} className="flex flex-col gap-5">
                <RuleIcon type={rule.icon} />
                <div>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#888880] mb-2">{rule.label}</p>
                  <h3 className="font-display font-bold text-[16px] uppercase tracking-[-0.01em] text-white mb-3">{rule.title}</h3>
                  <p className="font-mono text-[12px] leading-relaxed text-[#888880]">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section className="px-12 py-24 max-md:px-6 max-md:py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto">

          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#888880] mb-4">
            Features
          </p>
          <h2 className="font-display font-extrabold text-[clamp(32px,5vw,56px)] leading-tight tracking-[-0.03em] uppercase mb-16 max-md:mb-10">
            Simple surface.<br />
            <em className="font-serif italic font-normal normal-case tracking-normal text-[#888880]">Deep chaos.</em>
          </h2>

          <div className="grid grid-cols-2 gap-px bg-white/10 max-md:grid-cols-1">
            {[
              {
                label: 'Infinite Stages',
                description: 'Starts calm. Rings get faster, closer together, and more unpredictable. There\'s no ceiling — just how far you can go.',
                accent: '#ffd232',
              },
              {
                label: 'Danger Rings',
                description: 'Red dashed rings shrink from full size to zero. They look like a tap — they\'re a trap. One mistake ends your run.',
                accent: 'rgb(255,65,65)',
              },
              {
                label: 'Bonus Rings',
                description: 'Rare double-outlined rings worth 3 points. They expand 40% faster than normal. High risk, high reward.',
                accent: '#ffd232',
              },
              {
                label: 'Global Leaderboard',
                description: 'Sign in with Google Play Games and compete on a worldwide leaderboard. See where you rank against everyone.',
                accent: '#4ade80',
              },
              {
                label: 'Per-Ring Speed',
                description: 'Every ring rolls its own speed. A thick outline means it\'s fast. A thin one gives you a fraction more time. Read the rings.',
                accent: '#888880',
              },
              {
                label: 'Burst Spawns',
                description: 'At higher stages, multiple rings spawn in rapid succession. The screen fills up. Clarity becomes a luxury.',
                accent: '#888880',
              },
            ].map((f) => (
              <div key={f.label} className="bg-black p-8 max-md:p-6">
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ─────────────────────────────────── */}
      <section className="px-12 py-28 max-md:px-6 max-md:py-20 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#888880] mb-6">
            Available now · Free
          </p>
          <h2 className="font-display font-extrabold text-[clamp(40px,8vw,96px)] leading-none tracking-[-0.04em] uppercase text-white mb-6">
            How far<br />can you go?
          </h2>
          <p className="font-mono text-[13px] leading-relaxed text-[#888880] mb-12 max-w-sm mx-auto">
            STATIC is free to play on Android. No ads, no paywalls.
            Just you, the rings, and the leaderboard.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.virtualslaps.staticgame"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-white text-white font-mono text-[12px] font-medium tracking-[0.08em] uppercase px-10 py-4 no-underline transition-all duration-200 hover:bg-white hover:text-black"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.67-11.95L13.15 8.3 3.18 23.76zM20.49 10.6l-2.6-1.52-3.6 3.42 3.6 3.41 2.63-1.53a1.94 1.94 0 0 0 0-3.78zM3 1.06a1.93 1.93 0 0 0-.3 1.04v19.8c0 .37.1.72.3 1.04l.1.1 11.09-11.1v-.26L3.1.96 3 1.06zM13.15 15.7l3.69-3.69-12.67-7.4L13.15 15.7z" />
            </svg>
            Download on Google Play
          </a>

          <div className="mt-16 pt-8 border-t border-white/10 flex justify-center gap-8 flex-wrap">
            <a href="/privacy" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#888880] hover:text-white transition-colors duration-200 no-underline">Privacy Policy</a>
            <a href="/terms" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#888880] hover:text-white transition-colors duration-200 no-underline">Terms of Service</a>
            <a href="/" className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#888880] hover:text-white transition-colors duration-200 no-underline">← virtualslaps.com</a>
          </div>
        </div>
      </section>

    </main>
  )
}
