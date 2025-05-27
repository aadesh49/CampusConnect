"use client";

import { motion } from "framer-motion";
import {
  FaSignInAlt,
  FaBullhorn,
  FaThumbsUp,
  FaBell,
  FaChevronRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSignInAlt className="text-blue-500 text-3xl" />,
    title: "Login to Your Account",
    description: "Start by logging in with your college email to access the platform.",
  },
  {
    icon: <FaBullhorn className="text-green-500 text-3xl" />,
    title: "Post an Issue or Event",
    description: "Raise your concern or share an event with the community.",
  },
  {
    icon: <FaThumbsUp className="text-yellow-500 text-3xl" />,
    title: "Get Upvotes",
    description: "Others in the college can support your post by upvoting it.",
  },
  {
    icon: <FaBell className="text-pink-500 text-3xl" />,
    title: "Stay Updated",
    description: "Receive real-time updates when actions are taken or new comments arrive.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-24 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-500">How CampusConnect Works</h2>
        <p className="text-gray-300 mb-16">
          A simple and transparent flow designed to empower student voices.
        </p>

        {/* Timeline Wrapper */}
        <div className="relative flex flex-col gap-16 sm:flex-row sm:justify-between sm:items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 sm:w-full">
              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 text-center sm:text-left sm:w-full"
              >
                <div className="flex flex-col items-center sm:items-start">
                  <div className="bg-gray-800 p-4 rounded-full mb-4 shadow-lg">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>

              {/* Connector Icon (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden sm:flex justify-center items-center w-16 h-16">
                  <FaChevronRight className="text-gray-500 text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
