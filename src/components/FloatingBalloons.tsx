import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Balloon {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
}

const FloatingBalloons: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const colors = ['bg-birthday-red', 'bg-birthday-blue', 'bg-birthday-green', 'bg-birthday-yellow', 'bg-birthday-pink'];
    
    // Generate initial balloons
    const initialBalloons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random x position (%)
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 40 + 30, // 30px to 70px
      delay: Math.random() * 20, // 0 to 20s delay
      duration: Math.random() * 15 + 15, // 15 to 30s duration
    }));
    
    setBalloons(initialBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className={`absolute bottom-[-100px] rounded-[50%] ${balloon.color} shadow-sm opacity-80`}
          style={{
            width: balloon.size,
            height: balloon.size * 1.2,
            left: `${balloon.x}%`,
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
            rotate: [0, 10, -10, 5, -5, 0]
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Balloon string */}
          <div className="absolute top-[95%] left-1/2 w-[1px] h-16 bg-white/20 origin-top rotate-12"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
