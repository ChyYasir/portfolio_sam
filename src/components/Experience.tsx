"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container bg-purple-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Work Experience</h2>

        <div className="max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-purple-600" size={24} />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-purple-900 mb-2">
                  Lecturer
                </h3>
                <p className="text-xl text-purple-700 mb-3">
                  Southern University Bangladesh
                </p>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>July 2025 – Present</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Department of Computer Science and Information Technology,
                  Chittagong, Bangladesh
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">
                      Teaching Responsibilities:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Algorithm Design and Analysis</li>
                      <li>Artificial Intelligence</li>
                      <li>Compiler Design</li>
                      <li>Mobile App Development</li>
                      <li>System Analysis and Design</li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    Conducting both theoretical lectures and practical lab
                    sessions, ensuring students gain comprehensive understanding
                    through hands-on experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                Industrial Attachment
              </h3>
              <p className="text-purple-700 font-semibold mb-2">
                Softrobotics Bangladesh Limited
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• SQL Fundamentals with Laragon</li>
                <li>• Laravel Framework (MVC, Eloquent ORM)</li>
                <li>• Access Control & Secure Databases</li>
                <li>• Telemedicine Platform Development</li>
                <li>• Version Control with Git & GitHub</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                C# and .NET Training
              </h3>
              <p className="text-purple-700 font-semibold mb-2">
                CUET Edge Course
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• C# Fundamentals & OOP</li>
                <li>• ASP.NET Web Forms & ASP.NET 6.0</li>
                <li>• Entity Framework & Web APIs</li>
                <li>• BI Tools (SSRS, RDLC)</li>
                <li>• Full-Stack Project Implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
