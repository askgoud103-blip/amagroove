"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook, MessageCircle, ArrowRight, Play } from "lucide-react";

// 1. REUSABLE LOGO COMPONENT
const Logo = ({ className = "" }) => (
  <Link href="/" className={`font-extrabold tracking-tighter flex items-center ${className}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
      Ama
    </span>
    <motion.span 
      animate={{ y: [0, -3, 0] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="text-white mx-0.5 italic drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
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

// 2. SUB-COMPONENT FOR SIGNATURE CARDS (Fixes Hook Errors)
const SignatureCard = ({ perf }: { perf: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Control video playback based on hover state
  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="group relative h-[500px] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 cursor-pointer"
    >
      <video 
        ref={videoRef}
        src={perf.src}
        loop
        muted
        playsInline
        preload="metadata"
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isHovered ? "opacity-100 scale-105 grayscale-0" : "opacity-50 grayscale-[0.8]"
        }`}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      
      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest block mb-2">
          {perf.tag}
        </span>
        <h3 className="text-3xl font-black text-white group-hover:text-yellow-500 transition-colors duration-300">
          {perf.title}
        </h3>
        
        <div className={`mt-4 overflow-hidden transition-all duration-500 ${isHovered ? "max-h-10 opacity-100" : "max-h-0 opacity-0"}`}>
          <Link href="/gallery" className="inline-block text-[10px] text-white uppercase tracking-widest border-b border-yellow-500/50 pb-1 hover:border-yellow-500">
            View Full Performance
          </Link>
        </div>
      </div>

      {/* Play Icon Hint (Visible when NOT hovered) */}
      {!isHovered && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-0 transition-opacity">
           <div className="border-2 border-white rounded-full p-4">
              <Play size={24} fill="white" className="ml-1" />
           </div>
        </div>
      )}
    </motion.div>
  );
};

// 3. MAIN HOME COMPONENT
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const signatureActs = [
    { title: "Classical Fusion", src: "/classical1.mp4", tag: "Contemporary" },
    { title: "Temple Rhythms", src: "/temple1.mp4", tag: "Kuchipudi-House" },
    { title: "Urban Groove", src: "/groove1.mp4", tag: "Bolly-Hop" },
  ];

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        <Logo className="text-2xl md:text-3xl" />

        <ul className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-gray-400 hover:text-yellow-400 transition-all duration-300 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button className="lg:hidden z-50 p-2 text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: i * 0.05 }}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-yellow-500 hover:text-white transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden z-0 shadow-[0_0_100px_rgba(234,179,8,0.15)] border border-white/10"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-content brightness-[0.6]">
            <source src="/hero1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none mt-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="pointer-events-auto">
            <span className="text-yellow-500 font-bold tracking-[0.6em] text-[10px] md:text-xs uppercase mb-6 block drop-shadow-lg">
              Classical • Modern • Fusion
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.9)] leading-none select-none">
              Ama<span className="text-yellow-500 italic">~</span>Groove
            </h1>
            <p className="mt-8 text-sm md:text-xl text-gray-200 font-light tracking-[0.1em] max-w-xl mx-auto italic drop-shadow-md">
              Indian Classical Rhythm meets Modern Western Groove
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/gallery" className="group px-10 py-4 bg-yellow-500 text-black font-black rounded-full hover:bg-white transition-all text-xs uppercase tracking-widest flex items-center gap-2">
                Watch Performances <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-widest backdrop-blur-md">
                Learn the Moves
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Acts Section */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-2 border-yellow-500 pl-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">Signature Acts</h2>
              <p className="text-gray-500 text-sm mt-2 tracking-[0.2em] uppercase font-bold">Blending Traditions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {signatureActs.map((perf, index) => (
              <SignatureCard key={index} perf={perf} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-24 pb-12 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <Logo className="text-3xl mb-8" />
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed text-sm">
              Exploring the intersection of Indian classical heritage and modern western movement.
            </p>
            <div className="flex gap-6 text-gray-400">
              <Instagram className="hover:text-yellow-500 transition-all cursor-pointer" size={20} />
              <Youtube className="hover:text-yellow-500 transition-all cursor-pointer" size={20} />
              <Facebook className="hover:text-yellow-500 transition-all cursor-pointer" size={20} />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              {navLinks.slice(1, 6).map(link => (
                <li key={link.name}><Link href={link.href} className="hover:text-yellow-500 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <a href="mailto:amagroove@gmail.com" className="text-gray-500 text-sm block mb-2 hover:text-white transition-colors underline decoration-yellow-500/30">amagroove@gmail.com</a>
            <p className="text-gray-500 text-sm">+91 8639810801</p>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[9px] uppercase tracking-[0.3em] font-bold text-center">
          <p>© {new Date().getFullYear()} Ama~Groove Ensemble</p>
          <p>Handcrafted for the Global Stage</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/918639810801" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-[100] border-4 border-black">
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
