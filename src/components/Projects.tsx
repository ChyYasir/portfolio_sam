"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Mic } from "lucide-react";

const projectsData = [
  {
    title: "Innovation Hub - Travel Information Website",
    icon: Globe,
    technologies: "HTML, CSS, JavaScript, MySQL",
    period: "June 2022 – August 2022",
    description:
      "Developed a user-friendly web system to help travelers in Bangladesh access accurate and reliable information about the country. The website serves as a comprehensive travel guide for tourists.",
    organization: "Sheikh Kamal IT Business Incubator",
  },
  {
    title: "Python Voice Assistant",
    icon: Mic,
    technologies: "Python, Jupyter Notebook",
    period: "October 2023 – December 2023",
    description:
      "Built a voice assistant digital interface that responds to spoken commands, providing users with information, performing tasks, and controlling devices. Leveraged natural language processing similar to Siri, Google Assistant, and Amazon Alexa.",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Projects</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <project.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-900">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2 text-sm">
                <p className="text-purple-700">
                  <span className="font-semibold">Technologies:</span>{" "}
                  {project.technologies}
                </p>
                <p className="text-gray-600">{project.period}</p>
                {project.organization && (
                  <p className="text-purple-600 font-semibold">
                    {project.organization}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
