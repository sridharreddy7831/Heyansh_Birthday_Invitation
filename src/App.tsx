import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
