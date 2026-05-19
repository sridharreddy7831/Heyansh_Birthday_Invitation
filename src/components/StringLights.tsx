import React from 'react';

const StringLights: React.FC = () => {
  // Bulb component to reuse
  const Bulb = ({ x, y, rotate = 0, animClass = "blink-pink-normal", color = "#ec4899" }: { x: number, y: number, rotate?: number, animClass?: string, color?: string }) => (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      {/* Socket */}
      <rect x="-4" y="-2" width="8" height="10" fill="#334155" rx="1" />
      {/* Light Bulb with custom color-matched blinking animation */}
      <path className={animClass} d="M-7,8 C-7,18 7,18 7,8 C7,2 -7,2 -7,8 Z" fill={color} />
    </g>
  );

  return (
    <div className="absolute top-[-10px] left-0 w-full overflow-hidden pointer-events-none z-30 h-32 md:h-40">
      <svg viewBox="0 0 1200 120" className="w-full min-w-[1200px] h-full" preserveAspectRatio="xMidYMin slice">
        {/* Single Premium Wire hanging along the very top border (Shallow Curve) */}
        <path d="M-50,15 Q600,65 1250,15" fill="none" stroke="#334155" strokeWidth="2.5" />
        
        {/* Drop shadow glow for the wire */}
        <path d="M-50,15 Q600,65 1250,15" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />

        {/* 12 Twinkling Bulbs distributed along the single wire (Pink, Yellow, Blue, Green, Purple, Red rotation) */}
        <Bulb x={50} y={17} rotate={15} animClass="blink-pink-slow" color="#ec4899" />
        <Bulb x={150} y={24} rotate={10} animClass="blink-yellow-normal" color="#eab308" />
        <Bulb x={250} y={32} rotate={6} animClass="blink-blue-fast" color="#3b82f6" />
        <Bulb x={350} y={40} rotate={3} animClass="blink-green-slow" color="#22c55e" />
        <Bulb x={450} y={46} rotate={1} animClass="blink-purple-normal" color="#a855f7" />
        <Bulb x={550} y={50} rotate={0} animClass="blink-red-fast" color="#ef4444" />
        <Bulb x={650} y={50} rotate={0} animClass="blink-pink-slow" color="#ec4899" />
        <Bulb x={750} y={46} rotate={-1} animClass="blink-yellow-normal" color="#eab308" />
        <Bulb x={850} y={40} rotate={-3} animClass="blink-blue-fast" color="#3b82f6" />
        <Bulb x={950} y={32} rotate={-6} animClass="blink-green-slow" color="#22c55e" />
        <Bulb x={1050} y={24} rotate={-10} animClass="blink-purple-normal" color="#a855f7" />
        <Bulb x={1150} y={17} rotate={-15} animClass="blink-red-fast" color="#ef4444" />
      </svg>
    </div>
  );
};

export default StringLights;
