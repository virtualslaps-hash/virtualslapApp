import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const pointInRect = (x, y, r) =>
      x >= r.left && x <= r.right && y >= r.top && y <= r.bottom

    const isOverLight = (x, y) => {
      const lights = document.querySelectorAll('[data-cursor="light"]')
      for (const el of lights) {
        if (pointInRect(x, y, el.getBoundingClientRect())) return true
      }
      return false
    }

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      dot.style.left = x + 'px'
      dot.style.top = y + 'px'
      ring.style.left = x + 'px'
      ring.style.top = y + 'px'

      const onLight = isOverLight(x, y)
      dot.classList.toggle('on-light', onLight)
      ring.classList.toggle('on-light', onLight)
    }

    const onEnter = () => {
      dot.classList.add('cursor--hover')
      ring.classList.add('cursor--hover')
    }
    const onLeave = () => {
      dot.classList.remove('cursor--hover')
      ring.classList.remove('cursor--hover')
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
