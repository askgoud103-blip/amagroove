"use client";

import { motion } from "framer-motion";

export default function Events() {
  const upcomingEvents = [
    {
      name: "Classical Meets Groove",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "Mumbai, India",
      image: "/events/event1.jpg"
    },
    {
      name: "Tabla & Western Fusion",
      date: "Jan 12, 2026",
      time: "6:30 PM",
      location: "Bangalore, India",
      image: "/events/event2.jpg"
    }
  ];

  const pastEvents = [
    {
      name: "Fusion Night Live",
      date: "Aug 20, 2025",
      location: "Chennai, India",
      image: "/events/past1.jpg"
    },
    {
      name: "Rhythms & Beats",
      date: "Jul 15, 2025",
      location: "Delhi, India",
      image: "/events/past2.jpg"
    }
  ];

  return (
    <main className="relative w-full min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-bold text-yellow-400 mb-12"
        >
          U

