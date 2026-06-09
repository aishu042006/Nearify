import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  Briefcase, 
  Trophy, 
  Calendar, 
  Utensils, 
  Star, 
  Trash2, 
  ExternalLink, 
  Search,
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';

export default function ActivityHistoryPage({
  opportunities,
  appliedIds,
  registeredHackathons,
  registeredEvents,
  reservedRestaurants,
  savedIds,
  setViewingInternship,
  setSelectedOpp,
  setActiveTab
}) {
  const [filterType, setFilterType] = useState('all'); // 'all' | 'application' | 'booking' | 'bookmark'
  const [searchQuery, setSearchQuery] = useState('');

  // Derive chronological activity history based on state variables
  const getDerivedActivities = () => {
    const list = [];

    // Add Internship applications
    opportunities.filter(o => o.type === 'internship' && appliedIds.has(o.id)).forEach(opp => {
      list.push({
        id: `act-apply-${opp.id}`,
        timestamp: new Date('2026-06-08T09:30:00Z'), // mock time or dynamic
        timeDisplay: '10m ago',
        type: 'application',
        title: 'Applied to Internship',
        details: `${opp.title} at ${opp.organizer}`,
        logo: opp.logo || '💼',
        hex: '#2563EB',
        color: 'blue',
        oppObject: opp
      });
    });

    // Add Hackathons registrations
    opportunities.filter(o => o.type === 'hackathon' && registeredHackathons.has(o.id)).forEach(opp => {
      list.push({
        id: `act-hack-${opp.id}`,
        timestamp: new Date('2026-06-08T07:45:00Z'),
        timeDisplay: '2h ago',
        type: 'application',
        title: 'Joined Hackathon Squad',
        details: `${opp.title} (${opp.organizer})`,
        logo: opp.logo || '🏆',
        hex: '#4F46E5',
        color: 'indigo',
        oppObject: opp
      });
    });

    // Add Events registrations
    opportunities.filter(o => (o.type === 'event' || o.type === 'workshop') && registeredEvents.has(o.id)).forEach(opp => {
      list.push({
        id: `act-event-${opp.id}`,
        timestamp: new Date('2026-06-07T12:00:00Z'),
        timeDisplay: '1d ago',
        type: 'booking',
        title: 'Registered for Event',
        details: `${opp.title} by ${opp.organizer}`,
        logo: opp.logo || '📅',
        hex: '#F97316',
        color: 'orange',
        oppObject: opp
      });
    });

    // Add Restaurant reservations
    opportunities.filter(o => o.type === 'food' && reservedRestaurants.has(o.id)).forEach(opp => {
      const reservation = reservedRestaurants.get(opp.id);
      list.push({
        id: `act-rest-${opp.id}`,
        timestamp: new Date('2026-06-07T14:30:00Z'),
        timeDisplay: '1d ago',
        type: 'booking',
        title: 'Reserved Dining Table',
        details: `${opp.organizer} - Student Combo for ${reservation?.seats || 2} guests at ${reservation?.time || '07:30 PM'}`,
        logo: '🥘',
        hex: '#DC2626',
        color: 'red',
        oppObject: opp
      });
    });

    // Add Saved bookmarks
    opportunities.filter(o => savedIds.has(o.id)).forEach(opp => {
      list.push({
        id: `act-save-${opp.id}`,
        timestamp: new Date('2026-06-06T10:00:00Z'),
        timeDisplay: '2d ago',
        type: 'bookmark',
        title: 'Opportunity Saved',
        details: `${opp.title} (${opp.organizer})`,
        logo: opp.logo || '⭐',
        hex: '#06B6D4',
        color: 'cyan',
        oppObject: opp
      });
    });

    // Sort by type priority or approximation
    return list;
  };

  const activities = getDerivedActivities();

  // Filter activities
  const filteredActivities = activities.filter(act => {
    // Filter by type
    if (filterType !== 'all' && act.type !== filterType) return false;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        act.title.toLowerCase().includes(q) ||
        act.details.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="flex-grow overflow-y-auto px-4 md:px-8 py-8 max-w-4xl mx-auto w-full custom-scrollbar space-y-8 text-left bg-[#F8FAFC]">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/15 via-transparent to-cyan-50/15 pointer-events-none" />
        <div className="space-y-1.5 relative z-10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg border border-blue-100/60">
              <Clock className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">Audit Log</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Activity History</h1>
          <p className="text-sm text-slate-500 font-medium max-w-xl">
            Keep track of your actions, from internship application timestamps to saved bookmarks.
          </p>
        </div>
      </div>

      {/* FILTER & TABS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Chips */}
        <div className="flex items-center space-x-1 overflow-x-auto py-1 scrollbar-none w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Activities' },
            { id: 'application', label: 'Applications' },
            { id: 'booking', label: 'Bookings & Tickets' },
            { id: 'bookmark', label: 'Saved Nodes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                filterType === tab.id
                  ? 'bg-[#2563EB] text-white shadow-sm font-extrabold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#2563EB] shadow-sm transition-all"
          />
        </div>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 space-y-8 py-2">
        <AnimatePresence mode="popLayout">
          {filteredActivities.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="py-16 text-center bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm ml-[-6px] md:ml-[-8px] relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-slate-400" />
              </div>
              <h4 className="text-sm font-bold text-slate-800">No activity log found</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Actions you perform on Nearify (such as bookmarking, registering, or applying) will compile a live audit timeline here.
              </p>
            </motion.div>
          ) : (
            filteredActivities.map((act) => (
              <motion.div
                key={act.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-[#E2E8F0] p-5 rounded-[22px] shadow-sm hover:border-slate-350 transition-colors"
              >
                {/* Timeline Circle Bullet overlay absolute positioning */}
                <div 
                  className="absolute left-[-31px] md:left-[-39px] top-6 w-4 h-4 rounded-full border-4 border-[#F8FAFC] z-20 transition-transform hover:scale-125"
                  style={{ backgroundColor: act.hex }}
                />

                <div className="flex items-start gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shrink-0 shadow-inner">
                    {act.logo}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-black uppercase tracking-wider block" style={{ color: act.hex }}>
                      {act.title}
                    </span>
                    <h4 className="text-xs font-bold text-slate-800 mt-0.5 leading-tight">{act.details}</h4>
                    <span className="text-[9px] font-bold text-slate-400 mt-1.5 block">{act.timeDisplay}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <button
                    onClick={() => {
                      if (act.oppObject.type === 'internship') {
                        setViewingInternship(act.oppObject);
                      } else {
                        setSelectedOpp(act.oppObject);
                      }
                    }}
                    className="px-3 py-1.5 border border-slate-200 hover:border-slate-300 bg-white text-slate-600 rounded-xl text-[10px] font-bold transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-1"
                  >
                    <span>View Node</span>
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
