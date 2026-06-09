import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  ArrowLeft, 
  Heart, 
  Share2, 
  CheckCircle, 
  Ticket, 
  ShieldAlert, 
  Map, 
  Sparkles,
  Users,
  Compass,
  MessageSquare,
  ThumbsUp,
  Download,
  Info,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Robust Database of Events
const EVENTS_DATABASE = {
  'tech-innovation-summit-2026': {
    id: 'tech-innovation-summit-2026',
    title: 'Tech Innovation Summit 2026',
    organizer: 'Nearify',
    category: 'Technology & AI',
    date: '15 June 2026',
    time: '10:00 AM - 5:00 PM',
    venue: 'Hyderabad Convention Center',
    banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60',
    description: 'The Tech Innovation Summit 2026 brings together global technology leaders, visionary developers, and industry pioneers to explore the next frontier of artificial intelligence, cloud infrastructure, and decentralized computing. This year\'s summit focuses on shifting prototypes into sustainable production-ready systems.',
    purpose: 'To foster collaboration among top engineering minds, bridge the gap between AI theory and industry implementation, and provide networking avenues for startup founders looking to deploy next-generation architectures.',
    highlights: [
      '3 Dedicated Tracks: AI/ML, Cloud-Native Scalability, & Web3 Dev',
      'Hands-on interactive sandbox labs with industry experts',
      'Exclusive high-velocity networking lounge for premium pass holders',
      'Live tech demonstration and venture capitalist pitch desk'
    ],
    schedule: [
      { time: '10:00 AM', title: 'Registration & Check-In', desc: 'Pick up badges, conference materials, and enjoy complimentary welcome beverages.' },
      { time: '11:00 AM', title: 'Opening Ceremony & Vision Keynote', desc: 'Inaugural address by the Nearify core engineering and product leadership team outlining the next decade of technology.' },
      { time: '12:00 PM', title: 'Deep-Dive Keynote: Autonomous Agent Architectures', desc: 'Exploring production deployment of agentic AI models, state consistency, and self-correcting logic pipelines.' },
      { time: '1:00 PM', title: 'Networking Lunch & Startup Sandbox Showcase', desc: 'Buffet lunch paired with interactive booths showcasing local tech startups and sandbox experiments.' },
      { time: '2:00 PM', title: 'Panel Discussion: The Cloud-Native Scalability Frontier', desc: 'Panelists from Microsoft, AWS, and Google debate container orchestration, global edge caching, and cost-efficiency.' },
      { time: '3:30 PM', title: 'Lightning Tech Talks & Sandbox Demonstrations', desc: 'Quick 15-minute high-fidelity code-first presentations on edge computing and reactive frontend states.' },
      { time: '4:30 PM', title: 'Closing Session & Venture Awards Announcement', desc: 'Award distribution for sandbox winners and closing remarks followed by a networking mixer.' }
    ],
    speakers: [
      { name: 'John Smith', designation: 'Senior Engineer', company: 'Microsoft', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=60' },
      { name: 'Dr. Sarah Connor', designation: 'Head of AI Research', company: 'Google DeepMind', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=60' },
      { name: 'David Lee', designation: 'Principal Architect', company: 'AWS Cloud', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=60' },
      { name: 'Elena Rostova', designation: 'Director of Product', company: 'Nearify', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=60' }
    ],
    venueInfo: {
      address: 'Hyderabad Convention Center, HITEC City, Hyderabad, Telangana 500081',
      mapCoords: '17.4483° N, 78.3741° E',
      parking: 'Dedicated multi-level parking available on premises (Free for summit ticket holders). Valet service at Main Entrance Gate A.',
      mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=300&q=60'
    },
    seats: { total: 500, remaining: 120 },
    attendees: { count: 1250, avatars: ['AS', 'JD', 'KL', 'MR', 'TK', 'HB', 'VY', 'SP'] },
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=60'
    ],
    reviews: [
      { rating: 5, text: 'Amazing event and networking opportunities. Met my current tech partners here!', author: 'Naga Aishwarya', date: 'June 2025' },
      { rating: 4, text: 'Great speakers and organization. The AI panel discussion was exceptionally valuable.', author: 'Rohit K.', date: 'May 2025' },
      { rating: 5, text: 'The hands-on sandbox labs were well structured. Learned a lot about container deployment.', author: 'Tanmay S.', date: 'May 2025' }
    ],
    similar: ['ai-summit-2026', 'frontend-conference-2026', 'hackathon-expo-2026']
  },
  'ai-summit-2026': {
    id: 'ai-summit-2026',
    title: 'AI Summit & LLM Conference',
    organizer: 'Nearify AI Lab',
    category: 'Artificial Intelligence',
    date: '28 June 2026',
    time: '9:00 AM - 6:00 PM',
    venue: 'VITS Innovation Hall, Bangalore',
    banner: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=60',
    description: 'The AI Summit & LLM Conference brings together machine learning researchers, NLP scientists, and prompt engineering teams to discuss the scaling laws, fine-tuning methodologies, and safety constraints of large foundational models.',
    purpose: 'Deep dive into local inference engines, open-source model optimization, and agentic workflows to build business products.',
    highlights: [
      'Interactive LLM fine-tuning code workshop sessions',
      'Live debate on open-source vs. proprietary foundational APIs',
      'AI Hack-Zone showcase featuring student prototypes'
    ],
    schedule: [
      { time: '9:00 AM', title: 'Breakfast & NLP Hub setup', desc: 'Set up devices, fetch API keys, and connect to the conference dev network.' },
      { time: '10:00 AM', title: 'Keynote: Scaling Frontiers of AI Systems', desc: 'A review of the transition from text-only models to multimodal agent ecosystems.' }
    ],
    speakers: [
      { name: 'Dr. Sarah Connor', designation: 'Head of AI Research', company: 'Google DeepMind', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=60' }
    ],
    venueInfo: {
      address: 'VITS Innovation Hall, Outer Ring Road, Bangalore, Karnataka 560103',
      mapCoords: '12.9279° N, 77.6801° E',
      parking: 'Basement Parking available (₹50/hour). Electric vehicle charging stations on B1 Level.',
      mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=300&q=60'
    },
    seats: { total: 300, remaining: 45 },
    attendees: { count: 860, avatars: ['RC', 'MK', 'YT', 'LK'] },
    gallery: [
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=60'
    ],
    reviews: [
      { rating: 5, text: 'Fantastic speakers and highly applicable workshops.', author: 'Rohan D.', date: 'March 2026' }
    ],
    similar: ['tech-innovation-summit-2026', 'hackathon-expo-2026']
  },
  'frontend-conference-2026': {
    id: 'frontend-conference-2026',
    title: 'Frontend Architecture Conference 2026',
    organizer: 'React India Network',
    category: 'UI/UX & Frontend',
    date: '12 July 2026',
    time: '11:00 AM - 4:00 PM',
    venue: 'T-Hub 2.0 Seminar Hall, Hyderabad',
    banner: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60',
    description: 'An industry conference focused purely on building fast, accessible, and high-fidelity frontends. Discuss server components, micro-frontends, state libraries, and advanced CSS rendering systems.',
    purpose: 'Equip frontend engineers with tools and frameworks to optimize bundle sizes, visual rendering cycles, and core web vitals.',
    highlights: [
      'Interactive panels on React 19, Rolldown compiler, and Vite development pipelines',
      'Live UI design audit lounge'
    ],
    schedule: [
      { time: '11:00 AM', title: 'Welcome and Compiler Evolution', desc: 'Understanding Rolldown, Vite 8, and the next-generation bundler convergence.' }
    ],
    speakers: [
      { name: 'John Smith', designation: 'Senior Engineer', company: 'Microsoft', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=60' }
    ],
    venueInfo: {
      address: 'T-Hub 2.0, Madhapur, Hyderabad, Telangana 500081',
      mapCoords: '17.4474° N, 78.3762° E',
      parking: 'Limited guest parking inside T-Hub. Extended parking available at HITEX Metro grounds.',
      mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=300&q=60'
    },
    seats: { total: 400, remaining: 190 },
    attendees: { count: 620, avatars: ['PK', 'SM', 'AM', 'NT'] },
    gallery: [
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=500&q=60'
    ],
    reviews: [
      { rating: 5, text: 'Learned so much about bundle optimization and server actions.', author: 'Divya M.', date: 'May 2026' }
    ],
    similar: ['tech-innovation-summit-2026', 'startup-meetup-2026']
  },
  'hackathon-expo-2026': {
    id: 'hackathon-expo-2026',
    title: 'National Hackathon Expo & Demo Day',
    organizer: 'Nearify Sandbox Team',
    category: 'Hackathon & Competitions',
    date: '20 June 2026',
    time: '9:00 AM - 8:00 PM',
    venue: 'IIT Hyderabad Seminar Hall',
    banner: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
    description: 'The national demo day where the top 30 hackathon project winners from across India gather to pitch their functional prototypes to angel investors, accelerators, and tech companies.',
    purpose: 'To bridge student developer creations with institutional capital and early stage incubator support.',
    highlights: [
      'Over ₹10 Lakhs in grants and prototyping milestones distributed live',
      'Fireside chats with developers who turned hackathon builds into startups'
    ],
    schedule: [
      { time: '9:00 AM', title: 'Incubation Sandbox & Pitch Setup', desc: 'Teams set up visual booths and test projection assets.' }
    ],
    speakers: [
      { name: 'Elena Rostova', designation: 'Director of Product', company: 'Nearify', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=60' }
    ],
    venueInfo: {
      address: 'IIT Hyderabad Main Road, Kandi, Sangareddy, Telangana 502285',
      mapCoords: '17.5947° N, 78.1226° E',
      parking: 'Ample visitor parking available at IITH Gate 1 Parking Deck.',
      mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=300&q=60'
    },
    seats: { total: 200, remaining: 15 },
    attendees: { count: 320, avatars: ['SG', 'HS', 'KP', 'JN'] },
    gallery: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=500&q=60'
    ],
    reviews: [
      { rating: 4, text: 'Amazing builds. Very inspiring designs and execution.', author: 'Vinay T.', date: 'May 2026' }
    ],
    similar: ['tech-innovation-summit-2026', 'ai-summit-2026']
  },
  'startup-meetup-2026': {
    id: 'startup-meetup-2026',
    title: 'Nearify Founder & VC Meetup',
    organizer: 'Nearify Capital',
    category: 'Business & Networking',
    date: '05 July 2026',
    time: '5:00 PM - 9:00 PM',
    venue: 'Sheraton Heights Ballroom, Hyderabad',
    banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=60',
    description: 'An exclusive networking evening connecting early-stage founders with leading venture capitalists and angel networks in a premium, informal setting. Pitch-free networking.',
    purpose: 'Spark conversations, build mentor relationships, and discover potential funding streams for scalable software architectures.',
    highlights: [
      'Over 40 active VC firms and angel networks attending',
      'No formal pitches: open dialogue, premium beverages, and structural panels'
    ],
    schedule: [
      { time: '5:00 PM', title: 'Open Mixer & Reception', desc: 'Grab refreshments and network with attendees at specified sector tables.' }
    ],
    speakers: [
      { name: 'David Lee', designation: 'Principal Architect', company: 'AWS Cloud', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=60' }
    ],
    venueInfo: {
      address: 'Sheraton Heights, Financial District, Gachibowli, Hyderabad, 500032',
      mapCoords: '17.4172° N, 78.3421° E',
      parking: 'Complimentary hotel valet parking available for all registered meetup participants.',
      mapPreview: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&h=300&q=60'
    },
    seats: { total: 150, remaining: 60 },
    attendees: { count: 180, avatars: ['FL', 'VC', 'MD', 'ST'] },
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=500&q=60'
    ],
    reviews: [
      { rating: 5, text: 'Incredibly valuable. Established multiple follow-up calls with partners.', author: 'Amrita R.', date: 'May 2026' }
    ],
    similar: ['tech-innovation-summit-2026', 'frontend-conference-2026']
  }
};

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const eventId = id || 'tech-innovation-summit-2026';
  
  const event = EVENTS_DATABASE[eventId] || EVENTS_DATABASE['tech-innovation-summit-2026'];
  
  // Interactive States
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [remainingSeats, setRemainingSeats] = useState(event.seats.remaining);
  const [attendeeCount, setAttendeeCount] = useState(event.attendees.count);
  const [attendeeAvatars, setAttendeeAvatars] = useState(event.attendees.avatars);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState(null);

  // Sync state variables when event changes
  useEffect(() => {
    setRemainingSeats(event.seats.remaining);
    setAttendeeCount(event.attendees.count);
    setAttendeeAvatars(event.attendees.avatars);
    setIsRegistered(false);
    setIsSaved(false);
    setFormData({ name: '', email: '', phone: '' });
    setFormErrors({});
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!/^[0-9+ ]{10,15}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid mobile number';
    }
    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Success registration state
    setIsRegistered(true);
    setRemainingSeats(prev => Math.max(0, prev - 1));
    setAttendeeCount(prev => prev + 1);
    
    // Add user avatar to stack (using initials)
    const initials = formData.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    setAttendeeAvatars(prev => [initials, ...prev.slice(0, 7)]);
    
    // Generate Ticket Number
    const randomTicket = 'NFY-' + Math.floor(100000 + Math.random() * 900000);
    setTicketNumber(randomTicket);
    setShowTicketModal(true);
  };

  const toggleSave = () => {
    setIsSaved(prev => !prev);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleDownloadTicket = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert('Your e-Ticket PDF has been downloaded successfully!');
    }, 2000);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex flex-col font-sans text-[#0F172A] selection:bg-[#2563EB]/10 selection:text-[#2563EB]">
      <Navbar />

      {/* Floating Share Toast */}
      <AnimatePresence>
        {copiedLink && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 bg-[#0F172A] text-white px-5 py-3.5 rounded-2xl flex items-center gap-3.5 shadow-2xl z-50 border border-white/10 text-xs font-semibold"
          >
            <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
            <span>Event link copied to your clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Back Button */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              to="/dashboard"
              className="inline-flex items-center gap-2 text-xs font-black text-[#64748B] hover:text-[#2563EB] uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Discover</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleSave}
                className={`p-2.5 rounded-xl border transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm ${
                  isSaved 
                    ? 'bg-rose-50 border-rose-200 text-rose-600' 
                    : 'bg-white border-[#E2E8F0] text-[#64748B] hover:text-rose-600 hover:border-rose-100'
                }`}
              >
                <Heart className={`h-4.5 w-4.5 ${isSaved ? 'fill-rose-600' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2.5 bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#2563EB] hover:border-blue-100 rounded-xl transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
              >
                <Share2 className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* HERO BANNER BLOCK */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative h-72 sm:h-96 md:h-[450px] w-full rounded-[32px] overflow-hidden shadow-xl mb-10 group"
          >
            <img decoding="async" loading="lazy" 
              src={event.banner} 
              alt={event.title} 
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[8s] ease-out" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
            
            <div className="absolute left-6 bottom-6 right-6 md:left-12 md:bottom-10 md:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
              <div className="space-y-3 md:max-w-3xl">
                <span className="px-3.5 py-1 bg-[#06B6D4] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {event.category}
                </span>
                
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md leading-tight">
                  {event.title}
                </h1>
                
                <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed flex flex-wrap items-center gap-y-1.5 gap-x-4">
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-[#06B6D4] shrink-0" />
                    <span>Organized by <strong className="text-white font-extrabold">{event.organizer}</strong></span>
                  </span>
                  <span className="hidden sm:inline text-slate-500">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                    <span>{event.venue}</span>
                  </span>
                </p>
              </div>

              {/* Fast stats overlay inside banner */}
              <div className="hidden lg:flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white shrink-0">
                <div className="text-center px-2">
                  <span className="text-[9px] font-black text-slate-400 block uppercase tracking-wider">Date</span>
                  <span className="text-sm font-extrabold block mt-0.5">{event.date.split(' ')[0]} {event.date.split(' ')[1]}</span>
                </div>
                <div className="w-px h-8 bg-white/15" />
                <div className="text-center px-2">
                  <span className="text-[9px] font-black text-slate-400 block uppercase tracking-wider">Seats left</span>
                  <span className="text-sm font-extrabold text-[#06B6D4] block mt-0.5">{remainingSeats}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* TWO COLUMN GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* LEFT COLUMN (2/3 width) */}
            <div className="lg:col-span-2 space-y-10 text-left">
              
              {/* Event Quick Details Card (Mobile/Tablet Friendly Info strip) */}
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-3xl shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-2xl text-[#2563EB] shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Date</span>
                    <h4 className="text-xs font-black text-slate-800">{event.date}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">Mark your calendar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-50 rounded-2xl text-[#06B6D4] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Time</span>
                    <h4 className="text-xs font-black text-slate-800">{event.time}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">GMT+5:30 (IST)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-rose-50 rounded-2xl text-rose-600 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Venue</span>
                    <h4 className="text-xs font-black text-slate-800 truncate">{event.venue}</h4>
                    <p className="text-[10px] text-slate-400 font-semibold truncate">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Event Overview Section */}
              <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Sparkles className="h-5 w-5 text-[#2563EB]" />
                  <span>Event Overview</span>
                </h3>
                
                <div className="space-y-4">
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                    <h4 className="text-[10px] font-black uppercase text-slate-800 tracking-wider flex items-center gap-1.5">
                      <Info className="h-4 w-4 text-[#2563EB]" />
                      <span>Purpose & Agenda</span>
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {event.purpose}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h4 className="text-[11px] font-black uppercase text-slate-800 tracking-wider">Key Event Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold leading-relaxed bg-slate-50/50 p-3.5 border border-slate-100 rounded-xl hover:border-blue-100 transition-colors">
                        <CheckCircle className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Event Schedule Timeline Section */}
              <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Clock className="h-5 w-5 text-[#2563EB]" />
                  <span>Event Schedule</span>
                </h3>

                <div className="relative border-l border-slate-200/80 ml-4 pl-8 space-y-8 py-2">
                  {event.schedule.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="relative text-left"
                    >
                      {/* Timeline Node dot */}
                      <span className="absolute -left-[41px] top-1 w-6 h-6 rounded-full border-4 border-white bg-[#2563EB] shadow-md flex items-center justify-center ring-4 ring-blue-50" />
                      
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-[#2563EB] rounded-lg text-[9px] font-black tracking-wider uppercase">
                          {item.time}
                        </span>
                        <h4 className="text-xs font-black text-slate-800 mt-1">{item.title}</h4>
                        <p className="text-[11px] text-[#64748B] font-semibold leading-relaxed max-w-xl">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Speakers Section */}
              <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                  <User className="h-5 w-5 text-[#2563EB]" />
                  <span>Keynote Speakers</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {event.speakers.map((speaker, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -6 }}
                      className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 text-center space-y-3 hover:border-blue-100 hover:bg-white transition-all shadow-sm group"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-[#2563EB] transition-colors relative">
                        <img decoding="async" loading="lazy" src={speaker.photo} alt={speaker.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-black text-slate-800">{speaker.name}</h4>
                        <p className="text-[10px] text-[#64748B] font-semibold leading-tight">{speaker.designation}</p>
                        <span className="inline-block text-[9px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full mt-1.5">
                          {speaker.company}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Venue & Location Information */}
              <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                  <Map className="h-5 w-5 text-[#2563EB]" />
                  <span>Venue & Navigation</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Address</span>
                      <h4 className="text-xs font-black text-slate-800 leading-snug">{event.venue}</h4>
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{event.venueInfo.address}</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Parking & Telemetry</span>
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{event.venueInfo.parking}</p>
                    </div>

                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(event.venueInfo.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer font-sans"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* High Fidelity SVG / Image Map Preview Box */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner group">
                    <img decoding="async" loading="lazy" 
                      src={event.venueInfo.mapPreview} 
                      alt="map preview" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-rose-600 border border-white rounded-full text-white animate-bounce shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="absolute bottom-2.5 left-2.5 bg-black/60 text-white rounded px-2 py-0.5 text-[8px] font-bold">
                      {event.venueInfo.mapCoords}
                    </span>
                  </div>
                </div>
              </section>

              {/* Event Image Gallery Section */}
              {event.gallery && event.gallery.length > 0 && (
                <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                    <span>📸</span>
                    <span>Previous Event Gallery</span>
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {event.gallery.map((imgUrl, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setActiveGalleryImage(imgUrl)}
                        className="aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative group bg-slate-100 cursor-zoom-in"
                      >
                        <img decoding="async" loading="lazy" src={imgUrl} alt={`gallery-${idx}`} className="w-full h-full object-cover group-hover:brightness-90 transition-all" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white text-[10px] font-black uppercase tracking-wider">Zoom</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </section>
              )}

              {/* Reviews & Feedback Section */}
              <section className="bg-white border border-[#E2E8F0] p-8 rounded-3xl shadow-sm space-y-6">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2 border-b border-slate-100 pb-4">
                  <MessageSquare className="h-5 w-5 text-[#2563EB]" />
                  <span>Attendee Reviews & Ratings</span>
                </h3>

                <div className="space-y-4">
                  {event.reviews.map((review, idx) => (
                    <div key={idx} className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl space-y-2 text-left">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-xs">{i < review.rating ? '★' : '☆'}</span>
                          ))}
                        </div>
                        <span className="text-[9px] text-[#64748B] font-bold">{review.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                        "{review.text}"
                      </p>
                      <h5 className="text-[10px] font-black text-slate-700 uppercase tracking-wider">— {review.author}</h5>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* RIGHT COLUMN (1/3 width - Checkout & Sticky Widget) */}
            <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28">
              
              {/* Registration & Ticketing panel */}
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-3xl shadow-lg space-y-5">
                
                {/* Available Seats Progress Bar */}
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">TICKET CAP</span>
                    <span className="text-xs font-black text-slate-800">{remainingSeats} of {event.seats.total} Seats Left</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(remainingSeats / event.seats.total) * 100}%` }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] rounded-full" 
                    />
                  </div>
                  <p className="text-[9px] text-slate-400 font-semibold leading-none flex items-center gap-1 mt-1">
                    <Info className="h-3 w-3 text-[#2563EB]" />
                    <span>Hurry, reservations closing soon!</span>
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 text-left">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-3.5">
                    {isRegistered ? 'Registration Confirmed' : 'Reserve Tickets'}
                  </h3>

                  {isRegistered ? (
                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex flex-col gap-3.5 text-center">
                      <div className="flex items-center justify-center gap-2.5 text-emerald-700">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                        <span className="text-xs font-black uppercase tracking-wider">RSVP Secured</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                        You have successfully registered for {event.title}. We have emailed your ticket PDF to your address.
                      </p>
                      
                      <button 
                        onClick={() => setShowTicketModal(true)}
                        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md font-sans"
                      >
                        <Ticket className="h-4 w-4" />
                        <span>View Ticket Pass</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          placeholder="e.g. Naga Aishwarya"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all ${
                            formErrors.name ? 'border-rose-300' : 'border-[#E2E8F0]'
                          }`}
                        />
                        {formErrors.name && <span className="text-[9px] text-rose-500 font-semibold">{formErrors.name}</span>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          placeholder="e.g. aishwarya@college.edu"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all ${
                            formErrors.email ? 'border-rose-300' : 'border-[#E2E8F0]'
                          }`}
                        />
                        {formErrors.email && <span className="text-[9px] text-rose-500 font-semibold">{formErrors.email}</span>}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Mobile Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2.5 bg-[#F8FAFC] border rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all ${
                            formErrors.phone ? 'border-rose-300' : 'border-[#E2E8F0]'
                          }`}
                        />
                        {formErrors.phone && <span className="text-[9px] text-rose-500 font-semibold">{formErrors.phone}</span>}
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer shadow-md active:scale-95 mt-2 font-sans"
                      >
                        Register Instantly
                      </button>
                    </form>
                  )}
                </div>

                {/* Additional registration metadata */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-left">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider">Ticket Price</span>
                    <h4 className="text-sm font-black text-[#2563EB]">Free RSVP Spot</h4>
                  </div>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[9px] font-black uppercase tracking-wider">
                    Nearify Sandbox Valid
                  </span>
                </div>
              </div>

              {/* Attendees avatar stack deck card */}
              <div className="bg-white border border-[#E2E8F0] p-6 rounded-3xl shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-left">
                  <Users className="h-5 w-5 text-[#2563EB]" />
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Community Attendance</h4>
                    <p className="text-[10px] text-slate-400 font-semibold">{attendeeCount.toLocaleString()} Members Registered</p>
                  </div>
                </div>

                {/* overlapping avatar layout */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3.5 overflow-hidden">
                    {attendeeAvatars.map((initials, idx) => (
                      <div 
                        key={idx}
                        style={{
                          background: `hsl(${(idx * 45) % 360}, 65%, 45%)`
                        }}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white flex items-center justify-center text-[9px] font-black text-white cursor-pointer hover:scale-110 hover:z-10 transition-transform select-none"
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold ml-1.5">+ {attendeeCount - attendeeAvatars.length} more</span>
                </div>
              </div>

            </div>

          </div>

          {/* SIMILAR EVENTS ROW */}
          <section className="mt-16 pt-12 border-t border-slate-200/60 space-y-8 text-left">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">CONTINUE EXPLORING</span>
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider">Similar Events Nearby</h3>
              </div>
              <Link 
                to="/dashboard"
                className="text-[10px] font-black text-[#2563EB] hover:text-blue-700 flex items-center gap-0.5 uppercase tracking-wider"
              >
                <span>View All</span>
                <ChevronRight className="h-4.5 w-4.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {event.similar.map((simId) => {
                const simEvent = EVENTS_DATABASE[simId];
                if (!simEvent) return null;
                return (
                  <motion.div
                    key={simEvent.id}
                    whileHover={{ y: -6 }}
                    onClick={() => navigate(`/event/${simEvent.id}`)}
                    className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-sm flex flex-col justify-between hover:border-slate-350 transition-all cursor-pointer group relative"
                  >
                    <div className="space-y-3">
                      <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-100 shadow-sm relative">
                        <img decoding="async" loading="lazy" src={simEvent.banner} alt={simEvent.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" />
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-black/60 backdrop-blur-sm text-white rounded-lg text-[8px] font-black uppercase tracking-wider">
                          {simEvent.category}
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-left">
                        <h4 className="text-xs font-black text-slate-800 group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-1">{simEvent.title}</h4>
                        <p className="text-[10px] text-slate-400 font-semibold leading-none flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                          <span className="truncate">{simEvent.venue.split(',')[0]}</span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-left">
                      <div className="space-y-0.5">
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block leading-none">Date</span>
                        <span className="text-[10px] font-extrabold text-slate-600 block">{simEvent.date}</span>
                      </div>
                      <span className="text-[9px] font-black text-[#2563EB] bg-blue-50 px-2 py-1 rounded-lg uppercase tracking-wider flex items-center gap-0.5">
                        <span>RSVP</span>
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </div>
      </main>

      {/* EVENT TICKET OVERLAY DIALOG */}
      <AnimatePresence>
        {showTicketModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTicketModal(false)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            />
            
            {/* Ticket Card Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative bg-white border border-[#E2E8F0] max-w-sm w-full mx-4 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 space-y-6 text-center font-sans text-slate-700"
            >
              <button 
                onClick={() => setShowTicketModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-sm font-semibold p-1 cursor-pointer"
              >
                ✕
              </button>

              <div className="space-y-1">
                <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <Ticket className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Your Ticket Confirmed</h3>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Present this ticket code at the entrance desk.</p>
              </div>

              {/* Graphical Ticket Block */}
              <div className="border border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4 relative overflow-hidden">
                {/* Decorative punched holes */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-r border-slate-200" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-l border-slate-200" />

                <div className="space-y-1 text-left pb-3 border-b border-dashed border-slate-200">
                  <span className="text-[8px] font-black text-[#2563EB] uppercase tracking-wider block">{event.category}</span>
                  <h4 className="text-xs font-black text-slate-800 leading-snug line-clamp-1">{event.title}</h4>
                  <p className="text-[9px] text-[#64748B] font-semibold leading-none flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-rose-500" />
                    <span>{event.venue.split(',')[0]}</span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block leading-none">ATTENDEE</span>
                    <span className="text-[10px] font-extrabold text-slate-700 block mt-1 truncate">{formData.name || 'Aishwarya'}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block leading-none">TICKET CODE</span>
                    <span className="text-[10px] font-extrabold text-[#2563EB] block mt-1 select-all">{ticketNumber}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block leading-none">DATE & TIME</span>
                    <span className="text-[9px] font-extrabold text-slate-700 block mt-1">{event.date}</span>
                    <span className="text-[8px] text-slate-400 block font-semibold">{event.time.split(' ')[0]} {event.time.split(' ')[1]}</span>
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider block leading-none">PASS TYPE</span>
                    <span className="text-[9px] font-black bg-blue-50 text-[#2563EB] px-2 py-0.5 rounded-md inline-block mt-1">General RSVP</span>
                  </div>
                </div>

                {/* Mock SVG QR Code */}
                <div className="pt-2 flex justify-center">
                  <div className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <svg viewBox="0 0 100 100" className="h-20 w-20">
                      {/* Outer boundary */}
                      <rect x="5" y="5" width="90" height="90" fill="none" stroke="#0F172A" strokeWidth="2" />
                      {/* Nested alignment blocks */}
                      <rect x="12" y="12" width="22" height="22" fill="#0F172A" />
                      <rect x="16" y="16" width="14" height="14" fill="#FFFFFF" />
                      <rect x="19" y="19" width="8" height="8" fill="#0F172A" />

                      <rect x="66" y="12" width="22" height="22" fill="#0F172A" />
                      <rect x="70" y="16" width="14" height="14" fill="#FFFFFF" />
                      <rect x="73" y="19" width="8" height="8" fill="#0F172A" />

                      <rect x="12" y="66" width="22" height="22" fill="#0F172A" />
                      <rect x="16" y="70" width="14" height="14" fill="#FFFFFF" />
                      <rect x="19" y="73" width="8" height="8" fill="#0F172A" />

                      {/* Random QR clusters */}
                      <rect x="42" y="12" width="6" height="12" fill="#0F172A" />
                      <rect x="52" y="18" width="8" height="6" fill="#0F172A" />
                      <rect x="42" y="32" width="12" height="6" fill="#0F172A" />
                      <rect x="12" y="42" width="12" height="6" fill="#0F172A" />
                      <rect x="18" y="52" width="6" height="8" fill="#0F172A" />
                      
                      <rect x="66" y="42" width="6" height="12" fill="#0F172A" />
                      <rect x="78" y="48" width="10" height="6" fill="#0F172A" />
                      
                      <rect x="42" y="52" width="8" height="8" fill="#0F172A" />
                      <rect x="54" y="60" width="12" height="6" fill="#0F172A" />
                      
                      <rect x="42" y="72" width="6" height="16" fill="#0F172A" />
                      <rect x="52" y="78" width="14" height="6" fill="#0F172A" />
                      <rect x="72" y="72" width="12" height="12" fill="#0F172A" />
                      <rect x="76" y="76" width="4" height="4" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3.5">
                <button 
                  onClick={handleDownloadTicket}
                  disabled={downloading}
                  className="flex-1 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:bg-slate-200 disabled:text-slate-400 font-sans"
                >
                  {downloading ? (
                    <span>Downloading...</span>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Download Pass</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={() => setShowTicketModal(false)}
                  className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer font-sans"
                >
                  Dismiss
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX FOR EVENT GALLERY IMAGES */}
      <AnimatePresence>
        {activeGalleryImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGalleryImage(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full mx-4 rounded-3xl overflow-hidden z-10 shadow-2xl bg-black flex items-center justify-center"
            >
              <button 
                onClick={() => setActiveGalleryImage(null)}
                className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full p-2.5 transition-all text-xs font-semibold cursor-pointer z-20"
              >
                ✕
              </button>
              <img decoding="async" loading="lazy" src={activeGalleryImage} alt="lightbox preview" className="w-full h-auto max-h-[80vh] object-contain" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
