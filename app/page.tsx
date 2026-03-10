"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook, MessageCircle, ArrowRight } from "lucide-react";

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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5">
        <Logo className="text-2xl md:text-3xl" />

        {/* Desktop Nav */}
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

        {/* Mobile Toggle */}
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

      {/* 1. HERO SECTION (CENTERED VIDEO STYLE) */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 pb-12 px-6">
        
        {/* The Centered Video Frame */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden z-0 shadow-[0_0_100px_rgba(234,179,8,0.15)] border border-white/10"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-[0.6]"
          >
            <source src="/hero1.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle Video Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>

        {/* Floating Text Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none mt-10">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="pointer-events-auto"
          >
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
              <Link href="/performances" className="group px-10 py-4 bg-yellow-500 text-black font-black rounded-full hover:bg-white transition-all text-xs uppercase tracking-widest flex items-center gap-2">
                Watch Acts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="px-10 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-widest backdrop-blur-md">
                Book Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SIGNATURE ACTS SECTION */}
      <section className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-2 border-yellow-500 pl-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">Signature Acts</h2>
              <p className="text-gray-500 text-sm mt-2 tracking-[0.2em] uppercase font-bold">Blending Traditions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Classical Fusion", img: "/perf1.jpg", tag: "Contemporary" },
              { title: "Temple Rhythms", img: "/perf2.jpg", tag: "Kathak-House" },
              { title: "Urban Groove", img: "/perf3.jpg", tag: "Bolly-Hop" },
            ].map((perf, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
              >
                <img 
                  src={perf.img} 
                  alt={perf.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 grayscale-[0.3] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest">{perf.tag}</span>
                  <h3 className="text-3xl font-black text-white mt-2 group-hover:text-yellow-500 transition-colors">{perf.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="relative pt-24 pb-12 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          
          <div className="md:col-span-2">
            <Logo className="text-3xl mb-8" />
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed text-sm">
              Exploring the intersection of Indian classical heritage and modern western movement. Available for workshops, events, and global performances.
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
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-yellow-500 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact</h4>
            <a href="mailto:amagroove@gmail.com" className="text-gray-500 text-sm block mb-2 hover:text-white transition-colors underline decoration-yellow-500/30">amagroove@gmail.com</a>
            <p className="text-gray-500 text-sm">+91 8639810801</p>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[9px] uppercase tracking-[0.3em] font-bold">
          <p>© {new Date().getFullYear()} Ama~Groove Ensemble</p>
          <p>Handcrafted for the Global Stage</p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918639810801"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-[100] border-4 border-black"
      >
        <MessageCircle size={24} />
      </a>
    </main>
  );
}
