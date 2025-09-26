"use client";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";
import { useState } from "react";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<
    "home" | "projects" | "contact"
  >("home");

  return (
    <div className="relative h-screen w-screen bg-grey">
      <div className="absolute top-30 left-40 z-10 font-mono font-light text-5xl">
        <h1>Caspar Ashworth</h1>
        <p className="absolute left-2 text-sm text-gray-400 tracking-wide">
          Computer Science Graduate
        </p>
      </div>
      <div className="absolute top-30 left-41 z-10 font-mono font-light text-xl">
        <button
          onClick={() => setActiveSection("home")}
          className="absolute top-25 hover:text-gray-400 cursor-pointer transition-colors duration-500"
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection("projects")}
          className="absolute top-33 hover:text-gray-400 cursor-pointer transition-colors duration-500"
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection("contact")}
          className="absolute top-41 hover:text-gray-400 cursor-pointer transition-colors duration-500"
        >
          Contact
        </button>
      </div>

      <div className="absolute top-30 right-40 z-10 text-right">
        {activeSection === "projects" && (
          <div>
            <h2 className="font-mono font-light text-xl">Projects</h2>
            <p>
              Here you can showcase your recent work, maybe with links or
              images.
            </p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Sphere section={activeSection} />
        </Canvas>
      </div>
    </div>
  );
}
function useSpring(arg0: {
  position: number[]; // default center
  config: { mass: number; tension: number; friction: number };
}): { position: any } {
  throw new Error("Function not implemented.");
}
