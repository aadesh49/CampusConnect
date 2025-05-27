"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is CampusConnect?",
    answer:
      "CampusConnect is a platform that empowers students to raise issues, upvote them, and stay informed about campus events.",
  },
  {
    question: "How do I post an issue?",
    answer:
      "Simply log in and click on 'Post an Issue' from the homepage. Fill in the details and submit.",
  },
  {
    question: "Can I upvote anonymously?",
    answer:
      "Yes, your upvotes are anonymous to other users, but they help increase the visibility of important issues.",
  },
  {
    question: "Will I get updates on posts I follow?",
    answer:
      "Yes, you'll be notified when someone comments or takes action on posts you're following.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-24 px-6" id="faqs">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-500 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              {/* Question Row */}
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(index)}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-blue-500 text-xl">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              {/* Animated Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3 text-gray-400"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
