"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-purple-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ishraq Samiha
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-purple-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lecturer | Researcher | Developer
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about Blockchain, Artificial Intelligence, and Deep
            Learning. Committed to making a positive impact through research and
            education.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="#contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link
              href="#research"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-md"
            >
              View Research
            </Link>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link href="#about" className="inline-block animate-bounce">
              <ArrowDown className="text-purple-600" size={32} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
