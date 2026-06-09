import React, { useState } from 'react';
import { Briefcase, Trophy, Calendar, GraduationCap, Utensils, MapPin, Sparkles, CornerDownLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OpportunitiesSection() {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const hoverGlows = {
    internships: {
      borderColor: 'rgba(37, 99, 235, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(37, 99, 235, 0.08)',
    },
    hackathons: {
      borderColor: 'rgba(79, 70, 229, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(79, 70, 229, 0.08)',
    },
    events: {
      borderColor: 'rgba(6, 182, 212, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(6, 182, 212, 0.08)',
    },
    workshops: {
      borderColor: 'rgba(37, 99, 235, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(37, 99, 235, 0.08)',
    },
    food: {
      borderColor: 'rgba(79, 70, 229, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(79, 70, 229, 0.08)',
    },
    cafes: {
      borderColor: 'rgba(6, 182, 212, 0.25)',
      shadow: '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 30px rgba(6, 182, 212, 0.08)',
    },
  };

  const categories = [
    {
      id: 'internships',
      icon: Briefcase,
      title: 'Internships',
      count: '120+ Openings',
      description: 'Discover local and remote internship roles across tech, design, marketing, and management to kickstart your career.',
      textColor: 'text-primary-theme',
      bgColor: 'bg-blue-50 border-blue-100',
      details: [
        { title: 'Frontend Developer', company: 'Stripe HQ', loc: '0.5 km' },
        { title: 'UX/UI Design Intern', company: 'Airbnb Hub', loc: '1.2 km' },
        { title: 'Software Engineer', company: 'Linear Corp', loc: '0.9 km' }
      ]
    },
    {
      id: 'hackathons',
      icon: Trophy,
      title: 'Hackathons',
      count: '15+ Events',
      description: 'Find coding competitions and builder sprints near you. Form teams, build software prototypes, and pitch to recruiters.',
      textColor: 'text-secondary-theme',
      bgColor: 'bg-indigo-50 border-indigo-100',
      details: [
        { title: 'AI Build Sprint', company: 'Innovation Center', loc: '1.4 km' },
        { title: 'Global Web3 Hack', company: 'Co-Lab Space', loc: '2.0 km' },
        { title: 'Bay Area Codefest', company: 'City Hall', loc: '0.7 km' }
      ]
    },
    {
      id: 'events',
      icon: Calendar,
      title: 'Events & Meetups',
      count: '45+ Happening',
      description: 'Attend tech summits, developer meetups, student networking nights, and community gatherings in your city.',
      textColor: 'text-accent-theme',
      bgColor: 'bg-cyan-50 border-cyan-100',
      details: [
        { title: 'React Developer Meetup', company: 'Campus Center', loc: '1.1 km' },
        { title: 'Product Designers Social', company: 'Town Square Coffee', loc: '0.6 km' },
        { title: 'Bay Area Tech Summit', company: 'Hotel California', loc: '2.5 km' }
      ]
    },
    {
      id: 'workshops',
      icon: GraduationCap,
      title: 'Workshops & Bootcamps',
      count: '18+ Active Labs',
      description: 'Upgrade your skillset with hands-on labs in React, AI development, Figma design systems, and professional resume building.',
      textColor: 'text-primary-theme',
      bgColor: 'bg-blue-50 border-blue-100',
      details: [
        { title: 'React Essentials Lab', company: 'Lecture Hall B', loc: '1.1 km' },
        { title: 'Prompt Engineering Lab', company: 'AI Labs Centre', loc: '0.5 km' },
        { title: 'Tech Interview Prep', company: 'Career Hall', loc: '0.3 km' }
      ]
    },
    {
      id: 'food',
      icon: Utensils,
      title: 'Food Offers & Discounts',
      count: '60+ Active Deals',
      description: 'Unlock exclusive student discounts, BOGO lunch deals, and local cafe savings near your campus.',
      textColor: 'text-secondary-theme',
      bgColor: 'bg-indigo-50 border-indigo-100',
      details: [
        { title: '50% Off Lunch Deals', company: 'Burger House', loc: '0.3 km' },
        { title: 'Free Pastry w/ Coffee', company: 'Campus Cafe', loc: '0.1 km' },
        { title: 'BOGO Pizza Vouchers', company: 'Pizza Palace', loc: '0.8 km' }
      ]
    },
    {
      id: 'cafes',
      icon: MapPin,
      title: 'Cafes & Study Spaces',
      count: '25+ Verified Spots',
      description: 'Locate student study spaces and cafes equipped with fast Wi-Fi, power outlets, and special student menu deals.',
      textColor: 'text-accent-theme',
      bgColor: 'bg-cyan-50 border-cyan-100',
      details: [
        { title: 'Quiet Study Suites', company: 'Library Suite B', loc: '0.2 km' },
        { title: 'The Roast Coffee Co.', company: 'Town Square', loc: '0.6 km' },
        { title: 'Student Tech Lounge', company: 'Campus West', loc: '0.4 km' }
      ]
    },
  ];

  const handleCardClick = (id) => {
    setFlippedCardId(prev => prev === id ? null : id);
  };

  return (
    <section id="opportunities" className="py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Soft Background Overlays */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-theme/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-theme/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-theme/10 text-xs font-semibold text-primary-theme uppercase tracking-wider mb-4">
            <span>Opportunity Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#0F172A] mb-4">
            Explore What's Happening Around You
          </h2>
          <p className="text-[#64748B] font-normal text-base sm:text-lg">
            Nearify indexes student internships, code sprints, workshops, local food discounts, and study spots in real-time.
          </p>
          <p className="text-xs text-primary-theme font-semibold mt-4 flex items-center justify-center gap-1.5 animate-pulse">
            <Sparkles className="h-4 w-4" />
            <span>Click any category card to flip and view live openings</span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isFlipped = flippedCardId === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleCardClick(cat.id)}
                className="perspective-1000 w-full h-[430px] cursor-pointer"
              >
                {/* 3D Card Inner */}
                <motion.div
                  className={`w-full h-full transform-style-3d relative rounded-[24px] ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  transition={{ type: 'spring', stiffness: 150, damping: 18 }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  
                  {/* Front Side */}
                  <motion.div
                    className="absolute inset-0 backface-hidden bg-white/80 backdrop-blur-md border border-[#E2E8F0]/80 p-10 rounded-[24px] flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.015),0_5px_15px_rgba(0,0,0,0.008)]"
                    whileHover={{
                      y: -10,
                      rotateX: 3,
                      rotateY: -3,
                      boxShadow: hoverGlows[cat.id].shadow,
                      borderColor: hoverGlows[cat.id].borderColor,
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  >
                    <div>
                      {/* Category Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className={`p-3.5 rounded-[14px] ${cat.bgColor} ${cat.textColor} border flex-shrink-0 transition-transform duration-300 hover:scale-105`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className={`text-[10px] font-bold tracking-wide px-3.5 py-1.5 rounded-full border ${cat.bgColor} ${cat.textColor}`}>
                          {cat.count}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-[#0F172A] mb-4">
                        {cat.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#64748B] font-normal text-sm leading-relaxed mb-8 text-left">
                        {cat.description}
                      </p>
                    </div>

                    {/* Interaction Indicator */}
                    <div className="flex items-center space-x-2 text-xs font-semibold text-primary-theme pt-2 group">
                      <span>Click to View Openings</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>

                  {/* Back Side (Details face) */}
                  <div
                    className="absolute inset-0 backface-hidden rotate-y-180 bg-white/90 backdrop-blur-md border border-[#E2E8F0]/80 shadow-[0_15px_35px_rgba(0,0,0,0.015),0_5px_15px_rgba(0,0,0,0.008)] p-10 rounded-[24px] flex flex-col justify-between"
                  >
                    <div>
                      {/* Back Side Header */}
                      <div className="flex items-center justify-between border-b border-[#E2E8F0]/80 pb-6 mb-6 text-left">
                        <div className="flex items-center space-x-2">
                          <div className={`p-2 rounded-lg ${cat.bgColor} ${cat.textColor} border`}>
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <span className="text-sm font-bold text-[#0F172A]">{cat.title}</span>
                        </div>
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${cat.textColor}`}>Live Openings</span>
                      </div>

                      {/* Openings list */}
                      <div className="space-y-4.5 text-left">
                        {cat.details.map((detail, index) => (
                          <div key={index} className="flex items-start justify-between text-xs py-2 border-b border-[#F8FAFC] last:border-b-0">
                            <div>
                              <p className="font-bold text-[#0F172A]">{detail.title}</p>
                              <p className="text-[10px] text-[#64748B] mt-1">{detail.company}</p>
                            </div>
                            <span className={`text-[10px] font-mono font-semibold shrink-0 px-2.5 py-1 rounded-full border ${cat.bgColor} ${cat.textColor}`}>
                              {detail.loc} away
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Back Interaction Indicator */}
                    <div className="flex items-center justify-between text-[10px] text-[#64748B] border-t border-[#E2E8F0]/80 pt-5 mt-auto">
                      <span className="flex items-center gap-1 font-semibold text-primary-theme">
                        <CornerDownLeft className="h-3.5 w-3.5" />
                        <span>Flip Back</span>
                      </span>
                      <span className="flex items-center gap-1 font-semibold hover:text-primary-theme transition-colors">
                        <span>Details Portal</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
