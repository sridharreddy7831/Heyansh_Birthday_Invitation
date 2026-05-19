import React from 'react';
import { motion } from 'framer-motion';

const schedule = [
  { time: '6:00 PM', title: 'Welcome & Snacks', description: 'Guests arrive, meet & greet with welcome drinks and starters.', color: 'from-birthday-purple to-birthday-pink' },
  { time: '7:00 PM', title: 'Magic Show', description: 'Fun magic show and games for kids and adults.', color: 'from-birthday-pink to-birthday-gold' },
  { time: '8:00 PM', title: 'Cake Cutting', description: 'The grand moment! Join us to sing happy birthday.', color: 'from-birthday-gold to-birthday-peach' },
  { time: '8:30 PM', title: 'Dinner & Music', description: 'Delicious dinner served while enjoying background music.', color: 'from-birthday-peach to-birthday-purple' },
  { time: '9:30 PM', title: 'Dance & Photos', description: 'Hit the dance floor and capture memories at the photobooth.', color: 'from-birthday-purple to-birthday-pink' },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-birthday-gold uppercase tracking-widest text-sm font-semibold">Flow of Events</span>
          <h3 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient pb-2">Celebration Timeline</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-birthday-text/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-birthday-bg md:-translate-x-1/2 top-6 md:top-auto shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className={`inline-block px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.color} mb-3`}>
                    {item.time}
                  </div>
                  <h4 className="text-2xl font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-birthday-text/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
