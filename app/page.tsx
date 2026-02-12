"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Activity, ArrowRight, Instagram, Github, 
  Brain, Gauge, Cuboid, Mail, Cpu, ShieldCheck, Send, Linkedin
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// --- ANIMAÇÃO DE FLUXO HORIZONTAL (DATA STREAM) ---
const HorizontalStreamText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      transition={{ duration: 2, ease: [0.45, 0.05, 0.55, 0.95] }}
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

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
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', idea: '' });

  const WHATSAPP_NUMBER = "5511962104871";
  const GITHUB_LINK = "https://github.com/fernando-hugo";
  const INSTA_LINK = "https://www.instagram.com/anubis.tec?igsh=MTZyajRydWdzZTdmNg==";

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 6500);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Fernando, meu nome é ${formData.name}. Tenho um projeto para o nicho/ideia: ${formData.idea}. Meu contato é ${formData.phone}. Vamos conversar?`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setIsProjectModalOpen(false);
  };

  return (
    <main className="relative bg-[#010206] text-white font-sans overflow-x-hidden">
      
      <AnimatePresence>{showIntro && (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-black flex items-center justify-center">
          <video autoPlay muted playsInline className="w-full h-full object-cover opacity-70">
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}</AnimatePresence>

      <MatrixRain />

      {/* NAVBAR AAA */}
      <nav className="fixed top-0 w-full z-[100] px-8 md:px-20 h-24 flex items-center justify-between backdrop-blur-2xl border-b border-white/10 bg-black/60">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Activity className="text-amber-500" size={28} />
          <span className="text-2xl font-black tracking-[0.4em] uppercase italic">ANUBIS<span className="text-amber-500 font-light ml-1">TECH</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-black uppercase text-[9px] tracking-[0.3em] italic">
          <button onClick={() => setIsAboutOpen(true)} className="hover:text-amber-500 transition-all">Sobre Nós</button>
          <button onClick={() => setIsProjectModalOpen(true)} className="bg-white/5 border border-white/10 px-5 py-3 hover:bg-amber-500 hover:text-black transition-all">Desenvolver Projeto Customizado</button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="bg-amber-500 text-black px-6 py-3 shadow-[0_0_20px_rgba(245,158,11,0.3)]">Fale Conosco</a>
        </div>

        <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-4"><Menu size={24} className="text-amber-500" /></button>
      </nav>

      {/* HERO SECTION - GRID ORIGINAL RESTAURADO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={!showIntro ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1 }} className="text-left space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] italic">Engineering de Elite</span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
              <span className="text-white drop-shadow-2xl">Dominando o</span> <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 bg-clip-text text-transparent">Fluxo Digital.</span>
            </h1>
            <p className="text-slate-400 text-xl md:text-2xl max-w-xl italic leading-relaxed">"Transformamos nichos complexos em ecossistemas de alta performance. Sua visão, nossa engenharia."</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={!showIntro ? { opacity: 1, scale: 1, y: [0, -30, 0] } : {}} transition={{ duration: 1.5, delay: 0.5, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }} className="flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-amber-500/10 blur-[150px] rounded-full animate-pulse scale-125" />
            <img src="/logo-3d.png" alt="Anubis Tech" className="w-full max-w-[850px] xl:max-w-[1100px] h-auto drop-shadow-[0_0_150px_rgba(245,158,11,0.5)] relative z-10" />
          </motion.div>
        </div>
      </section>

      {/* OS 4 PILARES - FULL TEXTS */}
      <section className="relative py-60 z-10 bg-black/50 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 space-y-[400px]">
          <PillarCard 
            title="ORTHOFLOW" tagline="Precisão cirúrgica e eficiência logística." 
            desc="Muito além de um controle de estoque, o Orthoflow é o cérebro da distribuição de instrumentais e implantes ortopédicos. Automatizamos a escala técnica com base em habilidades reais e monitoramos o consumo cirúrgico em tempo real, eliminando desperdícios e garantindo que o cirurgião tenha exatamente o que precisa, quando precisa." 
            keywords="Rastreabilidade Total • Otimização de Escala • Visibilidade OPME" 
            icon={<Activity size={60} />} side="left" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />
          <PillarCard 
            title="UNIFLOW" tagline="Complexidade operacional sob controle absoluto." 
            desc="O Uniflow é o motor de eficiência para operações que exigem rastreabilidade milimétrica. Uma solução universal que unifica o controle de unidades produzidas, a gestão de fornecedores externos e o comissionamento de equipes em uma interface única. Do lançamento de notas fiscais aos relatórios estratégicos, ele elimina gargalos." 
            keywords="Rastreabilidade Unificada • Automação de Backoffice" 
            icon={<Cuboid size={60} />} side="right" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />
          <PillarCard 
            title="PSYCHFLOW" tagline="Saúde mental conectada por tecnologia humanizada." 
            desc="A porta de entrada inteligente para a saúde mental. O Psychflow utiliza IA de ponta para realizar o acolhimento inicial, filtrando necessidades e conectando o paciente ao profissional ideal de forma humanizada. Reduzimos a barreira do primeiro contato e otimizamos o tempo do especialista." 
            keywords="Triagem Humanizada • Conexão Assertiva • Agendamento AI" 
            icon={<Brain size={60} />} side="left" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />
          <PillarCard 
            title="CONTROLFLOW" tagline="Domínio total sobre o seu fluxo de caixa." 
            desc="Projetado para negócios de alto fluxo que exigem agilidade financeira. O ControlFlow simplifica a gestão de ordens de serviço, automatiza o cálculo de margem líquida e entrega o lucro real (Net Profit) instantaneamente. Transforma dados de atendimento em decisões estratégicas." 
            keywords="Gestão POS • Ticket Médio • Rentabilidade Real" 
            icon={<Gauge size={60} />} side="right" link={`https://wa.me/${WHATSAPP_NUMBER}`} 
          />
        </div>
      </section>

      {/* RODAPÉ SLIM (2.5CM) */}
      <footer className="h-28 flex items-center bg-black border-t-2 border-amber-500/30 px-8 relative z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] italic text-slate-500">
          <div className="flex gap-4 items-center">
            <span className="text-amber-500">ANUBIS TECH © 2026</span>
            <span className="w-px h-3 bg-white/10"></span>
            <span>CNPJ: 42.804.763/0001-35</span>
          </div>
          <div className="flex gap-10">
            <a href={INSTA_LINK} target="_blank" className="hover:text-amber-500 transition-all flex items-center gap-2"><Instagram size={12}/> Instagram</a>
            <a href={GITHUB_LINK} target="_blank" className="hover:text-amber-500 transition-all flex items-center gap-2"><Github size={12}/> Github</a>
          </div>
        </div>
      </footer>

      {/* MODAL SOBRE NÓS (STREAM HORIZONTAL) */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/85">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#05060a] border border-amber-500/40 p-12 max-w-4xl relative overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.2)]">
              <button onClick={() => setIsAboutOpen(false)} className="absolute top-6 right-6 text-amber-500/50 hover:text-amber-500"><X size={30} /></button>
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-amber-500"><Cpu size={24} className="animate-pulse"/><span className="font-mono text-[10px] tracking-[0.5em]">AUTH_SYSTEM_IDENTITY</span></div>
                <h3 className="text-5xl font-black italic uppercase text-white">Nossa História</h3>
                <p className="text-2xl text-slate-300 italic leading-relaxed font-light">
                  <HorizontalStreamText text={`"A Anubis Tech não nasceu para ser apenas mais uma empresa de software. Sob a visão estratégica de Fernando H. Ferreira, unimos décadas de expertise técnica, tecnologias avançadas de IA com uma obsessão por soberania operacional. Não entregamos apenas linhas de código; entregamos a arquitetura que sustenta nichos de alta complexidade onde outros falham."`} />
                </p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <ShieldCheck size={24} className="text-amber-500/30" />
                  <span className="text-[9px] font-black uppercase text-slate-600 tracking-[0.4em]">Soberania Operacional Garantida</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL BRIEFING CUSTOMIZADO */}
      <AnimatePresence>
        {isProjectModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[500] flex items-center justify-center p-6 backdrop-blur-3xl bg-black/90">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-[#05060a] border border-amber-500/40 p-10 w-full max-w-lg shadow-[0_0_80px_rgba(245,158,11,0.1)]">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter">Consultoria de Projeto</h3>
                <button onClick={() => setIsProjectModalOpen(false)} className="text-amber-500 hover:rotate-90 transition-all"><X size={30} /></button>
              </div>
              <form onSubmit={handleProjectSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Seu Nome</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white italic" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">WhatsApp de Contato</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white italic" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Descreva seu Nicho / Ideia</label>
                  <textarea required className="w-full bg-white/5 border border-white/10 p-4 h-32 focus:border-amber-500 outline-none transition-all text-white italic resize-none" onChange={(e) => setFormData({...formData, idea: e.target.value})} />
                </div>
                <button type="submit" className="w-full bg-amber-500 text-black font-black uppercase py-5 flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  Solicitar Análise de Viabilidade <Send size={18}/>
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

function PillarCard({ title, tagline, desc, keywords, icon, side, link }: any) {
  const isLeft = side === "left";
  return (
    <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2 }} className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24 relative`}>
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'} space-y-10`}>
        <div className={`flex items-center gap-8 ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <div className="p-8 bg-amber-500 text-black rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.2)]">{icon}</div>
          <h3 className="text-7xl md:text-[6rem] font-black italic tracking-tighter text-white uppercase leading-none">{title}</h3>
        </div>
        <p className="text-amber-500 font-black text-lg tracking-[0.4em] uppercase">{tagline}</p>
        <p className="text-slate-400 text-3xl italic leading-relaxed font-light">"{desc}"</p>
        <p className="text-xs font-black uppercase tracking-[0.6em] text-amber-500/50">{keywords}</p>
        <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
          <a href={link} target="_blank" className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.5em] text-white hover:text-amber-500 transition-all border-b-2 border-amber-500/20 pb-4">Engenharia de Solução <ArrowRight size={20}/></a>
        </div>
      </div>
      <div className="flex-1 flex justify-center relative group">
        <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full animate-pulse group-hover:bg-amber-500/10 transition-all" />
        <div className="w-[500px] h-[500px] border-2 border-white/10 bg-white/[0.03] rounded-[5rem] flex items-center justify-center backdrop-blur-3xl shadow-[0_0_120px_rgba(245,158,11,0.15)] group-hover:border-amber-500/50 transition-all duration-700">
          <div className="opacity-10 group-hover:opacity-60 transition-all scale-[6] rotate-12 group-hover:rotate-0 text-amber-500">{icon}</div>
        </div>
      </div>
    </motion.div>
  );
} 