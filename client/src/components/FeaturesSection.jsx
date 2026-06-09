import React from 'react';
import { Compass, Briefcase, Trophy, Utensils, Sparkles, Lock, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: Compass,
      title: 'Smart Discovery',
      description: 'Discover nearby student events, internships, cafe spaces, and discount opportunities tailored to you.',
      textColor: 'text-primary-theme',
      bgColor: 'bg-blue-50 border-blue-100',
    },
    {
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'High-precision geolocation services calculate precise walking distances and coordinates for every opening.',
      textColor: 'text-secondary-theme',
      bgColor: 'bg-indigo-50 border-indigo-100',
    },
    {
      icon: Briefcase,
      title: 'Internship Applications',
      description: 'Apply directly to local tech startups and businesses, forwarding resumes directly through our API pipeline.',
      textColor: 'text-accent-theme',
      bgColor: 'bg-cyan-50 border-cyan-100',
    },
    {
      icon: Trophy,
      title: 'Hackathon Registration',
      description: 'Browse coding sprints, pitch competitions, and developer sprints. Reserve team spaces and track registrations.',
      textColor: 'text-primary-theme',
      bgColor: 'bg-blue-50 border-blue-100',
    },
    {
      icon: Calendar,
      title: 'Event Discovery',
      description: 'Find local meetups, conferences, workshops, and networking socials. Keep your schedule synced dynamically.',
      textColor: 'text-secondary-theme',
      bgColor: 'bg-indigo-50 border-indigo-100',
    },
    {
      icon: Utensils,
      title: 'Food Reservations',
      description: 'Instantly reserve student food deals, lunch specials, and cafe discounts near your campus or workplace.',
      textColor: 'text-accent-theme',
      bgColor: 'bg-cyan-50 border-cyan-100',
    },
    {
      icon: Sparkles,
      title: 'Personalized Recommendations',
      description: 'Interest-based scoring parses your tags (e.g., AI, design) to construct a highly personalized dashboard feed.',
      textColor: 'text-primary-theme',
      bgColor: 'bg-blue-50 border-blue-100',
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Industry-standard JWT tokens and bcrypt encryption protect your user details and location history data.',
      textColor: 'text-secondary-theme',
      bgColor: 'bg-indigo-50 border-indigo-100',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const hoverGlows = [
    { // Blue
      borderColor: 'rgba(37, 99, 235, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(37, 99, 235, 0.08)',
    },
    { // Indigo
      borderColor: 'rgba(79, 70, 229, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(79, 70, 229, 0.08)',
    },
    { // Cyan
      borderColor: 'rgba(6, 182, 212, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(6, 182, 212, 0.08)',
    },
  ];

  return (
    <section id="features" className="py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-theme/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-theme/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-theme/10 text-xs font-semibold text-primary-theme uppercase tracking-wider mb-4"
          >
            <span>Platform Capabilities</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#0F172A] mb-4"
          >
            Startup-Level Infrastructure
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#64748B] font-normal text-base sm:text-lg"
          >
            Engineered to show production-ready features: precise location intelligence, personalized scoring, and direct API actions.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const glowIndex = idx % 3;
            return (
              <motion.div 
                key={idx}
                variants={cardVariants}
                className="p-8 bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 rounded-[24px] relative group cursor-pointer flex flex-col items-start h-[310px] shadow-[0_15px_35px_rgba(0,0,0,0.015),0_5px_15px_rgba(0,0,0,0.008)] perspective-1000"
                whileHover={{
                  y: -8,
                  rotateX: 2.5,
                  rotateY: -2.5,
                  boxShadow: hoverGlows[glowIndex].shadow,
                  borderColor: hoverGlows[glowIndex].borderColor,
                }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Icon Wrapper */}
                <div className={`p-3.5 rounded-[14px] ${feature.bgColor} ${feature.textColor} border flex-shrink-0 mb-6 transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Copy */}
                <div className="text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold font-display text-[#0F172A] mb-3 group-hover:text-primary-theme transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#64748B] font-normal text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
