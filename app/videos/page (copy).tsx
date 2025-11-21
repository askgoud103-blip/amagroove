"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Videos() {
  return (
    <main className="relative w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Link */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-300 hover:text-yellow-400">
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-yellow-400 mb-10"
        >
          Videos
        </motion.h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Video 1 - YouTube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Amagroove Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Video 2 - Local MP4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-900"
          >
            <video
              controls
              className="w-full h-64 md:h-80 object-cover"
            >
              <source src="/promo.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Video 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Performance Video"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Video 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="rounded-xl overflow-hidden shadow-lg bg-gray-900"
          >
            <video
              controls
              className="w-full h-64 md:h-80 object-cover"
            >
              <source src="/hero1.mp4" type="video/mp4" />
            </video>
          </motion.div>

        </div>
      </div>
    </main>
  );
}

