import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import StringLights from './StringLights';
import FloatingAnimals from './FloatingAnimals';
import HangingBanner from './HangingBanner';
import HangingStars from './HangingStars';
import BuntingGarland from './BuntingGarland';

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 z-10 overflow-hidden">
      <BuntingGarland />
      <HangingStars />
      <HangingBanner />
      <StringLights />
      <FloatingAnimals />

      <div className="max-w-xl mx-auto text-center z-10 bg-white/40 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/60 mt-10 relative">

        {/* Baby Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[6px] border-[#e1ba72] overflow-hidden shadow-2xl mb-8 z-20 bg-white cursor-pointer group"
        >
          {/* Real baby photo with zoom effect */}
          <img
            src="/6.webp"
            alt="Heyansh"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Action Overlay */}
          <div className="absolute inset-0 bg-[#ad2b59]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-[#ad2b59]/80 text-[#fcf5e3] px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              View Photo
            </span>
          </div>
          {/* Flower decorations on frame */}
          <div className="absolute bottom-[-10px] left-[-10px] text-4xl select-none">🌿</div>
          <div className="absolute bottom-[-10px] right-[-10px] text-4xl select-none">🌿</div>
        </motion.div>

        {/* Grey Cat Brush Banner for Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-[340px] sm:max-w-[450px] md:max-w-[500px] mx-auto mb-8 mt-[-30px] z-30 flex items-center justify-center select-none"
        >
          {/* Banner Image */}
          <img 
            src="/cat-banner.webp" 
            alt="Cat Banner decoration" 
            className="w-full h-auto drop-shadow-xl"
          />
          
          {/* Text Container centered over the grey brush splash area */}
          <div className="absolute inset-y-0 right-0 left-[22%] sm:left-[24%] flex items-center justify-center pr-[6%] sm:pr-[8%]">
            <h1 className="font-handwriting text-3xl sm:text-4xl md:text-5.5xl text-[#fcf5e3] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap tracking-wide">
              Heyansh Royal
            </h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.h2
          className="font-display text-2xl md:text-3xl font-bold mb-6 tracking-wide text-[#0d7c88]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          6th Birthday Invitation
        </motion.h2>

        {/* Invitation Text */}
        <motion.p
          className="font-sans text-lg md:text-xl text-[#0d7c88] mb-8 font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          The Kathi Family requests your presence<br />
          at his birthday celebrations
        </motion.p>

        {/* Date and Time Details */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="border-t border-b border-[#ad2b59]/30 py-4 mb-4">
            <h3 className="font-display text-xl md:text-2xl font-bold text-[#ad2b59] tracking-widest uppercase mb-2">
              Wednesday 27<sup className="text-sm">th</sup> May
            </h3>
            <div className="flex items-center justify-center gap-4 text-[#ad2b59] font-bold text-lg md:text-xl">
              <span>2026</span>
              <span className="w-px h-6 bg-[#ad2b59]/50"></span>
              <span>11 A.M.</span>
            </div>
          </div>

          {/* Starburst badge */}
          <div className="absolute top-0 right-[-40px] md:right-[-60px] rotate-12 bg-[#ffe4e1] border-2 border-[#e1ba72] text-[#ad2b59] font-handwriting text-xl px-4 py-2 shadow-lg starburst-shape hidden sm:block z-10">
            Cake and fun<br />await!
          </div>
        </motion.div>

        {/* Venue Details */}
        <motion.div
          className="flex flex-col items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div className="text-[#0d7c88] flex items-center justify-center mb-2 font-semibold text-lg gap-2">
            <MapPin size={20} /> Venue
          </div>
          <p className="font-sans font-bold text-[#ad2b59] text-lg">Boyakonda Gangamma Temple</p>
          <p className="font-sans text-[#ad2b59] font-medium">Madanapalle</p>
        </motion.div>

        {/* Regards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-center"
        >
          <p className="text-[#0d7c88] font-bold text-lg mb-1">Warm Regards:</p>
          <p className="font-sans font-bold text-[#ad2b59] text-xl">The Kathi Family</p>
        </motion.div>

        {/* Peeking Dog character (Waving near Warm Regards at bottom right) */}
        <motion.div
          className="absolute bottom-[-30px] right-[-15px] sm:bottom-[-40px] sm:right-[-35px] w-24 h-24 sm:w-36 sm:h-36 z-20 pointer-events-none mix-blend-multiply"
          initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 1.4,
            y: {
              repeat: Infinity,
              duration: 3.8,
              ease: "easeInOut"
            }
          }}
        >
          <img src="/dog.webp" alt="Cute Dog" className="w-full h-full object-contain" />
        </motion.div>
      </div>

      {/* Lightbox Modal for Photo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // Prevent close on clicking photo itself
              className="relative max-w-3xl w-full max-h-[85vh] rounded-3xl overflow-hidden border-[8px] border-[#e1ba72] bg-white shadow-2xl cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-[#fcf5e3] flex items-center justify-center transition-colors border border-white/20 cursor-pointer z-10"
              >
                <X size={20} />
              </button>

              {/* Large Image */}
              <img
                src="/6.webp"
                alt="Heyansh Full Photo"
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
              
              {/* Image Title Banner */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-center">
                <p className="font-handwriting text-3xl text-[#fcf5e3] font-bold drop-shadow-md">
                  Heyansh Royal
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
