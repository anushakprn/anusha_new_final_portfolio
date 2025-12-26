// components/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Machine Learning Intern",
      company: "Saredufy Web Plus Academy Pvt Ltd",
      location: "Remote",
      period: "Jul 2025 - Oct 2025",
      description: [
        "Working on advanced ML models for educational technology platforms",
        "Implementing predictive analytics to enhance user learning experiences",
        "Developing data pipelines for real-time educational insights"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      company: "The Idea Gen Technologies",
      location: "Tirupati",
      period: "Aug 2024 - Mar 2025",
      description: [
        "Analyzed enrollment and task completion data to generate actionable insights and improve workflow efficiency",
        "Conducted data preprocessing, feature engineering, and hyperparameter tuning; enhanced model accuracy by 12%",
        "Built predictive models and delivered KPI-driven visualizations to support business decision-making"
      ]
    },
    {
      id: 3,
      title: "Intern",
      company: "IEEE Ananthapuram Subsection",
      location: "Ananthapuram",
      period: "Jun 2024 - Jul 2024",
      description: [
        "Implemented ML for IoT-based Predictive Maintenance, reducing human intervention by 50%",
        "Applied supervised learning algorithms to forecast equipment failures; attained 90% detection accuracy",
        "Collaborated with research team on innovative IoT solutions"
      ]
    }
  ];

  return (
    <div className="section experience-section">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">My journey in the tech industry</p>
      </div>
      
      <div className="experience-container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="timeline-marker">
                <div className="marker-circle"></div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <div className="experience-company">
                  <h4>{exp.company}</h4>
                  <span className="company-location">{exp.location}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;