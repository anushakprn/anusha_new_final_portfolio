import React from 'react';

const About = () => {
  const stats = [
    { number: "5+", label: "Projects Completed", icon: "fas fa-project-diagram" },
    { number: "2+", label: "Years Experience", icon: "fas fa-calendar-alt" },
    { number: "10+", label: "Technologies", icon: "fas fa-code" },
    { number: "2", label: "Research Papers", icon: "fas fa-file-alt" }
  ];

  return (
    <section className="section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Get to know me better</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Text */}
            <div>
              {/* Introduction */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-user text-white text-sm"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-50">Who I Am</h3>
                </div>
                <p className="text-lg text-dark-300 leading-relaxed pl-13">
                  I'm a passionate <span className="text-primary-400 font-semibold">Data Scientist</span> and{" "}
                  <span className="text-accent-400 font-semibold">Machine Learning Engineer</span> with expertise in
                  developing AI-powered solutions. My journey in tech began with a curiosity about
                  how data can drive meaningful insights and innovations.
                </p>
              </div>

              {/* Education & Experience */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-graduation-cap text-white text-sm"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-50">Education & Expertise</h3>
                </div>
                <p className="text-lg text-dark-300 leading-relaxed pl-13">
                  Currently pursuing my Master's in Data Science, I have hands-on experience in
                  building end-to-end machine learning pipelines, from data preprocessing to model
                  deployment. I'm particularly interested in natural language processing, computer
                  vision, and their applications in real-world scenarios.
                </p>
              </div>

              {/* Personal Interests */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-heart text-white text-sm"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-50">Beyond Code</h3>
                </div>
                <p className="text-lg text-dark-300 leading-relaxed pl-13">
                  When I'm not coding or analyzing data, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge through technical writing
                  and mentoring aspiring data scientists.
                </p>
              </div>

              {/* Skills Highlights */}
              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-code text-white text-sm"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-50">Core Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-3 pl-13">
                  {[
                    { name: 'Python', icon: 'fab fa-python' },
                    { name: 'Machine Learning', icon: 'fas fa-brain' },
                    { name: 'Deep Learning', icon: 'fas fa-network-wired' },
                    { name: 'React', icon: 'fab fa-react' },
                    { name: 'AWS', icon: 'fab fa-aws' }
                  ].map((skill) => (
                    <span
                      key={skill.name}
                      className="px-4 py-2 bg-primary-500/10 text-primary-300 rounded-full text-sm font-medium border border-primary-500/20 flex items-center gap-2"
                    >
                      <i className={`${skill.icon} text-xs`}></i>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-dark-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
          {/* Call to Action */}
          <div className="text-center mt-16">
            <a href="#experience" className="btn btn-primary text-lg px-8 py-4">
              <i className="fas fa-arrow-down mr-2"></i>
              Explore My Journey
            </a>
          </div>
        </div>
    </section>
  );
};

export default About;
