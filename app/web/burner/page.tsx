"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
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

      <div className="relative flex flex-col justify-center items-center max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-15 w-full p-4 md:w-4xl  tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-primary text-5xl sm:text-6xl lg:text-8xlfont-extrabold"
            >
              NITI BOOK
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-700  font-semibold"
            >
              Modern Library Management System
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-primary font-semibold  "
            >
              Built for Rwanda
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm leading-5 text-gray-600 max-w-xl mx-auto"
          >
            NITI BOOK empowers libraries across Rwanda with enterprise-grade
            technology and affordable pricing to transform the way they manage,
            serve, and grow.
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
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-sub-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
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
                className="text-sm font-medium leading-6 text-gray-900 hover:text-primary transition-colors duration-300"
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
