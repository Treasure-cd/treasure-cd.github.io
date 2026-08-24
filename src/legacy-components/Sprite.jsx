import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Sprite({ position, initialDelay = 0 }) {
  const groupRef = useRef()
  const [hovered, setHover] = useState(false)

  // Buzzy Retro Audio Effect
  useEffect(() => {
    if (!hovered) return

    // 1. Create audio context and synth nodes
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    // 2. Make it sound retro & buzzy using a sawtooth or square wave
    osc.type = 'sawtooth' 

    // 3. Create a quick pitching up "chirp" frequency sweep (alien/video game vibe)
    const now = ctx.currentTime
    osc.frequency.setValueAtTime(150, now)       // Start low and buzzy
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.15) // Quickly ramp up

    // 4. Smooth volume envelope so it doesn't pop aggressively
    gain.gain.setValueAtTime(0.04, now) // Keep volume low/ambient (4%)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15) // Fade out quick

    // 5. Fire and terminate
    osc.start(now)
    osc.stop(now + 0.15)

    // Cleanup audio context when done to prevent memory leaks
    return () => {
      setTimeout(() => ctx.close(), 200)
    }
  }, [hovered])

  // Floating Animation Loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + initialDelay
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(time * 2.5) * 0.05
      groupRef.current.rotation.x = Math.sin(time * 1.5) * 0.05
    }
  })

  const color = hovered ? '#ff007f' : '#00df00'
  
  const baseW = 0.07
  const baseH = 0.03
  const baseD = 0.05

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* Base Tier */}
      <mesh position={[0, baseH / 2, 0]}>
        <boxGeometry args={[baseW, baseH, baseD]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Top Tier */}
      <mesh position={[0, baseH + (baseH * 0.5) / 2, 0]}>
        <boxGeometry args={[baseW * 0.6, baseH * 0.5, baseD * 0.6]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Left Leg */}
      <mesh position={[-(baseW / 2 + 0.015), baseH * 0.3, 0]}>
        <boxGeometry args={[0.02, baseH * 0.6, 0.04]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Right Leg */}
      <mesh position={[(baseW / 2 + 0.015), baseH * 0.3, 0]}>
        <boxGeometry args={[0.02, baseH * 0.6, 0.04]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  )
}