"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Mesh, Vector3 } from "three";

export default function Sphere({
  section,
}: {
  section: "home" | "projects" | "contact";
}) {
  const { viewport } = useThree();
  const size = viewport.width / 4;
  const meshRef = useRef<Mesh>(null);

  const basePos = useMemo(
    () => new Vector3(viewport.width / 2.5, -viewport.height / 2.5, -5),
    [viewport]
  );

  const offset = useMemo(() => {
    switch (section) {
      case "projects":
        return new Vector3(-14, -4, 0);
      case "contact":
        return new Vector3(0, 12, 0);
      default:
        return new Vector3(0, 0, 0);
    }
  }, [section]);

  const target = useMemo(() => basePos.clone().add(offset), [basePos, offset]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    //const glitchY = Math.random() > 0.997 ? (Math.random() - 0.5) * 0.03 : 0;
    meshRef.current.rotation.y += delta * 0.02;

    meshRef.current.position.lerp(target, 0.02);
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
