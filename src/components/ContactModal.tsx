import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Linkedin, Github, Mail } from "lucide-react";
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const ContactModal = ({ isOpen, setIsOpen }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);
  const email = "nheo.manalo@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Blurry & Dark) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="contact-modal-backdrop"
          >
            {/* The Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="contact-modal-card"
            >
              
              {/* Header */}
              <div className="contact-modal-header">
                <div>
                  <h2 className="contact-modal-title">Initialize Contact</h2>
                  <p className="contact-modal-subtitle">Secure Channel</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="contact-modal-close"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="contact-modal-body">
                
                {/* Copy Email Button */}
                <button
                  onClick={handleCopy}
                  className="contact-email-btn"
                >
                  <div className="contact-email-content">
                    <div className="contact-email-icon">
                      <Mail size={24} />
                    </div>
                    <div className="contact-email-text">
                      <p className="contact-email-label">Email Address</p>
                      <p className="contact-email-value">{email}</p>
                    </div>
                  </div>
                  <div className="contact-copy-icon">
                    {copied ? <Check size={20} className="copied" /> : <Copy size={20} />}
                  </div>
                </button>

                {/* Social Grid */}
                <div className="contact-social-grid">
                  <a 
                    href="https://linkedin.com/in/nheo-manalo-020285279" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>

                  <a 
                    href="https://github.com/Newoooooo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-social-link"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="contact-modal-footer">
                <p>RESPONSE TIME: &lt; 24 HOURS</p>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
