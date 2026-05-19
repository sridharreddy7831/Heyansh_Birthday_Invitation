import React from 'react';
import { FaWhatsapp, FaInstagram, FaGlobe } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 border-t-2 border-[#e1ba72]/30 relative z-10 bg-gradient-to-b from-[#fcf5e3]/95 to-[#fbf1d5]/98 backdrop-blur-md shadow-[0_-10px_35px_rgba(225,186,114,0.15)] select-none">
      
      {/* Decorative stars */}
      <div className="absolute top-2 left-6 text-sm opacity-35 animate-pulse-slow">✨</div>
      <div className="absolute bottom-2 right-6 text-sm opacity-35 animate-pulse-slow">✨</div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Logo & Brand beside it */}
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#e1ba72]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/uthsav-logo.webp" 
              alt="Uthsav Invites Logo" 
              className="h-12 md:h-14 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)] pointer-events-none transition-all duration-500 group-hover:scale-110 relative z-10"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-[#ad2b59]/60 uppercase">
              Designed &amp; Crafted By
            </span>
            <span className="font-display text-xs md:text-sm font-black tracking-widest bg-gradient-to-r from-[#ad2b59] to-[#d6417a] bg-clip-text text-transparent uppercase mt-0.5">
              Uthsav Invites
            </span>
          </div>
        </div>

        {/* Divider/Partition Line (Desktop only) */}
        <div className="hidden md:block w-px h-8 bg-[#e1ba72]/30 mx-2"></div>

        {/* Middle Section: Creator Credit */}
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-[#0d7c88]/70 uppercase">
              Masterpiece Crafted By
            </span>
            <span className="font-handwriting text-2xl md:text-3xl font-extrabold text-[#ad2b59] hover:text-[#e1ba72] transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] cursor-pointer mt-0.5">
              Sridhar Reddy Nalipi
            </span>
          </div>
        </div>

        {/* Right Section: Social & Website Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=917386376302&text=I+like+that+design...&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#ad2b59]/20 bg-white/40 shadow-sm flex items-center justify-center text-[#ad2b59]/70 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 hover:shadow-md transition-all duration-300 hover:scale-110"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp size={16} />
          </a>
          <a 
            href="https://www.instagram.com/uthsav_invites/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#ad2b59]/20 bg-white/40 shadow-sm flex items-center justify-center text-[#ad2b59]/70 hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10 hover:shadow-md transition-all duration-300 hover:scale-110"
            title="Follow on Instagram"
          >
            <FaInstagram size={16} />
          </a>
          <a 
            href="https://uthsavinvites.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-[#ad2b59]/20 bg-white/40 shadow-sm flex items-center justify-center text-[#ad2b59]/70 hover:text-[#e1ba72] hover:border-[#e1ba72] hover:bg-[#e1ba72]/10 hover:shadow-md transition-all duration-300 hover:scale-110"
            title="Visit our Website"
          >
            <FaGlobe size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
