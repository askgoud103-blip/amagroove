"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesSide() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-sides"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // disable full screen
        style: {
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        },
        particles: {
          number: {
            value: 35, // number of particles per side
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#FFD700", "#C0C0C0", "#FFFF00"], // Gold, Silver, Yellow
          },
          shape: {
            type: "circle", // big & small floating circles
          },
          size: {
            value: { min: 2, max: 6 },
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

