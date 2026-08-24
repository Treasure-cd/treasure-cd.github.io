import React from 'react'
import { useRef } from 'react'

function Mountain({ position, height = 3, radius = 2, segments = 8 }) {
  return (
    <mesh position={[position[0], height / 2, position[2]]}>
      <coneGeometry args={[radius, height, segments]} />
      <meshBasicMaterial color="#00df00" wireframe />
    </mesh>
  )
}

export default function Mountains() {
  return (
    <group>
      {/* Back row — center cluster */}
      <Mountain position={[0,   0, -14]} height={3}   radius={3.2} segments={7} />
      <Mountain position={[-4,  0, -13]} height={2.5} radius={2.4} segments={6} />
      <Mountain position={[4.5, 0, -13]} height={5}   radius={2.8} segments={7} />

      {/* Mid row — flanks */}
      <Mountain position={[-7,  0, -11]} height={3}   radius={1.8} segments={6} />
      <Mountain position={[7.5, 0, -11]} height={3.5} radius={2}   segments={6} />

      {/* Foreground hints — barely peeking */}
      <Mountain position={[-9,  0, -9]}  height={2}   radius={1.4} segments={5} />
      <Mountain position={[9,   0, -9]}  height={2.2} radius={1.5} segments={5} />
    </group>
  )
}