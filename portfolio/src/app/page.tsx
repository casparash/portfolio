"use client";
import { Canvas } from "@react-three/fiber";
import Sphere from "./components/sphere";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function HomePage() {
  //Creating constant that indicates the "page"
  const [activeSection, setActiveSection] = useState<
    "home" | "projects" | "contact"
  >("home");

  //State to track if on mobile
  const [isMobile, setIsMobile] = useState(false);

  //Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative h-screen w-screen bg-grey">
      <div
        className="absolute z-10 font-mono font-light
    text-3xl sm:text-5xl
    top-4 left-1/2 -translate-x-1/2 text-center
    sm:top-30 sm:left-40 sm:translate-x-0 sm:text-left"
      >
        <h1>Caspar Ashworth</h1>
        <p className="absolute left-2 text-sm text-gray-400 tracking-wide">
          Computer Science Graduate
        </p>
      </div>

      <div
        className="absolute z-10 font-mono font-light text-lg sm:text-xl
    flex justify-center gap-6 top-16 left-1/2 -translate-x-1/2
    sm:justify-start sm:top-30 sm:left-41 sm:translate-x-0 sm:text-left"
      >
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

      <div
        className="absolute z-10 font-mono font-light
    text-center top-1/2 left-1/2 -translate-x-1/2
    sm:text-right sm:top-30 sm:right-40 sm:left-auto sm:translate-x-0"
      >
        {activeSection === "projects" && (
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="space-y-4 mt-2">
              <a
                className="text-2xl hover:underline hover:text-gray-400 cursor-pointer transition-colors duration-500"
                href="https://github.com/casparash/University-FYP"
                target="_blank"
              >
                University FYP
              </a>
              <p className="text-sm">
                Python-based sport-specific workout plan generator.
              </p>
              <a
                className="text-2xl hover:underline hover:text-gray-400 cursor-pointer transition-colors duration-500"
                href="https://github.com/casparash/SentimentAnalysis"
                target="_blank"
              >
                Sentiment Analysis
              </a>
              <p className="text-sm">Python-based sentiment analysis code.</p>
            </div>
          </div>
        )}
      </div>

      <div
        className="absolute z-10
    bottom-10 left-1/2 -translate-x-1/2 text-center
    sm:bottom-30 sm:left-40 sm:translate-x-0 sm:text-left"
      >
        {activeSection === "contact" && (
          <div>
            <h2 className="font-mono font-light text-2xl font-semibold">
              Contact Me
            </h2>
            <a
              className="font-mono font-light hover:underline hover:text-gray-400 cursor-pointer transition-colors duration-500"
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
          <Sphere section={activeSection} isMobile={isMobile} />
        </Canvas>
      </div>
    </div>
  );
}
