import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="p3-footer">
      
      {/* Background Noise */}
      <div className="footer-noise"></div>

      <div className="footer-content">
        
        {/* Left Side: Brand & Status */}
        <div className="footer-brand">
          <h2 className="footer-name">NHEO MANALO</h2>
          <div className="footer-status">
            <span className="status-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Right Side: The Action Grid */}
        <div className="footer-actions">
          
          {/* Email Button */}
          <a 
            href="mailto:nheo.manalo@gmail.com"
            className="footer-action-btn footer-action-email"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/nheo-manalo-020285279"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-action-btn footer-action-linkedin"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>

          {/* GitHub Button */}
          <a 
            href="https://github.com/Newoooooo"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-action-btn footer-action-github"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 QUOPOD SYSTEMS.</p>
        
        <button 
          onClick={scrollToTop}
          className="footer-scroll-top"
        >
          RETURN TO TOP
          <ArrowUp size={12} />
        </button>
      </div>

    </footer>
  );
};

export default Footer;
