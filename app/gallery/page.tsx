"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/g4.jpg",
    "/g5.jpg",
    "/g6.jpg",
  ];

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
          Gallery
        </motion.h1>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </main>
  );
}

