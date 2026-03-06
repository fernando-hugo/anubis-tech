/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Github, X, ShieldCheck, Zap, Globe, Cpu, Database, Layout, Server, Smartphone, Terminal, Palette, BrainCircuit } from "lucide-react";
import { SplineScene } from "./components/SplineScene";
import AnubisPillarCarousel from "./components/AnubisPillarCarousel";
import AnubisMagicNav from "./components/AnubisMagicNav";
import AnubisChatBot from "./components/AnubisChatBot";

/**
 * ANUBIS SOVEREIGN CORE - V16.0 (BASE OFICIAL)
 * Fernando, este arquivo contém 100% das funções validadas:
 * 1. Assistente IA Anubis Tech (Botão Flutuante e Interface Inteligente). [cite: 2026-02-13]
 * 2. Tech Stack Interativa (Python, IA, Next.js, etc). [cite: 2026-02-13]
 * 3. Menu Mágico Superior (Home e Projetos com Smooth Scroll). [cite: 2026-02-13]
 * 4. Carrossel 3D de Pilares Estratégicos. [cite: 2026-02-13]
 * 5. Footer Glassmorphism com CNPJ e Redes Sociais. [cite: 2026-02-13]
 */

export default function AnubisPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const [formData, setFormData] = useState({ nome: "", whatsapp: "", servicos: [], ideia: "" });
  const techOptions = ["Site", "App", "Sistemas", "Landing Pages"];

  const techStack = [
    { name: "React / Next.js", icon: <Layout size={32} className="text-sky-400" />, desc: "Interfaces de alta performance com renderização híbrida para máxima velocidade e SEO." },
    { name: "Python", icon: <Terminal size={62} className="text-yellow-400" />, desc: "Linguagem core para automações complexas, processamento de dados e backend robusto." },
    { name: "IA & ML", icon: <BrainCircuit size={62} className="text-fuchsia-500" />, desc: "Implementação de inteligência artificial e modelos preditivos para soberania operativa." },
    { name: "Node.js", icon: <Server size={62} className="text-green-500" />, desc: "Arquitetura escalável em tempo real para sistemas que exigem baixa latência." },
    { name: "PostgreSQL", icon: <Database size={62} className="text-indigo-400" />, desc: "Modelagem de bancos de dados resilientes e preparados para grande volume de tráfego." },
    { name: "TypeScript", icon: <Terminal size={62} className="text-blue-500" />, desc: "Segurança de tipo estático para garantir um código limpo e escalável." },
  ];

  const CNPJ = "42.804.763/0001-35";
  const INSTAGRAM_URL = "https://www.instagram.com/anubis.tec/";
  const GITHUB_URL = "https://github.com/fernando-hugo";
  const WHATSAPP_NUMBER = "5511962104871";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleService = (serv) => {
    setFormData(prev => ({
      ...prev,
      servicos: prev.servicos.includes(serv) ? prev.servicos.filter(s => s !== serv) : [...prev.servicos, serv]
    }));
  };

  const handleSendProject = () => {
    const msg = `SOLICITAÇÃO DE PROJETO SOBERANO\n\nNome: ${formData.nome}\nWhatsapp: ${formData.whatsapp}\nTecnologias: ${formData.servicos.join(", ")}\n\nIdeia: ${formData.ideia}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="relative min-h-screen bg-[#010206] text-white overflow-x-hidden">
      
      {/* 1. LAYER: SPLINE (FUNDO 3D) */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
      </div>

      {/* 2. LAYER: COMMAND CENTER (MENU SUPERIOR) */}
      <header className="fixed top-10 right-10 z-[100] pointer-events-auto">
        <AnubisMagicNav 
          onOpenAbout={() => setShowAbout(true)} 
          onOpenProject={() => setShowProject(true)} 
          onOpenTech={() => setShowTech(true)}
          onWhatsApp={(msg) => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`)} 
        />
      </header>

      {/* 3. LAYER: HERO CONTENT */}
      <section className="relative min-h-screen flex items-center px-6 md:px-24 z-10 pointer-events-none">
        <div className="max-w-xl pointer-events-auto">
          <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-4xl md:text-[5.5rem] font-black italic leading-[0.8] uppercase tracking-tighter">
            Engenharia <br />
            <span className="bg-gradient-to-r from-amber-100 via-amber-500 to-amber-900 bg-clip-text text-transparent italic">Soberana.</span>
          </motion.h1>
          <p className="mt-8 text-slate-400 text-sm md:text-lg font-light italic border-l-4 border-amber-600 pl-6">Construímos o futuro sob demanda. </p>
        </div>
      </section>

      {/* 4. LAYER: ANUBIS LABS (CARROSSEL) */}
      <section id="sistemas" className="relative z-20 py-32 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-8x1 font-black italic uppercase tracking-tighter mb-4">ANUBIS <span className="text-amber-500">LABS</span></h2>
             <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
             <p className="text-slate-500 font-mono text-[16px] tracking-[0.8em] uppercase">High Performance Software Architectures</p>
          </div>
          <AnubisPillarCarousel />
        </div>
      </section>

      {/* 5. LAYER: FOOTER GLASS */}
      <footer className="relative z-[50] mt-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <img src="/logo-3d.png" className="h-12 w-auto" alt="Anubis Tech" />
                <span className="text-2xl font-black italic uppercase tracking-tighter text-white">Anúbis Tech</span>
              </div>
              <p className="text-white font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">CNPJ: {CNPJ} // SOVEREIGNTY_ACTIVE</p>
            </div>
            <div className="flex gap-8">
              <a href={INSTAGRAM_URL} target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:text-amber-500 transition-all hover:-translate-y-2"><Instagram size={28} /></a>
              <a href={GITHUB_URL} target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white hover:text-amber-500 transition-all hover:-translate-y-2"><Github size={28} /></a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white font-mono text-[8px] uppercase tracking-widest mb-2 opacity-60">Designed by Anubis Labs</p>
              <p className="text-white font-black italic text-xs uppercase">© 2026 Fernando H. Ferreira. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* 6. LAYER: MODAL SYSTEM */}
      <AnimatePresence>
        {/* MODAL: TECH STACK */}
        {showTech && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6">
            <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative w-full max-w-3xl border-2 border-amber-500/30 p-12 bg-[#020308] rounded-[3rem] shadow-2xl">
               <button onClick={() => {setShowTech(false); setSelectedTech(null);}} className="absolute top-8 right-8 text-amber-500 hover:scale-110 transition-transform"><X size={32}/></button>
               <div className="text-center mb-10">
                 <h2 className="text-4xl font-black italic text-white uppercase mb-2 tracking-tighter">ANUBIS <span className="text-amber-500"> STACK</span></h2>
                 <p className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Tecnologias de Domínio Soberano </p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {techStack.map((t, idx) => (
                    <button key={idx} onClick={() => setSelectedTech(t)} className={`p-6 border rounded-2xl flex flex-col items-center gap-4 transition-all group ${selectedTech?.name === t.name ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]' : 'bg-white/5 border-white/10 hover:border-amber-500/50'}`}>
                       <div className="p-4 bg-black rounded-full group-hover:scale-110 transition-transform">{t.icon}</div>
                       <span className="font-black text-[10px] uppercase tracking-tighter text-slate-300">{t.name}</span>
                    </button>
                  ))}
               </div>
               {selectedTech && (
                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 p-6 border-l-4 border-amber-500 bg-white/5 rounded-r-2xl">
                   <h4 className="text-amber-500 font-black uppercase text-xs mb-2 tracking-widest">{selectedTech.name} // DOMAIN_ACTIVE</h4>
                   <p className="text-slate-300 italic text-sm leading-relaxed">{selectedTech.desc} </p>
                 </motion.div>
               )}
            </motion.div>
          </motion.div>
        )}

        {/* MODAL: SOBRE NÓS */}
        {showAbout && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-6">
            <motion.div initial={{ y: 100, scale: 0.9 }} animate={{ y: 0, scale: 1 }} className="relative w-full max-w-4xl border-2 border-amber-500/20 p-16 bg-[#030408] rounded-[4rem] shadow-2xl overflow-y-auto max-h-[90vh]">
               <button onClick={() => setShowAbout(false)} className="absolute top-10 right-10 text-amber-500 hover:scale-125 transition-transform"><X size={40}/></button>
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                     <h2 className="text-5xl font-black italic text-white uppercase leading-none tracking-tighter">ANUBIS TECH<br/><span className="text-amber-500 text-3xl italic font-light tracking-widest uppercase">Legacy of Power</span></h2>
                     <div className="space-y-6 text-slate-400 text-lg leading-relaxed italic">
                        <p>Nascida da visão disruptiva de <span className="text-white font-black">Fernando H. Ferreira</span>, a Anúbis Tech foi forjada para ser a autoridade suprema em soluções digitais complexas.</p>
                        <p>Somos uma célula de engenharia de elite dedicada a sanar as dores estruturais de empresas que buscam soberania operativa.</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                     <div className="p-6 bg-white/5 border border-white/10 rounded-3xl"><Cpu className="mx-auto text-amber-500 mb-4" size={32}/><h4 className="text-[10px] font-black uppercase tracking-widest">IA_Core</h4></div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-3xl"><ShieldCheck className="mx-auto text-amber-500 mb-4" size={32}/><h4 className="text-[10px] font-black uppercase tracking-widest">Secure_Code</h4></div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-3xl"><Zap className="mx-auto text-amber-500 mb-4" size={32}/><h4 className="text-[10px] font-black uppercase tracking-widest">Max_Speed</h4></div>
                     <div className="p-6 bg-white/5 border border-white/10 rounded-3xl"><Globe className="mx-auto text-amber-500 mb-4" size={32}/><h4 className="text-[10px] font-black uppercase tracking-widest">Global_Scale</h4></div>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}

        {/* MODAL: PROJETO PERSONALIZADO */}
        {showProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-3xl p-4">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-full max-w-2xl border-2 border-amber-500/40 p-18 bg-[#05060a] rounded-[3.5rem] shadow-2xl">
               <button onClick={() => setShowProject(false)} className="absolute top-10 right-10 text-slate-500 hover:text-white transition-colors"><X size={32}/></button>
               <h2 className="text-3xl md:text-4xl font-black italic text-amber-500 uppercase mb-2 tracking-tighter">Projeto Personalizado </h2>
               <div className="space-y-10 mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="SEU NOME" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white font-black placeholder:text-slate-700" onChange={(e) => setFormData({...formData, nome: e.target.value})}/>
                    <input type="text" placeholder="NOME DA EMPRESA" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white font-black placeholder:text-slate-700" onChange={(e) => setFormData({...formData, nome: e.target.value})}/>
                    <input type="text" placeholder="NICHO" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white font-black placeholder:text-slate-700" onChange={(e) => setFormData({...formData, nome: e.target.value})}/>
                    <input type="text" placeholder="WHATSAPP" className="w-full bg-white/5 border-b-2 border-white/10 p-4 focus:border-amber-500 outline-none transition-all text-white font-black placeholder:text-slate-700" onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}/>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                      {techOptions.map(opt => (
                        <button key={opt} onClick={() => toggleService(opt)} className={`px-6 py-4 rounded-xl font-black uppercase text-[12px] tracking-widest transition-all border-2 ${formData.servicos.includes(opt) ? 'bg-amber-500 text-black border-amber-500' : 'bg-transparent text-slate-600 border-white/10 hover:border-amber-500'}`}>{opt}</button>
                      ))}
                  </div>
                  <textarea placeholder="DESCREVA SUA IDEIA " rows="4" className="w-full bg-white/5 border-2 border-white/10 p-6 rounded-3xl focus:border-amber-500 outline-none transition-all text-white font-medium resize-none placeholder:text-slate-700" onChange={(e) => setFormData({...formData, ideia: e.target.value})}/>
                  <button onClick={handleSendProject} className="w-full py-8 bg-amber-500 text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-amber-400 transition-all transform active:scale-95 shadow-xl">INICIAR CONSTRUÇÃO DO PROJETO </button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. LAYER: ASSISTENTE IA ANUBIS TECH (FAB) */}
      <AnubisChatBot />

    </main>
  );
}