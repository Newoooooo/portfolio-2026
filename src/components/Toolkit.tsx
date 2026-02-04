import { motion } from 'framer-motion';
import { Layout, Code2, Globe, Search, Database, FileText } from 'lucide-react';
import './Toolkit.css';

const SKILLS = [
  { icon: Layout, name: "Project Management", tools: "Agile, Notion, ClickUp" },
  { icon: Code2, name: "Web Development", tools: "HTML5, CSS3, React" },
  { icon: Globe, name: "SaaS Operations", tools: "Automation, Zapier" },
  { icon: Search, name: "Technical SEO", tools: "Audit, Strategy, Analytics" },
  { icon: Database, name: "Google Workspace", tools: "Admin, Sheets, Scripts" },
  { icon: FileText, name: "Process Design", tools: "SOPs, Training, Documentation" },
];

const Toolkit = () => {
  return (
    <section className="toolkit-section" id="toolkit">
      {/* Section Header */}
      <motion.h2 
        className="toolkit-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        TOOLKIT
      </motion.h2>

      {/* Skills Grid - Floating above the desk */}
      <div className="skills-grid">
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Icon className="skill-icon" size={28} />
              <h4>{skill.name}</h4>
              <p>{skill.tools}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Command Center Silhouette - Bottom Anchor */}
      <div className="desk-silhouette">
        <img 
          src="/assets/workspace_silhouette.png" 
          alt="" 
          className="desk-image"
        />
      </div>
    </section>
  );
};

export default Toolkit;
