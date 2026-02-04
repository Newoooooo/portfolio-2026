import { Briefcase, Code2, Globe, Search, Database, FileText, Zap, BarChart3, BookOpen, Users } from 'lucide-react';
import './SkillsMarquee.css';

const skills = [
  { icon: Briefcase, label: 'Project Management' },
  { icon: Code2, label: 'Web Development' },
  { icon: Globe, label: 'SaaS Operations' },
  { icon: Search, label: 'Technical SEO' },
  { icon: Database, label: 'Google Workspace' },
];

const focusAreas = [
  { icon: FileText, label: 'Process Design' },
  { icon: Zap, label: 'Automation' },
  { icon: BarChart3, label: 'Data Analysis' },
  { icon: BookOpen, label: 'Documentation' },
  { icon: Users, label: 'Team Enablement' },
];

const SkillsMarquee = () => {
  return (
    <section className="marquee-section">
      {/* Skills - Left to Right */}
      <div className="marquee-row">
        <div className="marquee-track">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={`skill-${index}`} className="marquee-item">
              <skill.icon size={20} strokeWidth={1.5} />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Areas - Right to Left */}
      <div className="marquee-row reverse">
        <div className="marquee-track reverse">
          {[...focusAreas, ...focusAreas, ...focusAreas].map((area, index) => (
            <div key={`focus-${index}`} className="marquee-item">
              <area.icon size={20} strokeWidth={1.5} />
              <span>{area.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
