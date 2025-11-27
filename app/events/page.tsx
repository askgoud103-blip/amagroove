"use client";
import Navbar from "@/components/Navbar";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const eventsData = [
  {
    id: 1,
    title: "Kuchipudi by the Team of Shankari",
    date: "__-12-2025",
    description:
      "Experience a magical evening where Indian classical rhythms meet modern grooves.",
  },
  {
    id: 2,
    title: "Western Groove Workshop",
    date: "__-12-2025",
    description:
      "Interactive session exploring western rhythmic patterns with Amagroove.",
  },
  {
    id: 3,
    title: "Live Performance Showcase",
    date: "__-11-2025",
    description:
      "Watch Amagroove perform a curated set of fusion music live on stage.",
  },
  {
    id: 4,
    title: "_____Dance Performance",
    date: "__-12-2025",
    description:
      "Collaborative jam session with fans and musicians, celebrating seasonal vibes.",
  },
];

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">

      

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
          Upcoming Events
        </motion.h1>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
              className="cursor-pointer bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_var(--gold)] transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-[var(--gold)] mb-2">{event.title}</h2>
              <p className="text-gray-400 mb-4">{event.date}</p>

              <AnimatePresence>
                {activeEvent === event.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-200"
                  >
                    {event.description}
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

