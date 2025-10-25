"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home"className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transforming Homes into Art
      </motion.h1>
      <motion.p
        className="text-gray-600 text-lg md:text-xl max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Crafting personalized residential spaces with elegance and functionality.
      </motion.p>
    </section>
  );
}
