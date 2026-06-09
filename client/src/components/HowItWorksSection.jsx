import React, { useState, useEffect } from 'react';
import { Briefcase, Trophy, Calendar, Music, UtensilsCrossed, GraduationCap, MapPin, RefreshCw, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [appliedCardIds, setAppliedCardIds] = useState([]);

  useEffect(() => {
    if (currentStep < 5) {
      const timers = [
        setTimeout(() => setCurrentStep(2), 1500),
        setTimeout(() => setCurrentStep(3), 3000),
        setTimeout(() => setCurrentStep(4), 4200),
        setTimeout(() => setCurrentStep(5), 5200),
      ];
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [currentStep]);

  const handleRescan = () => {
    setSelectedCardId(null);
    setAppliedCardIds([]);
    setCurrentStep(1);
  };

  const handleApply = (id) => {
    if (!appliedCardIds.includes(id)) {
      setAppliedCardIds(prev => [...prev, id]);
    }
  };

  const opportunities = [
    {
      id: 1,
      type: 'Internship',
      icon: Briefcase,
      title: 'Frontend Developer Intern',
      company: 'Stripe HQ',
      distance: '2.5 km away',
      timeLeft: '3 Days Left',
      actionText: 'Apply Now',
      successText: 'Applied Successfully!',
      colorTheme: 'blue',
      glowColor: 'rgba(37, 99, 235, 0.25)',
      borderColor: 'group-hover:border-blue-200 border-[#E2E8F0]/80',
      bgColor: 'bg-blue-50/90 border-blue-100/30',
      textColor: 'text-blue-600',
      posClass: 'left-[2%] top-[30%]', // Left
      entryDelay: 0.1,
      xOffset: -120,
      yOffset: 0,
      targetX: 14.5,
      targetY: 39,
    },
    {
      id: 2,
      type: 'Hackathon',
      icon: Trophy,
      title: 'AI Global Hackathon',
      company: 'Innovation Lab',
      distance: '1.4 km away',
      timeLeft: '5 Days Left',
      actionText: 'Register Now',
      successText: 'Registered Successfully!',
      colorTheme: 'indigo',
      glowColor: 'rgba(79, 70, 229, 0.25)',
      borderColor: 'group-hover:border-indigo-200 border-[#E2E8F0]/80',
      bgColor: 'bg-indigo-50/90 border-indigo-100/30',
      textColor: 'text-indigo-600',
      posClass: 'left-[35%] top-[2%]', // Top
      entryDelay: 0.3,
      xOffset: 0,
      yOffset: -120,
      targetX: 47.5,
      targetY: 11,
    },
    {
      id: 3,
      type: 'Event',
      icon: Calendar,
      title: 'React Meetup & Social',
      company: 'Tech Hub Arena',
      distance: '1.1 km away',
      timeLeft: 'Tonight at 7 PM',
      actionText: 'RSVP Now',
      successText: 'Reserved Successfully!',
      colorTheme: 'cyan',
      glowColor: 'rgba(6, 182, 212, 0.25)',
      borderColor: 'group-hover:border-cyan-200 border-[#E2E8F0]/80',
      bgColor: 'bg-cyan-50/90 border-cyan-100/30',
      textColor: 'text-cyan-600',
      posClass: 'left-[10%] top-[70%]', // Bottom-Left
      entryDelay: 0.5,
      xOffset: -100,
      yOffset: 120,
      targetX: 22.5,
      targetY: 79,
    },
    {
      id: 4,
      type: 'Music Fest',
      icon: Music,
      title: 'Sunset Beats Festival',
      company: 'Town Amphitheater',
      distance: '4.8 km away',
      timeLeft: 'Starts Tomorrow',
      actionText: 'Get Tickets',
      successText: 'Tickets Reserved!',
      colorTheme: 'purple',
      glowColor: 'rgba(139, 92, 246, 0.25)',
      borderColor: 'group-hover:border-purple-200 border-[#E2E8F0]/80',
      bgColor: 'bg-purple-50/90 border-purple-100/30',
      textColor: 'text-purple-600',
      posClass: 'left-[66%] top-[30%]', // Right
      entryDelay: 0.7,
      xOffset: 120,
      yOffset: 0,
      targetX: 78.5,
      targetY: 39,
    },
    {
      id: 5,
      type: 'Food Offer',
      icon: UtensilsCrossed,
      title: '50% Student Pizza Deal',
      company: 'Pizza Palace',
      distance: '0.8 km away',
      timeLeft: 'Expires in 4h',
      actionText: 'Claim Voucher',
      successText: 'Voucher Saved!',
      colorTheme: 'orange',
      glowColor: 'rgba(249, 115, 22, 0.25)',
      borderColor: 'group-hover:border-orange-200 border-[#E2E8F0]/80',
      bgColor: 'bg-orange-50/90 border-orange-100/30',
      textColor: 'text-orange-600',
      posClass: 'left-[59%] top-[70%]', // Bottom-Right
      entryDelay: 0.9,
      xOffset: 100,
      yOffset: 120,
      targetX: 71.5,
      targetY: 79,
    },
    {
      id: 6,
      type: 'Workshop',
      icon: GraduationCap,
      title: 'UI/UX Design Masterclass',
      company: 'Design Academy',
      distance: '1.9 km away',
      timeLeft: '2 Days Left',
      actionText: 'Book Seat',
      successText: 'Seat Booked!',
      colorTheme: 'emerald',
      glowColor: 'rgba(16, 185, 129, 0.25)',
      borderColor: 'group-hover:border-emerald-200 border-[#E2E8F0]/80',
      bgColor: 'bg-emerald-50/90 border-emerald-100/30',
      textColor: 'text-emerald-600',
      posClass: 'left-[59%] top-[2%]', // Top-Right
      entryDelay: 1.1,
      xOffset: 100,
      yOffset: -120,
      targetX: 71.5,
      targetY: 11,
    },
  ];

  const gridStyle = {
    backgroundImage: 'radial-gradient(rgba(37, 99, 235, 0.03) 1.5px, transparent 1.5px)',
    backgroundSize: '30px 30px',
  };

  return (
    <section id="how-it-works" className="py-28 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative overflow-hidden border-t border-[#E2E8F0]">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-theme/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-secondary-theme/2 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Background Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-theme/15 pointer-events-none"
          style={{
            left: `${15 + i * 11}%`,
            top: `${20 + (i % 3) * 23}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-theme/10 text-xs font-semibold text-primary-theme uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Interactive Scanner</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#0F172A] mb-4">
            How Nearify Connects You to Opportunities
          </h2>
          
          <p className="text-[#64748B] font-normal text-base sm:text-lg">
            Watch our discovery engine in action mapping local internships, events, discounts, and bootcamps right to your location.
          </p>
        </div>

        {/* Stepper HUD */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 max-w-2xl mx-auto px-4">
          {[
            { step: 1, label: 'GPS Active' },
            { step: 2, label: 'Radar Scan' },
            { step: 3, label: 'Sync Nodes' },
            { step: 4, label: 'Live Stream' },
            { step: 5, label: 'Interact' },
          ].map((s) => (
            <div key={s.step} className="flex items-center space-x-2">
              <div className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                currentStep >= s.step ? 'bg-primary-theme scale-125 shadow-[0_0_8px_var(--primary-color)]' : 'bg-[#E2E8F0]'
              }`} />
              <span className={`text-xs font-semibold transition-colors duration-300 ${
                currentStep >= s.step ? 'text-[#0F172A]' : 'text-[#94A3B8]'
              }`}>
                {s.label}
              </span>
              {s.step < 5 && <div className="hidden sm:block h-[1px] w-6 bg-[#E2E8F0]" />}
            </div>
          ))}
        </div>

        {/* Ecosystem Canvas Frame */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden border border-[#E2E8F0]/60 rounded-[32px] bg-white/45 backdrop-blur-md py-6 px-2 sm:px-6 shadow-[0_20px_50px_rgba(0,0,0,0.015)]" style={gridStyle}>
          
          {/* Re-scan / Action Bar */}
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={handleRescan}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#E2E8F0] hover:border-primary-theme/30 hover:text-primary-theme rounded-full text-xs font-semibold text-slate-600 shadow-sm transition-all duration-300 cursor-pointer active:scale-95 animate-none"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${currentStep < 5 ? 'animate-spin' : ''}`} />
              <span>{currentStep < 5 ? 'Scanning...' : 'Re-scan Radar'}</span>
            </button>
          </div>

          {/* Scaled Coordinate Area */}
          <div className="relative w-full overflow-hidden flex items-center justify-center h-[520px] sm:h-[600px] lg:h-[650px]">
            
            {/* Inner responsive layout scaler */}
            <div className="relative w-[900px] h-[600px] shrink-0 scale-[0.4] xs:scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 origin-center transition-transform duration-500">
              
              {/* SVG Connection Network Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                  <linearGradient id="glow-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
                  </linearGradient>
                  <linearGradient id="glow-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Draw connection lines */}
                {opportunities.map((card) => {
                  const isActive = currentStep >= 3;
                  return (
                    <motion.line
                      key={card.id}
                      x1="50%"
                      y1="50%"
                      x2={`${card.targetX}%`}
                      y2={`${card.targetY}%`}
                      stroke="rgba(148, 163, 184, 0.15)"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isActive ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  );
                })}

                {/* Draw traveling particles (Step 4+) */}
                {currentStep >= 4 && opportunities.map((card) => {
                  // Calculate dynamic endpoints in pixel space of 900x600 canvas
                  const startX = 450;
                  const startY = 300;
                  const endX = (card.targetX / 100) * 900;
                  const endY = (card.targetY / 100) * 600;

                  return (
                    <g key={`particle-${card.id}`}>
                      {/* Flowing dot */}
                      <motion.circle
                        r="4"
                        fill={
                          card.colorTheme === 'blue' ? '#2563EB' :
                          card.colorTheme === 'indigo' ? '#4F46E5' :
                          card.colorTheme === 'cyan' ? '#06B6D4' :
                          card.colorTheme === 'purple' ? '#8B5CF6' :
                          card.colorTheme === 'orange' ? '#F97316' : '#10B981'
                        }
                        style={{ filter: 'drop-shadow(0px 0px 4px currentColor)' }}
                        initial={{ cx: startX, cy: startY, opacity: 0 }}
                        animate={{
                          cx: [startX, endX],
                          cy: [startY, endY],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: card.entryDelay
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Center Location Radar Node (Step 1+) */}
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="relative w-28 h-28 flex items-center justify-center"
                >
                  {/* Outer Pulsing Waves */}
                  <div className="absolute inset-0 rounded-full bg-primary-theme/10 animate-ping opacity-75 [animation-duration:3s]" />
                  <div className="absolute -inset-4 rounded-full bg-primary-theme/5 animate-pulse opacity-45 [animation-duration:2s]" />

                  {/* Inner Glowing Profile Orb */}
                  <div className="relative w-20 h-20 rounded-full bg-white border border-[#E2E8F0] shadow-[0_10px_30px_rgba(37,99,235,0.15)] flex items-center justify-center z-10">
                    <div className="p-3.5 bg-primary-theme/10 rounded-full text-primary-theme relative">
                      <MapPin className="h-8 w-8 animate-bounce [animation-duration:2.5s]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary-theme rounded-full blur-[4px] opacity-25" />
                    </div>
                  </div>

                  {/* Rotating Discovery HUD Circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-theme/30 animate-spin [animation-duration:20s]" />
                </motion.div>
              </div>

              {/* Floating Opportunity Nodes (Step 2+) */}
              <AnimatePresence>
                {opportunities.map((card) => {
                  const Icon = card.icon;
                  const isVisible = currentStep >= 2;
                  const isSelected = selectedCardId === card.id;
                  const isApplied = appliedCardIds.includes(card.id);

                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={card.id}
                      layout
                      initial={{ 
                        opacity: 0, 
                        x: card.xOffset, 
                        y: card.yOffset,
                        scale: 0.8
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        y: 0,
                        scale: isSelected ? 1.05 : 1
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 120, 
                        damping: 15,
                        delay: card.entryDelay * 0.5
                      }}
                      onClick={() => {
                        if (currentStep >= 5) {
                          setSelectedCardId(isSelected ? null : card.id);
                        }
                      }}
                      className={`absolute ${card.posClass} ${isSelected ? 'z-30' : 'z-10'} cursor-pointer group`}
                    >
                      <motion.div
                        className={`transition-all duration-300 rounded-[24px] border ${card.borderColor} bg-white/95 backdrop-blur-md flex flex-col justify-between shadow-[0_12px_28px_rgba(15,23,42,0.03),0_4px_10px_rgba(15,23,42,0.015)] p-5 overflow-hidden text-slate-800 ${
                          isSelected ? 'w-[280px] min-h-[175px]' : 'w-[230px] min-h-[82px]'
                        }`}
                        whileHover={isSelected ? {} : {
                          y: -6,
                          rotateX: 2.5,
                          rotateY: -2.5,
                          boxShadow: card.glowColor ? `0 20px 40px -10px rgba(15, 23, 42, 0.08), 0 0 25px ${card.glowColor}` : '0 20px 40px -10px rgba(15,23,42,0.08)',
                          borderColor: card.glowColor ? card.glowColor.replace('0.25', '0.4') : 'rgba(37,99,235,0.2)',
                        }}
                      >
                        {!isSelected ? (
                          /* Compact Resting Card */
                          <div className="flex items-center space-x-3.5">
                            <div className={`p-2.5 rounded-[12px] ${card.bgColor} ${card.textColor} border flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <span className={`text-[9px] font-bold uppercase tracking-widest ${card.textColor} block mb-0.5`}>
                                {card.type}
                              </span>
                              <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-tight group-hover:text-primary-theme transition-colors">
                                {card.title}
                              </h4>
                            </div>
                          </div>
                        ) : (
                          /* Expanded Detailed Card */
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="space-y-4 w-full"
                          >
                            <div className="flex items-center justify-between border-b border-[#E2E8F0]/60 pb-3">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2.5 rounded-[12px] ${card.bgColor} ${card.textColor} border`}>
                                  <Icon className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                  <span className={`text-[9px] font-bold uppercase tracking-widest ${card.textColor} block mb-0.5`}>
                                    {card.type}
                                  </span>
                                  <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-tight">
                                    {card.title}
                                  </h4>
                                </div>
                              </div>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedCardId(null);
                                }}
                                className="text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 rounded hover:bg-slate-100 transition-colors"
                              >
                                Close
                              </button>
                            </div>
                            
                            <div className="flex flex-col space-y-1.5 text-xs text-left text-[#64748B] font-medium pl-1">
                              <p className="flex items-center gap-1.5">
                                <span className="text-slate-400">📍</span> <span>{card.company} • {card.distance}</span>
                              </p>
                              <p className="flex items-center gap-1.5">
                                <span className="text-slate-400">⏰</span> <span>{card.timeLeft}</span>
                              </p>
                            </div>
                            
                            {isApplied ? (
                              <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center justify-center space-x-2 py-2 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl text-xs font-semibold"
                              >
                                <CheckCircle2 className="h-4 w-4" />
                                <span>{card.successText}</span>
                              </motion.div>
                            ) : (
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApply(card.id);
                                }}
                                className="w-full py-2 bg-primary-theme hover:bg-primary-theme/90 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                              >
                                {card.actionText}
                              </motion.button>
                            )}
                          </motion.div>
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

            </div>
          </div>

          {/* Interactive Info Footer */}
          <div className="mt-4 pb-2 z-10 text-center">
            {currentStep < 5 ? (
              <p className="text-xs text-primary-theme font-semibold flex items-center justify-center gap-1.5 animate-pulse">
                <span>⚡</span>
                <span>Nearify discovery engine active. Scanning coordinates...</span>
              </p>
            ) : (
              <p className="text-xs text-slate-500 font-semibold flex items-center justify-center gap-1.5">
                <span>💡</span>
                <span>Click any opportunity card in the ecosystem to view details and apply!</span>
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
