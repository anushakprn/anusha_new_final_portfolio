// components/Recommendation.js
import React from 'react';
import { motion } from 'framer-motion';

const Recommendation = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={itemVariants}>
        <h2 className="section-title">Letter of Recommendation</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Professional endorsement from industry experts ✨</p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          {/* Glass Note Card */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
            </div>

            {/* Floating Emojis */}
            <motion.div
              className="absolute -top-4 -left-4 text-4xl"
              variants={floatingVariants}
              animate="animate"
            >
              ⭐
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 text-4xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
            >
              🎯
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 text-4xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '2s' }}
            >
              🚀
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 text-4xl"
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '0.5s' }}
            >
              💡
            </motion.div>

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                className="flex items-center justify-between mb-8"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className="fas fa-award text-white text-2xl"></i>
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-dark-50 mb-1">Professional Recommendation</h3>
                    <p className="text-primary-400 text-lg font-medium">From CEO, Gen Idea Technologies</p>
                  </div>
                </div>

                {/* Official Stamp */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white/20">
                    <div className="text-center text-white text-xs font-bold">
                      <div>APPROVED</div>
                      <div>✅</div>
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-red-500/20 rounded-full blur-md"></div>
                </motion.div>
              </motion.div>

              {/* Quote */}
              <motion.div
                className="mb-8"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <i className="fas fa-quote-left text-primary-400 text-3xl mt-2"></i>
                  <blockquote className="text-xl text-dark-200 leading-relaxed flex-1 italic">
                    "The candidate demonstrated strong technical competence in machine learning concepts, along with a clear ability to apply theoretical knowledge to real-world use cases. Their commitment to continuous learning, problem-solving mindset, and analytical approach were consistently evident."
                    <br /><br />
                    "During the execution of the project, the candidate displayed reliable technical skills in machine learning and IoT analytics. Their ability to analyze data, identify system inefficiencies, and propose effective predictive maintenance solutions reflected a strong problem-solving mindset and professional discipline. Overall, the candidate's performance was good."
                  </blockquote>
                  <i className="fas fa-quote-right text-primary-400 text-3xl mt-2"></i>
                </div>
              </motion.div>

              {/* Endorsement */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8"
                variants={itemVariants}
              >
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-dark-50 mb-4 flex items-center gap-2">
                    <i className="fas fa-star text-primary-400"></i>
                    Endorsement
                  </h4>
                  <p className="text-primary-400 text-sm mb-4">From: Dr. Muralidhar Kurni, IEEE ATPSS</p>
                  <div className="flex items-start gap-4">
                    <i className="fas fa-quote-left text-accent-400 text-2xl mt-1"></i>
                    <blockquote className="text-lg text-dark-200 leading-relaxed flex-1 italic">
                      "Throughout the project, the candidate showcased dependable technical knowledge in both machine learning and IoT analytics. Their strong analytical abilities, proactive approach in identifying system challenges, and contribution toward developing predictive maintenance solutions were commendable. The candidate demonstrated good performance and a dedicated professional attitude."
                    </blockquote>
                    <i className="fas fa-quote-right text-accent-400 text-2xl mt-1"></i>
                  </div>
                </div>
              </motion.div>

              {/* Signature */}
              <motion.div
                className="flex justify-between items-end"
                variants={itemVariants}
              >
                <div className="text-left">
                  <div className="text-dark-400 text-sm mb-2">Recommended by</div>
                  <div className="text-dark-50 font-bold text-2xl">Dr. Muralidhar Kurni</div>
                  <div className="text-primary-400 text-sm flex items-center gap-2">
                    <i className="fas fa-medal"></i>
                    IEEE ATPSS
                  </div>
                </div>

                {/* Handwritten Signature */}
                <motion.div
                  className="text-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-signature text-primary-400 mb-2" style={{ fontFamily: 'cursive' }}>
                    Muralidhar Kurni
                  </div>
                  <div className="text-xs text-dark-400">CEO, Gen Idea Technologies</div>
                  <div className="text-xs text-dark-400">Date: August 2024</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-6 -left-6 w-12 h-12 bg-primary-500/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-500/20 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Recommendation;