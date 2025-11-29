"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-black text-white">
    
    
       {/* Background Video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute inset-0 w-full h-full object-cover z-10
    object-[center_20%]   /* mobile: show dancers */
    md:object-center      /* desktop: also centered but responsive fix */
    brightness-125 contrast-110 
    pointer-events-none
  "
>
  <source src="/hero1.mp4" type="video/mp4" />
</video>

      {/* Dark Overlay */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-20" />


{/* Navbar */}
<nav className="absolute top-0 left-0 w-full z-50 px-8 py-4 flex justify-between items-start">


  {/* Left Side: Logo (top) + Small Video (below) */}
  <div className="flex flex-col items-start gap-1">
   <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    text-2xl md:text-4xl 
    font-extrabold 
    
    text-transparent
    bg-clip-text
    bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200
    drop-shadow-[0_0_35px_rgba(255,215,0,0.9)]
  "
>
  Ama<span className="wave-symbol">~</span>Groove
</motion.h1>


    <video
      className="w-20 md:w-24 rounded-lg shadow-lg border-2 border-[var(--gold)]"
      autoPlay loop muted playsInline
    >
      <source src="/hero1.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Right Side: Nav Links */}
  <ul className="flex gap-6 text-lg font-medium items-center mt-2 mobile-stack">
    <li><a href="/" className="hover:text-[var(--gold)] transition-all">Home</a></li>
    <li><a href="/about" className="hover:text-[var(--gold)] transition-all">About</a></li>
    <li><a href="/performances" className="hover:text-[var(--gold)] transition-all">Performances</a></li>
    <li><a href="/videos" className="hover:text-[var(--gold)] transition-all">Videos</a></li>
    <li><a href="/gallery" className="hover:text-[var(--gold)] transition-all">Gallery</a></li>
    <li><a href="/events" className="hover:text-[var(--gold)] transition-all">Events</a></li>
    <li><a href="/contact" className="hover:text-[var(--gold)] transition-all">Contact</a></li>
  </ul>

</nav>


      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">

       <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl md:text-7xl font-bold text-[var(--gold)] drop-shadow-2xl animate-pulse"
>
  Ama<span className="wave-symbol">~</span>Groove
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.3 }}
  className="mt-4 max-w-3xl text-lg md:text-2xl text-gray-200"
>
  Where Indian Classical Rhythm merges with Modern Western Groove
</motion.p>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="mt-10 flex gap-4"
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
      
           
      {/* Footer */}
<motion.footer
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="relative z-20 w-full mt-20 bg-black/70 border-t border-gray-700 py-10 px-6"
>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mobile-center">

    {/* Left: Logo */}
    <div>
      <h2 className="text-2xl font-bold text-[var(--gold)] mb-4">Ama<span className="wave-symbol">~</span>Groove</h2>
      <p className="text-gray-300 text-sm">
        Where Indian Classical Rhythm Blends with Modern Western Groove.
      </p>
    </div>

    {/* Middle: Links */}
    <div>
      <h3 className="text-lg font-semibold text-[var(--gold)] mb-3">Quick Links</h3>
      <ul className="text-gray-300 space-y-2 text-sm">
        <li><a href="/" className="hover:text-[var(--gold)]">Home</a></li>
        <li><a href="/about" className="hover:text-[var(--gold)]">About</a></li>
        <li><a href="/performances" className="hover:text-[var(--gold)]">Performances</a></li>
        <li><a href="/videos" className="hover:text-[var(--gold)]">Videos</a></li>
        <li><a href="/events" className="hover:text-[var(--gold)]">Events</a></li>
        <li><a href="/contact" className="hover:text-[var(--gold)]">Contact</a></li>
      </ul>
    </div>

    {/* Right: Contact */}
    <div>
      <h3 className="text-lg font-semibold text-[var(--gold)] mb-3">Contact</h3>
      <p className="text-gray-300 text-sm">Email: amagroove@gmail.com</p>
      <p className="text-gray-300 text-sm mt-1">Phone: +91 8639810801</p>
    </div>
  </div>
  <div className="flex items-center gap-4 mt-4 mobile-center">
  <a href="#" className="text-gray-300 hover:text-[var(--gold)] text-xl">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" className="text-gray-300 hover:text-[var(--gold)] text-xl">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="#" className="text-gray-300 hover:text-[var(--gold)] text-xl">
    <i className="fab fa-facebook"></i>
  </a>
</div>

  

  {/* Bottom line */}
  <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
    © {new Date().getFullYear()} Ama<span className="wave-symbol">~</span>Groove. All rights reserved.
  </div>
</motion.footer>
<a
  href="https://wa.me/8639810801"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
>
  WhatsApp Chat
</a>



    </main>
  );
}

