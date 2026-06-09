import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Briefcase, Trophy, Calendar, Utensils, Music, Eye, EyeOff, ArrowLeft, ArrowRight, Sparkles, MapPin, Mail, Lock, User, Compass, Settings, Search, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';
import { useAuth } from '../context/AuthContext';

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, login, signup, loginWithProvider } = useAuth();
  
  const getInitialTab = () => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    return mode === 'signup' ? 'signup' : 'login';
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Sync tab with URL search parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    if (mode === 'signup' || mode === 'login') {
      setActiveTab(mode);
    }
  }, [location.search]);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const [notifIndex, setNotifIndex] = useState(0);
  const notifications = [
    { text: "New Internship Available", detail: "Frontend Developer Intern" },
    { text: "New Hackathon Open", detail: "AI Innovation Challenge" },
    { text: "Food Offer Nearby", detail: "50% Off Combo" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex(prev => (prev + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (activeTab === 'login') {
      if (!formData.email || !formData.password) {
        setMessage('Please fill in all fields.');
        setIsSuccess(false);
        return;
      }
      try {
        setIsSuccess(true);
        setMessage('Signing in...');
        await login(formData.email, formData.password);
        setMessage('Logged in successfully! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } catch (err) {
        setMessage('Authentication failed. Please try again.');
        setIsSuccess(false);
      }
    } else {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setMessage('Please fill in all fields.');
        setIsSuccess(false);
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setMessage('Passwords do not match.');
        setIsSuccess(false);
        return;
      }
      try {
        setIsSuccess(true);
        setMessage('Creating account...');
        await signup(formData.name, formData.email, formData.password);
        setMessage('Account created successfully! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } catch (err) {
        setMessage('Account registration failed. Please try again.');
        setIsSuccess(false);
      }
    }
  };

  // 3D parallax offsets for right visual section
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    setCoords({
      x: (clientX / width - 0.5) * 35,
      y: (clientY / height - 0.5) * 35
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F1F5F9] w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative select-none font-sans"
    >
      {/* CSS Float Keyframes */}
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
      `}</style>

      {/* Top Left Navigation Back Button */}
      <div className="absolute top-6 left-6 z-40">
        <Link 
          to="/" 
          className="group flex items-center justify-center w-9 h-9 rounded-full bg-white/90 border border-slate-200/60 shadow-sm hover:shadow text-slate-500 hover:text-slate-800 opacity-90 hover:opacity-100 transition-all duration-300 active:scale-90"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </Link>
      </div>

      {/* CENTERED SPLIT-SCREEN CARD CONTAINER */}
      <div 
        onMouseMove={handleMouseMove}
        className="max-w-5xl w-full bg-white rounded-[32px] overflow-hidden flex shadow-lg border border-[#E2E8F0]/80 h-[650px] md:h-[650px] lg:h-[700px] relative z-10"
      >
        
        {/* LEFT SECTION (Form Side) */}
        <div className="w-full md:w-[45%] lg:w-[42%] p-6 sm:p-8 flex flex-col justify-center text-left bg-white relative border-r border-slate-100 z-20">
          
          <div className="w-full max-w-[330px] mx-auto space-y-4 flex flex-col justify-center h-full">
            
            {/* Logo at Top Left of Form for visibility on mobile */}
            <div className="mb-1">
              <Logo variant="full" />
            </div>

            {/* Form Header */}
            <div className="space-y-0.5">
              <h2 className="text-xl font-black font-display text-slate-800 tracking-tight">
                {activeTab === 'login' ? 'Welcome back' : 'Create an account'}
              </h2>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {activeTab === 'login' 
                  ? 'Sign in to continue discovering opportunities.' 
                  : 'Join Nearify to start exploring opportunities.'}
              </p>
            </div>

            {/* Form Feedback Message */}
            <AnimatePresence mode="wait">
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`p-3 rounded-xl text-xs font-semibold border text-center ${
                    isSuccess 
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                      : 'bg-rose-50 text-rose-600 border-rose-100'
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Authentication Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <AnimatePresence mode="wait">
                {activeTab === 'login' ? (
                  /* LOGIN PANEL */
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 pl-0.5 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between pl-0.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Password</label>
                        <a 
                          href="#forgot" 
                          onClick={(e) => { 
                            e.preventDefault(); 
                            setMessage('Password reset instructions sent!'); 
                            setIsSuccess(true); 
                          }} 
                          className="text-[10px] font-bold text-[#2563EB] hover:text-[#1d4ed8]"
                        >
                          Forgot?
                        </a>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter password"
                          className="w-full pl-12 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* SIGN UP PANEL */
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3.5"
                  >
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 pl-0.5 uppercase tracking-wider">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 pl-0.5 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 pl-0.5 uppercase tracking-wider">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          required
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter password"
                          className="w-full pl-12 pr-10 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 pl-0.5 uppercase tracking-wider">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          required
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm password"
                          className="w-full pl-12 pr-4 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-medium"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-2xl text-xs font-bold transition-all shadow-md shadow-blue-500/15 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>{activeTab === 'login' ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {activeTab === 'login' && (
                <>
                  {/* Or separator */}
                  <div className="relative flex py-1 items-center">
                    <div className="flex-grow border-t border-slate-200/60"></div>
                    <span className="flex-shrink mx-3 text-[8px] text-slate-400 font-bold uppercase tracking-wider">or continue with</span>
                    <div className="flex-grow border-t border-slate-200/60"></div>
                  </div>

                  {/* Social Google/GitHub SSO login buttons */}
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          setMessage('Signing in with Google...');
                          setIsSuccess(true);
                          await loginWithProvider('Google');
                          setMessage('Redirecting to Dashboard...');
                          setTimeout(() => navigate('/dashboard'), 800);
                        } catch (e) {
                          setMessage('Google authentication failed.');
                          setIsSuccess(false);
                        }
                      }}
                      className="w-full py-2.5 bg-white border border-[#E2E8F0] hover:border-slate-300 rounded-2xl text-xs font-semibold text-slate-600 transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-sm active:scale-98"
                    >
                      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                      <span>Continue with Google</span>
                    </button>

                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          setMessage('Signing in with GitHub...');
                          setIsSuccess(true);
                          await loginWithProvider('GitHub');
                          setMessage('Redirecting to Dashboard...');
                          setTimeout(() => navigate('/dashboard'), 800);
                        } catch (e) {
                          setMessage('GitHub authentication failed.');
                          setIsSuccess(false);
                        }
                      }}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2.5 shadow-sm active:scale-98"
                    >
                      <svg className="h-4 w-4 shrink-0 fill-current" viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      <span>Continue with GitHub</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate('/')}
                      className="w-full text-center text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors py-0.5 block"
                    >
                      Continue as Guest
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* Bottom Toggle Link between Sign In and Sign Up */}
            <div className="text-xs font-semibold text-slate-500 text-center pt-1">
              {activeTab === 'login' ? (
                <span>New to Nearify? <button type="button" onClick={() => { setActiveTab('signup'); setMessage(''); }} className="text-[#2563EB] hover:text-[#1d4ed8] font-bold cursor-pointer">Create an account</button></span>
              ) : (
                <span>Already have an account? <button type="button" onClick={() => { setActiveTab('login'); setMessage(''); }} className="text-[#2563EB] hover:text-[#1d4ed8] font-bold cursor-pointer">Sign In</button></span>
              )}
            </div>

          </div>

        </div>

        {/* RIGHT SECTION (Visual / Premium Live Opportunity Dashboard Preview) - Hidden on Mobile */}
        <div className="hidden md:flex md:w-[55%] lg:w-[58%] bg-slate-950 p-10 flex-col justify-between overflow-hidden relative text-white border-l border-slate-900 z-10 select-none">
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
          
          {/* Dark grid line highlights */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1.5px,transparent_1.5px),linear-gradient(to_bottom,#0f172a_1.5px,transparent_1.5px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_80%,transparent_100%)] pointer-events-none opacity-40" />

          {/* Ambient glowing radial gradients for premium depth */}
          <div className="absolute top-[-5%] right-[-5%] w-[280px] h-[280px] bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-5%] w-[320px] h-[320px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-[40%] right-[10%] w-[250px] h-[250px] bg-fuchsia-600/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header row in Showcase */}
          <div className="z-10 flex justify-between items-center">
            {/* Custom light text Logo */}
            <div className="flex items-center space-x-2.5">
              <Logo variant="icon" />
              <span className="text-lg font-bold font-display tracking-tight text-white">
                Near<span className="text-blue-500">ify</span>
              </span>
            </div>
            
            {/* Live scanning badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="pl-1">Live Dashboard</span>
            </div>
          </div>

          {/* Premium Glassmorphic Dashboard Window Mockup */}
          <div className="my-auto w-full h-[375px] bg-slate-900/40 border border-slate-800/80 rounded-[28px] relative overflow-hidden flex flex-row shadow-[0_30px_70px_rgba(0,0,0,0.5)] backdrop-blur-md z-10 bg-[radial-gradient(rgba(37,99,235,0.01)_1px,transparent_1px)] [background-size:16px_16px]">
            
            {/* Live Notification Bar inside Dashboard Mockup */}
            <div className="absolute top-4 right-4 z-40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={notifIndex}
                  initial={{ opacity: 0, x: 30, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 30, scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  className="bg-slate-950/90 border border-slate-800/80 px-3.5 py-2 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.4)] flex items-center space-x-2.5 pointer-events-none max-w-[210px]"
                >
                  <span className="text-amber-400 shrink-0 text-sm animate-bounce">🔔</span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-100 leading-tight truncate">{notifications[notifIndex].text}</p>
                    <p className="text-[8px] text-slate-400 font-semibold mt-0.5 truncate">{notifications[notifIndex].detail}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar Mock */}
            <div className="w-12 h-full bg-slate-950/70 border-r border-slate-800/60 flex flex-col py-5 gap-5 items-center shrink-0">
              <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 mb-1 relative">
                <div className="w-1 h-3 bg-blue-500 rounded-r absolute left-0 top-1.5" />
                <Compass className="h-3.5 w-3.5" />
              </div>
              <Briefcase className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
              <Trophy className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
              <Calendar className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
              <Utensils className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
              <Music className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer transition-colors" />
              <div className="mt-auto">
                <Settings className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* Main Panel Content Mockup */}
            <div className="flex-grow flex flex-col h-full bg-slate-900/10">
              {/* Header Mock */}
              <div className="h-12 border-b border-slate-800/50 px-4 flex items-center justify-between bg-slate-950/20">
                <div className="relative flex items-center">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3 w-3 text-slate-500" />
                  <div className="w-28 h-6 pl-8 bg-slate-900/60 border border-slate-800/30 rounded-lg text-[8px] text-slate-500 flex items-center font-bold">
                    Search...
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <div className="text-[8px] font-bold bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-md flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-blue-400 animate-ping" />
                    <span>📍 Near You</span>
                  </div>
                  <Bell className="h-3 w-3 text-slate-500" />
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-[8px] font-black text-white">
                    U
                  </div>
                </div>
              </div>

              {/* Contents Mock */}
              <div className="p-4 flex-grow flex flex-col justify-between">
                {/* Stats widgets */}
                <div className="grid grid-cols-2 gap-3 z-0">
                  <div className="p-2.5 bg-slate-950/60 border border-slate-800/60 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] text-left">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block">Scanning Radius</span>
                    <span className="block text-xs font-black text-white mt-0.5">5.0 km radius</span>
                    <span className="block text-[7px] font-bold text-blue-400 mt-0.5">Active locator running</span>
                  </div>
                  <div className="p-2.5 bg-slate-950/60 border border-slate-800/60 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] text-left">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-wider block">Nearby Matches</span>
                    <span className="block text-xs font-black text-emerald-400 mt-0.5">142 Opportunities</span>
                    <span className="block text-[7px] font-bold text-slate-400 mt-0.5">🔥 24 matching tags</span>
                  </div>
                </div>

                {/* Simulated radar locator scan */}
                <div className="w-32 h-32 rounded-full border border-slate-800/70 relative flex items-center justify-center overflow-hidden mx-auto mt-1 z-0 bg-slate-950/30">
                  <div className="absolute w-[70%] h-[70%] rounded-full border border-slate-800/40 pointer-events-none" />
                  <div className="absolute w-[40%] h-[40%] rounded-full border border-slate-800/40 pointer-events-none" />
                  
                  {/* Rotating Radar Sweep Line */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    className="absolute inset-0 origin-center bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent border-t border-blue-500/30 rounded-full pointer-events-none"
                  />

                  {/* Pulsing Match Nodes */}
                  <div className="absolute top-[25%] left-[28%] w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)] animate-pulse" />
                  <div className="absolute bottom-[28%] right-[24%] w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  <div className="absolute top-[52%] left-[66%] w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_6px_rgba(251,146,60,0.8)] animate-pulse" />
                  <div className="absolute bottom-[58%] left-[22%] w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_8px_rgba(192,132,252,0.8)] animate-pulse" />

                  {/* Center Node */}
                  <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping absolute" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 z-10" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* FLOATING 3D OPPORTUNITY CARDS */}
          {/* Card 1: Internship (Top Left) */}
          <motion.div
            className="absolute top-[18%] left-[3%] z-20 pointer-events-auto"
            style={{ x: coords.x * 0.7, y: coords.y * 0.7 }}
          >
            <div className="animate-float-1">
              <motion.div 
                className="w-[190px] p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center space-x-2.5 cursor-pointer hover:border-blue-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(59,130,246,0.3)' }}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex-shrink-0">
                  <Briefcase className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black tracking-wider text-blue-400 uppercase leading-none">💼 New Internship</span>
                  <h4 className="text-[11px] font-bold text-white mt-1 leading-tight truncate">Frontend Developer Intern</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">📍 2.5 km Away</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Hackathon (Top Right) */}
          <motion.div
            className="absolute top-[25%] right-[3%] z-20 pointer-events-auto"
            style={{ x: coords.x * -0.6, y: coords.y * -0.6 }}
          >
            <div className="animate-float-2">
              <motion.div 
                className="w-[190px] p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center space-x-2.5 cursor-pointer hover:border-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(99,102,241,0.3)' }}
              >
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex-shrink-0">
                  <Trophy className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black tracking-wider text-indigo-400 uppercase leading-none">🏆 Upcoming Hackathon</span>
                  <h4 className="text-[11px] font-bold text-white mt-1 leading-tight truncate">AI Innovation Challenge</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">⏰ Starts in 3 Days</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 3: Tech Event (Bottom Left) */}
          <motion.div
            className="absolute bottom-[22%] left-[1%] z-20 pointer-events-auto"
            style={{ x: coords.x * 0.5, y: coords.y * 0.5 }}
          >
            <div className="animate-float-3">
              <motion.div 
                className="w-[190px] p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center space-x-2.5 cursor-pointer hover:border-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(6,182,212,0.3)' }}
              >
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex-shrink-0">
                  <Calendar className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black tracking-wider text-cyan-400 uppercase leading-none">🎉 Tech Event</span>
                  <h4 className="text-[11px] font-bold text-white mt-1 leading-tight truncate">Developer Meetup</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">📍 Nearby</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Food Offer (Bottom Right) */}
          <motion.div
            className="absolute bottom-[18%] right-[1%] z-20 pointer-events-auto"
            style={{ x: coords.x * -0.4, y: coords.y * -0.4 }}
          >
            <div className="animate-float-4">
              <motion.div 
                className="w-[190px] p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex items-center space-x-2.5 cursor-pointer hover:border-orange-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(249,115,22,0.3)' }}
              >
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex-shrink-0">
                  <Utensils className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[8px] font-black tracking-wider text-orange-400 uppercase leading-none">🍔 Food Offer</span>
                  <h4 className="text-[11px] font-bold text-white mt-1 leading-tight truncate">50% Off Combo</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">📍 Available Nearby</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Card 5: Music Fest (Center Right Overlay) */}
          <motion.div
            className="absolute top-[48%] left-[45%] z-30 pointer-events-auto font-sans"
            style={{ x: coords.x * 0.3, y: coords.y * 0.3 }}
          >
            <div className="animate-float-5">
              <motion.div 
                className="w-[190px] p-3 bg-slate-900/90 border border-slate-800 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex items-center space-x-2.5 cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(236,72,153,0.3)' }}
              >
                <div className="p-2 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 flex-shrink-0">
                  <Music className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0 font-sans">
                  <span className="block text-[8px] font-black tracking-wider text-fuchsia-400 uppercase leading-none">🎵 Music Fest</span>
                  <h4 className="text-[11px] font-bold text-white mt-1 leading-tight truncate">Weekend Music Festival</h4>
                  <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">🎟 Registration Open</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Text / Quote in Showcase */}
          <div className="text-left space-y-2.5 z-10 pl-2">
            <h3 className="text-lg font-extrabold font-display text-white tracking-tight leading-tight">
              "Your next opportunity is closer than you think."
            </h3>
            <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-[95%]">
              Discover internships, hackathons, events, workshops, and exclusive offers around you.
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
