export default function SectionLabel({ children, onLight = false, className = '' }) {
  return (
    <div
      className={[
        'section-label reveal font-mono text-[10px] tracking-[0.2em] uppercase mb-16 flex items-center gap-4',
        onLight ? 'on-light text-black/35' : 'text-brand-dim',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}
