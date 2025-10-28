"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Eighteenth Square
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-3xl mb-6 mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Having met during the eighteenth year of our lives, we began our journey in the field of design with a shared passion and purpose.  
        </motion.p>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-3xl mb-6 mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Eighteenth Square is more than just a name - it&apos;s a reflection of our origins, a symbol of growth, and a roadmap of creative intent. Each &ldquo;square&rdquo; represents a chapter shaped by experience, evolution, and deliberate design.
        </motion.p>

        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          With every project, we add to this growing mosaic - crafting spaces that embody thoughtfulness, meaning, and timeless aesthetics. At Eighteenth Square, architecture and interiors are not merely constructed; they are envisioned.
        </motion.p>
      </div>
    </section>
  );
}
