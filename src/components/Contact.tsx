import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Let's Connect</h2>
        <p>Ready to bring operational excellence to your team?</p>
        <motion.a 
          className="cta-pill"
          href="mailto:nheo.manalo@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
