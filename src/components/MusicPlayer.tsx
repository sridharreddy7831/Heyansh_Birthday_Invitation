import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element pointing to the local 1.mp3 in the public folder
    const audio = new Audio('/1.mp3');
    audio.loop = true;
    audio.volume = 0; // Start at volume 0 for smooth premium fade-in
    audioRef.current = audio;

    // Premium Fade-in function
    const fadeInVolume = () => {
      const fadeDuration = 1200; // 1.2s smooth volume fade
      const targetVolume = 0.5;
      const intervalTime = 40; 
      const volumeStep = targetVolume / (fadeDuration / intervalTime);
      
      let currentVolume = 0;
      audio.volume = 0;

      const fadeInterval = setInterval(() => {
        currentVolume = Math.min(currentVolume + volumeStep, targetVolume);
        audio.volume = currentVolume;
        if (currentVolume >= targetVolume) {
          clearInterval(fadeInterval);
        }
      }, intervalTime);
      return fadeInterval;
    };

    let fadeInterval: ReturnType<typeof setInterval>;

    // Immediate playback on mount (guaranteed to succeed since user clicked "Open Invitation" to enter!)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          fadeInterval = fadeInVolume();
        })
        .catch(error => {
          console.log("Autoplay blocked by browser. Setting fallback interaction listeners.", error);
          
          // Robust Fallback: Trigger play + fade-in on first user tap/click anywhere on the screen
          const playOnInteraction = () => {
            if (audio.paused) {
              audio.play()
                .then(() => {
                  setIsPlaying(true);
                  fadeInterval = fadeInVolume();
                })
                .catch(err => console.log("Failed to play on user interaction:", err));
            }
            
            // Clean up interaction listeners immediately
            window.removeEventListener('click', playOnInteraction);
            window.removeEventListener('touchstart', playOnInteraction);
          };
          
          window.addEventListener('click', playOnInteraction);
          window.addEventListener('touchstart', playOnInteraction);
        });
    }

    // Standard absolute cleanup to prevent phantom playing audios!
    return () => {
      if (fadeInterval) clearInterval(fadeInterval);
      if (audio) {
        audio.pause();
        audio.src = ""; // Crucial fix: empty source to force browser to kill player instance
        audio.load();   // Reload clean empty state
      }
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Ensure volume is set back to 0.5 when manually toggling play
        audioRef.current.volume = 0.5;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => console.error("Audio playback prevented:", error));
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }} // Lowered delay for quick appearance
    >
      <div className={`text-xs font-semibold uppercase tracking-widest text-[#ad2b59] transition-all duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 translate-x-4'}`}>
        Music {isPlaying ? 'On' : 'Off'}
      </div>
      
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 border ${
          isPlaying 
            ? 'bg-[#db2777]/20 border-[#db2777] text-[#db2777]' 
            : 'bg-[#ad2b59]/10 border-[#ad2b59]/20 text-[#ad2b59]/70 hover:bg-[#ad2b59]/20'
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        {isPlaying ? (
          <Volume2 size={20} className="animate-pulse" />
        ) : (
          <VolumeX size={20} />
        )}
        
        {/* Animated rings when playing */}
        {isPlaying && (
          <>
            <span className="absolute w-full h-full rounded-full border border-[#db2777]/50 animate-ping opacity-75"></span>
            <span className="absolute w-[150%] h-[150%] rounded-full border border-[#db2777]/30 animate-ping opacity-50" style={{ animationDuration: '1.5s' }}></span>
          </>
        )}
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
