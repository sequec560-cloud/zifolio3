
import React from 'react';

export const Platforms: React.FC = () => {
  const platforms = [
    { 
      name: "Binance", 
      src: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=040", 
      desc: "Comprar, guardar e investir",
      link: "https://www.binance.com/activity/referral-entry/CPA?ref=CPA_004HP7KLU9"
    },
    { 
      name: "RedotPay", 
      src: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/44/14/66/44146607-4e6f-7988-874e-6e27339890f5/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg", 
      desc: "Pagamentos digitais",
      link: "https://url.hk/i/pt/z68kp"
    },
    { 
      name: "FaucetPay", 
      src: "https://faucetpay.io/assets/img/icon.png", 
      desc: "Ganhos iniciais",
      link: "https://faucetpay.io/?r=3535317"
    }
  ];

  const whatsappLink = "https://chat.whatsapp.com/BVQl36gWjIoJj7xTtVkp5S";

  return (
    <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-6 overflow-hidden px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Ecosistema</span>
          <h3 className="text-3xl md:text-4xl font-black mb-4">Plataformas Recomendadas</h3>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Testadas e aprovadas por nós. São as ferramentas ideais para começares o teu percurso financeiro em Angola.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          {platforms.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group cursor-pointer">
              <div className="h-28 w-28 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-600/20 rounded-3xl blur-2xl transition-all duration-500 scale-150"></div>
                
                <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all duration-500 relative z-10 shadow-2xl">
                  <img 
                    src={p.src} 
                    alt={p.name} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${p.name}&background=1e293b&color=fff&bold=true`;
                    }}
                    className="max-h-[70%] max-w-[70%] object-contain transition-all duration-500 opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110" 
                  />
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                <span className="text-sm font-black uppercase tracking-widest text-slate-300 group-hover:text-white transition-colors block mb-2">
                  {p.name}
                </span>
                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-400 transition-colors">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Queres aprender a configurar?</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-900 rounded-[2.2rem] font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 group"
          >
            <svg className="w-6 h-6 text-emerald-500 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            AJUDA NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};
