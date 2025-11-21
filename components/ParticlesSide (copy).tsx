"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesSide() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles-side"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        
        zIndex: 2,


        particles: {
          number: { value: 50, density: { enable: false } },
          color: {
            value: ["#FFD700", "#FFFFFF", "#C0C0C0"] // gold, white, silver
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: true
          },
          size: {
            value: { min: 1, max: 4 }
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            outModes: "out"
          }
        }
      }}
    />
  );
}

