/* eslint-disable */
// @ts-nocheck
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Layers, User, PlusCircle, MessageSquare, Code2 } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: <Home size={22} />, action: "scroll", target: "top" },
  { id: "sistemas", label: "Projetos", icon: <Layers size={22} />, action: "scroll", target: "sistemas" },
  { id: "tech", label: "Tech", icon: <Code2 size={22} />, action: "modal-tech" },
  { id: "sobre", label: "Sobre Nós", icon: <User size={22} />, action: "modal-about" },
  { id: "projeto", label: "Criar Projeto", icon: <PlusCircle size={22} />, action: "modal-project" },
  { id: "contato", label: "Contato", icon: <MessageSquare size={22} />, action: "whatsapp" },
];

export default function AnubisMagicNav({ onOpenAbout, onOpenProject, onOpenTech, onWhatsApp }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (target) => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (item, idx) => {
    setActiveIndex(idx);
    if (item.action === "scroll") scrollToSection(item.target);
    if (item.action === "modal-about") onOpenAbout();
    if (item.action === "modal-project") onOpenProject();
    if (item.action === "modal-tech") onOpenTech();
    if (item.action === "whatsapp") onWhatsApp("Olá Fernando, quero iniciar um projeto!");
  };

  return (
    <div className="flex bg-[#05060a]/90 backdrop-blur-2xl p-3 rounded-[2rem] border border-amber-500/20 shadow-[0_0_40px_rgba(0,0,0,0.7)] min-w-[450px]">
      <ul className="flex relative items-center justify-between w-full px-2 gap-2">
        {NAV_ITEMS.map((item, idx) => (
          <li key={item.id} className="relative z-10 flex-1">
            <button
              onClick={() => handleNav(item, idx)}
              className={`relative flex flex-col items-center justify-center w-full h-16 transition-all duration-500 ${
                activeIndex === idx ? "-translate-y-6" : ""
              }`}
            >
              <span className={`p-4 rounded-full transition-all duration-700 ${
                activeIndex === idx ? "bg-gradient-to-tr from-amber-200 via-amber-500 to-amber-700 text-black shadow-[0_15px_30px_rgba(245,158,11,0.5)] scale-110" : "text-slate-400 hover:text-amber-500"
              }`}>
                {item.icon}
              </span>
              {activeIndex === idx && (
                <motion.span layoutId="bubble" className="absolute -bottom-8 text-[10px] font-black uppercase tracking-[0.2em] text-amber-500 whitespace-nowrap">
                  {item.label}
                </motion.span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}