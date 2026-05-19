import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, MailOpen } from 'lucide-react';

interface LoadingScreenProps {
  onOpen: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onOpen }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-birthday-bg px-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        {!isLoaded ? (
          <>
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <Gift size={64} className="text-birthday-gold" />
              </motion.div>
              <div className="absolute inset-0 bg-birthday-gold blur-xl opacity-30 rounded-full z-[-1]"></div>
            </div>
            
            <motion.h2 
              className="mt-8 font-display text-2xl font-bold tracking-widest text-gradient"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              UNWRAPPING...
            </motion.h2>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex flex-col items-center"
          >
            {/* Elegant Birthday Envelope Card */}
            <div className="relative mb-8 p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl flex flex-col items-center max-w-[280px]">
              <motion.div
                animate={{ 
                  y: [0, -8, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="w-20 h-20 rounded-full bg-[#fcf5e3] border-2 border-birthday-gold flex items-center justify-center shadow-lg text-birthday-pink mb-4"
              >
                <MailOpen size={36} className="text-[#ad2b59]" />
              </motion.div>
              <h3 className="font-handwriting text-3xl font-bold text-[#ad2b59] mb-1">Heyansh's</h3>
              <p className="text-sm font-semibold tracking-wider text-[#0d7c88] uppercase mb-4">6th Birthday Invitation</p>
              
              <div className="text-xs text-[#ad2b59]/60 font-medium">Click below to open the invitation</div>
            </div>

            {/* Glowing Open Button */}
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-[#db2777] via-[#ad2b59] to-[#0d7c88] text-white font-display font-bold text-lg rounded-full shadow-2xl transition-all duration-300 border border-white/20 tracking-wider flex items-center gap-2 group cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Pulse waves */}
              <span className="absolute inset-0 rounded-full bg-[#db2777]/30 animate-ping opacity-75 group-hover:opacity-100 transition-opacity" style={{ animationDuration: '1.8s' }}></span>
              
              <span className="relative z-10">OPEN INVITATION</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
