"use client";
import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";


export default function ContactPage() {
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
          Contact Us
        </motion.h1>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl bg-gray-900 p-8 rounded-xl shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[var(--gold)] outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[var(--gold)] outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[var(--gold)] outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[var(--gold)] text-black font-semibold rounded-xl hover:bg-yellow-400 transition-all duration-200"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-12 text-gray-400 text-center"
        >
          <p>Email: <span className="text-[var(--gold)]">info@amagroove.com</span></p>
          <p>Phone: <span className="text-[var(--gold)]">+91 8639810801</span></p>
          <p>Follow us on social media for latest updates!</p>
        </motion.div>
      </div>
    </main>
  );
}

