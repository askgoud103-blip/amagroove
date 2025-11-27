"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videosData = [
  {
    id: 1,
    title: "Fusion Live Performance",
    date: "2025-11-30",
    src: "/videos/fusion_live.mp4",
    poster: "/videos/thumbnails/fusion_live.jpg",
  },
  {
    id: 2,
    title: "Rhythm Workshop",
    date: "2025-12-05",
    src: "/videos/rhythm_workshop.mp4",
    poster: "/videos/thumbnails/rhythm_workshop.jpg",
  },
  {
    id: 3,
    title: "Seasonal Jam Session",
    date: "2025-12-20",
    src: "/videos/jam_session.mp4",
    poster: "/videos/thumbnails/jam_session.jpg",
  },
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

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
          Videos
        </motion.h1>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mx-auto">
          {videosData.map((video) => (
            <motion.div
              key={video.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setActiveVideo(video.id)}
              className="cursor-pointer relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_var(--gold)] transition-all duration-300"
            >
              <img
                src={video.poster}
                alt={video.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
                <h2 className="text-lg font-semibold text-[var(--gold)]">{video.title}</h2>
                <p className="text-gray-400 text-sm">{video.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.video
              key={activeVideo}
              src={videosData.find((v) => v.id === activeVideo)?.src}
              controls
              autoPlay
              className="w-full max-w-3xl rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking video
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

