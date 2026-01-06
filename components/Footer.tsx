
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t border-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-1 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black">Z</div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase">ZIFOLIO</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Um produto da Dibuco Brand</span>
        </div>
        
        <div className="space-y-4 mb-10">
          <p className="text-slate-900 font-bold text-lg">Educação financeira | Conteúdo educativo</p>
          <p className="text-slate-400 text-sm max-w-sm font-medium">
            Não somos instituição financeira. O nosso foco é partilhar conhecimento para o teu crescimento.
          </p>
        </div>
        
        <div className="flex gap-8 mb-12">
          <a href="https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">WhatsApp</a>
          <a href="#" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">Instagram</a>
        </div>
        
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
          ZIFOLIO &copy; {new Date().getFullYear()} • TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};
