import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController() {
  const elapsedTime = useRef(0);

  useFrame((state, delta) => {
    elapsedTime.current += delta;

    if (elapsedTime.current > 3) {
      state.camera.position.x = THREE.MathUtils.lerp(
        state.camera.position.x,
        0,
        0.05
      );
    }
  });

  return null;
}