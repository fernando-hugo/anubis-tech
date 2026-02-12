"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, Terminal, ArrowRight, 
  Linkedin, Instagram, Github, Brain, Gauge, Cuboid, Mail, Code2
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- EFEITO MATRIX GLOBAL (EXTREMAMENTE TECNOLÓGICO) ---
const MatrixRain = () => (
  <div className="fixed inset-0 opacity-[0.18] pointer-events-none overflow-hidden font-mono text-[14px] select-none z-0">
    {Array.from({ length: 45 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -1200 }}
        animate={{ y: [0, 2400] }}
        transition={{ duration: Math.random() * 8 + 7, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500 font-bold whitespace-nowrap"
        style={{ left: `${i * 2.2}%`, writingMode: 'vertical-rl' }}
      >
        {Array.from({ length: 40 }).map(() => "0101101_ANUBIS_SYSTEM_ACTIVE_FLUX_DE_ELITE_").join(" ")}
      </motion.div>
    ))}
  </div>
);

const IntroSplash = () => (
  <motion.div 
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
  >
    <video autoPlay muted playsInline className="w-full h-full object-cover opacity-70">
      <source src="/intro.mp4" type="video/mp4" />
    </video>
  </motion.div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const WHATSAPP_LINK = "https://wa.me/5511962104871";
  const GITHUB_LINK = "https://github.com/fernando-hugo";
  const INSTA_LINK = "https://www.instagram.com/anubis.tec?igsh=MTZyajRydWdzZTdmNg==";

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="relative bg-[#010206] text-white selection:bg-amber-500/30 font-sans overflow-x-hidden">
      
      <AnimatePresence>{showIntro && <IntroSplash />}</AnimatePresence>
      <MatrixRain />

      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-amber-500 z-[110] origin-left shadow-[0_0_15px_rgba(245,158,11,1)]" style={{ scaleX }} />

      {/* NAVBAR AAA LEVEL */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-20 h-28 flex items-center justify-between backdrop-blur-2xl border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500 transition-all">
            <Activity className="text-amber-500 group-hover:text-black" size={28} />
          </div>
          <span className="text-2xl font-black tracking-[0.4em] uppercase italic">ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span></span>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="p-4 bg-white/5 rounded-full hover:bg-amber-500/20 border border-white/10 transition-all">
          <Menu size={24} className="text-amber-500" />
        </button>
      </nav>

      {/* HERO SECTION - O PORTAL */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 px-6 z-10 pb-20">
        <div className="max-w-[1400px] mx-auto text-center space-y-16">
          
          {/* LOGO MONUMENTAL 3X */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={!showIntro ? { opacity: 1, scale: 1, y: [0, -40, 0] } : {}}
            transition={{ duration: 1.5, delay: 0.5, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 bg-amber-500/20 blur-[180px] rounded-full animate-pulse scale-110" />
            <img 
              src="/logo-3d.png" 
              alt="Anubis Tech" 
              className="w-[700px] md:w-[1000px] lg:w-[1250px] h-auto drop-shadow-[0_0_120px_rgba(245,158,11,0.6)] relative z-10" 
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={!showIntro ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 1 }}>
            <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.8] mb-10 uppercase">
              <span className="text-white drop-shadow-2xl">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent italic">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-2xl md:text-3xl font-medium max-w-4xl mx-auto mb-16 italic leading-relaxed">
              "Transformamos nichos complexos em ecossistemas de alta performance. Sua visão, nossa engenharia."
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a href={WHATSAPP_LINK} target="_blank" className="px-16 py-8 bg-amber-500 text-black font-black uppercase text-sm tracking-[0.5em] hover:bg-white transition-all shadow-[0_0_50px_rgba(245,158,11,0.5)] rounded-none">Falar com Consultor</a>
              <a href={GITHUB_LINK} target="_blank" className="px-16 py-8 border-2 border-white/20 text-white font-black uppercase text-sm tracking-[0.5em] hover:bg-white/10 transition-all italic">Engineering Portfolio</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO PILARES COM CIRCUITOS VIVOS */}
      <section className="relative py-60 z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[400px]">
          
          <PillarCard 
            title="ORTHOFLOW" tagline="Inteligência Logística e Gestão de Fluxo Cirúrgico."
            desc="Muito além de um controle de estoque, o Orthoflow é o cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com base em habilidades reais e monitoramos o consumo cirúrgico em tempo real, garantindo que o cirurgião tenha exatamente o que precisa."
            keywords="Rastreabilidade Total • OPME • Otimização"
            icon={<Activity size={60} />} side="left" link={WHATSAPP_LINK}
          />

          <PillarCard 
            title="UNIFLOW" tagline="Inteligência Operacional Unificada."
            desc="O motor de eficiência para operações que exigem rastreabilidade milimétrica. Unifica o controle de unidades produzidas, a gestão de fornecedores externos e o comissionamento de equipes em uma interface única e inquebrável."
            keywords="Backoffice • Automação de Processos • Dados"
            icon={<Cuboid size={60} />} side="right" link={WHATSAPP_LINK}
          />

          <PillarCard 
            title="PSYCHFLOW" tagline="IA em Pré-Atendimento Humanizado."
            desc="A porta de entrada inteligente para a saúde mental. Utiliza IA de ponta para realizar o acolhimento inicial, filtrando necessidades e conectando o paciente ao profissional ideal de forma humanizada e eficiente."
            keywords="Triagem Humanizada • Conexão Assertiva • AI"
            icon={<Brain size={60} />} side="left" link={WHATSAPP_LINK}
          />

          <PillarCard 
            title="CONTROLFLOW" tagline="Gestão de POS e Lucratividade Real."
            desc="Simplifica a gestão de ordens de serviço, automatiza o cálculo de margem líquida e entrega o lucro real (Net Profit) instantaneamente. Transformamos dados de balcão em decisões estratégicas de alto nível."
            keywords="Ticket Médio • Lucro Real (Bottom Line) • Cash Flow"
            icon={<Gauge size={60} />} side="right" link={WHATSAPP_LINK}
          />

        </div>
      </section>

      {/* FOOTER ANUBIS TECH AAA */}
      <footer className="py-32 bg-black border-t-2 border-amber-500/30 px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-20">
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-6xl font-black italic tracking-[0.2em] text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">ANUBIS TECH</h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.5em] italic">CNPJ: 42.804.763/0001-35</p>
            <p className="text-slate-500 text-xs uppercase tracking-widest leading-loose">The Pinnacle of Software Engineering <br /> São Paulo • Brasil</p>
          </div>
          <div className="flex justify-center md:justify-end gap-12">
            <SocialIcon icon={<Instagram size={32} />} name="Instagram" link={INSTA_LINK} />
            <SocialIcon icon={<Github size={32} />} name="Github" link={GITHUB_LINK} />
            <SocialIcon icon={<Linkedin size={32} />} name="Linkedin" link="#" />
          </div>
        </div>
      </footer>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>{isMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/98 z-[300] flex flex-col items-center justify-center p-8 backdrop-blur-3xl">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-amber-500 hover:rotate-90 transition-transform"><X size={70} strokeWidth={1} /></button>
          <div className="flex flex-col gap-12 text-center font-black italic text-7xl uppercase text-white tracking-tighter">
            {['Home', 'Soluções', 'Área VIP', 'Contato'].map(item => (
              <button key={item} onClick={() => { if(item==='Contato') window.location.href=WHATSAPP_LINK; setIsMenuOpen(false); }} className="hover:text-amber-500 transition-all">{item}</button>
            ))}
          </div>
        </motion.div>
      )}</AnimatePresence>
    </main>
  );
}

// --- SUB-COMPONENTES DE ELITE ---

function PillarCard({ title, tagline, desc, keywords, icon, side, link }: any) {
  const isLeft = side === "left";
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -150 : 150 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true, margin: "-100px" }} 
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 relative`}
    >
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-10`}>
        <div className={`flex items-center gap-8 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-8 bg-amber-500 text-black rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.3)]">{icon}</div>
          <h3 className="text-7xl md:text-[6rem] font-black italic tracking-tighter text-white uppercase leading-none">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-lg tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-3xl italic leading-relaxed font-light">"{desc}"</p>
        <p className="text-xs font-black uppercase tracking-[0.6em] text-amber-500/50">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.5em] text-white hover:text-amber-500 transition-all border-b-2 border-amber-500/20 pb-4">Engenharia de Solução <ArrowRight size={20}/></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="w-[500px] h-[500px] border-2 border-white/10 bg-white/[0.03] rounded-[5rem] flex items-center justify-center backdrop-blur-3xl shadow-[0_0_120px_rgba(245,158,11,0.15)] group hover:border-amber-500/50 transition-all duration-700">
          <div className="opacity-10 group-hover:opacity-60 transition-all scale-[6] rotate-12 group-hover:rotate-0 text-amber-500">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ icon, name, link }: any) {
  return (
    <a href={link} target="_blank" className="flex flex-col items-center gap-4 group">
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all text-slate-400 group-hover:text-amber-500">
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 group-hover:text-amber-500">{name}</span>
    </a>
  );
}