import React from 'react'

function Tree({ position, scale = 1 }) {
  const trunkH = 0.7 * scale
  const canopyH = 0.6 * scale
  const canopyR = 0.5 * scale

  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, trunkH / 2, 0]}>
        <cylinderGeometry args={[0.09 * scale, 0.1 * scale, trunkH, 5]} />
        <meshBasicMaterial color="#00df00" wireframe />
      </mesh>
      {/* Canopy */}
      <mesh position={[0, trunkH + canopyH / 2, 0]}>
        <coneGeometry args={[canopyR, canopyH, 6]} />
        <meshBasicMaterial color="#00df00" wireframe />
      </mesh>
    </group>
  )
}

// Spread along road sides, z going negative (toward mountains)
const TREES = [
  { position: [-2.6,  0, -2],  scale: 1    },
  { position: [ 2.8,  0, -3],  scale: 0.9  },
  { position: [-3.1,  0, -5],  scale: 1.1  },
  { position: [ 2.5,  0, -6],  scale: 0.85 },
  { position: [-2.8,  0, -8],  scale: 1    },
  { position: [ 3.2,  0, -8],  scale: 1.15 },
  { position: [-3.4,  0, -10], scale: 0.9  },
  { position: [ 3.0,  0, -10], scale: 1    },
  { position: [-4.0,  0, -4],  scale: 0.75 },
  { position: [ 4.2,  0, -5],  scale: 0.8  },
]

export default function Trees() {
  return (
    <group>
      {TREES.map((t, i) => (
        <Tree key={i} position={t.position} scale={t.scale} />
      ))}
    </group>
  )
}