"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Instagram, Github, ArrowRight, Globe } from "lucide-react";

/**
 * ANUBIS TECH - SOVEREIGN VERSION 3.0
 * VOCABULÁRIO TÉCNICO:
 * 1. Cursor Follower: Elemento que rastreia as coordenadas X e Y do mouse.
 * 2. Mix-blend-mode: Propriedade CSS que define como as cores do cursor interagem com o fundo.
 * 3. Corporate Footer Stack: Estrutura de links hierárquicos para conformidade legal.
 */

// --- COMPONENTES AUXILIARES ---

function SplineScene({ scene }: { scene: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const scriptId = "spline-viewer-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js";
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#010206] overflow-hidden pointer-events-none">
      {isLoaded && (
        <div className="w-full h-full translate-x-[25%] md:translate-x-[35%] opacity-80 pointer-events-auto">
          {/* @ts-ignore */}
          <spline-viewer 
            url={scene} 
            className="w-full h-full"
            events-target="global" 
            hint="false"
          ></spline-viewer>
        </div>
      )}
    </div>
  );
}

const PillarCard = ({ title, desc, onLearnMore }: { title: string, desc: string, onLearnMore: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-amber-500/50 transition-all duration-500 shadow-2xl h-full cursor-pointer"
    onClick={onLearnMore}
  >
    <div className="relative bg-[#05060a]/90 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <h3 className="text-2xl font-black italic text-white mb-4 tracking-tighter uppercase group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
          "{desc}"
        </p>
      </div>
      <button className="mt-auto w-full py-3 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center gap-2">
        Conhecer Sistema <ArrowRight size={14} />
      </button>
    </div>
  </motion.div>
);

// --- COMPONENTE PRINCIPAL ---

export default function AnubisTechV3() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedPillar, setSelectedPillar] = useState<any>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", whatsapp: "", idea: "" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const WHATSAPP = "5511962104871";

  // Efeito de Rastreamento do Mouse (Luz Dourada)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const pillars = [
    { id: "ortho", title: "OrthoFlow", desc: "Soberania na distribuição de instrumentais cirúrgicos.", full: "Logística de precisão para o setor de OPME com rastreabilidade total de implantes." },
    { id: "psych", title: "PsychFlow", desc: "Ecossistema digital para gestão de saúde mental.", full: "Plataforma de gestão clínica com algoritmos assertivos de fluxo paciente-especialista." },
    { id: "uni", title: "UniFlow", desc: "Unificação operacional para gestão industrial.", full: "Blindagem financeira e operacional através da unificação estratégica de fornecedores." },
    { id: "control", title: "ControlFlow", desc: "Domínio absoluto sobre o lucro real e performance.", full: "Dashboard de inteligência comercial de nível militar para controle de margem e lucro." },
    { id: "anubis", title: "AnúbisFlow Delivery", desc: "A solução definitiva em automação de delivery.", full: "Domínio total do nicho de alimentação com logística integrada e foco em conversão extrema." },
  ];

  const handleWhatsAppAction = (msg: string) => {
    window.location.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <main className="relative min-h-screen bg-[#010206] text-white overflow-x-hidden selection:bg-amber-500 selection:text-black">
      
      {/* GOLDEN CURSOR LIGHT */}
      <motion.div 
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none z-[1] mix-blend-screen"
        animate={{ x: mousePos.x - 200, y: mousePos.y - 200 }}
        transition={{ type: "spring", damping: 30, stiffness: 150 }}
      />

      <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="flex items-center gap-6">
          <img src="/logo-3d.png" alt="Anubis Logo" className="h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
          <span className="text-2xl md:text-4xl font-black italic uppercase tracking-[0.02em] bg-gradient-to-r from-amber-200 via-amber-500 to-amber-600 bg-clip-text text-transparent pb-1 pr-2">
            Anúbis Tech
          </span>
        </div>

        <div className="hidden lg:flex gap-10 text-[11px] font-black uppercase tracking-[0.3em]">
          <button onClick={() => setProjectOpen(true)} className="hover:text-amber-500 transition-colors italic">Crie Seu Projeto Personalizado</button>
          <button onClick={() => setAboutOpen(true)} className="hover:text-amber-500 transition-colors italic">Sobre Nós</button>
          <button onClick={() => handleWhatsAppAction("Olá Fernando, gostaria de iniciar um contato.")} className="hover:text-amber-500 transition-colors italic">Contato</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 pt-32">
        <div className="max-w-4xl space-y-10 relative z-10">
          <motion.h1 initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-7xl md:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter drop-shadow-2xl">
            Engenharia <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Soberana.</span>
          </motion.h1>
          <p className="mt-12 text-slate-400 text-xl md:text-4xl max-w-3xl font-light italic leading-relaxed border-l-2 border-amber-500/30 pl-8">
            "Desenhamos as infraestruturas que sustentam nichos de alta complexidade operativa."
          </p>
        </div>
      </section>

      {/* GRID (2,2,1) */}
      <section className="relative z-10 py-40 px-6 md:px-24 bg-gradient-to-b from-transparent via-[#010206] to-[#010206]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-amber-500 font-mono text-[10px] tracking-[1.2em] uppercase text-center mb-24">Sistemas_Base_Anúbis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {pillars.slice(0, 4).map((p) => (
              <PillarCard key={p.id} title={p.title} desc={p.desc} onLearnMore={() => setSelectedPillar(p)} />
            ))}
            <div className="md:col-span-2 flex justify-center">
              <div className="w-full md:w-1/2">
                <PillarCard title={pillars[4].title} desc={pillars[4].desc} onLearnMore={() => setSelectedPillar(pillars[4])} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO EXPANDIDO */}
      <footer className="relative z-50 bg-[#05060a]/90 backdrop-blur-2xl border-t border-white/5 pt-20 pb-10 px-6 md:px-24 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
               <img src="/logo-3d.png" className="h-16" />
               <span className="text-2xl font-black italic text-white uppercase tracking-tighter">Anúbis Tech</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs italic italic">Dominando o fluxo digital através de engenharia soberana e infraestrutura de alta performance.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-widest">Navegação</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <button onClick={() => setAboutOpen(true)} className="hover:text-white text-left transition-colors">Sobre Nós</button>
              <button onClick={() => setProjectOpen(true)} className="hover:text-white text-left transition-colors">Projetos</button>
              <a href="https://github.com/fernando-hugo" className="hover:text-white transition-colors">Github</a>
              <a href="https://www.instagram.com/anubis.tec/" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-amber-500 font-black text-xs uppercase tracking-widest">Legal</h4>
            <div className="flex flex-col gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <span className="hover:text-white cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-white cursor-pointer">Termos de Uso</span>
              <span className="hover:text-white cursor-pointer">Avisos Legais</span>
              <span className="flex items-center gap-2 text-white/50"><Globe size={12}/> Brasil / PT-BR</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono tracking-[0.5em] text-slate-600 uppercase">
             CNPJ: 42.804.763/0001-35 // ANUBIS TECH // SOVEREIGNTY_ACTIVE
          </div>
          <div className="flex gap-10">
             <a href="https://www.instagram.com/anubis.tec/" className="text-slate-400 hover:text-amber-500 transition-all"><Instagram size={18}/></a>
             <a href="https://github.com/fernando-hugo" className="text-slate-400 hover:text-amber-500 transition-all"><Github size={18}/></a>
          </div>
        </div>
      </footer>

      {/* MODAL DETALHE (CONTRATAR) */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/95">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#05060a] border border-amber-500/40 p-12 max-w-2xl relative shadow-2xl">
              <button onClick={() => setSelectedPillar(null)} className="absolute top-8 right-8 text-amber-500"><X /></button>
              <h3 className="text-5xl font-black italic uppercase text-amber-500 mb-8">{selectedPillar.title}</h3>
              <p className="text-slate-300 text-xl leading-relaxed mb-12 italic font-light italic italic italic italic">"{selectedPillar.full}"</p>
              <button onClick={() => handleWhatsAppAction(`Olá Fernando, quero contratar o sistema ${selectedPillar.title}`)} className="w-full bg-amber-500 text-black py-6 font-black uppercase tracking-[0.4em] hover:invert transition-all flex items-center justify-center gap-4">
                Contratar Sistema <Send size={18}/>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL PROJETO CUSTOM */}
      <AnimatePresence>
        {projectOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[600] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/95">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="bg-[#05060a] border border-amber-500/30 p-12 w-full max-w-2xl relative">
              <button onClick={() => setProjectOpen(false)} className="absolute top-8 right-8 text-amber-500"><X /></button>
              <h3 className="text-4xl font-black italic uppercase mb-10">Protocolo de Engenharia</h3>
              <form className="space-y-8" onSubmit={(e) => {
                e.preventDefault();
                handleWhatsAppAction(`🚀 NOVO PROJETO CUSTOM\nNome: ${form.name}\nWhatsApp: ${form.whatsapp}\nEscopo: ${selectedServices.join(", ")}\nConceito: ${form.idea}`);
              }}>
                <input required placeholder="Nome do Operador" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 italic text-lg" onChange={(e) => setForm({...form, name: e.target.value})} />
                <input required placeholder="WhatsApp" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-amber-500 italic text-lg" onChange={(e) => setForm({...form, whatsapp: e.target.value})} />
                <div className="grid grid-cols-2 gap-4">
                  {["Site", "LandingPage", "Sistemas", "Apps"].map(item => (
                    <button type="button" key={item} onClick={() => setSelectedServices(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])}
                      className={`py-4 text-[10px] font-black uppercase border tracking-widest transition-all ${selectedServices.includes(item) ? 'bg-amber-500 text-black border-amber-500' : 'border-white/10 text-white/40'}`}>
                      {item}
                    </button>
                  ))}
                </div>
                <textarea required placeholder="Descreva sua visão..." className="w-full bg-transparent border-b border-white/10 py-4 h-32 outline-none focus:border-amber-500 italic resize-none text-lg" onChange={(e) => setForm({...form, idea: e.target.value})} />
                <button type="submit" className="w-full bg-amber-500 text-black py-7 font-black uppercase tracking-[0.5em] hover:invert transition-all flex items-center justify-center gap-4">
                  Transmitir Dados <Send size={20}/>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </main>
  );
}