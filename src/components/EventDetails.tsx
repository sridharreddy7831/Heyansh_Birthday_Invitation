import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, CalendarHeart } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-birthday-gold uppercase tracking-widest text-sm font-semibold">Where & When</span>
          <h3 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient pb-2">Event Details</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-birthday-purple/20 flex items-center justify-center shrink-0 text-birthday-purple">
                  <CalendarHeart size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold mb-1 text-birthday-text">Date</h4>
                  <p className="text-birthday-text/70">Wednesday, May 27th, 2026</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-birthday-pink/20 flex items-center justify-center shrink-0 text-birthday-pink">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold mb-1 text-birthday-text">Schedule</h4>
                  <p className="text-birthday-text/70 text-sm">Cake Cutting: 11:00 AM - 12:00 PM</p>
                  <p className="text-birthday-text/70 text-sm">Lunch: 1:00 PM onwards</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-birthday-gold/20 flex items-center justify-center shrink-0 text-birthday-gold">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-semibold mb-1 text-birthday-text">Venue</h4>
                  <p className="text-birthday-text/70 mb-2">Boyakonda Gangamma Temple</p>
                  <p className="text-sm text-birthday-text/50">Madanapalle, Andhra Pradesh</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://maps.app.goo.gl/EPim69T6eWm9NwME9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <button className="w-full py-4 bg-gradient-to-r from-birthday-purple via-birthday-pink to-birthday-gold rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-white">
                  <Navigation size={20} />
                  Get Directions
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass p-2 relative"
          >
            {/* Real Interactive Map */}
            <iframe 
              src="https://maps.google.com/maps?q=Boyakonda%20Gangamma%20Temple,%20Madanapalle&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-2xl border-0 shadow-inner"
              allowFullScreen={true}
              loading="lazy"
              title="Boyakonda Gangamma Temple Map"
            ></iframe>
          </motion.div>
        </div>

        {/* Invited By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-birthday-gold via-birthday-pink to-birthday-purple"></div>

          <h4 className="font-handwriting text-5xl text-[#ad2b59] font-bold mb-8">Invited By</h4>

          <div className="space-y-6">
            {/* Parents Row */}
            <div className="relative p-6 md:p-8 bg-white/35 rounded-3xl border border-white/45 shadow-md transition-all duration-300 hover:scale-[1.01] hover:bg-white/50 flex flex-col items-center justify-center max-w-full overflow-hidden">
              <h5 className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#ad2b59] font-bold tracking-wide text-center leading-none">
                K Hemanth Kumar
              </h5>
              <div className="text-birthday-gold font-handwriting text-2xl md:text-3.5xl font-bold my-1 sm:my-2 select-none">
                &amp;
              </div>
              <h5 className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#ad2b59] font-bold tracking-wide text-center leading-none">
                K Srilatha
              </h5>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#0d7c88] uppercase mt-3 bg-[#0d7c88]/10 px-4 py-1.5 rounded-full border border-[#0d7c88]/15 shadow-sm select-none">
                (Father and Mother)
              </p>
            </div>

            {/* Grandparents Row */}
            <div className="relative p-6 md:p-8 bg-white/35 rounded-3xl border border-white/45 shadow-md transition-all duration-300 hover:scale-[1.01] hover:bg-white/50 flex flex-col items-center justify-center max-w-full overflow-hidden">
              <h5 className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#ad2b59] font-bold tracking-wide text-center leading-none">
                Reddappa
              </h5>
              <div className="text-birthday-gold font-handwriting text-2xl md:text-3.5xl font-bold my-1 sm:my-2 select-none">
                &amp;
              </div>
              <h5 className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-[#ad2b59] font-bold tracking-wide text-center leading-none">
                Lakshmi Devi
              </h5>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#0d7c88] uppercase mt-3 bg-[#0d7c88]/10 px-4 py-1.5 rounded-full border border-[#0d7c88]/15 shadow-sm select-none">
                (Grand Parents)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
