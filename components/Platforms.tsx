
import React from 'react';

export const Platforms: React.FC = () => {
  const platforms = [
    { name: "Binance", src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg", desc: "Comprar, guardar e investir" },
    { name: "RedotPay", src: "https://www.redotpay.com/wp-content/uploads/2023/12/redotpay-logo.png", desc: "Pagamentos digitais" },
    { name: "FaucetPay", src: "https://faucetpay.io/assets/img/logo.png", desc: "Ganhos iniciais" }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-6 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-4">Plataformas Recomendadas</h3>
        <p className="text-slate-400 mb-16 text-lg">Usamos e recomendamos estas ferramentas. Ajudamos-te a configurar tudo.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          {platforms.map((p, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="h-12 flex items-center justify-center mb-6">
                <img src={p.src} alt={p.name} className="max-h-full w-auto grayscale invert brightness-0 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-500" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">{p.name}</span>
              <p className="text-slate-400 text-sm font-medium">{p.desc}</p>
            </div>
          ))}
        </div>

        <a 
          href="https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S"
          className="inline-block px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black text-lg hover:bg-blue-50 transition-all shadow-xl"
        >
          VER PLATAFORMAS NO WHATSAPP
        </a>
      </div>
    </section>
  );
};
