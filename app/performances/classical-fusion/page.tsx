import Link from "next/link";
import { motion } from "framer-motion";

export default function ClassicalFusionPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
        <Link href="/" className="hover:text-[var(--gold)]">
          Home
        </Link>
        <span>/</span>
        <Link href="/performances" className="hover:text-[var(--gold)]">
          Performances
        </Link>
        <span>/</span>
        <span className="text-gray-300">Classical Fusion</span>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="inline-block mb-10 text-[var(--gold)] hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Title + Description */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--gold)] mb-6">
          Classical Fusion
        </h1>

        <p className="max-w-3xl text-gray-300 mb-10">
          A powerful blend of Indian classical rhythm and modern expression,
          celebrating storytelling through movement, rhythm, and emotion.
        </p>
      </motion.div>

      {/* Video Section */}
      <motion.video
        src="/perf1.mp4"
        controls
        className="w-full max-w-4xl rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </main>
  );
}

