"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award } from "lucide-react";

const researchData = [
  {
    title:
      "A Blockchain Enabled Process Adaptation Framework for E-Waste Resource Recovery",
    year: "2024-2025",
    type: "Undergraduate Thesis",
    venue:
      "9th Symposium on Distributed Ledger Technology (SDLT 2025), Melbourne, Australia",
    publisher: "Springer's CCIS",
    description:
      "Optimized e-waste resource recovery using smart contracts and dynamic process adaptation, ensuring transparency, automation, and sustainability.",
    supervisors: "Dr. Rahma Bintey Mufiz Mukta and Md. Shafiul Alam Forhad",
  },
  {
    title:
      "Blockchain-Based Solutions for E-Waste Management: A Review of Opportunities and Challenges",
    year: "2024",
    venue: "IEEE IATMSI-2025, Gwalior, India",
    doi: "10.1109/IATMSI64286.2025.10985377",
    author: "1st Author",
  },
  {
    title:
      "Multi-Blockchain Backup & Restore System with Zero-Knowledge Proofs (ZKPs)",
    year: "2024",
    venue:
      "IEEE 2nd International Conference on Next-Generation Computing, IoT, and Machine Learning (NCIM 2025)",
    doi: "10.1109/NCIM65934.2025.11160331",
    author: "1st Author",
  },
  {
    title:
      "AI-Based Image Classification and Conservation of Endangered Bird Species in Bangladesh",
    year: "2024",
    venue: "AICSET 2025, Marrakech, Morocco & IEEE QPAIN 2025",
    author: "1st Author",
  },
  {
    title:
      "A Hybrid Deep Learning Approach For Dialect-Specific Sentiment Analysis of Bangla Regional Linguistics",
    year: "2024",
    venue: "IEEE NCIM 2025",
    doi: "10.1109/NCIM65934.2025.11160009",
    author: "1st Author",
  },
  {
    title:
      "A Feasibility Study of Hybrid Hydrokinetic and Solar Power Generation at Bandarban Hill Tracts for Off-Grid Communities",
    year: "2024",
    venue:
      "4th International Conference on Electrical, Computer, Communication (ECCE 2025)",
    doi: "10.1109/ECCE64574.2025.11013980",
    author: "5th Author",
  },
];

const awards = [
  "Finalist in Blockchain Olympiad Bangladesh 2024 (BCOLBD)",
  "Finalist in IEEE CUET Student Branch FACE THE CASE 2.0",
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="section-container bg-purple-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Research & Publications</h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {researchData.map((research, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-purple-600" size={20} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">
                    {research.title}
                  </h3>

                  {research.description && (
                    <p className="text-gray-700 mb-3">{research.description}</p>
                  )}

                  {research.supervisors && (
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">Supervised by:</span>{" "}
                      {research.supervisors}
                    </p>
                  )}

                  <div className="space-y-1 text-sm">
                    <p className="text-purple-700">
                      <span className="font-semibold">Venue:</span>{" "}
                      {research.venue}
                    </p>

                    {research.publisher && (
                      <p className="text-purple-700">
                        <span className="font-semibold">Publisher:</span>{" "}
                        {research.publisher}
                      </p>
                    )}

                    {research.doi && (
                      <p className="text-gray-600">
                        <span className="font-semibold">DOI:</span>{" "}
                        {research.doi}
                      </p>
                    )}

                    {research.author && (
                      <p className="text-purple-600 font-semibold">
                        {research.author}
                      </p>
                    )}

                    <p className="text-gray-500">{research.year}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <div className="card bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="text-purple-600" size={28} />
              <h3 className="text-2xl font-bold text-purple-900">
                Awards & Recognition
              </h3>
            </div>
            <ul className="space-y-2">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
