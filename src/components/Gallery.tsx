import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Gallery.css';

// Slide data with project information - Mockups first
const slides = [
  {
    id: 1,
    type: 'text',
    title: 'REALITY PROJECTION',
    subtitle: 'MOCKUPS',
    description: "High-fidelity visualization of the startup's collaborative freelancing platform UI. Includes physical merchandise stress-tests and environmental renders to validate brand integrity in real-world contexts."
  },
  { id: 2, type: 'image', src: '/assets/gd/Mockup1.png', alt: 'Mockup 1' },
  { id: 3, type: 'image', src: '/assets/gd/Mockup2.png', alt: 'Mockup 2' },
  { id: 4, type: 'image', src: '/assets/gd/Mockup3.png', alt: 'Mockup 3' },
  {
    id: 5,
    type: 'text',
    title: 'DIGITAL ARTIFACT',
    subtitle: 'PANCIT ANTON',
    description: "A digital preservation of local cuisine localized for the 'Bataan Hangout' Roblox simulation. Features optimized topology for 'The Forge' ecosystem, balancing visual appetite with strict render-cost limitations."
  },
  { id: 6, type: 'image', src: '/assets/gd/1.png', alt: 'Pancit Anton 1' },
  { id: 7, type: 'image', src: '/assets/gd/2.png', alt: 'Pancit Anton 2' },
  { id: 8, type: 'image', src: '/assets/gd/3.png', alt: 'Pancit Anton 3' },
  {
    id: 9,
    type: 'text',
    title: 'MENU AND POSTERS',
    subtitle: 'YUM FOOD HUB',
    description: "A comprehensive brand identity system featuring a grid-engineered 'Master Menu' for reduced cognitive load, alongside high-contrast seasonal posters and liquid-marketing flyers designed for immediate conversion."
  },
  { id: 10, type: 'image', src: '/assets/gd/4.png', alt: 'Yum Food Hub 1' },
  { id: 11, type: 'image', src: '/assets/gd/5.png', alt: 'Yum Food Hub 2' },
  { id: 12, type: 'image', src: '/assets/gd/6.png', alt: 'Yum Food Hub 3' },
  { id: 13, type: 'image', src: '/assets/gd/7.png', alt: 'Yum Food Hub 4' },
  { id: 14, type: 'image', src: '/assets/gd/8.png', alt: 'Yum Food Hub 5' },
  { id: 15, type: 'image', src: '/assets/gd/9.png', alt: 'Yum Food Hub 6' },
];

const Gallery = () => {
  // Ref for the GRANDPARENT (ghost track with scroll height)
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [endX, setEndX] = useState(-75);

  // Calculate the actual scroll distance needed based on content
  useEffect(() => {
    const calculateEndX = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Calculate percentage to scroll (content that overflows viewport)
        const scrollPercent = ((trackWidth - viewportWidth) / trackWidth) * 100;
        // Cap between -50% and -85% for safety
        setEndX(-Math.min(Math.max(scrollPercent, 50), 85));
      }
    };

    // Initial calculation
    calculateEndX();
    
    // Recalculate on resize
    window.addEventListener('resize', calculateEndX);
    
    // Also recalculate after images load
    const timer = setTimeout(calculateEndX, 500);
    
    return () => {
      window.removeEventListener('resize', calculateEndX);
      clearTimeout(timer);
    };
  }, []);

  // Track scroll progress of the grandparent section
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Map vertical scroll (0-1) to horizontal movement - now dynamic
  const x = useTransform(scrollYProgress, [0, 1], ['1%', `${endX}%`]);

  return (
    // GRANDPARENT: Ghost Track - creates scroll space
    <section ref={targetRef} className="gallery-section" id="gallery">
      {/* PARENT: Sticky Frame - locks to viewport */}
      <div className="gallery-sticky">
        {/* CHILD: Motion Track - horizontal flex container */}
        <motion.div ref={trackRef} className="gallery-track" style={{ x }}>
          {slides.map((slide, index) => (
            slide.type === 'text' ? (
              <motion.div 
                key={slide.id} 
                className="gallery-item gallery-text-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
              >
                <div className="text-card-content">
                  <span className="text-card-subtitle">{slide.subtitle}</span>
                  <h3 className="text-card-title">{slide.title}</h3>
                  <p className="text-card-description">{slide.description}</p>
                </div>
              </motion.div>
            ) : (
              <div key={slide.id} className="gallery-item gallery-image-card">
                <img src={slide.src} alt={slide.alt} loading="lazy" />
              </div>
            )
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
