import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'idle' | 'sucking' | 'reveal' | 'exit'>('idle');

  useEffect(() => {
    // Timeline Sequence
    const suckTimer = setTimeout(() => setStage('sucking'), 800); // Wait a bit on green
    const revealTimer = setTimeout(() => setStage('reveal'), 2300); // Text appears after suck
    const exitTimer = setTimeout(() => setStage('exit'), 4500); // Text fades
    const completeTimer = setTimeout(() => onLoadingComplete(), 5500); // Unmount

    return () => {
      clearTimeout(suckTimer);
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="zen-loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 1. Base Layer: Deep Green (Chaos) */}
      <div className="loading-base-layer" />

      {/* 2. Top Layer: White (Order) - SUCKS INWARD */}
      <div className="loading-mask-layer">
        <svg className="suck-svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            {/* The Mask: White = Visible, Black = Hole */}
            <mask id="suckMask">
              {/* The "Paper" (White Layer) */}
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              
              {/* The "Hole" (Green shows through) - Shrinks to 0 */}
              <motion.circle
                cx="50%"
                cy="50%"
                fill="black"
                initial={{ r: '150%' }}
                animate={{ 
                  r: stage === 'idle' ? '150%' : 0
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.7, 0, 0.2, 1], // "Vacuum" ease
                  delay: 0.2
                }}
              />
            </mask>
          </defs>

          {/* The White Layer applied with the mask */}
          <rect 
            x="0" y="0" width="100%" height="100%" 
            fill="white" 
            mask="url(#suckMask)" 
          />
        </svg>
      </div>

      {/* 3. The Spiral Visual (Adds "Swirl" flavor to the suction) */}
      <AnimatePresence>
        {stage === 'sucking' && (
          <motion.div
            className="spiral-swirl-container"
            initial={{ opacity: 0, rotate: 0, scale: 1 }}
            animate={{ opacity: 0.3, rotate: 180, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <svg width="600" height="600" viewBox="0 0 100 100" className="spiral-swirl-svg">
              <path 
                d="M50,50 m0,-45 a45,45 0 1,1 0,90 a45,45 0 1,1 0,-90" 
                fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" 
              />
              <path 
                d="M50,50 m0,-30 a30,30 0 1,0 0,60 a30,30 0 1,0 0,-60" 
                fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="2 6" 
              />
              <path 
                d="M50,50 m0,-15 a15,15 0 1,1 0,30 a15,15 0 1,1 0,-30" 
                fill="none" stroke="white" strokeWidth="1" strokeDasharray="1 3" 
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. The Motto (Reveals only when White - The Singularity) */}
      <AnimatePresence>
        {stage === 'reveal' && (
          <motion.div
            className="zen-center-text"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="zen-title">Simplifying</span>
            <span className="zen-subtitle">Chaos</span>
            
            <motion.div 
              className="zen-divider"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <span className="zen-attribution-text">NHEO MANALO</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;
