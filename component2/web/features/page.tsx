"use client";

import {
  BarChart,
  BookOpen,
  Layers,
  LayoutDashboard,
  Lock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    title: "Smart Book Tracking",
    desc: "Track borrowed books, due dates, and returns automatically with ease.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-blue-600" />,
    title: "Librarian Dashboard",
    desc: "Control library activity with intuitive tools for inventory and reader management.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-600" />,
    title: "Reading Analytics",
    desc: "Gain insights into reading patterns and library usage by students.",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    title: "Multi-Library Support",
    desc: "Manage several school or institution libraries from a single account.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Reading Skill Tools",
    desc: "Support readers with digital tools to improve literacy and engagement.",
  },
  {
    icon: <Lock className="w-6 h-6 text-blue-600" />,
    title: "Cloud-Based & Secure",
    desc: "Your data is safe, encrypted, and accessible from anywhere at any time.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onViewportLeave={() => {}}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className="text-indigo-600">Powerful Tools for</span> Smarter
          Libraries
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportLeave={() => {}}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Niti Book brings together innovation and usability to help Rwandan
          libraries lead in digital transformation.
        </motion.p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            onViewportLeave={() => {}}
            viewport={{ margin: "-50px", amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: i * 0.1 + 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              onViewportLeave={() => {}}
              viewport={{ margin: "-50px" }}
              className="mb-4"
            >
              {feature.icon}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: i * 0.1 + 0.3,
                },
              }}
              viewport={{ margin: "-50px" }}
              className="text-xl font-semibold text-gray-800 mb-2"
            >
              {feature.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.6,
                  delay: i * 0.1 + 0.4,
                },
              }}
              onViewportLeave={() => {}}
              viewport={{ margin: "-50px" }}
              className="text-gray-600"
            >
              {feature.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
