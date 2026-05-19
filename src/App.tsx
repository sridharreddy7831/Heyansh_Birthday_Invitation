import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Smartphone, X } from 'lucide-react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Message from './components/Message';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    if (loading) return;

    // Initialize premium Lenis momentum smooth scrolling
    const lenis = new Lenis({
      duration: 1.4, // Silky smooth slow ease duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious exponential out easing
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onOpen={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!loading && showWarning && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
            className="hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 z-[99] w-full max-w-2xl px-6 py-4 bg-gradient-to-r from-[#fcf5e3]/95 via-[#fffdf9]/98 to-[#fcf5e3]/95 backdrop-blur-md border-b-2 border-x-2 border-[#e1ba72]/40 rounded-b-3xl shadow-[0_8px_30px_rgba(225,186,114,0.15)] items-center justify-between gap-4 border-t-0"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-full bg-[#ad2b59]/10 border border-[#ad2b59]/20 flex items-center justify-center shrink-0 text-[#ad2b59] animate-pulse">
                <Smartphone size={24} />
              </div>
              <div className="text-left">
                <h4 className="font-display font-black text-sm text-[#ad2b59] tracking-wider uppercase flex items-center gap-1">
                  ✨ Mobile-First Experience ✨
                </h4>
                <p className="text-xs font-semibold text-[#0d7c88]/80 mt-0.5 leading-relaxed">
                  For the most immersive animations, music, and interactive layouts, we kindly recommend viewing this invitation on a mobile device.
                </p>
              </div>
            </div>
            
            <button 
              onClick={() => setShowWarning(false)}
              className="w-8 h-8 rounded-full border border-[#ad2b59]/20 bg-white/40 shadow-sm flex items-center justify-center text-[#ad2b59]/60 hover:text-[#ad2b59] hover:border-[#ad2b59] transition-all duration-300 hover:scale-105 shrink-0 cursor-pointer"
              title="Dismiss warning"
            >
              <X size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!loading && (
        <main className="relative overflow-hidden min-h-screen">
          <MusicPlayer />
          
          <div className="relative z-10">
            <Hero />
            <Countdown />
            <Message />
            <Gallery />
            <EventDetails />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

export default App;
