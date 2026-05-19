import React from 'react';
import { motion } from 'framer-motion';

const HangingStars: React.FC = () => {
  // SVG points for a 5-pointed star centered at (0,0)
  const smallStarPoints = "0,-5 1.5,-1.5 5,-1.5 2,0.5 3,4.5 0,2 -3,4.5 -2,0.5 -5,-1.5 -1.5,-1.5";
  const bigStarPoints = "0,-18 5.5,-5.5 18,-5.5 7.5,1 11,14.5 0,7 -11,14.5 -7.5,1 -18,-5.5 -5.5,-5.5";

  // Reusable strand component with cross-browser Framer Motion pendulum physics
  const Strand = ({ 
    x, 
    length, 
    starsCount, 
    swayAngle, 
    duration,
    delay,
    blinkOffset 
  }: { 
    x: number; 
    length: number; 
    starsCount: number; 
    swayAngle: number; 
    duration: number;
    delay: number;
    blinkOffset: number; 
  }) => {
    // Generate Y positions for small stars along the string
    const starInterval = (length - 40) / (starsCount + 1);
    const smallStars = Array.from({ length: starsCount }).map((_, i) => starInterval * (i + 1));

    return (
      <g transform={`translate(${x}, 0)`}>
        <motion.g 
          initial={{ rotate: -swayAngle }}
          animate={{ 
            rotate: [-swayAngle, swayAngle, -swayAngle]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
          style={{ 
            transformOrigin: "top center"
          }}
        >
          {/* Main hanging line */}
          <line x1="0" y1="0" x2="0" y2={length} stroke="#d97706" strokeWidth="1.2" opacity="0.6" />

          {/* Small stars along the line */}
          {smallStars.map((y, idx) => {
            const blinkClass = `blink-gold-${((idx + blinkOffset) % 3) + 1}`;
            return (
              <polygon
                key={idx}
                points={smallStarPoints}
                fill="#fbbf24"
                stroke="#d97706"
                strokeWidth="0.5"
                className={blinkClass}
                transform={`translate(0, ${y})`}
              />
            );
          })}

          {/* Large 3D-styled star at the bottom */}
          <polygon
            points={bigStarPoints}
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1"
            className={`blink-gold-${(blinkOffset % 3) + 1}`}
            transform={`translate(0, ${length})`}
            filter="drop-shadow(0px 3px 5px rgba(251,191,36,0.5))"
          />
          {/* Inner polygon for a 3D bevel look */}
          <polygon
            points="0,-18 0,7 -11,14.5 -7.5,1"
            fill="#f59e0b"
            opacity="0.3"
            transform={`translate(0, ${length})`}
          />
        </motion.g>
      </g>
    );
  };

  return (
    <>
      {/* Left Hanging Star Strings (Compact on mobile, beautiful on desktop) */}
      <div className="absolute top-0 left-0 w-16 sm:w-28 md:w-36 h-[380px] pointer-events-none z-20 overflow-visible">
        <svg viewBox="0 0 100 400" className="w-full h-full overflow-visible" preserveAspectRatio="xMinYMin meet">
          {/* Strand 1 (Outer edge, short) */}
          <Strand x={15} length={160} starsCount={3} swayAngle={2.5} duration={5.0} delay={0} blinkOffset={0} />
          {/* Strand 2 (Middle, long) */}
          <Strand x={50} length={280} starsCount={6} swayAngle={1.8} duration={6.5} delay={1.2} blinkOffset={1} />
          {/* Strand 3 (Inner edge, medium) */}
          <Strand x={85} length={220} starsCount={4} swayAngle={1.5} duration={5.8} delay={2.5} blinkOffset={2} />
        </svg>
      </div>

      {/* Right Hanging Star Strings (Compact on mobile, beautiful on desktop) */}
      <div className="absolute top-0 right-0 w-16 sm:w-28 md:w-36 h-[380px] pointer-events-none z-20 overflow-visible">
        <svg viewBox="0 0 100 400" className="w-full h-full overflow-visible" preserveAspectRatio="xMaxYMin meet">
          {/* Symmetrical mirrored placement on the right side */}
          {/* Strand 1 (Outer edge, short) */}
          <Strand x={85} length={160} starsCount={3} swayAngle={2.5} duration={5.0} delay={1.8} blinkOffset={2} />
          {/* Strand 2 (Middle, long) */}
          <Strand x={50} length={280} starsCount={6} swayAngle={1.8} duration={6.5} delay={0.5} blinkOffset={3} />
          {/* Strand 3 (Inner edge, medium) */}
          <Strand x={15} length={220} starsCount={4} swayAngle={1.5} duration={5.8} delay={2.0} blinkOffset={0} />
        </svg>
      </div>
    </>
  );
};

export default HangingStars;
