"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Sphere() {
  const { viewport } = useThree();
  const size = viewport.width / 4;
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Subtle glitchy rotation
      const glitchY = Math.random() > 0.997 ? (Math.random() - 0.5) * 0.03 : 0;

      meshRef.current.rotation.y += delta * -0.02 + glitchY;
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
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.6),
            transparent
          );
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
          animation: scan 6s infinite ease-in-out;
          z-index: 15;
        }

        @keyframes scan {
          0%,
          90%,
          100% {
            top: -2px;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          50% {
            top: 50%;
            opacity: 0.8;
          }
          85% {
            top: 100%;
            opacity: 0;
          }
        }

        /* Text highlight effect when scan line passes over */
        .text-scanline-effect {
          position: relative;
        }

        .text-scanline-effect::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 65, 0.1),
            transparent
          );
          opacity: 0;
          animation: text-scan 6s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes text-scan {
          0%,
          90%,
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
          5% {
            opacity: 0;
            transform: translateY(-50px);
          }
          48%,
          52% {
            opacity: 1;
            transform: translateY(0);
          }
          85% {
            opacity: 0;
            transform: translateY(50px);
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
