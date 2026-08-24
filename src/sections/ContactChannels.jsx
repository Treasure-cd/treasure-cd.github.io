import React, { useState } from 'react'

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace'

const LINKS = [
  { name: 'GITHUB', handle: 'github.com/Treasure-cd', url: 'https://github/Treasure-cd', type: 'src' },
  { name: 'LINKEDIN', handle: 'linkedin.com/in/treasure-ani-joseph', url: 'https://www.linkedin.com/in/treasure-ani-joseph-aa25b7373/', type: 'sys' },
  { name: 'X_TWITTER', handle: 'https://x.com/treasure', url: 'https://x.com/treasurekage', type: 'cfg' },
  { name: 'EMAIL', handle: 'treasureaj14@gmail.com', url: 'mailto:treasureaj14@gmail.com', type: 'sh' }
]

export default function ContactChannels() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="w-full border border-[#00df0015] bg-black/40 p-6 md:p-8 relative overflow-hidden">
      <div style={{ fontFamily: MONO, color: '#00df0044', fontSize: 10, marginBottom: 20, letterSpacing: '0.15em' }}>
        // ESTABLISHING_REMOTE_UPLINKS...
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {LINKS.map((link, idx) => {
          const isHovered = hoveredIndex === idx
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center gap-4 p-4 border transition-all duration-300 relative group"
              style={{
                backgroundColor: isHovered ? '#00df0010' : 'transparent',
                borderColor: isHovered ? '#ff007f' : '#00df0022',
                borderLeft: isHovered ? '3px solid #ff007f' : '1px solid #00df0022',
                textDecoration: 'none'
              }}
            >
              {/* CYBERPUNK OUTLINE LOGO GRAPHIC */}
              <div 
                className="w-8 h-8 flex items-center justify-center shrink-0"
                style={{
                  color: isHovered ? '#ff007f' : '#00df00',
                  filter: isHovered ? 'drop-shadow(0 0 4px #ff007f88)' : 'drop-shadow(0 0 2px #00df0044)',
                  transition: 'all 0.2s ease'
                }}
              >
                <NetworkIcon name={link.name} />
              </div>

              {/* ROUTING TEXT DATA */}
              <div className="flex flex-col min-w-0" style={{ fontFamily: MONO }}>
                <span 
                  className="text-[10px] font-bold tracking-wider transition-colors duration-200"
                  style={{ color: isHovered ? '#ff007f' : '#00df0088' }}
                >
                  {link.name}.{link.type}
                </span>
                <span className="text-xs text-[#e8ffe8] truncate opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  {link.handle}
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

// Lightweight manual SVG path definitions so you don't require external packages
function NetworkIcon({ name }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }
  
  switch(name) {
    case 'GITHUB':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    case 'LINKEDIN':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'X_TWITTER':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" {...common}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      )
    case 'EMAIL':
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5" {...common}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    default:
      return null
  }
}