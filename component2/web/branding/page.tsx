"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const BrandVideoCard = () => {
  return (
    <section
      id="brand"
      className="px-4 py-12 md:py-24 bg-gradient-to-b from-white to-indigo-50/30"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Video with animated border and shadow */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl relative"
        >
          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-indigo-500/10 rounded-xl pointer-events-none"
          />

          <video
            className="w-full h-full object-cover scale-[1.01]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/coll-brand.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Text content with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming Libraries Across{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Rwanda with Niti Book
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Niti Book is reimagining how libraries work — bringing smart
            technology, better management tools, and a renewed focus on reading
            skills to institutions across Rwanda. We're building a future where
            every reader has access to knowledge, and every library becomes a
            center of innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="#" className="inline-flex items-center group">
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-indigo-600 font-medium text-lg border-b border-indigo-600/0 group-hover:border-indigo-600 transition-all duration-300"
              >
                Learn More
              </motion.span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="ml-2 text-indigo-600"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandVideoCard;
