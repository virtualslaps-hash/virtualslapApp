import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      const x = e.clientX + 'px'
      const y = e.clientY + 'px'
      dot.style.left = x
      dot.style.top = y
      ring.style.left = x
      ring.style.top = y
    }

    const onEnter = () => {
      dot.style.width = '14px'
      dot.style.height = '14px'
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'rgba(255,255,255,0.6)'
    }
    const onLeave = () => {
      dot.style.width = '8px'
      dot.style.height = '8px'
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(255,255,255,0.4)'
    }

    document.addEventListener('mousemove', onMove)
    const interactive = document.querySelectorAll('a, button')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
