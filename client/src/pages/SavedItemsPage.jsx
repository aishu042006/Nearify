import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Trophy, 
  Utensils, 
  Clock, 
  Share2, 
  Trash2, 
  ExternalLink, 
  Star, 
  ChevronDown, 
  Sparkles, 
  Inbox,
  ArrowRight
} from 'lucide-react';

export default function SavedItemsPage({
  opportunities,
  savedIds,
  toggleBookmark,
  appliedIds,
  registeredEvents,
  reservedRestaurants,
  setViewingInternship,
  setSelectedOpp,
  setActiveTab,
  executeRegisterEvent,
  renderOpportunityLogo
}) {
  // Tabs & Search State
  const [activeSubTab, setActiveSubTab] = useState('All'); // 'All' | 'Internships' | 'Hackathons' | 'Events' | 'Restaurants'
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('all'); // 'all' | 'today' | 'week' | 'month'
  const [locationFilter, setLocationFilter] = useState('all'); // 'all' | 'remote' | 'hybrid' | 'on-site'
  const [shareTooltipId, setShareTooltipId] = useState(null);

  // Sub-tabs list
  const subTabs = [
    { name: 'All', icon: Sparkles, count: savedIds.size },
    { name: 'Internships', icon: Briefcase, count: opportunities.filter(o => savedIds.has(o.id) && o.type === 'internship').length },
    { name: 'Hackathons', icon: Trophy, count: opportunities.filter(o => savedIds.has(o.id) && o.type === 'hackathon').length },
    { name: 'Events', icon: Calendar, count: opportunities.filter(o => savedIds.has(o.id) && (o.type === 'event' || o.type === 'workshop')).length },
    { name: 'Restaurants', icon: Utensils, count: opportunities.filter(o => savedIds.has(o.id) && o.type === 'food').length }
  ];

  // Map category tab string to database opportunity types
  const getSubTabFiltered = (items) => {
    if (activeSubTab === 'All') return items;
    if (activeSubTab === 'Internships') return items.filter(o => o.type === 'internship');
    if (activeSubTab === 'Hackathons') return items.filter(o => o.type === 'hackathon');
    if (activeSubTab === 'Events') return items.filter(o => o.type === 'event' || o.type === 'workshop');
    if (activeSubTab === 'Restaurants') return items.filter(o => o.type === 'food');
    return items;
  };

  // Extract list of all saved items
  const savedItems = useMemo(() => {
    return opportunities.filter(o => savedIds.has(o.id));
  }, [opportunities, savedIds]);

  // Compute filtered list based on tabs, search and dropdowns
  const finalFilteredItems = useMemo(() => {
    let list = getSubTabFiltered(savedItems);

    // Text search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(o => 
        o.title.toLowerCase().includes(q) ||
        o.organizer.toLowerCase().includes(q) ||
        (o.skills && o.skills.some(s => s.toLowerCase().includes(q))) ||
        (o.location && o.location.toLowerCase().includes(q))
      );
    }

    // Location Filter
    if (locationFilter !== 'all') {
      list = list.filter(o => {
        if (!o.location) return false;
        const loc = o.location.toLowerCase();
        if (locationFilter === 'remote') return loc.includes('remote') || (o.mode && o.mode.toLowerCase().includes('online'));
        if (locationFilter === 'hybrid') return loc.includes('hybrid');
        if (locationFilter === 'on-site') return !loc.includes('remote') && !loc.includes('online');
        return true;
      });
    }

    // Date/Deadline Filter
    if (dateFilter !== 'all') {
      list = list.filter(o => {
        const deadlineHrs = (o.deadlineHours || '').toLowerCase();
        const dateStr = (o.date || o.deadline || '').toLowerCase();

        if (dateFilter === 'today') {
          return deadlineHrs.includes('hour') || deadlineHrs.includes('today') || dateStr.includes('today') || dateStr.includes('tonight');
        }
        if (dateFilter === 'week') {
          return deadlineHrs.includes('hour') || deadlineHrs.includes('tomorrow') || deadlineHrs.includes('days left') || dateStr.includes('tomorrow') || dateStr.includes('week') || dateStr.includes('june 1'); // approximation
        }
        if (dateFilter === 'month') {
          return true; // most saved items are within the month
        }
        return true;
      });
    }

    return list;
  }, [savedItems, activeSubTab, searchQuery, dateFilter, locationFilter]);

  // Get total match rate helper
  const getMatchRate = (opp) => {
    return opp.matchRate || 85;
  };

  // Copy to clipboard share action
  const handleShare = (opp, e) => {
    if (e) e.stopPropagation();
    const shareUrl = `${window.location.origin}/opportunity/${opp.id}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setShareTooltipId(opp.id);
      setTimeout(() => setShareTooltipId(null), 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  // Card view action router
  const handleCardClick = (opp) => {
    if (opp.type === 'internship') {
      setViewingInternship(opp);
    } else {
      setSelectedOpp(opp);
    }
  };

  // Tab transition animations
  const tabContentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex-grow overflow-y-auto px-4 md:px-8 py-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-8 text-left bg-[#F8FAFC]">
      {/* 1. PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="space-y-1.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg border border-blue-100/60">
              <Star className="h-4 w-4 fill-current" />
            </span>
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">Personal Library</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Saved Items</h1>
          <p className="text-sm text-slate-500 font-medium max-w-xl">
            Access all your saved opportunities, events, hackathons, and restaurants in one place.
          </p>
        </div>
        <div className="shrink-0 relative z-10">
          <div className="px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center md:items-end justify-center shadow-sm">
            <span className="text-3xl font-black text-slate-800 leading-none">{savedItems.length}</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">Saved Opportunities</span>
          </div>
        </div>
      </div>

      {/* 2. CATEGORY TABS & FILTER BAR */}
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 border-b border-slate-200 pb-2">
          {/* Modern Tab Navigation */}
          <div className="flex items-center space-x-1.5 overflow-x-auto py-1.5 scrollbar-none">
            {subTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveSubTab(tab.name)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-colors ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSavedSubTabUnderlay"
                      className="absolute inset-0 bg-[#2563EB] rounded-xl shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="h-3.5 w-3.5 relative z-10" />
                  <span className="relative z-10">{tab.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full relative z-10 border transition-all ${
                    isActive ? 'bg-white/20 border-white/10 text-white font-black' : 'bg-slate-100 border-slate-200 text-slate-400 font-semibold'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Dropdown Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search saved opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] shadow-sm transition-all"
              />
            </div>

            {/* Dropdown Filters */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              {/* Location Filter */}
              <div className="relative shrink-0">
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-slate-600 focus:outline-none focus:border-[#2563EB] shadow-sm cursor-pointer"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote / Online</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="on-site">On-Site</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              </div>

              {/* Date Filter */}
              <div className="relative shrink-0">
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-slate-600 focus:outline-none focus:border-[#2563EB] shadow-sm cursor-pointer"
                >
                  <option value="all">All Deadlines</option>
                  <option value="today">Expiring Today</option>
                  <option value="week">Expiring This Week</option>
                  <option value="month">Expiring This Month</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC CONTENT GRID / EMPTY STATE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSubTab + searchQuery + dateFilter + locationFilter}
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          {finalFilteredItems.length === 0 ? (
            /* EMPTY STATE */
            <div className="py-20 text-center flex flex-col items-center justify-center bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm max-w-3xl mx-auto px-6">
              {/* Illustration of empty box */}
              <div className="relative w-36 h-36 mb-6 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-full">
                <div className="absolute inset-0 bg-blue-50/40 rounded-full scale-110 animate-pulse" />
                <Inbox className="h-16 w-16 text-slate-400/80 stroke-[1.2]" />
                <Star className="h-6 w-6 text-yellow-400 fill-current absolute top-3 right-3 animate-bounce" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">No saved opportunities yet.</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
                {searchQuery || dateFilter !== 'all' || locationFilter !== 'all'
                  ? "We couldn't find any saved items matching your active search filters. Try resetting them!"
                  : `Browse Nearify's curated list of local events, student jobs, hackathons, and food discount offers to save your favorites here.`}
              </p>
              <div className="mt-8 flex gap-3">
                {(searchQuery || dateFilter !== 'all' || locationFilter !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setDateFilter('all');
                      setLocationFilter('all');
                    }}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Clear Filters
                  </button>
                )}
                <button
                  onClick={() => {
                    if (activeSubTab === 'Restaurants') {
                      setActiveTab('food');
                    } else if (activeSubTab === 'Internships') {
                      setActiveTab('internships');
                    } else if (activeSubTab === 'Hackathons') {
                      setActiveTab('hackathons');
                    } else if (activeSubTab === 'Events') {
                      setActiveTab('events');
                    } else {
                      setActiveTab('opportunities');
                    }
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#2563EB] hover:bg-blue-700 hover:shadow-[0_4px_12px_rgba(37,99,235,0.2)] flex items-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* SAVED ITEMS CARDS GRID */
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            >
              <AnimatePresence>
                {finalFilteredItems.map((opp) => (
                  <motion.div
                    key={opp.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15, transition: { duration: 0.2 } }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.04)] hover:border-slate-300 transition-all overflow-hidden relative flex flex-col justify-between group"
                  >
                    {/* Hover Quick Actions overlay */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      {/* Share Quick Action */}
                      <div className="relative">
                        <button
                          onClick={(e) => handleShare(opp, e)}
                          className="p-2 bg-white/95 backdrop-blur-md border border-slate-100 text-slate-500 hover:text-slate-800 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                          title="Share Link"
                        >
                          <Share2 className="h-3.5 w-3.5" />
                        </button>
                        {shareTooltipId === opp.id && (
                          <span className="absolute bottom-full right-0 mb-1.5 bg-slate-900 text-white text-[9px] font-bold py-1 px-2 rounded-lg whitespace-nowrap shadow-md z-30">
                            Copied Link!
                          </span>
                        )}
                      </div>

                      {/* Info Details Quick Action */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(opp);
                        }}
                        className="p-2 bg-white/95 backdrop-blur-md border border-slate-100 text-slate-500 hover:text-slate-800 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Open Details"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>

                      {/* Bookmark Unsave Action */}
                      <button
                        onClick={(e) => toggleBookmark(opp.id, e)}
                        className="p-2 bg-rose-50 border border-rose-100 text-rose-600 hover:bg-rose-100 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        title="Remove from Saved"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* render category-specific templates */}
                    {opp.type === 'internship' && (
                      <InternshipCard 
                        opp={opp} 
                        appliedIds={appliedIds} 
                        getMatchRate={getMatchRate}
                        handleCardClick={handleCardClick}
                        toggleBookmark={toggleBookmark}
                        renderOpportunityLogo={renderOpportunityLogo}
                      />
                    )}

                    {opp.type === 'hackathon' && (
                      <HackathonCard 
                        opp={opp} 
                        getMatchRate={getMatchRate}
                        handleCardClick={handleCardClick}
                        toggleBookmark={toggleBookmark}
                      />
                    )}

                    {(opp.type === 'event' || opp.type === 'workshop') && (
                      <EventCard 
                        opp={opp} 
                        registeredEvents={registeredEvents}
                        executeRegisterEvent={executeRegisterEvent}
                        handleCardClick={handleCardClick}
                        toggleBookmark={toggleBookmark}
                      />
                    )}

                    {opp.type === 'food' && (
                      <RestaurantCard 
                        opp={opp} 
                        reservedRestaurants={reservedRestaurants}
                        handleCardClick={handleCardClick}
                        toggleBookmark={toggleBookmark}
                      />
                    )}

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// -------------------------------------------------------------------------------------
// 1. INTERNSHIP CARD COMPONENT (LinkedIn Jobs Style)
// -------------------------------------------------------------------------------------
function InternshipCard({ 
  opp, 
  appliedIds, 
  getMatchRate, 
  handleCardClick, 
  toggleBookmark,
  renderOpportunityLogo
}) {
  const isApplied = appliedIds.has(opp.id);
  const match = getMatchRate(opp);

  return (
    <div className="flex flex-col justify-between h-full" onClick={() => handleCardClick(opp)}>
      {/* Upper Content */}
      <div className="p-6 space-y-4">
        {/* Brand Info Grid */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner">
            {renderOpportunityLogo ? renderOpportunityLogo(opp, "w-8 h-8 object-contain") : opp.logo}
          </div>
          <div className="min-w-0 flex-grow text-left">
            <h4 className="text-sm font-extrabold text-slate-800 leading-tight truncate group-hover:text-[#2563EB] transition-colors">{opp.title}</h4>
            <p className="text-xs text-slate-500 font-semibold truncate mt-0.5">{opp.organizer}</p>
          </div>
        </div>

        {/* Badges & Meta */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-blue-100 text-[#2563EB] bg-blue-50/50">
            Internship
          </span>
          <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5" />
            <span>{match}% Match</span>
          </span>
        </div>

        {/* Stipend & Skills Box */}
        <div className="grid grid-cols-2 gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500">
          <div className="text-left border-r border-slate-200/60 pr-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">STIPEND</span>
            <span className="text-slate-700 font-extrabold mt-1 block truncate">{opp.stipend || '₹25k/mo'}</span>
          </div>
          <div className="text-left pl-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SKILLS</span>
            <span className="text-slate-700 font-extrabold mt-1 block truncate">
              {opp.skills ? opp.skills.slice(0, 2).join(', ') : 'React, Node'}
            </span>
          </div>
        </div>

        {/* Short details */}
        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 text-left">
          {opp.detail}
        </p>
      </div>

      {/* Footer / Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-left text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[10px] font-bold truncate max-w-[120px]">{opp.location || 'Hybrid'}</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(opp.id, e);
            }}
            className="text-[10px] font-extrabold text-slate-400 hover:text-rose-500 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-rose-50/50"
          >
            Unsave
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(opp);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer hover:shadow-sm ${
              isApplied 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isApplied ? 'Applied' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------------------
// 2. HACKATHON CARD COMPONENT (Devfolio Style)
// -------------------------------------------------------------------------------------
function HackathonCard({ 
  opp, 
  getMatchRate, 
  handleCardClick, 
  toggleBookmark 
}) {
  const match = getMatchRate(opp);

  // Gradient helper based on opportunity hex color
  const bannerGradient = opp.hex 
    ? `linear-gradient(135deg, ${opp.hex} 0%, #1e1b4b 100%)` 
    : 'linear-gradient(135deg, #4F46E5 0%, #1e1b4b 100%)';

  return (
    <div className="flex flex-col justify-between h-full" onClick={() => handleCardClick(opp)}>
      {/* Banner Area */}
      <div className="h-36 w-full relative overflow-hidden shrink-0 bg-indigo-950 flex items-center justify-center">
        {opp.banner ? (
          <img decoding="async" loading="lazy" 
            src={opp.banner} 
            alt={opp.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4" style={{ background: bannerGradient }}>
            <span className="text-4xl">🏆</span>
            <span className="text-white/20 font-black text-4xl select-none text-right tracking-tighter">HACK</span>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 bg-[#4F46E5]/90 backdrop-blur-md px-3 py-1 rounded-xl text-white text-[9px] font-black uppercase tracking-wider border border-white/10">
          Hackathon
        </div>

        {/* Match Percentage in corner */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[#2563EB] text-[9px] font-extrabold border border-slate-100 shadow-sm flex items-center gap-0.5">
          <Sparkles className="h-2.5 w-2.5 text-blue-500 fill-current" />
          <span>{match}% Fit</span>
        </div>
      </div>

      {/* Core Details */}
      <div className="p-6 space-y-4 text-left flex-grow">
        <div className="space-y-1">
          <h4 className="text-sm font-extrabold text-slate-800 leading-tight truncate group-hover:text-[#2563EB] transition-colors">{opp.title}</h4>
          <p className="text-xs text-slate-400 font-semibold">{opp.organizer}</p>
        </div>

        {/* Prize Pool & Team Size Stats */}
        <div className="grid grid-cols-2 gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500">
          <div className="text-left border-r border-slate-200/60 pr-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">PRIZE POOL</span>
            <span className="text-[#06B6D4] font-black mt-1 block truncate text-xs">{opp.prizePool || '₹5,00,000'}</span>
          </div>
          <div className="text-left pl-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">TEAM SIZE</span>
            <span className="text-slate-700 font-extrabold mt-1 block truncate">{opp.teamSize || '1-4 Members'}</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
          {opp.detail}
        </p>
      </div>

      {/* Footer / Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-left text-slate-400">
          <Clock className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wide truncate max-w-[120px]">{opp.deadlineHours || '3 Days Left'}</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(opp.id, e);
            }}
            className="text-[10px] font-extrabold text-slate-400 hover:text-rose-500 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-rose-50/50"
          >
            Unsave
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(opp);
            }}
            className="px-4 py-2 rounded-xl text-xs font-black text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer hover:shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------------------
// 3. EVENT CARD COMPONENT (Ticket Style)
// -------------------------------------------------------------------------------------
function EventCard({ 
  opp, 
  registeredEvents, 
  executeRegisterEvent, 
  handleCardClick, 
  toggleBookmark 
}) {
  const isRegistered = registeredEvents.has(opp.id);

  // Gradient helper based on opportunity hex color
  const bannerGradient = opp.hex 
    ? `linear-gradient(135deg, ${opp.hex} 0%, #020617 100%)` 
    : 'linear-gradient(135deg, #F97316 0%, #020617 100%)';

  return (
    <div className="flex flex-col justify-between h-full" onClick={() => handleCardClick(opp)}>
      {/* Banner with Event details */}
      <div className="h-36 w-full relative overflow-hidden shrink-0 bg-slate-950 flex items-center justify-center">
        {opp.banner ? (
          <img decoding="async" loading="lazy" 
            src={opp.banner} 
            alt={opp.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4" style={{ background: bannerGradient }}>
            <span className="text-4xl">📅</span>
            <span className="text-white/20 font-black text-4xl select-none text-right tracking-tighter">EVENT</span>
          </div>
        )}
        
        {/* Event category Tag */}
        <div className="absolute bottom-3 left-3 bg-[#FF9900]/95 backdrop-blur-md px-3 py-1 rounded-xl text-white text-[9px] font-black uppercase tracking-wider border border-white/10">
          {opp.type === 'workshop' ? 'Workshop' : 'Live Event'}
        </div>

        {/* Date badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl text-[#F97316] text-[9px] font-extrabold border border-slate-100 shadow-sm flex items-center gap-1">
          <Calendar className="h-3 w-3 text-orange-500" />
          <span>{opp.date ? opp.date.split(',')[0] : 'June 15'}</span>
        </div>
      </div>

      {/* Core Details */}
      <div className="p-6 space-y-4 text-left flex-grow">
        <div className="space-y-1">
          <h4 className="text-sm font-extrabold text-slate-800 leading-tight truncate group-hover:text-[#2563EB] transition-colors">{opp.title}</h4>
          <p className="text-xs text-slate-400 font-semibold">{opp.organizer}</p>
        </div>

        {/* Date & Spots left */}
        <div className="grid grid-cols-2 gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500">
          <div className="text-left border-r border-slate-200/60 pr-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">VENUE</span>
            <span className="text-slate-700 font-extrabold mt-1 block truncate">{opp.location || 'Auditorium'}</span>
          </div>
          <div className="text-left pl-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SEATS LEFT</span>
            <span className="text-amber-600 font-extrabold mt-1 block truncate">
              {opp.availableSeats !== undefined ? `${opp.availableSeats} Spots` : '20 Spots'}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
          {opp.detail}
        </p>
      </div>

      {/* Footer / Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-left text-slate-400">
          <Clock className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide truncate max-w-[120px]">{opp.stipend || 'Free'}</span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(opp.id, e);
            }}
            className="text-[10px] font-extrabold text-slate-400 hover:text-rose-500 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-rose-50/50"
          >
            Unsave
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              if (isRegistered) return;
              // Call register handler directly, or trigger details modal
              if (executeRegisterEvent) {
                executeRegisterEvent(opp.id);
              } else {
                handleCardClick(opp);
              }
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer hover:shadow-sm ${
              isRegistered 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100 cursor-default'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isRegistered ? 'Registered' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------------------
// 4. RESTAURANT CARD COMPONENT (Zomato Favorites Style)
// -------------------------------------------------------------------------------------
function RestaurantCard({ 
  opp, 
  reservedRestaurants, 
  handleCardClick, 
  toggleBookmark 
}) {
  const isReserved = reservedRestaurants.has(opp.id);

  // Gradient helper based on opportunity hex color
  const bannerGradient = opp.hex 
    ? `linear-gradient(135deg, ${opp.hex} 0%, #1c0505 100%)` 
    : 'linear-gradient(135deg, #EF4444 0%, #1c0505 100%)';

  return (
    <div className="flex flex-col justify-between h-full" onClick={() => handleCardClick(opp)}>
      {/* Banner */}
      <div className="h-36 w-full relative overflow-hidden shrink-0 bg-red-950 flex items-center justify-center">
        {opp.banner ? (
          <img decoding="async" loading="lazy" 
            src={opp.banner} 
            alt={opp.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-4" style={{ background: bannerGradient }}>
            <span className="text-4xl">🥘</span>
            <span className="text-white/20 font-black text-4xl select-none text-right tracking-tighter">FOOD</span>
          </div>
        )}
        
        {/* Distance Badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl text-white text-[9px] font-bold border border-white/10">
          {opp.distance || '1.5 km'}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-emerald-600 text-white px-2.5 py-1 rounded-xl text-[10px] font-black flex items-center gap-0.5 shadow-md">
          <span>{opp.rating || '4.5'}</span>
          <span>★</span>
        </div>
      </div>

      {/* Core Details */}
      <div className="p-6 space-y-4 text-left flex-grow">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-extrabold text-slate-800 leading-tight truncate group-hover:text-[#2563EB] transition-colors">{opp.organizer}</h4>
            <span className="text-[10px] font-bold text-rose-500 shrink-0">{opp.offer || '30% OFF'}</span>
          </div>
          <p className="text-xs text-slate-400 font-semibold truncate mt-0.5">{opp.title}</p>
        </div>

        {/* Available Tables */}
        <div className="grid grid-cols-2 gap-3 bg-slate-50/80 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500">
          <div className="text-left border-r border-slate-200/60 pr-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">TABLE STATUS</span>
            <span className="text-emerald-600 font-black mt-1 block truncate">
              {opp.tablesAvailable !== undefined ? `${opp.tablesAvailable} Free` : '4 Available'}
            </span>
          </div>
          <div className="text-left pl-1">
            <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">STUDENT DISCOUNTS</span>
            <span className="text-slate-700 font-extrabold mt-1 block truncate">Flat Discount</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
          {opp.detail}
        </p>
      </div>

      {/* Footer / Actions */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1.5 text-left text-slate-400">
          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-rose-50 border border-rose-100 text-rose-600 rounded">
            Student Fav
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(opp.id, e);
            }}
            className="text-[10px] font-extrabold text-slate-400 hover:text-rose-500 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-rose-50/50"
          >
            Unsave
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              // Open details modal to let user pick seats and time slot
              handleCardClick(opp);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer hover:shadow-sm ${
              isReserved 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {isReserved ? 'Table Reserved' : 'Reserve Table'}
          </button>
        </div>
      </div>
    </div>
  );
}
