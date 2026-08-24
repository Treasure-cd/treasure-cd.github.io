import React from 'react';

export default function Road() {
  return (
    // Position it slightly down if you want it to act as a floor
    <group position={[0, 0, 0]}>
      <gridHelper 
        /* args=[size, divisions, colorCenterLine, colorGrid] */
        args={[30, 30, '#ff007f', '#00df00']} 
        rotation={[0, 0, 0]} // GridHelper is flat by default!
      />
    </group>
  );
}