// components/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/WhatsApp Image 2025-12-23 at 9.58.59 PM.jpeg';

const Home = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-violet-900/10"></div>

      {/* Floating Blur Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/15 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Medium floating shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tl from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 0.7, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Small floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-32 h-32 border border-blue-400/20 rotate-45 blur-xl"
          animate={{
            rotate: [45, 135, 225, 315, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/2 right-1/6 w-24 h-24 border border-purple-400/20 rotate-12 blur-xl"
          animate={{
            rotate: [12, 132, 252, 12],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Hero Text */}
        <motion.div
          className="text-center lg:text-left space-y-8"
          variants={itemVariants}
        >
          {/* Greeting */}
          <motion.div
            className="space-y-2"
            variants={itemVariants}
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
              variants={itemVariants}
            >
              Hi, I'm
            </motion.p>
          </motion.div>

          {/* Name */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight"
              style={{
                fontFamily: "'Inter', 'Poppins', sans-serif",
                background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              variants={itemVariants}
            >
              Anusha Kothapalli
            </motion.h1>

            {/* Thin glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-violet-500/5 rounded-3xl blur-2xl -z-10"
              variants={itemVariants}
            />
          </motion.div>

          {/* Roles */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-300"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <i className="fas fa-chart-line text-blue-400 text-sm"></i>
                <span className="text-lg md:text-xl lg:text-2xl font-thin tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Data Scientist
                </span>
              </div>
              <span className="hidden sm:block text-gray-500">|</span>
              <div className="flex items-center gap-2">
                <i className="fas fa-brain text-purple-400 text-sm"></i>
                <span className="text-lg md:text-xl lg:text-2xl font-thin tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ML Engineer
                </span>
              </div>
              <span className="hidden sm:block text-gray-500">|</span>
              <div className="flex items-center gap-2">
                <i className="fas fa-code text-violet-400 text-sm"></i>
                <span className="text-lg md:text-xl lg:text-2xl font-thin tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Full-Stack Developer
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quote */}
          <motion.div
            className="space-y-3"
            variants={itemVariants}
          >
            <motion.blockquote
              className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 leading-tight"
              style={{ fontFamily: "'Inter', serif" }}
              variants={itemVariants}
            >
              "I don't just analyze data <br />
              I make it work for people."
            </motion.blockquote>
          </motion.div>

          {/* Description paragraph */}
          <motion.div
            className="space-y-4"
            variants={itemVariants}
          >
            <motion.p
              className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
              variants={itemVariants}
            >
              From predictive models to intelligent web systems,<br />
              I build solutions that are{' '}
              <span className="text-white font-medium">smart, scalable, and meaningful.</span>
            </motion.p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-rocket mr-3"></i>
                View My Work
              </span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold text-lg rounded-2xl backdrop-blur-sm hover:border-blue-400 hover:text-white transition-all duration-300"
              whileHover={{
                scale: 1.02,
                y: -2,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Visual/Image */}
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <motion.div
            className="relative max-w-md mx-auto"
            variants={itemVariants}
          >
            {/* Glassmorphism card */}
            <motion.div
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-xl"
              variants={itemVariants}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                variants={itemVariants}
              >
                <motion.img
                  src={profileImage}
                  alt="Anusha Kothapalli"
                  className="w-full h-auto object-cover"
                  variants={itemVariants}
                />

                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  variants={itemVariants}
                />
              </motion.div>

              {/* Status indicator */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-4 border-gray-900 flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
