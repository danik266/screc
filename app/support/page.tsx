"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Instagram, ArrowLeft, ArrowRight, Copy, Check, Globe, MessageCircle } from 'lucide-react';
import Link from 'next/link';

// --- КОНФИГ ДАННЫХ ---
const CONTACTS = {
  email: "danik269@vk.com",
  instagram: "yatogorot_",
  instagramUrl: "https://instagram.com/yatogorot_"
};

// --- СЛОВАРЬ ---
const translations = {
  en: {
    back: "Back to Home",
    title: "Support Center",
    subtitle: "Have a question or a suggestion? We're here to help.",
    cards: {
      email: {
        title: "Email Support",
        desc: "For general inquiries and detailed feedback.",
        action: "Click to Copy",
        copied: "Copied!"
      },
      instagram: {
        title: "Instagram",
        desc: "Follow for updates and quick DMs.",
        action: "Open Profile"
      }
    },
    footer: "We usually respond within 24 hours."
  },
  ru: {
    back: "На главную",
    title: "Служба поддержки",
    subtitle: "У вас есть вопрос или предложение? Мы здесь, чтобы помочь.",
    cards: {
      email: {
        title: "Email",
        desc: "Для общих вопросов и подробной обратной связи.",
        action: "Нажмите, чтобы скопировать",
        copied: "Скопировано!"
      },
      instagram: {
        title: "Instagram",
        desc: "Следите за обновлениями и пишите в Direct.",
        action: "Открыть профиль"
      }
    },
    footer: "Обычно мы отвечаем в течение 24 часов."
  }
};

type Language = 'en' | 'ru';

export default function SupportPage() {
  const [lang, setLang] = useState<Language>('ru'); // По умолчанию русский
  const [isCopied, setIsCopied] = useState(false);
  const t = translations[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACTS.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden selection:bg-indigo-500 selection:text-white flex flex-col">
      
      <BackgroundAnimation />

      {/* Navbar / Top Bar */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-6 max-w-5xl mx-auto w-full">
        <Link href="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-md">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
           {t.back}
        </Link>

        <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 backdrop-blur-md"
        >
            <Globe className="w-4 h-4" />
            <span>{lang.toUpperCase()}</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 px-6 py-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 shadow-lg shadow-indigo-500/10">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400 drop-shadow-xl">
            {t.title}
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          
          {/* Email Card */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={handleCopyEmail}
            className="group relative flex flex-col items-start text-left p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-600/10 transition-all duration-500" />
             
             <div className="mb-6 p-4 rounded-2xl bg-slate-800/80 border border-white/5 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-colors">
                <Mail className="w-8 h-8 text-indigo-400" />
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-2">{t.cards.email.title}</h3>
             <p className="text-slate-400 mb-8 font-medium">{t.cards.email.desc}</p>
             
             <div className="mt-auto w-full py-3 px-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                <span className="font-mono text-indigo-300">{CONTACTS.email}</span>
                <AnimatePresence mode='wait'>
                    {isCopied ? (
                        <motion.span 
                            key="copied"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider"
                        >
                            <Check className="w-4 h-4" /> {t.cards.email.copied}
                        </motion.span>
                    ) : (
                        <motion.span 
                            key="copy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-slate-500 group-hover:text-white transition-colors"
                        >
                            <Copy className="w-4 h-4" />
                        </motion.span>
                    )}
                </AnimatePresence>
             </div>
             <span className="absolute top-6 right-6 text-xs font-bold text-slate-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                {t.cards.email.action}
             </span>
          </motion.button>

          {/* Instagram Card */}
          <motion.a
            href={CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative flex flex-col items-start text-left p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 hover:border-pink-500/50 hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/20 hover:shadow-pink-500/10 hover:-translate-y-1"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-purple-500/0 group-hover:from-pink-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
             
             <div className="mb-6 p-4 rounded-2xl bg-slate-800/80 border border-white/5 group-hover:bg-pink-500/20 group-hover:border-pink-500/30 transition-colors">
                <Instagram className="w-8 h-8 text-pink-400" />
             </div>
             
             <h3 className="text-2xl font-bold text-white mb-2">{t.cards.instagram.title}</h3>
             <p className="text-slate-400 mb-8 font-medium">{t.cards.instagram.desc}</p>
             
             <div className="mt-auto w-full py-3 px-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all">
                <span className="font-medium text-pink-300">@{CONTACTS.instagram}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
             </div>
             
             <span className="absolute top-6 right-6 text-xs font-bold text-slate-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                {t.cards.instagram.action}
             </span>
          </motion.a>

        </div>

        {/* Footer Note */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-slate-500 text-sm font-medium bg-slate-900/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md"
        >
            {t.footer}
        </motion.p>

      </main>
    </div>
  );
}

// --- ФОНОВАЯ АНИМАЦИЯ (Точно такая же как на главной для консистентности) ---
function BackgroundAnimation() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-slate-950">
          <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vh] h-[200vh] opacity-30 blur-[120px]"
              style={{
                background: "conic-gradient(from 90deg at 50% 50%, #4338ca 0deg, #6d28d9 90deg, #be185d 180deg, #0f172a 270deg, #4338ca 360deg)"
              }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay z-[1]"></div>
      </div>
    )
}