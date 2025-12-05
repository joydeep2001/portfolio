import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "CodeRoots IT Solutions",
      position: "Flutter Developer (Full-Time)",
      duration: "Nov 2025 - Present",
      responsibilities: [
        "Design and improve application architecture while delivering high-quality features across production Flutter apps",
        "Collaborate with backend engineers to integrate REST APIs and optimize app performance",
        "Deploy mobile applications to the Google Play Store and Apple App Store",
        "Work directly with clients to understand requirements and deliver scalable features tailored to business needs",
        "Troubleshoot and patch bugs to ensure seamless and reliable end-user experience"
      ]
    },
    {
      id: 2,
      company: "Devant IT Solutions",
      position: "Software Developer Intern",
      duration: "Aug 2025 - Nov 2025",
      responsibilities: [
        "Developed SaaS apps and integrated APIs into Flutter applications for enhanced functionality",
        "Followed Agile processes for requirement analysis and iterative development",
        "Improved app stability and UI responsiveness through debugging and performance fixes"
      ]
    }
  ];

  return (
    <section className="experience-sec">
      <h1 className="glow">Experience</h1>
      <div className="experience-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="experience-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <div>
                  <h2>{exp.company}</h2>
                  <h3>{exp.position}</h3>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
