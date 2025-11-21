"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Performances() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <Link href="/" className="text-gray-300 hover:text-yellow-400 text-sm">
        ← Back to Home
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-yellow-400 mt-8"
      >
        Performances
      </motion.h1>

      <p className="mt-6 text-gray-300 text-lg max-w-2xl">
        Performance videos, live shows, collaborations and recordings will be listed here.
      </p>
    </main>
  );
}

