"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Play } from "lucide-react"; // Import Play icon for video thumbnails

export default function Gallery() {
  // Update state to handle objects
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; type: "image" | "video" } | null>(null);

  // Unified media array
  const media = [
    { src: "/temple1.mp4", type: "video" }, // Your first video
    { src: "/classical1.mp4", type: "video" }, // Your second video
    { src: "/groove1.mp4", type: "video" }, // Your second video
    
    { src: "/temple2.mp4", type: "video" }, //  
    { src: "/classical2.mp4", type: "video" }, //  
    { src: "/groove2.mp4", type: "video" }, //  
    
    { src: "/temple3.mp4", type: "video" },
    { src: "/classical3.mp4", type: "video" },
    { src: "/groove3.mp4", type: "video" }, 
    
    { src: "/temple4.mp4", type: "video" },
    { src: "/classical4.mp4", type: "video" },
    { src: "/groove4.mp4", type: "video" }, 
    
    { src: "/g4.jpg", type: "image" },
    { src: "/g5.jpg", type: "image" },
    { src: "/perf1.mp4", type: "video" },
    
    { src: "/g4.jpg", type: "image" },
    { src: "/g5.jpg", type: "image" },
    { src: "/g6.jpg", type: "image" },
  ];

  return (
    <main className="relative w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-yellow-500 mb-10 italic"
        >
          Gallery
        </motion.h1>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-900 aspect-square sm:aspect-video"
              onClick={() => setSelectedMedia({ src: item.src, type: item.type as "image" | "video" })}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery Item"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    muted
                    playsInline
                  />
                  {/* Video Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-500 p-3 rounded-full text-black shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={20} fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedMedia && (
        <div
          onClick={() => setSelectedMedia(null)}
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] cursor-pointer p-4 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full max-h-[85vh] flex justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the media itself
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-white/10"
              />
            )}
            
            {/* Close Button */}
            <button 
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-500 font-bold text-lg uppercase tracking-widest"
            >
                Close ×
            </button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
