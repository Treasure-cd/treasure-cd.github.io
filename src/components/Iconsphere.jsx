import { useEffect, useRef } from 'react'
// Expanded tech and hobby icons
import { 
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpo, SiVuedotjs, SiNextdotjs, SiJavascript, 
  SiPython, SiFigma, SiGithub, SiDocker, 
  SiHtml5, SiCss, SiVite, SiSupabase
} from 'react-icons/si'
import { 
  FaBook, FaHeadphones, FaGamepad, FaFilm, 
  FaMugHot, FaCode, FaMusic, FaCamera, 
  FaPlane, FaTerminal, FaKeyboard 
} from 'react-icons/fa6'

const ICONS = [
  { Icon: SiReact,       tilt: -8  },
  { Icon: SiTypescript,  tilt: 6   },
  { Icon: SiTailwindcss, tilt: -4  },
  { Icon: SiNodedotjs,   tilt: 10  },
  { Icon: SiExpo,        tilt: -6  },
  { Icon: SiVuedotjs,    tilt: 5   },
  { Icon: SiNextdotjs,   tilt: -9  },
  { Icon: SiJavascript,  tilt: 7   },
  { Icon: SiPython,      tilt: -5  },
  { Icon: SiFigma,       tilt: 12  },
  { Icon: SiGithub,      tilt: -10 },
  { Icon: SiDocker,      tilt: 8   },
  { Icon: SiHtml5,       tilt: -3  },
  { Icon: SiCss,        tilt: 4   },
  { Icon: SiVite,        tilt: -7  },
  { Icon: SiSupabase,    tilt: 9   },
  { Icon: FaBook,        tilt: 7   },
  { Icon: FaHeadphones,  tilt: -5  },
  { Icon: FaGamepad,     tilt: 9   },
  { Icon: FaFilm,        tilt: -7  },
  { Icon: FaMugHot,      tilt: 4   },
  { Icon: FaCode,        tilt: -12 },
  { Icon: FaMusic,       tilt: 6   },
  { Icon: FaCamera,      tilt: -8  },
  { Icon: FaPlane,       tilt: 11  },
  { Icon: FaTerminal,    tilt: -4  },
  { Icon: FaKeyboard,    tilt: 5   },
]

// Increased radius to accommodate the massive new list
const RADIUS = 180       
const MAX_SCALE = 1.3    
const MIN_SCALE = 0.6    
const HOVER_RADIUS = 90  

function layout(n) {
  const golden = Math.PI * (3 - Math.sqrt(5))
  return Array.from({ length: n }, (_, i) => {
    const r = RADIUS * Math.sqrt(i / n)
    const a = i * golden
    return {
      x: r * Math.cos(a),
      y: r * Math.sin(a),
      distRatio: r / RADIUS,
    }
  })
}

const MUTED = { r: 140, g: 138, b: 134 } 
const BLUE  = { r: 59,  g: 130, b: 246 } 

function mixColor(t) {
  const m = (k) => Math.round(MUTED[k] + (BLUE[k] - MUTED[k]) * t)
  return `rgb(${m('r')}, ${m('g')}, ${m('b')})`
}

export default function IconSphere() {
  const wrapRef = useRef(null)
  const itemRefs = useRef([])
  const positions = useRef(layout(ICONS.length))

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return

    const handleMove = (e) => {
      const rect = wrap.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top

      itemRefs.current.forEach((el) => {
        if (!el) return
        
        // Disable CSS transitions while JS is actively tracking the mouse 
        // to prevent the "wavy/laggy" conflict.
        el.style.transition = 'none'

        const ex = el.offsetLeft + el.offsetWidth / 2
        const ey = el.offsetTop + el.offsetHeight / 2
        const dist = Math.hypot(mx - ex, my - ey)
        const t = Math.max(0, 1 - dist / HOVER_RADIUS)
        
        el.style.color = mixColor(t)
        // Added translateZ(0) to force GPU acceleration and stop SVG blurring
        el.style.transform = `${el.dataset.baseTransform} scale(${1 + t * 0.4}) translateZ(0)`
      })
    }

    const handleLeave = () => {
      itemRefs.current.forEach((el) => {
        if (!el) return
        
        // Re-enable transitions so they float back smoothly when you leave
        el.style.transition = 'transform 300ms ease-out, color 300ms ease-out'
        el.style.color = 'var(--color-icon-muted, rgb(140,138,134))'
        el.style.transform = `${el.dataset.baseTransform} translateZ(0)`
      })
    }

    wrap.addEventListener('mousemove', handleMove)
    wrap.addEventListener('mouseleave', handleLeave)
    return () => {
      wrap.removeEventListener('mousemove', handleMove)
      wrap.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative mx-auto" style={{ width: RADIUS * 2, height: RADIUS * 2 }}>
      {ICONS.map(({ Icon, tilt }, i) => {
        const pos = positions.current[i]
        const scale = MAX_SCALE - (MAX_SCALE - MIN_SCALE) * pos.distRatio
        const baseTransform = `translate(-50%, -50%) rotate(${tilt}deg) scale(${scale})`
        return (
          <div
            key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            data-base-transform={baseTransform}
            // Add pointer-events-none so scaled icons don't block the wrapper's mouse events
            className="absolute pointer-events-none will-change-transform"
            style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: `${baseTransform} translateZ(0)`,
              color: 'var(--color-icon-muted, rgb(140,138,134))',
            }}
          >
            <Icon size={28} />
          </div>
        )
      })}
    </div>
  )
}