"use client";
import ParticlesSide from "@/components/ParticlesSide";
import { motion } from "framer-motion";
import Link from "next/link"; // add at top of file

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden text-white">
    {/* Left Bar Particles */}
<div className="absolute top-0 left-0 h-full w-[15%] z-20 pointer-events-none overflow-hidden">
  <div className="relative h-full w-full">
    <ParticlesSide />
  </div>
</div>

{/* Right Bar Particles */}
<div className="absolute top-0 right-0 h-full w-[15%] z-20 pointer-events-none overflow-hidden">
  <div className="relative h-full w-full">
    <ParticlesSide />
  </div>
</div>



      {/* Particles */}
     

      {/* Navbar */}
     

      <nav className="absolute top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center bg-transparent">
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-lg">
          Amagroove
        </h1>

        <ul className="flex gap-10 text-lg font-medium">
          <ul className="flex gap-10 text-lg font-medium">
  <li><a href="#" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Home</a></li>
  <li><a href="#" className="mx-3 text-white hover:text-[var(--gold)] transition-all">About</a></li>
  <li><a href="#" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Performances</a></li>
  <li><a href="#" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Events</a></li>
  <li><a href="#" className="mx-3 text-white hover:text-[var(--gold)] transition-all">Contact</a></li>



</ul>
        </ul>
      </nav>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain object-center brightness-125 contrast-110"
      >
        <source src="/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold text-yellow-400 drop-shadow-xl"
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
          <button className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-200">
            Explore Music
          </button>

          <button className="px-6 py-3 rounded-xl border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200">
            Learn More
          </button>
        </motion.div>
      </div>

    </main>
  );
}

