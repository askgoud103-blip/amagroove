"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Facebook, MessageCircle, ArrowRight } from "lucide-react";

// 1. REUSABLE LOGO COMPONENT
const Logo = ({ className = "" }) => (
  <Link href="/" className={`font-extrabold tracking-tighter flex items-center ${className}`}>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
      Ama
    </span>
    <motion.span 
      animate={{ y: [0, -3, 0] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="text-white mx-0.5 italic drop-shadow-[0_0_8px_white]"
    >
      ~
    </motion.span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Custom Cursor Logic for that "Dance Movement" feel
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* CUSTOM CURSOR (Hidden on Mobile) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border-2 border-yellow-500 rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full z-0 object-cover object-[center_25%] brightness-[0.6] pointer-events-none"
        >
          <source src="/hero1.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-black/20 z-10 backdrop-blur-[2px]" />

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
          <Logo className="text-2xl md:text-4xl" />

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button className="lg:hidden z-50 p-2 text-yellow-500" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-yellow-500 tracking-tighter hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
          >
            <span className="text-yellow-500 font-bold tracking-[0.5em] text-xs md:text-sm uppercase mb-4 block">
              Experience the Fusion
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] leading-none">
              Ama<span className="text-yellow-500 italic">~</span>Groove
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-lg md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto italic"
          >
            "Where the discipline of Indian Classical meets the raw energy of Western Modern Dance."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link href="/performances" className="group px-10 py-4 bg-yellow-500 text-black font-black rounded-full hover:bg-white transition-all shadow-2xl flex items-center justify-center gap-2">
              EXPLORE ACTS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="px-10 py-4 border border-white/20 backdrop-blur-md text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">
              OUR STORY
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED PERFORMANCES */}
      <section className="relative z-20 py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-2 italic">Signature Acts</h2>
              <p className="text-yellow-500 font-medium tracking-widest uppercase text-sm">Curated Fusion Choreography</p>
            </div>
            <Link href="/performances" className="text-gray-500 hover:text-yellow-500 transition-colors uppercase text-xs tracking-widest font-bold border-b border-gray-800 pb-1">
              View All Works
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Classical Fusion", img: "/perf1.jpg", desc: "Bharatanatyam technique meets contemporary floorwork." },
              { title: "Temple Rhythms", img: "/perf2.jpg", desc: "The soulful storytelling of Kathak over modern electronic beats." },
              { title: "Urban Groove", img: "/perf3.jpg", desc: "A high-octane mix of Bolly-hop and classical mudras." },
            ].map((perf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5"
              >
                <div className="h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                  <img 
                    src={perf.img} 
                    alt={perf.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0" 
                  />
                </div>
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{perf.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{perf.desc}</p>
                  <Link href="/contact" className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Book Performance</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="relative z-20 pt-24 pb-12 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          
          <div className="md:col-span-2">
            <Logo className="text-3xl mb-8" />
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Ama~Groove is a premier dance ensemble based in India, specializing in the seamless blending of heritage and hip-hop, mudras and modernism.
            </p>
            <div className="flex gap-6 text-gray-400">
              <Instagram className="cursor-pointer hover:text-yellow-500 transition-all hover:-translate-y-1" />
              <Youtube className="cursor-pointer hover:text-yellow-500 transition-all hover:-translate-y-1" />
              <Facebook className="cursor-pointer hover:text-yellow-500 transition-all hover:-translate-y-1" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {navLinks.slice(1, 6).map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-yellow-500 transition-colors inline-block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-xs">Direct Line</h4>
            <a href="mailto:amagroove@gmail.com" className="text-gray-400 text-sm block mb-2 hover:text-yellow-500 transition-colors font-medium">amagroove@gmail.com</a>
            <a href="tel:+918639810801" className="text-gray-400 text-sm block hover:text-yellow-500 transition-colors">+91 86398 10801</a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Ama~Groove. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            Ancient Roots • Modern Rhythm
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/918639810801"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all z-50 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat with us
        </span>
      </a>
    </main>
  );
}
