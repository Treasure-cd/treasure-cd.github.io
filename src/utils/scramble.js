const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@-#$%'
const GLITCH_CHARS = '█▓▒░▄▀■┼║▲▼'

export function scramble(element, text, waitMs, duration, strokeStyle = '') {
  if (!element) return
  const len = text.length
  let startTime = null
  let delayPassed = false
  let glitchFramesLeft = 0

  const gibberish = () =>
    text.split('').map(c => c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]).join('')

  element.textContent = gibberish()

  const tick = (now) => {
    if (!startTime) startTime = now
    if (now - startTime < waitMs) {
      element.textContent = gibberish()
      requestAnimationFrame(tick)
      return
    }
    if (!delayPassed) { delayPassed = true; startTime = now }

    const progress = Math.min((now - startTime) / duration, 1)
    const resolved = Math.floor(progress * len)
    let hasGlitched = false 

    if (glitchFramesLeft <= 0 && progress < 0.9) {
    const shouldGlitch =
        Math.random() < 0.28 ||
        (!hasGlitched && progress > 0.3)   // force one if none yet by 30%
    if (shouldGlitch) {
        glitchFramesLeft = Math.floor(Math.random() * 5) + 4
        hasGlitched = true
    }
    }
    const isGlitchingFrame = glitchFramesLeft > 0
    if (isGlitchingFrame) glitchFramesLeft--

    if (isGlitchingFrame) {
        element.style.color = '#ff007f'
        element.style.webkitTextStroke = '0px transparent' 
        element.style.textShadow = '0 0 12px #ff007f, 0 0 25px #ff007f'
        element.style.transform = `translateX(${(Math.random() - 0.5) * 12}px)`
        } else {
        element.style.color = 'transparent'
        element.style.webkitTextStroke = strokeStyle
        element.style.textShadow = 'none'
        element.style.transform = 'none'
        }

    element.textContent = text.split('').map((char, i) => {
      if (i < resolved) return char
      if (char === ' ') return ' '
      if (isGlitchingFrame) {
        return Math.random() < 0.4
          ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          : CHARS[Math.floor(Math.random() * CHARS.length)]
      }
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    }).join('')

    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      element.textContent = text
      element.style.color = 'transparent'
      element.style.webkitTextStroke = strokeStyle
      element.style.textShadow = 'none'
      element.style.transform = 'none'
    }
  }

  return requestAnimationFrame(tick)
}