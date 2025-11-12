"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a{" "}
              <span className="text-purple-600 font-semibold">
                Lecturer at Southern University Bangladesh
              </span>
              , specializing in Computer Science and Information Technology.
              With a strong academic background from
              <span className="text-purple-600 font-semibold">
                {" "}
                Chittagong University of Engineering and Technology (CUET)
              </span>
              , I achieved a{" "}
              <span className="text-purple-600 font-semibold">
                CGPA of 3.72/4.00
              </span>
              .
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My research interests lie at the intersection of{" "}
              <span className="text-purple-600 font-semibold">
                Blockchain Technology, Artificial Intelligence, and Deep
                Learning
              </span>
              . I have published multiple papers at prestigious international
              conferences including IEEE and Springer venues, focusing on
              innovative solutions for e-waste management, sentiment analysis,
              and endangered species conservation.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I am deeply passionate about both{" "}
              <span className="text-purple-600 font-semibold">
                research and teaching
              </span>
              , with a commitment to maintaining high academic standards and
              applying my expertise to solve real-world problems. My goal is to
              make a positive impact on society through meaningful academic
              work, innovative research, and exceptional teaching.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
