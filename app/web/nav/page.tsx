"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm bg-opacity-90"
          : "bg-gradient-to-r from-blue-50 to-white shadow-sm"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo with animation */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            href="/"
            className="text-xl flex items-center justify-center gap-1 font-bold text-primary"
          >
            <motion.span
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={"/image.svg"}
                width={40}
                height={40}
                alt="NitiBook Logo"
                className="h-10 w-10"
              />
            </motion.span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              className="text-primary"
            >
              Niti
            </motion.span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              className="text-primary"
            >
              Book
            </motion.span>
          </Link>
        </motion.div>

        {/* Navigation Links with animation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/#f" },
            { name: "Plans", path: "/#plan" },
            { name: "About", path: "/web/about" },
            { name: "Catalog", path: "/catalog" },
          ].map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={link.path}
                className="text-gray-700 hover:text-primary font-medium text-sm transition-colors duration-300 relative group"
              >
                {link.name}
                <motion.span
                  className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Sign In with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-3 items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/login"
              className={`text-sm font-medium py-2 px-4 rounded-2xl transition-colors duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary"
                  : " border-0 bg-primary text-white border-gray-0   hover:opacity-80"
              }`}
            >
              Login
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signup"
              className={`text-sm font-medium py-2 px-4 rounded-2xl transition-colors duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary"
                  : " border-0 bg-primary text-white border-gray-0   hover:opacity-80"
              }`}
            >
              Sign Up
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
