// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Image to Speech GenAI Tool",
      description: "An AI app that converts uploaded images into narrated audio stories using GenAI. Combines Hugging Face models with OpenAI LLMs via LangChain.",
      tech: ["Python", "Hugging Face", "OpenAI", "LangChain", "Streamlit"],
      features: [
        "BLIP image captioning for image-to-text conversion",
        "OpenAI LLM for story generation (~50 words)",
        "Text-to-speech for audio narration",
        "Deployed on Streamlit Cloud and Hugging Face Spaces"
      ],
      github: "https://github.com/anushakprn",
      demo: "#",
      image: "project1",
      gradient: "from-blue-500 to-purple-600",
      imageType: "AI/ML",
      icon: "fas fa-image"
    },
    {
      id: 2,
      title: "E-Commerce Attribute Prediction",
      description: "Fine-tuned BERT & XLM-RoBERTa models for e-commerce product attribute prediction with 40% higher accuracy than baseline SVM.",
      tech: ["Python", "BERT", "XLM-RoBERTa", "Transformers", "PyTorch"],
      features: [
        "Fine-tuned transformer models for attribute prediction",
        "Achieved 40% higher accuracy than baseline SVM",
        "Published research paper at IDASCN 2024 conference"
      ],
      github: "https://github.com/anushakprn",
      demo: "#",
      image: "project2",
      gradient: "from-green-500 to-teal-600",
      imageType: "Research",
      icon: "fas fa-brain"
    },
    {
      id: 3,
      title: "IoT Predictive Maintenance",
      description: "Random Forest & XGBoost pipeline for equipment failure prediction with 96% accuracy, reducing downtime by 35%.",
      tech: ["Python", "Random Forest", "XGBoost", "IoT", "Scikit-learn"],
      features: [
        "96% prediction accuracy for equipment failures",
        "Reduced downtime by 35% through predictive maintenance",
        "Implemented during IEEE internship"
      ],
      github: "https://github.com/anushakprn",
      demo: "#",
      image: "project3",
      gradient: "from-orange-500 to-red-600",
      imageType: "IoT",
      icon: "fas fa-cogs"
    },
    {
      id: 4,
      title: "Health Connect – Smart Hospital Portal",
      description: "Full-stack web application that reduced patient wait times by 25% through digital scheduling and management.",
      tech: ["React", "Node.js", "MongoDB", "REST API", "JavaScript"],
      features: [
        "Digital scheduling system for patients",
        "Reduced wait times by 25%",
        "Full-stack development with modern web technologies"
      ],
      github: "https://github.com/anushakprn",
      demo: "#",
      image: "project4",
      gradient: "from-pink-500 to-rose-600",
      imageType: "Web App",
      icon: "fas fa-hospital"
    },
    {
      id: 5,
      title: "Music Transformer",
      description: "Python implementation of Music Transformer for piano music generation using relative self-attention.",
      tech: ["Python", "PyTorch", "Mido", "Deep Learning"],
      features: [
        "MIDI preprocessing and data handling",
        "Music Transformer model implementation",
        "Piano music generation using pretrained models"
      ],
      github: "https://github.com/anushakprn",
      demo: "#",
      image: "project5",
      gradient: "from-indigo-500 to-blue-600",
      imageType: "Music AI",
      icon: "fas fa-music"
    }
  ];

  return (
    <motion.section
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div className="section-header" variants={cardVariants}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">My technical implementations and research work</p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Image/Mockup */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                {/* Mockup Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>

                {/* Project Type Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Main Icon */}
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                      <i className={`${project.icon || 'fas fa-code'} text-3xl text-white/80`}></i>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-star text-xs text-white"></i>
                    </div>

                    {/* Tech Stack Indicators */}
                    <div className="absolute -bottom-1 -left-1 flex space-x-1">
                      {project.tech.slice(0, 3).map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-white/30 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Browser-like Header */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm border-b border-white/10 flex items-center px-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-xs text-white/60 font-mono">{project.title.substring(0, 20)}...</div>
                  </div>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-black/60 text-white/80 text-xs rounded-full backdrop-blur-sm border border-white/20">
                    {project.imageType || 'Project'}
                  </span>
                </div>

                {/* Code-like Elements */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="w-16 h-1 bg-white/20 rounded"></div>
                      <div className="w-12 h-1 bg-white/15 rounded"></div>
                      <div className="w-20 h-1 bg-white/25 rounded"></div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/40 font-mono">
                        {project.tech.length} tech
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-50 mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-dark-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-dark-400 flex items-start">
                        <i className="fas fa-check text-primary-500 mr-2 mt-0.5 flex-shrink-0"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-md border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          variants={cardVariants}
        >
          <motion.a
            href="https://github.com/anushakprn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;