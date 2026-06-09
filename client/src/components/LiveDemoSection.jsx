import React, { useState, useMemo } from 'react';
import { Search, MapPin, Briefcase, Trophy, Utensils, Calendar, GraduationCap, Star, CheckCircle2, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock database matching requested startup opportunities
const OPPORTUNITIES = [
  {
    id: 1,
    name: 'Frontend Internship',
    type: 'internship',
    distance: '0.8 km',
    company: 'Stripe HQ, Tech District',
    rating: 4.9,
    actionLabel: 'Apply',
    successMsg: 'Application Submitted! Your resume has been forwarded to HR.',
    x: 180,
    y: 110,
    icon: Briefcase,
    color: 'text-primary-theme',
    bgColor: 'bg-blue-50 border-blue-100',
  },
  {
    id: 2,
    name: 'AI Hackathon',
    type: 'hackathon',
    distance: '1.4 km',
    company: 'Innovation Hub',
    rating: 5.0,
    actionLabel: 'Register',
    successMsg: 'Registered! Team details and entry QR code sent to email.',
    x: 290,
    y: 170,
    icon: Trophy,
    color: 'text-secondary-theme',
    bgColor: 'bg-indigo-50 border-indigo-100',
  },
  {
    id: 3,
    name: 'Restaurant Offer',
    type: 'food',
    distance: '0.5 km',
    company: 'Burger House, Campus Way',
    rating: 4.7,
    actionLabel: 'Reserve',
    successMsg: 'Reserved! Claim Code: NEAR50 active for 2 hours.',
    x: 120,
    y: 260,
    icon: Utensils,
    color: 'text-accent-theme',
    bgColor: 'bg-cyan-50 border-cyan-100',
  },
  {
    id: 4,
    name: 'Tech Meetup',
    type: 'event',
    distance: '2.0 km',
    company: 'Co-Lab Space',
    rating: 4.8,
    actionLabel: 'Save',
    successMsg: 'Saved! Tech Meetup added to your favorites calendar.',
    x: 350,
    y: 220,
    icon: Calendar,
    color: 'text-primary-theme',
    bgColor: 'bg-blue-50 border-blue-100',
  },
  {
    id: 5,
    name: 'React Workshop',
    type: 'workshop',
    distance: '1.1 km',
    company: 'Lecture Hall B',
    rating: 4.6,
    actionLabel: 'Save',
    successMsg: 'Saved! React Workshop added to your study calendar.',
    x: 210,
    y: 320,
    icon: GraduationCap,
    color: 'text-secondary-theme',
    bgColor: 'bg-indigo-50 border-indigo-100',
  },
];

export default function LiveDemoSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(OPPORTUNITIES[0]); // default selected Frontend Internship
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Interactive transaction states
  const [loadingId, setLoadingId] = useState(null);
  const [completedActions, setCompletedActions] = useState({}); // Stores success flags per item ID
  const [savedCount, setSavedCount] = useState(0);

  const categories = [
    { id: 'all', label: 'All Openings' },
    { id: 'internship', label: 'Internships' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'food', label: 'Food Offers' },
    { id: 'event', label: 'Events' },
    { id: 'workshop', label: 'Workshops' },
  ];

  // Filter logic
  const filteredItems = useMemo(() => {
    return OPPORTUNITIES.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.type.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleActionClick = (item, e) => {
    e.stopPropagation();
    
    // If already completed, do nothing
    if (completedActions[item.id]) return;

    setLoadingId(item.id);
    
    // Simulate API delay
    setTimeout(() => {
      setLoadingId(null);
      setCompletedActions(prev => ({ ...prev, [item.id]: true }));
      if (item.actionLabel.includes('Save')) {
        setSavedCount(c => c + 1);
      }
    }, 1200);
  };

  return (
    <section id="demo" className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary-theme/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-secondary-theme/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-theme/10 text-xs font-semibold text-primary-theme uppercase tracking-wider mb-4">
            <span>Interactive Portal Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#0F172A] mb-4">
            Try the Live Demo
          </h2>
          <p className="text-[#64748B] font-normal text-base sm:text-lg">
            Search active opportunities below. Click to Apply, Register, Reserve, or Save to see dynamic responses.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Search & Cards */}
          <div className="lg:col-span-5 flex flex-col bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-6">
            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#64748B]" />
              <input
                type="text"
                placeholder="Find opportunities near me..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-primary-theme focus:ring-1 focus:ring-primary-theme transition-all"
              />
            </div>

            {/* Category selection */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedItem(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold shrink-0 cursor-pointer transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? 'bg-primary-theme text-white border-transparent shadow-sm'
                      : 'bg-[#F8FAFC] text-[#64748B] border-[#E2E8F0] hover:bg-[#E2E8F0]/30 hover:text-[#0F172A]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Results metadata */}
            <div className="flex items-center justify-between text-xs text-[#64748B] mb-4 px-1">
              <span>{filteredItems.length} matching positions</span>
              <span className="flex items-center space-x-1.5 font-semibold text-primary-theme">
                <Bookmark className="h-3.5 w-3.5 fill-primary-theme/10" />
                <span>Saved: {savedCount}</span>
              </span>
            </div>

            {/* Results Cards List */}
            <div className="flex-1 overflow-y-auto max-h-[380px] space-y-3 pr-1">
              <AnimatePresence>
                {filteredItems.map((item) => {
                  const Icon = item.icon;
                  const isSelected = selectedItem?.id === item.id;
                  const isLoading = loadingId === item.id;
                  const isSuccess = completedActions[item.id];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      layout
                      onClick={() => setSelectedItem(item)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? 'bg-blue-50/20 border-primary-theme/30 shadow-sm'
                          : 'bg-white hover:bg-[#F8FAFC] border-[#E2E8F0]'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        {/* Icon Block */}
                        <div className={`p-2.5 rounded-lg ${item.bgColor} ${item.color} border border-transparent group-hover:scale-105 transition-transform flex-shrink-0`}>
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        {/* Title & Metadata */}
                        <div className="min-w-0 text-left">
                          <h4 className="text-sm font-bold text-[#0F172A] truncate">{item.name}</h4>
                          <p className="text-[11px] text-[#64748B] mt-0.5 truncate">{item.company}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center text-primary-theme">
                              <Star className="h-3 w-3 fill-current" />
                              <span className="text-[10px] font-bold ml-0.5">{item.rating}</span>
                            </div>
                            <span className="text-[10px] text-[#64748B] font-mono">{item.distance}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Action Button */}
                      <div className="flex-shrink-0 ml-2">
                        <button
                          onClick={(e) => handleActionClick(item, e)}
                          disabled={isLoading || isSuccess}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                            isSuccess
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                              : 'bg-primary-theme hover:bg-primary-hover text-white shadow-sm'
                          }`}
                        >
                          {isLoading ? (
                            <span className="flex items-center space-x-1.5">
                              <span className="h-2.5 w-2.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                              <span>...</span>
                            </span>
                          ) : isSuccess ? (
                            <span className="flex items-center space-x-1">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              <span>Done</span>
                            </span>
                          ) : (
                            item.actionLabel
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {filteredItems.length === 0 && (
                <div className="text-center py-14 bg-[#F8FAFC] border border-dashed border-[#E2E8F0] rounded-xl">
                  <MapPin className="h-8 w-8 text-[#64748B] mx-auto mb-3" />
                  <p className="text-[#0F172A] text-sm font-semibold">No active openings found</p>
                  <p className="text-[#64748B] text-xs mt-1">Try filtering for internships, hackathons, or food.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel: Simulated Interactive Map Canvas */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm overflow-hidden relative min-h-[420px] flex flex-col">
            {/* Live GPS badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-theme"></span>
              </span>
              <span className="text-[10px] font-bold text-[#0F172A] font-mono">OPPORTUNITY RADAR</span>
            </div>

            {/* Map rendering */}
            <div className="flex-1 relative flex items-center justify-center p-4 bg-[#F8FAFC]">
              <svg className="w-full h-full min-h-[350px]" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                {/* Grid */}
                <defs>
                  <pattern id="demo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#demo-grid)" />

                {/* City Streets paths */}
                <path d="M 40 120 L 460 120 M 40 220 L 460 220 M 40 320 L 460 320" stroke="#E2E8F0" strokeWidth="3" opacity="0.4" />
                <path d="M 120 40 L 120 360 M 260 40 L 260 360 M 400 40 L 400 360" stroke="#E2E8F0" strokeWidth="3" opacity="0.4" />

                {/* User position */}
                <g transform="translate(260, 220)">
                  <circle r="16" fill="rgba(37, 99, 235, 0.08)" className="animate-pulse" />
                  <circle r="6" fill="#2563EB" />
                  <circle r="2" fill="#fff" />
                </g>

                {/* Connection Line to selection */}
                {selectedItem && (
                  <motion.path
                    d={`M 260 220 L ${selectedItem.x} ${selectedItem.y}`}
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2"
                    strokeDasharray="4, 4"
                    initial={{ strokeDashoffset: 50 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}

                {/* Pins */}
                {filteredItems.map((item) => {
                  const isSelected = selectedItem?.id === item.id;
                  const isSuccess = completedActions[item.id];
                  return (
                    <g
                      key={item.id}
                      transform={`translate(${item.x}, ${item.y})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedItem(item)}
                    >
                      <circle
                        r={isSelected ? 16 : 10}
                        fill={isSuccess ? 'rgba(16, 185, 129, 0.15)' : isSelected ? 'rgba(37, 99, 235, 0.15)' : 'rgba(37, 99, 235, 0.04)'}
                        className={isSelected ? 'animate-ping' : ''}
                        style={{ transformOrigin: 'center' }}
                      />
                      <circle
                        r={isSelected ? 6 : 4}
                        fill={isSuccess ? '#10B981' : isSelected ? '#2563EB' : '#64748B'}
                        className="transition-all duration-200"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Bottom detail slide card */}
              <AnimatePresence>
                {selectedItem && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-md flex flex-col space-y-3 text-left z-10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${selectedItem.bgColor} ${selectedItem.color} border border-transparent`}>
                          <selectedItem.icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-[#0F172A]">{selectedItem.name}</h4>
                          <p className="text-[10px] text-[#64748B] mt-0.5">{selectedItem.company}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-primary-theme">{selectedItem.distance} away</span>
                    </div>

                    {/* Success or Action messaging */}
                    {completedActions[selectedItem.id] ? (
                      <motion.div 
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center space-x-2 text-xs"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 flex-shrink-0" />
                        <span className="font-normal leading-snug">{selectedItem.successMsg}</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-3 mt-1">
                        <span className="text-[10px] text-[#64748B] italic">Sandbox action will trigger simulation</span>
                        <button
                          onClick={(e) => handleActionClick(selectedItem, e)}
                          disabled={loadingId === selectedItem.id}
                          className="px-4 py-2 bg-primary-theme hover:bg-primary-hover text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer transition-colors"
                        >
                          {loadingId === selectedItem.id ? 'Processing...' : `${selectedItem.actionLabel} Opportunity`}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
