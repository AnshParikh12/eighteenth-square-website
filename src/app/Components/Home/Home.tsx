"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="pt-[124px] min-h-[70vh] flex flex-col justify-center items-center text-center bg-gray-50 px-6"
    >
      {/* Main Heading */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Eighteenth Square
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-700 text-base md:text-lg max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Each &quot;square&quot; represents a chapter, a project. Each interior and
        architectural space adds to this growing mosaic.
      </motion.p>
    </section>
  );
}
