"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    name: "Malabar County 2",
    description: "A modern and cozy living space transformed with elegant design.",
    images: [
      "/projects/Malabar-County-2-Birwaben/livingroom1.jpg",
      "/projects/Malabar-County-2-Birwaben/livingroom2.jpg",
      "/projects/Malabar-County-2-Birwaben/livingroom3.jpg",
      "/projects/Malabar-County-2-Birwaben/diningroom1.jpg",
      "/projects/Malabar-County-2-Birwaben/masterbedroom1.jpg",
      "/projects/Malabar-County-2-Birwaben/masterbedroom2.jpg",
      "/projects/Malabar-County-2-Birwaben/parentbedroom1.jpg",
      "/projects/Malabar-County-2-Birwaben/parentbedroom2.jpg",
      "/projects/Malabar-County-2-Birwaben/terrace1.jpg",
    ],
  },
  // Add more projects here if needed
];

function SingleProjectCarousel({ project }: { project: typeof projects[0] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 4000);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [project.images.length]);

  const nextImage = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % project.images.length);
    resetTimer();
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + project.images.length) % project.images.length);
    resetTimer();
  };

  return (
    <section
      id="projects"
      className="relative w-full mb-16"
      style={{ height: "calc(100vh - 130px)" }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          src={project.images[current]}
          alt={`Project Image ${current + 1}`}
          className="w-full h-full object-cover absolute top-0 left-0"
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-12">
        <motion.h3
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.name}
        </motion.h3>
        <motion.p
          className="text-white text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <FaChevronRight />
      </button>
    </section>
  );
}

export default function ProjectCarousel() {
  return (
    <div>
      {projects.map((project, index) => (
        <SingleProjectCarousel key={index} project={project} />
      ))}
    </div>
  );
}
