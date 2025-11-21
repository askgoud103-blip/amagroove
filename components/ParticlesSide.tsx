"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function ParticlesSide() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // keeps particles inside container
        fpsLimit: 60,
        particles: {
          number: {
            value: 30, // fewer particles for cinematic effect
            density: {
              enable: true, // only enable density
            },
          },
          color: {
            value: "#ffffff", // light color particles
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3, // subtle particles
            random: true,
          },
          size: {
            value: { min: 1, max: 3 }, // small, cinematic sizes
          },
          move: {
            enable: true,
            speed: 0.8, // slow, smooth movement
            direction: "none",
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

