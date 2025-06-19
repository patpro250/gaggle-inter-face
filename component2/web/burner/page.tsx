"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/50 to-transparent"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-indigo-100/20 to-transparent"
      ></motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-indigo-600"
            >
              Niti Book
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Modern Library Management System
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="primary"
            >
              Built for Rwanda
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            NITI BOOK brings powerful, enterprise-grade technology to Rwandan libraries—at a price every institution can afford—revolutionizing the way they manage, serve, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="../../../d/auth12/s"
                className="rounded-md primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
              >
                Get started
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="#"
                className="text-sm font-medium leading-6 text-gray-900 hover:text-indigo-500 transition-colors duration-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
