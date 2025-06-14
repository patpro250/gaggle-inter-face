"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.1, 1],
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.p
      ref={ref}
      animate={controls}
      className="text-4xl font-extrabold text-blue-600"
    >
      {value}+
    </motion.p>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-indigo-600"
            >
              Real Impact
            </motion.span>{" "}
            Across Rwanda
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Niti Book is empowering schools and libraries with better tools,
            smarter systems, and a brighter future for reading.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto mb-20"
        >
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatedCounter value={35} />
            <p className="mt-2 text-gray-700">Libraries Transformed</p>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatedCounter value={10000} />
            <p className="mt-2 text-gray-700">Books Tracked</p>
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AnimatedCounter value={6500} />
            <p className="mt-2 text-gray-700">Students Impacted</p>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              name: "Director Jean M.",
              role: "School Director – Kigali",
              text: "Niti Book completely changed the way our library works. Managing books and tracking students is now effortless.",
            },
            {
              name: "Librarian Aline U.",
              role: "Community Librarian",
              text: "Before Niti Book, everything was manual. Now we've saved hours every week and our readers are more engaged.",
            },
            {
              name: "Emmanuel K.",
              role: "Student – Huye District",
              text: "I finally enjoy using the library! It's easy to find books and track what I've read. It feels like real tech.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white shadow rounded-xl p-6 hover:shadow-md transition-all"
            >
              <p className="text-gray-600 italic">"{t.text}"</p>
              <div className="mt-4 text-sm text-gray-800 font-semibold">
                {t.name}
              </div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
