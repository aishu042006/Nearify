import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Trash2, 
  CheckSquare, 
  Filter, 
  Utensils, 
  Clock,
  Sparkles,
  Inbox,
  ArrowRight
} from 'lucide-react';

export default function NotificationsPage({
  notifications,
  setNotifications,
  setActiveTab
}) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'match' | 'deadline' | 'registration' | 'food'
  const [filterRead, setFilterRead] = useState('all'); // 'all' | 'unread' | 'read'

  // Map category to icons
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'match': return <Sparkles className="h-4 w-4 text-[#06B6D4]" />;
      case 'deadline': return <Clock className="h-4 w-4 text-rose-500" />;
      case 'registration': return <CheckCircleIcon className="h-4 w-4 text-emerald-500" />;
      case 'food': return <Utensils className="h-4 w-4 text-orange-500" />;
      default: return <Bell className="h-4 w-4 text-[#2563EB]" />;
    }
  };

  // Helper check icon
  const CheckCircleIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Mark all as read
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Delete/dismiss single notification
  const dismissNotification = (id, e) => {
    if (e) e.stopPropagation();
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Filter notifications based on tab selection
  const filteredNotifications = notifications.filter(n => {
    // 1. Filter by category
    if (activeCategory !== 'all') {
      const type = n.type || 'info';
      if (activeCategory === 'match' && type !== 'match') return false;
      if (activeCategory === 'deadline' && type !== 'deadline') return false;
      if (activeCategory === 'registration' && type !== 'registration') return false;
      if (activeCategory === 'food' && type !== 'food') return false;
    }
    // 2. Filter by read state
    if (filterRead === 'unread') return !n.read;
    if (filterRead === 'read') return n.read;
    return true;
  });

  return (
    <div className="flex-grow overflow-y-auto px-4 md:px-8 py-8 max-w-4xl mx-auto w-full custom-scrollbar space-y-6 text-left bg-[#F8FAFC]">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-50 text-[#2563EB] rounded-lg border border-blue-100">
              <Bell className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase">Updates Feed</span>
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Notification Center</h1>
          <p className="text-xs text-slate-500 font-semibold">
            Manage your matched listings, application deadlines, and discount vouchers.
          </p>
        </div>
        <div className="flex items-center gap-2.5 self-end sm:self-center">
          {notifications.some(n => !n.read) && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 border border-slate-200 hover:border-slate-300 bg-white text-slate-700 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <CheckSquare className="h-3.5 w-3.5 text-slate-500" />
              <span>Mark All Read</span>
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAllNotifications}
              className="px-4 py-2 border border-rose-100 hover:bg-rose-50/50 bg-white text-rose-600 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear All</span>
            </button>
          )}
        </div>
      </div>

      {/* FILTER & TABS BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-slate-200 pb-2">
        {/* Category tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto py-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Updates', count: notifications.length },
            { id: 'match', label: 'Matches', count: notifications.filter(n => n.type === 'match').length },
            { id: 'deadline', label: 'Deadlines', count: notifications.filter(n => n.type === 'deadline').length },
            { id: 'registration', label: 'Bookings', count: notifications.filter(n => n.type === 'registration').length },
            { id: 'food', label: 'Food Perks', count: notifications.filter(n => n.type === 'food').length }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#2563EB] text-white shadow-sm font-extrabold'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-1.5 text-[9px] px-1.5 py-0.5 rounded-full border ${
                activeCategory === cat.id ? 'bg-white/20 border-white/10 text-white font-black' : 'bg-slate-100 border-slate-200 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Read / Unread filter dropdown */}
        <div className="flex items-center gap-2 justify-end">
          <Filter className="h-3.5 w-3.5 text-slate-400" />
          <select
            value={filterRead}
            onChange={(e) => setFilterRead(e.target.value)}
            className="appearance-none bg-white border border-[#E2E8F0] px-3 py-2 pr-7 rounded-xl text-xs font-bold text-slate-600 focus:outline-none focus:border-[#2563EB] shadow-sm cursor-pointer"
          >
            <option value="all">Show All</option>
            <option value="unread">Unread Only</option>
            <option value="read">Read Only</option>
          </select>
        </div>
      </div>

      {/* NOTIFICATION LISTINGS */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredNotifications.length === 0 ? (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-16 text-center bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4">
                <Inbox className="h-7 w-7 text-slate-400" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Inbox is empty</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto mb-6">
                {filterRead === 'unread' 
                  ? "You have no unread notifications right now."
                  : "Notifications about your applications, hackathon entries, and restaurant deals will appear here."}
              </p>
              <button
                onClick={() => setActiveTab('opportunities')}
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-1.5 mx-auto"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ) : (
            filteredNotifications.map((notif) => (
              <motion.div
                key={notif.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: 20, transition: { duration: 0.2 } }}
                onClick={() => markAsRead(notif.id)}
                className={`p-4 bg-white border rounded-[20px] shadow-sm flex items-start gap-4 transition-all relative group cursor-pointer ${
                  notif.read ? 'border-[#E2E8F0]' : 'border-[#2563EB]/30 bg-blue-50/10'
                }`}
              >
                {/* Unread dot indicator */}
                {!notif.read && (
                  <span className="absolute left-2.5 top-2.5 w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                )}

                {/* Category Icon */}
                <div className={`p-2.5 rounded-xl border shrink-0 mt-0.5 ${
                  notif.type === 'match' ? 'bg-[#06B6D4]/5 border-[#06B6D4]/20' :
                  notif.type === 'deadline' ? 'bg-rose-50 border-rose-100' :
                  notif.type === 'registration' ? 'bg-emerald-50 border-emerald-100' :
                  notif.type === 'food' ? 'bg-orange-50 border-orange-100' :
                  'bg-blue-50 border-blue-100'
                }`}>
                  {getNotificationIcon(notif.type)}
                </div>

                {/* Text Content */}
                <div className="flex-grow min-w-0 text-left pr-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className={`text-xs leading-snug font-extrabold ${notif.read ? 'text-slate-700' : 'text-slate-900'}`}>
                      {notif.title}
                    </h4>
                    {notif.badge && (
                      <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.2 bg-blue-50 border border-blue-100 text-[#2563EB] rounded">
                        {notif.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {notif.desc}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[10px] font-bold text-slate-400">
                    <span>{notif.time || '10m ago'}</span>
                    {notif.linkText && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notif.id);
                          if (notif.actionTab) {
                            setActiveTab(notif.actionTab);
                          } else if (notif.oppId) {
                            // Find opportunity
                            setActiveTab('opportunities');
                          }
                        }}
                        className="text-[#2563EB] hover:text-blue-700 hover:underline cursor-pointer"
                      >
                        {notif.linkText} &rarr;
                      </button>
                    )}
                  </div>
                </div>

                {/* Trash/Dismiss Button */}
                <button
                  onClick={(e) => dismissNotification(notif.id, e)}
                  className="absolute right-4 top-4 p-1.5 hover:bg-slate-50 text-slate-300 hover:text-rose-600 rounded-lg transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                  title="Dismiss notification"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
