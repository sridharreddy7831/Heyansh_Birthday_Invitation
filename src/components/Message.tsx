import React from 'react';
import { motion } from 'framer-motion';

const Message: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center relative">
        {/* Peeking Panda character (Waving from the bottom corner of the card) */}
        <motion.div
          className="absolute bottom-[-30px] right-[-15px] sm:bottom-[-45px] sm:right-[-40px] w-24 h-24 sm:w-40 sm:h-40 z-20 pointer-events-none mix-blend-multiply"
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
            delay: 0.4,
            y: {
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut"
            }
          }}
        >
          <img src="/panda.png" alt="Cute Panda" className="w-full h-full object-contain" />
        </motion.div>

        {/* Peeking Dog character (Waving from the top left corner of the card) */}
        <motion.div
          className="absolute top-[-35px] left-[-15px] sm:top-[-50px] sm:left-[-40px] w-24 h-24 sm:w-36 sm:h-36 z-20 pointer-events-none mix-blend-multiply"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
          viewport={{ once: true }}
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
            delay: 0.6,
            y: {
              repeat: Infinity,
              duration: 4.0,
              ease: "easeInOut"
            }
          }}
        >
          <img src="/dog.png" alt="Cute Dog" className="w-full h-full object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-birthday-gold via-birthday-pink to-birthday-purple"></div>
          <div className="text-6xl text-birthday-gold/20 absolute top-4 left-6 font-display">"</div>
          <div className="text-6xl text-birthday-gold/20 absolute bottom-[-10px] right-6 font-display">"</div>

          <motion.h3 
            className="font-handwriting text-4xl md:text-5xl text-birthday-accent font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            A Special Celebration
          </motion.h3>
          
          <motion.p 
            className="text-lg md:text-xl text-birthday-text font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Our little superstar is growing up so fast, bringing so much magic, laughter, and mischief into our world! We are throwing a super fun birthday party filled with playtime, yummy treats, and lots of smiles. Come join the fun and make Heyansh's special day the happiest one ever!
          </motion.p>
          
          <motion.div 
            className="mt-8 text-birthday-gold font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            With love, <br/>
            <span className="text-birthday-text text-xl mt-2 inline-block">The Kathi Family</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Message;
