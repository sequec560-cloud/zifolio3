
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black">Z</div>
          <span className="text-xl font-black text-slate-900 tracking-tighter">ZIFOLIO</span>
        </div>
        <a 
          href="https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S" 
          className="text-[10px] font-black text-white bg-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg shadow-slate-900/10"
        >
          WHATSAPP
        </a>
      </div>
    </nav>
  );
};
