"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, ShieldCheck, Database, Key, Code, Settings, RefreshCw, Mail, UserCheck } from 'lucide-react';
import Link from 'next/link';

// --- ДАННЫЕ И ПЕРЕВОДЫ ---
const translations = {
  en: {
    back: "Back to Home",
    title: "Privacy Policy",
    subtitle: "Screc Extension Privacy Standards",
    dateLabel: "Effective Date:",
    dateValue: "Tuesday, December 23, 2025", // Updated to correct day (Tuesday)
    intro: "The Screc extension is designed to simplify users' work with web content by providing screenshot and screen recording functionality. User data privacy and security are our priority. We strive for complete transparency in data processing and comply with all applicable laws and regulations, including Google Chrome Web Store requirements.",
    sections: [
      {
        icon: <Database className="w-5 h-5" />,
        title: "1. Data Collection and Use",
        content: "Screc does not collect or transmit any personal user data to servers, except in cases where the user explicitly initiates actions related to the extension's functionality. All data processing operations occur locally on the user's device, without transmission to external servers.\n\nWe do not collect:\n- Information that allows personal identification (name, address, email, age, etc.).\n- Medical information.\n- Financial or payment data.\n- Authentication data (passwords, PIN codes, etc.).\n- Personal communications (messages, emails, SMS).\n- Location data, IP addresses, or GPS coordinates.\n- Web search history.\n- User actions (clicks, scrolling, keystrokes, etc.).\n\nWe may receive web page content (text, images, video) only upon explicit user request, for example, when clicking the \"Take Screenshot\" or \"Start Screen Recording\" button. These data are processed exclusively locally on the user's device, are not transmitted to servers, and are not used for collecting statistics, analysis, or any other purposes. After the operation is completed, the data are not stored unless the user chooses to save them on their device."
      },
      {
        icon: <Key className="w-5 h-5" />,
        title: "2. Extension Permissions",
        content: "For the proper functioning of Screc, we use the following browser permissions. They are requested only to ensure functionality and are not used for collecting or transmitting data without the user's explicit consent:\n\n- **activeTab**: Allows interaction with the active tab upon user request (e.g., for screen capture).\n- **clipboardWrite**: Allows copying data to the clipboard at the user's initiative (if the function is used, e.g., for copying a screenshot).\n- **scripting**: Used to inject scripts into the current page to implement the extension's functionality (screen capture or screenshots).\n- **storage**: Allows saving local extension settings in the browser (e.g., user preferences for recording quality).\n\nAll permissions are used exclusively for the extension's functionality and are not applied for tracking or monitoring user activity. We do not request permissions unrelated to the main function and minimize their use."
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "3. Code Usage and Security",
        content: "The extension does not use remote code. All JavaScript code is included in the extension package and executed locally in the user's browser. This ensures a high level of security and prevents potential vulnerabilities associated with loading external code. We regularly update the extension to fix known vulnerabilities and comply with browser security standards."
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "4. Data Control and Management",
        content: "Users have full control over their data. You can at any time:\n- Disable or remove the extension through browser settings.\n- View and clear local extension settings (via browser menu or extension settings).\n- Delete any saved data (screenshots or recordings) created with Screc directly from your device.\n\nAll data are stored only locally on the user's device and are not transmitted to third parties. We do not have access to your data and cannot recover or delete them remotely."
      },
      {
        icon: <UserCheck className="w-5 h-5" />,
        title: "5. User Rights",
        content: "Since Screc does not collect, store, or process personal data on servers, many traditional data protection rights (such as the right to access or erase personal data under GDPR or similar laws) do not apply, as there is no personal data held by us. However, users retain the following rights:\n\n- **Right to Information**: You have the right to be informed about how the extension handles data, as detailed in this policy.\n- **Right to Withdraw**: You can stop using the extension and revoke any permissions at any time by uninstalling it.\n- **Right to Complain**: If you believe your privacy rights have been violated, you can contact us or relevant data protection authorities (e.g., in the EU, your local supervisory authority).\n- **Right to Updates**: You have the right to be notified of significant changes to this policy.\n\nWe respect user autonomy and encourage you to review browser settings for additional controls."
      },
      {
        icon: <RefreshCw className="w-5 h-5" />,
        title: "6. Privacy Policy Updates",
        content: "We may periodically update this policy to comply with changes in the extension's functionality, new legal requirements, or Google recommendations. All changes will be published in the Chrome Web Store and in the extension itself. We recommend periodically checking the current version of the policy. Continued use of the extension after the policy update means your consent to the changes."
      },
      {
        icon: <Mail className="w-5 h-5" />,
        title: "7. Contacts",
        content: "If you have questions about privacy, the operation of the Screc extension, or suggestions for improvement, contact us at:\nEmail: danik269@vk.com\n\nWe strive to respond promptly to all requests and ensure maximum transparency. Thank you for using Screc!"
      }
    ]
  },
  ru: {
    back: "На главную",
    title: "Политика конфиденциальности",
    subtitle: "Стандарты безопасности расширения Screc",
    dateLabel: "Дата:",
    dateValue: "Вторник, 23 декабря 2025 года", // Updated to correct day (Tuesday)
    intro: "Расширение Screc предназначено для упрощения работы пользователей с веб-контентом, предоставляя функциональность по созданию скриншотов и записи экрана. Конфиденциальность и безопасность данных пользователей являются нашим приоритетом. Мы стремимся к полной прозрачности в обработке данных и соблюдаем все применимые законы и регуляции, включая требования Google Chrome Web Store.",
    sections: [
      {
        icon: <Database className="w-5 h-5" />,
        title: "1. Сбор и использование данных",
        content: "Screc не собирает и не передает на сервер какие-либо персональные данные пользователей, за исключением случаев, когда пользователь явно инициирует действия, связанные с функционалом расширения. Все операции по обработке данных происходят локально на устройстве пользователя, без передачи на внешние серверы.\n\nМы не собираем:\n- Информацию, позволяющую идентифицировать личность (имя, адрес, email, возраст и др.).\n- Медицинскую информацию.\n- Финансовые или платежные данные.\n- Данные для аутентификации (пароли, PIN-коды и др.).\n- Личную коммуникацию (сообщения, письма, SMS).\n- Данные о местоположении, IP-адреса или координаты GPS.\n- Историю веб-поиска.\n- Действия пользователей (клики, прокрутка, нажатия клавиш и др.).\n\nМы можем получать содержимое веб-страниц (текст, изображения, видео) только по явному запросу пользователя, например, при нажатии кнопки «Сделать скриншот» или «Начать запись экрана». Эти данные обрабатываются исключительно локально на устройстве пользователя, не передаются на серверы и не используются для сбора статистики, анализа или любых других целей. После завершения операции данные не сохраняются, если пользователь не выберет опцию сохранения на своем устройстве."
      },
      {
        icon: <Key className="w-5 h-5" />,
        title: "2. Разрешения расширения",
        content: "Для корректной работы Screc мы используем следующие разрешения браузера. Они запрашиваются только для обеспечения функциональности и не используются для сбора или передачи данных без явного согласия пользователя:\n\n- **activeTab**: Позволяет взаимодействовать с активной вкладкой по запросу пользователя (например, для захвата экрана).\n- **clipboardWrite**: Позволяет копировать данные в буфер обмена по инициативе пользователя (если функция используется, например, для копирования скриншота).\n- **scripting**: Используется для внедрения скриптов в текущую страницу для реализации функционала расширения (захват экрана или скриншоты).\n- **storage**: Позволяет сохранять локальные настройки расширения в браузере (например, предпочтения пользователя по качеству записи).\n\nВсе разрешения используются исключительно в целях функциональности расширения и не применяются для отслеживания или мониторинга активности пользователя. Мы не запрашиваем разрешения, не связанные с основной функцией, и минимизируем их использование."
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: "3. Использование кода и безопасность",
        content: "Расширение не использует удалённый код. Весь JavaScript-код включен в пакет расширения и выполняется локально в браузере пользователя. Это обеспечивает высокий уровень безопасности и предотвращает потенциальные уязвимости, связанные с загрузкой внешнего кода. Мы регулярно обновляем расширение для устранения известных уязвимостей и соответствия стандартам безопасности браузеров."
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "4. Контроль и управление данными",
        content: "Пользователи имеют полный контроль над своими данными. Вы можете в любой момент:\n- Отключить или удалить расширение через настройки браузера.\n- Просмотреть и очистить локальные настройки расширения (через меню браузера или настройки расширения).\n- Удалить любые сохраненные данные (скриншоты или записи), созданные с помощью Screc, напрямую с вашего устройства.\n\nВсе данные хранятся только локально на устройстве пользователя и не передаются третьим сторонам. Мы не имеем доступа к вашим данным и не можем их восстановить или удалить удалённо."
      },
      {
        icon: <UserCheck className="w-5 h-5" />,
        title: "5. Права пользователя",
        content: "Поскольку Screc не собирает, не хранит и не обрабатывает персональные данные на серверах, многие традиционные права защиты данных (такие как право на доступ или удаление персональных данных в соответствии с GDPR или аналогичными законами) не применяются, поскольку у нас нет персональных данных. Однако пользователи сохраняют следующие права:\n\n- **Право на информацию**: Вы имеете право быть информированными о том, как расширение обрабатывает данные, как указано в этой политике.\n- **Право на отзыв**: Вы можете прекратить использование расширения и отозвать любые разрешения в любое время, удалив его.\n- **Право на жалобу**: Если вы считаете, что ваши права на конфиденциальность были нарушены, вы можете связаться с нами или с соответствующими органами по защите данных (например, в ЕС — с вашим местным надзорным органом).\n- **Право на обновления**: Вы имеете право быть уведомленными о значительных изменениях в этой политике.\n\nМы уважаем автономию пользователя и рекомендуем просматривать настройки браузера для дополнительных элементов управления."
      },
      {
        icon: <RefreshCw className="w-5 h-5" />,
        title: "6. Обновления политики конфиденциальности",
        content: "Мы можем периодически обновлять данную политику для соответствия изменениям функционала расширения, новым требованиям законодательства или рекомендациям Google. Все изменения будут опубликованы в Chrome Web Store и в самом расширении. Рекомендуем периодически проверять актуальную версию политики. Продолжение использования расширения после обновления политики означает ваше согласие с изменениями."
      },
      {
        icon: <Mail className="w-5 h-5" />,
        title: "7. Контакты",
        content: "Если у вас есть вопросы по конфиденциальности, работе расширения Screc или предложения по улучшению, свяжитесь с нами по адресу:\nEmail: danik269@vk.com\n\nМы стремимся оперативно отвечать на все запросы и обеспечивать максимальную прозрачность. Спасибо за использование Screc!"
      }
    ]
  }
};

type Language = 'en' | 'ru';

export default function PrivacyPage() {
  const [lang, setLang] = useState<Language>('ru');
  const t = translations[lang];

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'ru' : 'en');

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden selection:bg-indigo-500 flex flex-col">
      <BackgroundAnimation />

      {/* Navigation */}
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
      <main className="flex-grow relative z-10 px-6 py-12 max-w-4xl mx-auto w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-lg shadow-indigo-500/10">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            {t.title}
          </h1>
          <p className="text-indigo-300/80 font-medium mb-2">{t.subtitle}</p>
          <p className="text-slate-500 text-sm">
            {t.dateLabel} <span className="text-slate-400">{t.dateValue}</span>
          </p>
        </motion.div>

        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 backdrop-blur-2xl mb-12 text-slate-300 leading-relaxed italic"
        >
          "{t.intro}"
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-6">
          {t.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 p-2.5 rounded-xl bg-slate-800 border border-white/5 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-white/5">
        <p className="text-slate-600 text-sm">© 2025 Screc Project. Built for privacy.</p>
      </footer>
    </div>
  );
}

function BackgroundAnimation() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-slate-950">
          <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-[20%] -right-[10%] w-[100vh] h-[100vh] opacity-20 blur-[120px]"
              style={{
                background: "conic-gradient(from 0deg at 50% 50%, #4338ca 0deg, #6d28d9 120deg, #be185d 240deg, #4338ca 360deg)"
              }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay z-[1]"></div>
      </div>
    )
}