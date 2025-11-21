"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesSide from "@/components/ParticlesSide";

const performancesData = [
  {
    id: 1,
    title: "Klassi Kuchipudi",
    date: "06-12-2025",
    venue: "Ravindra Bharathi, Hyderabad",
    description:
      "A fusion performance blending Indian classical rhythms with western grooves.",
  },
  {
    id: 2,
    title: "Evening of Groove",
    date: "23-11-2025",
    venue: "Amagowni Enclave, Saroornagar",
    description:
      "Experience Amagroove’s signature sound with live instruments and vocals.",
  },
  {
    id: 3,
    title: "Charimatic Cristmas",
    date: "25-12-2025",
    venue: "Eternal A N, Hyderabad",
    description:
      "A high-energy performance featuring rhythm explorations and audience interaction.",
  },
];

export default function PerformancesPage() {
  const [activePerformance, setActivePerformance] = useState<number | null>(null);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      {/* Left & Right Particles */}
      <div className="absolute top-0 left-0 h-full w-[15%] z-10 pointer-events-none">
        <ParticlesSide />
      </div>
      <div className="absolute top-0 right-0 h-full w-[15%] z-10 pointer-events-none">
        <ParticlesSide />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-transparent">
        <h1 className="text-2xl font-bold text-[var(--gold)] tracking-wide drop-shadow-lg glow-gold">
          Amagroove
        </h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li><a href="/" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Home</a></li>
          <li><a href="/about" className="mx-3 text-white hover:text-[var(--gold)] transition-all">About</a></li>
          <li><a href="/performances" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Performances</a></li>
          <li><a href="/videos" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Videos</a></li>
          <li><a href="/gallery" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Gallery</a></li>
          <li><a href="/events" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Events</a></li>
          <li><a href="/contact" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Contact</a></li>
        </ul>
      </nav>

      {/* Page Heading */}
      <div className="relative z-20 flex flex-col items-center justify-start mt-28 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold text-[var(--gold)] drop-shadow-xl mb-12"
        >
          Performances
        </motion.h1>

        {/* Performances Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
          {performancesData.map((perf) => (
            <motion.div
              key={perf.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() =>
                setActivePerformance(activePerformance === perf.id ? null : perf.id)
              }
              className="cursor-pointer bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_var(--gold)] transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[var(--gold)] mb-1">{perf.title}</h2>
              <p className="text-gray-400 mb-2">{perf.date} | {perf.venue}</p>

              <AnimatePresence>
                {activePerformance === perf.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-200"
                  >
                    {perf.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

