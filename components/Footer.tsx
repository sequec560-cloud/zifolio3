
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-6 border-t border-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black">Z</div>
          <span className="text-xl font-black text-slate-900 tracking-tighter">ZIFOLIO</span>
        </div>
        
        <p className="text-slate-400 text-sm max-w-sm mb-10 font-medium">
          Educação financeira simples para começar certo em Angola. Conteúdo meramente educativo.
        </p>
        
        <div className="flex gap-8 mb-12">
          <a href="#" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">WhatsApp</a>
          <a href="#" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">Instagram</a>
        </div>
        
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
          ZIFOLIO &copy; {new Date().getFullYear()} • TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};
