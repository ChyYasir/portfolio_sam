"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Boxes, Database, Wrench } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "Solidity"],
  },
  {
    category: "Frameworks & Libraries",
    icon: Boxes,
    skills: [
      "React",
      "Node.js",
      "Hyperledger Fabric",
      "Ethereum",
      "PyTorch",
      "Scikit-learn",
      "Matplotlib",
      "Pandas",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["Git", "Docker"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Technical Skills</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <category.icon className="text-purple-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-purple-900">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
