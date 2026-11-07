"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AmbientGeometryMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const torusRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (torusRef.current) {
      torusRef.current.rotation.z += delta * 0.18;
      torusRef.current.rotation.x -= delta * 0.12;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial color="#57C8FF" wireframe opacity={0.25} transparent />
      </mesh>
      {/* Outer subtle orbit ring */}
      <mesh ref={torusRef}>
        <torusGeometry args={[3.2, 0.02, 16, 64]} />
        <meshBasicMaterial color="#8B77FF" opacity={0.35} transparent />
      </mesh>
    </group>
  );
}

export function ContactBackground3D() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.2]}
        gl={{ alpha: true, antialias: true }}
      >
        <AmbientGeometryMesh />
      </Canvas>
    </div>
  );
}

