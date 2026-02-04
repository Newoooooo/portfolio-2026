import { motion } from 'framer-motion';
import './SocialProof.css';

const SocialProof = () => {
  return (
    <section className="social-proof-section">
      <div className="social-proof-container">
        
        {/* Testimonial Quote */}
        <motion.div 
          className="testimonial-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="quote-mark">"</div>
          <blockquote className="testimonial-quote">
            Nheo consistently exceeded expectations with creative solutions and 
            meticulous attention to detail. Their ability to translate complex ideas 
            into visually compelling designs made them an invaluable asset to our team.
          </blockquote>
          <div className="testimonial-author">
            <div className="author-info">
              <span className="author-name">Prosperflow</span>
              <span className="author-title">Joerge Dominique Buenaflor</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="certifications"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="cert-title">Certifications</h3>
          <div className="cert-badges">
            <div className="cert-badge">
              <img 
                src="/assets/hubspotlogo.png" 
                alt="Hubspot SEO Certification"
                className="cert-image"
              />
              <span className="cert-name">HubSpot SEO Certified</span>
            </div>
            <div className="cert-badge">
              <img 
                src="/assets/databases.png" 
                alt="Certiport Databases Certification"
                className="cert-image"
              />
              <span className="cert-name">Certiport Databases</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialProof;
