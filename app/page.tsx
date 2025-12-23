"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Video, Camera, Zap, Chrome, ArrowRight, Globe } from 'lucide-react';
import { ReactLenis } from 'lenis/react';

// --- СЛОВАРЬ ПЕРЕВОДОВ ---
const translations = {
  en: {
    navbar: {
      docs: "Documentation",
    },
    hero: {
      badge: "New: Version 2.0 is live",
      titleLine1: "Work faster.",
      titleLine2: "Capture and record.",
      subtitle: "Instant screenshots and screen recording in one click. The ultimate tool for your productivity.",
      btnInstall: "Install for Free",
      btnHow: "How it works?",
    },
    features: {
      smart: {
        title: "Smart Screenshots",
        desc: "Record screenshot sequences. Automatic copying to clipboard."
      },
      video: {
        title: "4K Video Recording",
        desc: "Record screen, tab, or camera in high quality. No watermarks."
      },
      turbo: {
        title: "Turbo Speed",
        desc: "Instant launch. Optimized for low-end devices. 0% CPU usage when idle."
      }
    },
    interface: {
      url: "screenflow.app/demo"
    },
    useCases: {
      title: {
        highlight: "One tool",
        rest: "for all tasks"
      },
      subtitle: "Save hours of work every week by replacing long calls with short videos.",
      qa: {
        title: "QA & Development",
        text: "Report bugs faster. Record steps to reproduce errors with console and network requests.",
        tag: "Debug Tech"
      },
      design: {
        title: "Design & Product",
        text: "Collect references, comment on mockups, and conduct UX audits in video format.",
        tag: "Creative"
      },
      support: {
        title: "Support & Sales",
        text: "Reply to clients with personal video instructions instead of dry text templates.",
        tag: "Customer Success"
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        q: "Where are my recordings saved?",
        a: "Privacy comes first. All recordings are processed and stored locally on your computer. We never send your data to the cloud."
      },
      q2: {
        q: "Is this extension really free?",
        a: "Yes. Basic functionality for recording screen, tab, camera, and taking screenshots is free forever and without watermarks."
      },
      q3: {
        q: "How long can I record?",
        a: "We do not impose artificial limits on recording duration. It depends only on the free space on your disk."
      }
    },
    cta: {
      title: "Ready to speed up your work?",
      subtitle: "Join thousands of users who are already saving time with Screc.",
      btn: "Add to Chrome — It's Free",
      note: "No credit card required · One-click install"
    },
    footer: {
      rights: "© 2025. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support"
    }
  },
  ru: {
    navbar: {
      docs: "Документация",
    },
    hero: {
      badge: "New: Версия 2.0 уже доступна",
      titleLine1: "Работай быстрее.",
      titleLine2: "Снимай и записывай.",
      subtitle: "Мгновенные скриншоты и запись видео экрана в один клик. Идеальный инструмент для твоей продуктивности.",
      btnInstall: "Установить бесплатно",
      btnHow: "Как это работает?",
    },
    features: {
      smart: {
        title: "Умные скриншоты",
        desc: "Записывай последовательность скриншотов. Автоматическое копирование в буфер обмена."
      },
      video: {
        title: "Запись видео 4K",
        desc: "Записывай экран, вкладку или камеру в высоком качестве. Без водяных знаков."
      },
      turbo: {
        title: "Турбо скорость",
        desc: "Мгновенный запуск. Оптимизировано для работы на слабых устройствах. 0% нагрузки на CPU в простое."
      }
    },
    interface: {
      url: "screenflow.app/demo"
    },
    useCases: {
      title: {
        highlight: "Один инструмент",
        rest: "для всех задач"
      },
      subtitle: "Экономьте часы работы каждую неделю, заменив длинные созвоны короткими видео.",
      qa: {
        title: "QA и Разработка",
        text: "Репорти баги быстрее. Записывай шаги воспроизведения ошибки с консолью и сетевыми запросами.",
        tag: "Debug Tech"
      },
      design: {
        title: "Дизайн и Продукт",
        text: "Собирай референсы, комментируй макеты и проводи UX-аудиты в формате видео.",
        tag: "Creative"
      },
      support: {
        title: "Поддержка и Продажи",
        text: "Отвечай клиентам персональными видео-инструкциями вместо сухих текстовых шаблонов.",
        tag: "Customer Success"
      }
    },
    faq: {
      title: "Часто задаваемые вопросы",
      q1: {
        q: "Куда сохраняются мои записи?",
        a: "Приватность превыше всего. Все записи обрабатываются и хранятся локально на вашем компьютере. Мы никогда не отправляем ваши данные в облако."
      },
      q2: {
        q: "Это расширение правда бесплатное?",
        a: "Да. Базовый функционал записи экрана, вкладки, камеры и создания скриншотов бесплатен навсегда и без водяных знаков."
      },
      q3: {
        q: "Как долго можно записывать видео?",
        a: "Мы не накладываем искусственных ограничений на длительность записи. Всё зависит только от свободного места на вашем диске."
      }
    },
    cta: {
      title: "Готовы ускорить свою работу?",
      subtitle: "Присоединяйтесь к тысячам пользователей, которые уже экономят время с Screc.",
      btn: "Добавить в Chrome — Это бесплатно",
      note: "Не требуется кредитная карта · Установка за 1 клик"
    },
    footer: {
      rights: "© 2025. Все права защищены.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      support: "Support"
    }
  }
};

type Language = 'en' | 'ru';

// --- ВАРИАНТЫ АНИМАЦИЙ (Variants) ---

const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const floatAnimation: Variants = {
  animate: {
      y: [0, -20, 0],
      rotateX: [10, 0, 10],   
      rotateY: [-10, 10, -10], 
      transition: {
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
      }
  }
};

export default function LandingPage() {
  // Состояние для языка, по умолчанию английский ('en')
  const [lang, setLang] = useState<Language>('en');
  
  // Получаем нужный набор текстов
  const t = translations[lang];

  // Функция переключения
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500 selection:text-white font-sans relative overflow-x-hidden">
      
      <BackgroundAnimation />

      {/* Navbar */}
      <motion.nav 
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto backdrop-blur-md sticky top-0 z-50 border-b border-white/10"
      >
        <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 animate-text-shimmer bg-[length:200%_auto]">
          Screc
        </div>
        
        <div className="flex items-center gap-4">
            {/* Языковой переключатель */}
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-full hover:bg-white/5"
            >
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
            </button>

            <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-md group flex items-center">
             {t.navbar.docs}
             <ArrowRight className="inline ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-sm font-semibold backdrop-blur-md shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            {t.hero.badge}
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
            {t.hero.titleLine1} <br />
            <span className="relative whitespace-nowrap">
                <span className="absolute bg-gradient-to-r from-indigo-600/50 to-purple-600/50 w-[110%] h-full left-[-5%] bottom-2 -z-10 rotate-[-2deg] rounded-lg blur-md"></span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                {t.hero.titleLine2}
                </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
            {t.hero.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:animate-shine" />
              <Chrome className="w-6 h-6 relative z-10" />
              <span className="relative z-10">{t.hero.btnInstall}</span>
            </button>

            <button className="px-8 py-4 bg-slate-800/40 hover:bg-slate-700/50 backdrop-blur-xl rounded-2xl font-semibold text-lg transition-all text-slate-200 border-2 border-slate-700/50 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20">
              {t.hero.btnHow}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
        >
          <FeatureCard 
            icon={<Camera className="w-8 h-8 text-pink-400" />}
            title={t.features.smart.title}
            desc={t.features.smart.desc}
          />
          <FeatureCard 
            icon={<Video className="w-8 h-8 text-indigo-400" />}
            title={t.features.video.title}
            desc={t.features.video.desc}
          />
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-yellow-400" />}
            title={t.features.turbo.title}
            desc={t.features.turbo.desc}
          />
        </motion.div>
      </section>

      {/* Interface Mockup Area */}
      <section className="max-w-6xl mx-auto px-6 pb-32 text-center relative z-10" style={{ perspective: "1200px" }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
           <motion.div
             variants={floatAnimation}
             animate="animate"
             className="relative rounded-[2rem] bg-slate-900 aspect-video flex flex-col group will-change-transform shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
             style={{ 
                 transformStyle: "preserve-3d",
                 maskImage: "linear-gradient(white, white)", 
                 WebkitMaskImage: "linear-gradient(white, white)",
                 borderRadius: "2rem"
             }}
           >
            {/* VIDEO */}
            <div className="absolute inset-0 z-0">
                 <video 
                   src="/video.mp4" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   className="w-full h-full object-cover scale-[1.02]" 
                 />
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
            </div>

            {/* GLARE */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-white/5 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

            {/* BROWSER UI */}
            <div className="h-12 border-b border-white/5 flex items-center px-6 gap-3 relative z-20 bg-slate-900/80 backdrop-blur-md">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner"></div>
                 </div>
                 
                 <div className="flex-1 mx-4">
                    <div className="bg-slate-800/50 rounded-lg h-7 flex items-center justify-center text-[10px] md:text-xs text-slate-400 font-medium border border-white/5 shadow-inner">
                        <Chrome className="w-3 h-3 mr-2 opacity-50" /> 
                        {t.interface.url}
                    </div>
                 </div>
            </div>

            {/* BORDER */}
            <div className="absolute inset-0 rounded-[2rem] border-[4px] border-slate-800/50 z-30 pointer-events-none group-hover:border-indigo-500/30 transition-colors duration-500"></div>
            
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-indigo-400">{t.useCases.title.highlight}</span> {t.useCases.title.rest}</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">{t.useCases.subtitle}</p>
        </motion.div>

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
        >
          <UseCaseItem 
            title={t.useCases.qa.title} 
            text={t.useCases.qa.text}
            tag={t.useCases.qa.tag}
            color="indigo"
          />
          <UseCaseItem 
            title={t.useCases.design.title} 
            text={t.useCases.design.text}
            tag={t.useCases.design.tag}
            color="pink"
          />
          <UseCaseItem 
            title={t.useCases.support.title} 
            text={t.useCases.support.text}
            tag={t.useCases.support.tag}
            color="violet"
          />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">{t.faq.title}</h2>
        <div className="grid gap-4">
          <FaqItem 
            question={t.faq.q1.q}
            answer={t.faq.q1.a}
          />
          <FaqItem 
            question={t.faq.q2.q}
            answer={t.faq.q2.a}
          />
          <FaqItem 
            question={t.faq.q3.q}
            answer={t.faq.q3.a}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-5xl mx-auto px-6 pb-32 relative z-10 mt-20">
        <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, type: "spring" }}
         viewport={{ once: true }}
         className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-20 text-center bg-gradient-to-br from-indigo-900/80 via-slate-900/90 to-violet-900/80 border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/20 backdrop-blur-2xl group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.indigo.500/0.3),transparent_50%)] group-hover:opacity-100 transition-opacity opacity-70" />

          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight relative z-10 drop-shadow-xl">
            {t.cta.title}
          </h2>
          <p className="text-indigo-100 text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            {t.cta.subtitle}
          </p>
          
           <button className="group relative px-12 py-5 bg-white hover:bg-indigo-50 text-indigo-950 rounded-2xl font-extrabold text-xl transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 mx-auto flex items-center gap-3 overflow-hidden z-10">
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent skew-x-[-25deg] group-hover:animate-shine" />
              <Chrome className="w-6 h-6 relative z-10" />
              <span className="relative z-10">{t.cta.btn}</span>
            </button>
            <p className="text-indigo-200/60 text-sm mt-6 relative z-10">{t.cta.note}</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-lg py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">Screc</div>
            <div className="text-slate-500 text-sm">
               {t.footer.rights}
            </div>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-slate-400">
          <Link href="/privacy" className="hover:text-indigo-300 transition-colors flex items-center gap-1">
              {t.footer.privacy} <ArrowRight className="w-3 h-3" />
          </Link>
          <a href="#" className="hover:text-indigo-300 transition-colors">{t.footer.terms}</a>
          <Link href="/support" className="hover:text-indigo-300 transition-colors flex items-center gap-1">
              {t.footer.support} <ArrowRight className="w-3 h-3" />
          </Link>
          </div>
        </div>
      </footer>
    </div>
    </ReactLenis>
  );
}

// --- ФОН ---
function BackgroundAnimation() {
    const gradientVariants: Variants = {
      animate: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        transition: {
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }
      }
    };

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-slate-950">
          <motion.div
              variants={gradientVariants}
              animate="animate"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250vh] h-[250vh] opacity-50 blur-[120px] will-change-transform"
              style={{
                background: "conic-gradient(from 90deg at 50% 50%, #4338ca 0deg, #6d28d9 90deg, #be185d 180deg, #0f172a 270deg, #4338ca 360deg)"
              }}
          />
           <motion.div
              variants={gradientVariants}
              animate={{
                rotate: [360, 0],
                scale: [1.2, 1, 1.2],
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vh] h-[200vh] opacity-30 blur-[150px] will-change-transform mix-blend-plus-lighter"
              style={{
                background: "conic-gradient(from 0deg at 50% 50%, #3b0764 0deg, #1e1b4b 120deg, #be185d 240deg, #3b0764 360deg)"
              }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay z-[1]"></div>
      </div>
    )
}

// --- Компоненты ---

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface UseCaseItemProps {
  title: string;
  text: string;
  tag: string;
  color: "indigo" | "pink" | "violet";
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-8 rounded-[2rem] bg-slate-900/40 border-2 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-300 group backdrop-blur-xl relative overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
    >
       <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>
      
      <div className="mb-6 p-4 bg-slate-800/80 rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner shadow-white/5 relative z-10 ring-1 ring-white/10 group-hover:ring-indigo-400/50 group-hover:bg-indigo-900/50">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white relative z-10 group-hover:text-indigo-200 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed relative z-10 font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

function UseCaseItem({ title, text, tag, color }: UseCaseItemProps) {
  const colorClasses = {
    indigo: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:text-indigo-200",
    pink: "text-pink-300 bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20 group-hover:text-pink-200",
    violet: "text-violet-300 bg-violet-500/10 border-violet-500/20 group-hover:bg-violet-500/20 group-hover:text-violet-200",
  }

  return (
    <motion.div 
      variants={fadeInUp}
      className="bg-slate-900/40 p-8 rounded-[2rem] border-2 border-slate-800/80 hover:border-white/10 transition-all hover:bg-slate-800/60 backdrop-blur-sm group hover:shadow-xl hover:-translate-y-1"
    >
      <span className={`text-xs font-bold tracking-wider uppercase border px-4 py-1.5 rounded-full mb-6 inline-block transition-all ${colorClasses[color]}`}>
        {tag}
      </span>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-lg">
        {text}
      </p>
    </motion.div>
  );
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-800/50 hover:border-indigo-500/30 transition-all backdrop-blur-sm cursor-pointer group"
    >
      <h4 className="text-xl font-bold text-white mb-3 flex justify-between items-center group-hover:text-indigo-300 transition-colors">
        {question}
        <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transform group-hover:rotate-90 transition-all" />
      </h4>
      <p className="text-slate-300 leading-relaxed pr-8 font-medium">{answer}</p>
    </motion.div>
  );
}