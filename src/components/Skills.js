// components/Skills.js
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      category: "Machine Learning & AI",
      skills: [
        { name: "Machine Learning", level: 92 },
        { name: "Artificial Intelligence", level: 88 },
        { name: "Statistical Analysis", level: 90 },
        { name: "Data Cleaning", level: 94 },
        { name: "ML Model Deployment", level: 85 }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "Agile Methodology", level: 90 }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Jupyter Notebook", level: 95 },
        { name: "Business Intelligence", level: 82 },
        { name: "Pandas/NumPy", level: 93 },
        { name: "PostgreSQL", level: 87 }
      ]
    }
  ];

  return (
    <div className="section skills-section">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">My technical expertise</p>
      </div>
      
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills-highlight">
        <div className="highlight-box">
          <i className="fas fa-certificate"></i>
          <div>
            <h4>Professional Certifications</h4>
            <p>Google Advanced Data Analytics, IBM Python for Data Science and AI, Google IT Automation, Oracle Cloud AI Foundations, Google Business Intelligence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;