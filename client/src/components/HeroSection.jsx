import React from 'react';
import { ArrowRight, Trophy, Utensils, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Mouse parallax motion values for 3D environment
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (clientX / width) - 0.5;
    const normalizedY = (clientY / height) - 0.5;
    mouseX.set(normalizedX * 80); // Parallax offset range
    mouseY.set(normalizedY * 80);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Apple Vision Pro style parallax depths
  const depth1X = useTransform(springX, (val) => val * 0.3);
  const depth1Y = useTransform(springY, (val) => val * 0.3);

  const depth2X = useTransform(springX, (val) => val * -0.4);
  const depth2Y = useTransform(springY, (val) => val * -0.4);

  const depth3X = useTransform(springX, (val) => val * 0.5);
  const depth3Y = useTransform(springY, (val) => val * 0.5);

  const depth4X = useTransform(springX, (val) => val * -0.2);
  const depth4Y = useTransform(springY, (val) => val * -0.2);

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#F8FAFC] dark:bg-[#0F172A] overflow-hidden"
    >
      {/* Background grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Subtle ambient flows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-primary-theme/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-secondary-theme/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Tiny floating ambient particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-theme/20 pointer-events-none"
          style={{
            top: `${25 + i * 10}%`,
            left: `${15 + (i % 2) * 55 + (i % 3) * 8}%`,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + i,
            delay: i * 0.6,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <motion.div
            className="lg:col-span-6 space-y-8 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Live Opportunities Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-700 shadow-sm text-xs font-semibold text-text-theme"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-theme opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-theme"></span>
              </span>
              <span className="font-display tracking-tight dark:text-slate-200">{t('explore', 'Explore Opportunities')}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display leading-[1.12] text-[#0F172A] dark:text-white tracking-tight"
            >
              {t('heroTitle', 'Discover Opportunities Before Everyone Else')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#64748B] dark:text-slate-400 max-w-xl font-normal leading-relaxed"
            >
              {t('heroSubtitle', 'Find internships, hackathons, events, workshops, food offers, and nearby opportunities in one intelligent platform.')}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/login?mode=signup"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary-theme hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer"
              >
                {t('getStarted', 'Get Started')}
                <ArrowRight className="ml-2 h-4.5 w-4.5" />
              </Link>
              <a
                href="#opportunities"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] dark:text-white bg-white dark:bg-slate-800 border border-[#E2E8F0] dark:border-slate-700 hover:bg-[#F8FAFC] dark:hover:bg-slate-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
              >
                {t('explore', 'Explore')}
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual Block - Apple Vision Pro Floating 3D Panel */}
          <motion.div
            className="lg:col-span-6 flex justify-center items-center relative select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 1200 }}
          >
            <div className="relative w-full aspect-square max-w-[500px] h-[500px] pointer-events-auto">
              
              {/* Concentric Radar Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.div
                  className="absolute w-[180px] h-[180px] border border-[#E2E8F0] rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.98, 1.02, 0.98] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute w-[300px] h-[300px] border border-[#E2E8F0] rounded-full"
                  animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.99, 1.01, 0.99] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 1, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute w-[420px] h-[420px] border border-[#E2E8F0] rounded-full"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ repeat: Infinity, duration: 5, delay: 2, ease: 'easeInOut' }}
                />
              </div>

              {/* Glowing animated connection paths behind the cards */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Curve Definitions */}
                <defs>
                  <linearGradient id="line-grad-1" x1="250" y1="250" x2="150" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(37, 99, 235, 0.8)" />
                    <stop offset="1" stopColor="rgba(37, 99, 235, 0.05)" />
                  </linearGradient>
                  <linearGradient id="line-grad-2" x1="250" y1="250" x2="350" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(79, 70, 229, 0.8)" />
                    <stop offset="1" stopColor="rgba(79, 70, 229, 0.05)" />
                  </linearGradient>
                  <linearGradient id="line-grad-3" x1="250" y1="250" x2="350" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(37, 99, 235, 0.8)" />
                    <stop offset="1" stopColor="rgba(37, 99, 235, 0.05)" />
                  </linearGradient>
                  <linearGradient id="line-grad-4" x1="250" y1="250" x2="150" y2="410" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(6, 182, 212, 0.8)" />
                    <stop offset="1" stopColor="rgba(6, 182, 212, 0.05)" />
                  </linearGradient>
                </defs>

                {/* Ambient static line glows */}
                <path d="M 250 250 Q 180 160 150 80" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="4" />
                <path d="M 250 250 Q 320 160 350 80" stroke="rgba(79, 70, 229, 0.12)" strokeWidth="4" />
                <path d="M 250 250 Q 310 275 350 280" stroke="rgba(37, 99, 235, 0.12)" strokeWidth="4" />
                <path d="M 250 250 Q 190 325 150 410" stroke="rgba(6, 182, 212, 0.12)" strokeWidth="4" />

                {/* Connection Line 1: Internship (Top Left) */}
                <motion.path
                  d="M 250 250 Q 180 160 150 80"
                  stroke="url(#line-grad-1)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 250 250 Q 180 160 150 80"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                />

                {/* Connection Line 2: Hackathon (Top Right) */}
                <motion.path
                  d="M 250 250 Q 320 160 350 80"
                  stroke="url(#line-grad-2)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 250 250 Q 320 160 350 80"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'linear' }}
                />

                {/* Connection Line 3: Food Offer (Middle Right) */}
                <motion.path
                  d="M 250 250 Q 310 275 350 280"
                  stroke="url(#line-grad-3)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.7, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 250 250 Q 310 275 350 280"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: 'linear' }}
                />

                {/* Connection Line 4: Tech Event (Bottom Left) */}
                <motion.path
                  d="M 250 250 Q 190 325 150 410"
                  stroke="url(#line-grad-4)"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 250 250 Q 190 325 150 410"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                />
              </svg>

              {/* Center Location Pin */}
              <motion.div
                className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30"
                animate={{
                  y: [0, -3, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              >
                {/* Live GPS Expanding Pulse Rings */}
                <div className="absolute -inset-6 pointer-events-none">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary-theme/30 bg-primary-theme/5"
                    animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, ease: 'easeOut' }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-secondary-theme/15 bg-secondary-theme/5"
                    animate={{ scale: [1, 2.8], opacity: [0.4, 0] }}
                    transition={{ repeat: Infinity, duration: 3.2, delay: 1.6, ease: 'easeOut' }}
                  />
                </div>

                {/* Location pin card wrapper */}
                <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.08)] flex items-center justify-center hover:border-primary-theme/35 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary-theme animate-bounce" />
                </div>
              </motion.div>

              {/* CARD 1: Internship (Top Left) */}
              <motion.div
                className="absolute top-[8%] left-[4%] w-[260px] z-20 pointer-events-auto"
                style={{
                  x: depth1X,
                  y: depth1Y,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ x: -120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 75, damping: 15, delay: 0.1 }}
              >
                <motion.div
                  className="p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 flex items-center space-x-3 text-left cursor-pointer hover:border-primary-theme/20"
                  animate={{ y: [0, -7, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 6,
                    rotateY: -6,
                    z: 20,
                    boxShadow: '0 20px 45px rgba(37,99,235,0.06)',
                  }}
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex-shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-bold tracking-wider text-[#64748B] uppercase">INTERNSHIP</span>
                    <h4 className="text-xs font-black text-[#0F172A] mt-0.5 truncate">Frontend Developer</h4>
                    <p className="text-[10px] text-[#64748B] mt-0.5 truncate">Stripe HQ • 0.5 km away</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CARD 2: Hackathon (Top Right) */}
              <motion.div
                className="absolute top-[8%] right-[4%] w-[260px] z-20 pointer-events-auto"
                style={{
                  x: depth2X,
                  y: depth2Y,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 75, damping: 15, delay: 0.2 }}
              >
                <motion.div
                  className="p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 flex items-center space-x-3 text-left cursor-pointer hover:border-secondary-theme/20"
                  animate={{ y: [0, -9, 0] }}
                  transition={{ repeat: Infinity, duration: 4.4, delay: 0.4, ease: 'easeInOut' }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 6,
                    rotateY: -6,
                    z: 20,
                    boxShadow: '0 20px 45px rgba(79,70,229,0.06)',
                  }}
                >
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-[#4F46E5] border border-indigo-100 flex-shrink-0">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-bold tracking-wider text-[#64748B] uppercase">HACKATHON</span>
                    <h4 className="text-xs font-black text-[#0F172A] mt-0.5 truncate">AI Sprint 2026</h4>
                    <p className="text-[10px] text-[#64748B] mt-0.5 truncate">Innovation Hub • 1.4 km away</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CARD 3: Food Offer (Middle Right) */}
              <motion.div
                className="absolute top-[48%] right-[4%] w-[260px] z-20 pointer-events-auto"
                style={{
                  x: depth4X,
                  y: depth4Y,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 75, damping: 15, delay: 0.3 }}
              >
                <motion.div
                  className="p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 flex items-center space-x-3 text-left cursor-pointer hover:border-primary-theme/20"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.6, delay: 0.8, ease: 'easeInOut' }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 6,
                    rotateY: -6,
                    z: 20,
                    boxShadow: '0 20px 45px rgba(37,99,235,0.06)',
                  }}
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-100 flex-shrink-0">
                    <Utensils className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-bold tracking-wider text-[#64748B] uppercase">FOOD OFFER</span>
                    <h4 className="text-xs font-black text-[#0F172A] mt-0.5 truncate">Exclusive Lunch Offer</h4>
                    <p className="text-[10px] text-[#64748B] mt-0.5 truncate">Burger House • 0.3 km away</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CARD 4: Tech Event (Bottom Left) */}
              <motion.div
                className="absolute bottom-[10%] left-[4%] w-[260px] z-20 pointer-events-auto"
                style={{
                  x: depth3X,
                  y: depth3Y,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ x: -100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 75, damping: 15, delay: 0.4 }}
              >
                <motion.div
                  className="p-4 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-300 flex items-center space-x-3 text-left cursor-pointer hover:border-accent-theme/20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5.2, delay: 1.2, ease: 'easeInOut' }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 6,
                    rotateY: -6,
                    z: 20,
                    boxShadow: '0 20px 45px rgba(6,182,212,0.06)',
                  }}
                >
                  <div className="p-2.5 rounded-xl bg-cyan-50 text-[#06B6D4] border border-cyan-100 flex-shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] font-bold tracking-wider text-[#64748B] uppercase">TECH EVENT</span>
                    <h4 className="text-xs font-black text-[#0F172A] mt-0.5 truncate">React Meetup</h4>
                    <p className="text-[10px] text-[#64748B] mt-0.5 truncate">Co-Lab Space • 2.0 km away</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
