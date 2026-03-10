{/* Image Gallery */}
<motion.section
  className="mt-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-semibold text-[var(--gold)] mb-6">
    Performance Gallery
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    <img
      src="/gallery1.jpg"
      alt="Performance moment 1"
      className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
    />

    <img
      src="/gallery2.jpg"
      alt="Performance moment 2"
      className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
    />

    <img
      src="/gallery3.jpg"
      alt="Performance moment 3"
      className="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
    />

  </div>
</motion.section>

