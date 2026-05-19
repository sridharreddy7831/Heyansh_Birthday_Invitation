import React from 'react';
import { motion } from 'framer-motion';

const HangingBanner: React.FC = () => {
  // Flag with color configurations and bouncy spring hover interaction (Super enlarged size)
  const Flag = ({ 
    x, 
    y, 
    rotate, 
    char, 
    fillColor = "#0d7c88", 
    strokeColor = "#0a5e67" 
  }: { 
    x: number, 
    y: number, 
    rotate: number, 
    char: string, 
    fillColor?: string, 
    strokeColor?: string 
  }) => (
    <motion.g 
      transform={`translate(${x}, ${y}) rotate(${rotate})`}
      whileHover={{ 
        scale: 1.25, 
        rotate: rotate + (char.charCodeAt(0) % 2 === 0 ? 12 : -12),
        y: y + 15 
      }}
      transition={{ type: "spring", stiffness: 350, damping: 10 }}
      className="cursor-pointer"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Small hanging threads connecting flag to string */}
      <line x1="-30" y1="-75" x2="-30" y2="-55" stroke="#475569" strokeWidth="1.5" />
      <line x1="30" y1="-75" x2="30" y2="-55" stroke="#475569" strokeWidth="1.5" />

      {/* Flag Shape - Super Enlarged (Width 100px, Height 130px) */}
      <path
        d="M -50,-55 L 50,-55 L 50,50 L 0,75 L -50,50 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="2"
        filter="drop-shadow(0px 6px 8px rgba(0,0,0,0.22))"
      />
      {/* Letter text - Super Enlarged (Font Size 52) */}
      <text
        x="0"
        y="18"
        fontFamily="Outfit, sans-serif"
        fontWeight="900"
        fontSize="52"
        fill="#ffffff"
        textAnchor="middle"
        style={{ letterSpacing: '0.05em' }}
      >
        {char}
      </text>
    </motion.g>
  );

  return (
    <div className="absolute top-[55px] sm:top-[85px] left-0 w-full overflow-hidden pointer-events-none z-20 h-auto">
      <svg
        viewBox="0 0 1200 480"
        className="w-full h-auto animate-swayOrigin"
        preserveAspectRatio="xMidYMin meet"
      >
        {/* String 1 (HAPPY) */}
        <path d="M 300,10 Q 600,100 900,10" fill="none" stroke="#475569" strokeWidth="1.5" opacity="0.6" />
        
        {/* String 2 (BIRTHDAY) - Shifted down by 60px */}
        <path d="M 150,130 Q 600,280 1050,130" fill="none" stroke="#475569" strokeWidth="1.5" opacity="0.6" />

        {/* HAPPY Flags (Rotating Theme Palette: Teal, Pink, Gold, Rose) */}
        <Flag x={380} y={48} rotate={12} char="H" fillColor="#0d7c88" strokeColor="#0a5e67" />
        <Flag x={490} y={75} rotate={6} char="A" fillColor="#db2777" strokeColor="#be185d" />
        <Flag x={600} y={85} rotate={0} char="P" fillColor="#e1ba72" strokeColor="#ca8a04" />
        <Flag x={710} y={75} rotate={-6} char="P" fillColor="#ad2b59" strokeColor="#852d4c" />
        <Flag x={820} y={48} rotate={-12} char="Y" fillColor="#0d7c88" strokeColor="#0a5e67" />

        {/* BIRTHDAY Flags - Shifted down by 60px */}
        <Flag x={220} y={172} rotate={16} char="B" fillColor="#0d7c88" strokeColor="#0a5e67" />
        <Flag x={325} y={212} rotate={11} char="I" fillColor="#db2777" strokeColor="#be185d" />
        <Flag x={435} y={240} rotate={6} char="R" fillColor="#e1ba72" strokeColor="#ca8a04" />
        <Flag x={545} y={258} rotate={2} char="T" fillColor="#ad2b59" strokeColor="#852d4c" />
        <Flag x={655} y={258} rotate={-2} char="H" fillColor="#db2777" strokeColor="#be185d" />
        <Flag x={765} y={240} rotate={-6} char="D" fillColor="#0d7c88" strokeColor="#0a5e67" />
        <Flag x={875} y={212} rotate={-11} char="A" fillColor="#e1ba72" strokeColor="#ca8a04" />
        <Flag x={980} y={172} rotate={-16} char="Y" fillColor="#ad2b59" strokeColor="#852d4c" />
      </svg>
    </div>
  );
};

export default HangingBanner;
