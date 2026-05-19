import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const images = [
  '/1.jpeg',
  '/3.jpeg',
  '/5.jpeg',
  '/7.jpeg',
  '/9.jpeg',
  '/13.jpeg',
];

// Helper Component: Renders solid, floating hearts rising from bottom to top inside each photo card
const FloatingHeartsOnCard: React.FC = () => {
  // Static configuration to ensure zero re-render flickering
  const hearts = [
    { left: 15, size: 10, delay: 0, duration: 4.0, xOffset: 12 },
    { left: 35, size: 14, delay: 1.2, duration: 4.8, xOffset: -8 },
    { left: 55, size: 8, delay: 2.2, duration: 3.5, xOffset: 15 },
    { left: 75, size: 16, delay: 0.5, duration: 4.2, xOffset: -12 },
    { left: 45, size: 12, delay: 2.8, duration: 3.8, xOffset: 10 },
  ];

  return (
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-2xl">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-20px] text-birthday-pink filter drop-shadow-[0_0_4px_rgba(219,39,119,0.7)]"
          style={{ 
            left: `${heart.left}%`,
          }}
          initial={{ y: "0%", opacity: 0, scale: 0.5 }}
          animate={{
            y: "-300px", // Animates up past the top of the square card
            opacity: [0, 0.95, 0.95, 0], // Keeps opacity very high (less transparency) while visible
            scale: [0.5, 1, 1.2, 0.8],
            x: [0, heart.xOffset, -heart.xOffset, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "easeInOut"
          }}
        >
          <Heart size={heart.size} style={{ fill: '#db2777' }} />
        </motion.div>
      ))}
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-birthday-gold uppercase tracking-widest text-sm font-semibold">Captured Moments</span>
          <h3 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient pb-2">Photo Gallery</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImg(src)}
            >
              {/* Rising Floating Hearts Layer */}
              <FloatingHeartsOnCard />

              {/* Clean Hover Overlay Tint */}
              <div className="absolute inset-0 bg-birthday-pink/5 group-hover:bg-birthday-pink/15 transition-colors duration-300 z-10"></div>

              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-birthday-text/50 hover:text-birthday-text transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={32} />
            </button>
            <motion.img 
              src={selectedImg} 
              alt="Enlarged gallery view" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
