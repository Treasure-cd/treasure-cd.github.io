import Tractor from './Tractor'

export default function Tractors() {
  return (
    <group>
      <Tractor laneX={-0.6} startZ={-18} speed={1.2} />
      <Tractor laneX={ 0.5} startZ={-23} speed={0.8} />
      <Tractor laneX={-0.1} startZ={-28} speed={1.5} />
    </group>
  )
}