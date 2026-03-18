"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook, Play } from "lucide-react";

// FadeIn Wrapper
const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Logo
const Logo = ({ className = "" }) => (
  <Link href="/" className={`font-extrabold tracking-tighter flex items-center ${className}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
      Ama
    </span>
    <motion.span
      animate={{ y: [0, -3, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      className="text-white mx-0.5 italic"
    >
      ~
    </motion.span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
      Groove
    </span>
  </Link>
);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Performances", href: "/performances" },
  { name: "Videos", href: "/videos" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

// Signature Card
const SignatureCard = ({ perf }: { perf: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) videoRef.current.play().catch(() => {});
    else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative h-[500px] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 cursor-pointer transition-all duration-500 hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]"
    >
      <video
        ref={videoRef}
        src={perf.src}
        loop
        muted
        playsInline
        className={`w-full h-full object-cover transition-all duration-700 ${
          isHovered ? "opacity-100 scale-105 grayscale-0" : "opacity-50 grayscale-[0.8]"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-yellow-500 text-[10px] uppercase tracking-widest block mb-2">
          {perf.tag}
        </span>
        <h3 className="text-3xl font-black text-white group-hover:text-yellow-500">
          {perf.title}
        </h3>
        <div className={`mt-4 transition-all ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <Link href="/gallery" className="text-[10px] uppercase border-b border-yellow-500/50">
            View Full Performance
          </Link>
        </div>
      </div>

      {!isHovered && (
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="border-2 border-white rounded-full p-4">
            <Play size={24} fill="white" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const signatureActs = [
    { title: "Classical Fusion", src: "/classical1.mp4", tag: "Contemporary" },
    { title: "Temple Rhythms", src: "/temple1.mp4", tag: "Kuchipudi-House" },
    { title: "Urban Groove", src: "/groove1.mp4", tag: "Bolly-Hop" },
  ];

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">

      {/* Background glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.08),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 bg-black/40 backdrop-blur-md border-b border-white/5"
      >
        <Logo className="text-2xl md:text-3xl" />

        <ul className="hidden lg:flex gap-10 text-xs uppercase tracking-widest">
          {navLinks.map((l) => (
            <li key={l.name}>
              <Link href={l.href} className="text-gray-400 hover:text-yellow-400">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="lg:hidden text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15),transparent_70%)] blur-3xl opacity-40" />

        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10 }}
            className="w-full h-full object-content brightness-[0.6]"
          >
            <source src="/hero1.mp4" type="video/mp4" />
          </motion.video>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"
          />
        </div>

        <div className="absolute text-center">
          <span className="text-yellow-500 tracking-widest text-xs uppercase">
            Classical • Modern • Fusion
          </span>

          <h1 className="text-6xl md:text-9xl font-black">
            Ama<span className="text-yellow-500 italic">~</span>Groove
          </h1>

          <p className="mt-8 text-gray-300">
            Indian Classical Rhythm meets Modern Western Groove
          </p>

          <div className="mt-12 flex gap-5 justify-center">
            <Link href="/gallery" className="px-10 py-4 bg-yellow-500 text-black font-black rounded-full hover:shadow-[0_0_25px_rgba(234,179,8,0.6)]">
              Watch Performances
            </Link>

            <Link href="/contact" className="px-10 py-4 border border-white/30 rounded-full hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]">
              Learn the Moves
            </Link>
          </div>
        </div>
      </section>

      {/* Signature */}
      <FadeIn>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {signatureActs.map((perf) => (
              <SignatureCard key={perf.title} perf={perf} />
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Footer */}
      <FadeIn>
        <footer className="relative pt-24 pb-12 px-6 bg-zinc-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <Logo className="text-3xl mb-8" />
              <p className="text-gray-500 max-w-sm mb-8 text-sm">
                Exploring the intersection of Indian classical heritage and modern western movement.
              </p>
              <div className="flex gap-6 text-gray-400">
                <Instagram size={20} />
                <Youtube size={20} />
                <Facebook size={20} />
              </div>
            </div>

            <div>
              <h4 className="text-white mb-6 text-xs uppercase">Explore</h4>
              <ul className="space-y-3 text-gray-500 text-sm">
                {navLinks.slice(1, 6).map((l) => (
                  <li key={l.name}>
                    <Link href={l.href}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white mb-6 text-xs uppercase">Contact</h4>
              <p className="text-gray-500 text-sm">amagroove@gmail.com</p>
              <p className="text-gray-500 text-sm">+91 8639810801</p>
            </div>
          </div>

          <div className="mt-20 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
            © {new Date().getFullYear()} Ama~Groove Ensemble
          </div>
        </footer>
      </FadeIn>

    </main>
  );
}
