"use client";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Sphere() {
  const { viewport } = useThree();
  const size = viewport.width / 4;
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      //const glitchY = Math.random() > 0.997 ? (Math.random() - 0.5) * 0.03 : 0;

      meshRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[viewport.width / 2.5, -viewport.height / 2.5, -5]}
      scale={size * 1.5}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial
        color="0a2f0a"
        wireframe={true}
        transparent={true}
        opacity={0.2}
      />
    </mesh>
  );
}
