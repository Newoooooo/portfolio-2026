import { ReactNode, useRef, Suspense } from 'react';
import { useInView } from 'framer-motion';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  minHeight?: string;
  fallback?: ReactNode;
}

export default function LazySection({ 
  children, 
  className = "", 
  minHeight = "50vh",
  fallback = null
}: LazySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={className} style={{ minHeight: isInView ? 'auto' : minHeight }}>
      {isInView ? (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
      ) : null}
    </div>
  );
}
