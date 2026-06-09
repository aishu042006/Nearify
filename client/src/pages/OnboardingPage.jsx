import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Compass, Briefcase, Trophy, Calendar, Utensils, Music, BookOpen, Terminal, Rocket, Palette, Mic, Check, ChevronUp, ChevronDown, ArrowRight, MapPin, Bell, User, Building, ArrowLeft, Star, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';

const interestOptions = [
  { id: 'internship', label: 'Internships', icon: Briefcase, color: 'blue', bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-200' },
  { id: 'hackathon', label: 'Hackathons', icon: Trophy, color: 'indigo', bg: 'bg-indigo-500/10', text: 'text-indigo-600', border: 'border-indigo-200' },
  { id: 'event', label: 'Events', icon: Calendar, color: 'cyan', bg: 'bg-cyan-500/10', text: 'text-cyan-600', border: 'border-cyan-200' },
  { id: 'music', label: 'Music Fests', icon: Music, color: 'fuchsia', bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-600', border: 'border-fuchsia-200' },
  { id: 'food', label: 'Food Offers', icon: Utensils, color: 'orange', bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-200' },
  { id: 'workshop', label: 'Workshops', icon: BookOpen, color: 'emerald', bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-200' },
  { id: 'meetup', label: 'Tech Meetups', icon: Terminal, color: 'violet', bg: 'bg-violet-500/10', text: 'text-violet-600', border: 'border-violet-200' },
  { id: 'startup', label: 'Startup Events', icon: Rocket, color: 'rose', bg: 'bg-rose-500/10', text: 'text-rose-600', border: 'border-rose-200' },
  { id: 'cultural', label: 'Cultural Events', icon: Palette, color: 'purple', bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-200' },
  { id: 'seminar', label: 'Seminars', icon: Mic, color: 'amber', bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-200' }
];

const discoveryMessages = [
  "📍 Location Connected",
  "🎯 Interests Analyzed",
  "🔍 Finding Opportunities Near You",
  "💼 5 Internships Found",
  "🏆 3 Hackathons Found",
  "🎉 8 Events Found",
  "🎵 2 Music Fests Found",
  "🍔 12 Food Offers Found",
  "📚 4 Workshops Found",
  "🚀 Preparing Your Personalized Dashboard"
];

const getProgressPhase = (progress) => {
  if (progress < 25) return "Connecting Location";
  if (progress < 50) return "Analyzing Interests";
  if (progress < 75) return "Finding Opportunities";
  return "Dashboard Ready";
};

export default function OnboardingPage() {
  const { user, completeOnboarding } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [locationAllowed, setLocationAllowed] = useState(false);
  
  // Step 2 States: Interests Selection & Ranking
  const [selectedInterests, setSelectedInterests] = useState(['internship', 'hackathon', 'event']);
  
  // Step 3 States: Profile Details & Notification Preferences
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    organization: '',
    role: 'Student'
  });
  
  const [notifications, setNotifications] = useState({
    internship: true,
    hackathon: true,
    event: true,
    food: false,
    music: false,
    workshop: false
  });

  // Step 4 States: Cinematic Discovery overlay
  const [isCompleting, setIsCompleting] = useState(false);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showFinalSuccess, setShowFinalSuccess] = useState(false);

  // Drive the cinematic onboarding simulation
  useEffect(() => {
    if (!isCompleting) return;

    // Increment progress from 0% to 100% over 9 seconds (9000ms)
    // 100 increments * 90ms = 9000ms
    const progressInterval = setInterval(() => {
      setTransitionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 90);

    // Rotate discovery logs every 900ms
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev >= discoveryMessages.length - 1) {
          clearInterval(messageInterval);
          return discoveryMessages.length - 1;
        }
        return prev + 1;
      });
    }, 900);

    // At 100% (9200ms), reveal final success panel for 1.8 seconds, then trigger transition
    const redirectTimeout = setTimeout(() => {
      setShowFinalSuccess(true);
      
      const exitTimeout = setTimeout(() => {
        completeOnboarding();
        navigate('/dashboard');
      }, 1900);

      return () => clearTimeout(exitTimeout);
    }, 9300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(redirectTimeout);
    };
  }, [isCompleting]);

  const toggleInterest = (id) => {
    setSelectedInterests(prev => {
      if (prev.includes(id)) {
        if (prev.length <= 1) return prev;
        return prev.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const movePreference = (index, direction) => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === selectedInterests.length - 1) return;
    
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const reordered = [...selectedInterests];
    const temp = reordered[index];
    reordered[index] = reordered[targetIndex];
    reordered[targetIndex] = temp;
    setSelectedInterests(reordered);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleFinalSubmit = () => {
    setIsCompleting(true);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#F1F5F9] w-full flex items-center justify-center p-4 sm:p-6 md:p-8 select-none font-sans relative overflow-hidden"
    >
      
      {/* Background Floater style keys */}
      <style>{`
        @keyframes float-c1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes float-c2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-11px); } }
        @keyframes float-c3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes float-c4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float-c5 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-7px); } }
        .animate-float-1 { animation: float-c1 4.5s ease-in-out infinite; }
        .animate-float-2 { animation: float-c2 5.8s ease-in-out infinite; }
        .animate-float-3 { animation: float-c3 4.2s ease-in-out infinite; }
        .animate-float-4 { animation: float-c4 5.2s ease-in-out infinite; }
        .animate-float-5 { animation: float-c5 3.8s ease-in-out infinite; }
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="max-w-4xl w-full bg-white/95 border border-[#E2E8F0] rounded-[32px] shadow-xl p-8 md:p-10 relative z-10 flex flex-col justify-between h-[640px] md:h-[680px] backdrop-blur-md">
        
        {/* Top Header & Progress Bar */}
        <div className="w-full shrink-0">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Compass className="h-5 w-5 text-blue-600 animate-spin-slow" />
              <span className="text-sm font-bold text-slate-800 tracking-tight">Onboarding Setup</span>
            </div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Step {step} of 4</span>
          </div>
          
          {/* Progress bar fill */}
          <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mb-6">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
              initial={{ width: '25%' }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* STEP BODY */}
        <div className="flex-grow overflow-y-auto pr-1">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: LOCATION ACCESS */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full py-2"
              >
                {/* Left side: radar visual mockup */}
                <div className="hidden md:flex flex-col justify-center items-center h-full border border-slate-100 rounded-[28px] p-8 bg-slate-50/50 relative overflow-hidden h-[360px]">
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.015)_1px,transparent_1px)] [background-size:16px_16px]" />
                  
                  {/* Concentric rings */}
                  <div className="w-48 h-48 rounded-full border border-blue-500/10 flex items-center justify-center relative">
                    <div className="w-32 h-32 rounded-full border border-blue-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center" />
                    </div>
                    
                    {/* Rotating Radar Sweep */}
                    <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
                      <div className="w-full h-full origin-center bg-gradient-to-tr from-blue-500/20 via-transparent to-transparent border-t border-blue-500/40 rounded-full" style={{ animation: 'radar-sweep 5s linear infinite' }} />
                    </div>

                    {/* Floating icons around the center */}
                    <div className="absolute top-[20%] left-[20%] p-2 rounded-xl bg-white border border-slate-200/60 shadow-sm animate-bounce text-xs" style={{ animationDelay: '0.2s', animationDuration: '4s' }}>💼</div>
                    <div className="absolute bottom-[25%] right-[15%] p-2 rounded-xl bg-white border border-slate-200/60 shadow-sm animate-bounce text-xs" style={{ animationDelay: '0.8s', animationDuration: '5s' }}>🏆</div>
                    <div className="absolute bottom-[20%] left-[10%] p-2 rounded-xl bg-white border border-slate-200/60 shadow-sm animate-bounce text-xs" style={{ animationDelay: '1.4s', animationDuration: '4.5s' }}>🍔</div>
                    <div className="absolute top-[30%] right-[10%] p-2 rounded-xl bg-white border border-slate-200/60 shadow-sm animate-bounce text-xs" style={{ animationDelay: '2s', animationDuration: '3.8s' }}>🎉</div>

                    {/* Glowing Pin in Center */}
                    <div className="absolute z-20 flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        <MapPin className="h-4 w-4 text-blue-600 animate-bounce" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side: Benefits content */}
                <div className="text-left space-y-6">
                  <div className="space-y-2.5">
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Enable Location Access</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">Discover opportunities happening around you in real time.</p>
                  </div>

                  {/* Benefits checklist */}
                  <div className="space-y-3.5 pt-2">
                    {[
                      'Discover nearby opportunities within custom radius',
                      'Find local events and hackathons happening soon',
                      'Get location-based food offers and deals nearby',
                      'Receive personalized recommendations based on scanner'
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start space-x-3 text-slate-600">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-semibold leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => { setLocationAllowed(true); setStep(2); }}
                      className="flex-1 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-blue-500/15 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Allow Location</span>
                    </button>
                    <button
                      onClick={() => { setLocationAllowed(false); setStep(2); }}
                      className="flex-1 py-3.5 bg-white border border-[#E2E8F0] hover:border-slate-300 text-slate-600 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center active:scale-98"
                    >
                      Skip For Now
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: SELECT INTERESTS */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 text-left h-full py-2"
              >
                <div className="space-y-2.5">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">What Interests You?</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">Choose the opportunities you want to discover.</p>
                </div>

                {/* Grid of Interests */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
                  {interestOptions.map(opt => {
                    const isSelected = selectedInterests.includes(opt.id);
                    return (
                      <motion.button
                        key={opt.id}
                        onClick={() => toggleInterest(opt.id)}
                        className={`p-3.5 rounded-[20px] border flex flex-col items-center justify-center text-center cursor-pointer transition-all relative ${
                          isSelected
                            ? `bg-white border-blue-500 shadow-md shadow-blue-500/5 ring-1 ring-blue-500`
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSelected && (
                          <div className="absolute top-2.5 right-2.5 w-4.5 h-4.5 rounded-full bg-blue-500 text-white flex items-center justify-center border border-white">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </div>
                        )}
                        <div className={`p-2.5 rounded-xl ${isSelected ? opt.bg + ' ' + opt.text : 'bg-slate-50 text-slate-400'} border ${isSelected ? opt.border : 'border-slate-100'} mb-2`}>
                          <opt.icon className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-black text-slate-700 leading-none">{opt.label}</span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Prioritize Section */}
                <div className="bg-slate-50/70 border border-slate-200/40 p-4 rounded-2xl space-y-3">
                  <div>
                    <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider">Opportunity Preference Ranking</h4>
                    <p className="text-[10px] text-slate-400 font-medium">Reorder interests to prioritize recommended updates in your dashboard feed.</p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {selectedInterests.map((interestId, idx) => {
                      const opt = interestOptions.find(o => o.id === interestId);
                      if (!opt) return null;
                      return (
                        <div 
                          key={interestId}
                          className="px-3.5 py-2 bg-white border border-slate-200/80 rounded-xl flex items-center space-x-2 text-xs font-bold text-slate-700 shadow-sm"
                        >
                          <span className="text-slate-400 text-[10px]">#{idx + 1}</span>
                          <opt.icon className={`h-3.5 w-3.5 ${opt.text}`} />
                          <span>{opt.label}</span>
                          
                          {/* Reordering actions */}
                          <div className="flex items-center space-x-0.5 pl-1.5 border-l border-slate-100">
                            <button 
                              onClick={() => movePreference(idx, 'up')}
                              disabled={idx === 0}
                              className="p-0.5 hover:bg-slate-100 rounded disabled:opacity-35 text-slate-400 hover:text-slate-700 cursor-pointer"
                            >
                              <ChevronUp className="h-3 w-3" />
                            </button>
                            <button 
                              onClick={() => movePreference(idx, 'down')}
                              disabled={idx === selectedInterests.length - 1}
                              className="p-0.5 hover:bg-slate-100 rounded disabled:opacity-35 text-slate-400 hover:text-slate-700 cursor-pointer"
                            >
                              <ChevronDown className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PROFILE SETUP & NOTIFICATION PREFERENCES */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left h-full py-2"
              >
                {/* Profile settings fields */}
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Tell Us About Yourself</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">This details helps us customize local opportunities near your organization.</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Full Name input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={profileData.name}
                          onChange={handleProfileChange}
                          placeholder="Your Name"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-semibold"
                        />
                      </div>
                    </div>

                    {/* Organization input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">College / Organization</label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="organization"
                          value={profileData.organization}
                          onChange={handleProfileChange}
                          placeholder="College or Company Name"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-semibold"
                        />
                      </div>
                    </div>

                    {/* Role dropdown */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Role</label>
                      <select
                        name="role"
                        value={profileData.role}
                        onChange={handleProfileChange}
                        className="w-full px-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-semibold"
                      >
                        {['Student', 'Professional', 'Job Seeker', 'Developer', 'Entrepreneur', 'Other'].map(role => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notifications setup */}
                <div className="space-y-4 border-t border-slate-100 md:border-t-0 md:border-l md:border-slate-100 md:pl-8 pt-4 md:pt-0">
                  <div className="space-y-1">
                    <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">Notification Preferences</h3>
                    <p className="text-[10px] text-slate-400 font-medium">What updates would you like to receive?</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    {[
                      { key: 'internship', label: 'New Internships', desc: 'Alerts for nearby positions' },
                      { key: 'hackathon', label: 'Hackathon Alerts', desc: 'Deadlines and registrations' },
                      { key: 'event', label: 'Event Reminders', desc: 'Developer meetups & tech talks' },
                      { key: 'food', label: 'Food Offers', desc: 'Discounts nearby' },
                      { key: 'music', label: 'Music Fest Updates', desc: 'Artist lineups and ticket sales' },
                      { key: 'workshop', label: 'Workshop Notifications', desc: 'Seminars & learning sessions' }
                    ].map(item => (
                      <div 
                        key={item.key}
                        onClick={() => toggleNotification(item.key)}
                        className="flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-xl cursor-pointer border border-transparent hover:border-slate-200/50 transition-all"
                      >
                        <div className="text-left">
                          <p className="text-xs font-bold text-slate-800 leading-tight">{item.label}</p>
                          <p className="text-[9px] text-slate-400 leading-none mt-0.5">{item.desc}</p>
                        </div>
                        
                        {/* Custom Toggle Switch */}
                        <div className={`w-8 h-4.5 rounded-full p-0.5 transition-colors duration-200 shrink-0 ${notifications[item.key] ? 'bg-blue-600' : 'bg-slate-200'}`}>
                          <div className={`w-3.5 h-3.5 rounded-full bg-white transition-transform duration-200 ${notifications[item.key] ? 'translate-x-3.5' : 'translate-x-0'}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: PERSONALIZATION COMPLETE */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left h-full py-2 flex flex-col justify-between"
              >
                <div className="text-center space-y-2.5">
                  <h3 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">You're All Set 🎉</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">We've personalized Nearify based on your interests and location.</p>
                </div>

                {/* Selected Interests tags */}
                <div className="flex flex-wrap justify-center gap-1.5 py-1">
                  {selectedInterests.map(interestId => {
                    const opt = interestOptions.find(o => o.id === interestId);
                    if (!opt) return null;
                    return (
                      <span 
                        key={interestId}
                        className={`text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${opt.bg} ${opt.text} border ${opt.border}`}
                      >
                        {opt.label}
                      </span>
                    );
                  })}
                </div>

                {/* Customized Previews Grid */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Your Recommended Matches</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Recommendation Card 1: Internship */}
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-100 flex-shrink-0">
                        <Briefcase className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="text-[8px] font-black text-blue-500 uppercase block tracking-wider leading-none">Recommended Internship</span>
                        <h5 className="text-xs font-bold text-slate-800 mt-1 leading-tight truncate">Frontend Developer Intern</h5>
                        <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">Stripe HQ • 2.5 km away</p>
                      </div>
                    </div>

                    {/* Recommendation Card 2: Hackathon */}
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-100 flex-shrink-0">
                        <Trophy className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="text-[8px] font-black text-indigo-500 uppercase block tracking-wider leading-none">Upcoming Hackathon</span>
                        <h5 className="text-xs font-bold text-slate-800 mt-1 leading-tight truncate">AI Innovation Challenge</h5>
                        <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">Google Cloud • Starts in 3 Days</p>
                      </div>
                    </div>

                    {/* Recommendation Card 3: Event */}
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-100 flex-shrink-0">
                        <Calendar className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="text-[8px] font-black text-cyan-500 uppercase block tracking-wider leading-none">Nearby Event</span>
                        <h5 className="text-xs font-bold text-slate-800 mt-1 leading-tight truncate">Developer Meetup</h5>
                        <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">Vite Team • 1.2 km away</p>
                      </div>
                    </div>

                    {/* Recommendation Card 4: Food Offer */}
                    <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-100 flex-shrink-0">
                        <Utensils className="h-4.5 w-4.5" />
                      </div>
                      <div className="text-left min-w-0">
                        <span className="text-[8px] font-black text-orange-500 uppercase block tracking-wider leading-none">Food Offer Near You</span>
                        <h5 className="text-xs font-bold text-slate-800 mt-1 leading-tight truncate">50% Off Combo</h5>
                        <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">Pizza Palace • 0.8 km away</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* BOTTOM NAV ROWS */}
        <div className="w-full flex justify-between items-center mt-6 pt-4 border-t border-slate-100 shrink-0">
          <div>
            {step > 1 && step < 4 && (
              <button
                onClick={() => setStep(prev => prev - 1)}
                className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous Step</span>
              </button>
            )}
          </div>
          
          <button
            onClick={() => {
              if (step < 4) {
                setStep(prev => prev + 1);
              } else {
                handleFinalSubmit();
              }
            }}
            className="px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-blue-500/15 cursor-pointer flex items-center gap-2 active:scale-98"
          >
            <span>{step === 4 ? 'Explore Dashboard' : 'Next Step'}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>

      {/* FLY-IN WELCOME TRANSITION OVERLAY (Cinematic Discovery Sequence) */}
      <AnimatePresence>
        {isCompleting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-slate-950 z-50 flex flex-col justify-center items-center p-8 text-white select-none pointer-events-auto"
          >
            {/* Ambient circular radar rings */}
            <div className="absolute w-[800px] h-[800px] rounded-full border border-slate-800/20 pointer-events-none flex items-center justify-center">
              <div className="w-[600px] h-[600px] rounded-full border border-slate-800/20 pointer-events-none flex items-center justify-center">
                <div className="w-[400px] h-[400px] rounded-full border border-slate-800/20 pointer-events-none" />
              </div>
            </div>

            {/* Glowing spot background light */}
            <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Animated & Pulsing Logo */}
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1], 
                y: [0, -4, 0],
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="mb-8 z-10 flex items-center space-x-3 bg-slate-900/80 border border-slate-800/80 px-6 py-3 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.15)] backdrop-blur-md"
            >
              <Logo variant="icon" />
              <span className="text-base font-black text-white font-display tracking-tight">
                Near<span className="text-blue-500">ify</span>
              </span>
            </motion.div>

            {/* Discovery Logs */}
            <div className="h-12 flex justify-center items-center z-10 my-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={messageIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-sm md:text-base font-bold text-emerald-400 tracking-wide flex items-center gap-2"
                >
                  {discoveryMessages[messageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Progress HUD */}
            <div className="w-full max-w-sm bg-slate-900/40 border border-slate-800/60 p-4.5 rounded-2xl space-y-3.5 shadow-inner z-10 my-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-blue-400 font-bold tracking-wide">
                  {transitionProgress}% <span className="text-slate-500 mx-1.5">→</span> <span className="text-slate-200 uppercase tracking-wider text-[10px]">{getProgressPhase(transitionProgress)}</span>
                </span>
                <span className="text-slate-500 text-[9px] uppercase tracking-widest font-sans font-bold">Scanning</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse"
                  animate={{ width: `${transitionProgress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
            </div>

            {/* Simulated mini dashboard preview container (Center) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
              className="w-[320px] h-[200px] bg-slate-900/60 border border-slate-800/80 rounded-[24px] shadow-2xl relative overflow-hidden backdrop-blur-md flex flex-col items-center justify-center"
            >
              {/* Radar sweep lines */}
              <div className="w-24 h-24 rounded-full border border-slate-800/60 flex items-center justify-center relative bg-slate-950/20">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping absolute" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 z-10" />
              </div>
              <span className="mt-3 text-[8px] font-black text-slate-500 uppercase tracking-widest">Active Discovery Scanning</span>
            </motion.div>

            {/* FLYING OPPORTUNITY CARDS WITH CINEMATIC DRIFT & FLOATING MOTION */}
            {/* Card 1: Internship (flies from top-left) */}
            <motion.div
              initial={{ x: -400, y: -300, opacity: 0 }}
              animate={{ x: -160, y: -90, opacity: 1 }}
              transition={{ delay: 0.8, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-1">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 text-xs">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-blue-400 uppercase tracking-widest block leading-none">Internship</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">Frontend Intern</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">Stripe HQ • 2.5 km</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Hackathon (flies from top-right) */}
            <motion.div
              initial={{ x: 400, y: -300, opacity: 0 }}
              animate={{ x: 160, y: -120, opacity: 1 }}
              transition={{ delay: 1.2, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-2">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 text-xs">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-indigo-400 uppercase tracking-widest block leading-none">Hackathon</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">AI Challenge</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">Google Cloud • 3d</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Event (flies from bottom-left) */}
            <motion.div
              initial={{ x: -400, y: 300, opacity: 0 }}
              animate={{ x: -160, y: 80, opacity: 1 }}
              transition={{ delay: 1.6, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-3">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 text-xs">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-cyan-400 uppercase tracking-widest block leading-none">Tech Event</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">Dev Meetup</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">Vite Team • Nearby</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Food Offer (flies from bottom-right) */}
            <motion.div
              initial={{ x: 400, y: 300, opacity: 0 }}
              animate={{ x: 160, y: 100, opacity: 1 }}
              transition={{ delay: 2.0, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-4">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 shrink-0 text-xs">
                    <Utensils className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-orange-400 uppercase tracking-widest block leading-none">Food Offer</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">50% Off Combo</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">Pizza Palace • 0.8 km</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Music Fest (flies from left-middle) */}
            <motion.div
              initial={{ x: -400, y: 0, opacity: 0 }}
              animate={{ x: -170, y: -10, opacity: 1 }}
              transition={{ delay: 2.4, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-5">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 shrink-0 text-xs">
                    <Music className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-fuchsia-400 uppercase tracking-widest block leading-none">Music Fest</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">Music Festival</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">SoundWave Arena</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 6: Workshop (flies from right-middle) */}
            <motion.div
              initial={{ x: 400, y: 0, opacity: 0 }}
              animate={{ x: 170, y: -30, opacity: 1 }}
              transition={{ delay: 2.8, duration: 6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute z-20 pointer-events-none"
            >
              <div className="animate-float-1">
                <div className="p-3 bg-slate-900/80 border border-slate-800/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl flex items-center space-x-3 w-[180px]">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 text-xs">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[7px] font-black text-emerald-400 uppercase tracking-widest block leading-none">Workshop</span>
                    <h6 className="text-[11px] font-bold text-white truncate leading-tight mt-0.5">React Seminar</h6>
                    <p className="text-[8px] text-slate-400 truncate mt-0.5">Co-Lab Space • 4 Wks</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Radar scanner sweep indicator ripple */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.4, 0], scale: [1, 2.2, 3] }}
              transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
              className="absolute w-48 h-48 border-2 border-blue-500/50 rounded-full pointer-events-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL SUCCESS SCREEN OVERLAYS */}
      <AnimatePresence>
        {showFinalSuccess && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, scale: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(15px)' }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 bg-slate-950/95 z-55 flex flex-col justify-center items-center space-y-6 text-white pointer-events-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              className="w-24 h-24 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-4xl shadow-[0_0_60px_rgba(16,185,129,0.25)] relative"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border border-emerald-500/40"
              />
              🎉
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl font-black text-center text-white tracking-tight leading-tight max-w-md px-6"
            >
              ✨ Your personalized opportunities are ready.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-[10px] font-black text-slate-500 uppercase tracking-widest animate-pulse"
            >
              Entering Dashboard...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
