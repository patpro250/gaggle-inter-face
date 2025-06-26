"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/web/nav/page";

export default function SystemPortal() {
  return (
    <>
      <Navbar />

      <div className="relative h-[100dvh] bg-gradient-to-br from-sky-50 to-white overflow-y-auto">
        {/* Animated SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <motion.path
              fill="#0ea5e9"
              fillOpacity="0.2"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 pt-30 flex flex-col items-center justify-start min-h-[100dvh] px-6 py-12">
          {/* Logo */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <Image
              src="/image.svg"
              alt="Gaggleniti Logo"
              width={100}
              height={100}
              className="drop-shadow-md"
            />
          </motion.div> */}

          {/* Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center "
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sky-800 mb-10">
              NITI BOOK Integrated Portal
            </h1>
            {/* <p className="text-lg text-sky-600 max-w-2xl">
            Centralized access to all institution systems and services
          </p> */}
          </motion.div>

          {/* Card Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Library System Card */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-sky-100"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-sky-100 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-sky-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-sky-800">
                      Library System
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Access the complete digital library, manage books, track
                    checkouts, and explore resources.
                  </p>
                </div>
                <Link
                  href="/library"
                  className="mt-auto w-full text-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Enter Library System
                </Link>
              </div>
            </motion.div>

            {/* Institution Portal Card */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-sky-100"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-sky-100 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-sky-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-sky-800">
                      Institution Portal
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Tools for school management, academic records, staff, and
                    student dashboards.
                  </p>
                </div>
                <Link
                  href="/login"
                  className="mt-auto w-full text-center px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Access Institution Portal
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center text-sm text-gray-500"
          >
            <p>Mater Dei Institution © {new Date().getFullYear()}</p>
          </motion.footer>
        </div>
      </div>
    </>
  );
}
