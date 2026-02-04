import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: "POS Disaster Recovery Plan",
    category: "Systems Admin • Risk Management",
    description: "Authored a technical contingency protocol for Utak POS failures. Defined escalation paths and data backup procedures.",
    image: "/assets/DRP.png"
  },
  {
    id: 2,
    title: "Viral Market Analysis",
    category: "SEO Strategy • Data Analytics",
    description: "Leveraged viral trends to drive 6.8K organic views. Identified critical review funnel gaps and proposed a 'Content Sprint' strategy.",
    image: "/assets/Audit.png"
  },
  {
    id: 3,
    title: "Staff Onboarding & SOPs",
    category: "Training • Process Documentation",
    description: "Designed a standardized 8-step training workflow to upskill non-technical staff and minimize user errors.",
    image: "/assets/Onboarding.png"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-index">01</span>
        <h2>Case Studies</h2>
      </motion.div>

      <div className="mission-list">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            className="mission-strip"
            initial={{ opacity: 0, x: 100, skewX: -10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover="expanded"
          >
            <div className="mission-main">
              <span className="mission-number">0{project.id}</span>
              <div className="mission-info">
                <h3>{project.title}</h3>
                <span className="mission-category">{project.category}</span>
              </div>
              <ExternalLink className="mission-icon" size={20} />
            </div>
            
            <motion.div 
              className="mission-details"
              variants={{
                expanded: { height: "auto", opacity: 1 }
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>{project.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
