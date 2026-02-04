import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './CurtainReveal.css';

interface CurtainRevealProps {
  children: ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  color?: string;
  className?: string;
}

const CurtainReveal = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  color = '#10B981', // Emerald Green
  className = '',
}: CurtainRevealProps) => {
  // Calculate initial and animate positions based on direction
  const getTransformValues = () => {
    switch (direction) {
      case 'left':
        return {
          initial: { x: '-100%' },
          coverAnimate: { x: '0%' },
          revealAnimate: { x: '100%' },
        };
      case 'right':
        return {
          initial: { x: '100%' },
          coverAnimate: { x: '0%' },
          revealAnimate: { x: '-100%' },
        };
      case 'up':
        return {
          initial: { y: '100%' },
          coverAnimate: { y: '0%' },
          revealAnimate: { y: '-100%' },
        };
      case 'down':
        return {
          initial: { y: '-100%' },
          coverAnimate: { y: '0%' },
          revealAnimate: { y: '100%' },
        };
      default:
        return {
          initial: { x: '-100%' },
          coverAnimate: { x: '0%' },
          revealAnimate: { x: '100%' },
        };
    }
  };

  const transforms = getTransformValues();

  return (
    <motion.div
      className={`curtain-reveal-container ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* The content (hidden initially, revealed after curtain) */}
      <motion.div
        className="curtain-content"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              delay: delay + duration, 
              duration: 0.01 
            }
          },
        }}
      >
        {children}
      </motion.div>

      {/* The curtain overlay */}
      <motion.div
        className="curtain-overlay"
        style={{ backgroundColor: color }}
        variants={{
          hidden: transforms.initial,
          visible: transforms.coverAnimate,
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0.645, 0.045, 0.355, 1], // Cubic bezier for smooth motion
        }}
      />

      {/* Second overlay for the reveal (slides away) */}
      <motion.div
        className="curtain-overlay curtain-reveal"
        style={{ backgroundColor: color }}
        variants={{
          hidden: { ...transforms.initial, opacity: 0 },
          visible: transforms.revealAnimate,
        }}
        initial={false}
        animate="visible"
        transition={{
          duration: duration,
          delay: delay + duration * 0.8,
          ease: [0.645, 0.045, 0.355, 1],
        }}
      />
    </motion.div>
  );
};

export default CurtainReveal;
