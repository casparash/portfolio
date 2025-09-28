"use client";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";
import { useState } from "react";
import clsx from "clsx";

export default function HomePage() {
  //Creating constant that indicates the "page"
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
          className={clsx(
            "absolute top-25 hover:text-gray-400 cursor-pointer transition-colors duration-500",
            activeSection === "home" ? "border-b-2 border-gray-400" : ""
          )}
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection("projects")}
          className={clsx(
            "absolute top-33 hover:text-gray-400 cursor-pointer transition-colors duration-500",
            activeSection === "projects" ? "border-b-2 border-gray-400" : ""
          )}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection("contact")}
          className={clsx(
            "absolute top-41 hover:text-gray-400 cursor-pointer transition-colors duration-500",
            activeSection === "contact" ? "border-b-2 border-gray-400" : ""
          )}
        >
          Contact
        </button>
      </div>

      <div className="absolute top-30 right-40 z-10 text-right font-mono font-light">
        {activeSection === "projects" && (
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <a
              className="text-2xl hover:text-gray-400 cursor-pointer transition-colors duration-500"
              href="https://github.com/casparash/University-FYP"
              target="_blank"
            >
              University FYP Test
            </a>
            <p className="text-sm">
              Python-based sport-specific workout plan generator.
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-30 left-40 z-10">
        {activeSection === "contact" && (
          <div>
            <h2 className="font-mono font-light text-2xl font-semibold">
              Contact Me
            </h2>
            <a
              className="font-mono font-light hover:text-gray-400 cursor-pointer transition-colors duration-500"
              href="https://www.linkedin.com/in/caspar-ashworth-2058ba253/"
              target="_blank"
            >
              LinkedIn
            </a>
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
