"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Cybernetic Developer Monolith & Hypercube Matrix
 * Represents code compiling, abstract bracket brackets, neural node lattice,
 * and orbital energy data rings.
 * Ample camera space so the 3D developer matrix can move freely with zero clipping!
 */
function CodeHypercubeMesh({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const outerWireBoxRef = useRef<THREE.Mesh>(null!);
  const innerSolidBoxRef = useRef<THREE.Mesh>(null!);
  const coreIcosahedronRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);
  const dataNodesRef = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  // Neural code node matrix points
  const [nodePositions] = useMemo(() => {
    const count = 160;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 1.2 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    // Outer cyber wireframe cube rotation (Architectural Structure)
    if (outerWireBoxRef.current) {
      outerWireBoxRef.current.rotation.x = time * 0.25;
      outerWireBoxRef.current.rotation.y = time * 0.35;
      outerWireBoxRef.current.rotation.z = Math.sin(time * 0.2) * 0.2;
    }

    // Inner glowing crystal block (Source Code Core)
    if (innerSolidBoxRef.current) {
      innerSolidBoxRef.current.rotation.x = -time * 0.4;
      innerSolidBoxRef.current.rotation.y = -time * 0.3;
      const scale = 1 + Math.sin(time * 3) * 0.06;
      innerSolidBoxRef.current.scale.set(scale, scale, scale);
    }

    // Central pulsing icosahedron
    if (coreIcosahedronRef.current) {
      coreIcosahedronRef.current.rotation.y += delta * 0.6;
      coreIcosahedronRef.current.rotation.z += delta * 0.4;
    }

    // Orbiting data bus rings (Data Stream Pipeline)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.sin(time * 0.3) * 0.4 + time * 0.25;
      ring1Ref.current.rotation.y += delta * 0.4;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = Math.cos(time * 0.3) * 0.4 - time * 0.3;
      ring2Ref.current.rotation.z += delta * 0.35;
    }

    // Node swarm rotation
    if (dataNodesRef.current) {
      dataNodesRef.current.rotation.y = time * 0.1;
      dataNodesRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
    }

    // Interactive pointer parallax tracking
    if (groupRef.current) {
      const targetX = mouse.current.x * 0.4;
      const targetY = mouse.current.y * 0.3;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.35}>
        {/* Core Luminous Code Crystal (Center) */}
        <mesh ref={innerSolidBoxRef}>
          <boxGeometry args={[0.74, 0.74, 0.74]} />
          <meshPhysicalMaterial
            color="#38BDF8"
            emissive="#0284C7"
            emissiveIntensity={0.6}
            roughness={0.05}
            metalness={0.1}
            transmission={0.9}
            ior={1.55}
            thickness={1.5}
            transparent={true}
            opacity={0.95}
          />
        </mesh>

        {/* Floating Geometric Wireframe Diamond inside */}
        <mesh ref={coreIcosahedronRef}>
          <octahedronGeometry args={[0.98, 0]} />
          <meshStandardMaterial
            color="#67E8F9"
            emissive="#38BDF8"
            emissiveIntensity={0.8}
            wireframe={true}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Architectural Code Monolith Wireframe (Cube) */}
        <mesh ref={outerWireBoxRef}>
          <boxGeometry args={[1.56, 1.56, 1.56]} />
          <meshStandardMaterial
            color="#C084FC"
            emissive="#818CF8"
            emissiveIntensity={0.4}
            wireframe={true}
            roughness={0.2}
            metalness={0.7}
            transparent={true}
            opacity={0.75}
          />
        </mesh>

        {/* Orbit Ring 1 (Electric Blue Code Ring) */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.75, 0.038, 24, 128]} />
          <meshStandardMaterial
            color="#38BDF8"
            emissive="#38BDF8"
            emissiveIntensity={0.85}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        {/* Orbit Ring 2 (Cyber Purple Horizon Ring) */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[1.98, 0.042, 24, 128]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#7E22CE"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.15}
          />
        </mesh>

        {/* Compiler Data Node Cluster (Swarming Code Packets) */}
        <points ref={dataNodesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={nodePositions.length / 3}
              array={nodePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.045}
            color="#79DDFF"
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      </Float>
    </group>
  );
}

export function EnergyCore() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="relative w-full h-full min-h-[500px] lg:min-h-[660px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-visible"
    >
      {/* Dynamic ambient layered developer glow */}
      <div className="absolute inset-0 bg-radial-gradient from-electric-blue/20 via-accent-purple/10 to-transparent pointer-events-none rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute w-80 h-80 rounded-full bg-electric-cyan/15 blur-[100px] pointer-events-none" />

      {/* R3F Canvas - generous camera distance & fov so NOTHING gets cut off */}
      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 46 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full relative z-10 overflow-visible"
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-64 h-64 rounded-full border border-electric-blue/30 flex items-center justify-center animate-pulse-subtle">
              <div className="w-48 h-48 rounded-full border border-accent-purple/30 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full bg-electric-blue/20 blur-md" />
              </div>
            </div>
          </div>
        }
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[6, 8, 5]} intensity={2.2} color="#F8FAFC" />
        <pointLight position={[-4, -3, -2]} intensity={3.5} color="#38BDF8" distance={20} />
        <pointLight position={[3, -4, 2]} intensity={3.0} color="#A855F7" distance={20} />
        <pointLight position={[0, 4, 3]} intensity={2.2} color="#67E8F9" distance={15} />
        <CodeHypercubeMesh mouse={mouse} />
      </Canvas>
    </div>
  );
}
