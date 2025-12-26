// App.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const sectionRefs = useRef({});

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = sectionRefs.current[section];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const loadingVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const appVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          className="loading-screen"
          variants={loadingVariants}
          initial="initial"
          exit="exit"
        >
          <motion.div
            className="loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-bold text-dark-50 mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.h2>
          <motion.div
            className="w-64 h-2 bg-dark-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      className="App min-h-screen"
      variants={appVariants}
      initial="initial"
      animate="animate"
    >
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main className="pt-16 md:pt-20">
        <section
          id="home"
          ref={(el) => (sectionRefs.current.home = el)}
          className="min-h-screen flex items-center"
        >
          <Home />
        </section>

        <section
          id="about"
          ref={(el) => (sectionRefs.current.about = el)}
          className="min-h-screen flex items-center"
        >
          <About />
        </section>

        <section
          id="experience"
          ref={(el) => (sectionRefs.current.experience = el)}
          className="min-h-screen flex items-center"
        >
          <Experience />
        </section>

        <section
          id="skills"
          ref={(el) => (sectionRefs.current.skills = el)}
          className="min-h-screen flex items-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          ref={(el) => (sectionRefs.current.projects = el)}
          className="min-h-screen flex items-center"
        >
          <Projects />
        </section>

        <section
          id="achievements"
          ref={(el) => (sectionRefs.current.achievements = el)}
          className="min-h-screen flex items-center"
        >
          <Achievements />
        </section>

        <section
          id="contact"
          ref={(el) => (sectionRefs.current.contact = el)}
          className="min-h-screen flex items-center"
        >
          <Contact />
        </section>
      </main>

      <motion.footer
        className="bg-dark-900 border-t border-dark-700 py-8 px-6 md:px-12 lg:px-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AK</span>
            </div>
            <span className="text-dark-300 font-medium">Anusha Kothapalli</span>
          </div>

          <p className="text-dark-400 text-sm mb-6">
            © {new Date().getFullYear()} Anusha Kothapalli. Built with React, Tailwind CSS & Framer Motion.
          </p>

          <div className="flex justify-center space-x-6">
            {[
              { icon: 'fab fa-github', href: 'https://github.com/anushakprn', label: 'GitHub' },
              { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
              { icon: 'fas fa-envelope', href: '#contact', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500 rounded-full flex items-center justify-center text-dark-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <i className={`${social.icon} text-lg`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center z-40"
            onClick={() => scrollToSection('home')}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default App;