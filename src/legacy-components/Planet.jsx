import React from 'react';

export default function Planet() {
  return (
    <mesh>
      {/* args=[radius, widthSegments, heightSegments] */}
      <sphereGeometry args={[5, 32, 8]} />
      
      {/* Materials attach automatically to their parent mesh */}
      <meshBasicMaterial color={0x004d00} wireframe />
    </mesh>
  );
}