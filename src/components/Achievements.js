// components/Achievements.js
import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Amazon ML Summer School 2025",
      description: "Selected among Top 5% of 60,000+ applicants for prestigious machine learning program",
      icon: "fas fa-award",
      date: "2025",
      category: "education",
      highlight: true
    },
    {
      id: 2,
      title: "IEEE Summer Research Internship Recognition",
      description: "Recognized as Good Performer for technical proficiency, innovation, and project contributions",
      icon: "fas fa-medal",
      date: "2024",
      category: "internship",
      highlight: true
    },
    {
      id: 3,
      title: "Letter of Recommendation",
      description: "Strong recommendation from CEO of Gen Idea Technologies for exceptional ML internship performance",
      icon: "fas fa-file-alt",
      date: "2024",
      category: "recognition"
    },
    {
      id: 4,
      title: "Research Publication",
      description: "Authored paper on 'Attribute prediction using BERT and RoBERTA' published at IDASCN 2024 conference",
      icon: "fas fa-graduation-cap",
      date: "2024",
      category: "research",
      highlight: true
    },
    {
      id: 5,
      title: "IEEE Secretary",
      description: "Served as Secretary of IEEE Computer Society Student Chapter and anchored tech events",
      icon: "fas fa-users",
      date: "2024",
      category: "leadership"
    },
    {
      id: 6,
      title: "Academic Excellence",
      description: "Maintaining 96.9% in B.Tech CSE (Data Science) at Mohan Babu University",
      icon: "fas fa-trophy",
      date: "2022-2026",
      category: "academic",
      highlight: true
    },
    {
      id: 7,
      title: "Python Teaching Assistant",
      description: "Assisted for more than 400+ students",
      icon: "fas fa-chalkboard-teacher",
      date: "2024",
      category: "mentoring"
    }
  ];

  const certifications = [
    "Google Advanced Data Analytics (2024)",
    "IBM Python for Data Science and AI (2024)",
    "Google IT Automation with Python (2024)",
    "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (2025)",
    "Google Business Intelligence (2024)",
    "Teaching Assistant - in devskills company i tutored more than 400 students in python crash coarse"
  ];

  return (
    <div className="section achievements-section">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Achievements & Recognition</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">My accomplishments and certifications</p>
      </motion.div>
      
      <div className="achievements-container">
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`achievement-card ${achievement.highlight ? 'highlight-card' : ''}`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px rgba(100, 255, 218, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="achievement-icon">
                <motion.i
                  className={achievement.icon}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                {achievement.highlight && (
                  <motion.div
                    className="highlight-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    ★
                  </motion.div>
                )}
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-meta">
                  <span className="achievement-date">{achievement.date}</span>
                  <span className={`achievement-category category-${achievement.category}`}>
                    {achievement.category}
                  </span>
                </div>
              </div>
              <div className="achievement-visual">
                <div className="progress-ring">
                  <svg width="60" height="60">
                    <circle
                      cx="30"
                      cy="30"
                      r="25"
                      stroke="#e0e0e0"
                      strokeWidth="3"
                      fill="none"
                    />
                    <motion.circle
                      cx="30"
                      cy="30"
                      r="25"
                      stroke="#4f46e5"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 25 * 0.75} ${2 * Math.PI * 25 * 0.25}`}
                      strokeDashoffset={2 * Math.PI * 25 * 0.25}
                      transform="rotate(-90 30 30)"
                      initial={{ strokeDashoffset: 2 * Math.PI * 25 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 25 * 0.25 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1.5 }}
                    />
                  </svg>
                </div>
              </div>
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-lg opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="certifications-section"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="certifications-title">Professional Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="certification-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <span>{cert}</span>
                <div className="cert-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${85 + Math.random() * 15}%` }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="quote-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="quote-card">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="quote-text">
              "The candidate demonstrated strong technical competence in machine learning concepts, 
              along with a clear ability to apply theoretical knowledge to real-world use cases. 
              Their commitment to continuous learning, problem-solving mindset, and analytical 
              approach were consistently evident."
            </p>
            <div className="quote-author">
              <strong>CEO, Gen Idea Technologies</strong>
              <span>Letter of Recommendation</span>
            </div>
            <div className="quote-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="stats-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="stats-title">Achievement Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Achievements</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Highlighted</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">96.9%</div>
              <div className="stat-label">Academic Score</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;