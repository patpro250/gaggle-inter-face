"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLightbulb,
  FaAccessibleIcon,
  FaHandshake,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

import Navbar from "../nav/page";
import Link from "next/link";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const AboutPage = () => {
  const teamMembers = [
    {
      name: "NZABONERWANAYO Jean Paul",
      role: "Director & Co-Founder",
      photo: "/t/jean.png",
      bio: "Former school librarian with deep understanding of library challenges in Rwanda.",
    },
    {
      name: "IRAGUHA Patrick",
      role: "Developer & Co-Founder",
      photo: "/t/patrick.png",
      bio: " IRAGUHA Patrick 💼 Frontend , UI Specialist & 💼 Computer Science Expert is the co-founder and lead full-stack developer of Gaggle Niti, specializing in backend systems, authentication, and analytics. He drives the platform &#38;s core features and scalable architecture for modern institutional libraries.",
    },
    {
      name: "IRUMVA Jessy Terry",
      role: "Developer",
      photo: "/t/terry.png",
      bio: "IRUMVA Jessy Terry is a full-stack developer at Gaggleniti, focused on building intuitive, responsive user interfaces. He collaborates with Patrick to deliver a seamless experience for librarians and administrators through thoughtful UI and frontend development.",
    },
    {
      name: "TUYITURIKI Gerald",
      role: "Marketer & Customer Care",
      photo: "/t/gerald.png",
      bio: "Customer experience specialist ensuring client satisfaction.",
    },
  ];

  const milestones = [
    { year: "2025-01-08", text: "Idea generation for a new platform" },
    {
      year: "2025-01-25",
      text: "Project kickoff with requirement gathering and research",
    },
    {
      year: "2025-01-30",
      text: "Started designing system architecture/scheme",
    },
    {
      year: "2025-02-08",
      text: "Began building API logic and backend foundations",
    },
    { year: "2025-04-20", text: "Started frontend interface development" },
    { year: "2025-06-15", text: "Official project launch to the public" },
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We create practical and modern solutions",
    },
    {
      icon: <FaAccessibleIcon className="w-8 h-8" />,
      title: "Accessibility",
      description: "Tools available to all, regardless of location or budget",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Integrity",
      description: "We earn and keep the trust of our users",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work with and for librarians",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Impact",
      description: "Systems that transform library operations",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white h-[100vh] overflow-scroll  space-y-6">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-28 px-4"
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Libraries <br className="hidden md:block" /> Across
              Rwanda — and Beyond
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl max-w-4xl mx-auto font-light"
            >
              NITI BOOK empowers librarians with intelligent systems that
              simplify operations, increase access, and drive innovation in
              library management.
            </motion.p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-24 px-4 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We modernize libraries through accessible, intelligent systems
              that make librarians &apos; work easier and more impactful —
              starting in Rwanda, expanding across Africa.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {["Simplify Operations", "Increase Access", "Drive Innovation"].map(
              (item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-blue-600 text-4xl mb-4">
                    {index === 0 && <span>📊</span>}
                    {index === 1 && <span>🔓</span>}
                    {index === 2 && <span>💡</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item}
                  </h3>
                </div>
              )
            )}
          </motion.div>
        </motion.section>

        {/* Story Section */}
        <section className="bg-gray-50 py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NITI BOOK was born from necessity when school librarian
                  NZABONERWANAYO Jean Paul encountered daily challenges managing
                  resources. Existing solutions didn &apos; t address Rwanda
                  &apos; s unique educational needs.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Partnering with IRAGUHA Patrick, they built a simple PHP
                  system that evolved into a comprehensive platform. Joined by
                  IRUMVA Jessy Terry, the team transformed this personal
                  solution into a movement empowering libraries across Rwanda.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, NITI BOOK represents innovation in library management,
                  combining local understanding with technical excellence.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/image.svg"
                  alt="NITI BOOK team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-2xl text-gray-700 font-light leading-relaxed"
            >
              To become Africa &apos; s leading digital library platform,
              enabling education through accessible, intelligent systems that
              serve communities of all sizes.
            </motion.p>
          </div>
        </motion.section>

        {/* Who We Serve Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Who We Serve
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Custom solutions for diverse educational institutions across
                Rwanda
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                "School Libraries",
                "Teacher Colleges",
                "Public Institutions",
                "Universities",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all"
                >
                  <div className="text-blue-600 text-4xl mb-4">
                    {index === 0 && <span>🏫</span>}
                    {index === 1 && <span>👩‍🏫</span>}
                    {index === 2 && <span>🏛️</span>}
                    {index === 3 && <span>🎓</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item}
                  </h3>
                  <p className="text-gray-600">
                    Tailored solutions for your specific needs
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Principles that guide every decision we make
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Passionate professionals bridging libraries and technology
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Key milestones in our growth story
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
                  >
                    <div
                      className={`w-1/2 px-8 py-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <div className="inline-block bg-white p-6 rounded-xl shadow-md border border-gray-100">
                        <h3 className="text-xl font-bold text-blue-700">
                          {milestone.year}
                        </h3>
                        <p className="text-gray-700">{milestone.text}</p>
                      </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-4"
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Library?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
              Join the movement modernizing libraries across Rwanda
            </p>
            <Link href={"/d/auth12/s"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-800 font-bold py-4 px-10 rounded-lg hover:bg-blue-100 transition-all text-lg shadow-lg"
              >
                Get Started Today
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutPage;
