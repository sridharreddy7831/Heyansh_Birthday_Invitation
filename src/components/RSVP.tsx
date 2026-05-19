import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const RSVP: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 relative z-10">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-birthday-pink/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-birthday-purple/30 rounded-full blur-3xl"></div>

          <div className="text-center mb-10 relative z-10">
            <h3 className="font-display text-4xl font-bold mb-3 text-gradient">Will you attend?</h3>
            <p className="text-birthday-text/70">Kindly respond by May 20th, 2026</p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-10 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-2">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-2xl font-display font-semibold">Thank You!</h4>
              <p className="text-birthday-text/70">Your response has been recorded successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label className="block text-sm font-medium text-birthday-text/80 mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-3 rounded-xl bg-birthday-text/5 border border-birthday-text/10 text-birthday-text focus:outline-none focus:ring-2 focus:ring-birthday-pink/50 transition-all placeholder:text-birthday-text/30"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-birthday-text/80 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-5 py-3 rounded-xl bg-birthday-text/5 border border-birthday-text/10 text-birthday-text focus:outline-none focus:ring-2 focus:ring-birthday-pink/50 transition-all placeholder:text-birthday-text/30"
                  placeholder="+1 (234) 567-8900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input type="radio" name="attendance" className="peer sr-only" defaultChecked />
                  <div className="text-center px-4 py-3 rounded-xl bg-birthday-text/5 border border-birthday-text/10 peer-checked:bg-birthday-pink/20 peer-checked:border-birthday-pink/50 peer-checked:text-birthday-text transition-all text-birthday-text/60">
                    Yes, I'll attend
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input type="radio" name="attendance" className="peer sr-only" />
                  <div className="text-center px-4 py-3 rounded-xl bg-birthday-text/5 border border-birthday-text/10 peer-checked:bg-birthday-text/20 peer-checked:border-birthday-text/50 peer-checked:text-birthday-text transition-all text-birthday-text/60">
                    Sorry, can't make it
                  </div>
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-birthday-text/80 mb-2">Number of Guests</label>
                <select className="w-full px-5 py-3 rounded-xl bg-white/60 border border-birthday-text/10 text-birthday-text focus:outline-none focus:ring-2 focus:ring-birthday-pink/50 transition-all appearance-none">
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-4 mt-4 bg-birthday-bg text-birthday-dark rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Send RSVP
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
