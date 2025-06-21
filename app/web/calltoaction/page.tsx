"use client";

import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-100px", amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-indigo-50 text-gray-700 py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform{" "}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-indigo-600"
          >
            Your Library?
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8 text-lg md:text-xl"
        >
          Join schools and institutions across Rwanda already using Niti Book to
          modernize and improve their libraries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/signup"
            className="bg-transparent text-md flex items-center justify-center border-2 border-indigo-600 text-indigo-600 font-medium py-3 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            Get Started Free
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="border border-indigo-600 text-indigo-600 py-3 px-6 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToAction;
