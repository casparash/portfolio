"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

function Sphere() {
  const { viewport } = useThree();
  const size = viewport.width / 4;
  const meshRef = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.6; // slow rotation around Y-axis
      meshRef.current.rotation.x += delta * 0.1; // optional subtle X-axis rotation
    }
  });
  return (
    <mesh
      ref={meshRef}
      position={[viewport.width / 2.5, -viewport.height / 2.5, -5]}
      scale={size * 1.5}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="#C0C0C0" metalness={1} roughness={0.2} />
    </mesh>
  );
}

export default function TestSpherePage() {
  return (
    <main className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Sphere />
        <Environment preset="studio" />
      </Canvas>
    </main>
  );
}
