"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain brightness-150 contrast-110"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-2 flex justify-between items-center bg-transparent">

        {/* Left side: Logo + small video */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-[var(--gold)] tracking-wide drop-shadow-lg glow-gold">
            Amagroove
          </h1>

          {/* Small hero video */}
          <video
            className="mt-1 w-20 md:w-24 rounded-lg shadow-lg border-2 border-[var(--gold)]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/hero1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Right side: nav links */}
        <ul className="flex gap-2 text-lg font-medium">
          <li><a href="/" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Home</a></li>
          <li><a href="/about" className="mx-3 text-white hover:text-[var(--gold)] transition-all">About</a></li>
          <li><a href="/performances" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Performances</a></li>
          <li><a href="/videos" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Videos</a></li>
          <li><a href="/gallery" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Gallery</a></li>
          <li><a href="/events" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Events</a></li>
          <li><a href="/contact" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold text-[var(--gold)] drop-shadow-xl"
        >
          Amagroove
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-4 max-w-2xl text-lg md:text-2xl text-gray-200"
        >
          Where Indian Classical Rhythm merges with Modern Western Groove
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="/performances"
            className="px-6 py-3 rounded-xl bg-[var(--gold)] text-black font-semibold hover:bg-yellow-400 transition-all duration-200"
          >
            Explore Music
          </a>

          <a
            href="/about"
            className="px-6 py-3 rounded-xl border border-[var(--gold)] text-[var(--gold)] font-semibold hover:bg-[var(--gold)] hover:text-black transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>
      </div>

    </main>
  );
}

