/*"use client";
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
*/

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
      // Subtle glitchy rotation
      const glitchX = Math.random() > 0.98 ? (Math.random() - 0.5) * 0.02 : 0;
      const glitchY = Math.random() > 0.97 ? (Math.random() - 0.5) * 0.03 : 0;

      meshRef.current.rotation.y += delta * 0.3 + glitchY;
      meshRef.current.rotation.x += delta * 0.05 + glitchX;

      // Very subtle float with occasional micro-glitch
      const baseY = -viewport.height / 2.5;
      const microGlitch =
        Math.random() > 0.995 ? (Math.random() - 0.5) * 0.05 : 0;
      meshRef.current.position.y =
        baseY + Math.sin(state.clock.elapsedTime * 0.4) * 0.1 + microGlitch;
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
        color="#0a2f0a"
        wireframe={true}
        transparent={true}
        opacity={0.2}
      />
    </mesh>
  );
}

export default function ChromeSpherePortfolio() {
  return (
    <>
      <style jsx>{`
        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .glitch-text::before {
          animation: glitch-1 3s infinite;
          color: #00ff41;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-2 3s infinite;
          color: #ff0041;
          z-index: -2;
        }

        @keyframes glitch-1 {
          0%,
          90%,
          100% {
            opacity: 0;
            transform: translate(0);
          }
          91% {
            opacity: 0.3;
            transform: translate(-2px, -1px);
          }
          92% {
            opacity: 0;
            transform: translate(0);
          }
          93% {
            opacity: 0.2;
            transform: translate(1px, 1px);
          }
          94% {
            opacity: 0;
          }
        }

        @keyframes glitch-2 {
          0%,
          85%,
          100% {
            opacity: 0;
            transform: translate(0);
          }
          86% {
            opacity: 0.2;
            transform: translate(-1px, 1px);
          }
          87% {
            opacity: 0;
            transform: translate(0);
          }
          88% {
            opacity: 0.3;
            transform: translate(2px, -1px);
          }
          89% {
            opacity: 0;
          }
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.3),
            transparent
          );
          animation: scan 4s infinite ease-in-out;
        }

        @keyframes scan {
          0%,
          90%,
          100% {
            top: -1px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            top: 50%;
            opacity: 0.5;
          }
          80% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
      <div className="relative h-screen w-screen bg-black overflow-hidden">
        {/* Subtle matrix rain effect */}
        <div
          className="absolute inset-0 z-5 opacity-5 pointer-events-none"
          style={{
            background: `
            radial-gradient(circle at 20% 30%, rgba(0,50,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(0,80,0,0.05) 0%, transparent 50%)
          `,
          }}
        />

        {/* Occasional scan line */}
        <div className="scan-line"></div>
        {/* Your main content would go here */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-white text-center max-w-2xl px-8">
            <h1 className="text-5xl font-mono font-light mb-6 text-gray-100 tracking-wider glitch-text">
              &lt;your_name /&gt;
            </h1>
            <p className="text-lg text-gray-400 mb-12 font-mono font-light tracking-wide">
              computer.science.graduate
            </p>
            <div className="flex gap-8 justify-center pointer-events-auto text-sm font-mono">
              <button className="text-gray-400 hover:text-green-400 transition-colors duration-700 tracking-widest uppercase border-l border-green-900 pl-3">
                work
              </button>
              <button className="text-gray-400 hover:text-green-400 transition-colors duration-700 tracking-widest uppercase border-l border-green-900 pl-3">
                contact
              </button>
            </div>
          </div>
        </div>

        {/* Three.js Canvas positioned behind content */}
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            gl={{ alpha: true, antialias: true }}
          >
            <Sphere />
          </Canvas>
        </div>
      </div>
    </>
  );
}
