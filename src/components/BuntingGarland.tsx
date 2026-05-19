import React from 'react';
import { motion } from 'framer-motion';

const BuntingGarland: React.FC = () => {
  // Vintage pastel paper-cut color palette from the user's reference image
  const colors = [
    "#95c3c6", // Vintage Teal
    "#f8c5b2", // Vintage Peach
    "#fbe6a2", // Vintage Yellow
    "#eba0b1", // Vintage Pink
    "#bfe2cf"  // Vintage Mint
  ];

  // Helper to render a triangle paper flag with subtle vintage paper drop shadow
  const Flag = ({ x, y, rotate, color }: { x: number; y: number; rotate: number; color: string }) => (
    <polygon
      points="-14,-2 14,-2 0,32"
      fill={color}
      transform={`translate(${x}, ${y}) rotate(${rotate})`}
      filter="drop-shadow(0px 3px 2px rgba(0,0,0,0.12))"
      className="transition-transform duration-300 hover:scale-110 cursor-pointer"
    />
  );

  // Helper to draw a gold curly ribbon hanging down
  const CurlyRibbon = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity="0.85">
      <path
        d="M 0,0 C 15,10 -15,20 0,30 C 15,40 -15,50 0,60 C 15,70 -15,80 0,90"
        fill="none"
        stroke="#e1ba72"
        strokeWidth="2.2"
        strokeLinecap="round"
        filter="drop-shadow(0px 2px 3px rgba(225,186,114,0.4))"
      />
    </g>
  );

  // Helper to draw falling gold confetti
  const Confetti = ({ x, y, rotate, delay }: { x: number; y: number; rotate: number; delay: number }) => (
    <motion.rect
      width="5"
      height="8"
      fill="#fbbf24"
      rx="1"
      initial={{ y: y - 20, opacity: 0 }}
      animate={{ 
        y: [y - 20, y + 10, y - 20],
        opacity: [0, 0.85, 0],
        rotate: [rotate, rotate + 45, rotate]
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      transform={`translate(${x}, 0)`}
    />
  );

  // Coordinate arrays shifted upwards by 40px to sit at the absolute top edge of the screen
  const wire1Flags = [
    { x: 30, y: -35, r: 12 }, { x: 95, y: -23, r: 10 }, { x: 160, y: -12, r: 8 }, 
    { x: 225, y: -2, r: 6 }, { x: 290, y: 7, r: 4 }, { x: 355, y: 14, r: 2 }, 
    { x: 420, y: 20, r: 1 }, { x: 485, y: 24, r: 0 }, { x: 550, y: 26, r: 0 }, 
    { x: 615, y: 26, r: 0 }, { x: 680, y: 24, r: 0 }, { x: 745, y: 20, r: -1 }, 
    { x: 810, y: 14, r: -2 }, { x: 875, y: 7, r: -4 }, { x: 940, y: -2, r: -6 }, 
    { x: 1005, y: -12, r: -8 }, { x: 1070, y: -23, r: -10 }, { x: 1135, y: -35, r: -12 }
  ];

  const wire2Flags = [
    { x: 65, y: -14, r: 14 }, { x: 135, y: 2, r: 11 }, { x: 205, y: 17, r: 8 }, 
    { x: 275, y: 30, r: 6 }, { x: 345, y: 41, r: 4 }, { x: 415, y: 49, r: 2 }, 
    { x: 485, y: 54, r: 1 }, { x: 555, y: 57, r: 0 }, { x: 625, y: 57, r: 0 }, 
    { x: 695, y: 54, r: -1 }, { x: 765, y: 49, r: -2 }, { x: 835, y: 41, r: -4 }, 
    { x: 905, y: 30, r: -6 }, { x: 975, y: 17, r: -8 }, { x: 1045, y: 2, r: -11 }, 
    { x: 1115, y: -14, r: -14 }
  ];

  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-10 h-48 md:h-64 filter saturate-[0.88] contrast-[0.92] opacity-90">
      {/* Soft warm vintage radial gradient overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf5e3]/20 via-transparent to-transparent"></div>

      <svg 
        viewBox="0 0 1200 170" 
        className="w-full h-full" 
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Wire strings (shifted upwards) */}
        <path d="M-30,-50 Q600,30 1230,-50" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.15" />
        <path d="M-30,-30 Q600,60 1230,-30" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.15" />

        {/* Gold curly ribbons hanging downwards (shifted upwards) */}
        <CurlyRibbon x={110} y={-8} scale={0.7} />
        <CurlyRibbon x={290} y={35} scale={0.8} />
        <CurlyRibbon x={510} y={55} scale={0.75} />
        <CurlyRibbon x={710} y={53} scale={0.75} />
        <CurlyRibbon x={910} y={30} scale={0.8} />
        <CurlyRibbon x={1080} y={-5} scale={0.7} />

        {/* Wire 1 Flags (High Bunting) */}
        {wire1Flags.map((flag, idx) => (
          <Flag 
            key={`w1-${idx}`} 
            x={flag.x} 
            y={flag.y} 
            rotate={flag.r} 
            color={colors[idx % colors.length]} 
          />
        ))}

        {/* Wire 2 Flags (Low Bunting) */}
        {wire2Flags.map((flag, idx) => (
          <Flag 
            key={`w2-${idx}`} 
            x={flag.x} 
            y={flag.y} 
            rotate={flag.r} 
            color={colors[(idx + 2) % colors.length]} 
          />
        ))}

        {/* Floating/Falling Gold Confetti */}
        <Confetti x={80} y={60} rotate={15} delay={0.2} />
        <Confetti x={220} y={90} rotate={45} delay={1.1} />
        <Confetti x={400} y={110} rotate={10} delay={0.5} />
        <Confetti x={600} y={120} rotate={35} delay={2.3} />
        <Confetti x={780} y={110} rotate={-15} delay={0.8} />
        <Confetti x={950} y={90} rotate={25} delay={1.7} />
        <Confetti x={1120} y={60} rotate={-10} delay={1.4} />
      </svg>
    </div>
  );
};

export default BuntingGarland;
