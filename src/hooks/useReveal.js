import { useEffect } from 'react'

/**
 * Adds the `visible` class to any `.reveal` element when it enters the viewport.
 * Also immediately reveals hero elements on mount so nothing pops in late.
 */
export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    revealEls.forEach((el) => observer.observe(el))

    // Reveal hero content immediately
    document
      .querySelectorAll('.hero .reveal')
      .forEach((el) => el.classList.add('visible'))

    return () => observer.disconnect()
  }, [])
}
