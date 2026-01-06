
import React from 'react';

export const Solution: React.FC = () => {
  const learningItems = [
    { title: "Básicos", desc: "Aprende a organizar as tuas contas e poupar.", icon: "📈" },
    { title: "Cripto", desc: "Entra no mundo digital com segurança.", icon: "₿" },
    { title: "Ganhos", desc: "Descobre formas de ganhar em dólar.", icon: "💵" },
    { title: "Cartões", desc: "Como ter o teu VISA RedotPay ativo.", icon: "💳" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 soft-shadow flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              O que é o <span className="text-blue-600">Zifolio?</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Não somos uma plataforma de investimento. Somos a tua bússola. Ensinamos-te a usar as ferramentas certas que funcionam em Angola para que não sejas enganado.
            </p>
            <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
               <span className="text-2xl">🛡️</span>
               <p className="text-emerald-800 font-bold text-sm">Foco 100% em Segurança e Educação Real.</p>
            </div>
          </div>
          
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {learningItems.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 bento-card flex items-center gap-5">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
