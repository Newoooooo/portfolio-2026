import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Layout.css';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax transforms for background shards
  const shard1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shard2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const shard3Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const shard1Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const shard2Rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div ref={containerRef} className="p3-app">
      {/* BACKGROUND SHARDS - Fixed, Parallax */}
      <div className="shards-container">
        <motion.div 
          className="shard shard-1"
          style={{ y: shard1Y, rotate: shard1Rotate }}
        />
        <motion.div 
          className="shard shard-2"
          style={{ y: shard2Y, rotate: shard2Rotate }}
        />
        <motion.div 
          className="shard shard-3"
          style={{ y: shard3Y }}
        />
      </div>

      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
