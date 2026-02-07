import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import SkillsMarquee from './components/SkillsMarquee';
import ProjectDossier from './components/ProjectDossier';
import Toolkit from './components/Toolkit';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import InwardHeroBackground from './components/InwardHeroBackground';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  
  // Track scroll progress for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Hero transforms: stay pinned, then zoom + fade
  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Layout>
      {/* HERO SECTION - Sticky Zoom Transition */}
      <section ref={heroRef} className="hero-container">
        {/* Inward Flow Background */}
        <InwardHeroBackground />
        
        <motion.div 
          className="hero-content"
          style={{ 
            scale: heroScale,
            opacity: heroOpacity
          }}
        >
          {/* Typography - Shifted left */}
          <div className="hero-text">
            <h1>Nheo Manalo</h1>
            <p className="tagline">I&apos;m a Technical VA with a passion for organizing chaos. Unlike typical admins, I speak &quot;developer&quot; and &quot;business&quot; fluently.</p>
            <p className="hero-body">If you are looking for someone to manage your startup&apos;s operations, audit your SEO, or build internal tools, you&apos;ve come to the right place. I bring startup agility and technical precision to every project.</p>
          </div>

          {/* Silhouette - Bottom Left with Breathing Animation */}
          <motion.div 
            className="hero-silhouette"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <motion.img 
              src="/assets/Silhouettehero.png" 
              alt="Hero Silhouette" 
              animate={{ 
                scale: [1, 1.02, 1],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>SCROLL</span>
            <div className="scroll-line" />
          </motion.div>
        </motion.div>
      </section>

      {/* SKILLS MARQUEE - Scrolling Skills & Focus Areas */}
      <SkillsMarquee />

      {/* CASE DOSSIER - Master-Detail Case Studies */}
      <ProjectDossier />

      {/* TOOLKIT - Parallax Skills */}
      <Toolkit />

      {/* SOCIAL PROOF - Testimonials & Certifications */}
      <SocialProof />

      {/* GALLERY - Scroll-Synced Carousel with Sticky CTA */}
      <Gallery />

      {/* CONTACT - Final CTA */}
      <Contact />

      {/* FOOTER - Command Line Style */}
      <Footer />
    </Layout>
    </>
  );
}

export default App;
