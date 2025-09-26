"use client";
import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen bg-grey">
      <div className="absolute top-30 left-40 z-10 font-mono font-light text-5xl">
        <h1>Caspar Ashworth</h1>
        <p className="absolute left-2 text-sm text-gray-400 tracking-wide">
          Computer Science Graduate
        </p>
      </div>
      <div className="absolute top-30 left-41 z-10 font-mono font-light text-xl">
        <button className="absolute top-25 hover:text-gray-400 cursor-pointer transition-colors duration-500">
          Home
        </button>
        <button className="absolute top-33 hover:text-gray-400 cursor-pointer transition-colors duration-500">
          Projects
        </button>
        <button className="absolute top-41 hover:text-gray-400 cursor-pointer transition-colors duration-500">
          Contact
        </button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Sphere />
        </Canvas>
      </div>
    </div>
  );
}
