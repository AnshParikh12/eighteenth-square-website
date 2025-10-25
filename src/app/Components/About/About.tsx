"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Eighteenth Square
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg md:text-xl max-w-xl mb-8 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Eighteenth Square is dedicated to transforming ordinary spaces into extraordinary homes. 
          We combine creativity, functionality, and attention to detail to design spaces that truly reflect your personality and lifestyle.
        </motion.p>
      </div>
    </section>
  );
}
