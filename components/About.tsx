import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Network, Cpu, Lock, Layers, Globe, Activity, Clock, Trophy, Briefcase, GitCommit, Radio, FolderOpen, X, Server, Wifi, ScanEye, MousePointerClick, Sparkles, Github, Linkedin, Shield, ExternalLink, Hexagon, Brain, Star, Cloud, TrendingUp, CheckCircle2, Target } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useLanguage } from './LanguageContext';

// --- CUSTOM INTERACTIVE TICK ---
const CustomTick = ({ payload, x, y, cx, cy, activeSkill, setActiveSkill, skillsData }: any) => {
    const index = skillsData.findIndex((s: any) => s.subject === payload.value);
    const isActive = activeSkill === index;
    const dataItem = skillsData[index];
    
    if (index === -1) return null;

    const width = 90; 
    const height = 20;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    const offset = 10; 
    const finalX = dist > 0 ? x + (dx / dist) * offset : x;
    const finalY = dist > 0 ? y + (dy / dist) * offset : y;
    
    const ratio = dataItem.A / dataItem.fullMark;
    const pointX = cx + (x - cx) * ratio;
    const pointY = cy + (y - cy) * ratio;

    let xPos = finalX - width / 2;
    let justifyContent = 'justify-center';

    if (Math.abs(dx) < 10) {
        xPos = finalX - width / 2;
        justifyContent = 'justify-center';
    } else if (dx > 0) {
        xPos = finalX; 
        justifyContent = 'justify-start';
    } else {
        xPos = finalX - width;
        justifyContent = 'justify-end';
    }
    const yPos = finalY - height / 2;

    return (
        <g>
            {isActive && (
                <>
                    <line x1={cx} y1={cy} x2={pointX} y2={pointY} stroke={dataItem.color} strokeWidth={1.5} strokeDasharray="3 3" opacity={0.8} />
                    <circle cx={pointX} cy={pointY} r={4} fill={dataItem.color} stroke="#fff" strokeWidth={1.5} />
                    <circle cx={pointX} cy={pointY} r={10} fill={dataItem.color} opacity={0.15} />
                </>
            )}
            <foreignObject x={xPos} y={yPos} width={width} height={height} style={{ overflow: 'visible' }}>
                <div className={`w-full h-full flex items-center ${justifyContent} group`} onClick={() => setActiveSkill(isActive ? null : index)} style={{ "--hover-color": dataItem.color, outline: 'none' } as React.CSSProperties} tabIndex={-1} >
                    <div className={`cursor-pointer px-2 py-1 rounded-lg border text-[8px] md:text-[10px] font-bold uppercase tracking-wide backdrop-blur-lg transition-all duration-300 whitespace-nowrap shadow-md ${isActive ? 'bg-slate-900 border-opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]' : 'bg-slate-900/40 border-white/5 text-gray-500 group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)] group-hover:scale-105'}`} style={{ borderColor: isActive ? dataItem.color : undefined, color: isActive ? '#fff' : undefined }}>
                        {payload.value}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { t } = useLanguage();

  const skillsData = useMemo(() => {
      const entries = [
          { key: 'networks', icon: Wifi, color: '#06b6d4', score: 8.0 },
          { key: 'security', icon: Shield, color: '#f43f5e', score: 5.0 },
          { key: 'infra', icon: Activity, color: '#ec4899', score: 6.5 },
          { key: 'systems', icon: Server, color: '#8b5cf6', score: 7.0 },
          { key: 'embedded', icon: Cpu, color: '#10b981', score: 7.5 },
          { key: 'soft_skills', icon: Star, color: '#14b8a6', score: 7.0 },
          { key: 'software', icon: Layers, color: '#3b82f6', score: 5.0 },
          { key: 'ai', icon: Brain, color: '#f59e0b', score: 3.0 },
          { key: 'cloud', icon: Cloud, color: '#f97316', score: 6.0 },
      ];

      return entries.map(e => {
          const skill = t.about.skills[e.key as keyof typeof t.about.skills];
          return {
              subject: skill.name,
              A: e.score,
              fullMark: 10,
              icon: e.icon,
              color: e.color,
              description: skill.desc,
              details: {
                  title: skill.title,
                  popularSkills: skill.popularSkills,
                  status: skill.status
              }
          };
      });
  }, [t]);

  const statsData = useMemo(() => [
    { label: t.about.stats.projects, value: t.about.stats.projects_val, sub: t.about.stats.sub_projects, icon: FolderOpen, color: "text-blue-400", border: "from-blue-500" },
    { label: t.about.stats.experience, value: t.about.stats.experience_val, sub: t.about.stats.sub_experience, icon: Clock, color: "text-purple-400", border: "from-purple-500" },
    { label: t.about.stats.awards, value: t.about.stats.awards_val, sub: t.about.stats.sub_awards, icon: Trophy, color: "text-yellow-400", border: "from-yellow-500" },
    { label: t.about.stats.contribs, value: t.about.stats.contribs_val, sub: t.about.stats.sub_contribs, icon: Brain, color: "text-rose-400", border: "from-rose-500" },
    { label: t.about.stats.role, value: t.about.stats.role_val, sub: t.about.stats.sub_role, icon: Briefcase, color: "text-orange-400", border: "from-orange-500" },
    { label: t.about.stats.status, value: t.about.stats.status_val, sub: t.about.stats.sub_status, icon: Radio, color: "text-green-400", border: "from-green-500" },
  ], [t]);

  const getSkillLevelLabel = (score: number) => {
    if (score <= 2) return t.about.skill_levels[0];
    if (score <= 4) return t.about.skill_levels[1];
    if (score <= 6) return t.about.skill_levels[2];
    if (score <= 8) return t.about.skill_levels[3];
    return t.about.skill_levels[4];
  };

  return (
    <section id="about" className="py-12 md:py-16 2xl:py-20 bg-dark relative overflow-hidden">
      <style>{`.recharts-wrapper, .recharts-surface, foreignObject { outline: none !important; }`}</style>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />
      </div>
      <div className="w-full max-w-[1920px] mx-auto px-2 md:px-4 xl:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{t.about.title} <span className="text-blue-500">{t.about.subtitle}</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">{t.about.desc}</p>
        </motion.div>
        
        <div className="flex flex-col xl:flex-row gap-6 items-stretch justify-center max-w-[1720px] mx-auto w-full">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full max-w-md xl:max-w-none xl:w-[380px] flex-shrink-0 bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-0 shadow-xl z-20 overflow-hidden flex flex-col mx-auto xl:mx-0">
            <div className="h-24 bg-gradient-to-br from-blue-600/30 via-slate-900 to-slate-900 relative">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            </div>
            <div className="px-6 pb-8 -mt-12 relative flex flex-col h-full">
                <div className="w-24 h-24 rounded-2xl border-4 border-slate-900 bg-slate-800 overflow-hidden mb-4 shadow-xl relative mx-auto transition-transform duration-500 hover:scale-105">
                    <img 
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=300&h=300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=300&h=300";
                        e.currentTarget.onerror = null;
                      }}
                      alt="Mohammed Amine OUSSADA" 
                      className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white tracking-tight">Mohammed Amine</h3>
                    <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mt-1">{t.about.role}</p>
                </div>
                
                <div className="bg-slate-900/60 rounded-2xl p-4 border border-white/5 space-y-4 mb-6 shadow-inner">
                    {[
                        { icon: Mail, label: t.about.identity_card.email, val: 'mohammed.amine.oussada@proton.me', color: 'text-blue-400' },
                        { icon: Phone, label: t.about.identity_card.phone, val: '+213 562 227 055', color: 'text-green-400' },
                        { icon: MapPin, label: t.about.identity_card.location, val: 'Tizi Ouzou, Algeria', color: 'text-red-400' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group/item">
                            <div className={`p-2 bg-white/5 rounded-xl ${item.color} bg-opacity-10 border border-white/5 transition-all`}><item.icon size={16} /></div>
                            <div className="min-w-0">
                                <p className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{item.label}</p>
                                <p className="text-xs text-gray-200 font-semibold truncate">{item.val}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900/40 rounded-2xl p-4 border border-white/5 mb-8 shadow-inner flex-grow">
                     <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-3 px-1">{t.about.channels_title}</p>
                     <div className="grid grid-cols-2 gap-3">
                         {[
                            { icon: Github, label: 'GitHub', val: 'H4k21Shx0', color: 'text-gray-200', href: 'https://github.com/H4k21Shx0' },
                            { icon: Linkedin, label: 'LinkedIn', val: 'mohammed-amine-oussada', color: 'text-blue-400', href: 'https://www.linkedin.com/in/mohammed-amine-oussada/' },
                         ].map((item, i) => (
                             <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 rounded-xl bg-white/5 border border-transparent transition-all group/link hover:border-white/10 hover:bg-white/10">
                                 <div className="flex items-center gap-2 mb-1">
                                     <item.icon size={14} className={`${item.color} opacity-80`} />
                                     <span className="text-[10px] font-bold text-gray-300 group-hover:text-white">{item.label}</span>
                                 </div>
                                 <div className="flex items-center justify-between">
                                     <span className="text-[8px] text-gray-500 font-mono truncate mr-2">{item.val}</span>
                                     <ExternalLink size={10} className="text-gray-600 group-hover:text-white" />
                                 </div>
                             </a>
                         ))}
                     </div>
                </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-grow w-full xl:max-w-none">
             <div className="bg-slate-800/15 rounded-[2rem] backdrop-blur-md shadow-xl relative overflow-hidden flex flex-col h-full border border-white/5">
                <div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-3"><Activity size={18} className="text-blue-400" /><div><h3 className="text-sm font-bold text-white uppercase tracking-tight">{t.about.chart_title}</h3></div></div>
                    <div className="flex items-center gap-3"><div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" /><span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Active</span></div></div>
                </div>

                <div className="flex flex-col lg:flex-row flex-grow min-h-[450px]">
                    <div className="w-full lg:w-[50%] xl:w-[55%] relative flex items-center justify-center bg-slate-900/30 p-4 min-h-[400px] outline-none overflow-visible">
                        <div className="relative w-full h-[350px] sm:h-[400px] xl:h-[450px] outline-none">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="50%" data={skillsData} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
                                    <defs>
                                        <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                                        </linearGradient>
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <PolarGrid gridType="polygon" stroke="#94a3b8" strokeOpacity={0.1} />
                                    <PolarAngleAxis dataKey="subject" axisLine={false} tickLine={false} tick={(props) => (<CustomTick {...props} activeSkill={activeSkill} setActiveSkill={setActiveSkill} skillsData={skillsData} />)} />
                                    <PolarRadiusAxis angle={30} fontSize={10} domain={[0, 10]} tick={false} axisLine={false} />
                                    <Radar name="Skills" dataKey="A" stroke="#60a5fa" strokeWidth={2} fill="url(#radarFill)" fillOpacity={0.7} isAnimationActive={true} filter="url(#glow)" activeDot={false} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-[50%] xl:w-[45%] relative bg-slate-950/40 flex flex-col overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5 transition-all duration-500">
                        <AnimatePresence mode='wait'>
                            {activeSkill !== null ? (
                                <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex flex-col h-full p-6 md:p-8 relative">
                                    <div className={`absolute top-0 right-0 p-6 opacity-5`}>{React.createElement(skillsData[activeSkill].icon, { size: 120, color: skillsData[activeSkill].color })}</div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex-grow pr-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-black">{t.about.evolution_analysis}</span>
                                                    <div className="h-px w-6 bg-white/10" />
                                                </div>
                                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight" style={{ color: skillsData[activeSkill].color }}>{skillsData[activeSkill].details.title}</h3>
                                                <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-medium">{skillsData[activeSkill].description}</p>
                                            </div>
                                            <button onClick={() => setActiveSkill(null)} className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-gray-500 hover:text-white border border-white/5 group flex-shrink-0">
                                                <X size={18} className="group-hover:rotate-90 transition-transform" />
                                            </button>
                                        </div>
                                        
                                        <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-4 shadow-inner mb-6">
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-1.5">
                                                    <Star size={10} style={{ color: skillsData[activeSkill].color }} />
                                                    <span className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{t.about.mastery_points}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-mono font-bold text-white tracking-tighter">
                                                        {skillsData[activeSkill].A.toFixed(1)} <span className="text-gray-500 font-normal">/ 10</span>
                                                    </span>
                                                    <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded-full border bg-white/5 transition-all shadow-sm" style={{ borderColor: `${skillsData[activeSkill].color}33`, backgroundColor: `${skillsData[activeSkill].color}11`, color: skillsData[activeSkill].color }}>
                                                        {getSkillLevelLabel(skillsData[activeSkill].A)}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="h-2 bg-white/5 rounded-full overflow-hidden shadow-inner">
                                                <motion.div initial={{ width: 0 }} animate={{ width: `${(skillsData[activeSkill].A / 10) * 100}%` }} transition={{ duration: 1, ease: "easeOut" }} className="h-full rounded-full" style={{ backgroundColor: skillsData[activeSkill].color, boxShadow: `0 0 10px ${skillsData[activeSkill].color}40` }} />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Layers size={12} style={{ color: skillsData[activeSkill].color }} />
                                                <span className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{t.about.mastered_tools}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skillsData[activeSkill].details.popularSkills.map((tool: string, i: number) => (
                                                    <motion.span key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + (i * 0.05) }} className="text-[10px] font-bold text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 group hover:bg-white/10 transition-colors cursor-default">
                                                        <CheckCircle2 size={10} style={{ color: skillsData[activeSkill].color }} />
                                                        {tool}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="mt-auto pt-6 border-t border-white/5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <Target size={14} style={{ color: skillsData[activeSkill].color }} />
                                                <span className="text-[8px] text-gray-500 uppercase font-black tracking-widest">{t.about.evolution_status}</span>
                                            </div>
                                            <div className="bg-slate-900/40 rounded-xl p-4 border border-white/5">
                                                <p className="text-[11px] leading-relaxed text-gray-300 font-medium text-justify">
                                                    {skillsData[activeSkill].details.status}
                                                </p>
                                                <div className="mt-3 flex items-center gap-2">
                                                    <TrendingUp size={10} style={{ color: skillsData[activeSkill].color }} className="animate-pulse" />
                                                    <span className="text-[7px] text-gray-500 uppercase font-black tracking-[0.2em]">{t.about.analyzing_potential}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="instruction" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full p-8 md:p-10 relative overflow-hidden justify-center min-h-[400px]">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                        <div className="mb-8">
                                            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-lg">
                                                <ScanEye className="text-blue-400" size={32} />
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight uppercase">{t.about.growth_matrix_title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                                                {t.about.growth_matrix_desc}
                                            </p>
                                        </div>
                                        <div className="mt-auto flex items-center gap-4 text-[9px] text-gray-500 bg-black/40 px-4 py-3 rounded-xl border border-white/5 font-mono font-bold uppercase tracking-[0.2em] shadow-lg self-start">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                                            <span>{t.about.analyzing_potential}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="bg-slate-900/90 border-t border-white/5 backdrop-blur-xl mt-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/5 border-b border-white/5 md:border-b-0">
                        {statsData.map((stat, idx) => (
                            <div key={idx} className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all group relative overflow-hidden cursor-default">
                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${stat.border.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="flex items-center gap-2">
                                    <stat.icon size={14} className={`${stat.color} opacity-60 group-hover:opacity-100 transition-all`} />
                                    <span className="text-[8px] text-gray-500 uppercase tracking-widest font-black">{stat.label}</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-base font-black text-white font-mono leading-none mb-1">{stat.value}</div>
                                    <div className={`text-[8px] font-black uppercase tracking-widest ${stat.color} bg-white/5 px-2 py-0.5 rounded-md border border-white/5`}>{stat.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;