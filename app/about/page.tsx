"use client";
import Navbar from "@/components/Navbar";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Breadcrumb / small nav */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-yellow-400">
            ← Back to Home
          </Link>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl md:text-6xl font-bold text-yellow-400"
            >
              About Amagroove
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="mt-6 text-lg text-gray-200 max-w-xl"
            >
              We merge Indian classical rhythm with modern western groove — crafting
              cinematic, soulful soundscapes that move both body and mind. Founded
              by Satish Kumar, Amagroove brings tradition and modernity together.
            </motion.p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/performances"
                className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
              >
                See Performances
              </Link>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-black/40 p-6">
              <img
                src="/profile.jpg"
                alt="Amagroove"
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-yellow-400">Tanishka Amagowni</h3>
              <p className="text-gray-300 mt-2">
                Founder & composer — blending Kuchipudi, Classical, and Western with electronics to
                create unique rhythmic textures.
              </p>
            </div>
          </div>
        </section>

        {/* Mission / What we do */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-gray-300 max-w-3xl">
            We want to introduce Indian classical rhythmic ideas to global audiences
            through modern arrangements, collaborations and immersive live shows.
            Education, collaboration, and sonic exploration are at our core.
          </p>
        </section>

        {/* Values / Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 bg-gray-900/30 rounded-xl">
            <h3 className="text-lg font-semibold text-yellow-400">Tradition</h3>
            <p className="mt-2 text-gray-300">Deep respect for classical techniques.</p>
          </div>
          <div className="p-6 bg-gray-900/30 rounded-xl">
            <h3 className="text-lg font-semibold text-yellow-400">Innovation</h3>
            <p className="mt-2 text-gray-300">Modern production meeting ancient rhythm.</p>
          </div>
          <div className="p-6 bg-gray-900/30 rounded-xl">
            <h3 className="text-lg font-semibold text-yellow-400">Community</h3>
            <p className="mt-2 text-gray-300">Workshops, collaborations and performances.</p>
          </div>
        </section>

        {/* Team / Credits */}
        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-white mb-6">Team & Collaborators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-4 bg-gray-900/30 rounded-lg">
              <h4 className="font-semibold text-yellow-400">Tanishka Amagowni</h4>
              <p className="text-gray-300 mt-1">Founder, Composer, Blend of Classical Kuchipudi & Western Groove </p>
            </div>

            <div className="p-4 bg-gray-900/30 rounded-lg">
              <h4 className="font-semibold text-yellow-400">Kushi Akkada</h4>
              <p className="text-gray-300 mt-1">Western Mix</p>
            </div>

            <div className="p-4 bg-gray-900/30 rounded-lg">
              <h4 className="font-semibold text-yellow-400">______Ekkada</h4>
              <p className="text-gray-300 mt-1">Postures & Steps Cordination</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-12 px-6 rounded-xl bg-gradient-to-br from-black/20 to-gray-900/30">
          <h3 className="text-xl font-semibold text-white mb-4">Work with us</h3>
          <p className="text-gray-300 max-w-2xl mb-6">
            For bookings, workshops or collaborations — drop us a message.
          </p>

          <a
            href="mailto:hello@amagroove.com"
            className="inline-block px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Email Us
          </a>
        </section>
      </div>
    </main>
  );
}

