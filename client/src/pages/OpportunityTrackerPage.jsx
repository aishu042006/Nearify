import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SlidersHorizontal,
  Briefcase, 
  Trophy, 
  Calendar, 
  Utensils, 
  XCircle, 
  CalendarDays,
  QrCode,
  CheckCircle,
  CalendarCheck,
  ArrowRight
} from 'lucide-react';

export default function OpportunityTrackerPage({
  opportunities,
  appliedIds,
  setAppliedIds,
  registeredHackathons,
  setRegisteredHackathons,
  registeredEvents,
  setRegisteredEvents,
  reservedRestaurants,
  setReservedRestaurants,
  setSelectedOpp,
  setViewingInternship,
  setOpportunities,
  setActiveTab
}) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'internship' | 'hackathon' | 'event' | 'restaurant'
  const [showRescheduleModal, setShowRescheduleModal] = useState(null); // id of restaurant reservation to reschedule
  const [rescheduleDate, setRescheduleDate] = useState('2026-06-09');
  const [rescheduleTime, setRescheduleTime] = useState('08:00 PM');
  const [showQrModal, setShowQrModal] = useState(null); // opp object

  // 1. Compile tracker items
  const trackerItems = [];

  // Add internships
  opportunities.filter(o => o.type === 'internship' && appliedIds.has(o.id)).forEach(opp => {
    // Generate mock stage based on id ending digit to make it realistic
    const numericId = parseInt(opp.id.replace(/\D/g, '')) || 1;
    const stages = ['Applied', 'Under Review', 'Shortlisted', 'Interview Scheduled', 'Selected'];
    const activeIndex = (numericId % 4); // simulate various stages except 'Selected' which is 4
    
    // Resume scores (mock)
    const resumeScore = 75 + (numericId % 20); // 75 - 95

    trackerItems.push({
      id: opp.id,
      type: 'internship',
      title: opp.title,
      organizer: opp.organizer,
      logo: opp.logo,
      hex: opp.hex || '#2563EB',
      stipend: opp.stipend,
      location: opp.location,
      stages: stages,
      currentStageIndex: activeIndex,
      dateTracked: 'June 6, 2026',
      resumeScore: resumeScore,
      oppObject: opp
    });
  });

  // Add hackathons
  opportunities.filter(o => o.type === 'hackathon' && registeredHackathons.has(o.id)).forEach(opp => {
    const numericId = parseInt(opp.id.replace(/\D/g, '')) || 2;
    const stages = ['Registered', 'Team Formed', 'Project Submitted', 'Under Evaluation', 'Finalist Selected'];
    const activeIndex = (numericId % 3);

    trackerItems.push({
      id: opp.id,
      type: 'hackathon',
      title: opp.title,
      organizer: opp.organizer,
      logo: opp.logo || '🏆',
      hex: opp.hex || '#4F46E5',
      prizePool: opp.prizePool,
      stages: stages,
      currentStageIndex: activeIndex,
      dateTracked: 'June 5, 2026',
      oppObject: opp
    });
  });

  // Add events
  opportunities.filter(o => (o.type === 'event' || o.type === 'workshop') && registeredEvents.has(o.id)).forEach(opp => {
    const stages = ['Ticket Issued', 'Reminder Sent', 'Checked In'];
    // Default to Ticket Issued or Checked in
    const activeIndex = 0; 

    trackerItems.push({
      id: opp.id,
      type: 'event',
      title: opp.title,
      organizer: opp.organizer,
      logo: opp.logo || '📅',
      hex: opp.hex || '#F97316',
      date: opp.date,
      location: opp.location,
      stages: stages,
      currentStageIndex: activeIndex,
      dateTracked: 'June 7, 2026',
      oppObject: opp
    });
  });

  // Add restaurants
  opportunities.filter(o => o.type === 'food' && reservedRestaurants.has(o.id)).forEach(opp => {
    const reservationInfo = reservedRestaurants.get(opp.id);
    const stages = ['Confirmed', 'Pending', 'Completed', 'Cancelled'];
    
    // Map of restaurant statuses (Confirmed initially)
    const status = reservationInfo.status || 'Confirmed';
    const activeIndex = stages.indexOf(status) !== -1 ? stages.indexOf(status) : 0;

    trackerItems.push({
      id: opp.id,
      type: 'restaurant',
      title: opp.organizer + ' Reservation',
      organizer: opp.title,
      logo: '🥘',
      hex: opp.hex || '#DC2626',
      reservationDetails: `${reservationInfo.seats || 2} Seats • ${reservationInfo.time || '07:30 PM'}`,
      stages: stages,
      currentStageIndex: activeIndex,
      status: status,
      dateTracked: 'June 7, 2026',
      oppObject: opp
    });
  });

  // Filter trackers
  const finalFilteredItems = trackerItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.type === activeCategory;
  });

  // Action: cancel internship application
  const cancelApplication = (id) => {
    setAppliedIds(prev => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });
  };

  // Action: cancel hackathon registration
  const cancelHackathon = (id) => {
    setRegisteredHackathons(prev => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });
  };

  // Action: cancel event registration
  const cancelEvent = (id) => {
    setRegisteredEvents(prev => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });
    // Increment seat back
    setOpportunities(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, availableSeats: o.availableSeats + 1 };
      }
      return o;
    }));
  };

  // Action: cancel restaurant reservation
  const cancelReservation = (id) => {
    setReservedRestaurants(prev => {
      const updated = new Map(prev);
      updated.delete(id);
      return updated;
    });
    // Increment tables back
    setOpportunities(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, tablesAvailable: o.tablesAvailable + 1 };
      }
      return o;
    }));
  };

  // Action: reschedule restaurant reservation
  const rescheduleReservation = (id) => {
    setReservedRestaurants(prev => {
      const updated = new Map(prev);
      const prevData = updated.get(id);
      updated.set(id, { 
        ...prevData, 
        time: rescheduleTime, 
        date: rescheduleDate,
        status: 'Confirmed' 
      });
      return updated;
    });
    setShowRescheduleModal(null);
  };

  return (
    <div className="flex-grow overflow-y-auto px-4 md:px-8 py-8 max-w-5xl mx-auto w-full custom-scrollbar space-y-8 text-left bg-[#F8FAFC]">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white border border-[#E2E8F0] p-6 md:p-8 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg border border-blue-100">
              <SlidersHorizontal className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">Application Tracking System (ATS)</span>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Opportunity Tracker</h1>
          <p className="text-sm text-slate-500 font-medium">
            Monitor real-time progress, review recruiter feedback, and manage bookings.
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <div className="px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-center md:text-right">
            <span className="text-2xl font-black text-slate-800 block leading-none">{trackerItems.length}</span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1.5 block">Total Applications</span>
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center space-x-1.5 overflow-x-auto py-1 scrollbar-none border-b border-slate-200 pb-2">
        {[
          { id: 'all', label: 'All Trackers', icon: SlidersHorizontal },
          { id: 'internship', label: 'Internships', icon: Briefcase },
          { id: 'hackathon', label: 'Hackathons', icon: Trophy },
          { id: 'event', label: 'Events & Tickets', icon: Calendar },
          { id: 'restaurant', label: 'Restaurants', icon: Utensils }
        ].map((tab) => {
          const Icon = tab.icon;
          const count = tab.id === 'all' 
            ? trackerItems.length 
            : trackerItems.filter(i => i.type === tab.id).length;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#2563EB] text-white shadow-sm font-black'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full border ${
                activeCategory === tab.id ? 'bg-white/20 border-white/10 text-white font-black' : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* TIMELINE LISTINGS */}
      <div className="space-y-6">
        <AnimatePresence mode="popLayout">
          {finalFilteredItems.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="py-20 text-center bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                <SlidersHorizontal className="h-7 w-7 text-slate-400 stroke-[1.2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No active applications found</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto mb-6">
                Explore the opportunities panel to apply for internships, register for events/hackathons, or book a table.
              </p>
              {setActiveTab && (
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1.5 mx-auto"
                >
                  <span>Find Opportunities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
            </motion.div>
          ) : (
            finalFilteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15, transition: { duration: 0.2 } }}
                className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:border-slate-300 transition-all flex flex-col gap-6"
              >
                {/* Upper row: branding & actions */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 text-left">
                    <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center shrink-0 text-xl shadow-inner">
                      {item.logo}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-extrabold text-slate-800 leading-tight truncate">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5 truncate">{item.organizer}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded border capitalize bg-slate-50 text-slate-500 border-slate-200">
                          {item.type}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium">Added: {item.dateTracked}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    {/* View Details details button */}
                    <button
                      onClick={() => {
                        if (item.type === 'internship') {
                          setViewingInternship(item.oppObject);
                        } else {
                          setSelectedOpp(item.oppObject);
                        }
                      }}
                      className="px-3.5 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      View Details
                    </button>

                    {/* QR Code Action (Events) */}
                    {item.type === 'event' && (
                      <button
                        onClick={() => setShowQrModal(item)}
                        className="p-2 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                        title="View Entry Ticket"
                      >
                        <QrCode className="h-4 w-4" />
                      </button>
                    )}

                    {/* Reschedule reservation button */}
                    {item.type === 'restaurant' && item.status !== 'Cancelled' && (
                      <button
                        onClick={() => {
                          setRescheduleDate(item.oppObject.date || '2026-06-09');
                          setRescheduleTime(reservedRestaurants.get(item.id)?.time || '07:30 PM');
                          setShowRescheduleModal(item.id);
                        }}
                        className="px-3 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        Reschedule
                      </button>
                    )}

                    {/* Cancel action buttons */}
                    <button
                      onClick={() => {
                        if (item.type === 'internship') cancelApplication(item.id);
                        if (item.type === 'hackathon') cancelHackathon(item.id);
                        if (item.type === 'event') cancelEvent(item.id);
                        if (item.type === 'restaurant') cancelReservation(item.id);
                      }}
                      className="p-2 border border-rose-100 hover:bg-rose-50 text-rose-600 rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                      title={item.type === 'restaurant' ? 'Cancel Reservation' : 'Withdraw Application'}
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* VISUAL ATS PROGRESS TRACKER TIMELINE */}
                <div className="space-y-4">
                  {/* Timeline stages pills */}
                  <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2 pt-2">
                    {/* Background connector line (desktop only) */}
                    <div className="absolute left-6 right-6 top-[21px] h-0.75 bg-slate-100 z-0 hidden md:block" />
                    {/* Active colored bar */}
                    <div 
                      className="absolute left-6 top-[21px] h-0.75 bg-[#2563EB] z-0 hidden md:block transition-all duration-500" 
                      style={{ 
                        width: `${(item.currentStageIndex / (item.stages.length - 1)) * 92}%` 
                      }}
                    />

                    {item.stages.map((stage, idx) => {
                      const isCompleted = idx < item.currentStageIndex;
                      const isActive = idx === item.currentStageIndex;

                      return (
                        <div 
                          key={stage} 
                          className="flex md:flex-col items-center gap-3 md:gap-1.5 z-10 w-full md:w-auto text-left md:text-center relative"
                        >
                          {/* Desktop node circle */}
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                            isCompleted ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm' :
                            isActive ? 'bg-white border-[#2563EB] text-[#2563EB] font-black shadow-[0_0_12px_rgba(37,99,235,0.2)]' :
                            'bg-slate-50 border-slate-200 text-slate-400'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="h-4 w-4 stroke-[3px]" />
                            ) : (
                              <span className="text-[10px] font-extrabold">{idx + 1}</span>
                            )}
                          </div>

                          {/* Stage details */}
                          <div className="flex-1 md:flex-none">
                            <span className={`text-[10px] md:text-[11px] block font-bold leading-tight ${
                              isActive ? 'text-[#2563EB] font-extrabold' :
                              isCompleted ? 'text-slate-700' : 'text-slate-400'
                            }`}>
                              {stage}
                            </span>
                            {isActive && item.type === 'internship' && item.resumeScore && (
                              <span className="text-[9px] text-slate-400 block mt-0.5">Resume Score: <strong className="text-emerald-500">{item.resumeScore}%</strong></span>
                            )}
                            {isActive && item.type === 'restaurant' && (
                              <span className="text-[9px] text-[#2563EB] block mt-0.5 font-bold uppercase tracking-wider">{item.reservationDetails}</span>
                            )}
                            {isActive && item.type === 'hackathon' && (
                              <span className="text-[9px] text-amber-500 block mt-0.5 font-bold">Team Formed</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Additional tracking info helper for premium layout */}
                {item.type === 'internship' && item.currentStageIndex === 3 && (
                  <div className="bg-blue-50/50 border border-blue-100 p-3.5 rounded-2xl flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <CalendarCheck className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Action Required:</strong> Recruiter scheduled a mock interview for you on <strong className="text-slate-800">June 10 at 11:00 AM</strong>. An online invite details link has been sent to your primary email address.
                    </div>
                  </div>
                )}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* QR TICKET MODAL */}
      <AnimatePresence>
        {showQrModal && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowQrModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[24px] border border-slate-100 p-6 max-w-sm w-full text-center relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowQrModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
              <h3 className="font-extrabold text-slate-800 text-base">QR Ticket Entry</h3>
              <p className="text-xs text-slate-400 mt-1">{showQrModal.title}</p>
              
              {/* QR Image Box */}
              <div className="my-6 p-4 border border-dashed border-slate-200 rounded-2xl inline-block bg-slate-50">
                {/* Premium mock QR rendering */}
                <div className="w-40 h-40 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-2 mx-auto relative select-none">
                  {/* Mock QR dots grid */}
                  <div className="absolute inset-2 bg-[radial-gradient(#0f172a_2.5px,transparent_2.5px)] [background-size:8px_8px]" />
                  {/* QR Corners */}
                  <div className="absolute top-2 left-2 w-8 h-8 bg-slate-900 border-2 border-white rounded" />
                  <div className="absolute top-2 right-2 w-8 h-8 bg-slate-900 border-2 border-white rounded" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 bg-slate-900 border-2 border-white rounded" />
                  <div className="absolute bottom-6 right-6 w-4 h-4 bg-slate-900 border border-white rounded" />
                  {/* Nearify Logo Overlay in Center */}
                  <div className="relative z-10 w-9 h-9 bg-white border border-slate-100 rounded-xl flex items-center justify-center shadow-md font-black text-xs text-[#2563EB]">
                    N
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-500 font-semibold bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="flex justify-between"><span>Ticket Holder</span> <strong className="text-slate-700">AISHWARYA G</strong></p>
                <p className="flex justify-between"><span>Event Node</span> <strong className="text-slate-700">{showQrModal.organizer}</strong></p>
                <p className="flex justify-between"><span>Date/Time</span> <strong className="text-slate-700">{showQrModal.date || 'June 15, 6:00 PM'}</strong></p>
              </div>

              <p className="text-[10px] text-slate-400 mt-4 leading-normal font-medium">
                Present this QR code scanner node at the venue gate for instant check-in.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* RESCHEDULE MODAL */}
      <AnimatePresence>
        {showRescheduleModal && (
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setShowRescheduleModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[24px] border border-slate-100 p-6 max-w-sm w-full text-left relative shadow-2xl space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-slate-800 text-base flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4 text-[#2563EB]" />
                  <span>Reschedule Booking</span>
                </h3>
                <button
                  onClick={() => setShowRescheduleModal(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              {/* Form elements */}
              <div className="space-y-3">
                <div className="text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">New Date</label>
                  <input
                    type="date"
                    value={rescheduleDate}
                    onChange={(e) => setRescheduleDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
                <div className="text-left">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">New Time Slot</label>
                  <select
                    value={rescheduleTime}
                    onChange={(e) => setRescheduleTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#2563EB] focus:bg-white cursor-pointer"
                  >
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="06:30 PM">06:30 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  onClick={() => setShowRescheduleModal(null)}
                  className="flex-1 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => rescheduleReservation(showRescheduleModal)}
                  className="flex-1 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm shadow-blue-500/10"
                >
                  Confirm Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
