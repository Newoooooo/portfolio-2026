import { motion } from 'framer-motion';
import './InwardHeroBackground.css';

// Generate Archimedean spiral path
const generateSpiralPath = (turns: number = 5, maxRadius: number = 48): string => {
  const points: string[] = [];
  const totalPoints = turns * 80;
  
  for (let i = 0; i <= totalPoints; i++) {
    const angle = (i / totalPoints) * turns * 2 * Math.PI;
    const radius = (i / totalPoints) * maxRadius;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    
    if (i === 0) {
      points.push(`M ${x} ${y}`);
    } else {
      points.push(`L ${x} ${y}`);
    }
  }
  
  return points.join(' ');
};

const spiralPath = generateSpiralPath(5, 45);

// Concentric rings for hypnotic effect
const rings = [
  { radius: 42, duration: 30, direction: 1 },
  { radius: 35, duration: 25, direction: -1 },
  { radius: 28, duration: 20, direction: 1 },
  { radius: 21, duration: 15, direction: -1 },
  { radius: 14, duration: 12, direction: 1 },
  { radius: 8, duration: 10, direction: -1 },
];

// Floating particles converging inward
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  angle: (i * 18) + Math.random() * 10,
  delay: Math.random() * 3,
  duration: 6 + Math.random() * 4,
  size: 0.2 + Math.random() * 0.3,
  startRadius: 48 + Math.random() * 10,
}));

const InwardHeroBackground = () => {
  return (
    <div className="inward-hero-bg">
      <svg className="inward-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Radial fade - transparent at center, visible at edges */}
          <radialGradient id="heroFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="30%" stopColor="white" stopOpacity="0.2" />
            <stop offset="70%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </radialGradient>
          
          <mask id="heroMask">
            <rect x="0" y="0" width="100" height="100" fill="url(#heroFade)" />
          </mask>
        </defs>

        {/* Rotating Spiral - draws eye inward */}
        <g mask="url(#heroMask)">
          <motion.path
            d={spiralPath}
            fill="none"
            stroke="#064E3B"
            strokeWidth="0.15"
            strokeDasharray="1 2"
            strokeLinecap="round"
            opacity={0.12}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ originX: '50px', originY: '50px' }}
          />
        </g>

        {/* Concentric Rotating Rings */}
        <g mask="url(#heroMask)">
          {rings.map((ring, index) => (
            <motion.circle
              key={index}
              cx="50"
              cy="50"
              r={ring.radius}
              fill="none"
              stroke="#064E3B"
              strokeWidth="0.1"
              strokeDasharray="0.5 1.5"
              opacity={0.06 + index * 0.015}
              initial={{ rotate: 0 }}
              animate={{ rotate: ring.direction * 360 }}
              transition={{
                duration: ring.duration,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{ originX: '50px', originY: '50px' }}
            />
          ))}
        </g>

        {/* Floating Particles - Drift inward */}
        <g mask="url(#heroMask)">
          {particles.map((particle) => {
            const startX = 50 + Math.cos((particle.angle * Math.PI) / 180) * particle.startRadius;
            const startY = 50 + Math.sin((particle.angle * Math.PI) / 180) * particle.startRadius;
            
            return (
              <motion.circle
                key={particle.id}
                r={particle.size}
                fill="#064E3B"
                initial={{ cx: startX, cy: startY, opacity: 0 }}
                animate={{
                  cx: [startX, 50],
                  cy: [startY, 50],
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'easeIn',
                }}
              />
            );
          })}
        </g>

        {/* Subtle center glow */}
        <circle cx="50" cy="50" r="8" fill="url(#centerGlow)" opacity="0.3" />
        
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#064E3B" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default InwardHeroBackground;
