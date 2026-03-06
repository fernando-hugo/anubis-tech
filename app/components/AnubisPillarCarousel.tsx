/* eslint-disable */
// @ts-nocheck
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * ANUBIS SOVEREIGN CAROUSEL - V8.0 (HIGH-CONVERSION COPYWRITING)
 * VOCABULÁRIO TÉCNICO:
 * 1. Conversion-Focused Copy: Texto otimizado para transformar visitantes em leads.
 * 2. Geo-Location Logistics: Algoritmos de rastreio baseados em coordenadas geográficas.
 * 3. Predictive Analytics: Uso de IA para antecipar resultados financeiros e falhas.
 */

const PILLARS_DATA = [
  { 
    id: 1, 
    title: "OrthoFlow", 
    img: "/pillars/ortho.jpg",
    full: "Domínio total em instrumentação cirúrgica. Automação de estoque em tempo real e recebimento inteligente de solicitações. Escala de instrumentadores via geolocalização e habilidade técnica. Disparo de cirurgia a um clique para soberania hospitalar.",
    waMsg: "Fernando, quero implementar a logística de elite do OrthoFlow."
  },
  { 
    id: 2, 
    title: "PsychFlow", 
    img: "/pillars/psych.jpg",
    full: "A revolução na saúde mental. IA humanizada para agendamentos de precisão e conexão imediata via metodologia em vídeo. Reduza a fricção burocrática e foque no que realmente importa: o acolhimento e o sucesso do paciente.",
    waMsg: "Fernando, quero a inteligência humanizada do PsychFlow."
  },
  { 
    id: 3, 
    title: "UniFlow", 
    img: "/pillars/uni.jpg",
    full: "Governança absoluta do chão de fábrica ao dashboard executivo. Faturamento e comissões automatizados por IA, com prestação de contas transparente e relatórios estratégicos que blindam a saúde financeira da sua indústria.",
    waMsg: "Fernando, preciso do controle industrial soberano do UniFlow."
  },
  { 
    id: 4, 
    title: "ControlFlow", 
    img: "/pillars/control.jpg",
    full: "Alta performance para demandas explosivas. Gestão ultra-rápida de registros, serviços e insumos. Controle financeiro e de estoque milimétrico para negócios que não podem parar e exigem agilidade extrema no atendimento.",
    waMsg: "Fernando, quero a agilidade de elite do ControlFlow."
  },
  { 
    id: 5, 
    title: "ProfitFlow", 
    img: "/pillars/profit.jpg",
    full: "Inteligência preditiva para franquias e redes. Controle o faturamento global em um único dashboard. Nossa IA antecipa tendências de mercado, detecta falhas operacionais e prevê lucros antes mesmo deles acontecerem.",
    waMsg: "Fernando, quero a visão preditiva do ProfitFlow."
  },
];

export default function AnubisPillarCarousel() {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [currentRotation, setCurrentRotation] = useState(0);
  const WHATSAPP = "5511962104871";

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        rotateY: [currentRotation, currentRotation - 360],
        transition: { duration: 50, ease: "linear", repeat: Infinity },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  const toggleFlip = (idx, e) => {
    e.stopPropagation();
    if (flippedIndex === idx) {
      setFlippedIndex(null);
      setIsPaused(false);
    } else {
      setFlippedIndex(idx);
      setIsPaused(true);
    }
  };

  const handleWhatsApp = (msg, e) => {
    e.stopPropagation();
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="relative w-full h-[750px] flex items-center justify-center overflow-visible bg-transparent">
      <div className="relative w-[350px] h-[550px]" style={{ perspective: "3000px" }}>
        
        <motion.div
          className="w-full h-full relative"
          animate={controls}
          onUpdate={(latest) => setCurrentRotation(latest.rotateY)}
          style={{ transformStyle: "preserve-3d" }}
        >
          {PILLARS_DATA.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="absolute inset-0"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${idx * 72}deg) translateZ(450px)`,
                zIndex: flippedIndex === idx ? 999 : 10,
              }}
            >
              <div 
                className={`w-full h-full relative transition-transform duration-1000 transform-gpu cursor-pointer ${flippedIndex === idx ? 'flipped-state' : ''}`}
                style={{ transformStyle: "preserve-3d" }}
                onClick={(e) => toggleFlip(idx, e)}
              >
                
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl border border-amber-500/20 overflow-hidden bg-[#05060a] flex flex-col shadow-2xl"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", zIndex: 2 }}
                >
                  <div className="w-full h-1/2 p-6 flex items-center justify-center bg-white/5">
                    <img src={pillar.img} alt={pillar.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col justify-end items-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
                    <div className="relative z-10 text-center w-full">
                      <h3 className="text-3xl font-black italic uppercase text-white tracking-tighter mb-6">{pillar.title}</h3>
                      <div className="px-8 py-3 border-2 border-amber-500 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                        Saber Mais
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK FACE */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-3xl border border-amber-500/40 bg-[#08090d] p-8 flex flex-col justify-between items-center text-center shadow-2xl"
                  style={{ 
                    backfaceVisibility: "hidden", 
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    zIndex: 1
                  }}
                >
                  <div className="w-full">
                    <div className="text-amber-500 text-[9px] font-mono tracking-[0.3em] uppercase mb-4">White_Label_System</div>
                    <h3 className="text-white font-black italic uppercase text-2xl mb-4 tracking-tight">{pillar.title}</h3>
                    <div className="h-[1px] w-full bg-amber-500/20 mb-6" />
                    <p className="text-slate-300 text-[14px] leading-relaxed italic px-2">
                      {pillar.full}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 w-full">
                    <button 
                      onClick={(e) => handleWhatsApp(pillar.waMsg, e)}
                      className="w-full py-4 bg-amber-500 text-black font-black uppercase text-[10px] tracking-widest hover:bg-amber-600 transition-all rounded-xl"
                    >
                      Solicitar Sistema
                    </button>
                    <div className="text-slate-500 text-[8px] uppercase font-black py-2">Clique para Voltar</div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .flipped-state {
          transform: rotateY(180deg) !important;
        }
      `}</style>
    </div>
  );
}