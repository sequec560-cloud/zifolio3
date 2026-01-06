
import React from 'react';

export const Platforms: React.FC = () => {
  const platforms = [
    { name: "Binance", src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg", desc: "Comprar & Investir" },
    { name: "RedotPay", src: "https://www.redotpay.com/wp-content/uploads/2023/12/redotpay-logo.png", desc: "Pagamentos Digitais" },
    { name: "FaucetPay", src: "https://faucetpay.io/assets/img/logo.png", desc: "Ganhos Iniciais" }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-6 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-2">Plataformas Recomendadas</h3>
        <p className="text-slate-400 mb-16 text-sm">Testadas e usadas diariamente pela nossa equipa.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {platforms.map((p, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="h-12 flex items-center justify-center mb-6">
                <img src={p.src} alt={p.name} className="max-h-full w-auto grayscale invert brightness-0 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-500" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">{p.name}</span>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
