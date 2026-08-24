import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const GREEN = '#00df00'

function Wheel({ position, radius, width, spokes = 10 }) {
  return (
    // Cylinder is upright by default — rotate 90° on Z to lay it flat as a wheel
    <mesh position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[radius, radius, width, spokes]} />
      <meshBasicMaterial color={GREEN} wireframe />
    </mesh>
  )
}

function TractorMesh() {
  return (
    <group>
      {/* Hood */}
      <mesh position={[0, 0.14, -0.22]}>
        <boxGeometry args={[0.28, 0.13, 0.26]} />
        <meshBasicMaterial color={GREEN} wireframe />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.14, 0.1]}>
        <boxGeometry args={[0.36, 0.13, 0.34]} />
        <meshBasicMaterial color={GREEN} wireframe />
      </mesh>

      {/* Cab */}
      <mesh position={[0, 0.32, 0.08]}>
        <boxGeometry args={[0.28, 0.17, 0.30]} />
        <meshBasicMaterial color={GREEN} wireframe />
      </mesh>

      {/* Exhaust stack */}
      <mesh position={[0.09, 0.52, -0.1]}>
        <cylinderGeometry args={[0.02, 0.02, 0.13, 5]} />
        <meshBasicMaterial color={GREEN} wireframe />
      </mesh>

      {/* Rear wheels — larger */}
      <Wheel position={[-0.21, 0.12,  0.14]} radius={0.13} width={0.07} />
      <Wheel position={[ 0.21, 0.12,  0.14]} radius={0.13} width={0.07} />

      {/* Front wheels — smaller */}
      <Wheel position={[-0.14, 0.07, -0.26]} radius={0.07} width={0.05} spokes={8} />
      <Wheel position={[ 0.14, 0.07, -0.26]} radius={0.07} width={0.05} spokes={8} />
    </group>
  )
}

// laneX    — slight offset left/right so they're not stacked
// startZ   — initial depth (negative = far into scene)
// speed    — units per second, positive = moving toward camera
export default function Tractor({ laneX, startZ, speed }) {
  const ref = useRef()

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.position.z += speed * delta
    // Once it passes the camera, teleport back to its starting depth
    if (ref.current.position.z > 12) {
      ref.current.position.z = startZ
    }
  })

  return (
    // rotation.y = π flips the tractor to face the camera (front toward +Z)
    <group ref={ref} position={[laneX, 0, startZ]} rotation={[0, Math.PI, 0]}>
      <TractorMesh />
    </group>
  )
}