import { useEffect, useRef } from 'react'

const DOT_SIZE = 3
const GRID = 20
const OPACITIES = [0.04, 0.04, 0.05, 0.06, 0.07, 0.1, 0.12, 0.14, 0.16, 0.2]

function rand(x, y) {
  const PHI = 1.61803398874989484820459
  const d = Math.sqrt((x * PHI - y) ** 2 + (y * PHI - x) ** 2)
  return Math.abs(Math.sin(d * 0.5) * x) % 1
}

export default function DotCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = 0
    let H = 0
    let time = 0
    let raf = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const cx = Math.floor(W / 2 / GRID)
      const cy = Math.floor(H / 2 / GRID)
      const cols = Math.ceil(W / GRID) + 1
      const rows = Math.ceil(H / GRID) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const r = rand(i, j)
          const freq = 5
          const showOffset = r
          const randVal = rand(
            i * Math.floor(time / freq + showOffset + freq),
            j * Math.floor(time / freq + showOffset + freq)
          )
          let opacity = OPACITIES[Math.floor(randVal * 10)]

          const distFromCenter = Math.sqrt((cx - i) ** 2 + (cy - j) ** 2)
          const timingOffset = distFromCenter * 0.01 + r * 0.15
          const t = time * 0.3
          opacity *= t > timingOffset ? Math.min((t - timingOffset) * 5 + 0.5, 1) : 0

          if (opacity > 0.01) {
            ctx.globalAlpha = opacity
            ctx.fillStyle = '#ffffff'
            ctx.fillRect(
              i * GRID - (W % GRID) / 2,
              j * GRID - (H % GRID) / 2,
              DOT_SIZE,
              DOT_SIZE
            )
          }
        }
      }

      time += 0.016
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="dot-canvas" ref={canvasRef} />
}
