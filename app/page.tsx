"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, ArrowRight, 
  Instagram, Github, Brain, Gauge, Cuboid, Mail, Linkedin, ShieldCheck, Cpu
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- MATRIX RAIN GLOBAL ---
const MatrixRain = () => (
  <div className="fixed inset-0 opacity-[0.15] pointer-events-none overflow-hidden font-mono text-[14px] select-none z-0">
    {Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -1200 }}
        animate={{ y: [0, 2400] }}
        transition={{ duration: Math.random() * 8 + 5, repeat: Infinity, ease: "linear" }}
        className="absolute text-amber-500 font-bold whitespace-nowrap"
        style={{ left: `${i * 2}%`, writingMode: 'vertical-rl' }}
      >
        {Array.from({ length: 40 }).map(() => "0101101_ANUBIS_SYSTEM_ACTIVE_FLUX_").join(" ")}
      </motion.div>
    ))}
  </div>
);

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
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
      
      <AnimatePresence>{showIntro && (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black flex items-center justify-center">
          <video autoPlay muted playsInline className="w-full h-full object-cover opacity-70"><source src="/intro.mp4" type="video/mp4" /></video>
        </motion.div>
      )}</AnimatePresence>

      <MatrixRain />
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-amber-500 z-[110] origin-left shadow-[0_0_15px_rgba(245,158,11,1)]" style={{ scaleX }} />

      {/* NAVBAR SUPERIOR */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-20 h-24 flex items-center justify-between backdrop-blur-2xl border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Activity className="text-amber-500" size={28} />
          <span className="text-2xl font-black tracking-[0.4em] uppercase italic">ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span></span>
        </div>
        
        {/* LINKS MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-12 font-black uppercase text-[10px] tracking-[0.3em] italic">
          <button onClick={() => setIsAboutOpen(true)} className="hover:text-amber-500 transition-all border-b border-transparent hover:border-amber-500/50 pb-1">Sobre Nós</button>
          <a href={WHATSAPP_LINK} target="_blank" className="bg-amber-500 text-black px-6 py-3 hover:bg-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]">Fale Conosco</a>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-4 bg-white/5 rounded-full"><Menu size={24} className="text-amber-500" /></button>
      </nav>

      {/* HERO SECTION - GRID EQUILIBRADO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={!showIntro ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.5 }} className="text-left space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] italic">Engineering de Elite</span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
              <span className="text-white drop-shadow-2xl">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-xl italic leading-relaxed">"Transformamos nichos complexos em ecossistemas de alta performance."</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={!showIntro ? { opacity: 1, scale: 1, y: [0, -30, 0] } : {}} transition={{ duration: 1.5, delay: 0.5, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-amber-500/10 blur-[150px] rounded-full animate-pulse scale-125" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="w-full max-w-[850px] xl:max-w-[1100px] h-auto drop-shadow-[0_0_150px_rgba(245,158,11,0.5)] relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* PILARES */}
      <section className="relative py-60 z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[400px]">
          <PillarCard title="ORTHOFLOW" tagline="Precisão Cirúrgica." desc="Cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com monitoramento em tempo real." keywords="OPME • Rastreabilidade • IA" icon={<Activity size={60} />} side="left" link={WHATSAPP_LINK} />
          <PillarCard title="UNIFLOW" tagline="Controle Operacional Absoluto." desc="Motor de eficiência para operações que exigem rastreabilidade milimétrica e gestão de backoffice unificada." keywords="Backoffice • Gestão de Unidades" icon={<Cuboid size={60} />} side="right" link={WHATSAPP_LINK} />
          <PillarCard title="PSYCHFLOW" tagline="Saúde Mental Inteligente." desc="IA de ponta para triagem e acolhimento inicial, conectando o paciente ao profissional ideal de forma humanizada." keywords="Triagem IA • Acolhimento" icon={<Brain size={60} />} side="left" link={WHATSAPP_LINK} />
          <PillarCard title="CONTROLFLOW" tagline="Domínio de Lucratividade." desc="Gestão de POS e ordens de serviço com cálculo de lucro real (Net Profit) instantâneo para decisões estratégicas." keywords="Net Profit • Cash Flow" icon={<Gauge size={60} />} side="right" link={WHATSAPP_LINK} />
        </div>
      </section>

      {/* RODAPÉ MINIMALISTA (SLIM 2.5CM) */}
      <footer className="h-28 flex items-center bg-black border-t-2 border-amber-500/30 px-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-black italic text-amber-500 tracking-widest">ANUBIS TECH</h2>
            <span className="hidden md:block w-px h-4 bg-white/20"></span>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">CNPJ: 42.804.763/0001-35</p>
          </div>
          <div className="flex items-center gap-8">
            <a href={INSTA_LINK} target="_blank" className="text-slate-500 hover:text-amber-500 transition-all flex items-center gap-2 text-[9px] font-black uppercase"><Instagram size={16} /> Instagram</a>
            <a href={GITHUB_LINK} target="_blank" className="text-slate-500 hover:text-amber-500 transition-all flex items-center gap-2 text-[9px] font-black uppercase"><Github size={16} /> Github</a>
          </div>
        </div>
      </footer>

      {/* MODAL SOBRE NÓS (TECH REVEAL) */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/80">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#05060a] border border-amber-500/30 p-12 max-w-3xl relative overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 text-amber-500/50 hover:text-amber-500 transition-all"><X size={30} /></button>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4 text-amber-500">
                  <Cpu size={32} className="animate-pulse" />
                  <span className="font-mono text-[10px] tracking-[0.5em] uppercase">System_Identity_Authorized</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white">Nossa História</h3>
                <p className="text-xl md:text-2xl text-slate-300 italic leading-relaxed font-light">
                  "A <span className="text-amber-500 font-bold">Anubis Tech</span> não nasceu para ser apenas mais uma empresa de software. Sob a visão estratégica de <span className="text-white font-black underline decoration-amber-500/50">Fernando H. Ferreira</span>, unimos décadas de expertise técnica e tecnologias avançadas de IA com uma obsessão por soberania operacional. Não entregamos apenas linhas de código; entregamos a arquitetura que sustenta nichos de alta complexidade onde outros falham."
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="h-[1px] flex-1 bg-white/10 self-center"></div>
                  <ShieldCheck size={20} className="text-amber-500/40" />
                  <div className="h-[1px] flex-1 bg-white/10 self-center"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>{isMenuOpen && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed inset-0 bg-black/98 z-[300] flex flex-col items-center justify-center p-8 backdrop-blur-2xl">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 text-amber-500"><X size={60} /></button>
          <div className="flex flex-col gap-12 text-center font-black italic text-6xl uppercase text-white tracking-tighter">
            <button onClick={() => { setIsAboutOpen(true); setIsMenuOpen(false); }} className="hover:text-amber-500 transition-all">Sobre Nós</button>
            <a href={WHATSAPP_LINK} target="_blank" onClick={() => setIsMenuOpen(false)} className="hover:text-amber-500 transition-all">Contato</a>
          </div>
        </motion.div>
      )}</AnimatePresence>
    </main>
  );
}

function PillarCard({ title, tagline, desc, keywords, icon, side, link }: any) {
  const isLeft = side === "left";
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-150px" }} transition={{ duration: 1.2 }} className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 relative`}>
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-10`}>
        <div className={`flex items-center gap-8 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-8 bg-amber-500 text-black rounded-3xl">{icon}</div>
          <h3 className="text-7xl md:text-[6rem] font-black italic tracking-tighter text-white uppercase leading-none">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-lg tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-3xl italic leading-relaxed">"{desc}"</p>
        <p className="text-xs font-black uppercase tracking-[0.6em] text-amber-500/50">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.5em] text-white hover:text-amber-500 transition-all border-b-2 border-amber-500/20 pb-4">Engenharia de Solução <ArrowRight size={20}/></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative">
        <div className="w-[500px] h-[500px] border-2 border-white/10 bg-white/[0.03] rounded-[5rem] flex items-center justify-center backdrop-blur-3xl shadow-[0_0_100px_rgba(245,158,11,0.15)] group hover:border-amber-500/50 transition-all duration-700">
          <div className="opacity-10 group-hover:opacity-60 transition-all scale-[6] rotate-12 group-hover:rotate-0 text-amber-500">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
}   