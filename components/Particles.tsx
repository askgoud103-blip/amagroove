"use client";

import Particles from "@tsparticles/react";
import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBG() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },

        particles: {
          number: { value: 40 },
          color: { value: "#ffffff" },
          opacity: { value: 0.4 },
          size: { value: 2 },
          move: { enable: true, speed: 0.5 },
        },
      }}
      
      style={{
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 30,   // <-- Higher than overlay
  top: 0,
  left: 0,
}}


    />
  );
}
