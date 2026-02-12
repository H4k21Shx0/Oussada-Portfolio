import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Globe, Heart, 
  Zap, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Configuration for positions to sync SVG and DOM elements
const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 640; 
const CARD_WIDTH = 280;
const HALF_CARD = CARD_WIDTH / 2;

const Contact: React.FC = () => {
    const { t } = useLanguage();

    // Data Structure - useMemo to react to language changes
    const RESOLUTIONS = useMemo(() => [
    {
        id: 1,
        year: "2025",
        type: t.contact.cards.core.type,
        icon: Brain,
        title: t.contact.cards.core.title,
        desc: t.contact.cards.core.desc,
        specs: t.contact.cards.core.specs,
        themeColor: "blue",
        gradient: "from-blue-500 to-cyan-400",
        shadow: "shadow-blue-500/20",
        border: "group-hover:border-blue-500/50",
        textAccent: "text-blue-400",
        xPercent: 20, 
        yPos: 190,    
    },
    {
        id: 2,
        year: "2026",
        type: t.contact.cards.relay.type,
        icon: Globe,
        title: t.contact.cards.relay.title,
        desc: t.contact.cards.relay.desc,
        specs: t.contact.cards.relay.specs,
        themeColor: "purple",
        gradient: "from-purple-500 to-pink-400",
        shadow: "shadow-purple-500/20",
        border: "group-hover:border-purple-500/50",
        textAccent: "text-purple-400",
        xPercent: 50, 
        yPos: 390,    
    },
    {
        id: 3,
        year: "2027",
        type: t.contact.cards.edge.type,
        icon: Heart,
        title: t.contact.cards.edge.title,
        desc: t.contact.cards.edge.desc,
        specs: t.contact.cards.edge.specs,
        themeColor: "amber",
        gradient: "from-amber-500 to-orange-400",
        shadow: "shadow-amber-500/20",
        border: "group-hover:border-amber-500/50",
        textAccent: "text-amber-400",
        xPercent: 80, 
        yPos: 190,    
    }
    ], [t]);

    // Helper to generate the Pipeline Path
    const generatePipelinePath = () => {
        const r = 20; 
        const p1 = { x: 240, y: RESOLUTIONS[0].yPos };
        const p2 = { x: 600, y: RESOLUTIONS[1].yPos };
        const p3 = { x: 960, y: RESOLUTIONS[2].yPos };
        const p1_right = p1.x + HALF_CARD;
        const p2_left = p2.x - HALF_CARD;
        const p2_right = p2.x + HALF_CARD;
        const p3_left = p3.x - HALF_CARD;
        const mid1 = (p1_right + p2_left) / 2;
        const mid2 = (p2_right + p3_left) / 2;

        return `
        M 0 ${p1.y}
        L ${mid1 - r} ${p1.y}
        Q ${mid1} ${p1.y} ${mid1} ${p1.y + (p2.y > p1.y ? r : -r)}
        L ${mid1} ${p2.y - (p2.y > p1.y ? r : -r)}
        Q ${mid1} ${p2.y} ${mid1 + r} ${p2.y}
        L ${mid2 - r} ${p2.y}
        Q ${mid2} ${p2.y} ${mid2} ${p2.y - (p2.y > p3.y ? r : -r)}
        L ${mid2} ${p3.y + (p2.y > p3.y ? r : -r)}
        Q ${mid2} ${p3.y} ${mid2 + r} ${p3.y}
        L 1200 ${p3.y}
        `;
    };

  return (
    <section id="contact" className="min-h-screen bg-[#0b0f19] relative overflow-hidden flex flex-col pt-24 pb-12">
       <div className="absolute inset-0 pointer-events-none" />
       <div className="max-w-[1600px] mx-auto px-6 relative z-10 flex-grow flex flex-col w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 md:mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/10 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
                <Cpu size={12} className="animate-pulse" /> {t.contact.badge}
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                {t.contact.title} <span className="text-blue-500">{t.contact.subtitle}</span>
             </h2>
             <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8" />
             <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
                {t.contact.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{t.contact.title_span}</span>
             </h3>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">{t.contact.desc}</p>
          </motion.div>

          <div className="hidden lg:block relative w-full h-[640px] mb-12">
             <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none">
                 <defs>
                    <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="10%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="25%" stopColor="#22d3ee" /> 
                        <stop offset="50%" stopColor="#a855f7" /> 
                        <stop offset="75%" stopColor="#e879f9" /> 
                        <stop offset="90%" stopColor="#f59e0b" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </linearGradient>
                    <filter id="pipelineGlow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                 </defs>
                 <motion.path d={generatePipelinePath()} fill="none" stroke="url(#pipelineGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#pipelineGlow)" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2.5, ease: "easeInOut" }} />
                 {[0, 1].map((i) => (
                    <motion.circle key={i} r="4" fill="white" filter="url(#pipelineGlow)"><animateMotion dur="5s" repeatCount="indefinite" path={generatePipelinePath()} begin={`${i * 2.5}s`} keyPoints="0;1" keyTimes="0;1" calcMode="linear" /></motion.circle>
                 ))}
             </svg>
             {RESOLUTIONS.map((res, i) => (
                 <div key={res.id} className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${res.xPercent}%`, top: `${res.yPos}px` }}>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + (i * 0.3) }} className={`relative w-[280px] bg-[#0b0f19] border border-white/10 rounded-lg transition-all duration-500 group z-20 hover:shadow-2xl ${res.shadow} hover:border-${res.themeColor}-500/50 flex flex-col overflow-hidden min-h-[320px]`}>
                        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#0b0f19] border-2 border-${res.themeColor}-500 rounded-full z-30 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`}><div className={`absolute inset-0 rounded-full bg-${res.themeColor}-500 animate-ping opacity-20`} /></div>
                        <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#0b0f19] border-2 border-${res.themeColor}-500 rounded-full z-30 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`}></div>
                        <div className="p-1 h-full flex flex-col">
                            <div className="bg-slate-900/50 rounded border border-white/5 p-5 relative overflow-hidden flex-grow flex flex-col">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20" />
                                <div className="relative z-10 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                                        <div className="flex items-center gap-2"><res.icon className={`${res.textAccent}`} size={16} /><span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${res.textAccent}`}>{res.type}</span></div>
                                        <span className="text-[10px] text-gray-500 font-mono">{res.year}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{res.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow">{res.desc}</p>
                                    <div className="grid grid-cols-1 gap-1.5 mt-auto">
                                        {res.specs.map((spec, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-[10px] text-gray-400 bg-black/40 px-2 py-1.5 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                                                <span>{spec}</span><Zap size={8} className={`${res.textAccent}`} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity"><ArrowRight size={14} className="text-white" /></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                 </div>
             ))}
          </div>

          <div className="lg:hidden flex flex-col gap-8 mb-20 relative">
             <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-50" />
             {RESOLUTIONS.map((res, i) => (
                 <motion.div key={res.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="relative pl-12">
                    <div className={`absolute left-6 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-[#0b0f19] border-2 border-${res.themeColor}-500 z-10 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`} />
                    <div className={`p-5 rounded-xl bg-slate-900/80 border border-white/10 ${res.border} group min-h-[220px] flex flex-col`}>
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2"><res.icon className={`${res.textAccent}`} size={18} /><span className="text-white font-bold">{res.title}</span></div>
                            <span className="text-xs font-mono text-gray-500">{res.year}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 flex-grow">{res.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                             {res.specs.map((spec, idx) => (
                                <span key={idx} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">{spec}</span>
                            ))}
                        </div>
                    </div>
                 </motion.div>
             ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative max-w-4xl mx-auto text-center mb-6 py-4 px-6">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-white/5 font-serif">"</div>
             <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed italic font-serif z-10 relative">{t.contact.quote}</h3>
             <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-blue-500/50" /><Sparkles size={14} className="text-blue-400 fill-blue-400" /><div className="w-12 h-[1px] bg-blue-500/50" />
             </div>
          </motion.div>

          <div className="flex flex-col items-center mt-4 pb-8 relative z-10">
              <motion.div initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mb-12 flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-6">
                  <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter select-none filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center md:text-left" style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #a855f7, #f59e0b, #60a5fa)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>TO BE CONTINUED</motion.h1>
                  <div className="flex gap-3 mt-2 md:mt-0">
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full" />
                      <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full" />
                  </div>
              </motion.div>
               <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} viewport={{ once: true }} className="flex flex-col items-center text-center">
                  <p className="text-sm font-light text-gray-300 tracking-wide mb-2">{t.contact.footer_built} <span className="font-medium text-white">Mohammed Amine Oussada</span></p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">© {new Date().getFullYear()} {t.contact.footer_rights}</p>
              </motion.div>
           </div>
       </div>
    </section>
  );
};

export default Contact;
