"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
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
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about Blockchain, Artificial Intelligence, and Deep
              Learning. Committed to making a positive impact through research
              and education.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="#contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link
                href="#research"
                className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300 shadow-md inline-block text-center"
              >
                View Research
              </Link>
              <a
                href="/cv/Ishraq_Samiha_CV.pdf"
                download="Ishraq_Samiha_CV.pdf"
                className="bg-purple-100 text-purple-700 px-6 py-3 rounded-full font-medium border-2 border-purple-300 hover:bg-purple-200 transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full"></div>
                <div className="absolute inset-2 bg-white rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ishraq Samiha"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link href="#about" className="inline-block animate-bounce">
            <ArrowDown className="text-purple-600" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
