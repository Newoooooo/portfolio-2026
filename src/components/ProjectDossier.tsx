import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDossier.css';

// Project data - Case Studies content
const projects = [
  {
    id: '01',
    title: 'POS Disaster Recovery Plan',
    role: 'SYSTEMS ADMIN • RISK MANAGEMENT',
    jap_title: 'システム管理 // リスク対策',
    description: 'Authored a technical contingency protocol for Utak POS failures. Defined escalation paths and data backup procedures to ensure business continuity during system outages.',
    tech: ['Utak POS', 'Documentation', 'Risk Mgmt']
  },
  {
    id: '02',
    title: 'Staff Onboarding & SOPs',
    role: 'TRAINING • PROCESS DOCUMENTATION',
    jap_title: 'トレーニング // プロセス文書',
    description: 'Designed a standardized 8-step training workflow to upskill non-technical staff. Reduced onboarding time and minimized user errors during live service.',
    tech: ['SOPs', 'Training', 'Workflow Design']
  },
  {
    id: '03',
    title: 'Viral Market Analysis',
    role: 'SEO STRATEGY • DATA ANALYTICS',
    jap_title: 'SEO 戦略 // データ分析',
    description: "Leveraged viral trends to drive 6.8K organic views. Identified critical review funnel gaps and proposed a 'Content Sprint' strategy to convert social engagement into local SEO ranking.",
    tech: ['HubSpot', 'Google Analytics', 'SEO']
  }
];

const ProjectDossier = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="dossier-section" id="dossier">
      <div className="dossier-container">
        {/* Section Header */}
        <div className="dossier-header">
          <span className="dossier-label">CASE STUDIES // ケーススタディ</span>
          <h2 className="dossier-title">Case Studies</h2>
        </div>

        <div className="dossier-grid">
          {/* LEFT COLUMN: System Directory List */}
          <div className="dossier-list">
            <div className="list-header">
              <span className="list-label">DIRECTORY // ディレクトリ</span>
            </div>
            <div className="list-items">
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  className={`list-item ${activeProject.id === project.id ? 'active' : ''}`}
                  onClick={() => setActiveProject(project)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="item-indicator">
                    {activeProject.id === project.id && (
                      <motion.div 
                        className="indicator-glow"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                  <span className="item-id">{project.id}</span>
                  <div className="item-info">
                    <span className="item-title">{project.title}</span>
                    <span className="item-role">{project.role}</span>
                  </div>
                </motion.button>
              ))}
            </div>
            <div className="list-footer">
              <span className="footer-text">3 ENTRIES FOUND</span>
            </div>
          </div>

          {/* RIGHT COLUMN: File Readout / Data Terminal */}
          <div className="dossier-viewport">
            <div className="viewport-header">
              <span className="viewport-label">FILE READOUT // ファイル</span>
              <div className="viewport-status">
                <span className="status-dot" />
                <span>ACTIVE</span>
              </div>
            </div>
            
            <div className="viewport-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  className="viewport-data"
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {/* Japanese subtitle */}
                  <span className="data-jap">{activeProject.jap_title}</span>
                  
                  {/* Main title */}
                  <h3 className="data-title">{activeProject.title}</h3>
                  
                  {/* Role badge */}
                  <div className="data-role">
                    <span>{activeProject.role}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="data-description">{activeProject.description}</p>
                  
                  {/* Tech stack */}
                  <div className="data-tech">
                    <span className="tech-label">STACK //</span>
                    <div className="tech-tags">
                      {activeProject.tech.map((item, index) => (
                        <span key={index} className="tech-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Grid decoration */}
            <div className="viewport-grid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDossier;
