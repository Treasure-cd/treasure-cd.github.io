import { useEffect, useRef, useState } from 'react'

const MOUNTAIN_PATH =
  'M0,160 L0,120 L40,95 L78,132 L110,70 L150,110 L190,60 L225,105 ' +
  'L260,40 L300,90 L340,65 L378,115 L420,80 L460,125 L505,55 L545,100 ' +
  'L580,72 L620,118 L660,90 L700,130 L720,110 L760,140 L800,160 L0,160 Z';


const CLOUDS = [
  { id: 'c1', top: '18%', scale: 1,    duration: 70, delay: 0,   d: 'M10,20 Q18,4 34,10 Q46,-2 58,10 Q74,6 76,22 Q78,34 62,34 L18,34 Q6,34 10,20 Z' },
  { id: 'c2', top: '32%', scale: 0.75, duration: 90, delay: -20, d: 'M8,18 Q14,6 28,9 Q38,0 50,9 Q62,5 64,18 Q66,28 52,28 L16,28 Q4,28 8,18 Z' },
  { id: 'c3', top: '10%', scale: 0.6,  duration: 60, delay: -45, d: 'M6,16 Q12,4 24,8 Q32,-1 42,8 Q52,4 54,16 Q55,24 44,24 L14,24 Q3,24 6,16 Z' },
  { id: 'c4', top: '26%', scale: 1.15, duration: 100, delay: -65,d: 'M12,22 Q20,4 38,11 Q52,-3 66,11 Q82,7 84,24 Q86,38 68,38 L20,38 Q4,38 12,22 Z' },
]

export default function SkyBackdrop() {
  const [drawn, setDrawn] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    // trigger the self-draw shortly after mount rather than on scroll —
    // this sits in the hero, which is visible immediately
    const t = setTimeout(() => setDrawn(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* clouds — drift left to right, staggered speeds/starts so they never sync up */}
      {CLOUDS.map((c) => (
        <svg
          key={c.id}
          viewBox="0 0 90 40"
          className="absolute opacity-0 blur-[1px]"
          style={{
            top: c.top,
            left: '-15%',
            width: `${140 * c.scale}px`,
            fill: 'var(--color-sky-cloud, #b8d4f0)',
            animation: `sky-drift ${c.duration}s linear ${c.delay}s infinite, sky-cloud-in 1.2s ease forwards ${1.4 + c.delay * -0.01}s`,
          }}
        >
          <path d={c.d} />
        </svg>
      ))}

      {/* mountain silhouette — draws itself on with a stroke reveal, then fills */}
      <svg
        viewBox="0 0 800 160"
        preserveAspectRatio="xMidYMax slice"
        className="absolute bottom-0 left-0 w-full"
        style={{ height: '38%' }}
      >
        <path
          d={MOUNTAIN_PATH}
          fill="var(--color-sky-mountain, #8ab3e6)"
          stroke="var(--color-sky-mountain, #8ab3e6)"
          strokeWidth="1"
          style={{
            strokeDasharray: 2400,
            strokeDashoffset: drawn ? 0 : 2400,
            fillOpacity: drawn ? 1 : 0,
            transition: 'stroke-dashoffset 1.6s cubic-bezier(0.4,0,0.2,1), fill-opacity 1s ease 1s',
          }}
        />
      </svg>

      <style>{`
        @keyframes sky-drift {
          from { transform: translateX(0); }
          to   { transform: translateX(160vw); }
        }
        @keyframes sky-cloud-in {
          from { opacity: 0; }
          to   { opacity: 0.9; }
        }
        @media (prefers-reduced-motion: reduce) {
          svg[style*="sky-drift"] { animation: none !important; opacity: 0.9 !important; }
        }
      `}</style>
    </div>
  )
}