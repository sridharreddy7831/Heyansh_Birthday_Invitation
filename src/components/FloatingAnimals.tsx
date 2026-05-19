import React from 'react';
import { motion } from 'framer-motion';

const FloatingAnimals: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Dog */}
      <motion.div
        className="absolute top-[15%] left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden"
        style={{ mixBlendMode: 'multiply' }}
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src="/dog.png" alt="Dog Party" className="w-full h-full object-contain mix-blend-multiply" />
      </motion.div>

      {/* Panda */}
      <motion.div
        className="absolute top-[60%] left-[2%] md:left-[8%] w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden"
        style={{ mixBlendMode: 'multiply' }}
        animate={{
          y: [0, 20, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <img src="/panda.png" alt="Panda Party" className="w-full h-full object-contain mix-blend-multiply" />
      </motion.div>

      {/* Fox */}
      <motion.div
        className="absolute top-[25%] right-[2%] md:right-[5%] w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden"
        style={{ mixBlendMode: 'multiply' }}
        animate={{
          y: [0, -20, 0],
          rotate: [-10, 0, -10],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <img src="/fox.png" alt="Fox Party" className="w-full h-full object-contain mix-blend-multiply" />
      </motion.div>
    </div>
  );
};

export default FloatingAnimals;
