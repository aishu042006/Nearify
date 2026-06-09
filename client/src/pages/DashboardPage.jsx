import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap,
  Trophy, 
  Calendar, 
  Utensils, 
  Star, 
  User, 
  Settings, 
  Search, 
  Bell, 
  LogOut, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  ArrowUpRight,
  Clock,
  MapPin,
  Sparkles,
  Shield,
  Send,
  Upload,
  Info,
  DollarSign,
  Plus,
  Trash2,
  Bookmark,
  Share2,
  ChevronDown,
  X,
  Compass,
  Filter,
  SlidersHorizontal,
  Flame,
  Zap,
  Menu,
  MessageSquare,
  Users,
  Lock,
  Globe,
  HelpCircle,
  Activity,
  Database,
  Palette,
  Link2,
  Eye,
  Edit,
  BookOpen,
  Award,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';
import SavedItemsPage from './SavedItemsPage';
import NotificationsPage from './NotificationsPage';
import OpportunityTrackerPage from './OpportunityTrackerPage';
import TeamFinderPage from './TeamFinderPage';
import ActivityHistoryPage from './ActivityHistoryPage';

// Brand SVG logo components for premium high-fidelity visuals
const MicrosoftLogo = ({ className }) => (
  <svg viewBox="0 0 23 23" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
    <rect x="11.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
    <rect x="0" y="11.5" width="10.5" height="10.5" fill="#00A4EF"/>
    <rect x="11.5" y="11.5" width="10.5" height="10.5" fill="#FFB900"/>
  </svg>
);

const GoogleLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AmazonLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 17.85c-1.5 1.1-3.6 1.65-5.8 1.65-3.3 0-6.2-1.2-8.2-3.15-.3-.3-.05-.7.35-.45 2.45 1.5 5.5 2.4 8.7 2.4 1.95 0 3.95-.35 5.75-1.15.5-.2.7.4.2.7z" fill="#FF9900"/>
    <path d="M19.9 16.3c-.35-.45-1.65-.2-2.25-.1-.2 0-.25-.2-.05-.35 1.25-.95 2.5-.55 2.7-.1.2.45-.65 2.05-1.6 2.85-.2.15-.35 0-.25-.2.3-.55.75-1.7.45-2.1z" fill="#FF9900"/>
    <path d="M12.95 5.3c-.9 1.15-1.25 2.65-1 4.15.8-.1 1.7-.4 2.3-.9 1.25-1.05 1.75-2.65.95-3.9-.9-1.35-2.5-1-3.25.65z" fill="#111827"/>
    <path d="M11 11.25c0 .7.05 1.45.2 2.1.2.85.5 1.65.9 2.3.1.2.25.2.2 0-.25-1.15-.4-2.45-.4-3.75 0-.95.1-1.9.3-2.8.05-.2-.1-.2-.2-.15-.55.6-1 1.45-1 2.3z" fill="#111827"/>
  </svg>
);

const DeloitteLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6h8c3.5 0 6 2 6 6s-2.5 6-6 6H3V6zm8 9.5c2 0 3.5-1 3.5-3.5S13 8.5 11 8.5H5.5v7H11z" fill="#111827" />
    <circle cx="19" cy="16" r="2.5" fill="#86BC25" />
  </svg>
);

const ZohoLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#E21C26"/>
    <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#0093D0"/>
    <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#FFC909"/>
    <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#75B827"/>
  </svg>
);

const SihLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="4" fill="#FF9933" rx="1"/>
    <rect x="2" y="10" width="20" height="4" fill="#FFFFFF" rx="1"/>
    <rect x="2" y="16" width="20" height="4" fill="#128807" rx="1"/>
    <circle cx="12" cy="12" r="3" stroke="#000080" strokeWidth="1" fill="#FFFFFF"/>
    <circle cx="12" cy="12" r="1.5" fill="#000080"/>
  </svg>
);

const DevfolioLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="#3770FF"/>
    <path d="M8 8l4 4-4 4M16 16h-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GdgLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6L3 12L8 18" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6L21 12L16 18" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2.5" fill="#FBBC05"/>
  </svg>
);

const MetaLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.32 7.73c-1.12 0-2.22.56-2.92 1.5a4.7 4.7 0 0 0-2.92-1.5c-2.43 0-4.48 2.05-4.48 4.77 0 2.7 2.05 4.77 4.48 4.77 1.12 0 2.22-.56 2.92-1.5a4.7 4.7 0 0 0 2.92 1.5c2.43 0 4.48-2.05 4.48-4.77 0-2.7-2.05-4.77-4.48-4.77z" stroke="#0081FB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ViteLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4.5L12 21.5L2 4.5H22Z" fill="url(#viteGradient)"/>
    <path d="M14.5 3L11.5 9.5H16.5L9.5 21L11.5 13H7L14.5 3Z" fill="#FFC517"/>
    <defs>
      <linearGradient id="viteGradient" x1="2" y1="4.5" x2="22" y2="4.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stroke="#41D1FF"/>
        <stop offset="100%" stroke="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

const AwsLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M8.2 14.5h-2.1l-.5 1.4H4.2l2.3-6.2h2.2l2.3 6.2H9.6l-.5-1.4zm-.4-1.2l-.7-2-.7 2h1.4zm10.7-3.6h1.2v6.2h-1.2v-.8c-.4.6-1.1.9-1.9.9-1.5 0-2.5-1.1-2.5-2.7v-3.6h1.2v3.5c0 1 .5 1.6 1.4 1.6.8 0 1.5-.6 1.5-1.6v-3.5zm-5.4 3c0 1.2.6 1.9 1.6 1.9.7 0 1.2-.3 1.5-.7v1.8c-.4.2-1 .3-1.6.3-1.8 0-2.8-1.2-2.8-3.2v-.2c0-2 1.1-3.2 2.9-3.2.6 0 1.2.1 1.5.3v1.8c-.3-.4-.8-.7-1.5-.7-1 .1-1.6.8-1.6 2v.1z" fill="#232F3E"/>
    <path d="M18.8 18.2c-1.5 1.1-3.6 1.65-5.8 1.65-3.3 0-6.2-1.2-8.2-3.15-.3-.3-.05-.7.35-.45 2.45 1.5 5.5 2.4 8.7 2.4 1.95 0 3.95-.35 5.75-1.15.5-.2.7.4.2.7z" fill="#FF9900"/>
    <path d="M19.9 16.65c-.35-.45-1.65-.2-2.25-.1-.2 0-.25-.2-.05-.35 1.25-.95 2.5-.55 2.7-.1.2.45-.65 2.05-1.6 2.85-.2.15-.35 0-.25-.2.3-.55.75-1.7.45-2.1z" fill="#FF9900"/>
  </svg>
);

const ParadiseLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10h16v3c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-3z" fill="#D97706"/>
    <path d="M2 10c0-1.7 1.8-3 5-3s5 1.3 5 3H2zm10 0c0-1.7 1.8-3 5-3s5 1.3 5 3H12z" fill="#F59E0B"/>
    <path d="M8 4c0-.5.5-1 1-1s1 .5 1 1M14 4c0-.5.5-1 1-1s1 .5 1 1" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BbqLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M5 11h14v2H5z" fill="#4B5563"/>
    <path d="M7 11V5M12 11V5M17 11V5" stroke="#9CA3AF" strokeWidth="2"/>
    <path d="M4 14h16c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6z" fill="#374151"/>
    <path d="M8 14c0-2 2-4 2-4s2 2 2 4M12 14c0-2 2-4 2-4s2 2 2 4" fill="#EF4444"/>
  </svg>
);

const DominosLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#E4002B"/>
    <path d="M2 2h20v10H2V2z" fill="#0066A2"/>
    <circle cx="7" cy="7" r="1.5" fill="#FFFFFF"/>
    <circle cx="17" cy="17" r="1.5" fill="#FFFFFF"/>
    <circle cx="13" cy="17" r="1.5" fill="#FFFFFF"/>
  </svg>
);

const KfcLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#E4002B"/>
    <rect x="7" y="5" width="2" height="14" fill="#FFFFFF"/>
    <rect x="11" y="5" width="2" height="14" fill="#FFFFFF"/>
    <rect x="15" y="5" width="2" height="14" fill="#FFFFFF"/>
    <text x="12" y="15" fill="#FFFFFF" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">KFC</text>
  </svg>
);

const PizzaHutLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 14c4-4 8-5 10-5s6 1 10 5H2z" fill="#E4002B"/>
    <path d="M4 14c0 2 2 3 8 3s8-1 8-3H4z" fill="#111827"/>
    <rect x="11" y="5" width="2" height="4" fill="#FFC72C"/>
  </svg>
);

// Profile Page Social and Utility SVG Icons
const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const EditIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Helper function to render high-fidelity brand logos instead of generic emojis
function renderOpportunityLogo(opp, className = "h-6 w-6") {
  if (!opp) return "💼";
  const org = (opp.organizer || "").toLowerCase();
  
  if (org.includes("microsoft")) return <MicrosoftLogo className={className} />;
  if (org.includes("google developer groups")) return <GdgLogo className={className} />;
  if (org.includes("google")) return <GoogleLogo className={className} />;
  if (org.includes("amazon web services") || org.includes("aws")) return <AwsLogo className={className} />;
  if (org.includes("amazon")) return <AmazonLogo className={className} />;
  if (org.includes("deloitte")) return <DeloitteLogo className={className} />;
  if (org.includes("zoho")) return <ZohoLogo className={className} />;
  if (org.includes("ministry of education") || org.includes("sih") || org.includes("govt") || org.includes("india")) return <SihLogo className={className} />;
  if (org.includes("devfolio")) return <DevfolioLogo className={className} />;
  if (org.includes("meta")) return <MetaLogo className={className} />;
  if (org.includes("vite")) return <ViteLogo className={className} />;
  if (org.includes("paradise") || org.includes("30% off")) return <ParadiseLogo className={className} />;
  if (org.includes("barbeque")) return <BbqLogo className={className} />;
  if (org.includes("domino")) return <DominosLogo className={className} />;
  if (org.includes("kfc")) return <KfcLogo className={className} />;
  if (org.includes("pizza hut")) return <PizzaHutLogo className={className} />;
  
  // Fallbacks based on category/type
  if (opp.type === "internship") return "💼";
  if (opp.type === "hackathon") return "🏆";
  if (opp.type === "event" || opp.type === "workshop") return "📅";
  if (opp.type === "food") return "🍔";
  
  return opp.logo || "💼";
}

// Realistic database of opportunities (No placeholders/dummy cards)
const initialOpportunities = [
  // INTERNSHIPS (Inspired by LinkedIn & Internshala)
  {
    id: 'int-1',
    type: "internship",
    title: "Frontend Developer Intern",
    organizer: "Microsoft",
    logo: "💻",
    distance: "2.5 km Away",
    detail: "Build and optimize responsive, user-facing features on Azure Dashboard. Collaborate with engineering and product design teams.",
    icon: Briefcase,
    color: "blue",
    hex: "#2563EB",
    x: 30,
    y: 35,
    deadline: "Apply Before: June 30",
    deadlineHours: "48 Hours Left",
    stipend: "₹25,000 / month",
    duration: "3 Months",
    location: "Hyderabad (Hybrid)",
    matchRate: 95,
    requirements: "Enrolled in Bachelor's or Master's in CS. Strong understanding of React, TypeScript, and modern state management patterns.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    companyDetails: "Microsoft Corporation is an American multinational technology corporation producing computer software, consumer electronics, personal computers, and cloud services."
  },
  {
    id: 'int-2',
    type: "internship",
    title: "Software Development Engineer Intern",
    organizer: "Google",
    logo: "🔍",
    distance: "4.1 km Away",
    detail: "Work on core search infrastructure and AI features. Gain hands-on experience in large-scale system architecture.",
    icon: Briefcase,
    color: "blue",
    hex: "#EA4335",
    x: 35,
    y: 15,
    deadline: "Apply Before: June 25",
    deadlineHours: "5 Days Left",
    stipend: "₹80,000 / month",
    duration: "2 Months",
    location: "Bangalore (On-site)",
    matchRate: 97,
    requirements: "Pursuing CS degree. Proficient in Java, C++, or Python. Strong analytical and problem-solving skills.",
    skills: ["C++", "Java", "Python", "Data Structures"],
    companyDetails: "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, and quantum computing."
  },
  {
    id: 'int-3',
    type: "internship",
    title: "Cloud Infrastructure Intern",
    organizer: "Amazon",
    logo: "📦",
    distance: "3.5 km Away",
    detail: "Assist in building high-availability cloud migration toolkits and optimizing serverless storage layouts for AWS customers.",
    icon: Briefcase,
    color: "amber",
    hex: "#FF9900",
    x: 48,
    y: 28,
    deadline: "Apply Before: June 20",
    deadlineHours: "10 Hours Left",
    stipend: "₹60,000 / month",
    duration: "6 Months",
    location: "Chennai (Hybrid)",
    matchRate: 88,
    requirements: "Enrolled in engineering program. Familiarity with AWS services, Docker, and system scripting languages.",
    skills: ["AWS", "Docker", "Node.js", "Python"],
    companyDetails: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence."
  },
  {
    id: 'int-4',
    type: "internship",
    title: "Technology Consultant Intern",
    organizer: "Deloitte",
    logo: "🟢",
    distance: "1.8 km Away",
    detail: "Work alongside consultants to assess client requirements, propose technical solutions, and create system architecture flows.",
    icon: Briefcase,
    color: "green",
    hex: "#86BC25",
    x: 22,
    y: 60,
    deadline: "Apply Before: July 05",
    deadlineHours: "July 05",
    stipend: "₹30,000 / month",
    duration: "3 Months",
    location: "Hyderabad (On-site)",
    matchRate: 85,
    requirements: "Strong communication skills, basic programming knowledge, analytical thinking, and business intelligence concepts.",
    skills: ["SQL", "PowerBI", "Excel", "Data Analysis"],
    companyDetails: "Deloitte Touche Tohmatsu Limited is a multinational professional services network headquartered in London, England."
  },
  {
    id: 'int-5',
    type: "internship",
    title: "Full Stack Developer Intern",
    organizer: "Zoho",
    logo: "⚙️",
    distance: "6.2 km Away",
    detail: "Develop business applications using Zoho Creator and custom scripts. Build user interface extensions using Vue/React.",
    icon: Briefcase,
    color: "red",
    hex: "#E02020",
    x: 40,
    y: 70,
    deadline: "Apply Before: July 10",
    deadlineHours: "July 10",
    stipend: "₹22,000 / month",
    duration: "6 Months",
    location: "Chennai (On-site)",
    matchRate: 90,
    requirements: "Proficiency in JavaScript, relational databases, HTML5/CSS, and MVC application frameworks.",
    skills: ["React", "JavaScript", "PostgreSQL", "HTML5"],
    companyDetails: "Zoho Corporation is an Indian multinational technology company that makes web-based business tools."
  },

  // HACKATHONS (Inspired by Devfolio)
  {
    id: 'hack-1',
    type: "hackathon",
    title: "Smart India Hackathon 2026",
    organizer: "Ministry of Education",
    logo: "🇮🇳",
    distance: "National Level",
    detail: "Solve pressing hardware and software challenges faced by ministries and state departments. Grand cash rewards and venture funding support.",
    icon: Trophy,
    color: "orange",
    hex: "#FF9933",
    x: 55,
    y: 12,
    deadline: "Starts: June 25",
    deadlineHours: "15 Days Left",
    banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    prizePool: "₹1,00,000",
    mode: "Offline",
    teamSize: "2 - 6 Members",
    matchRate: 91,
    rules: "Teams must have exactly 6 members, including at least one female member. Projects must match official problem statements. 36-hour non-stop hacking.",
    timeline: "June 20: Registration deadline. June 25: Nodal hackathon kickoff. June 26: Final presentations & awards.",
    requirements: "Active college ID card. Endorsement letter from college SPOC. Detailed presentation document."
  },
  {
    id: 'hack-2',
    type: "hackathon",
    title: "Hack4India",
    organizer: "Devfolio Community",
    logo: "🛡️",
    distance: "Online",
    detail: "Build high-impact solutions for agricultural sustainability, healthcare outreach, and financial inclusion using Web3 and AI tools.",
    icon: Trophy,
    color: "purple",
    hex: "#7C3AED",
    x: 65,
    y: 25,
    deadline: "Starts: June 18",
    deadlineHours: "4 Days Left",
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60",
    prizePool: "₹5,00,000 Cash + Grants",
    mode: "Online (Discord & GitHub)",
    teamSize: "2 - 4 Members",
    matchRate: 90,
    rules: "All code must be open-sourced on GitHub. Submissions require a working demo link and video explanation. Pre-existing codes will lead to disqualification.",
    timeline: "June 18: Opening ceremony. June 19: Mentorship check-ins. June 20: Project submissions and judging.",
    requirements: "Complete Devfolio registration profile, link GitHub account, and upload resume."
  },
  {
    id: 'hack-3',
    type: "hackathon",
    title: "Build With AI",
    organizer: "Google Developer Groups",
    logo: "🤖",
    distance: "Hyderabad Node",
    detail: "Leverage Gemini models and Vertex AI to build conversational applications, intelligent search agents, or generative media dashboards.",
    icon: Trophy,
    color: "indigo",
    hex: "#4285F4",
    x: 20,
    y: 40,
    deadline: "Starts: June 22",
    deadlineHours: "Starts in 8 days",
    banner: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60",
    prizePool: "₹3,00,000 Cloud Credits",
    mode: "Hybrid (Google Office & Meet)",
    teamSize: "1 - 3 Members",
    matchRate: 85,
    rules: "Use of Google Cloud Platform APIs is mandatory. No pre-recorded videos. Teams must demo live features.",
    timeline: "June 22: API access and ideation session. June 23: Live presentations and team pitching.",
    requirements: "Familiarity with Python or JavaScript APIs. Active Google Cloud account."
  },

  // WORKSHOPS (Inspired by Devfolio & Eventbrite)
  {
    id: 'work-1',
    type: "workshop",
    title: "React Server Components Workshop",
    organizer: "Meta Developers",
    logo: "⚛️",
    distance: "Online",
    detail: "Hands-on implementation of server components, server actions, and suspense-based routing. Learn future React trends.",
    icon: Calendar,
    color: "blue",
    hex: "#2563EB",
    x: 42,
    y: 50,
    deadline: "Starts Tomorrow",
    deadlineHours: "Starts Tomorrow",
    stipend: "Free Entry",
    duration: "1 Day",
    location: "Online (Virtual)",
    matchRate: 89,
    requirements: "Basic understanding of React hooks and JSX syntax.",
    skills: ["React", "TypeScript", "Next.js"],
    speaker: "React Core Team Advocates",
    schedule: "10:00 AM: Suspense & Data Loading. 12:30 PM: Server Actions Masterclass. 2:00 PM: Q&A panel.",
    availableSeats: 120,
    banner: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=60",
    date: "June 10, 2026"
  },
  {
    id: 'work-2',
    type: "workshop",
    title: "UI Design & Prototyping Bootcamp",
    organizer: "Deloitte Digital",
    logo: "🎨",
    distance: "1.8 km Away",
    detail: "Master visual hierarchies, design systems, client prototyping, and developer handoff guidelines.",
    icon: Briefcase,
    color: "green",
    hex: "#86BC25",
    x: 15,
    y: 65,
    deadline: "Starts: June 15",
    deadlineHours: "3 Days Left",
    stipend: "Free Entry",
    duration: "2 Days",
    location: "Deloitte Office, Hanamkonda",
    matchRate: 83,
    requirements: "Familiarity with Figma interface. Please bring a laptop.",
    skills: ["Figma", "Design Systems", "Prototyping"],
    speaker: "Deloitte Lead UX Designers",
    schedule: "Day 1: Typography & Grids. Day 2: Handoff specs & design systems building.",
    availableSeats: 15,
    banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
    date: "June 15, 2026"
  },

  // EVENTS (Inspired by Eventbrite)
  {
    id: 'evt-1',
    type: "event",
    title: "Vite Bundler Deep Dive Workshop",
    organizer: "Vite Core Team",
    logo: "⚡",
    distance: "Virtual",
    detail: "Master Vite's bundler internals, Rollup config hacks, HMR implementations, and load-time optimizations.",
    icon: Calendar,
    color: "amber",
    hex: "#F59E0B",
    x: 28,
    y: 46,
    deadline: "Tonight at 7 PM",
    deadlineHours: "4 Hours Left",
    banner: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=60",
    location: "Virtual Workshop (Zoom Link)",
    date: "June 15, 2026",
    time: "6:00 PM - 8:30 PM",
    availableSeats: 52,
    speaker: "Vite Core Maintainers",
    schedule: "6:00 PM: HMR architecture. 7:00 PM: Custom Plugins Workshop. 8:00 PM: Bundler scaling Q&A."
  },
  {
    id: 'evt-2',
    type: "event",
    title: "AWS Cloud Practitioner Masterclass",
    organizer: "Amazon Web Services",
    logo: "☁️",
    distance: "NIT Warangal Campus",
    detail: "Learn the core principles of cloud architecture, serverless server functions, and VPC security groups from AWS Solutions Architects.",
    icon: Calendar,
    color: "orange",
    hex: "#FF9900",
    x: 52,
    y: 58,
    deadline: "Starts: June 24",
    deadlineHours: "June 24",
    banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60",
    location: "Seminar Hall-3, NIT Warangal",
    date: "June 24, 2026",
    time: "10:00 AM - 4:00 PM",
    availableSeats: 12,
    speaker: "AWS Principal Architects",
    schedule: "10:00 AM: EC2 & S3 Basics. 12:00 PM: Serverless & Lambda labs. 2:00 PM: VPC Networking. 3:30 PM: Exam Certification tips."
  },

  // FOOD OFFERS / RESTAURANTS (Inspired by Zomato & OpenTable)
  {
    id: 'rest-1',
    type: "food",
    title: "Paradise Biryani Student Deal",
    organizer: "Paradise Biryani",
    logo: "🥘",
    distance: "1.2 km Away",
    detail: "Savor the legendary Hyderabadi Mutton Biryani. Student flash deal: Get 30% OFF on all mains today.",
    icon: Utensils,
    color: "orange",
    hex: "#F97316",
    x: 80,
    y: 65,
    deadline: "Expires Friday",
    deadlineHours: "Expires Friday",
    rating: 4.6,
    reviewCount: 245,
    address: "Hanamkonda Main Road, Opp. Public Gardens, Warangal",
    openingHours: "11:00 AM - 11:00 PM",
    tablesAvailable: 8,
    seatsAvailable: 32,
    offer: "30% OFF Today",
    banner: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=60"
    ],
    timeSlots: ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
    popularDishes: ["Special Mutton Biryani", "Chicken Tikka Kebab", "Double Ka Meetha", "Mirchi Ka Salan"],
    menuHighlights: [
      { name: "Special Chicken Biryani", price: "₹380" },
      { name: "Mutton Keema Masala", price: "₹450" },
      { name: "Double Ka Meetha", price: "₹120" }
    ],
    reviews: [
      { user: "Rahul Sharma", rating: 5, comment: "Amazing food and excellent service. The Biryani is absolutely top-notch!", date: "2 days ago" },
      { user: "Priya Reddy", rating: 4, comment: "Loved the ambience and discount offers. Quick seating too.", date: "1 week ago" }
    ]
  },
  {
    id: 'rest-2',
    type: "food",
    title: "Barbeque Nation Buffet Special",
    organizer: "Barbeque Nation",
    logo: "🍢",
    distance: "2.1 km Away",
    detail: "Unlimited skewered starters grilled live at your table. Get flat ₹100 discount per student head.",
    icon: Utensils,
    color: "red",
    hex: "#DC2626",
    x: 75,
    y: 45,
    deadline: "Daily Offer",
    deadlineHours: "Daily 6PM-9PM",
    rating: 4.5,
    reviewCount: 310,
    address: "2nd Floor, Nanda Mall, Hanamkonda",
    openingHours: "12:00 PM - 10:30 PM",
    tablesAvailable: 4,
    seatsAvailable: 24,
    offer: "Flat ₹100 OFF per Head",
    banner: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60"
    ],
    timeSlots: ["6:30 PM", "7:30 PM", "8:30 PM", "9:30 PM"],
    popularDishes: ["Grilled Pineapple", "Cajun Spiced Potatoes", "Tandoori Prawns", "Angoori Gulab Jamun"],
    menuHighlights: [
      { name: "Student Buffet Dinner", price: "₹699" },
      { name: "Standard Buffet Dinner", price: "₹799" },
      { name: "Mocktails Combo Pack", price: "₹199" }
    ],
    reviews: [
      { user: "Tarun Kumar", rating: 5, comment: "Unbelievable starters! The crispy corn and grilled prawns are heavenly.", date: "3 days ago" },
      { user: "Neha Sen", rating: 4, comment: "Best place for birthdays. They even bring out a free mini cake!", date: "5 days ago" }
    ]
  },
  {
    id: 'rest-3',
    type: "food",
    title: "Domino's Pizza Student Combo",
    organizer: "Domino's Pizza",
    logo: "🍕",
    distance: "0.8 km Away",
    detail: "Get Any 2 Medium Hand Tossed Pizzas at ₹299 each + Free Garlic Bread with code: NEARDOM.",
    icon: Utensils,
    color: "blue",
    hex: "#0066A2",
    x: 62,
    y: 78,
    deadline: "Expires Sunday",
    deadlineHours: "Expires Sunday",
    rating: 4.2,
    reviewCount: 520,
    address: "Hunter Road, Opp. Reliance Smart, Hanamkonda",
    openingHours: "10:00 AM - 11:00 PM",
    tablesAvailable: 12,
    seatsAvailable: 48,
    offer: "Free Garlic Bread on App Code",
    banner: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=60"
    ],
    timeSlots: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
    popularDishes: ["Peppy Paneer Pizza", "Cheese Burst Margherita", "Choco Lava Cake"],
    menuHighlights: [
      { name: "2 Medium Pizzas Combo", price: "₹598" },
      { name: "Garlic Breadsticks", price: "₹99" },
      { name: "Lava Cake", price: "₹109" }
    ],
    reviews: [
      { user: "Rahul Sharma", rating: 4, comment: "Quick delivery and hot pizzas. Always a safe option.", date: "1 day ago" },
      { user: "Priya Reddy", rating: 4, comment: "Cheese burst is amazing as always. Code NEARDOM worked!", date: "3 days ago" }
    ]
  },
  {
    id: 'rest-4',
    type: "food",
    title: "KFC Finger Lickin' Student Deal",
    organizer: "KFC",
    logo: "🍗",
    distance: "1.5 km Away",
    detail: "Student Special: 20% discount on 10pc hot and crispy chicken buckets. Present your university ID.",
    icon: Utensils,
    color: "red",
    hex: "#E4002B",
    x: 45,
    y: 82,
    deadline: "Expires Wednesday",
    deadlineHours: "Expires Wed",
    rating: 4.3,
    reviewCount: 410,
    address: "NH-163 Main Rd, Near Kazipet Junction, Warangal",
    openingHours: "10:30 AM - 11:30 PM",
    tablesAvailable: 15,
    seatsAvailable: 60,
    offer: "20% OFF Chicken Buckets",
    banner: "https://images.unsplash.com/photo-1513639776629-7b61b0ac237b?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1513639776629-7b61b0ac237b?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=60"
    ],
    timeSlots: ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"],
    popularDishes: ["Hot & Crispy Chicken Bucket", "Zinger Burger", "Popcorn Chicken"],
    menuHighlights: [
      { name: "10pc Hot & Crispy Bucket", price: "₹650" },
      { name: "Zinger Box Meal", price: "₹299" },
      { name: "Chicken Popcorn Large", price: "₹220" }
    ],
    reviews: [
      { user: "Amit Sharma", rating: 5, comment: "Always hot and crispy. The discount on the bucket is a lifesaver.", date: "4 days ago" },
      { user: "Sneha Reddy", rating: 4, comment: "Friendly staff and quick service during lunch hours.", date: "1 week ago" }
    ]
  },
  {
    id: 'rest-5',
    type: "food",
    title: "Pizza Hut Student Feast",
    organizer: "Pizza Hut",
    logo: "🍕",
    distance: "1.9 km Away",
    detail: "Enjoy the ultimate personal pan pizzas. Grab our Student Special combo: 1 personal pizza + 1 garlic bread + beverage at flat 25% OFF.",
    icon: Utensils,
    color: "red",
    hex: "#E4002B",
    x: 68,
    y: 55,
    deadline: "Expires Saturday",
    deadlineHours: "Expires Sat",
    rating: 4.4,
    reviewCount: 180,
    address: "University Road, Near NIT Warangal Gate, Warangal",
    openingHours: "11:00 AM - 11:00 PM",
    tablesAvailable: 6,
    seatsAvailable: 24,
    offer: "Flat 25% OFF Combo",
    banner: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=60"
    ],
    timeSlots: ["12:00 PM", "1:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"],
    popularDishes: ["Tandoori Paneer Pizza", "Country Feast", "Garlic Bread Stuffed"],
    menuHighlights: [
      { name: "Student Personal Combo", price: "₹249" },
      { name: "Medium Double Cheese Pizza", price: "₹499" },
      { name: "Garlic Bread Stuffed", price: "₹149" }
    ],
    reviews: [
      { user: "Siddharth Verma", rating: 5, comment: "Crispy crust and fresh toppings. The student combo is very pocket friendly.", date: "2 days ago" },
      { user: "Swati Sen", rating: 4, comment: "Super fast service. Just 2 mins walk from NIT campus gate.", date: "4 days ago" }
    ]
  }
];

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  // Layout States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('opportunities'); // Unified Opportunities is the main landing portal
  const [isTabLoading, setIsTabLoading] = useState(false);
  useEffect(() => {
    setIsTabLoading(true);
    const timer = setTimeout(() => {
      setIsTabLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activeTab]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState(['React', 'Warangal', 'Remote', 'Internship']);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeHackathonTab, setActiveHackathonTab] = useState('details'); // 'details' | 'chat' | 'leaderboard'
  const [simulatedMessages, setSimulatedMessages] = useState([
    { author: 'Rahul Sharma', text: "Hey team, let's start planning our architecture for the hackathon build!", time: '10:05 AM' },
    { author: 'Sneha Reddy', text: 'Yes, I think React + Tailwind on the frontend would be super fast.', time: '10:07 AM' }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');
  
  // Database States
  const [opportunities, setOpportunities] = useState(() => {
    const saved = localStorage.getItem('nearify_published_opps');
    let published = [];
    if (saved) {
      try {
        published = JSON.parse(saved).filter(o => o.status === 'active');
      } catch (e) {
        console.error(e);
      }
    }
    const formattedPublished = published.map(o => {
      if (o.type === 'internship') {
        return {
          id: o.id,
          type: 'internship',
          title: o.role,
          organizer: o.companyName,
          logo: o.logo || '💻',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Briefcase,
          color: 'blue',
          hex: '#2563EB',
          deadline: 'Apply Before: ' + o.deadline,
          stipend: o.stipend,
          duration: o.duration,
          location: o.location,
          matchRate: 90,
          requirements: o.description,
          skills: o.skills ? o.skills.split(',').map(s => s.trim()) : [],
          companyDetails: o.companyName + ' is a campus partner.'
        };
      } else if (o.type === 'hackathon') {
        return {
          id: o.id,
          type: 'hackathon',
          title: o.name,
          organizer: o.organizer,
          logo: '🏆',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Trophy,
          color: 'indigo',
          hex: '#4F46E5',
          deadline: 'Register Before: ' + o.deadline,
          date: o.date,
          theme: o.theme,
          prizePool: o.prizePool,
          teamSize: o.teamSize,
          rules: o.rules
        };
      } else {
        return {
          id: o.id,
          type: 'event',
          title: o.name,
          organizer: o.organizer,
          logo: '📅',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Calendar,
          color: 'cyan',
          hex: '#06B6D4',
          date: o.date,
          time: o.time,
          location: o.venue,
          seats: o.seats
        };
      }
    });
    return [...initialOpportunities, ...formattedPublished];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState(new Set(['int-1', 'rest-1'])); // Initial bookmark
  const [appliedIds, setAppliedIds] = useState(new Set()); // Internship application state
  const [registeredHackathons, setRegisteredHackathons] = useState(new Set()); // Hackathons registered state
  const [registeredEvents, setRegisteredEvents] = useState(new Set()); // Events registered state
  const [reservedRestaurants, setReservedRestaurants] = useState(new Map()); // Map of restId -> { time, seats }
  const [syncedEvents, setSyncedEvents] = useState(new Set());
  const [connectedAttendeeIds, setConnectedAttendeeIds] = useState(new Set());
  
  // Opportunities Portal Advanced Filter Toggles
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all', 'internship', 'hackathon', 'event', 'workshop', 'food'
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterMode, setFilterMode] = useState('all');
  const [filterCost, setFilterCost] = useState('all');
  const [filterSkill, setFilterSkill] = useState('all');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterTeamSize, setFilterTeamSize] = useState('all');
  const [filterDate, setFilterDate] = useState('all');

  // Modal State
  const [selectedOpp, setSelectedOpp] = useState(null); // Opportunity object for modal
  const [viewingInternship, setViewingInternship] = useState(null); // Dedicated Internship Details Page
  
  // Nav Dropdowns
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  
  // Hackathon Register Options
  const [regMode, setRegMode] = useState('solo'); // 'solo' or 'team'
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState(['']);
  
  // Hackathon Page State Variables
  const [expandedFaqId, setExpandedFaqId] = useState(null);
  const [teamSearchQuery, setTeamSearchQuery] = useState('');
  const [joinedTeamIds, setJoinedTeamIds] = useState(new Set());
  const [existingTeams, setExistingTeams] = useState([
    { id: 'team-1', name: 'Byte Builders', leader: 'Rahul Sharma', members: ['Rahul Sharma', 'Sneha Reddy', 'Amit Paul'], skillsNeeded: ['React Developer'], openSlots: 1, maxSlots: 4 },
    { id: 'team-2', name: 'AI Alchemists', leader: 'Vikram Malhotra', members: ['Vikram Malhotra', 'Priya Sen'], skillsNeeded: ['Backend Developer', 'AI Engineer'], openSlots: 2, maxSlots: 4 },
    { id: 'team-3', name: 'Dev Dynasty', leader: 'Neha Gupta', members: ['Neha Gupta'], skillsNeeded: ['UI/UX Designer'], openSlots: 1, maxSlots: 2 }
  ]);
  const [invitedEmailInput, setInvitedEmailInput] = useState('');
  
  // Restaurant Reserve Options
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedSeats, setSelectedSeats] = useState(2);
  const [selectedSeating, setSelectedSeating] = useState('Indoor Booth');
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [customReviews, setCustomReviews] = useState({}); // restId -> array of review objects
  const [newReviewUser, setNewReviewUser] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  
  // Restaurant Details Page State Variables
  const [reserveName, setReserveName] = useState('');
  const [reservePhone, setReservePhone] = useState('');
  const [reserveDate, setReserveDate] = useState('2026-06-08');
  const [reserveRequests, setReserveRequests] = useState('');
  const [savedRestaurantIds, setSavedRestaurantIds] = useState(new Set());
  const [claimedCoupons, setClaimedCoupons] = useState(new Set());

  // Active Gallery Image Index
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  // Directions routing overlay mock state
  const [directionsStatus, setDirectionsStatus] = useState(null);

  // Settings sub-tab & form states
  const [settingsTab, setSettingsTab] = useState('profile');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [toast, setToast] = useState(null); // { message, type: 'success' | 'error' }

  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Profile Photo states
  const [profilePhoto, setProfilePhoto] = useState(() => {
    return localStorage.getItem('nearify_profile_photo') || '';
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);

  // Resume Upload State
  const [uploadedResume, setUploadedResume] = useState(() => {
    const saved = localStorage.getItem('nearify_uploaded_resume');
    try {
      return saved ? JSON.parse(saved) : null;
    } catch(e) {
      return null;
    }
  });
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [resumeProgress, setResumeProgress] = useState(0);

  // Create Opportunity States
  const [createOpportunityTab, setCreateOpportunityTab] = useState('internship');
  const [editingOppId, setEditingOppId] = useState(null);

  const [internshipForm, setInternshipForm] = useState({
    companyName: '',
    role: '',
    description: '',
    skills: '',
    location: '',
    stipend: '',
    duration: '',
    deadline: '',
    logo: '',
    banner: ''
  });

  const [hackathonForm, setHackathonForm] = useState({
    name: '',
    description: '',
    theme: '',
    prizePool: '',
    teamSize: '',
    deadline: '',
    date: '',
    rules: '',
    organizer: '',
    banner: ''
  });

  const [eventForm, setEventForm] = useState({
    name: '',
    description: '',
    venue: '',
    date: '',
    time: '',
    seats: '',
    organizer: '',
    banner: ''
  });

  // Published Opportunities
  const [publishedOpportunities, setPublishedOpportunities] = useState(() => {
    const saved = localStorage.getItem('nearify_published_opps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Error parsing published opportunities", e);
      }
    }
    return [
      { id: 'pub-1', type: 'internship', companyName: 'Stripe', role: 'Software Engineer Intern', description: 'Join the Stripe team to build developer-first billing APIs.', skills: 'React, Node.js, REST APIs', location: 'Remote / Bangalore', stipend: '$1500 / month', duration: '6 Months', deadline: '2026-07-15', logo: '', banner: '', status: 'active', views: 342, applications: 48, registrations: 0, bookmarks: 24 },
      { id: 'pub-2', type: 'hackathon', name: 'Global AI Hackathon 2026', description: 'Build next-gen LLM wrappers and agentic systems.', theme: 'AI & Agents', prizePool: '$10,000', teamSize: '1 - 4 members', deadline: '2026-08-01', date: '2026-08-15', rules: 'Open to all developers. Original code only.', organizer: 'Google Developer Group', banner: '', status: 'draft', views: 0, applications: 0, registrations: 0, bookmarks: 0 },
      { id: 'pub-3', type: 'event', name: 'Campus Tech Meetup', description: 'Network with industry leaders and discover campus internship opportunities.', venue: 'NIAT Seminar Hall 2', date: '2026-05-10', time: '14:00', seats: '100', organizer: 'Nearify Campus Club', banner: '', status: 'expired', views: 120, applications: 0, registrations: 85, bookmarks: 12 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('nearify_published_opps', JSON.stringify(publishedOpportunities));
    
    // Merge published active items into the global discovery opportunities state
    const activePubs = publishedOpportunities.filter(o => o.status === 'active');
    const formattedPublished = activePubs.map(o => {
      if (o.type === 'internship') {
        return {
          id: o.id,
          type: 'internship',
          title: o.role,
          organizer: o.companyName,
          logo: o.logo || '💻',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Briefcase,
          color: 'blue',
          hex: '#2563EB',
          deadline: 'Apply Before: ' + o.deadline,
          stipend: o.stipend,
          duration: o.duration,
          location: o.location,
          matchRate: 90,
          requirements: o.description,
          skills: o.skills ? o.skills.split(',').map(s => s.trim()) : [],
          companyDetails: o.companyName + ' is a campus partner.'
        };
      } else if (o.type === 'hackathon') {
        return {
          id: o.id,
          type: 'hackathon',
          title: o.name,
          organizer: o.organizer,
          logo: '🏆',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Trophy,
          color: 'indigo',
          hex: '#4F46E5',
          deadline: 'Register Before: ' + o.deadline,
          date: o.date,
          theme: o.theme,
          prizePool: o.prizePool,
          teamSize: o.teamSize,
          rules: o.rules
        };
      } else {
        return {
          id: o.id,
          type: 'event',
          title: o.name,
          organizer: o.organizer,
          logo: '📅',
          distance: '0.1 km Away',
          detail: o.description,
          icon: Calendar,
          color: 'cyan',
          hex: '#06B6D4',
          date: o.date,
          time: o.time,
          location: o.venue,
          seats: o.seats
        };
      }
    });

    setOpportunities(prev => {
      const cleaned = prev.filter(item => !item.id.toString().startsWith('pub-'));
      return [...cleaned, ...formattedPublished];
    });
  }, [publishedOpportunities]);

  const handleFormFileUpload = (e, field, formType) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (formType === 'internship') {
        setInternshipForm(prev => ({ ...prev, [field]: event.target.result }));
      } else if (formType === 'hackathon') {
        setHackathonForm(prev => ({ ...prev, [field]: event.target.result }));
      } else if (formType === 'event') {
        setEventForm(prev => ({ ...prev, [field]: event.target.result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handlePublishOpportunity = (status = 'active') => {
    if (createOpportunityTab === 'internship') {
      const { companyName, role, description, skills, location, stipend, duration, deadline, logo, banner } = internshipForm;
      if (!companyName || !role || !description || !location || !deadline) {
        triggerToast("Please fill in all required fields (Company, Role, Description, Location, Deadline)", "error");
        return;
      }
      
      const newOpp = {
        id: editingOppId || `pub-${Date.now()}`,
        type: 'internship',
        companyName,
        role,
        description,
        skills,
        location,
        stipend: stipend || 'Not specified',
        duration: duration || 'Not specified',
        deadline,
        logo,
        banner,
        status,
        views: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.views || 0) : 0,
        applications: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.applications || 0) : 0,
        registrations: 0,
        bookmarks: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.bookmarks || 0) : 0
      };

      setPublishedOpportunities(prev => {
        const index = prev.findIndex(o => o.id === newOpp.id);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = newOpp;
          return updated;
        }
        return [newOpp, ...prev];
      });

      setInternshipForm({ companyName: '', role: '', description: '', skills: '', location: '', stipend: '', duration: '', deadline: '', logo: '', banner: '' });
      setEditingOppId(null);
      triggerToast(`Internship ${status === 'active' ? 'published' : 'saved as draft'} successfully!`);

    } else if (createOpportunityTab === 'hackathon') {
      const { name, description, theme, prizePool, teamSize, deadline, date, rules, organizer, banner } = hackathonForm;
      if (!name || !description || !theme || !prizePool || !deadline || !date || !organizer) {
        triggerToast("Please fill in all required fields (Name, Description, Theme, Prize Pool, Deadline, Event Date, Organizer)", "error");
        return;
      }

      const newOpp = {
        id: editingOppId || `pub-${Date.now()}`,
        type: 'hackathon',
        name,
        description,
        theme,
        prizePool,
        teamSize: teamSize || '1 - 4 members',
        deadline,
        date,
        rules: rules || 'Standard hackathon rules apply.',
        organizer,
        banner,
        status,
        views: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.views || 0) : 0,
        applications: 0,
        registrations: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.registrations || 0) : 0,
        bookmarks: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.bookmarks || 0) : 0
      };

      setPublishedOpportunities(prev => {
        const index = prev.findIndex(o => o.id === newOpp.id);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = newOpp;
          return updated;
        }
        return [newOpp, ...prev];
      });

      setHackathonForm({ name: '', description: '', theme: '', prizePool: '', teamSize: '', deadline: '', date: '', rules: '', organizer: '', banner: '' });
      setEditingOppId(null);
      triggerToast(`Hackathon ${status === 'active' ? 'published' : 'saved as draft'} successfully!`);

    } else if (createOpportunityTab === 'event') {
      const { name, description, venue, date, time, seats, organizer, banner } = eventForm;
      if (!name || !description || !venue || !date || !time || !organizer) {
        triggerToast("Please fill in all required fields (Name, Description, Venue, Date, Time, Organizer)", "error");
        return;
      }

      const newOpp = {
        id: editingOppId || `pub-${Date.now()}`,
        type: 'event',
        name,
        description,
        venue,
        date,
        time,
        seats: seats || 'unlimited',
        organizer,
        banner,
        status,
        views: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.views || 0) : 0,
        applications: 0,
        registrations: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.registrations || 0) : 0,
        bookmarks: editingOppId ? (publishedOpportunities.find(o => o.id === editingOppId)?.bookmarks || 0) : 0
      };

      setPublishedOpportunities(prev => {
        const index = prev.findIndex(o => o.id === newOpp.id);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = newOpp;
          return updated;
        }
        return [newOpp, ...prev];
      });

      setEventForm({ name: '', description: '', venue: '', date: '', time: '', seats: '', organizer: '', banner: '' });
      setEditingOppId(null);
      triggerToast(`Event ${status === 'active' ? 'published' : 'saved as draft'} successfully!`);
    }
  };

  const handleEditOpportunity = (opp) => {
    setEditingOppId(opp.id);
    setCreateOpportunityTab(opp.type);
    if (opp.type === 'internship') {
      setInternshipForm({
        companyName: opp.companyName || '',
        role: opp.role || '',
        description: opp.description || '',
        skills: opp.skills || '',
        location: opp.location || '',
        stipend: opp.stipend || '',
        duration: opp.duration || '',
        deadline: opp.deadline || '',
        logo: opp.logo || '',
        banner: opp.banner || ''
      });
    } else if (opp.type === 'hackathon') {
      setHackathonForm({
        name: opp.name || '',
        description: opp.description || '',
        theme: opp.theme || '',
        prizePool: opp.prizePool || '',
        teamSize: opp.teamSize || '',
        deadline: opp.deadline || '',
        date: opp.date || '',
        rules: opp.rules || '',
        organizer: opp.organizer || '',
        banner: opp.banner || ''
      });
    } else if (opp.type === 'event') {
      setEventForm({
        name: opp.name || '',
        description: opp.description || '',
        venue: opp.venue || '',
        date: opp.date || '',
        time: opp.time || '',
        seats: opp.seats || '',
        organizer: opp.organizer || '',
        banner: opp.banner || ''
      });
    }
    triggerToast(`Editing: "${opp.role || opp.name}"`);
  };

  const handleDeleteOpportunity = (id) => {
    if (window.confirm("Are you sure you want to delete this opportunity? This cannot be undone.")) {
      setPublishedOpportunities(prev => prev.filter(o => o.id !== id));
      if (editingOppId === id) {
        setEditingOppId(null);
        setInternshipForm({ companyName: '', role: '', description: '', skills: '', location: '', stipend: '', duration: '', deadline: '', logo: '', banner: '' });
        setHackathonForm({ name: '', description: '', theme: '', prizePool: '', teamSize: '', deadline: '', date: '', rules: '', organizer: '', banner: '' });
        setEventForm({ name: '', description: '', venue: '', date: '', time: '', seats: '', organizer: '', banner: '' });
      }
      triggerToast("Opportunity deleted successfully!");
    }
  };

  const handleCancelEdit = () => {
    setEditingOppId(null);
    setInternshipForm({ companyName: '', role: '', description: '', skills: '', location: '', stipend: '', duration: '', deadline: '', logo: '', banner: '' });
    setHackathonForm({ name: '', description: '', theme: '', prizePool: '', teamSize: '', deadline: '', date: '', rules: '', organizer: '', banner: '' });
    setEventForm({ name: '', description: '', venue: '', date: '', time: '', seats: '', organizer: '', banner: '' });
    triggerToast("Editing cancelled");
  };

  const handleViewPublishedOppDetails = (o) => {
    let formattedOpp = {};
    if (o.type === 'internship') {
      formattedOpp = {
        id: o.id,
        type: 'internship',
        title: o.role,
        organizer: o.companyName,
        logo: o.logo || '💻',
        distance: '0.1 km Away',
        detail: o.description,
        icon: Briefcase,
        color: 'blue',
        hex: '#2563EB',
        deadline: 'Apply Before: ' + o.deadline,
        stipend: o.stipend,
        duration: o.duration,
        location: o.location,
        matchRate: 90,
        requirements: o.description,
        skills: o.skills ? o.skills.split(',').map(s => s.trim()) : [],
        companyDetails: o.companyName + ' is a campus partner.'
      };
    } else if (o.type === 'hackathon') {
      formattedOpp = {
        id: o.id,
        type: 'hackathon',
        title: o.name,
        organizer: o.organizer,
        logo: '🏆',
        distance: '0.1 km Away',
        detail: o.description,
        icon: Trophy,
        color: 'indigo',
        hex: '#4F46E5',
        deadline: 'Register Before: ' + o.deadline,
        date: o.date,
        theme: o.theme,
        prizePool: o.prizePool,
        teamSize: o.teamSize,
        rules: o.rules
      };
    } else {
      formattedOpp = {
        id: o.id,
        type: 'event',
        title: o.name,
        organizer: o.organizer,
        logo: '📅',
        distance: '0.1 km Away',
        detail: o.description,
        icon: Calendar,
        color: 'cyan',
        hex: '#06B6D4',
        date: o.date,
        time: o.time,
        location: o.venue,
        seats: o.seats
      };
    }
    setSelectedOpp(formattedOpp);
  };

  // Notification States
  const [internshipAlerts, setInternshipAlerts] = useState(() => {
    const saved = localStorage.getItem('nearify_notif_internship');
    return saved !== null ? saved === 'true' : true;
  });
  const [hackathonAlerts, setHackathonAlerts] = useState(() => {
    const saved = localStorage.getItem('nearify_notif_hackathon');
    return saved !== null ? saved === 'true' : true;
  });
  const [eventAlerts, setEventAlerts] = useState(() => {
    const saved = localStorage.getItem('nearify_notif_event');
    return saved !== null ? saved === 'true' : true;
  });
  const [foodAlerts, setFoodAlerts] = useState(() => {
    const saved = localStorage.getItem('nearify_notif_food');
    return saved !== null ? saved === 'true' : true;
  });

  const handleToggleNotif = (category, value, setter) => {
    setter(value);
    localStorage.setItem(`nearify_notif_${category}`, value.toString());
    triggerToast(`${category.charAt(0).toUpperCase() + category.slice(1)} notifications updated`);
  };

  // Auto-clear toast trigger
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Photo change handler
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      triggerToast("Please select a valid image file", "error");
      return;
    }
    setIsPhotoLoading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      setTimeout(() => {
        setPhotoPreview(event.target.result);
        setIsPhotoLoading(false);
        triggerToast("Image preview loaded. Click Save to apply.");
      }, 600);
    };
    reader.readAsDataURL(file);
  };

  // Resume change handler
  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    if (ext !== 'pdf' && ext !== 'doc' && ext !== 'docx') {
      triggerToast("Invalid file type. Only PDF, DOC, and DOCX are allowed.", "error");
      return;
    }
    
    setIsUploadingResume(true);
    setResumeProgress(0);
    
    const interval = setInterval(() => {
      setResumeProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const resumeData = { name: file.name, size: (file.size / 1024).toFixed(1) + ' KB' };
            setUploadedResume(resumeData);
            localStorage.setItem('nearify_uploaded_resume', JSON.stringify(resumeData));
            setIsUploadingResume(false);
            triggerToast("Resume uploaded successfully!");
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  // Profile data completion checklist state
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('nearify_user_profile');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          name: parsed.name || 'Aishwarya',
          email: parsed.email || 'aishwarya@nearify.com',
          bio: parsed.bio || 'Passionate about building innovative web applications and participating in hackathons.',
          linkedinUrl: parsed.linkedinUrl || 'https://linkedin.com/in/aishwarya',
          githubUrl: parsed.githubUrl || 'https://github.com/aishwarya',
          portfolioUrl: parsed.portfolioUrl || '',
          skills: parsed.skills || ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS", "Git"],
          hasPhoto: parsed.hasPhoto !== undefined ? parsed.hasPhoto : true,
          hasResume: parsed.hasResume !== undefined ? parsed.hasResume : false,
          hasSkills: parsed.hasSkills !== undefined ? parsed.hasSkills : true,
          hasInterests: parsed.hasInterests !== undefined ? parsed.hasInterests : true,
          hasLinkedin: parsed.hasLinkedin !== undefined ? parsed.hasLinkedin : true,
          hasGithub: parsed.hasGithub !== undefined ? parsed.hasGithub : true,
          hasPortfolio: parsed.hasPortfolio !== undefined ? parsed.hasPortfolio : false,
        };
      } catch (e) {
        console.error("Error parsing profile", e);
      }
    }
    return {
      name: 'Aishwarya',
      email: 'aishwarya@nearify.com',
      bio: 'Passionate about building innovative web applications and participating in hackathons.',
      linkedinUrl: 'https://linkedin.com/in/aishwarya',
      githubUrl: 'https://github.com/aishwarya',
      portfolioUrl: '',
      skills: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS", "Git"],
      hasPhoto: true,
      hasResume: false,
      hasSkills: true,
      hasInterests: true,
      hasLinkedin: true,
      hasGithub: true,
      hasPortfolio: false,
    };
  });

  // Update profile completion indicators dynamically
  useEffect(() => {
    setProfile(prev => {
      const hasPhotoVal = !!profilePhoto;
      const hasResumeVal = !!uploadedResume;
      const hasSkillsVal = prev.skills.length > 0;
      const hasLinkedinVal = !!prev.linkedinUrl;
      const hasGithubVal = !!prev.githubUrl;
      const hasPortfolioVal = !!prev.portfolioUrl;

      if (
        prev.hasPhoto !== hasPhotoVal ||
        prev.hasResume !== hasResumeVal ||
        prev.hasSkills !== hasSkillsVal ||
        prev.hasLinkedin !== hasLinkedinVal ||
        prev.hasGithub !== hasGithubVal ||
        prev.hasPortfolio !== hasPortfolioVal
      ) {
        const updated = {
          ...prev,
          hasPhoto: hasPhotoVal,
          hasResume: hasResumeVal,
          hasSkills: hasSkillsVal,
          hasLinkedin: hasLinkedinVal,
          hasGithub: hasGithubVal,
          hasPortfolio: hasPortfolioVal
        };
        localStorage.setItem('nearify_user_profile', JSON.stringify(updated));
        return updated;
      }
      return prev;
    });
  }, [profilePhoto, uploadedResume, profile.skills, profile.linkedinUrl, profile.githubUrl, profile.portfolioUrl]);

  // Calculate Profile Completion dynamically
  const completionItems = [
    { id: 'hasPhoto', label: 'Profile Photo', pct: 20 },
    { id: 'hasResume', label: 'Resume Upload', pct: 20 },
    { id: 'hasSkills', label: 'Skills', pct: 20 },
    { id: 'hasLinkedin', label: 'LinkedIn', pct: 15 },
    { id: 'hasGithub', label: 'GitHub', pct: 15 },
    { id: 'hasPortfolio', label: 'Portfolio', pct: 10 }
  ];
  
  const completionPercentage = completionItems.reduce((acc, item) => {
    return acc + (profile[item.id] ? item.pct : 0);
  }, 0);

  // Education List
  const [educationList, setEducationList] = useState([
    { id: 'edu-1', school: 'NIAT', degree: 'Bachelor of Technology in CS', year: '2023 - 2027', cgpa: '9.2 CGPA' }
  ]);

  // Experience List
  const [experienceList, setExperienceList] = useState([
    { id: 'exp-1', role: 'Frontend Intern', company: 'Google (Mock)', duration: 'May 2025 - Present', desc: 'Working on core Web UI elements and responsive layout templates.', type: 'internship' },
    { id: 'exp-2', role: 'Lead Organizer', company: 'NIAT Hack Club', duration: 'Oct 2024 - Present', desc: 'Organized internal build sprints and tech bootcamps for 200+ members.', type: 'leadership' }
  ]);

  // Projects List
  const [projectsList, setProjectsList] = useState([
    { id: 'proj-1', title: 'Nearify', description: 'Smart platform for discovering internships, hackathons, events, and food offers.', techStack: 'React, Node.js, Express.js, MongoDB', githubUrl: 'https://github.com/aishwarya/nearify', demoUrl: 'https://nearify.dev' }
  ]);

  // Certifications List
  const [certificationsList, setCertificationsList] = useState([
    { id: 'cert-1', name: 'MERN Stack Masterclass', issuer: 'Udemy', date: 'Jan 2025' },
    { id: 'cert-2', name: 'Advanced React Patterns', issuer: 'Frontend Masters', date: 'March 2025' }
  ]);

  // Activity Log
  const [activityLog, setActivityLog] = useState([
    { id: 'act-1', action: 'Applied to Frontend Internship', details: 'Microsoft (Hyderabad)', time: '10m ago', icon: '💼' },
    { id: 'act-2', action: 'Joined AI Hackathon', details: 'Smart India Hackathon', time: '2h ago', icon: '🏆' },
    { id: 'act-3', action: 'Reserved Table at Paradise Biryani', details: 'Student Deal 6:00 PM', time: '1d ago', icon: '🥘' },
    { id: 'act-4', action: 'Saved React Workshop', details: 'Meta Core Devs', time: '2d ago', icon: '⚛️' }
  ]);

  // Modals and inputs for Profile Page
  const [showAddEduModal, setShowAddEduModal] = useState(false);
  const [newEdu, setNewEdu] = useState({ school: '', degree: '', year: '', cgpa: '' });

  const [showAddExpModal, setShowAddExpModal] = useState(false);
  const [newExp, setNewExp] = useState({ role: '', company: '', duration: '', desc: '', type: 'internship' });

  const [showAddProjModal, setShowAddProjModal] = useState(false);
  const [newProj, setNewProj] = useState({ title: '', description: '', techStack: '', githubUrl: '', demoUrl: '' });

  const [showAddCertModal, setShowAddCertModal] = useState(false);
  const [newCert, setNewCert] = useState({ name: '', issuer: '', date: '' });

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [tempProfile, setTempProfile] = useState({});
  const [newSkillInput, setNewSkillInput] = useState('');
  const [showResumePreviewModal, setShowResumePreviewModal] = useState(false);

  // Dynamic match percentage recalculation based on profile completeness and skills match
  const getMatchPercentage = (opp) => {
    const baseRate = opp.matchRate || 80;
    const completenessMultiplier = 0.8 + 0.2 * (completionPercentage / 100);
    
    // Check overlapping skills
    let skillBonus = 0;
    if (opp.skills && opp.skills.length > 0) {
      const matches = opp.skills.filter(s => profile.skills.includes(s)).length;
      skillBonus = (matches / opp.skills.length) * 10;
    }
    
    return Math.min(100, Math.round(baseRate * completenessMultiplier + skillBonus));
  };

  // Mock notifications list
  const [notifications, setNotifications] = useState([
    { id: 'notif-1', icon: '💼', title: 'New Internship Matching', desc: 'Frontend Developer Intern at Microsoft (92% Match)', read: false, time: '10m ago' },
    { id: 'notif-2', icon: '🏆', title: 'Hackathon Starting Soon', desc: 'Smart India Hackathon registration deadline approaches.', read: false, time: '2h ago' },
    { id: 'notif-3', icon: '🥘', title: 'Paradise Biryani Deal', desc: '30% OFF offer is running hot in your area.', read: true, time: '1d ago' }
  ]);

  // Sidebar Links config (Added unified Opportunities hub back)
  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'opportunities', label: 'Opportunities', icon: Compass },
    { id: 'create_opportunity', label: 'Create Opportunity', icon: Plus },
    { id: 'tracker', label: 'Tracker', icon: SlidersHorizontal },
    { id: 'teamfinder', label: 'Team Finder', icon: Users },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'hackathons', label: 'Hackathons', icon: Trophy },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'food', label: 'Food Offers', icon: Utensils },
    { id: 'saved', label: 'Saved', icon: Star },
    { id: 'notifications', label: 'Notifications', icon: Bell, badge: notifications.filter(n => !n.read).length },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Dynamic filter for Opportunity tabs, search queries and advanced filters
  const getFilteredList = () => {
    let list = opportunities;
    
    if (activeTab === 'opportunities') {
      if (selectedCategory !== 'all') {
        list = list.filter(o => o.type === selectedCategory);
      }
    } else if (activeTab === 'internships') {
      list = list.filter(o => o.type === 'internship');
    } else if (activeTab === 'hackathons') {
      list = list.filter(o => o.type === 'hackathon');
    } else if (activeTab === 'events') {
      list = list.filter(o => o.type === 'event' || o.type === 'workshop');
    } else if (activeTab === 'food') {
      list = list.filter(o => o.type === 'food');
    } else if (activeTab === 'saved') {
      list = list.filter(o => savedIds.has(o.id));
    }
    
    // Global text query search (including skills)
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      list = list.filter(o => 
        o.title.toLowerCase().includes(query) || 
        o.organizer.toLowerCase().includes(query) ||
        (o.skills && o.skills.some(s => s.toLowerCase().includes(query)))
      );
    }

    // Additional Advanced Filters (if showing)
    if (activeTab === 'opportunities' || ['internships', 'hackathons', 'events', 'food', 'saved'].includes(activeTab)) {
      if (filterLocation !== 'all') {
        list = list.filter(o => o.location && o.location.toLowerCase().includes(filterLocation.toLowerCase()));
      }
      if (filterMode !== 'all') {
        list = list.filter(o => {
          if (!o.location) return false;
          if (filterMode === 'remote') return o.location.toLowerCase().includes('remote') || (o.mode && o.mode.toLowerCase().includes('online'));
          if (filterMode === 'on-site') return o.location.toLowerCase().includes('on-site') || o.location.toLowerCase().includes('warangal') || o.location.toLowerCase().includes('hyderabad');
          if (filterMode === 'hybrid') return o.location.toLowerCase().includes('hybrid');
          return true;
        });
      }
      if (filterCost !== 'all') {
        list = list.filter(o => {
          if (o.type === 'internship') return filterCost === 'paid';
          if (o.type === 'workshop' || o.type === 'event') {
            const isFree = o.stipend ? o.stipend.toLowerCase().includes('free') : false;
            return filterCost === 'free' ? isFree : !isFree;
          }
          return true;
        });
      }
      if (filterSkill !== 'all') {
        list = list.filter(o => o.skills && o.skills.includes(filterSkill));
      }
      if (filterDuration !== 'all') {
        list = list.filter(o => o.duration && o.duration.includes(filterDuration));
      }
      if (filterTeamSize !== 'all') {
        list = list.filter(o => o.teamSize && o.teamSize.includes(filterTeamSize));
      }
      if (filterDate !== 'all') {
        list = list.filter(o => {
          const dateStr = (o.date || o.deadline || '').toLowerCase();
          const deadlineHrs = (o.deadlineHours || '').toLowerCase();
          
          if (filterDate === 'today') {
            return dateStr.includes('tonight') || dateStr.includes('daily') || deadlineHrs.includes('hour') || deadlineHrs.includes('today');
          }
          if (filterDate === 'week') {
            return dateStr.includes('tomorrow') || dateStr.includes('june 10') || dateStr.includes('june 11') || dateStr.includes('june 12') || dateStr.includes('june 13') || dateStr.includes('june 14') || dateStr.includes('friday') || dateStr.includes('wednesday') || deadlineHrs.includes('hour') || deadlineHrs.includes('tomorrow') || (deadlineHrs.includes('days left') && parseInt(deadlineHrs) <= 7);
          }
          if (filterDate === 'month') {
            return dateStr.includes('june') || dateStr.includes('daily') || dateStr.includes('expires') || deadlineHrs.includes('days left');
          }
          return true;
        });
      }
    }
    
    return list;
  };

  const filteredList = getFilteredList();

  // Handle bookmark toggle
  const toggleBookmark = (id, e) => {
    if (e) e.stopPropagation();
    setSavedIds(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const removeUploadedResume = () => {
    setUploadedResume(null);
    setProfile(prev => ({
      ...prev,
      hasResume: false,
      resumeFile: ''
    }));
  };

  // Actions execution inside modals
  const executeApplyInternship = (id) => {
    setAppliedIds(prev => {
      const updated = new Set(prev);
      updated.add(id);
      return updated;
    });
    const opp = opportunities.find(o => o.id === id);
    if (opp) {
      setActivityLog(prev => [
        { id: `act-applied-${id}-${Date.now()}`, action: `Applied to ${opp.title}`, details: opp.organizer, time: 'Just now', icon: '💼' },
        ...prev
      ]);
    }
  };

  const executeRegisterHackathon = (id) => {
    setRegisteredHackathons(prev => {
      const updated = new Set(prev);
      updated.add(id);
      return updated;
    });
    const opp = opportunities.find(o => o.id === id);
    // Add mock notification
    setNotifications(prev => [
      {
        id: `notif-reg-${id}`,
        icon: '🏆',
        title: 'Registration Confirmed',
        desc: `Registered successfully for ${opp?.title || 'Hackathon'} (${regMode === 'solo' ? 'Solo' : 'Team: ' + teamName})`,
        read: false,
        time: 'Just now'
      },
      ...prev
    ]);
    if (opp) {
      setActivityLog(prev => [
        { id: `act-hack-${id}-${Date.now()}`, action: `Joined ${opp.title}`, details: `${regMode === 'solo' ? 'Solo' : 'Team: ' + teamName}`, time: 'Just now', icon: '🏆' },
        ...prev
      ]);
    }
  };

  const executeRegisterEvent = (id) => {
    setRegisteredEvents(prev => {
      const updated = new Set(prev);
      updated.add(id);
      return updated;
    });
    // Decrement seats
    setOpportunities(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, availableSeats: Math.max(0, o.availableSeats - 1) };
      }
      return o;
    }));
    const opp = opportunities.find(o => o.id === id);
    if (opp) {
      setActivityLog(prev => [
        { id: `act-evt-${id}-${Date.now()}`, action: `Registered for ${opp.title}`, details: opp.organizer, time: 'Just now', icon: '📅' },
        ...prev
      ]);
    }
  };

  const executeReserveTable = (id) => {
    setReservedRestaurants(prev => {
      const updated = new Map(prev);
      updated.set(id, { time: selectedTimeSlot, seats: selectedSeats, seating: selectedSeating });
      return updated;
    });
    // Decrement available tables count
    setOpportunities(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, tablesAvailable: Math.max(0, o.tablesAvailable - 1) };
      }
      return o;
    }));
    const opp = opportunities.find(o => o.id === id);
    if (opp) {
      setActivityLog(prev => [
        { id: `act-rest-${id}-${Date.now()}`, action: `Reserved Table at ${opp.organizer}`, details: `${selectedSeats} Seats (${selectedSeating}), ${selectedTimeSlot}`, time: 'Just now', icon: '🥘' },
        ...prev
      ]);
    }
  };

  const rescheduleReservation = (id, newDate, newTime) => {
    setReservedRestaurants(prev => {
      const updated = new Map(prev);
      const current = updated.get(id);
      if (current) {
        updated.set(id, { ...current, time: newTime });
      }
      return updated;
    });
    setReserveDate(newDate);
    setSelectedTimeSlot(newTime);
    setIsRescheduling(false);
    
    const opp = opportunities.find(o => o.id === id);
    if (opp) {
      setActivityLog(prev => [
        { id: `act-resched-${id}-${Date.now()}`, action: `Rescheduled Reservation at ${opp.organizer}`, details: `New Time: ${newTime} on ${newDate}`, time: 'Just now', icon: '🥘' },
        ...prev
      ]);
    }
  };

  const cancelReservation = (id) => {
    setReservedRestaurants(prev => {
      const updated = new Map(prev);
      updated.delete(id);
      return updated;
    });
    setOpportunities(prev => prev.map(o => {
      if (o.id === id) {
        return { ...o, tablesAvailable: o.tablesAvailable + 1 };
      }
      return o;
    }));
  };

  // Add review submission
  const submitReview = (id) => {
    if (!newReviewUser || !newReviewText) return;
    
    const newRev = {
      user: newReviewUser,
      rating: newReviewRating,
      comment: newReviewText,
      date: 'Just now'
    };

    setCustomReviews(prev => {
      const list = prev[id] || [];
      return { ...prev, [id]: [newRev, ...list] };
    });

    setNewReviewUser('');
    setNewReviewText('');
    setNewReviewRating(5);

    // Reset fields
    setNewReviewUser('');
    setNewReviewText('');
    setNewReviewRating(5);
  };

  // Get active reviews list combining mock + user custom submissions
  const getReviewsList = (opp) => {
    const base = opp.reviews || [];
    const custom = customReviews[opp.id] || [];
    return [...custom, ...base];
  };

  // Clear specific notifications or mark as read
  const markNotificationRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Calculate live statistics
  const stats = [
    { title: 'Active Applications', count: appliedIds.size, detail: 'Internships submitted', icon: Briefcase, color: 'blue', tab: 'internships' },
    { title: 'Hackathons Joined', count: registeredHackathons.size, detail: 'Squad entries locked', icon: Trophy, color: 'indigo', tab: 'hackathons' },
    { title: 'Saved Opportunities', count: savedIds.size, detail: 'Starred templates', icon: Star, color: 'cyan', tab: 'saved' },
    { title: 'Food Reservations', count: reservedRestaurants.size, detail: 'Claimed tables', icon: Utensils, color: 'orange', tab: 'food' }
  ];

  // Animation variants
  const sidebarVariants = {
    expanded: { width: 260 },
    collapsed: { width: 80 }
  };

  const listContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalContentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', duration: 0.35 } }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex font-sans select-none overflow-hidden h-screen w-full relative">
      
      {/* MOBILE BACKDROP OVERLAY */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <motion.aside
        initial={false}
        animate={isSidebarCollapsed ? "collapsed" : "expanded"}
        variants={sidebarVariants}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-white border-r border-[#E2E8F0] h-full flex flex-col justify-between shrink-0 md:relative fixed inset-y-0 left-0 z-50 md:z-30 shadow-[4px_0_24px_rgba(0,0,0,0.015)] transition-transform duration-300 ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Collapse Arrow - Float Top-Right */}
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute top-5 -right-3.5 z-40 p-1.5 bg-white border border-[#E2E8F0] hover:border-slate-300 rounded-full text-slate-400 hover:text-slate-700 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-90 hidden md:block"
          title={isSidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isSidebarCollapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
        </button>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Sidebar Header */}
          <div className={`px-5 flex items-center border-b border-[#E2E8F0] h-[72px] shrink-0 ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}`}>
            <Logo variant="icon" className="shrink-0" />
            {!isSidebarCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg font-extrabold tracking-tight text-[#0F172A] ml-3 whitespace-nowrap"
              >
                Near<span className="text-[#2563EB]">ify</span>
              </motion.span>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1 overflow-y-auto flex-1 custom-scrollbar">
            {!isSidebarCollapsed && (
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block pl-3.5 mb-2.5 text-left">
                Main Menu
              </span>
            )}
            
            {sidebarLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                    setViewingInternship(null);
                    setIsMobileSidebarOpen(false); // Close mobile drawer
                    if (link.id === 'notifications') {
                      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
                    }
                  }}
                  className={`w-full flex items-center rounded-2xl text-sm font-semibold transition-all cursor-pointer relative py-3 ${
                    isSidebarCollapsed ? 'justify-center px-0' : 'space-x-3.5 px-4'
                  } ${
                    isActive
                      ? 'text-[#2563EB] bg-blue-50/70 font-bold shadow-[0_4px_12px_rgba(37,99,235,0.02)]'
                      : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="sidebarActiveIndicator"
                      className="absolute left-0 top-3 bottom-3 w-0.75 bg-[#2563EB] rounded-r-full"
                    />
                  )}
                  
                  <div className="relative">
                    <link.icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`} />
                    {isSidebarCollapsed && link.badge > 0 ? (
                      <span className="absolute -top-1.5 -right-1.5 bg-[#2563EB] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        {link.badge}
                      </span>
                    ) : null}
                  </div>
                  
                  {!isSidebarCollapsed && (
                    <span className="whitespace-nowrap flex-1 text-left">{link.label}</span>
                  )}

                  {!isSidebarCollapsed && link.badge > 0 ? (
                    <span className="bg-[#2563EB] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full shrink-0">
                      {link.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card & Sign Out */}
        <div className={`border-t border-[#E2E8F0] ${isSidebarCollapsed ? 'p-3 flex flex-col items-center gap-3' : 'p-4 bg-slate-50/30 flex flex-col gap-3'}`}>
          <div 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center cursor-pointer group ${isSidebarCollapsed ? 'justify-center' : 'space-x-3'} min-w-0 w-full`}
          >
            <img decoding="async" loading="lazy" 
              src={profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=60"} 
              alt="User profile" 
              className="w-9 h-9 rounded-xl object-cover shadow-sm border border-slate-200 group-hover:border-[#2563EB]/40 transition-colors"
            />
            {!isSidebarCollapsed && (
              <div className="min-w-0 text-left">
                <h5 className="text-xs font-bold text-slate-800 truncate leading-tight group-hover:text-[#2563EB] transition-colors">{profile.name}</h5>
                <p className="text-[10px] text-slate-400 truncate leading-none mt-0.5">{profile.email}</p>
              </div>
            )}
          </div>

          <button 
            onClick={logout}
            className={`flex items-center justify-center rounded-2xl hover:bg-rose-50 text-rose-500 hover:text-rose-600 border border-slate-100 hover:border-rose-100 font-semibold transition-all cursor-pointer ${
              isSidebarCollapsed ? 'p-2.5' : 'w-full py-2.5 space-x-2 text-xs'
            }`}
            title="Sign Out"
          >
            <LogOut className="h-4 w-4" />
            {!isSidebarCollapsed && <span>Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* MAIN CONTAINER */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#F8FAFC]">
        
        {/* HEADER */}
        <header className="h-[72px] bg-white border-b border-[#E2E8F0] px-4 sm:px-8 flex items-center justify-between z-20 shrink-0">
          <div className="text-left flex items-center gap-3">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="hidden sm:block text-left">
              <h2 className="text-base font-extrabold text-slate-800 tracking-tight capitalize">
                {activeTab === 'opportunities' ? 'Opportunities Discovery Hub' : activeTab === 'dashboard' ? `Welcome back, ${profile.name.split(' ')[0]}!` : sidebarLinks.find(l => l.id === activeTab)?.label}
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mt-1.5 flex items-center gap-1">
                <MapPin className="h-3 w-3 text-rose-500 shrink-0" />
                <span>NIT Warangal Campus Node</span>
              </p>
            </div>
          </div>

          {/* Search Bar - Unified discovery bar with rich placeholder and suggestions */}
          {['dashboard', 'opportunities', 'internships', 'hackathons', 'events', 'food'].includes(activeTab) && (
            <div className="relative flex-1 max-w-[150px] xs:max-w-[200px] sm:max-w-xs md:max-w-md mx-2 sm:mx-0">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search Nearify..."
                value={searchQuery}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    setSearchHistory(prev => {
                      const updated = [searchQuery.trim(), ...prev.filter(s => s !== searchQuery.trim())];
                      return updated.slice(0, 5);
                    });
                  }
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-2xl text-xs focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 font-semibold shadow-inner"
              />

              {/* Suggestions Overlay */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 right-0 mt-2.5 bg-white border border-[#E2E8F0] rounded-2xl shadow-xl p-3 z-50 text-left space-y-2.5"
                  >
                    {searchQuery.trim() === '' ? (
                      <>
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block px-1">Recent Searches</span>
                        <div className="space-y-1">
                          {searchHistory.map((s, idx) => (
                            <button
                              key={idx}
                              onMouseDown={() => setSearchQuery(s)}
                              className="w-full text-left px-2 py-1.5 hover:bg-slate-50 text-xs font-bold text-slate-600 rounded-lg block truncate cursor-pointer"
                            >
                              🔍 {s}
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block px-1">Suggestions</span>
                        <div className="space-y-1">
                          {['React Developer', 'Remote Internships', 'Hackathons in India', 'Biryani Deals'].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).map((s, idx) => (
                            <button
                              key={idx}
                              onMouseDown={() => {
                                setSearchQuery(s);
                                setSearchHistory(prev => [s, ...prev.filter(item => item !== s)].slice(0, 5));
                              }}
                              className="w-full text-left px-2 py-1.5 hover:bg-slate-50 text-xs font-bold text-slate-700 rounded-lg block truncate cursor-pointer"
                            >
                              ✨ {s}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <div className="flex items-center space-x-4">
            {/* Notification Bell Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileDropdown(false);
                }}
                className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-100 border border-[#E2E8F0] flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all cursor-pointer relative"
              >
                <Bell className="h-4 w-4" />
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#2563EB] border border-white" />
                )}
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2.5 w-80 bg-white border border-[#E2E8F0] rounded-[20px] shadow-xl p-4 z-40 text-left space-y-3"
                  >
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Alert Center</span>
                      <button 
                        onClick={() => {
                          setNotifications(prev => prev.map(n => ({ ...n, read: true })));
                          setShowNotifications(false);
                        }} 
                        className="text-[10px] font-bold text-[#2563EB] hover:text-blue-700 cursor-pointer"
                      >
                        Mark all read
                      </button>
                    </div>
                    <div className="space-y-2 max-h-[260px] overflow-y-auto custom-scrollbar">
                      {notifications.length === 0 ? (
                        <p className="text-xs text-slate-400 text-center py-6">No notifications</p>
                      ) : (
                        notifications.map((n) => (
                          <div 
                            key={n.id} 
                            onClick={() => markNotificationRead(n.id)}
                            className={`p-2.5 rounded-xl flex items-start space-x-3 cursor-pointer transition-colors relative group ${
                              n.read ? 'hover:bg-slate-50' : 'bg-blue-50/40 border border-blue-100/30'
                            }`}
                          >
                            <span className="text-base leading-none mt-0.5">{n.icon}</span>
                            <div className="flex-1 min-w-0 pr-4">
                              <p className="text-xs font-bold text-slate-800 leading-tight">{n.title}</p>
                              <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{n.desc}</p>
                              <span className="text-[8px] text-slate-400 mt-1 block font-semibold">{n.time}</span>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                dismissNotification(n.id);
                              }}
                              className="absolute right-2 top-2 text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <div 
                onClick={() => {
                  setShowProfileDropdown(!showProfileDropdown);
                  setShowNotifications(false);
                }}
                className="flex items-center space-x-2.5 cursor-pointer bg-slate-50 hover:bg-slate-100 border border-[#E2E8F0] p-1.5 pr-3.5 rounded-xl transition-all select-none"
              >
                <img decoding="async" loading="lazy" 
                  src={profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=60"} 
                  alt="Avatar" 
                  className="w-7 h-7 rounded-lg object-cover shadow-sm border border-white"
                />
                <span className="text-xs font-bold text-slate-700 hidden md:block">{profile.name.split(' ')[0]}</span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </div>

              <AnimatePresence>
                {showProfileDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2.5 w-56 bg-white border border-[#E2E8F0] rounded-[20px] shadow-xl p-2.5 z-40 text-left"
                  >
                    <div className="px-3.5 py-2.5 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-800 leading-tight">{profile.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5 truncate">{profile.email}</p>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <button 
                        onClick={() => {
                          setActiveTab('profile');
                          setViewingInternship(null);
                          setShowProfileDropdown(false);
                        }}
                        className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-800 hover:bg-slate-50 font-bold transition-all"
                      >
                        <User className="h-3.5 w-3.5 text-slate-400" />
                        <span>My Profile</span>
                      </button>
                      <button 
                        onClick={() => {
                          setActiveTab('settings');
                          setViewingInternship(null);
                          setShowProfileDropdown(false);
                        }}
                        className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-800 hover:bg-slate-50 font-bold transition-all"
                      >
                        <Settings className="h-3.5 w-3.5 text-slate-400" />
                        <span>Settings</span>
                      </button>
                      <div className="h-px bg-slate-100 my-1.5" />
                      <button 
                        onClick={logout}
                        className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs text-rose-500 hover:bg-rose-50 font-bold transition-all"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* CONTAINER BODY */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <AnimatePresence mode="wait">
            {viewingInternship ? (
              <motion.div
                key="internship-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex-grow overflow-y-auto p-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-8 text-left"
              >
                {/* Back Button & Nav Breadcrumb */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setViewingInternship(null)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E2E8F0] hover:border-slate-300 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back to Opportunities</span>
                  </button>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Internship Node ID: {viewingInternship.id}
                  </span>
                </div>

                {/* Hero Section Container */}
                <div className="bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm relative">
                  {/* Company Banner */}
                  <div className="h-48 w-full bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute -right-10 -top-10 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    <div className="absolute left-1/4 -bottom-10 w-36 h-36 bg-cyan-400/20 rounded-full blur-lg pointer-events-none" />
                  </div>

                  {/* Logo box absolutely positioned relative to the parent card container (outside the overflow-hidden banner) */}
                  <div className="absolute left-8 top-36 md:top-[136px] w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center shrink-0 z-20 select-none p-3">
                    {renderOpportunityLogo(viewingInternship, "h-full w-full object-contain")}
                  </div>

                  {/* Hero content info */}
                  {/* Padding-top on mobile (pt-14) to clear the absolute logo, padding-left on desktop (md:pl-40) to guarantee clean clearance */}
                  <div className="px-8 pb-8 pt-14 md:pt-6 md:pl-40 relative flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-1.5 text-left md:mb-1">
                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight leading-tight">
                        {viewingInternship.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-slate-400 text-xs font-semibold">
                        <span className="text-slate-800 font-extrabold">{viewingInternship.organizer}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                          <span>{viewingInternship.location}</span>
                        </span>
                        <span>•</span>
                        <span className="text-[#2563EB] font-bold bg-blue-50 border border-blue-100/40 px-2 py-0.5 rounded-full text-[10px]">
                          {getMatchPercentage(viewingInternship)}% Match
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 shrink-0 z-10">
                      <button 
                        onClick={() => toggleBookmark(viewingInternship.id)}
                        className={`p-3 rounded-2xl border transition-all active:scale-95 shadow-sm cursor-pointer ${
                          savedIds.has(viewingInternship.id) 
                            ? 'bg-cyan-50 border-cyan-200 text-[#06B6D4] hover:bg-cyan-100/50' 
                            : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        <Star className={`h-5 w-5 ${savedIds.has(viewingInternship.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button 
                        disabled={appliedIds.has(viewingInternship.id)}
                        onClick={() => {
                          const applied = appliedIds.has(viewingInternship.id);
                          if (!applied) {
                            executeApplyInternship(viewingInternship.id);
                          }
                        }}
                        className={`px-6 py-3 rounded-2xl text-xs font-black transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer ${
                          appliedIds.has(viewingInternship.id) 
                            ? 'bg-emerald-50 text-emerald-600 border-emerald-100 shadow-none cursor-default' 
                            : 'bg-[#2563EB] text-white hover:bg-blue-700'
                        }`}
                      >
                        {appliedIds.has(viewingInternship.id) ? (
                          <>
                            <CheckCircle className="h-4.5 w-4.5" />
                            <span>Applied</span>
                          </>
                        ) : (
                          <span>Apply Now</span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-5 bg-slate-50/50 border-t border-slate-100 text-left text-xs font-semibold text-slate-500">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">STIPEND</span>
                      <span className="text-slate-800 font-extrabold text-sm">{viewingInternship.stipend}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">DURATION</span>
                      <span className="text-slate-800 font-extrabold text-sm">{viewingInternship.duration}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">DEADLINE</span>
                      <span className="text-rose-600 font-extrabold text-sm">{viewingInternship.deadline.replace('Apply Before: ', '')}</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">OFFER TYPE</span>
                      <span className="text-slate-800 font-extrabold text-sm capitalize">{viewingInternship.location.includes('Remote') ? 'Remote' : 'On-Site / Hybrid'}</span>
                    </div>
                  </div>
                </div>

                {/* Visual Tracker & Match Score */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Circular Match Score Ring */}
                  <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm flex items-center justify-between gap-5 text-left">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block leading-none">AI Profile Match</span>
                      <h4 className="text-sm font-extrabold text-slate-800">Resume Score</h4>
                      <p className="text-[10px] text-slate-400 font-semibold leading-tight mt-1">Based on candidate skills and requirements overlap.</p>
                    </div>
                    
                    <div className="relative flex items-center justify-center shrink-0">
                      {(() => {
                        const score = getMatchPercentage(viewingInternship);
                        const radius = 24;
                        const circumference = 2 * Math.PI * radius;
                        const strokeDashoffset = circumference - (score / 100) * circumference;
                        return (
                          <>
                            <svg className="h-16 w-16 transform -rotate-90">
                              <circle cx="32" cy="32" r={radius} stroke="#F1F5F9" strokeWidth="4.5" fill="transparent" />
                              <circle cx="32" cy="32" r={radius} stroke="#2563EB" strokeWidth="4.5" fill="transparent"
                                      strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" />
                            </svg>
                            <span className="absolute font-black text-[11px] text-slate-800">{score}%</span>
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Application Stepper Tracker */}
                  <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm md:col-span-2 flex flex-col justify-center space-y-3">
                    <div className="flex justify-between items-center text-left">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Application Status</span>
                      <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-black uppercase tracking-wider ${
                        appliedIds.has(viewingInternship.id) ? 'bg-blue-50 text-[#2563EB] border border-blue-100' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {appliedIds.has(viewingInternship.id) ? 'Active Tracking' : 'Not Applied Yet'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between relative pt-1">
                      {/* Progress Line Background */}
                      <div className="absolute left-0 right-0 top-[11px] h-0.5 bg-slate-100 -z-0" />
                      {appliedIds.has(viewingInternship.id) && (
                        <div className="absolute left-0 top-[11px] h-0.5 bg-[#2563EB] -z-0" style={{ width: '25%' }} />
                      )}
                      
                      {[
                        { label: 'Applied', sub: 'Submitted', done: appliedIds.has(viewingInternship.id) },
                        { label: 'Under Review', sub: 'Pending', done: appliedIds.has(viewingInternship.id), active: appliedIds.has(viewingInternship.id) },
                        { label: 'Shortlisted', sub: 'Match Fit', done: false },
                        { label: 'Interview', sub: 'Scheduled', done: false },
                        { label: 'Selected', sub: 'Offer Letter', done: false }
                      ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center relative z-10 text-center">
                          <div className={`w-6.5 h-6.5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                            step.done 
                              ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-sm'
                              : step.active
                                ? 'bg-white border-[#2563EB] text-[#2563EB]'
                                : 'bg-white border-slate-200 text-slate-400'
                          }`}>
                            {step.done ? '✓' : idx + 1}
                          </div>
                          <span className={`text-[9.5px] font-extrabold mt-1.5 leading-none ${step.done || step.active ? 'text-slate-800' : 'text-slate-400'}`}>
                            {step.label}
                          </span>
                          <span className="text-[7.5px] text-slate-400 font-bold mt-0.5 leading-none hidden sm:inline">
                            {step.sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details layout grids */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Left Column Description (2/3) */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* About company description */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] space-y-4 text-left">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                        About the Company
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {viewingInternship.companyDetails}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 pt-2 text-xs">
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">INDUSTRY</span>
                          <span className="text-slate-700 font-extrabold mt-1 block">Information Technology</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">EMPLOYEES</span>
                          <span className="text-slate-700 font-extrabold mt-1 block">10,000+ globally</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">WEBSITE</span>
                          <a href="#" className="text-[#2563EB] font-extrabold mt-1 block hover:underline">
                            www.{viewingInternship.organizer.toLowerCase()}.com
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Key responsibilities */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] space-y-4 text-left">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-3.5 list-none text-slate-600 text-xs font-medium">
                        {[
                          "Collaborate with senior software developers and product designers to translate UI/UX designs into high-quality code.",
                          "Build modern, reusable components using React, TypeScript, and Tailwind CSS configuration layers.",
                          "Optimize application flows for peak responsiveness, fast load speeds, and browser compatibility.",
                          "Participate in daily standup syncs, code reviews, and system testing logs to ensure top feature robustness.",
                          "Integrate backend APIs and verify data flow validations under secure storage models."
                        ].map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                            <span className="leading-relaxed font-semibold text-slate-500">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility & Requirements */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] space-y-4 text-left">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                        Eligibility & Requirements
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {viewingInternship.requirements || "Currently enrolled in a Bachelor's or Master's degree program in Computer Science, engineering, or related field. Ability to work 30-40 hours per week."}
                      </p>
                      <ul className="space-y-3 list-none text-slate-500 text-xs font-semibold">
                        <li className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                          <span>Basic understanding of REST APIs, Git, and web bundlers like Vite.</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                          <span>Good problem-solving capabilities and analytical mindset.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Skills Matching Suite */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] space-y-5 text-left">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                        Skills Fit Analyzer
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Matching Skills */}
                        <div className="space-y-3">
                          <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block">Matching Skills ({viewingInternship.skills.filter(s => profile.skills.includes(s)).length})</span>
                          <div className="flex flex-wrap gap-1.5">
                            {viewingInternship.skills.filter(s => profile.skills.includes(s)).map(s => (
                              <span key={s} className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg text-[10px] font-bold">
                                {s} ✓
                              </span>
                            ))}
                            {viewingInternship.skills.filter(s => profile.skills.includes(s)).length === 0 && (
                              <p className="text-[10px] text-slate-400 font-semibold italic">No matching skills found.</p>
                            )}
                          </div>
                        </div>
                        
                        {/* Missing Skills */}
                        <div className="space-y-3">
                          <span className="text-[9px] font-black text-rose-500 uppercase tracking-wider block">Recommended to Learn ({viewingInternship.skills.filter(s => !profile.skills.includes(s)).length})</span>
                          <div className="flex flex-wrap gap-1.5">
                            {viewingInternship.skills.filter(s => !profile.skills.includes(s)).map(s => (
                              <span key={s} className="px-3 py-1 bg-rose-50 text-rose-500 border border-rose-100 rounded-lg text-[10px] font-bold flex items-center gap-1.5">
                                <span>{s}</span>
                                <button 
                                  onClick={() => {
                                    setProfile(prev => ({
                                      ...prev,
                                      skills: [...prev.skills, s]
                                    }));
                                    alert(`Added "${s}" to your profile skills!`);
                                  }}
                                  className="text-[9px] font-black text-[#2563EB] hover:text-blue-700 cursor-pointer"
                                >
                                  + Add
                                </button>
                              </span>
                            ))}
                            {viewingInternship.skills.filter(s => !profile.skills.includes(s)).length === 0 && (
                              <p className="text-[10px] text-emerald-600 font-bold italic">Perfect Match! You have all required skills.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column sticky application panel (1/3) */}
                  <div className="space-y-8 lg:sticky lg:top-8">
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] space-y-5">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2">
                        Submit Application
                      </h3>

                      {/* Resume selector */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Resume Document</label>
                        {profile.hasResume ? (
                          <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                            <div className="min-w-0 pr-2">
                              <p className="text-xs font-bold text-emerald-800 truncate">📄 {profile.resumeFile || 'My_Resume.pdf'}</p>
                              <p className="text-[9px] text-emerald-500 mt-0.5 font-bold">PDF Resume Connected</p>
                            </div>
                            <button 
                              onClick={removeUploadedResume}
                              className="p-1.5 hover:bg-emerald-100/50 text-emerald-600 rounded-lg transition-all cursor-pointer"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <label className="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-5 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-blue-50/10 cursor-pointer transition-all">
                            <Upload className="h-5 w-5 text-slate-400 mb-1" />
                            <span className="text-[11px] font-bold text-slate-600">Select portfolio resume PDF</span>
                            <input type="file" accept=".pdf" onChange={handleResumeChange} className="hidden" />
                          </label>
                        )}
                      </div>

                      {/* Input fields */}
                      <div className="space-y-3.5">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Portfolio Link</label>
                          <input 
                            type="url" 
                            placeholder="https://myportfolio.com" 
                            className="w-full px-4 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">LinkedIn Profile</label>
                          <input 
                            type="url" 
                            placeholder="https://linkedin.com/in/username" 
                            value={profile.linkedinUrl}
                            onChange={(e) => setProfile(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">GitHub Profile</label>
                          <input 
                            type="url" 
                            placeholder="https://github.com/username" 
                            value={profile.githubUrl}
                            onChange={(e) => setProfile(prev => ({ ...prev, githubUrl: e.target.value }))}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <button
                        disabled={appliedIds.has(viewingInternship.id)}
                        onClick={() => executeApplyInternship(viewingInternship.id)}
                        className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                          appliedIds.has(viewingInternship.id)
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-600 shadow-none'
                            : 'bg-[#2563EB] text-white hover:bg-blue-700'
                        }`}
                      >
                        {appliedIds.has(viewingInternship.id) ? (
                          <>
                            <CheckCircle className="h-4.5 w-4.5" />
                            <span>Applied Successfully</span>
                          </>
                        ) : (
                          <span>Submit Application</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Similar Internships Section */}
                <div className="space-y-4 pt-6 border-t border-slate-200 text-left">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                    Similar Opportunities
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {opportunities
                      .filter(o => o.type === 'internship' && o.id !== viewingInternship.id)
                      .slice(0, 3)
                      .map((opp) => (
                        <motion.div
                          key={opp.id}
                          onClick={() => {
                            setViewingInternship(opp);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          whileHover={{ y: -4 }}
                          className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
                        >
                          <div className="space-y-3.5">
                            <div className="flex justify-between items-start">
                              <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5">
                                {renderOpportunityLogo(opp, "h-full w-full object-contain")}
                              </span>
                              <span className="text-[9px] px-2.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full font-bold">
                                {getMatchPercentage(opp)}% Match
                              </span>
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-slate-800 truncate">{opp.title}</h4>
                              <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{opp.organizer} • {opp.location}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl text-[9px] font-bold text-slate-500 leading-none">
                              <div>
                                <span className="text-[7px] text-slate-400 block uppercase font-bold">STIPEND</span>
                                <span className="text-slate-700 font-extrabold mt-1 block">{opp.stipend}</span>
                              </div>
                              <div>
                                <span className="text-[7px] text-slate-400 block uppercase font-bold">DURATION</span>
                                <span className="text-slate-700 font-extrabold mt-1 block">{opp.duration}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-[9px] font-bold text-[#2563EB]">
                            <span>Explore Internship</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex-grow overflow-hidden flex flex-col h-full"
              >
                {isTabLoading ? (
                  <div className="flex-grow overflow-y-auto p-4 sm:p-8 max-w-7xl mx-auto w-full space-y-8 animate-pulse text-left bg-[#F8FAFC]">
                    {/* Header Summary */}
                    <div className="h-44 w-full bg-slate-200 rounded-[24px]" />
                    {/* Filters bar */}
                    <div className="flex flex-wrap gap-2.5">
                      <div className="h-10 w-28 bg-slate-200 rounded-xl" />
                      <div className="h-10 w-32 bg-slate-200 rounded-xl" />
                      <div className="h-10 w-24 bg-slate-200 rounded-xl" />
                    </div>
                    {/* Cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 space-y-4 shadow-sm">
                          <div className="h-32 w-full bg-slate-100 rounded-xl" />
                          <div className="space-y-2">
                            <div className="h-3.5 w-1/3 bg-slate-200 rounded" />
                            <div className="h-5 w-3/4 bg-slate-200 rounded" />
                          </div>
                          <div className="h-8 w-full bg-slate-200 rounded-xl" />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* TAB: UNIFIED OPPORTUNITIES DISCOVERY PAGE */}
                    {activeTab === 'opportunities' && (
                <div className="flex-grow overflow-y-auto p-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-8">
                  
                  {/* Hero Discovery Banner */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 p-8 rounded-[24px] text-white shadow-[0_8px_30px_rgba(37,99,235,0.15)] relative overflow-hidden text-left"
                  >
                    <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="absolute left-1/3 bottom-0 translate-y-12 w-48 h-48 bg-cyan-400/20 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="max-w-xl relative z-10 space-y-3">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-200 inline-block"
                      >
                        ⚡ Unified Discovery Portal
                      </motion.span>
                      <motion.h1 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-2xl sm:text-3xl font-black tracking-tight leading-tight"
                      >
                        Discover Opportunities Around You
                      </motion.h1>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed"
                      >
                        Find internships, hackathons, events, workshops, and exclusive food offers in one place.
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* AI Recommendations ("Recommended For You") Carousel */}
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1">
                        <Sparkles className="h-4 w-4 text-[#2563EB]" />
                        <span>Recommended For You</span>
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400">Based on React & Design skills</span>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-4 pt-1 snap-x custom-scrollbar">
                      {opportunities.slice(0, 4).map((opp) => {
                        const match = getMatchPercentage(opp);
                        return (
                          <motion.div
                            key={opp.id}
                            onClick={() => {
                              if (opp.type === 'internship') {
                                setViewingInternship(opp);
                              } else {
                                setSelectedOpp(opp);
                                setActiveGalleryIdx(0);
                                setDirectionsStatus(null);
                              }
                            }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] w-72 shrink-0 snap-start text-left flex flex-col justify-between border-l-4 border-l-[#2563EB] cursor-pointer"
                          >
                            <div className="space-y-3">
                              <div className="flex justify-between items-start">
                                <span className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5">
                                  {renderOpportunityLogo(opp, "h-full w-full object-contain")}
                                </span>
                                <span className="text-[10px] font-extrabold text-[#2563EB] bg-blue-50 border border-blue-100/50 px-2 py-0.5 rounded-full">
                                  {match}% Match
                                </span>
                              </div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800 truncate">{opp.title}</h4>
                                <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{opp.organizer}</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-slate-100 mt-4 pt-3 text-[10px] font-bold text-slate-500">
                              <span className="capitalize">{opp.type}</span>
                              <span className="text-slate-800">{opp.distance}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Filter chips bar */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-4">
                      {/* Main Categories Bar */}
                      <div className="flex gap-2 overflow-x-auto pb-1 max-w-full custom-scrollbar">
                        {[
                          { id: 'all', label: 'All Fields' },
                          { id: 'internship', label: 'Internships' },
                          { id: 'hackathon', label: 'Hackathons' },
                          { id: 'event', label: 'Events' },
                          { id: 'workshop', label: 'Workshops' },
                          { id: 'food', label: 'Food Offers' }
                        ].map((chip) => (
                          <button
                            key={chip.id}
                            onClick={() => {
                              setSelectedCategory(chip.id);
                              // Reset subfilters if selecting Category
                            }}
                            className={`px-4.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer shrink-0 ${
                              selectedCategory === chip.id
                                ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-[0_4px_12px_rgba(37,99,235,0.15)]'
                                : 'bg-white text-slate-500 border-[#E2E8F0] hover:border-slate-300'
                            }`}
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>

                      {/* Advanced filters toggler */}
                      <button
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        className={`flex items-center gap-1.5 px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          showAdvancedFilters ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-[#E2E8F0] text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <SlidersHorizontal className="h-3.5 w-3.5" />
                        <span>Advanced Filters</span>
                      </button>
                    </div>

                    {/* Advanced filter selectors */}
                    <AnimatePresence>
                      {showAdvancedFilters && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 p-4.5 bg-white border border-[#E2E8F0] rounded-[20px] shadow-sm text-left overflow-hidden shrink-0"
                        >
                          {/* Location filter */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                            <select 
                              value={filterLocation} 
                              onChange={(e) => setFilterLocation(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Locations</option>
                              <option value="Hyderabad">Hyderabad</option>
                              <option value="Bangalore">Bangalore</option>
                              <option value="Chennai">Chennai</option>
                              <option value="Online">Online</option>
                            </select>
                          </div>

                          {/* Remote/Offline */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Work Mode</span>
                            <select 
                              value={filterMode} 
                              onChange={(e) => setFilterMode(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Modes</option>
                              <option value="remote">Remote Only</option>
                              <option value="on-site">On-site Only</option>
                              <option value="hybrid">Hybrid Only</option>
                            </select>
                          </div>

                          {/* Free/Paid */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Cost / Stipend</span>
                            <select 
                              value={filterCost} 
                              onChange={(e) => setFilterCost(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Costs</option>
                              <option value="free">Free / Unpaid</option>
                              <option value="paid">Paid Stipends</option>
                            </select>
                          </div>

                          {/* Skills */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Skills Match</span>
                            <select 
                              value={filterSkill} 
                              onChange={(e) => setFilterSkill(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Skills</option>
                              <option value="React">React</option>
                              <option value="TypeScript">TypeScript</option>
                              <option value="Python">Python</option>
                              <option value="Figma">Figma</option>
                              <option value="AWS">AWS</option>
                            </select>
                          </div>

                          {/* Duration */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Duration</span>
                            <select 
                              value={filterDuration} 
                              onChange={(e) => setFilterDuration(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Durations</option>
                              <option value="2 Months">2 Months</option>
                              <option value="3 Months">3 Months</option>
                              <option value="6 Months">6 Months</option>
                            </select>
                          </div>

                          {/* Team Size */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Team Size</span>
                            <select 
                              value={filterTeamSize} 
                              onChange={(e) => setFilterTeamSize(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">Any Size</option>
                              <option value="1 - 3 Members">1-3 Members</option>
                              <option value="2 - 4 Members">2-4 Members</option>
                              <option value="6 Members Required">6 Members</option>
                            </select>
                          </div>

                          {/* Date filter */}
                          <div className="space-y-1">
                            <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block">Date / Timeline</span>
                            <select 
                              value={filterDate} 
                              onChange={(e) => setFilterDate(e.target.value)}
                              className="w-full bg-slate-50 border border-[#E2E8F0] rounded-xl px-2.5 py-1.5 text-xs text-slate-700 font-semibold focus:outline-none"
                            >
                              <option value="all">All Dates</option>
                              <option value="today">Today Only</option>
                              <option value="week">Within 7 Days</option>
                              <option value="month">This Month</option>
                            </select>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Main feed list splits */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Left Column Feed (70%) */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex justify-between items-center text-left">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Opportunities Stream</h3>
                        {searchQuery || filterLocation !== 'all' || filterMode !== 'all' || filterCost !== 'all' || filterSkill !== 'all' || filterDuration !== 'all' || filterTeamSize !== 'all' || filterDate !== 'all' ? (
                          <button 
                            onClick={() => {
                              setSearchQuery('');
                              setFilterLocation('all');
                              setFilterMode('all');
                              setFilterCost('all');
                              setFilterSkill('all');
                              setFilterDuration('all');
                              setFilterTeamSize('all');
                              setFilterDate('all');
                            }} 
                            className="text-[10px] font-extrabold text-rose-500"
                          >
                            Clear Filters
                          </button>
                        ) : null}
                      </div>

                      {filteredList.length === 0 ? (
                        <div className="py-20 text-center space-y-3 bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm">
                          <span className="text-3xl block">🔍</span>
                          <h4 className="text-sm font-bold text-slate-800">No matches found</h4>
                          <p className="text-xs text-slate-400">Try adjusting your advanced filter metrics or search keyword.</p>
                        </div>
                      ) : (
                        <motion.div 
                          variants={listContainerVariants}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {filteredList.map((opp) => {
                            const isStarred = savedIds.has(opp.id);
                            const isAcquired = appliedIds.has(opp.id) || registeredHackathons.has(opp.id) || registeredEvents.has(opp.id) || reservedRestaurants.has(opp.id);
                            
                            return (
                              <motion.div
                                key={opp.id}
                                variants={listItemVariants}
                                onClick={() => {
                                  if (opp.type === 'internship') {
                                    setViewingInternship(opp);
                                  } else {
                                    setSelectedOpp(opp);
                                    setActiveGalleryIdx(0);
                                    setDirectionsStatus(null);
                                  }
                                }}
                                whileHover={{ y: -4 }}
                                className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_16px_30px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col justify-between group"
                              >
                                <div>
                                  {/* Banner display (Events, Restaurants, Hackathons with banner) */}
                                  {(opp.banner) && (
                                    <div className="h-36 w-full overflow-hidden relative shrink-0 bg-slate-100">
                                      <img decoding="async" loading="lazy" 
                                        src={opp.banner} 
                                        alt="Banner" 
                                        onError={(e) => {
                                          e.target.onerror = null;
                                          e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60";
                                        }}
                                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                                      />
                                      <div className="absolute top-3 right-3 z-10">
                                        <button 
                                          onClick={(e) => toggleBookmark(opp.id, e)}
                                          className={`p-2 bg-white/95 backdrop-blur-md rounded-xl hover:bg-white text-slate-500 transition-all active:scale-90 shadow-sm border border-slate-100 ${isStarred ? 'text-[#06B6D4]' : ''}`}
                                        >
                                          <Star className={`h-4 w-4 ${isStarred ? 'fill-current' : ''}`} />
                                        </button>
                                      </div>
                                      
                                      <div className="absolute bottom-3 left-3 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-xl text-white text-[9px] font-bold uppercase tracking-wider">
                                        {opp.type === 'food' ? opp.distance : (opp.location ? opp.location.split(' ')[0] : 'Online')}
                                      </div>
                                    </div>
                                  )}

                                  <div className="p-5 space-y-3.5">
                                    {/* Normal header without banner */}
                                    {!opp.banner && (
                                      <div className="flex justify-between items-start">
                                        <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5">
                                          {renderOpportunityLogo(opp, "h-full w-full object-contain")}
                                        </span>
                                        <button 
                                          onClick={(e) => toggleBookmark(opp.id, e)}
                                          className={`p-2 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all active:scale-90 ${isStarred ? 'text-[#06B6D4] bg-cyan-50 border-cyan-100 hover:bg-cyan-100/50' : ''}`}
                                        >
                                          <Star className={`h-4.5 w-4.5 ${isStarred ? 'fill-current' : ''}`} />
                                        </button>
                                      </div>
                                    )}

                                    {/* Titles */}
                                    <div className="space-y-1">
                                      <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                                        <span className="text-[8px] font-extrabold uppercase tracking-widest" style={{ color: opp.hex }}>{opp.type}</span>
                                        {opp.type === 'food' && (
                                          <span className="text-[10px] font-bold text-amber-500">★ {opp.rating}</span>
                                        )}
                                        {opp.type !== 'event' && opp.type !== 'food' && (
                                          <span className="text-[8px] px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full font-bold">
                                            {getMatchPercentage(opp)}% Match
                                          </span>
                                        )}
                                      </div>
                                      <h4 className="text-xs font-bold text-slate-800 truncate leading-tight mt-1">{opp.title}</h4>
                                      <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{opp.organizer}</p>
                                    </div>

                                    {/* Attributes rows */}
                                    {opp.type === 'internship' && (
                                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-2.5 rounded-xl text-[9px] font-bold text-slate-500 leading-none">
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">STIPEND</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.stipend}</span>
                                        </div>
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">DURATION</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.duration}</span>
                                        </div>
                                      </div>
                                    )}

                                    {opp.type === 'hackathon' && (
                                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-2.5 rounded-xl text-[9px] font-bold text-slate-500 leading-none">
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">PRIZE POOL</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.prizePool}</span>
                                        </div>
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">TEAM SIZE</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.teamSize}</span>
                                        </div>
                                      </div>
                                    )}

                                    {opp.type === 'food' && (
                                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-2.5 rounded-xl text-[9px] font-bold text-slate-500 leading-none">
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">DISCOUNT</span>
                                          <span className="text-rose-600 font-extrabold mt-1 block truncate">{opp.offer}</span>
                                        </div>
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">TABLES</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.tablesAvailable} Free</span>
                                        </div>
                                      </div>
                                    )}

                                    {opp.type === 'workshop' && (
                                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-2.5 rounded-xl text-[9px] font-bold text-slate-500 leading-none">
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">COST</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.stipend}</span>
                                        </div>
                                        <div>
                                          <span className="text-[7px] text-slate-400 block uppercase font-bold">SEATS LEFT</span>
                                          <span className="text-slate-700 font-extrabold mt-1 block">{opp.availableSeats} Spot</span>
                                        </div>
                                      </div>
                                    )}

                                    {/* Snippet detail */}
                                    <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2">{opp.detail}</p>
                                  </div>
                                </div>

                                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                                  <div className="text-left leading-none">
                                    <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DEADLINE</span>
                                    <span className="text-xs text-slate-700 font-bold mt-1.5 block">{opp.deadline.replace('Apply Before: ', '')}</span>
                                  </div>
                                  <button className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                                    isAcquired ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-900 text-white hover:bg-slate-800'
                                  }`}>
                                    {isAcquired ? 'Joined' : opp.type === 'food' ? 'Book Slot' : 'Learn More'}
                                  </button>
                                </div>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </div>

                    {/* Right Column GPS scan map & deadlines (30%) */}
                    <div className="space-y-8">
                      {/* Radar scan center */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-4 text-left">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Scanning Node</span>
                            <h4 className="font-extrabold text-slate-700 mt-1.5 flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-[#2563EB]" />
                              <span>{profile.organization} Map</span>
                            </h4>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[9px] font-bold text-emerald-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative" />
                            <span>GPS Active</span>
                          </span>
                        </div>

                        {/* Radar sweeping HUD */}
                        <div className="h-[210px] bg-[#0A0E1A] rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-900 inner-shadow shadow-inner">
                          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-80" />
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
                          
                          <div className="absolute w-[160px] h-[160px] rounded-full border border-slate-800/40 flex items-center justify-center">
                            <div className="w-[110px] h-[110px] rounded-full border border-slate-800/50 flex items-center justify-center">
                              <div className="w-[60px] h-[60px] rounded-full border border-slate-800/60" />
                            </div>
                          </div>

                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="absolute inset-0 origin-center bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent border-t border-blue-500/20 rounded-full pointer-events-none"
                          />

                          {opportunities.map((opp) => (
                            <motion.div
                              key={opp.id}
                              onClick={() => {
                                if (opp.type === 'internship') {
                                  setViewingInternship(opp);
                                } else {
                                  setSelectedOpp(opp);
                                  setActiveGalleryIdx(0);
                                  setDirectionsStatus(null);
                                }
                              }}
                              className="absolute cursor-pointer w-4 h-4 rounded-full border-2 shadow-lg z-20 transition-all flex items-center justify-center"
                              style={{
                                left: `${opp.x}%`,
                                top: `${opp.y}%`,
                                backgroundColor: opp.hex,
                                borderColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: `0 0 10px ${opp.hex}`
                              }}
                              title={`${opp.title} (${opp.organizer})`}
                              whileHover={{ scale: 1.4, borderColor: '#FFFFFF', boxShadow: `0 0 18px ${opp.hex}` }}
                            />
                          ))}

                          <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center z-10 pointer-events-none">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping absolute" />
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 z-10" />
                          </div>
                        </div>
                      </div>

                      {/* Deadlines list */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left space-y-4">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Soon Expiring</h4>
                        <div className="space-y-3">
                          {opportunities.filter(o => o.deadlineHours).slice(0, 3).map((opp) => (
                            <div
                              key={opp.id}
                              onClick={() => {
                                setSelectedOpp(opp);
                                setActiveGalleryIdx(0);
                                setDirectionsStatus(null);
                              }}
                              className="p-3 bg-slate-50/50 border border-slate-100 rounded-2xl flex items-center justify-between cursor-pointer hover:border-slate-300 transition-colors"
                            >
                              <div className="min-w-0 pr-2.5 flex items-center space-x-2">
                                <span className="h-6 w-6 shrink-0 flex items-center justify-center">
                                  {renderOpportunityLogo(opp, "h-full w-full object-contain")}
                                </span>
                                <div className="min-w-0">
                                  <p className="text-xs font-bold text-slate-800 truncate leading-tight">{opp.title}</p>
                                  <p className="text-[9px] text-slate-400 font-semibold truncate mt-0.5 leading-none">{opp.organizer}</p>
                                </div>
                              </div>
                              <span className="text-[9px] font-extrabold text-[#2563EB] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full shrink-0">
                                {opp.deadlineHours}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Trending Opportunities Section ("Trending Opportunities") */}
                  <div className="space-y-4 pt-6 border-t border-slate-200 text-left">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                      <Flame className="h-4.5 w-4.5 text-orange-500" />
                      <span>Trending Opportunities</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: 'SDE Intern', org: 'Google', type: 'Most Applied', logo: '🔍', hex: '#EA4335', badgeBg: 'bg-red-50 text-red-600 border-red-100', id: 'int-2' },
                        { title: 'Smart India Hackathon', org: 'Govt. India', type: 'Popular Entry', logo: '🇮🇳', hex: '#FF9933', badgeBg: 'bg-orange-50 text-orange-600 border-orange-100', id: 'hack-1' },
                        { title: 'React RSC Workshop', org: 'Meta Devs', type: 'Trending', logo: '⚛️', hex: '#2563EB', badgeBg: 'bg-blue-50 text-blue-600 border-blue-100', id: 'work-1' },
                        { title: 'Paradise Biryani', org: '30% OFF Today', type: 'Best Food Deal', logo: '🥘', hex: '#F97316', badgeBg: 'bg-amber-50 text-amber-600 border-amber-100', id: 'rest-1' }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            const oppObj = opportunities.find(o => o.id === item.id);
                            if (oppObj) {
                              if (oppObj.type === 'internship') {
                                setViewingInternship(oppObj);
                              } else {
                                setSelectedOpp(oppObj);
                                setActiveGalleryIdx(0);
                                setDirectionsStatus(null);
                              }
                            }
                          }}
                          className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.012)] hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
                        >
                          <div className="space-y-2">
                            <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeBg}`}>
                              {item.type}
                            </span>
                            <div className="flex items-center space-x-3.5 pt-2">
                              <span className="h-6 w-6 shrink-0 flex items-center justify-center">
                                {renderOpportunityLogo({ organizer: item.org }, "h-full w-full object-contain")}
                              </span>
                              <div className="min-w-0">
                                <h4 className="text-xs font-bold text-slate-800 truncate leading-tight">{item.title}</h4>
                                <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{item.org}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-4 text-[9px] font-bold text-[#2563EB]">
                            <span>Explore details</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB: DASHBOARD OVERVIEW */}
              {activeTab === 'dashboard' && (
                <div className="flex-grow overflow-y-auto p-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-8">
                  {/* Overview Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                      <motion.div
                        key={stat.title}
                        onClick={() => setActiveTab(stat.tab)}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="p-6 bg-white border border-[#E2E8F0] rounded-[24px] text-left cursor-pointer transition-all shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.04)] flex items-start space-x-4 hover:border-[#2563EB]/20"
                      >
                        <div className={`p-3.5 rounded-xl shrink-0 ${
                          stat.color === 'blue' ? 'bg-blue-50 text-[#2563EB] border border-blue-100' :
                          stat.color === 'indigo' ? 'bg-indigo-50 text-[#4F46E5] border border-indigo-100' :
                          stat.color === 'cyan' ? 'bg-cyan-50 text-[#06B6D4] border border-cyan-100' :
                          'bg-orange-50 text-[#F97316] border border-orange-100'
                        }`}>
                          <stat.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{stat.title}</span>
                          <h4 className="text-xl font-extrabold text-slate-800 mt-1 leading-tight">{stat.count}</h4>
                          <p className="text-[10px] text-slate-400 font-semibold mt-1 leading-none">{stat.detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Create Opportunities Quick Actions */}
                  <div className="space-y-4">
                    <div className="text-left">
                      <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-widest">Create Opportunities</h3>
                      <p className="text-[11px] text-slate-400 font-semibold mt-1">Help others discover opportunities by publishing internships, hackathons, and events.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Create Internship Card */}
                      <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.04)] hover:border-[#2563EB]/25 transition-all text-left flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-xl w-fit">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Create Internship</h4>
                            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-normal">
                              Publish internship opportunities for students and professionals.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setActiveTab('create_opportunity');
                            setCreateOpportunityTab('internship');
                            setEditingOppId(null);
                          }}
                          className="mt-5 w-full py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm border-none"
                        >
                          Create Internship
                        </button>
                      </motion.div>

                      {/* Create Hackathon Card */}
                      <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(79,70,229,0.04)] hover:border-[#4F46E5]/25 transition-all text-left flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="p-3 bg-indigo-50 text-[#4F46E5] border border-indigo-100 rounded-xl w-fit">
                            <Trophy className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Create Hackathon</h4>
                            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-normal">
                              Launch hackathons and attract participants.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setActiveTab('create_opportunity');
                            setCreateOpportunityTab('hackathon');
                            setEditingOppId(null);
                          }}
                          className="mt-5 w-full py-2.5 bg-[#4F46E5] hover:bg-indigo-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm border-none"
                        >
                          Create Hackathon
                        </button>
                      </motion.div>

                      {/* Create Event Card */}
                      <motion.div 
                        whileHover={{ y: -4 }}
                        className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(6,182,212,0.04)] hover:border-[#06B6D4]/25 transition-all text-left flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="p-3 bg-cyan-50 text-[#06B6D4] border border-cyan-100 rounded-xl w-fit">
                            <Calendar className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Create Event</h4>
                            <p className="text-[11px] text-slate-500 font-medium mt-1 leading-normal">
                              Create workshops, seminars, meetups, and conferences.
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setActiveTab('create_opportunity');
                            setCreateOpportunityTab('event');
                            setEditingOppId(null);
                          }}
                          className="mt-5 w-full py-2.5 bg-[#06B6D4] hover:bg-cyan-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm border-none"
                        >
                          Create Event
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Main Grid Splits */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left: Recommended Feed & GPS Radar Map */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* GPS Radar Scanning Widget */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Scanning Node</span>
                            <h4 className="font-extrabold text-slate-700 mt-1.5 flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-[#2563EB]" />
                              <span>{profile.organization} Center</span>
                            </h4>
                          </div>
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[9px] font-bold text-emerald-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute" />
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative" />
                            <span>GPS Active</span>
                          </span>
                        </div>

                        {/* Radar Arena */}
                        <div className="h-[240px] bg-[#0A0E1A] rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-900 shadow-inner group">
                          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-80" />
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
                          
                          <div className="absolute w-[200px] h-[200px] rounded-full border border-slate-800/40 flex items-center justify-center">
                            <div className="w-[140px] h-[140px] rounded-full border border-slate-800/50 flex items-center justify-center">
                              <div className="w-[80px] h-[80px] rounded-full border border-slate-800/60" />
                            </div>
                          </div>

                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                            className="absolute inset-0 origin-center bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent border-t border-blue-500/20 rounded-full pointer-events-none"
                          />

                          {opportunities.map((opp) => (
                            <motion.div
                              key={opp.id}
                              onClick={() => {
                                if (opp.type === 'internship') {
                                  setViewingInternship(opp);
                                } else {
                                  setSelectedOpp(opp);
                                  setActiveGalleryIdx(0);
                                  setDirectionsStatus(null);
                                }
                              }}
                              className="absolute cursor-pointer w-4.5 h-4.5 rounded-full border-2 shadow-lg z-20 transition-all flex items-center justify-center"
                              style={{
                                left: `${opp.x}%`,
                                top: `${opp.y}%`,
                                backgroundColor: opp.hex,
                                borderColor: 'rgba(255, 255, 255, 0.8)',
                                boxShadow: `0 0 12px ${opp.hex}`
                              }}
                              title={`${opp.title} (${opp.organizer})`}
                              whileHover={{ scale: 1.4, borderColor: '#FFFFFF', boxShadow: `0 0 20px ${opp.hex}` }}
                            />
                          ))}

                          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center z-10 pointer-events-none">
                            <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping absolute" />
                            <div className="w-2 h-2 rounded-full bg-blue-500 z-10" />
                          </div>

                          <div className="absolute top-3.5 left-4 text-[8px] font-mono text-slate-500 space-y-0.5 text-left leading-none">
                            <p>GPS SCAN LAT: 17.9806° N</p>
                            <p>GPS SCAN LNG: 79.5302° E</p>
                          </div>
                          <div className="absolute bottom-3.5 right-4 text-[8px] font-mono text-slate-500 leading-none">
                            SCAN RESOLUTION: 5.0 KM
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100">
                          <span>SCAN STATUS: SYNCED</span>
                          <span className="text-[#2563EB] font-bold">CLICK PINS TO DEEP-DIVE</span>
                        </div>
                      </div>

                      {/* SLEEK RECRUITER ANALYTICS SUITE */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Area Chart Card */}
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                          <div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Activity Flow</span>
                            <h4 className="font-extrabold text-slate-700 mt-1">Monthly Fit Match Rate</h4>
                          </div>
                          {/* SVG Area Chart */}
                          <svg viewBox="0 0 500 180" className="w-full h-40">
                            <defs>
                              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2"/>
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
                              </linearGradient>
                            </defs>
                            <line x1="40" y1="20" x2="460" y2="20" stroke="#F8FAFC" strokeWidth="1.5" />
                            <line x1="40" y1="70" x2="460" y2="70" stroke="#F1F5F9" strokeWidth="1.5" />
                            <line x1="40" y1="120" x2="460" y2="120" stroke="#F1F5F9" strokeWidth="1.5" />
                            
                            <path d="M 40 140 Q 110 80 180 100 T 320 50 T 460 30" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
                            <path d="M 40 140 Q 110 80 180 100 T 320 50 T 460 30 L 460 140 L 40 140 Z" fill="url(#chartGrad)" />
                            
                            <circle cx="180" cy="100" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="320" cy="50" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />
                            <circle cx="460" cy="30" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="1.5" />

                            <text x="40" y="155" fill="#94A3B8" fontSize="9" fontWeight="bold">JAN</text>
                            <text x="145" y="155" fill="#94A3B8" fontSize="9" fontWeight="bold">MAR</text>
                            <text x="250" y="155" fill="#94A3B8" fontSize="9" fontWeight="bold">MAY</text>
                            <text x="355" y="155" fill="#94A3B8" fontSize="9" fontWeight="bold">JUL</text>
                            <text x="460" y="155" fill="#94A3B8" fontSize="9" fontWeight="bold">SEP</text>
                          </svg>
                        </div>

                        {/* Doughnut Chart Card */}
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm flex flex-col sm:flex-row items-center gap-6 justify-between text-left">
                          <div className="space-y-3.5">
                            <div>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block leading-none">Acquisition Split</span>
                              <h4 className="font-extrabold text-slate-700 mt-1">Applied Fields</h4>
                            </div>
                            <div className="space-y-1.5 text-[9px] font-black text-slate-500 uppercase tracking-wider">
                              <p className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] block" /><span>Internships (40%)</span></p>
                              <p className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#4F46E5] block" /><span>Hackathons (35%)</span></p>
                              <p className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F97316] block" /><span>Perks & Events (25%)</span></p>
                            </div>
                          </div>
                          <div className="relative shrink-0 flex items-center justify-center">
                            <svg viewBox="0 0 120 120" className="w-28 h-28">
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#F8FAFC" strokeWidth="9" />
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#2563EB" strokeWidth="9" strokeDasharray="282.7" strokeDashoffset="113.1" strokeLinecap="round" transform="rotate(-90 60 60)" />
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#4F46E5" strokeWidth="9" strokeDasharray="282.7" strokeDashoffset="212.0" strokeLinecap="round" transform="rotate(54 60 60)" />
                              <circle cx="60" cy="60" r="45" fill="none" stroke="#F97316" strokeWidth="9" strokeDasharray="282.7" strokeDashoffset="226.2" strokeLinecap="round" transform="rotate(144 60 60)" />
                              <text x="60" y="65" fill="#0F172A" fontSize="11" fontWeight="900" textAnchor="middle">88% Fit</text>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* AI recommendations feed */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest text-left">AI Recommended Feed</h3>
                          <button onClick={() => setActiveTab('opportunities')} className="text-xs font-bold text-[#2563EB] hover:text-blue-700">
                            See all fits
                          </button>
                        </div>

                        <div className="space-y-3.5">
                          {opportunities.slice(0, 3).map((opp) => {
                            const match = getMatchPercentage(opp);
                            return (
                              <div
                                key={opp.id}
                                onClick={() => {
                                  if (opp.type === 'internship') {
                                    setViewingInternship(opp);
                                  } else {
                                    setSelectedOpp(opp);
                                    setActiveGalleryIdx(0);
                                    setDirectionsStatus(null);
                                  }
                                }}
                                className="p-4 bg-white border border-[#E2E8F0] rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all cursor-pointer flex justify-between items-center group"
                              >
                                <div className="flex items-center space-x-4 min-w-0">
                                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shrink-0">
                                    {opp.logo}
                                  </div>
                                  <div className="text-left min-w-0">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-[9px] font-extrabold uppercase tracking-widest" style={{ color: opp.hex }}>{opp.type}</span>
                                      <span className="text-[8px] px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full font-bold">
                                        {match}% Match
                                      </span>
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-800 truncate mt-0.5">{opp.title}</h4>
                                    <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{opp.organizer} • {opp.distance}</p>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3.5 shrink-0 pl-4">
                                  {appliedIds.has(opp.id) || registeredHackathons.has(opp.id) || registeredEvents.has(opp.id) || reservedRestaurants.has(opp.id) ? (
                                    <span className="text-[9px] font-black bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wider">Acquired</span>
                                  ) : null}
                                  <ArrowUpRight className="h-4.5 w-4.5 text-slate-400 group-hover:text-slate-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Right: Profile completion card & deadlines widget & matching panel */}
                    <div className="space-y-8">
                      {/* Profile completion card */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Profile Status</h4>
                          <span className="text-xs font-black text-[#2563EB]">{completionPercentage}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercentage}%` }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full"
                          />
                        </div>
                        <div className="space-y-2.5">
                          {completionItems.map((item) => {
                            const isDone = profile[item.id];
                            return (
                              <div 
                                key={item.id}
                                onClick={() => {
                                  setProfile(prev => ({ ...prev, [item.id]: !isDone }));
                                }}
                                className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl cursor-pointer border border-transparent hover:border-slate-100 transition-all"
                              >
                                <div className="flex items-center space-x-2.5 min-w-0">
                                  <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                                    isDone ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-slate-300 bg-white'
                                  }`}>
                                    {isDone && <CheckCircle className="h-3 w-3 stroke-[3px]" />}
                                  </div>
                                  <span className={`text-[11px] font-bold truncate ${isDone ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400">+{item.pct}%</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Deadlines Widget */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left space-y-4">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Critical Deadlines</h4>
                        <div className="space-y-3">
                          {opportunities.filter(o => o.deadlineHours).slice(0, 4).map((opp) => {
                            const isHour = opp.deadlineHours.includes('Hour') || opp.deadlineHours.includes('Today');
                            return (
                              <div 
                                key={opp.id}
                                onClick={() => {
                                  if (opp.type === 'internship') {
                                    setViewingInternship(opp);
                                  } else {
                                    setSelectedOpp(opp);
                                    setActiveGalleryIdx(0);
                                    setDirectionsStatus(null);
                                  }
                                }}
                                className={`p-3 rounded-2xl flex items-center justify-between border cursor-pointer hover:border-slate-300 transition-all ${
                                  isHour ? 'bg-rose-50/40 border-rose-100/60' : 'bg-slate-50/50 border-slate-100'
                                }`}
                              >
                                <div className="flex items-center space-x-2.5 min-w-0">
                                  <span className="text-base shrink-0">{opp.logo}</span>
                                  <div className="min-w-0">
                                    <p className="text-xs font-bold text-slate-800 truncate leading-tight">{opp.title}</p>
                                    <p className="text-[9px] text-slate-400 mt-0.5 truncate leading-none">{opp.organizer}</p>
                                  </div>
                                </div>
                                <span className={`text-[9px] font-extrabold px-2.5 py-1 rounded-full shrink-0 border uppercase tracking-wider ${
                                  isHour ? 'bg-rose-100/30 text-rose-600 border-rose-200/40' : 'bg-slate-100/50 text-slate-500 border-slate-200/40'
                                }`}>
                                  {opp.deadlineHours}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TABS: DETAILED DIRECT LISTS (Internships, Hackathons, Events, Food) */}
              {['internships', 'hackathons', 'events', 'food'].includes(activeTab) && (
                <div className="flex-grow overflow-y-auto p-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-6 text-left">
                  
                  {/* Tab-wise header and stats */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-5">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-800 tracking-tight capitalize">{activeTab === 'food' ? 'Food Offers Near You' : activeTab}</h3>
                      <p className="text-xs text-slate-400 mt-0.5 font-medium">
                        {activeTab === 'saved' ? 'Review all bookmarked internships, hackathons, and restaurant cards.' :
                         activeTab === 'food' ? 'Explore popular local restaurants with active student discount codes.' :
                         `Browse available ${activeTab} and matching recommendations.`}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="px-3.5 py-1.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full text-xs font-extrabold shadow-sm">
                        {filteredList.length} Active Items
                      </span>
                    </div>
                  </div>

                  {/* List View grid of cards */}
                  {filteredList.length === 0 ? (
                    <div className="py-20 text-center space-y-3 bg-white border border-[#E2E8F0] rounded-[24px] shadow-sm">
                      <span className="text-4xl">🔎</span>
                      <h4 className="text-sm font-bold text-slate-800">No items match your criteria</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">Try clearing your search query or check back later.</p>
                    </div>
                  ) : (
                    <motion.div 
                      variants={listContainerVariants}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {filteredList.map((opp) => {
                        const isStarred = savedIds.has(opp.id);
                        const isAcquired = appliedIds.has(opp.id) || registeredHackathons.has(opp.id) || registeredEvents.has(opp.id) || reservedRestaurants.has(opp.id);
                        
                        return (
                          <motion.div
                            key={opp.id}
                            variants={listItemVariants}
                            onClick={() => {
                              if (opp.type === 'internship') {
                                setViewingInternship(opp);
                              } else {
                                setSelectedOpp(opp);
                                setActiveGalleryIdx(0);
                                setDirectionsStatus(null);
                              }
                            }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_16px_30px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-all cursor-pointer overflow-hidden relative flex flex-col justify-between group"
                          >
                            {/* Card Top Block */}
                            <div>
                              {/* Event/Food Card Banner with Fallbacks */}
                              {(opp.banner) && (
                                <div className="h-40 w-full overflow-hidden relative shrink-0 bg-slate-100">
                                  <img decoding="async" loading="lazy" 
                                    src={opp.banner} 
                                    alt="banner" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute top-3.5 right-3.5 flex space-x-2 z-10">
                                    <button 
                                      onClick={(e) => toggleBookmark(opp.id, e)}
                                      className={`p-2 bg-white/90 backdrop-blur-md rounded-xl hover:bg-white text-slate-500 transition-all active:scale-90 shadow-sm border border-slate-100 ${isStarred ? 'text-[#06B6D4]' : ''}`}
                                    >
                                      <Star className={`h-4 w-4 ${isStarred ? 'fill-current' : ''}`} />
                                    </button>
                                  </div>
                                  
                                  <div className="absolute bottom-3.5 left-3.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl text-white text-[10px] font-bold uppercase tracking-wider">
                                    {opp.type === 'food' ? opp.distance : (opp.location ? opp.location.split(' ')[0] : 'Online')}
                                  </div>
                                </div>
                              )}

                              <div className="p-6 space-y-4">
                                {/* Header with brand logo & star (for non-banner cards) */}
                                {(!opp.banner) && (
                                  <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shrink-0">
                                      {opp.logo}
                                    </div>
                                    <button 
                                      onClick={(e) => toggleBookmark(opp.id, e)}
                                      className={`p-2 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all active:scale-90 ${isStarred ? 'text-[#06B6D4] bg-cyan-50 border-cyan-100 hover:bg-cyan-100/50' : ''}`}
                                    >
                                      <Star className={`h-4.5 w-4.5 ${isStarred ? 'fill-current' : ''}`} />
                                    </button>
                                  </div>
                                )}

                                {/* Card Head Details */}
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                                    <span className="text-[9px] font-extrabold uppercase tracking-widest" style={{ color: opp.hex }}>{opp.type}</span>
                                    {opp.type === 'food' && (
                                      <span className="flex items-center text-[10px] font-bold text-amber-500 gap-0.5">
                                        ★ {opp.rating}
                                      </span>
                                    )}
                                    {opp.type !== 'event' && opp.type !== 'food' && (
                                      <span className="text-[9px] px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full font-bold">
                                        {getMatchPercentage(opp)}% Match
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="text-sm font-bold text-slate-800 truncate mt-1">{opp.title}</h4>
                                  <p className="text-[11px] text-slate-400 font-semibold truncate mt-1">{opp.organizer}</p>
                                </div>

                                {/* Main attributes row depending on opportunity type */}
                                {opp.type === 'internship' && (
                                  <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500 leading-none">
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">STIPEND</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.stipend}</span>
                                    </div>
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SKILLS</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block truncate">{opp.skills.slice(0, 2).join(', ')}</span>
                                    </div>
                                  </div>
                                )}

                                {opp.type === 'hackathon' && (
                                  <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500 leading-none">
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">PRIZE POOL</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.prizePool}</span>
                                    </div>
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">TEAM SIZE</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.teamSize}</span>
                                    </div>
                                  </div>
                                )}

                                {opp.type === 'event' && (
                                  <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500 leading-none">
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DATE & TIME</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block truncate">{opp.date}</span>
                                    </div>
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SEATS LEFT</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.availableSeats} Spots</span>
                                    </div>
                                  </div>
                                )}

                                {opp.type === 'workshop' && (
                                  <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500 leading-none">
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">COST</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.stipend}</span>
                                    </div>
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SEATS LEFT</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.availableSeats} Spot</span>
                                    </div>
                                  </div>
                                )}

                                {opp.type === 'food' && (
                                  <div className="grid grid-cols-2 gap-3.5 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[10px] font-semibold text-slate-500 leading-none">
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">OFFER</span>
                                      <span className="text-rose-600 font-extrabold mt-1 block truncate">{opp.offer}</span>
                                    </div>
                                    <div>
                                      <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">TABLES FREE</span>
                                      <span className="text-slate-700 font-extrabold mt-1 block">{opp.tablesAvailable} Free</span>
                                    </div>
                                  </div>
                                )}

                                <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
                                  {opp.detail}
                                </p>
                              </div>
                            </div>

                            <div className="px-6 pb-6 pt-3.5 border-t border-slate-100 flex items-center justify-between mt-auto bg-slate-50/10">
                              <div className="text-left leading-none">
                                <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DEADLINE</span>
                                <span className="text-xs text-slate-700 font-bold mt-1.5 block">{opp.deadline.replace('Apply Before: ', '')}</span>
                              </div>
                              <button className={`px-4.5 py-2 rounded-xl text-xs font-black transition-all ${
                                isAcquired ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-900 text-white hover:bg-slate-800'
                              }`}>
                                {isAcquired ? 'Acquired' : opp.type === 'food' ? 'Book Slot' : 'Learn More'}
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
              )}

              {/* TAB: SAVED ITEMS (Premium Saved Items Page) */}
              {activeTab === 'saved' && (
                <SavedItemsPage
                  opportunities={opportunities}
                  savedIds={savedIds}
                  toggleBookmark={toggleBookmark}
                  appliedIds={appliedIds}
                  registeredHackathons={registeredHackathons}
                  registeredEvents={registeredEvents}
                  reservedRestaurants={reservedRestaurants}
                  setViewingInternship={setViewingInternship}
                  setSelectedOpp={setSelectedOpp}
                  setActiveTab={setActiveTab}
                  executeRegisterEvent={executeRegisterEvent}
                  executeReserveTable={executeReserveTable}
                  renderOpportunityLogo={renderOpportunityLogo}
                />
              )}

              {/* TAB: NOTIFICATIONS */}
              {activeTab === 'notifications' && (
                <NotificationsPage
                  notifications={notifications}
                  setNotifications={setNotifications}
                  setActiveTab={setActiveTab}
                />
              )}

              {/* TAB: TRACKER */}
              {activeTab === 'tracker' && (
                <OpportunityTrackerPage
                  opportunities={opportunities}
                  appliedIds={appliedIds}
                  setAppliedIds={setAppliedIds}
                  registeredHackathons={registeredHackathons}
                  setRegisteredHackathons={setRegisteredHackathons}
                  registeredEvents={registeredEvents}
                  setRegisteredEvents={setRegisteredEvents}
                  reservedRestaurants={reservedRestaurants}
                  setReservedRestaurants={setReservedRestaurants}
                  setSelectedOpp={setSelectedOpp}
                  setViewingInternship={setViewingInternship}
                  setOpportunities={setOpportunities}
                  setActiveTab={setActiveTab}
                />
              )}

              {/* TAB: TEAM FINDER */}
              {activeTab === 'teamfinder' && (
                <TeamFinderPage
                  joinedTeamIds={joinedTeamIds}
                  setJoinedTeamIds={setJoinedTeamIds}
                  existingTeams={existingTeams}
                  setExistingTeams={setExistingTeams}
                />
              )}

              {/* TAB: HISTORY */}
              {activeTab === 'history' && (
                <ActivityHistoryPage
                  opportunities={opportunities}
                  appliedIds={appliedIds}
                  registeredHackathons={registeredHackathons}
                  registeredEvents={registeredEvents}
                  reservedRestaurants={reservedRestaurants}
                  savedIds={savedIds}
                  setViewingInternship={setViewingInternship}
                  setSelectedOpp={setSelectedOpp}
                  setActiveTab={setActiveTab}
                />
              )}

              {/* TAB: PROFILE PAGE */}
              {activeTab === 'profile' && (
                <div className="flex-grow overflow-y-auto p-8 max-w-7xl mx-auto w-full text-left custom-scrollbar space-y-8">
                  {/* Grid Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Main Profile Contents (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8">
                      
                      {/* Profile Header (LinkedIn Style) */}
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] overflow-hidden shadow-sm relative">
                        {/* Cover Banner */}
                        <div className="h-44 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 relative overflow-hidden shrink-0">
                          <div className="absolute inset-0 bg-black/10" />
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />
                          <div className="absolute left-1/4 -bottom-10 w-36 h-36 bg-cyan-400/20 rounded-full blur-lg pointer-events-none" />
                        </div>

                        {/* Profile Photo & Info area */}
                        <div className="px-8 pb-8 relative text-left">
                          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 -mt-16 mb-4">
                            <div className="relative w-28 h-28 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center shrink-0 overflow-hidden select-none z-10">
                              <img decoding="async" loading="lazy" 
                                src={profilePhoto || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=60"} 
                                alt="Avatar" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button 
                              onClick={() => {
                                setTempProfile({ ...profile });
                                setShowEditProfileModal(true);
                              }}
                              className="flex items-center gap-1.5 px-4 py-2 border border-[#E2E8F0] hover:border-slate-300 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95 z-10 bg-white"
                            >
                              <EditIcon className="h-3.5 w-3.5" />
                              <span>Edit Profile</span>
                            </button>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{profile.name}</h2>
                              <p className="text-xs font-black text-[#2563EB] mt-0.5">{profile.headline || 'Frontend Developer | Builder'}</p>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-semibold">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                                <span>{profile.location || 'Warangal, India'}</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <GraduationCap className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                                <span>{profile.organization || 'University'}</span>
                              </span>
                              <span>•</span>
                              <span className="px-2.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full text-[10px] font-bold">
                                {profile.role || 'Student'}
                              </span>
                            </div>

                            <div className="h-px bg-slate-100 my-2" />

                            <div className="space-y-1.5">
                              <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block">Biography</span>
                              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                                {profile.bio || 'Add a bio to introduce yourself to recruiters.'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Education Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                            <GraduationCap className="h-4 w-4 text-[#2563EB]" />
                            <span>Education History</span>
                          </h3>
                          <button 
                            onClick={() => {
                              setNewEdu({ school: '', degree: '', year: '', cgpa: '' });
                              setShowAddEduModal(true);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#2563EB] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add Education</span>
                          </button>
                        </div>

                        {educationList.length === 0 ? (
                          <p className="text-xs text-slate-400 py-4 text-center">No education listings added yet.</p>
                        ) : (
                          <div className="space-y-6 text-left relative pl-4 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                            {educationList.map((edu) => (
                              <div key={edu.id} className="relative group space-y-1">
                                {/* Dot indicator */}
                                <div className="absolute -left-[18px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white ring-4 ring-blue-50" />
                                
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h4 className="text-xs font-bold text-slate-850">{edu.degree}</h4>
                                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{edu.school} • {edu.year}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    {edu.cgpa && (
                                      <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full font-bold">
                                        {edu.cgpa}
                                      </span>
                                    )}
                                    <button 
                                      onClick={() => setEducationList(prev => prev.filter(e => e.id !== edu.id))}
                                      className="p-1 hover:bg-rose-50 text-slate-300 hover:text-rose-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Experience Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4 text-[#2563EB]" />
                            <span>Professional Experience</span>
                          </h3>
                          <button 
                            onClick={() => {
                              setNewExp({ role: '', company: '', duration: '', desc: '', type: 'internship' });
                              setShowAddExpModal(true);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#2563EB] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add Experience</span>
                          </button>
                        </div>

                        {experienceList.length === 0 ? (
                          <p className="text-xs text-slate-400 py-4 text-center">No experience listings added yet.</p>
                        ) : (
                          <div className="space-y-6 text-left relative pl-4 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                            {experienceList.map((exp) => (
                              <div key={exp.id} className="relative group space-y-1">
                                {/* Dot indicator */}
                                <div className="absolute -left-[18px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-white ring-4 ring-indigo-50" />
                                
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-xs font-bold text-slate-850">{exp.role}</h4>
                                      <span className={`text-[8px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-full border ${
                                        exp.type === 'internship' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                        exp.type === 'project' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' :
                                        exp.type === 'leadership' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                                        'bg-slate-50 text-slate-500 border-slate-100'
                                      }`}>
                                        {exp.type}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{exp.company} • {exp.duration}</p>
                                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-semibold">{exp.desc}</p>
                                  </div>
                                  <button 
                                    onClick={() => setExperienceList(prev => prev.filter(e => e.id !== exp.id))}
                                    className="p-1 hover:bg-rose-50 text-slate-300 hover:text-rose-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                  >
                                    <Trash2 className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Projects Section (GitHub Style) */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                            <GithubIcon className="h-4 w-4 text-[#2563EB]" />
                            <span>Featured Projects</span>
                          </h3>
                          <button 
                            onClick={() => {
                              setNewProj({ title: '', description: '', techStack: '', githubUrl: '', demoUrl: '' });
                              setShowAddProjModal(true);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#2563EB] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add Project</span>
                          </button>
                        </div>

                        {projectsList.length === 0 ? (
                          <p className="text-xs text-slate-400 py-4 text-center">No projects listed yet.</p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            {projectsList.map((proj) => (
                              <motion.div 
                                key={proj.id}
                                whileHover={{ y: -3 }}
                                className="bg-slate-50/50 hover:bg-white border border-[#E2E8F0] hover:border-slate-300 p-5 rounded-2xl flex flex-col justify-between shadow-sm relative group transition-all"
                              >
                                <div className="space-y-2.5">
                                  <div className="flex justify-between items-start">
                                    <h4 className="text-xs font-bold text-slate-850 truncate pr-6">{proj.title}</h4>
                                    <button 
                                      onClick={() => setProjectsList(prev => prev.filter(p => p.id !== proj.id))}
                                      className="absolute top-4 right-4 p-1 hover:bg-rose-50 text-slate-300 hover:text-rose-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                    >
                                      <Trash2 className="h-3.5 w-3.5" />
                                    </button>
                                  </div>
                                  <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2">{proj.description}</p>
                                </div>

                                <div className="space-y-3 mt-4 pt-3 border-t border-slate-100">
                                  {proj.techStack && (
                                    <div className="flex flex-wrap gap-1.5">
                                      {proj.techStack.split(',').map((tech) => (
                                        <span key={tech.trim()} className="px-2 py-0.5 bg-white border border-slate-200 rounded-lg text-[9px] text-slate-500 font-bold">
                                          {tech.trim()}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                                  <div className="flex items-center gap-3.5 text-[10px] font-black uppercase tracking-wider">
                                    {proj.githubUrl && (
                                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 flex items-center gap-1">
                                        <GithubIcon className="h-3.5 w-3.5" />
                                        <span>Code</span>
                                      </a>
                                    )}
                                    {proj.demoUrl && (
                                      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] hover:text-blue-700 flex items-center gap-1">
                                        <GlobeIcon className="h-3.5 w-3.5" />
                                        <span>Live Demo</span>
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Certifications Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                            <Trophy className="h-4 w-4 text-[#2563EB]" />
                            <span>Professional Certifications</span>
                          </h3>
                          <button 
                            onClick={() => {
                              setNewCert({ name: '', issuer: '', date: '' });
                              setShowAddCertModal(true);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#2563EB] rounded-xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer active:scale-95"
                          >
                            <Plus className="h-3.5 w-3.5" />
                            <span>Add Certificate</span>
                          </button>
                        </div>

                        {certificationsList.length === 0 ? (
                          <p className="text-xs text-slate-400 py-4 text-center">No certifications listed yet.</p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {certificationsList.map((cert) => (
                              <div 
                                key={cert.id}
                                className="bg-slate-50/50 p-4 border border-[#E2E8F0] rounded-xl flex items-center justify-between group hover:border-slate-300 transition-colors"
                              >
                                <div className="space-y-0.5">
                                  <h4 className="text-xs font-bold text-slate-800 leading-tight">{cert.name}</h4>
                                  <p className="text-[10px] text-slate-500 font-semibold">{cert.issuer} • {cert.date}</p>
                                </div>
                                <button 
                                  onClick={() => setCertificationsList(prev => prev.filter(c => c.id !== cert.id))}
                                  className="p-1 hover:bg-rose-50 text-slate-300 hover:text-rose-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Checklist, Resume, Skills, Activity, Recommendations (1/3 width) */}
                    <div className="space-y-8">
                      
                      {/* Profile Completion Card */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">Completeness Index</span>
                          <span className="text-xs font-black text-[#2563EB]">{completionPercentage}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercentage}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                          />
                        </div>

                        {/* Checklist items */}
                        <div className="space-y-2.5 pt-3 border-t border-slate-100">
                          {completionItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between text-xs py-1">
                              <span className="text-slate-600 font-semibold flex items-center gap-2">
                                <span className="text-sm">{profile[item.id] ? '✅' : '⬜'}</span>
                                <span className={profile[item.id] ? 'text-slate-850' : 'text-slate-400 font-medium'}>
                                  {item.label}
                                </span>
                              </span>
                              <span className={`text-[9px] font-black uppercase tracking-wider ${
                                profile[item.id] ? 'text-emerald-500' : 'text-slate-350'
                              }`}>
                                {profile[item.id] ? 'Completed' : 'Pending'}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Resume Manager Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Resume Vault</h3>
                        
                        {profile.hasResume ? (
                          <div className="space-y-3">
                            <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                              <div className="min-w-0 pr-2">
                                <p className="text-xs font-bold text-emerald-800 truncate">📄 {profile.resumeFile || 'Aishwarya_Resume.pdf'}</p>
                                <p className="text-[9px] text-emerald-500 mt-0.5 font-bold">PDF Attached</p>
                              </div>
                              <button 
                                onClick={removeUploadedResume}
                                className="p-1.5 hover:bg-emerald-100/50 text-emerald-600 rounded-lg transition-all cursor-pointer"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-3 gap-1.5">
                              <button 
                                onClick={() => setShowResumePreviewModal(true)}
                                className="flex items-center justify-center gap-1 py-2 border border-slate-200 hover:border-slate-300 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95 bg-white"
                              >
                                <EyeIcon className="h-3.5 w-3.5 shrink-0" />
                                <span>Preview</span>
                              </button>
                              <label 
                                className="flex items-center justify-center gap-1 py-2 border border-slate-200 hover:border-slate-300 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95 text-center bg-white"
                              >
                                <Upload className="h-3.5 w-3.5 shrink-0 text-indigo-500" />
                                <span>Replace</span>
                                <input type="file" accept=".pdf" onChange={handleResumeChange} className="hidden" />
                              </label>
                              <a 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); alert(`Simulated Download: Starting download for ${profile.resumeFile || 'Aishwarya_Resume.pdf'}`); }}
                                className="flex items-center justify-center gap-1 py-2 border border-slate-200 hover:border-slate-300 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95 bg-white"
                              >
                                <DownloadIcon className="h-3.5 w-3.5 shrink-0" />
                                <span>Download</span>
                              </a>
                            </div>
                          </div>
                        ) : (
                          <label className="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-blue-50/10 cursor-pointer transition-all">
                            <Upload className="h-6 w-6 text-slate-400 mb-2" />
                            <span className="text-xs font-bold text-slate-700">Upload Resume PDF</span>
                            <span className="text-[9px] text-slate-400 mt-1 font-semibold">Supports PDF up to 5MB</span>
                            <input type="file" accept=".pdf" onChange={handleResumeChange} className="hidden" />
                          </label>
                        )}
                      </div>

                      {/* Skills Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Skill Inventory</h3>
                        
                        {/* Dynamic skill adder */}
                        <div className="flex gap-2">
                          <input 
                            type="text"
                            placeholder="Add skill (e.g. Docker)"
                            value={newSkillInput}
                            onChange={(e) => setNewSkillInput(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                const skill = newSkillInput.trim();
                                if (skill && !profile.skills.includes(skill)) {
                                  setProfile(prev => {
                                    const list = [...prev.skills, skill];
                                    return { ...prev, skills: list, hasSkills: list.length > 0 };
                                  });
                                }
                                setNewSkillInput('');
                              }
                            }}
                            className="flex-1 px-3.5 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                          />
                          <button 
                            onClick={() => {
                              const skill = newSkillInput.trim();
                              if (skill && !profile.skills.includes(skill)) {
                                setProfile(prev => {
                                  const list = [...prev.skills, skill];
                                  return { ...prev, skills: list, hasSkills: list.length > 0 };
                                });
                              }
                              setNewSkillInput('');
                            }}
                            className="px-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all active:scale-95 cursor-pointer"
                          >
                            Add
                          </button>
                        </div>

                        {/* Interactive Skills badge grid */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {profile.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-1 hover:border-rose-300 hover:text-rose-500 transition-colors"
                            >
                              <span>{skill}</span>
                              <button 
                                onClick={() => {
                                  setProfile(prev => {
                                    const list = prev.skills.filter(s => s !== skill);
                                    return { ...prev, skills: list, hasSkills: list.length > 0 };
                                  });
                                }}
                                className="text-[10px] font-bold text-slate-400 hover:text-rose-500 cursor-pointer"
                              >
                                ✕
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links Section */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Professional Hubs</h3>
                        
                        <div className="space-y-3.5 text-xs">
                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                              <LinkedinIcon className="h-3.5 w-3.5 text-[#2563EB]" />
                              <span>LinkedIn Profile</span>
                            </label>
                            <input 
                              type="url"
                              value={profile.linkedinUrl}
                              onChange={(e) => {
                                const val = e.target.value;
                                setProfile(prev => ({ ...prev, linkedinUrl: val, hasLinkedin: val.trim().length > 10 }));
                              }}
                              placeholder="https://linkedin.com/in/username"
                              className="w-full px-3.5 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl font-semibold text-slate-850 focus:outline-none focus:border-[#2563EB]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                              <GithubIcon className="h-3.5 w-3.5 text-slate-800" />
                              <span>GitHub Profile</span>
                            </label>
                            <input 
                              type="url"
                              value={profile.githubUrl}
                              onChange={(e) => {
                                const val = e.target.value;
                                setProfile(prev => ({ ...prev, githubUrl: val, hasGithub: val.trim().length > 10 }));
                              }}
                              placeholder="https://github.com/username"
                              className="w-full px-3.5 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl font-semibold text-slate-850 focus:outline-none focus:border-[#2563EB]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                              <GlobeIcon className="h-3.5 w-3.5 text-emerald-500" />
                              <span>Portfolio Website</span>
                            </label>
                            <input 
                              type="url"
                              value={profile.portfolioUrl}
                              onChange={(e) => {
                                const val = e.target.value;
                                setProfile(prev => ({ ...prev, portfolioUrl: val, hasPortfolio: val.trim().length > 10 }));
                              }}
                              placeholder="https://myportfolio.com"
                              className="w-full px-3.5 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl font-semibold text-slate-850 focus:outline-none focus:border-[#2563EB]"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                              <TwitterIcon className="h-3.5 w-3.5 text-cyan-400" />
                              <span>Twitter / X</span>
                            </label>
                            <input 
                              type="url"
                              value={profile.twitterUrl}
                              onChange={(e) => setProfile(prev => ({ ...prev, twitterUrl: e.target.value }))}
                              placeholder="https://x.com/username"
                              className="w-full px-3.5 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl font-semibold text-slate-800 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      {/* AI Recommendations Insights */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <div className="space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#2563EB] flex items-center gap-1.5 font-bold">
                            <Sparkles className="h-3.5 w-3.5 text-blue-500 animate-pulse animate-duration-1000 shrink-0" />
                            <span>AI Recommendation Insights</span>
                          </span>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Based on your profile:</h4>
                        </div>

                        <div className="space-y-3">
                          {[
                            { title: 'Frontend Internships', rate: 95, color: '#2563EB', borderCol: 'border-l-[#2563EB]', bg: 'bg-blue-50/15 hover:bg-blue-50/30', desc: 'Aligned with React & TypeScript skills', tab: 'internships' },
                            { title: 'Hackathons', rate: 90, color: '#4F46E5', borderCol: 'border-l-[#4F46E5]', bg: 'bg-indigo-50/15 hover:bg-indigo-50/30', desc: 'Ready for MERN Stack builds', tab: 'hackathons' },
                            { title: 'Workshops & Events', rate: 88, color: '#06B6D4', borderCol: 'border-l-[#06B6D4]', bg: 'bg-cyan-50/15 hover:bg-cyan-50/30', desc: 'Fits your Web Dev learning interests', tab: 'opportunities' }
                          ].map((rec) => {
                            const completenessBonus = Math.round((completionPercentage / 100) * 10);
                            const finalRate = Math.min(100, rec.rate - 10 + completenessBonus);
                            return (
                              <motion.div 
                                key={rec.title} 
                                whileHover={{ y: -2, scale: 1.01 }}
                                className={`p-4 border border-[#E2E8F0] border-l-4 ${rec.borderCol} rounded-2xl flex flex-col justify-between gap-3.5 transition-all ${rec.bg}`}
                              >
                                <div className="flex justify-between items-start">
                                  <div className="space-y-0.5">
                                    <h5 className="text-xs font-black text-slate-800 leading-tight">{rec.title}</h5>
                                    <p className="text-[10px] text-slate-400 font-bold leading-tight">{rec.desc}</p>
                                  </div>
                                  <span className="text-xs font-black shrink-0" style={{ color: rec.color }}>{finalRate}% Match</span>
                                </div>
                                
                                {/* Progress Bar indicator */}
                                <div className="space-y-1.5">
                                  <div className="w-full h-1.5 bg-slate-100/70 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full rounded-full transition-all duration-500" 
                                      style={{ width: `${finalRate}%`, backgroundColor: rec.color }}
                                    />
                                  </div>
                                  <div className="flex justify-between items-center pt-0.5">
                                    <span className="text-[9px] text-slate-400 font-bold">Matching Rate</span>
                                    <button 
                                      onClick={() => setActiveTab(rec.tab)}
                                      className="text-[9px] font-black uppercase tracking-wider hover:underline flex items-center gap-0.5 cursor-pointer border-none bg-transparent p-0"
                                      style={{ color: rec.color }}
                                    >
                                      <span>Explore Roles</span>
                                      <span>→</span>
                                    </button>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Recent Activities Log */}
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                        <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Recent Activity Feed</h3>
                        
                        <div className="space-y-3.5 max-h-[240px] overflow-y-auto custom-scrollbar">
                          {activityLog.map((act) => (
                            <div key={act.id} className="flex items-start space-x-3 text-xs leading-none">
                              <span className="text-base shrink-0 mt-0.5">{act.icon}</span>
                              <div className="flex-1 min-w-0 pr-1">
                                <p className="font-bold text-slate-800 leading-tight">{act.action}</p>
                                <p className="text-[10px] text-slate-500 mt-1 leading-none">{act.details}</p>
                                <span className="text-[8px] text-slate-400 mt-1.5 block font-semibold">{act.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* MODAL DIALOGS FOR PROFILE MODIFICATIONS (Render outside grid) */}
                  {/* ======================================================== */}

                  {/* Add Education Modal */}
                  {showAddEduModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-slate-700">
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-2xl max-w-md w-full text-left space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Add Education Listing</h4>
                          <button onClick={() => setShowAddEduModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-3.5">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Degree / Certification</label>
                            <input type="text" placeholder="e.g. Bachelor of Technology in CS" value={newEdu.degree} onChange={(e) => setNewEdu({ ...newEdu, degree: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">School / University / College</label>
                            <input type="text" placeholder="e.g. NIAT" value={newEdu.school} onChange={(e) => setNewEdu({ ...newEdu, school: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Duration / Year</label>
                              <input type="text" placeholder="e.g. 2023 - 2027" value={newEdu.year} onChange={(e) => setNewEdu({ ...newEdu, year: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">CGPA / Grade (Optional)</label>
                              <input type="text" placeholder="e.g. 9.2 CGPA" value={newEdu.cgpa} onChange={(e) => setNewEdu({ ...newEdu, cgpa: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]" />
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (newEdu.school && newEdu.degree) {
                              setEducationList(prev => [
                                ...prev,
                                { id: `edu-${Date.now()}`, ...newEdu }
                              ]);
                              setShowAddEduModal(false);
                            } else {
                              alert("Please fill in both the Degree and School fields.");
                            }
                          }}
                          className="w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                        >
                          Save Listing
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Add Experience Modal */}
                  {showAddExpModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-slate-700">
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-2xl max-w-md w-full text-left space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Add Professional Experience</h4>
                          <button onClick={() => setShowAddExpModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-3.5 text-xs">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Role / Title</label>
                              <input type="text" placeholder="e.g. Frontend Intern" value={newExp.role} onChange={(e) => setNewExp({ ...newExp, role: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Experience Type</label>
                              <select value={newExp.type} onChange={(e) => setNewExp({ ...newExp, type: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none">
                                <option value="internship">Internship</option>
                                <option value="project">Project Work</option>
                                <option value="leadership">Leadership Role</option>
                                <option value="volunteer">Volunteer Experience</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Company / Host Organization</label>
                            <input type="text" placeholder="e.g. Google (Mock)" value={newExp.company} onChange={(e) => setNewExp({ ...newExp, company: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Duration / Date Range</label>
                            <input type="text" placeholder="e.g. May 2025 - Present" value={newExp.duration} onChange={(e) => setNewExp({ ...newExp, duration: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Short Description</label>
                            <textarea rows={3} placeholder="Describe your responsibilities, goals, and outcomes..." value={newExp.desc} onChange={(e) => setNewExp({ ...newExp, desc: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none resize-none" />
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (newExp.role && newExp.company) {
                              setExperienceList(prev => [
                                ...prev,
                                { id: `exp-${Date.now()}`, ...newExp }
                              ]);
                              setShowAddExpModal(false);
                            } else {
                              alert("Please fill in both the Role Title and Company fields.");
                            }
                          }}
                          className="w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                        >
                          Save Experience
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Add Project Modal */}
                  {showAddProjModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-slate-700">
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-2xl max-w-md w-full text-left space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Add Featured Project</h4>
                          <button onClick={() => setShowAddProjModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-3.5 text-xs">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Project Title</label>
                            <input type="text" placeholder="e.g. Nearify" value={newProj.title} onChange={(e) => setNewProj({ ...newProj, title: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Project Description</label>
                            <textarea rows={2} placeholder="Explain what the project solves and what it features..." value={newProj.description} onChange={(e) => setNewProj({ ...newProj, description: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none resize-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Tech Stack (comma separated)</label>
                            <input type="text" placeholder="e.g. React, Node.js, MongoDB" value={newProj.techStack} onChange={(e) => setNewProj({ ...newProj, techStack: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">GitHub Repo Link</label>
                              <input type="url" placeholder="https://github.com/..." value={newProj.githubUrl} onChange={(e) => setNewProj({ ...newProj, githubUrl: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs focus:outline-none" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Live Demo Link</label>
                              <input type="url" placeholder="https://..." value={newProj.demoUrl} onChange={(e) => setNewProj({ ...newProj, demoUrl: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs focus:outline-none" />
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (newProj.title && newProj.description) {
                              setProjectsList(prev => [
                                ...prev,
                                { id: `proj-${Date.now()}`, ...newProj }
                              ]);
                              setShowAddProjModal(false);
                            } else {
                              alert("Please fill in both the Project Title and Description fields.");
                            }
                          }}
                          className="w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                        >
                          Save Project
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Add Certification Modal */}
                  {showAddCertModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-slate-700">
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-2xl max-w-md w-full text-left space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Add Certification Award</h4>
                          <button onClick={() => setShowAddCertModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-3.5 text-xs">
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Course / Certificate Name</label>
                            <input type="text" placeholder="e.g. MERN Stack Masterclass" value={newCert.name} onChange={(e) => setNewCert({ ...newCert, name: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Issuer / Organization</label>
                            <input type="text" placeholder="e.g. Udemy" value={newCert.issuer} onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Completion Date</label>
                            <input type="text" placeholder="e.g. Jan 2025" value={newCert.date} onChange={(e) => setNewCert({ ...newCert, date: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (newCert.name && newCert.issuer) {
                              setCertificationsList(prev => [
                                ...prev,
                                { id: `cert-${Date.now()}`, ...newCert }
                              ]);
                              setShowAddCertModal(false);
                            } else {
                              alert("Please fill in both the Certificate Name and Issuer fields.");
                            }
                          }}
                          className="w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                        >
                          Save Certificate
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Edit General Profile Modal */}
                  {showEditProfileModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 text-slate-700">
                      <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-2xl max-w-md w-full text-left space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                          <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Edit Profile Information</h4>
                          <button onClick={() => setShowEditProfileModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="space-y-3.5 text-xs">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Full Name</label>
                              <input type="text" value={tempProfile.name || ''} onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Location</label>
                              <input type="text" value={tempProfile.location || ''} onChange={(e) => setTempProfile({ ...tempProfile, location: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Headline Summary</label>
                            <input type="text" value={tempProfile.headline || ''} onChange={(e) => setTempProfile({ ...tempProfile, headline: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">College / Organization</label>
                              <input type="text" value={tempProfile.organization || ''} onChange={(e) => setTempProfile({ ...tempProfile, organization: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Role Type</label>
                              <select value={tempProfile.role || 'Student'} onChange={(e) => setTempProfile({ ...tempProfile, role: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none">
                                <option value="Student">Student</option>
                                <option value="Job Seeker">Job Seeker</option>
                                <option value="Professional">Professional</option>
                              </select>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">About Me / Bio</label>
                            <textarea rows={3} value={tempProfile.bio || ''} onChange={(e) => setTempProfile({ ...tempProfile, bio: e.target.value })} className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none resize-none" />
                          </div>
                        </div>
                        <button 
                          onClick={() => {
                            if (tempProfile.name) {
                              setProfile(prev => ({ ...prev, ...tempProfile }));
                              setShowEditProfileModal(false);
                            } else {
                              alert("Please fill in your name.");
                            }
                          }}
                          className="w-full py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-md"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Resume PDF Preview Modal */}
                  {showResumePreviewModal && (
                    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                      <div className="bg-white border border-[#E2E8F0] rounded-[24px] shadow-2xl max-w-2xl w-full text-left overflow-hidden max-h-[85vh] flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
                          <div>
                            <h4 className="text-xs font-bold text-slate-850 uppercase tracking-widest">Resume Preview Panel</h4>
                            <p className="text-[10px] text-slate-400 mt-0.5">{profile.resumeFile || 'Aishwarya_Resume.pdf'} connected successfully</p>
                          </div>
                          <button onClick={() => setShowResumePreviewModal(false)} className="p-1 hover:bg-slate-50 border border-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-all cursor-pointer"><X className="h-4 w-4" /></button>
                        </div>
                        <div className="p-8 bg-slate-100 overflow-y-auto flex-1 flex justify-center custom-scrollbar">
                          {/* Paper Sheet Document Preview */}
                          <div className="bg-white p-10 max-w-xl w-full shadow-lg border border-slate-200 text-left font-sans space-y-6 text-xs text-slate-600 relative rounded-sm">
                            <div className="text-center space-y-1.5 border-b border-slate-200 pb-4">
                              <h2 className="text-xl font-extrabold text-slate-850 leading-none">{profile.name}</h2>
                              <p className="text-[#2563EB] font-bold">{profile.headline}</p>
                              <p className="text-[10px] font-semibold text-slate-400">{profile.location} • {profile.email}</p>
                            </div>
                            
                            <div className="space-y-1.5">
                              <h3 className="font-extrabold text-slate-850 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px]">Summary</h3>
                              <p className="leading-relaxed font-semibold">{profile.bio}</p>
                            </div>

                            <div className="space-y-2">
                              <h3 className="font-extrabold text-slate-850 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px]">Education</h3>
                              {educationList.map(edu => (
                                <div key={edu.id} className="flex justify-between items-start text-[11px] leading-tight">
                                  <div>
                                    <p className="font-bold text-slate-800">{edu.school}</p>
                                    <p className="text-slate-500 font-semibold">{edu.degree}</p>
                                  </div>
                                  <div className="text-right shrink-0 font-bold">
                                    <p className="text-slate-500">{edu.year}</p>
                                    {edu.cgpa && <p className="text-emerald-600 mt-0.5">{edu.cgpa}</p>}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-3">
                              <h3 className="font-extrabold text-slate-855 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px]">Experience</h3>
                              {experienceList.map(exp => (
                                <div key={exp.id} className="space-y-1 text-[11px] leading-snug">
                                  <div className="flex justify-between items-start font-bold">
                                    <p className="text-slate-800">{exp.role} <span className="text-[8px] font-extrabold text-slate-400 capitalize">({exp.type})</span></p>
                                    <p className="text-slate-500 shrink-0">{exp.duration}</p>
                                  </div>
                                  <p className="text-slate-400 font-bold leading-none">{exp.company}</p>
                                  <p className="text-slate-500 font-medium leading-normal mt-1">{exp.desc}</p>
                                </div>
                              ))}
                            </div>

                            <div className="space-y-1.5">
                              <h3 className="font-extrabold text-slate-850 border-b border-slate-100 pb-1 uppercase tracking-wider text-[9px]">Skills</h3>
                              <div className="flex flex-wrap gap-1.5">
                                {profile.skills.map(s => (
                                  <span key={s} className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-[9px] font-bold text-slate-500">{s}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB: CREATE OPPORTUNITY SECTION */}
              {activeTab === 'create_opportunity' && (() => {
                const totalViews = publishedOpportunities.reduce((acc, curr) => acc + (curr.views || 0), 0);
                const totalSubmissions = publishedOpportunities.reduce((acc, curr) => acc + (curr.applications || 0) + (curr.registrations || 0), 0);
                const totalBookmarks = publishedOpportunities.reduce((acc, curr) => acc + (curr.bookmarks || 0), 0);

                return (
                  <div className="flex-grow overflow-y-auto p-4 sm:p-8 max-w-7xl mx-auto w-full custom-scrollbar space-y-6 sm:space-y-8 bg-[#F8FAFC] text-slate-700 text-left">
                    
                    {/* Header Summary */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#E2E8F0] pb-4">
                      <div>
                        <h3 className="text-base font-extrabold text-slate-800 tracking-tight">Publisher Dashboard</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">Publish and manage campus opportunities</p>
                      </div>
                      {editingOppId && (
                        <div className="mt-3 sm:mt-0 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black text-[#2563EB] uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                          <span>Currently Editing Mode</span>
                          <button onClick={handleCancelEdit} className="text-rose-500 hover:text-rose-700 cursor-pointer font-bold bg-transparent border-none">×</button>
                        </div>
                      )}
                    </div>

                    {/* Analytics Summary */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="p-6 bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-center space-x-4">
                        <div className="p-3 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-xl">
                          <Eye className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Total Views</span>
                          <h4 className="text-xl font-extrabold text-slate-800 mt-1 leading-tight">{totalViews}</h4>
                        </div>
                      </div>

                      <div className="p-6 bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-center space-x-4">
                        <div className="p-3 bg-indigo-50 text-[#4F46E5] border border-indigo-100 rounded-xl">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Submissions</span>
                          <h4 className="text-xl font-extrabold text-slate-800 mt-1 leading-tight">{totalSubmissions}</h4>
                        </div>
                      </div>

                      <div className="p-6 bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex items-center space-x-4">
                        <div className="p-3 bg-cyan-50 text-[#06B6D4] border border-cyan-100 rounded-xl">
                          <Bookmark className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Bookmarked</span>
                          <h4 className="text-xl font-extrabold text-slate-800 mt-1 leading-tight">{totalBookmarks}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Main Split Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      
                      {/* Left: Forms Pane */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left">
                          
                          {/* Tab selectors for forms */}
                          <div className="grid grid-cols-3 sm:flex sm:border-b sm:border-[#E2E8F0] sm:pb-3 mb-6 gap-1 sm:gap-2 p-1 sm:p-0 bg-slate-100/60 sm:bg-transparent rounded-2xl sm:rounded-none">
                            {[
                              { id: 'internship', label: 'Internship', icon: Briefcase },
                              { id: 'hackathon', label: 'Hackathon', icon: Trophy },
                              { id: 'event', label: 'Event', icon: Calendar }
                            ].map(tab => {
                              const IconComponent = tab.icon;
                              const isActive = createOpportunityTab === tab.id;
                              return (
                                <button
                                  key={tab.id}
                                  type="button"
                                  disabled={editingOppId !== null}
                                  onClick={() => setCreateOpportunityTab(tab.id)}
                                  className={`flex items-center justify-center sm:justify-start gap-1.5 px-2 py-2.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold transition-all w-full sm:w-auto ${
                                    isActive
                                      ? 'bg-white sm:bg-blue-50 text-[#2563EB] shadow-sm sm:shadow-none'
                                      : 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
                                  } ${editingOppId !== null ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                  <IconComponent className="h-4 w-4 shrink-0" />
                                  <span className="truncate">{tab.label}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Internship Form */}
                          {createOpportunityTab === 'internship' && (
                            <div className="space-y-4 text-xs">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="companyName-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Company Name *</label>
                                  <input 
                                    type="text" 
                                    id="companyName-input" value={internshipForm.companyName}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, companyName: e.target.value }))}
                                    placeholder="e.g. Stripe"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="role-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Internship Role *</label>
                                  <input 
                                    type="text" 
                                    id="role-input" value={internshipForm.role}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, role: e.target.value }))}
                                    placeholder="e.g. Frontend Engineer Intern"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="location-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Location *</label>
                                  <input 
                                    type="text" 
                                    id="location-input" value={internshipForm.location}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, location: e.target.value }))}
                                    placeholder="e.g. Remote / Bangalore"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="skills-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Skills Required (Comma separated)</label>
                                  <input 
                                    type="text" 
                                    id="skills-input" value={internshipForm.skills}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, skills: e.target.value }))}
                                    placeholder="e.g. React, Node.js, TypeScript"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="stipend-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Stipend</label>
                                  <input 
                                    type="text" 
                                    id="stipend-input" value={internshipForm.stipend}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, stipend: e.target.value }))}
                                    placeholder="e.g. $1500 / month"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="duration-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Duration</label>
                                  <input 
                                    type="text" 
                                    id="duration-input" value={internshipForm.duration}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, duration: e.target.value }))}
                                    placeholder="e.g. 6 Months"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="deadline-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Deadline *</label>
                                  <input 
                                    type="date" 
                                    id="deadline-input" value={internshipForm.deadline}
                                    onChange={(e) => setInternshipForm(prev => ({ ...prev, deadline: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label htmlFor="description-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Description *</label>
                                <textarea 
                                  rows={4} 
                                  id="description-input" value={internshipForm.description}
                                  onChange={(e) => setInternshipForm(prev => ({ ...prev, description: e.target.value }))}
                                  placeholder="Provide detailed description of the role, requirements, and responsibilities."
                                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                                />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Company Logo Image</label>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <input 
                                      type="file" 
                                      id="logo-upload-internship" 
                                      accept="image/*"
                                      className="hidden" 
                                      onChange={(e) => handleFormFileUpload(e, 'logo', 'internship')}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => document.getElementById('logo-upload-internship').click()}
                                      className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-[10px] font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
                                    >
                                      Upload Logo
                                    </button>
                                    {internshipForm.logo && (
                                      <img decoding="async" loading="lazy" src={internshipForm.logo} alt="Logo preview" className="w-10 h-10 object-contain rounded-lg border border-slate-200" />
                                    )}
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Banner Cover Image</label>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <input 
                                      type="file" 
                                      id="banner-upload-internship" 
                                      accept="image/*"
                                      className="hidden" 
                                      onChange={(e) => handleFormFileUpload(e, 'banner', 'internship')}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => document.getElementById('banner-upload-internship').click()}
                                      className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-[10px] font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
                                    >
                                      Upload Banner
                                    </button>
                                    {internshipForm.banner && (
                                      <img decoding="async" loading="lazy" src={internshipForm.banner} alt="Banner preview" className="w-16 h-10 object-cover rounded-lg border border-slate-200" />
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Hackathon Form */}
                          {createOpportunityTab === 'hackathon' && (
                            <div className="space-y-4 text-xs">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-name-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Hackathon Name *</label>
                                  <input 
                                    type="text" 
                                    id="hackathon-name-input" value={hackathonForm.name}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="e.g. Smart India Hackathon"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-organizer-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Organizer Name *</label>
                                  <input 
                                    type="text" 
                                    id="hackathon-organizer-input" value={hackathonForm.organizer}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, organizer: e.target.value }))}
                                    placeholder="e.g. Google Developer Group"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-theme-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Theme / Domain *</label>
                                  <input 
                                    type="text" 
                                    id="hackathon-theme-input" value={hackathonForm.theme}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, theme: e.target.value }))}
                                    placeholder="e.g. Generative AI"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-prize-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Prize Pool *</label>
                                  <input 
                                    type="text" 
                                    id="hackathon-prize-input" value={hackathonForm.prizePool}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, prizePool: e.target.value }))}
                                    placeholder="e.g. $10,000"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-teamsize-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Team Size Limit</label>
                                  <input 
                                    type="text" 
                                    id="hackathon-teamsize-input" value={hackathonForm.teamSize}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, teamSize: e.target.value }))}
                                    placeholder="e.g. 1 - 4 members"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-deadline-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Registration Deadline *</label>
                                  <input 
                                    type="date" 
                                    id="hackathon-deadline-input" value={hackathonForm.deadline}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, deadline: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="hackathon-date-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Event Date *</label>
                                  <input 
                                    type="date" 
                                    id="hackathon-date-input" value={hackathonForm.date}
                                    onChange={(e) => setHackathonForm(prev => ({ ...prev, date: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label htmlFor="hackathon-rules-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Rules & Eligibility</label>
                                <textarea 
                                  rows={3} 
                                  id="hackathon-rules-input" value={hackathonForm.rules}
                                  onChange={(e) => setHackathonForm(prev => ({ ...prev, rules: e.target.value }))}
                                  placeholder="Specify hackathon guidelines, code submission rules, and eligibility criteria."
                                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                                />
                              </div>

                              <div className="space-y-1.5">
                                <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Description *</label>
                                <textarea 
                                  rows={4} 
                                  id="hackathon-desc-input" value={hackathonForm.description}
                                  onChange={(e) => setHackathonForm(prev => ({ ...prev, description: e.target.value }))}
                                  placeholder="Describe the hackathon challenges, tracks, and judging criteria."
                                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                                />
                              </div>

                              <div className="space-y-2">
                                <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Banner Image</label>
                                <div className="flex flex-wrap items-center gap-3">
                                  <input 
                                    type="file" 
                                    id="banner-upload-hackathon" 
                                    accept="image/*"
                                    className="hidden" 
                                    onChange={(e) => handleFormFileUpload(e, 'banner', 'hackathon')}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => document.getElementById('banner-upload-hackathon').click()}
                                    className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-[10px] font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
                                  >
                                    Upload Banner
                                  </button>
                                  {hackathonForm.banner && (
                                    <img decoding="async" loading="lazy" src={hackathonForm.banner} alt="Banner preview" className="w-16 h-10 object-cover rounded-lg border border-slate-200" />
                                  )}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Event Form */}
                          {createOpportunityTab === 'event' && (
                            <div className="space-y-4 text-xs">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="event-name-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Event Name *</label>
                                  <input 
                                    type="text" 
                                    id="event-name-input" value={eventForm.name}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="e.g. AI In Industry Seminar"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="event-organizer-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Organizer Name *</label>
                                  <input 
                                    type="text" 
                                    id="event-organizer-input" value={eventForm.organizer}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, organizer: e.target.value }))}
                                    placeholder="e.g. Nearify Campus Club"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="event-venue-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Venue *</label>
                                  <input 
                                    type="text" 
                                    id="event-venue-input" value={eventForm.venue}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, venue: e.target.value }))}
                                    placeholder="e.g. Seminar Hall 2"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="event-date-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Date *</label>
                                  <input 
                                    type="date" 
                                    id="event-date-input" value={eventForm.date}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label htmlFor="event-time-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Time *</label>
                                  <input 
                                    type="time" 
                                    id="event-time-input" value={eventForm.time}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, time: e.target.value }))}
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label htmlFor="event-seats-input" className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Available Seats</label>
                                  <input 
                                    type="number" 
                                    id="event-seats-input" value={eventForm.seats}
                                    onChange={(e) => setEventForm(prev => ({ ...prev, seats: e.target.value }))}
                                    placeholder="e.g. 100"
                                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Banner Cover Image</label>
                                  <div className="flex flex-wrap items-center gap-3">
                                    <input 
                                      type="file" 
                                      id="banner-upload-event" 
                                      accept="image/*"
                                      className="hidden" 
                                      onChange={(e) => handleFormFileUpload(e, 'banner', 'event')}
                                    />
                                    <button
                                      type="button"
                                      onClick={() => document.getElementById('banner-upload-event').click()}
                                      className="px-4 py-2 border border-[#E2E8F0] rounded-xl text-[10px] font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer"
                                    >
                                      Upload Banner
                                    </button>
                                    {eventForm.banner && (
                                      <img decoding="async" loading="lazy" src={eventForm.banner} alt="Banner preview" className="w-16 h-10 object-cover rounded-lg border border-slate-200" />
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Description *</label>
                                <textarea 
                                  rows={4} 
                                  id="event-desc-input" value={eventForm.description}
                                  onChange={(e) => setEventForm(prev => ({ ...prev, description: e.target.value }))}
                                  placeholder="Provide detailed description of the event, speakers, key takeaways, and venue directions."
                                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                                />
                              </div>
                            </div>
                          )}

                          {/* Submit Actions */}
                          <div className="flex gap-3 mt-6 pt-5 border-t border-slate-100">
                            {editingOppId ? (
                              <>
                                <button
                                  type="button"
                                  onClick={() => handlePublishOpportunity('active')}
                                  className="px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 border-none"
                                >
                                  Update Opportunity
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePublishOpportunity('draft')}
                                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 border-none"
                                >
                                  Update as Draft
                                </button>
                                <button
                                  type="button"
                                  onClick={handleCancelEdit}
                                  className="px-5 py-2.5 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 bg-white shadow-sm"
                                >
                                  Cancel Edit
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  onClick={() => handlePublishOpportunity('active')}
                                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 border-none"
                                >
                                  Publish Opportunity
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handlePublishOpportunity('draft')}
                                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95 border-none"
                                >
                                  Save as Draft
                                </button>
                              </>
                            )}
                          </div>

                        </div>
                      </div>

                      {/* Right: Published List Pane */}
                      <div className="lg:col-span-5 space-y-6">
                        
                        {/* List Container */}
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] text-left flex flex-col h-full">
                          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3.5 mb-4">
                            My Published Opportunities
                          </h4>

                          {/* Items Grid */}
                          <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-1">
                            {publishedOpportunities.length === 0 ? (
                              <div className="text-center py-16 px-6 bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl text-slate-400 space-y-4 flex flex-col items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-slate-100/80 flex items-center justify-center text-xl shadow-inner select-none">
                                  📋
                                </div>
                                <div className="space-y-1">
                                  <p className="text-xs font-bold text-slate-800">No opportunities published yet</p>
                                  <p className="text-[10px] text-slate-500 leading-normal max-w-[240px] mx-auto">Use the creator forms on the left to publish internships, hackathons, or workshops.</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const firstInput = document.getElementById('companyName-input') || document.getElementById('hackathon-title-input') || document.getElementById('event-title-input');
                                    if (firstInput) {
                                      firstInput.focus();
                                      firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                  }}
                                  className="px-4 py-2 rounded-xl text-[10px] font-black text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer inline-flex items-center gap-1 shadow-sm active:scale-95"
                                >
                                  <span>Start Creating</span>
                                  <span>&rarr;</span>
                                </button>
                              </div>
                            ) : (
                              publishedOpportunities.map((opp) => {
                                const isDraft = opp.status === 'draft';
                                const isExpired = opp.status === 'expired';
                                return (
                                  <div 
                                    key={opp.id} 
                                    className="p-4 rounded-2xl border border-slate-100 bg-slate-50/30 hover:border-slate-200 transition-all flex flex-col justify-between"
                                  >
                                    <div className="space-y-2.5">
                                      <div className="flex justify-between items-start">
                                        <div className="min-w-0">
                                          <h5 className="text-xs font-bold text-slate-850 truncate leading-snug">
                                            {opp.role || opp.name}
                                          </h5>
                                          <p className="text-[10px] text-slate-400 font-semibold truncate leading-none mt-1">
                                            {opp.companyName || opp.organizer}
                                          </p>
                                        </div>
                                        <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border shrink-0 ${
                                          opp.type === 'internship' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                          opp.type === 'hackathon' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                          'bg-cyan-50 text-cyan-600 border-cyan-100'
                                        }`}>
                                          {opp.type}
                                        </span>
                                      </div>

                                      <div className="flex gap-2 items-center text-[9px] font-bold text-slate-400">
                                        <span>Status:</span>
                                        <span className={`uppercase text-[8px] font-black px-1.5 py-0.5 rounded ${
                                          isDraft ? 'bg-slate-100 text-slate-500 border border-slate-200' :
                                          isExpired ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                          'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                        }`}>
                                          {opp.status}
                                        </span>
                                      </div>

                                      {/* Analytics mini summary */}
                                      <div className="grid grid-cols-3 gap-2 bg-white/70 border border-slate-100 p-2 rounded-xl text-center text-[9px] font-bold text-slate-500">
                                        <div>
                                          <span className="text-slate-400 block text-[7px] uppercase tracking-wider">Views</span>
                                          <span className="text-slate-800 font-extrabold mt-0.5 block">{opp.views || 0}</span>
                                        </div>
                                        <div>
                                          <span className="text-slate-400 block text-[7px] uppercase tracking-wider">Submissions</span>
                                          <span className="text-slate-800 font-extrabold mt-0.5 block">
                                            {opp.type === 'internship' ? (opp.applications || 0) : (opp.registrations || 0)}
                                          </span>
                                        </div>
                                        <div>
                                          <span className="text-slate-400 block text-[7px] uppercase tracking-wider">Saves</span>
                                          <span className="text-slate-800 font-extrabold mt-0.5 block">{opp.bookmarks || 0}</span>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Action Row */}
                                    <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100/60 justify-end">
                                      <button 
                                        onClick={() => handleViewPublishedOppDetails(opp)}
                                        className="p-1.5 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-500 hover:text-[#2563EB] cursor-pointer bg-white"
                                        title="View Details"
                                      >
                                        <Eye className="h-3.5 w-3.5" />
                                      </button>
                                      <button 
                                        onClick={() => handleEditOpportunity(opp)}
                                        className="p-1.5 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-500 hover:text-[#2563EB] cursor-pointer bg-white"
                                        title="Edit"
                                      >
                                        <Edit className="h-3.5 w-3.5" />
                                      </button>
                                      <button 
                                        onClick={() => handleDeleteOpportunity(opp.id)}
                                        className="p-1.5 hover:bg-rose-50 border border-rose-100 rounded-lg text-rose-500 hover:text-rose-600 cursor-pointer bg-white shadow-sm"
                                        title="Delete"
                                      >
                                        <Trash2 className="h-3.5 w-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })()}

              {/* TAB: SETTINGS SECTION (Startup-grade clean SaaS interface) */}
              {activeTab === 'settings' && (
                <div className="flex-grow overflow-hidden flex flex-col md:flex-row w-full h-full text-left bg-[#F8FAFC]">
                  
                  {/* Left Sidebar Tabs Selector */}
                  <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#E2E8F0] bg-white shrink-0 p-6 flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible md:overflow-y-auto custom-scrollbar whitespace-nowrap md:whitespace-normal">
                    {[
                      { id: 'profile', label: 'Edit Profile', icon: User },
                      { id: 'password', label: 'Change Password', icon: Lock },
                      { id: 'notifications', label: 'Notification Settings', icon: Bell },
                      { id: 'account', label: 'Account Actions', icon: Settings }
                    ].map(tab => {
                      const IconComponent = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setSettingsTab(tab.id)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer border-none text-left shrink-0 md:shrink ${
                            settingsTab === tab.id
                              ? 'bg-blue-50 text-[#2563EB] font-bold shadow-sm'
                              : 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-slate-50'
                          }`}
                        >
                          <IconComponent className={`h-4 w-4 ${settingsTab === tab.id ? 'text-[#2563EB]' : 'text-[#64748B]'}`} />
                          <span>{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Main Settings Content Area */}
                  <div className="flex-grow overflow-y-auto p-8 custom-scrollbar bg-[#F8FAFC]">
                    <div className="max-w-2xl mx-auto space-y-6">
                      
                      {/* Sub-tab: Profile Info */}
                      {settingsTab === 'profile' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(15,23,42,0.05)] space-y-5">
                          <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest border-b border-[#E2E8F0] pb-3">Edit Profile Info</h3>
                          
                          {/* Profile Avatar Picker */}
                          <input 
                            type="file"
                            id="profile-photo-input"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoChange}
                          />
                          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-slate-50 rounded-xl border border-[#E2E8F0] w-full">
                            <div className="relative w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl uppercase border-4 border-white shadow-sm overflow-hidden shrink-0">
                              {isPhotoLoading ? (
                                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                </div>
                              ) : null}
                              {photoPreview ? (
                                <img decoding="async" loading="lazy" src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                              ) : profilePhoto ? (
                                <img decoding="async" loading="lazy" src={profilePhoto} alt="Avatar" className="w-full h-full object-cover" />
                              ) : (
                                <span>{profile.name.charAt(0)}</span>
                              )}
                            </div>
                            <div className="space-y-2 text-center sm:text-left">
                              <h4 className="text-xs font-bold uppercase text-[#64748B]">Profile Picture</h4>
                              <div className="flex gap-2">
                                <button 
                                  type="button"
                                  onClick={() => document.getElementById('profile-photo-input').click()}
                                  className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border-none shadow-sm active:scale-95"
                                >
                                  {profilePhoto || photoPreview ? "Replace Photo" : "Upload Photo"}
                                </button>
                                {(profilePhoto || photoPreview) && (
                                  <button 
                                    type="button"
                                    onClick={() => {
                                      setPhotoPreview(null);
                                      setProfilePhoto('');
                                      localStorage.removeItem('nearify_profile_photo');
                                      triggerToast("Profile photo removed successfully!");
                                    }}
                                    className="px-4 py-2 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 bg-white"
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Full Name</label>
                              <input 
                                type="text"
                                value={profile.name}
                                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Email Address</label>
                              <input 
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5 text-left">
                            <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Biography</label>
                            <textarea 
                              rows={3}
                              value={profile.bio || ''}
                              onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                              className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-none"
                            />
                          </div>

                          {/* Interactive Skills Update Section */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Skills</label>
                            <div className="flex flex-wrap gap-1.5 p-3.5 bg-slate-50 border border-[#E2E8F0] rounded-xl min-h-12">
                              {profile.skills.map(skill => (
                                <span key={skill} className="px-2.5 py-1 bg-white border border-[#E2E8F0] rounded-lg text-[10px] font-bold text-[#64748B] flex items-center space-x-1.5 shadow-sm">
                                  <span>{skill}</span>
                                  <button 
                                    type="button"
                                    onClick={() => {
                                      const updatedSkills = profile.skills.filter(s => s !== skill);
                                      setProfile(prev => ({
                                        ...prev,
                                        skills: updatedSkills
                                      }));
                                      triggerToast(`Removed skill: ${skill}`);
                                    }}
                                    className="hover:text-rose-500 cursor-pointer font-bold border-none bg-transparent"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-1.5">
                              <input 
                                id="settings-skill-input"
                                type="text" 
                                placeholder="e.g. Kotlin, Docker, AWS" 
                                className="flex-grow px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter') {
                                    e.preventDefault();
                                    const val = e.target.value.trim();
                                    if (val && !profile.skills.includes(val)) {
                                      setProfile(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                      e.target.value = '';
                                      triggerToast(`Added skill: ${val}`);
                                    }
                                  }
                                }}
                              />
                              <button 
                                type="button"
                                onClick={() => {
                                  const el = document.getElementById('settings-skill-input');
                                  const val = el ? el.value.trim() : '';
                                  if (val && !profile.skills.includes(val)) {
                                    setProfile(prev => ({ ...prev, skills: [...prev.skills, val] }));
                                    el.value = '';
                                    triggerToast(`Added skill: ${val}`);
                                  }
                                }}
                                className="px-4 py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all border-none shrink-0 shadow-sm active:scale-95 cursor-pointer"
                              >
                                Add Skill
                              </button>
                            </div>
                          </div>

                          {/* Dynamic Resume Upload Module */}
                          <input 
                            type="file"
                            id="resume-file-input"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleResumeChange}
                          />
                          <div className="space-y-1.5 text-left">
                            <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Resume File (PDF/DOC/DOCX)</label>
                            {isUploadingResume ? (
                              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-bold text-[#2563EB] animate-pulse">Uploading resume...</span>
                                  <span className="text-[10px] font-bold text-[#2563EB]">{resumeProgress}%</span>
                                </div>
                                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                  <div className="bg-[#2563EB] h-full transition-all duration-105" style={{ width: `${resumeProgress}%` }} />
                                </div>
                              </div>
                            ) : uploadedResume ? (
                              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-between gap-3 text-left">
                                <div className="flex items-center space-x-3 min-w-0">
                                  <span className="text-2xl">📄</span>
                                  <div className="min-w-0">
                                    <h5 className="text-xs font-bold text-[#0F172A] truncate">{uploadedResume.name}</h5>
                                    <p className="text-[9px] text-[#64748B] mt-0.5">{uploadedResume.size} • Persisted</p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <button 
                                    type="button"
                                    onClick={() => document.getElementById('resume-file-input').click()}
                                    className="px-3.5 py-2 border border-[#E2E8F0] hover:bg-slate-50 text-[#64748B] rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer bg-white"
                                  >
                                    Replace
                                  </button>
                                  <button 
                                    type="button"
                                    onClick={() => {
                                      setUploadedResume(null);
                                      localStorage.removeItem('nearify_uploaded_resume');
                                      triggerToast("Resume removed successfully!");
                                    }}
                                    className="px-3.5 py-2 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer bg-white shadow-sm"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div 
                                onClick={() => document.getElementById('resume-file-input').click()}
                                className="p-8 border-2 border-dashed border-[#E2E8F0] hover:border-[#2563EB] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer bg-slate-50 hover:bg-slate-100/50 transition-all text-center"
                              >
                                <Upload className="h-5 w-5 text-slate-400" />
                                <div>
                                  <h5 className="text-xs font-bold text-[#0F172A]">Upload Your Resume</h5>
                                  <p className="text-[9px] text-[#64748B] mt-1 leading-normal">Drag and drop or click to upload PDF/DOCX (Max: 5MB)</p>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">LinkedIn Profile</label>
                              <input 
                                type="text"
                                placeholder="https://linkedin.com/in/username"
                                value={profile.linkedinUrl || ''}
                                onChange={(e) => setProfile(prev => ({ ...prev, linkedinUrl: e.target.value }))}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">GitHub Profile</label>
                              <input 
                                type="text"
                                placeholder="https://github.com/username"
                                value={profile.githubUrl || ''}
                                onChange={(e) => setProfile(prev => ({ ...prev, githubUrl: e.target.value }))}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Portfolio Website</label>
                              <input 
                                type="text"
                                placeholder="https://myportfolio.com"
                                value={profile.portfolioUrl || ''}
                                onChange={(e) => setProfile(prev => ({ ...prev, portfolioUrl: e.target.value }))}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                          </div>

                          <button 
                            type="button"
                            onClick={() => {
                              localStorage.setItem('nearify_user_profile', JSON.stringify(profile));
                              if (photoPreview !== null) {
                                setProfilePhoto(photoPreview);
                                localStorage.setItem('nearify_profile_photo', photoPreview);
                                setPhotoPreview(null);
                              }
                              triggerToast("Profile updated successfully!");
                            }}
                            className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 border-none"
                          >
                            Save Profile Settings
                          </button>
                        </div>
                      )}

                      {/* Sub-tab: Change Password */}
                      {settingsTab === 'password' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(15,23,42,0.05)] space-y-5">
                          <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest border-b border-[#E2E8F0] pb-3">Change Password</h3>
                          
                          <div className="space-y-4">
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Current Password</label>
                              <input 
                                type="password"
                                placeholder="••••••••"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">New Password</label>
                              <input 
                                type="password"
                                placeholder="••••••••"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[9px] font-bold text-[#64748B] uppercase tracking-wider block">Confirm New Password</label>
                              <input 
                                type="password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                              />
                            </div>
                            <button 
                              type="button"
                              onClick={() => {
                                if (!currentPassword || !newPassword || !confirmPassword) {
                                  triggerToast("Please fill in all password fields", "error");
                                  return;
                                }
                                if (newPassword !== confirmPassword) {
                                  triggerToast("Passwords do not match", "error");
                                  return;
                                }
                                triggerToast("Password updated successfully!");
                                setCurrentPassword('');
                                setNewPassword('');
                                setConfirmPassword('');
                              }}
                              className="px-5 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all border-none shadow-sm active:scale-95 cursor-pointer"
                            >
                              Update Password
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Sub-tab: Notifications */}
                      {settingsTab === 'notifications' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-2xl shadow-[0_1px_3px_0_rgba(15,23,42,0.05)] space-y-5">
                          <h3 className="text-xs font-bold text-[#0F172A] uppercase tracking-widest border-b border-[#E2E8F0] pb-3">Notification Preferences</h3>
                          
                          <div className="space-y-3">
                            {[
                              { id: 'internship', title: 'Internship Notifications', desc: 'Realtime updates when matching internship nodes are found.', value: internshipAlerts, setter: setInternshipAlerts },
                              { id: 'hackathon', title: 'Hackathon Notifications', desc: 'Deadline reminders and team request notifications for campus hackathons.', value: hackathonAlerts, setter: setHackathonAlerts },
                              { id: 'event', title: 'Event Notifications', desc: 'RSVP confirmations and reminders for speaker series & company visits.', value: eventAlerts, setter: setEventAlerts },
                              { id: 'food', title: 'Food Offer Notifications', desc: 'Discounts and discount codes unlockable at local partner restaurants.', value: foodAlerts, setter: setFoodAlerts }
                            ].map((item) => (
                              <div key={item.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-none">
                                <div className="pr-4 text-left">
                                  <h5 className="text-xs font-bold text-[#0F172A] leading-tight">{item.title}</h5>
                                  <p className="text-[10px] text-[#64748B] mt-0.5 leading-tight">{item.desc}</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleToggleNotif(item.id, !item.value, item.setter)}
                                  className={`w-9 h-5 rounded-full p-0.5 transition-colors cursor-pointer border-none flex items-center ${
                                    item.value ? 'bg-[#2563EB] justify-end' : 'bg-slate-200 justify-start'
                                  }`}
                                >
                                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}


                    </div>
                  </div>
                </div>
              )}
                  </>
                )}
            </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MOBILE BOTTOM NAVIGATION BAR */}
        <div className="md:hidden h-16 bg-white border-t border-[#E2E8F0] flex items-center justify-around px-2 shrink-0 z-20 shadow-[0_-4px_24px_rgba(0,0,0,0.015)]">
          {[
            { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
            { id: 'opportunities', label: 'Explore', icon: Compass },
            { id: 'tracker', label: 'Tracker', icon: SlidersHorizontal },
            { id: 'saved', label: 'Saved', icon: Star },
            { id: 'more', label: 'More', icon: Menu }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || (item.id === 'more' && isMobileSidebarOpen);
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'more') {
                    setIsMobileSidebarOpen(!isMobileSidebarOpen);
                  } else {
                    setActiveTab(item.id);
                    setViewingInternship(null);
                    setIsMobileSidebarOpen(false);
                  }
                }}
                className={`flex flex-col items-center justify-center flex-1 py-1 text-[10px] font-bold transition-all cursor-pointer ${
                  isActive ? 'text-[#2563EB]' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <Icon className={`h-[18px] w-[18px] ${isActive ? 'text-[#2563EB]' : 'text-slate-400'}`} />
                <span className="mt-1 leading-none">{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* DETAILED MODAL OVERLAYS */}
      <AnimatePresence>
        {selectedOpp && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalOverlayVariants}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedOpp(null)}
          >
            <motion.div
              variants={modalContentVariants}
              className={`bg-white rounded-[24px] border border-[#E2E8F0] w-full overflow-hidden shadow-2xl relative flex flex-col text-left transition-all duration-350 ${
                selectedOpp.type === 'hackathon' || selectedOpp.type === 'food' ? 'max-w-5xl h-[90vh]' : 'max-w-2xl max-h-[85vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with close button */}
              {selectedOpp.type !== 'hackathon' && selectedOpp.type !== 'food' && (
                <div className="p-6 border-b border-slate-100 flex justify-between items-start shrink-0 relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-2">
                      {renderOpportunityLogo(selectedOpp, "h-8 w-8")}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] font-extrabold uppercase tracking-widest" style={{ color: selectedOpp.hex }}>{selectedOpp.type} Detail</span>
                        {selectedOpp.type !== 'event' && selectedOpp.type !== 'food' && (
                          <span className="text-[9px] px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full font-bold">
                            {getMatchPercentage(selectedOpp)}% Fit Match
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-extrabold text-slate-800 mt-1 tracking-tight">{selectedOpp.title}</h3>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">{selectedOpp.organizer} • {selectedOpp.distance}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedOpp(null)}
                    className="p-1.5 hover:bg-slate-50 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-700 transition-all cursor-pointer absolute top-6 right-6 z-25"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Modal scrollable content body */}
              <div className="p-6 overflow-y-auto flex-1 space-y-6 custom-scrollbar text-slate-600 text-xs">
                
                {/* INTERNSHIP DETAILS MODEL */}
                {selectedOpp.type === 'internship' && (
                  <>
                    <div className="grid grid-cols-3 gap-4 border border-slate-100 p-4 rounded-2xl bg-slate-50/30">
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">STIPEND</span>
                        <span className="text-slate-800 font-extrabold mt-1 block">{selectedOpp.stipend}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DURATION</span>
                        <span className="text-slate-800 font-extrabold mt-1 block">{selectedOpp.duration}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DEADLINE</span>
                        <span className="text-rose-600 font-extrabold mt-1 block text-slate-800 truncate">{selectedOpp.deadline}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Job Description</h4>
                      <p className="leading-relaxed font-semibold">{selectedOpp.detail} {selectedOpp.companyDetails || ''}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Key Requirements</h4>
                      <p className="leading-relaxed font-semibold">{selectedOpp.requirements}</p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Expected Skill Assets</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedOpp.skills.map(s => {
                          const userHasIt = profile.skills.includes(s);
                          return (
                            <span 
                              key={s} 
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold border ${
                                userHasIt ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-slate-50 text-slate-500 border-slate-100'
                              }`}
                            >
                              {s} {userHasIt ? '✓' : ''}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Resume Attachment slot */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans">Attach Portfolio Resume</h4>
                      {profile.hasResume ? (
                        <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                          <span className="text-emerald-700 font-bold truncate">📄 {profile.resumeFile || 'Uploaded Resume.pdf'}</span>
                          <span className="text-[9px] font-extrabold text-emerald-600">Attached</span>
                        </div>
                      ) : (
                        <label className="border-2 border-dashed border-[#E2E8F0] rounded-2xl p-4 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-blue-50/10 cursor-pointer transition-all">
                          <Upload className="h-5 w-5 text-slate-400 mb-1" />
                          <span className="font-bold text-slate-600">Click to connect PDF resume</span>
                          <input type="file" accept=".pdf" onChange={handleResumeChange} className="hidden" />
                        </label>
                      )}
                    </div>

                    {/* Action Block */}
                    <div className="pt-4 shrink-0">
                      <button
                        disabled={appliedIds.has(selectedOpp.id)}
                        onClick={() => executeApplyInternship(selectedOpp.id)}
                        className={`w-full py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          appliedIds.has(selectedOpp.id)
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {appliedIds.has(selectedOpp.id) ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            <span>Applied Successfully</span>
                          </>
                        ) : (
                          <span>Submit Application</span>
                        )}
                      </button>
                    </div>
                  </>
                )}

                {/* HACKATHON DETAILS MODEL */}
                {selectedOpp.type === 'hackathon' && (
                  <div className="flex flex-col h-full overflow-hidden text-slate-700 bg-[#F8FAFC]">
                    
                    {/* 1. HERO BANNER BLOCK */}
                    <div className="h-56 w-full relative overflow-hidden shrink-0">
                      {/* Banner Image */}
                      <img decoding="async" loading="lazy" 
                        src={selectedOpp.banner || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60"} 
                        alt="Hackathon Banner" 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
                      
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setSelectedOpp(null)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/15 transition-all cursor-pointer z-30 shadow-md active:scale-95"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      {/* Header overlay text details */}
                      <div className="absolute left-8 bottom-6 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/60 p-2.5 flex items-center justify-center shrink-0 shadow-lg">
                            {renderOpportunityLogo(selectedOpp, "h-11 w-11")}
                          </div>
                          <div className="space-y-1 text-white">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-[#06B6D4] text-white rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                                {selectedOpp.mode}
                              </span>
                              <span className="px-2.5 py-0.5 bg-white/15 backdrop-blur-sm text-white border border-white/10 rounded-full text-[9px] font-extrabold uppercase tracking-wider">
                                {getMatchPercentage(selectedOpp)}% Match Fit
                              </span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-black tracking-tight drop-shadow-sm leading-tight">{selectedOpp.title}</h2>
                            <p className="text-xs text-slate-300 font-semibold leading-none flex items-center gap-1.5">
                              <span>Organized by {selectedOpp.organizer}</span>
                            </p>
                          </div>
                        </div>

                        {/* Top right quick data badges */}
                        <div className="flex flex-wrap gap-2 text-white text-[10px] font-black uppercase tracking-wider">
                          <div className="px-3.5 py-2 bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-1.5">
                            <span className="text-[#06B6D4] text-xs">🏆</span>
                            <span>Prize Pool: {selectedOpp.prizePool}</span>
                          </div>
                          <div className="px-3.5 py-2 bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-1.5">
                            <span className="text-[#2563EB] text-xs">⏰</span>
                            <span className="text-rose-400 font-black">{selectedOpp.deadlineHours || '15 Days Left'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HACKATHON MODAL TAB BAR */}
                    <div className="flex border-b border-slate-200 bg-white px-8 shrink-0 relative z-10 overflow-x-auto py-1 scrollbar-none gap-2">
                      {[
                        { id: 'details', label: 'Details', icon: Info },
                        { id: 'chat', label: 'Team Chat', icon: MessageSquare },
                        { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
                        { id: 'forum', label: 'Discussion Forum', icon: Users },
                        { id: 'mentors', label: 'Mentors & Sponsors', icon: Sparkles }
                      ].map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeHackathonTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            onClick={() => setActiveHackathonTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-4.5 text-xs font-bold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                              isActive ? 'border-[#2563EB] text-[#2563EB]' : 'border-transparent text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* 2. RESPONSIVE TWO COLUMN BODY CONTAINER */}
                    <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                      
                      {activeHackathonTab === 'details' && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                          {/* LEFT COLUMN (2/3 width) - About, Timeline, Tracks, Sponsors, FAQ, Related */}
                          <div className="lg:col-span-2 space-y-8 text-left">
                            {/* Quick Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {[
                                { label: 'REGISTRATIONS', val: '2,500+ Devs', color: 'text-blue-600', bg: 'bg-blue-50/50 border-blue-100' },
                                { label: 'TEAMS CREATED', val: '640 Formed', color: 'text-indigo-600', bg: 'bg-indigo-50/50 border-indigo-100' },
                                { label: 'PRIZE VALUE', val: selectedOpp.prizePool || '₹1,00,000', color: 'text-cyan-600', bg: 'bg-cyan-50/50 border-cyan-100' },
                                { label: 'DURATION', val: selectedOpp.id === 'hack-1' ? '36 Hours' : '48 Hours', color: 'text-emerald-600', bg: 'bg-emerald-50/50 border-emerald-100' }
                              ].map((stat, i) => (
                                <div key={i} className={`p-4 border rounded-[20px] shadow-sm flex flex-col justify-between ${stat.bg}`}>
                                  <span className="text-[9px] font-black tracking-widest text-slate-400 block uppercase leading-none">{stat.label}</span>
                                  <span className={`text-sm font-black mt-2 block ${stat.color}`}>{stat.val}</span>
                                </div>
                              ))}
                            </div>

                            {/* About Section */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <Info className="h-4 w-4 text-[#2563EB]" />
                                <span>About Hackathon</span>
                              </h3>
                              <div className="space-y-3.5 text-xs text-slate-500 font-semibold leading-relaxed">
                                <p>{selectedOpp.detail}</p>
                                <p>{selectedOpp.companyDetails || 'This hackathon brings together students, professionals, and developers to push boundaries and solve core technical problems. Gain mentoring, compete for substantial prizes, and connect with recruiting partners.'}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <h5 className="font-extrabold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Core Goals</h5>
                                    <p className="text-[11px] leading-relaxed">Foster rapid prototyping, identify emerging developer talents, and support product concepts with real venture resources.</p>
                                  </div>
                                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                                    <h5 className="font-extrabold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Theme</h5>
                                    <p className="text-[11px] leading-relaxed">Technology-driven solutions addressing smart infrastructure, financial reach, climate monitoring, and automated systems.</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Timeline Section */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <Clock className="h-4 w-4 text-[#2563EB]" />
                                <span>Hackathon Timeline</span>
                              </h3>
                              <div className="relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 space-y-5">
                                {[
                                  { title: 'Registration Opens', date: 'June 01, 2026', desc: 'Sign up solo or select team settings.', active: true },
                                  { title: 'Registration Closes', date: 'June 20, 2026', desc: 'Deadline to lock in teams and skills criteria.', active: true },
                                  { title: 'Idea Submission', date: 'June 22, 2026', desc: 'Pitch presentation deck and prototype design overview.', active: false },
                                  { title: 'Shortlisting Phase', date: 'June 24, 2026', desc: 'Expert jury reviews idea submissions and selects finalists.', active: false },
                                  { title: 'Final Hack & Demos', date: 'June 25 - June 26, 2026', desc: '36-hour sprint followed by live presentations.', active: false },
                                  { title: 'Winners Announcement', date: 'June 26, 2026', desc: 'Award ceremony, cash distribution, and internship recommendations.', active: false }
                                ].map((step, idx) => (
                                  <div key={idx} className="relative group text-left">
                                    <div className={`absolute -left-[20px] top-1 w-2.5 h-2.5 rounded-full border-2 border-white ring-4 transition-all ${
                                      step.active ? 'bg-[#2563EB] ring-blue-50' : 'bg-slate-350 ring-slate-50'
                                    }`} />
                                    <div className="pl-3.5 space-y-0.5">
                                      <div className="flex flex-wrap items-center gap-x-2">
                                        <h4 className="text-xs font-bold text-slate-800 leading-none">{step.title}</h4>
                                        <span className="text-[9px] text-slate-400 font-bold">{step.date}</span>
                                      </div>
                                      <p className="text-[11px] text-slate-500 font-semibold">{step.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Problem Statements Section */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <Shield className="h-4 w-4 text-[#2563EB]" />
                                <span>Challenge Tracks & Problem Statements</span>
                              </h3>
                              <div className="space-y-4">
                                {[
                                  { track: 'AI & Machine Learning', desc: 'Leverage large language models or computer vision networks to build interactive analytics tools, intelligent search widgets, or autonomous assistants.', tech: 'Python, PyTorch, Gemini API' },
                                  { track: 'Healthcare Tech', desc: 'Create applications optimizing telemedicine routing, remote clinical check-in logs, or automated medication monitoring databases for elderly care.', tech: 'React Native, Node.js, Express' },
                                  { track: 'Smart Cities & Logistics', desc: 'Build real-time traffic coordination interfaces, neighborhood delivery route planners, or sensor telemetry dashboards for smart urban zones.', tech: 'Mapbox, React, IoT Hubs' },
                                  { track: 'Education Technology', desc: 'Develop collaborative online learning portals, mock examination feedback logs, or student roadmap trackers using game-like reward dynamics.', tech: 'Next.js, Tailwind, WebRTC' },
                                  { track: 'Sustainable Agriculture', desc: 'Create tools incorporating weather radar data to predict crop harvest yields, identify crop leaves disease, or map soil moisture levels.', tech: 'Python, Django, React, GIS' }
                                ].map((track, idx) => (
                                  <div key={idx} className="p-4 bg-slate-50/50 hover:bg-white border border-slate-200/60 rounded-2xl transition-all group text-left">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <h4 className="text-xs font-extrabold text-slate-800 leading-tight group-hover:text-[#2563EB] transition-colors">{track.track}</h4>
                                        <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-relaxed">{track.desc}</p>
                                      </div>
                                    </div>
                                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
                                      <span className="uppercase font-black text-slate-400">Recommended Tech:</span>
                                      <span className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-500 font-extrabold">{track.tech}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Eligibility & Rules Guidelines */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <Info className="h-4 w-4 text-[#2563EB]" />
                                <span>Eligibility & Rules Guidelines</span>
                              </h3>
                              <div className="space-y-4 text-xs font-semibold text-slate-500 leading-relaxed">
                                <div>
                                  <h5 className="font-extrabold text-slate-700 uppercase tracking-wider text-[10px] mb-1.5">Who Can Participate</h5>
                                  <ul className="list-disc pl-4 space-y-1 text-[11px]">
                                    <li>Enrolled undergraduate or postgraduate students in any recognized university.</li>
                                    <li>Fresh graduates (within 1 year of graduation) looking for recruiter connections.</li>
                                    <li>Teams can consist of 1 to 4 members. Solo entries are welcome!</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-extrabold text-slate-700 uppercase tracking-wider text-[10px] mb-1.5">Submission Requirements</h5>
                                  <ul className="list-disc pl-4 space-y-1 text-[11px]">
                                    <li>Public GitHub repository URL containing clean, commented source code.</li>
                                    <li>A 2-minute Loom screen-recording video demonstrating functional user flows.</li>
                                    <li>Hosting URL (Vercel, Netlify, Render) is highly encouraged for bonus scores.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            {/* Accordion FAQ Section */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <Sparkles className="h-4 w-4 text-[#2563EB]" />
                                <span>Frequently Asked Questions</span>
                              </h3>
                              <div className="space-y-2.5">
                                {[
                                  { id: 'faq-1', q: 'Who can participate in this hackathon?', a: 'Any currently enrolled college student or recent graduate can participate. Developers, designers, marketers, and product enthusiasts are all welcome.' },
                                  { id: 'faq-2', q: 'How are teams formed and managed?', a: 'You can create a team directly during registration by entering teammate emails, or browse our Team Finder to apply to join existing teams seeking your skill set.' },
                                  { id: 'faq-3', q: 'What is the required submission format?', a: 'Submissions must include a functional GitHub repository URL and a 2-minute video overview explaining the core design solution and showing features.' },
                                  { id: 'faq-4', q: 'When and how are the winners announced?', a: 'Winners are announced on the final day ceremony (June 26) following live jury reviews. Results will be published on the Nearify feed.' }
                                ].map((faq) => {
                                  const isOpen = expandedFaqId === faq.id;
                                  return (
                                    <div key={faq.id} className="border border-slate-200/60 rounded-2xl overflow-hidden text-left bg-white shadow-sm">
                                      <button
                                        onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                                        className="w-full p-4 flex justify-between items-center text-xs font-extrabold text-slate-800 hover:text-[#2563EB] transition-colors bg-white cursor-pointer"
                                      >
                                        <span>{faq.q}</span>
                                        <span className="text-sm text-slate-400 font-semibold">{isOpen ? '−' : '+'}</span>
                                      </button>
                                      <AnimatePresence>
                                        {isOpen && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="border-t border-slate-100 bg-slate-50/40 text-[11px] text-slate-500 font-semibold leading-relaxed"
                                          >
                                            <div className="p-4">{faq.a}</div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Related Hackathons Section */}
                            <div className="space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest text-left">Similar Active Hackathons</h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                {opportunities
                                  .filter(o => o.type === 'hackathon' && o.id !== selectedOpp.id)
                                  .map((hack) => (
                                    <motion.div
                                      key={hack.id}
                                      whileHover={{ y: -3 }}
                                      onClick={() => setSelectedOpp(hack)}
                                      className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer relative group"
                                    >
                                      <div className="space-y-2.5">
                                        <div className="flex justify-between items-center">
                                          <span className="px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full text-[8px] font-black uppercase tracking-wider">
                                            {hack.mode}
                                          </span>
                                          <span className="text-[9px] text-slate-400 font-bold">{hack.deadlineHours}</span>
                                        </div>
                                        <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-[#2563EB] transition-colors">{hack.title}</h4>
                                        <p className="text-[11px] text-slate-500 font-semibold line-clamp-2 leading-relaxed">{hack.detail}</p>
                                      </div>
                                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-[9px] font-black uppercase text-slate-400">Prize Pool</span>
                                        <span className="text-xs font-black text-[#2563EB]">{hack.prizePool}</span>
                                      </div>
                                    </motion.div>
                                  ))}
                              </div>
                            </div>
                          </div>

                          {/* RIGHT COLUMN (1/3 width) - Registration Setup & Team Finder */}
                          <div className="space-y-8 text-left font-sans">
                            {/* Registration Setup Card */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-5">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Register Setup</h3>
                              <div className="flex space-x-2.5">
                                <button 
                                  onClick={() => setRegMode('solo')}
                                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all cursor-pointer ${
                                    regMode === 'solo' ? 'bg-blue-50 text-[#2563EB] border-blue-200' : 'bg-white text-slate-400 border-slate-200'
                                  }`}
                                >
                                  Join Solo
                                </button>
                                <button 
                                  onClick={() => setRegMode('team')}
                                  className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider border transition-all cursor-pointer ${
                                    regMode === 'team' ? 'bg-blue-50 text-[#2563EB] border-blue-200' : 'bg-white text-slate-400 border-slate-200'
                                  }`}
                                >
                                  Create Team
                                </button>
                              </div>

                              <div className="space-y-2">
                                <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Connected Resume</label>
                                {profile.hasResume ? (
                                  <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-center justify-between">
                                    <span className="text-[11px] text-emerald-700 font-extrabold truncate">📄 {profile.resumeFile || 'Aishwarya_Resume.pdf'}</span>
                                    <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider shrink-0">Connected</span>
                                  </div>
                                ) : (
                                  <label className="border border-dashed border-[#E2E8F0] rounded-xl p-3 flex items-center justify-center gap-2 bg-slate-50/50 hover:bg-blue-50/10 cursor-pointer transition-all">
                                    <Upload className="h-4 w-4 text-slate-400" />
                                    <span className="text-[10px] font-bold text-slate-600">Connect resume PDF</span>
                                    <input type="file" accept=".pdf" onChange={handleResumeChange} className="hidden" />
                                  </label>
                                )}
                              </div>

                              {regMode === 'solo' && (
                                <div className="p-3.5 bg-blue-50/20 border border-blue-100 rounded-2xl text-[11px] text-slate-500 font-semibold leading-relaxed">
                                  You are registering as a solo participant. Once registered, you can still search for teams to join or recruit members using the Teammate Finder.
                                </div>
                              )}

                              {regMode === 'team' && (
                                <div className="space-y-4 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                  <div className="space-y-1.5">
                                    <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Team Name</label>
                                    <input 
                                      type="text" 
                                      placeholder="e.g. DreamTeam" 
                                      value={teamName}
                                      onChange={(e) => setTeamName(e.target.value)}
                                      className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                      <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">Invite Members (Email)</label>
                                      <button 
                                        onClick={() => setTeamMembers(prev => [...prev, ''])}
                                        className="text-[9px] font-black uppercase text-[#2563EB] hover:text-blue-700 cursor-pointer"
                                      >
                                        + Add Email
                                      </button>
                                    </div>
                                    {teamMembers.map((email, idx) => (
                                      <div key={idx} className="flex gap-2 items-center">
                                        <input 
                                          type="email" 
                                          placeholder="teammate@college.edu" 
                                          value={email}
                                          onChange={(e) => {
                                            const val = e.target.value;
                                            setTeamMembers(prev => prev.map((item, i) => i === idx ? val : item));
                                          }}
                                          className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                        />
                                        {teamMembers.length > 1 && (
                                          <button 
                                            onClick={() => setTeamMembers(prev => prev.filter((_, i) => i !== idx))}
                                            className="p-2 bg-white hover:bg-rose-50 border border-slate-100 text-slate-400 hover:text-rose-600 rounded-xl transition-all cursor-pointer text-xs"
                                          >
                                            ✕
                                          </button>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="pt-2">
                                <button
                                  disabled={registeredHackathons.has(selectedOpp.id)}
                                  onClick={() => {
                                    if (regMode === 'team' && !teamName.trim()) {
                                      alert("Please specify a Team Name to proceed.");
                                      return;
                                    }
                                    executeRegisterHackathon(selectedOpp.id);
                                  }}
                                  className={`w-full py-3 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95 ${
                                    registeredHackathons.has(selectedOpp.id)
                                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                                      : 'bg-slate-900 text-white hover:bg-slate-800'
                                  }`}
                                >
                                  {registeredHackathons.has(selectedOpp.id) ? (
                                    <>
                                      <CheckCircle className="h-4.5 w-4.5 text-emerald-500" />
                                      <span>Registered Successfully</span>
                                    </>
                                  ) : (
                                    <span>Register Now</span>
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Teammate Finder matchmaking deck */}
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <div className="space-y-0.5">
                                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5">
                                  <Search className="h-4 w-4 text-[#2563EB]" />
                                  <span>Teammate Finder</span>
                                </h3>
                                <p className="text-[10px] text-slate-400 font-semibold leading-tight">Request to join active teams looking for specific developers.</p>
                              </div>

                              <div className="relative">
                                <input 
                                  type="text"
                                  placeholder="Search teams or skills..."
                                  value={teamSearchQuery}
                                  onChange={(e) => setTeamSearchQuery(e.target.value)}
                                  className="w-full pl-9 pr-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                                />
                                <Search className="h-4 w-4 text-slate-400 absolute left-3 top-3.5" />
                              </div>

                              <div className="space-y-3 pt-1">
                                {existingTeams
                                  .filter(team => {
                                    const query = teamSearchQuery.toLowerCase();
                                    return (
                                      team.name.toLowerCase().includes(query) ||
                                      team.skillsNeeded.some(s => s.toLowerCase().includes(query))
                                    );
                                  })
                                  .map((team) => {
                                    const hasRequested = joinedTeamIds.has(team.id);
                                    return (
                                      <div key={team.id} className="p-3.5 border border-slate-100 rounded-2xl bg-slate-50/30 flex flex-col gap-2.5">
                                        <div className="flex justify-between items-start">
                                          <div className="space-y-0.5">
                                            <h5 className="text-[11px] font-black text-slate-800">{team.name}</h5>
                                            <p className="text-[9px] text-slate-400 font-bold">Led by {team.leader} • {team.members.length}/{team.maxSlots} members</p>
                                          </div>
                                          <button 
                                            onClick={() => {
                                              setJoinedTeamIds(prev => {
                                                const updated = new Set(prev);
                                                if (updated.has(team.id)) {
                                                  updated.delete(team.id);
                                                } else {
                                                  updated.add(team.id);
                                                }
                                                return updated;
                                              });
                                            }}
                                            className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer border ${
                                              hasRequested
                                                ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                                : 'bg-blue-50 hover:bg-blue-100 text-[#2563EB] border-blue-100 active:scale-95'
                                            }`}
                                          >
                                            {hasRequested ? 'Request Sent' : 'Request Join'}
                                          </button>
                                        </div>
                                        <div className="flex flex-wrap gap-1 mt-0.5">
                                          {team.skillsNeeded.map((skill, index) => (
                                            <span key={index} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[9px] text-slate-500 font-bold">
                                              🔍 Needs {skill}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeHackathonTab === 'chat' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm flex flex-col h-[55vh] justify-between text-left">
                          <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
                            <div>
                              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Teammates Group Chat</h4>
                              <p className="text-[10px] text-slate-400 font-bold mt-0.5">Active Session: Rahul Sharma, Sneha Reddy, Aishwarya G (You)</p>
                            </div>
                            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                          </div>

                          {/* Message feed */}
                          <div className="flex-grow overflow-y-auto space-y-4 pr-1 scrollbar-thin text-xs">
                            {simulatedMessages.map((msg, i) => {
                              const isMe = msg.author === 'Aishwarya G';
                              return (
                                <div key={i} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1`}>
                                  <span className="text-[9px] text-slate-400 font-bold">{msg.author} • {msg.time}</span>
                                  <div className={`px-4 py-2.5 rounded-2xl max-w-md font-semibold leading-relaxed ${
                                    isMe ? 'bg-[#2563EB] text-white rounded-tr-none' : 'bg-slate-100 text-slate-600 rounded-tl-none'
                                  }`}>
                                    {msg.text}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Chat Input form */}
                          <form 
                            onSubmit={(e) => {
                              e.preventDefault();
                              if (!newChatMessage.trim()) return;
                              
                              const now = new Date();
                              const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                              
                              const userMsg = {
                                author: 'Aishwarya G',
                                text: newChatMessage,
                                time: formattedTime
                              };
                              
                              setSimulatedMessages(prev => [...prev, userMsg]);
                              setNewChatMessage('');
                              
                              // Trigger auto response
                              setTimeout(() => {
                                const replies = [
                                  "Awesome suggestion! I'll update our project setup.",
                                  "Sounds like a good approach. Let's document this in our readme.",
                                  "Good point, Aishwarya. Who wants to build the backend routes for this?",
                                  "I'll start coding the React context files right away.",
                                  "Perfect. I'm focusing on the responsive UI layout today."
                                ];
                                const randomReplyText = replies[Math.floor(Math.random() * replies.length)];
                                const teammateNames = ['Rahul Sharma', 'Sneha Reddy'];
                                const teammateName = teammateNames[Math.floor(Math.random() * teammateNames.length)];
                                
                                setSimulatedMessages(prev => [
                                  ...prev,
                                  {
                                    author: teammateName,
                                    text: randomReplyText,
                                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                  }
                                ]);
                              }, 1200);
                            }}
                            className="flex gap-2.5 mt-4 pt-3.5 border-t border-slate-100"
                          >
                            <input 
                              type="text" 
                              placeholder="Type group message..." 
                              value={newChatMessage}
                              onChange={(e) => setNewChatMessage(e.target.value)}
                              className="flex-1 px-4 py-3 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-all"
                            />
                            <button 
                              type="submit"
                              className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer border-none font-bold"
                            >
                              <Send className="h-3.5 w-3.5" />
                              <span>Send</span>
                            </button>
                          </form>
                        </div>
                      )}

                      {activeHackathonTab === 'leaderboard' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <div>
                              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Active Teams Leaderboard</h4>
                              <p className="text-[10px] text-slate-400 font-bold mt-0.5">Points recalculated dynamically based on project milestones.</p>
                            </div>
                            <span className="px-2.5 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-full text-[9px] font-black uppercase">Round 1</span>
                          </div>

                          <div className="space-y-3.5 text-xs">
                            {[
                              { rank: 1, name: 'AI Wizards', pts: 980, status: 'Pipeline Demo Ready', badge: '🥇 First Place' },
                              { rank: 2, name: 'Byte Builders', pts: 945, status: 'Frontend Prototype Live', badge: '🥈 Second Place' },
                              { rank: 3, name: 'Data Dynamos', pts: 890, status: 'Telemetry API Linked', badge: '🥉 Third Place' },
                              { rank: 4, name: 'React Rebels', pts: 850, status: 'Collaborative Editor Beta' },
                              { rank: 5, name: 'Cloud Knights', pts: 810, status: 'Infrastructure Deployed' }
                            ].map((team, index) => (
                              <div key={index} className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl">
                                <div className="flex items-center space-x-3.5 min-w-0">
                                  <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center border shadow-sm shrink-0 ${
                                    team.rank === 1 ? 'bg-amber-100 text-amber-700 border-amber-200' :
                                    team.rank === 2 ? 'bg-slate-200 text-slate-700 border-slate-350' :
                                    team.rank === 3 ? 'bg-orange-100 text-orange-700 border-orange-200' :
                                    'bg-white text-slate-500 border-slate-100'
                                  }`}>
                                    #{team.rank}
                                  </div>
                                  <div className="min-w-0 text-left">
                                    <h5 className="font-extrabold text-slate-700 truncate">{team.name}</h5>
                                    <p className="text-[10px] text-slate-400 font-semibold truncate mt-0.5">{team.status}</p>
                                  </div>
                                </div>
                                <div className="text-right shrink-0">
                                  <span className="font-black text-[#2563EB] text-sm block leading-none">{team.pts} pts</span>
                                  {team.badge && <span className="text-[9px] text-slate-400 font-extrabold block mt-1.5">{team.badge}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeHackathonTab === 'forum' && (
                        <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4 text-left">
                          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                            <div>
                              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Discussion Board</h4>
                              <p className="text-[10px] text-slate-400 font-bold mt-0.5">Collaborative Q&A forum for participant developers.</p>
                            </div>
                            <button 
                              onClick={() => {
                                const q = prompt("Ask a question on the board:");
                                if (q) {
                                  alert("Question posted successfully! Teammates and mentors will reply soon.");
                                }
                              }}
                              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[10px] font-black uppercase tracking-wider cursor-pointer border-none font-bold"
                            >
                              + Ask Question
                            </button>
                          </div>

                          <div className="space-y-3.5 text-xs text-slate-600 font-semibold">
                            {[
                              { q: 'Are external APIs like Mapbox allowed in the hybrid track?', a: 'Yes! As long as you provide credentials or use a sandbox account. Make sure to specify the API key limits in your demo instructions.', votes: 12 },
                              { q: 'Can we submit if our team has only 2 members?', a: 'Absolutely. The rules state that teams can range from 1 to 4 members. Solo developers are also eligible for all main prizes.', votes: 8 },
                              { q: 'Is there a Discord server for help during the hacking sprint?', a: 'Yes, check your registration confirmation email for the official guild link. Dedicated mentors are available there 24/7.', votes: 5 }
                            ].map((thread, index) => (
                              <div key={index} className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-left space-y-2.5">
                                <div className="flex justify-between items-start gap-4">
                                  <h5 className="font-extrabold text-slate-800 leading-tight hover:text-[#2563EB] cursor-pointer">{thread.q}</h5>
                                  <span className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[9px] text-slate-500 font-black shrink-0">▲ {thread.votes}</span>
                                </div>
                                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold pl-2.5 border-l-2 border-slate-200">
                                  {thread.a}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeHackathonTab === 'mentors' && (
                        <div className="space-y-6 text-left">
                          
                          {/* Mentors Grid */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3">Assigned Technical Mentors</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-1">
                              {[
                                { name: 'Siddharth Verma', role: 'AI Architect', company: 'Microsoft', specialty: 'PyTorch, Gemini APIs, NLP models' },
                                { name: 'Pooja Hegde', role: 'Senior Developer', company: 'Vercel', specialty: 'Next.js Routing, Web Performance' },
                                { name: 'Amit Patel', role: 'Backend Lead', company: 'AWS', specialty: 'Serverless scaling, DynamoDB, APIs' }
                              ].map((m, index) => (
                                <div key={index} className="p-4 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col justify-between gap-3 text-left">
                                  <div className="space-y-1">
                                    <h5 className="font-extrabold text-slate-700 leading-none">{m.name}</h5>
                                    <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{m.role} at {m.company}</p>
                                    <span className="text-[9px] text-[#2563EB] font-bold block pt-1.5">Focus: {m.specialty}</span>
                                  </div>
                                  <button 
                                    onClick={() => alert(`Slot booked with ${m.name}! A calendar invite has been sent.`)}
                                    className="w-full py-2 bg-white border border-slate-200 hover:border-slate-350 rounded-xl text-[9.5px] font-black uppercase tracking-wider text-slate-600 hover:text-slate-800 transition-colors cursor-pointer text-center active:scale-95"
                                  >
                                    Book 1:1 Session
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Proud Sponsors Section */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3">Proud Hackathon Sponsors</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center pt-2">
                              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 h-16 hover:border-slate-350 transition-colors">
                                <MicrosoftLogo className="h-6 w-auto" />
                              </div>
                              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 h-16 hover:border-slate-350 transition-colors">
                                <GoogleLogo className="h-5 w-auto" />
                              </div>
                              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 h-16 hover:border-slate-350 transition-colors">
                                <span className="font-black text-slate-800 tracking-wider text-xs">AWS Cloud</span>
                              </div>
                              <div className="p-4 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 h-16 hover:border-slate-350 transition-colors">
                                <span className="font-black text-slate-800 tracking-wider text-xs">GitHub Docs</span>
                              </div>
                            </div>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* EVENTS & WORKSHOPS DETAILS MODEL */}
                {(selectedOpp.type === 'event' || selectedOpp.type === 'workshop') && (
                  <>
                    <div className="h-44 rounded-2xl overflow-hidden relative shrink-0 bg-slate-100">
                      <img decoding="async" loading="lazy" src={selectedOpp.banner} alt="event banner" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                        <div className="text-white text-left">
                          <span className="text-[9px] font-bold uppercase tracking-widest text-cyan-200 block font-sans">Host: {selectedOpp.organizer}</span>
                          <h4 className="text-base font-extrabold mt-0.5 leading-tight">{selectedOpp.title}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border border-slate-100 p-4 rounded-2xl bg-slate-50/30 text-center">
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">DATE & TIME</span>
                        <span className="text-slate-800 font-extrabold mt-1 block truncate text-xs">{selectedOpp.date}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">VENUE</span>
                        <span className="text-slate-800 font-extrabold mt-1 block truncate text-xs">{selectedOpp.location}</span>
                      </div>
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-wider block text-slate-400">SEATS REMAINING</span>
                        <span className="text-slate-800 font-extrabold mt-1 block text-xs">{selectedOpp.availableSeats} Spots</span>
                      </div>
                    </div>

                    {/* Google Calendar Sync & RSVP Action HUD */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        disabled={registeredEvents.has(selectedOpp.id) || selectedOpp.availableSeats === 0}
                        onClick={() => executeRegisterEvent(selectedOpp.id)}
                        className={`flex-1 py-3.5 rounded-2xl font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 border-none ${
                          registeredEvents.has(selectedOpp.id)
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-600'
                            : selectedOpp.availableSeats === 0
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {registeredEvents.has(selectedOpp.id) ? (
                          <>
                            <CheckCircle className="h-4.5 w-4.5 text-emerald-500" />
                            <span>RSVP Claimed Successfully</span>
                          </>
                        ) : selectedOpp.availableSeats === 0 ? (
                          <span>Sold Out</span>
                        ) : (
                          <span>Claim RSVP Spot</span>
                        )}
                      </button>

                      {registeredEvents.has(selectedOpp.id) && (
                        <button
                          onClick={() => {
                            setSyncedEvents(prev => {
                              const updated = new Set(prev);
                              if (updated.has(selectedOpp.id)) {
                                updated.delete(selectedOpp.id);
                              } else {
                                updated.add(selectedOpp.id);
                              }
                              return updated;
                            });
                          }}
                          className={`px-5 py-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95 ${
                            syncedEvents.has(selectedOpp.id)
                              ? 'bg-blue-50 border-blue-200 text-[#2563EB]'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-350'
                          }`}
                        >
                          <span>📅</span>
                          <span>{syncedEvents.has(selectedOpp.id) ? 'Synced to Calendar' : 'Sync Calendar'}</span>
                        </button>
                      )}
                    </div>

                    {/* QR Code Ticket Overlay (if registered) */}
                    {registeredEvents.has(selectedOpp.id) && (
                      <div className="p-6 bg-slate-50 border border-[#E2E8F0] rounded-[24px] flex flex-col md:flex-row items-center gap-6 text-left">
                        {/* QR Code Box */}
                        <div className="w-32 h-32 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-sm shrink-0 flex items-center justify-center relative select-none">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800 fill-current">
                            <rect x="0" y="0" width="25" height="25" />
                            <rect x="5" y="5" width="15" height="15" fill="white" />
                            <rect x="8" y="8" width="9" height="9" />
                            
                            <rect x="75" y="0" width="25" height="25" />
                            <rect x="80" y="5" width="15" height="15" fill="white" />
                            <rect x="83" y="8" width="9" height="9" />
                            
                            <rect x="0" y="75" width="25" height="25" />
                            <rect x="5" y="80" width="15" height="15" fill="white" />
                            <rect x="8" y="83" width="9" height="9" />

                            <rect x="35" y="10" width="10" height="15" />
                            <rect x="55" y="5" width="15" height="10" />
                            <rect x="30" y="35" width="15" height="15" />
                            <rect x="55" y="30" width="20" height="10" />
                            <rect x="85" y="35" width="10" height="15" />
                            <rect x="35" y="60" width="15" height="15" />
                            <rect x="60" y="65" width="15" height="20" />
                            <rect x="80" y="60" width="10" height="10" />
                            <rect x="10" y="60" width="15" height="5" />
                            <rect x="80" y="80" width="15" height="15" />
                          </svg>
                          <div className="absolute text-[8px] bg-slate-900 text-white font-black px-1.5 py-0.5 rounded bottom-1 uppercase tracking-widest leading-none">VERIFIED</div>
                        </div>

                        {/* Ticket Data */}
                        <div className="flex-1 space-y-3 min-w-0">
                          <div>
                            <span className="text-[8px] font-black text-[#2563EB] uppercase tracking-widest block leading-none">ENTRY PASS TYPE</span>
                            <h4 className="font-extrabold text-slate-800 text-sm mt-1">Student RSVP Admission</h4>
                          </div>

                          <div className="grid grid-cols-2 gap-4.5 text-[11px] font-bold text-slate-500 leading-none">
                            <div>
                              <span className="text-[8px] font-black text-slate-400 block uppercase mb-1">TICKET HOLDER</span>
                              <span className="text-slate-700 font-extrabold">{profile.name} ({profile.role})</span>
                            </div>
                            <div>
                              <span className="text-[8px] font-black text-slate-400 block uppercase mb-1">GATE SCANNER</span>
                              <span className="text-slate-700 font-extrabold">Releases at Venue</span>
                            </div>
                          </div>

                          {/* Attendance stages */}
                          <div className="pt-2">
                            <span className="text-[8px] font-black text-slate-400 block uppercase mb-1.5">ATTENDANCE TRACKING</span>
                            <div className="flex items-center gap-1.5 text-[9.5px]">
                              <span className="px-2 py-0.5 bg-blue-50 text-[#2563EB] border border-blue-100 rounded-lg font-black uppercase">Registered ✓</span>
                              <span className="text-slate-300 font-extrabold">➔</span>
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-400 border border-slate-200 rounded-lg font-bold uppercase">Checked-In</span>
                              <span className="text-slate-300 font-extrabold">➔</span>
                              <span className="px-2 py-0.5 bg-slate-100 text-slate-400 border border-slate-200 rounded-lg font-bold uppercase">Attended</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* About Session */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm text-left space-y-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <Info className="h-4 w-4 text-[#2563EB]" />
                        <span>About the Session</span>
                      </h4>
                      <p className="leading-relaxed font-semibold text-xs text-slate-500">{selectedOpp.detail}</p>
                    </div>

                    {/* Speaker Profiles */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm text-left space-y-4">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-2.5">
                        Guest Speaker Profile
                      </h4>
                      <div className="flex items-start gap-4 text-xs">
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                          <img decoding="async" loading="lazy" 
                            src={selectedOpp.speakerImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=60"} 
                            alt={selectedOpp.speaker} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-extrabold text-slate-800 text-xs">{selectedOpp.speaker || 'Dr. Vikram Sen'}</h5>
                          <p className="text-[10px] text-[#2563EB] font-bold">{selectedOpp.speakerRole || 'Research Director at TechLabs & Author'}</p>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-semibold mt-1">
                            {selectedOpp.speakerBio || 'Specializes in distributed systems scaling, reactive patterns, and automated telemetry dashboards. Ex-Senior Architect.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Attendee Networking Lounge */}
                    <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm text-left space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
                        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest font-sans">Attendee Networking Lounge</h4>
                        <span className="text-[9px] px-2 py-0.5 bg-blue-50 text-[#2563EB] rounded-full font-bold">14 NITW Students Joined</span>
                      </div>
                      
                      <div className="space-y-3">
                        {[
                          { name: 'Karan Malhotra', college: 'NIT Warangal', major: 'CSE Junior', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=60', id: 'net-1' },
                          { name: 'Pooja Sharma', college: 'NIT Warangal', major: 'ECE Sophomore', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=60', id: 'net-2' }
                        ].map((student) => {
                          const hasConnected = connectedAttendeeIds.has(student.id);
                          return (
                            <div key={student.id} className="p-3 bg-slate-50/50 border border-slate-100 rounded-xl flex items-center justify-between gap-3 text-xs">
                              <div className="flex items-center space-x-3 text-left">
                                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200">
                                  <img decoding="async" loading="lazy" src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <h5 className="font-extrabold text-slate-700">{student.name}</h5>
                                  <p className="text-[9px] text-slate-400 font-bold">{student.college} • {student.major}</p>
                                </div>
                              </div>
                              <button 
                                onClick={() => {
                                  setConnectedAttendeeIds(prev => {
                                    const updated = new Set(prev);
                                    if (updated.has(student.id)) {
                                      updated.delete(student.id);
                                    } else {
                                      updated.add(student.id);
                                    }
                                    return updated;
                                  });
                                }}
                                className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer border ${
                                  hasConnected
                                    ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-350 active:scale-95'
                                }`}
                              >
                                {hasConnected ? 'Connected' : 'Connect'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}

                {/* RESTAURANT DETAILS MODEL (Inspired by Zomato/OpenTable) */}
                {selectedOpp.type === 'food' && (
                  <div className="flex flex-col h-full overflow-hidden text-slate-700 bg-[#F8FAFC]">
                    
                    {/* 1. HERO BANNER BLOCK */}
                    <div className="h-56 w-full relative overflow-hidden shrink-0">
                      {/* Banner Image (Updates dynamically on gallery thumbnail click) */}
                      <img decoding="async" loading="lazy" 
                        src={(selectedOpp.gallery && selectedOpp.gallery[activeGalleryIdx]) || selectedOpp.banner || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60"} 
                        alt="Restaurant Banner" 
                        className="w-full h-full object-cover transition-all duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
                      
                      {/* Floating Close Button */}
                      <button 
                        onClick={() => setSelectedOpp(null)}
                        className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/15 transition-all cursor-pointer z-30 shadow-md active:scale-95"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      {/* Header overlay text details */}
                      <div className="absolute left-8 bottom-6 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200/60 p-2.5 flex items-center justify-center shrink-0 shadow-lg">
                            {renderOpportunityLogo(selectedOpp, "h-11 w-11")}
                          </div>
                          <div className="space-y-1 text-white">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 bg-[#06B6D4] text-white rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm">
                                Hyderabadi Cuisine
                              </span>
                              <span className="px-2.5 py-0.5 bg-emerald-600 text-white rounded-full text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-0.5">
                                <span>★</span>
                                <span>{selectedOpp.rating || '4.6'}</span>
                              </span>
                            </div>
                            <h2 className="text-xl md:text-2xl font-black tracking-tight drop-shadow-sm leading-tight">{selectedOpp.organizer || 'Paradise Biryani'}</h2>
                            <p className="text-xs text-slate-300 font-semibold leading-none flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                              <span>{selectedOpp.address || 'Warangal, Telangana'}</span>
                            </p>
                          </div>
                        </div>

                        {/* Top right Save & Share action buttons */}
                        <div className="flex items-center gap-2.5">
                          <button 
                            onClick={() => {
                              setSavedRestaurantIds(prev => {
                                const updated = new Set(prev);
                                if (updated.has(selectedOpp.id)) {
                                  updated.delete(selectedOpp.id);
                                } else {
                                  updated.add(selectedOpp.id);
                                }
                                return updated;
                              });
                            }}
                            className={`px-3.5 py-2.5 rounded-xl border text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer shadow-sm active:scale-95 ${
                              savedRestaurantIds.has(selectedOpp.id)
                                ? 'bg-rose-600 text-white border-rose-600'
                                : 'bg-slate-900/60 backdrop-blur-md text-white border-white/10 hover:bg-slate-800/80'
                            }`}
                          >
                            <span>❤️</span>
                            <span>{savedRestaurantIds.has(selectedOpp.id) ? 'Saved' : 'Save'}</span>
                          </button>
                          <button 
                            onClick={() => {
                              const shareText = `Check out ${selectedOpp.organizer || 'this restaurant'} on Nearify! Rating: ${selectedOpp.rating || '4.6'}`;
                              navigator.clipboard.writeText(shareText);
                              alert("Share link copied to clipboard!");
                            }}
                            className="px-3.5 py-2.5 bg-slate-900/60 backdrop-blur-md rounded-xl border border-white/10 text-white text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-slate-800/80 cursor-pointer shadow-sm active:scale-95"
                          >
                            <span>🔗</span>
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* 2. RESPONSIVE TWO COLUMN BODY CONTAINER */}
                    <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        
                        {/* LEFT COLUMN (2/3 width) - Gallery, Info, Offers, Menu, Ratings, Reviews, Map, Similar */}
                        <div className="lg:col-span-2 space-y-8 text-left">
                          
                          {/* Restaurant Photo Gallery */}
                          {selectedOpp.gallery && selectedOpp.gallery.length > 0 && (
                            <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                                <span>📸</span>
                                <span>Restaurant Gallery</span>
                              </h3>
                              
                              <div className="grid grid-cols-4 gap-3">
                                {selectedOpp.gallery.map((imgUrl, idx) => (
                                  <motion.button
                                    key={idx}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => setActiveGalleryIdx(idx)}
                                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all bg-slate-100 ${
                                      activeGalleryIdx === idx ? 'border-[#2563EB] shadow-md scale-98' : 'border-transparent opacity-80 hover:opacity-100'
                                    }`}
                                  >
                                    <img decoding="async" loading="lazy" 
                                      src={imgUrl} 
                                      alt={`gallery-${idx}`} 
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=100&h=70&q=60";
                                      }}
                                      className="w-full h-full object-cover" 
                                    />
                                    {idx === 0 && <span className="absolute left-2 top-2 px-1.5 py-0.5 bg-black/60 text-white rounded text-[8px] font-bold">Food</span>}
                                    {idx === 1 && <span className="absolute left-2 top-2 px-1.5 py-0.5 bg-black/60 text-white rounded text-[8px] font-bold">Interior</span>}
                                    {idx === 2 && <span className="absolute left-2 top-2 px-1.5 py-0.5 bg-black/60 text-white rounded text-[8px] font-bold">Ambience</span>}
                                    {idx > 2 && <span className="absolute left-2 top-2 px-1.5 py-0.5 bg-black/60 text-white rounded text-[8px] font-bold">Vibe</span>}
                                  </motion.button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Quick Information Cards */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                              { label: 'OPEN HOURS', val: selectedOpp.openingHours || '11:00 AM - 11:00 PM', desc: 'Mon - Sun', color: 'text-blue-600', bg: 'bg-blue-50/50 border-blue-100' },
                              { label: 'DISTANCE', val: selectedOpp.distance || '1.2 km Away', desc: 'From Campus Node', color: 'text-indigo-600', bg: 'bg-indigo-50/50 border-indigo-100' },
                              { label: 'AVG COST FOR TWO', val: '₹600 for Two', desc: 'Exclusive of Taxes', color: 'text-cyan-600', bg: 'bg-cyan-50/50 border-cyan-100' },
                              { label: 'FREE TABLES', val: `${selectedOpp.tablesAvailable || '8'} Tables`, desc: 'Direct Reservation', color: 'text-emerald-600', bg: 'bg-emerald-50/50 border-emerald-100' },
                              { label: 'FREE SEATS', val: `${selectedOpp.seatsAvailable || '32'} Seats`, desc: 'Student Lounge Slots', color: 'text-amber-600', bg: 'bg-amber-50/50 border-amber-100' },
                              { label: 'CONTACT NUMBER', val: '+91 90876 54321', desc: 'Support Hot-line', color: 'text-rose-600', bg: 'bg-rose-50/50 border-rose-100' }
                            ].map((info, i) => (
                              <div key={i} className={`p-4 border rounded-[20px] shadow-sm flex flex-col justify-between ${info.bg}`}>
                                <div className="space-y-1">
                                  <span className="text-[9px] font-black tracking-widest text-slate-400 block uppercase leading-none">{info.label}</span>
                                  <span className={`text-xs font-black block leading-snug ${info.color}`}>{info.val}</span>
                                </div>
                                <span className="text-[8px] text-slate-400 font-bold block mt-1.5">{info.desc}</span>
                              </div>
                            ))}
                          </div>

                          {/* Special Offers Section */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                              <span>🔥</span>
                              <span>Special Student Offers</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                { title: selectedOpp.offer || '30% OFF on Dining', desc: 'Valid on student ID verification for all à la carte bills.', validity: 'Valid: Mon - Fri', code: 'NEARIFY30' },
                                { title: 'Buy 1 Get 1 Buffet', desc: 'Applicable on lunch buffet bookings for student groups of 4+.', validity: 'Valid: Wed & Sat', code: 'STUDENTBUFFET' },
                                { title: 'Free Dessert on Weekdays', desc: 'Complimentary special falooda or chocolate brownie on orders.', validity: 'Valid: Mon - Thu', code: 'FREEFALOODA' }
                              ].map((offer, idx) => {
                                const isClaimed = claimedCoupons.has(`${selectedOpp.id}-${idx}`);
                                return (
                                  <div key={idx} className={`p-4 border rounded-2xl flex flex-col justify-between gap-3 text-left transition-all ${
                                    isClaimed 
                                      ? 'bg-emerald-50/45 border-emerald-205 shadow-sm'
                                      : 'bg-orange-50/20 border-orange-100 hover:border-orange-200'
                                  }`}>
                                    <div className="space-y-1">
                                      <div className="flex justify-between items-start gap-1">
                                        <h4 className={`text-xs font-extrabold leading-tight ${isClaimed ? 'text-emerald-800' : 'text-orange-700'}`}>{offer.title}</h4>
                                        {isClaimed && <span className="text-[10px] text-emerald-600 font-bold">✓</span>}
                                      </div>
                                      <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">{offer.desc}</p>
                                    </div>
                                    <div className="mt-2 space-y-2">
                                      <div className="flex justify-between items-center text-[8px] text-slate-400 font-bold">
                                        <span className="px-2 py-0.5 bg-orange-100/60 text-orange-700 rounded-lg">
                                          {offer.validity}
                                        </span>
                                      </div>
                                      {isClaimed ? (
                                        <div className="flex items-center justify-between bg-emerald-100/60 p-2 rounded-xl border border-dashed border-emerald-300">
                                          <span className="font-mono text-[9px] font-black text-emerald-800 tracking-wider uppercase select-all">{offer.code}</span>
                                          <button 
                                            onClick={() => {
                                              navigator.clipboard.writeText(offer.code);
                                              alert(`Coupon code ${offer.code} copied to clipboard!`);
                                            }}
                                            className="text-[8px] font-black uppercase text-emerald-700 hover:underline cursor-pointer border-none bg-transparent"
                                          >
                                            Copy
                                          </button>
                                        </div>
                                      ) : (
                                        <button 
                                          onClick={() => {
                                            setClaimedCoupons(prev => {
                                              const updated = new Set(prev);
                                              updated.add(`${selectedOpp.id}-${idx}`);
                                              return updated;
                                            });
                                          }}
                                          className="w-full py-1.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 border-none text-center font-bold"
                                        >
                                          Unlock Voucher
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Popular Dishes */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                              <span>🍲</span>
                              <span>Popular Dishes & Menu Highlights</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[
                                { name: 'Special Chicken Biryani', desc: 'Aromatic basmati rice cooked with tender marinated chicken and spices.', price: '₹280', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=100&h=70&q=60' },
                                { name: 'Paneer Tikka Shaslik', desc: 'Cottage cheese chunks skewered with capsicum, tomatoes, and grilled.', price: '₹220', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=100&h=70&q=60' },
                                { name: 'Spicy Mutton Fry', desc: 'Succulent lamb pieces tossed in specialized Southern spice mix.', price: '₹340', img: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=100&h=70&q=60' },
                                { name: 'Paradise Special Falooda', desc: 'Creamy milk, sweet vermicelli, basil seeds topped with premium kulfi.', price: '₹140', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=100&h=70&q=60' }
                              ].map((dish, idx) => (
                                <div key={idx} className="p-3.5 bg-slate-50/50 hover:bg-white border border-slate-100 rounded-2xl flex items-center justify-between gap-3.5 transition-all group">
                                  <div className="space-y-1 flex-1 min-w-0">
                                    <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-[#2563EB] transition-colors truncate">{dish.name}</h4>
                                    <p className="text-[10px] text-slate-400 font-semibold line-clamp-2 leading-relaxed">{dish.desc}</p>
                                    <span className="text-xs font-extrabold text-[#2563EB] block mt-1">{dish.price}</span>
                                  </div>
                                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/60 shadow-sm relative">
                                    <img decoding="async" loading="lazy" src={dish.img} alt={dish.name} className="w-full h-full object-cover" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Ratings Breakdown Grid */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                              <span>📊</span>
                              <span>Detailed Ratings Breakdown</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                              {[
                                { title: 'Food Quality', rate: 96, label: '4.8 / 5' },
                                { title: 'Service Efficiency', rate: 90, label: '4.5 / 5' },
                                { title: 'Ambience & Comfort', rate: 92, label: '4.6 / 5' },
                                { title: 'Cleanliness & Safety', rate: 94, label: '4.7 / 5' },
                                { title: 'Value for Money', rate: 88, label: '4.4 / 5' }
                              ].map((rate, idx) => (
                                <div key={idx} className="space-y-1.5 text-xs text-slate-600 font-semibold">
                                  <div className="flex justify-between items-center text-[11px]">
                                    <span className="text-slate-700 font-bold">{rate.title}</span>
                                    <span className="text-slate-400 font-extrabold">{rate.label}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" 
                                      style={{ width: `${rate.rate}%` }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Map & Routing Directions */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                              <span>📍</span>
                              <span>Restaurant Location & Map</span>
                            </h3>
                            <div className="space-y-3.5">
                              {/* Simulated Map image */}
                              <div className="h-44 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100">
                                <img decoding="async" loading="lazy" 
                                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=60" 
                                  alt="Map Area" 
                                  className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-black/10" />
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center animate-pulse">
                                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full border-2 border-white" />
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 text-xs">
                                <div>
                                  <p className="font-extrabold text-slate-800">{selectedOpp.organizer}</p>
                                  <p className="text-[10px] text-slate-400 font-bold mt-0.5">{selectedOpp.address}</p>
                                </div>
                                <button 
                                  onClick={() => {
                                    setDirectionsStatus("Calculating route from NIT Warangal Campus to " + selectedOpp.organizer + "... Route locked via NH-163 - ETA 4 minutes (1.2 km).");
                                  }}
                                  className="px-4 py-2 border border-slate-200 hover:border-slate-300 rounded-xl text-[10px] font-black uppercase tracking-wider text-slate-600 hover:text-slate-800 transition-all cursor-pointer shadow-sm active:scale-95 bg-white shrink-0 self-start sm:self-center"
                                >
                                  Get Directions
                                </button>
                              </div>
                              {directionsStatus && (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.98 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  className="p-3.5 bg-blue-50 border border-blue-100 rounded-2xl text-[11px] text-blue-700 font-bold leading-relaxed flex items-start space-x-2.5 text-left"
                                >
                                  <Compass className="h-4.5 w-4.5 shrink-0 mt-0.5 animate-spin" />
                                  <span>{directionsStatus}</span>
                                </motion.div>
                              )}
                            </div>
                          </div>

                          {/* Customer Reviews Listings */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center gap-1.5 border-b border-slate-100 pb-3">
                              <span>⭐</span>
                              <span>Customer Reviews</span>
                            </h3>

                            <div className="space-y-4">
                              {getReviewsList(selectedOpp).map((r, idx) => (
                                <div key={idx} className="bg-slate-50/40 p-4 border border-slate-100 rounded-2xl text-left space-y-2.5">
                                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-7 h-7 rounded-full bg-[#E2E8F0] flex items-center justify-center text-slate-500 font-black text-xs uppercase shrink-0">
                                        {r.user.charAt(0)}
                                      </div>
                                      <span className="text-slate-700 font-extrabold">{r.user}</span>
                                    </div>
                                    <span>{r.date}</span>
                                  </div>
                                  <span className="text-[10px] text-amber-500 font-bold block">
                                    {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                                  </span>
                                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                                    {r.comment}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Write review widget */}
                            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100 space-y-3.5">
                              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Write feedback & review</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div className="space-y-1.5">
                                  <label className="text-[9px] font-extrabold text-slate-400 block uppercase">Name</label>
                                  <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    value={newReviewUser}
                                    onChange={(e) => setNewReviewUser(e.target.value)}
                                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                  />
                                </div>
                                <div className="space-y-1.5">
                                  <label className="text-[9px] font-extrabold text-slate-400 block uppercase">Rating</label>
                                  <select 
                                    value={newReviewRating}
                                    onChange={(e) => setNewReviewRating(Number(e.target.value))}
                                    className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                  >
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="2">2 Stars</option>
                                    <option value="1">1 Star</option>
                                  </select>
                                </div>
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[9px] font-extrabold text-slate-400 block uppercase">Comment</label>
                                <textarea 
                                  rows={2}
                                  placeholder="What dishes did you try? How was the service?"
                                  value={newReviewText}
                                  onChange={(e) => setNewReviewText(e.target.value)}
                                  className="w-full px-3 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] resize-none"
                                />
                              </div>
                              <button
                                onClick={() => {
                                  if (!newReviewUser.trim() || !newReviewText.trim()) {
                                    alert("Please fill in your name and comment.");
                                    return;
                                  }
                                  submitReview(selectedOpp.id);
                                }}
                                className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 border-none font-bold"
                              >
                                Submit Feedback
                              </button>
                            </div>
                          </div>

                          {/* Related Restaurants */}
                          <div className="space-y-4">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest text-left font-sans">Similar Restaurants Nearby</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                              {opportunities
                                .filter(o => o.type === 'food' && o.id !== selectedOpp.id)
                                .map((rest) => (
                                  <motion.div
                                    key={rest.id}
                                    whileHover={{ y: -3 }}
                                    onClick={() => setSelectedOpp(rest)}
                                    className="bg-white border border-[#E2E8F0] p-5 rounded-[24px] shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer relative group animate-fade-in"
                                  >
                                    <div className="space-y-2.5">
                                      <div className="flex justify-between items-center">
                                        <span className="px-2 py-0.5 bg-orange-50 text-[#F97316] border border-orange-100 rounded-full text-[8px] font-black uppercase tracking-wider font-extrabold">
                                          ★ {rest.rating}
                                        </span>
                                        <span className="text-[9px] text-[#06B6D4] font-black uppercase tracking-wider">{rest.offer}</span>
                                      </div>
                                      <h4 className="text-xs font-extrabold text-slate-800 group-hover:text-[#2563EB] transition-colors">{rest.organizer}</h4>
                                      <p className="text-[11px] text-slate-500 font-semibold line-clamp-2 leading-relaxed">{rest.detail}</p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                                      <span className="text-[9px] font-black uppercase text-slate-400">Scan Range</span>
                                      <span className="text-xs font-black text-slate-500">{rest.distance}</span>
                                    </div>
                                  </motion.div>
                                ))}
                            </div>
                          </div>

                        </div>

                        {/* RIGHT COLUMN (1/3 width) - Reservation Engine */}
                        <div className="space-y-8 text-left">
                          
                          {/* Premium Reservation Widget */}
                          <div className="bg-white border border-[#E2E8F0] p-6 rounded-[24px] shadow-sm space-y-5">
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Reserve a Table</h3>

                            {/* Show Confirmation Card if reserved */}
                            {reservedRestaurants.has(selectedOpp.id) ? (
                              <div className="space-y-4">
                                {isRescheduling ? (
                                  <div className="space-y-4 p-4 bg-blue-50/30 border border-blue-150 rounded-2xl text-left">
                                    <h4 className="text-xs font-black text-blue-800 uppercase tracking-wider font-extrabold">Reschedule Reservation</h4>
                                    
                                    {/* Reschedule Date Selector */}
                                    <div className="space-y-1.5">
                                      <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">New Date</label>
                                      <input 
                                        type="date"
                                        value={reserveDate}
                                        onChange={(e) => setReserveDate(e.target.value)}
                                        className="w-full px-3 py-2 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                      />
                                    </div>

                                    {/* Reschedule Time Selector */}
                                    <div className="space-y-1.5">
                                      <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">New Time Slot</label>
                                      <div className="grid grid-cols-3 gap-1.5">
                                        {['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map(t => (
                                          <button
                                            key={t}
                                            type="button"
                                            onClick={() => setSelectedTimeSlot(t)}
                                            className={`py-1.5 rounded-lg text-[9px] font-bold border transition-all cursor-pointer ${
                                              selectedTimeSlot === t
                                                ? 'bg-blue-50 text-[#2563EB] border-blue-200 shadow-sm font-extrabold'
                                                : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                                            }`}
                                          >
                                            {t}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                      <button 
                                        type="button"
                                        onClick={() => setIsRescheduling(false)}
                                        className="flex-1 py-2 border border-slate-200 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all bg-white"
                                      >
                                        Back
                                      </button>
                                      <button 
                                        type="button"
                                        onClick={() => rescheduleReservation(selectedOpp.id, reserveDate, selectedTimeSlot)}
                                        className="flex-1 py-2 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border-none font-bold"
                                      >
                                        Confirm
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex flex-col gap-3">
                                      <div className="flex items-center space-x-3">
                                        <span className="text-2xl">🎟️</span>
                                        <div className="text-left min-w-0">
                                          <p className="text-xs font-black text-emerald-800 uppercase tracking-wider font-extrabold">Booking Confirmed</p>
                                          <p className="text-[10px] text-emerald-600 mt-1 font-semibold leading-relaxed">
                                            Guest: {reserveName || 'Aishwarya'} <br />
                                            Phone: {reservePhone || '+91 98765 43210'} <br />
                                            Date: {reserveDate} <br />
                                            Time: {reservedRestaurants.get(selectedOpp.id).time} <br />
                                            Guests: {reservedRestaurants.get(selectedOpp.id).seats} Guests ({reservedRestaurants.get(selectedOpp.id).seating || 'Indoor Booth'})
                                          </p>
                                          {reserveRequests && (
                                            <p className="text-[9px] text-slate-400 mt-1.5 leading-snug truncate">
                                              Requests: "{reserveRequests}"
                                            </p>
                                          )}
                                        </div>
                                      </div>
                                      <span className="text-[9px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-center font-bold">
                                        Active Reservation
                                      </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                      <button 
                                        type="button"
                                        onClick={() => {
                                          const current = reservedRestaurants.get(selectedOpp.id);
                                          if (current) {
                                            setSelectedTimeSlot(current.time);
                                            setSelectedSeats(current.seats);
                                            setSelectedSeating(current.seating);
                                          }
                                          setIsRescheduling(true);
                                        }}
                                        className="w-full py-3 border border-blue-200 hover:bg-blue-50 text-[#2563EB] rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 text-center bg-white font-bold"
                                      >
                                        Reschedule Booking
                                      </button>
                                      <button 
                                        type="button"
                                        onClick={() => cancelReservation(selectedOpp.id)}
                                        className="w-full py-3 border border-rose-200 hover:bg-rose-50 text-rose-600 rounded-2xl text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 text-center bg-white font-bold"
                                      >
                                        Cancel Reservation
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            ) : (
                              <div className="space-y-4">
                                
                                {/* Guest Stepper */}
                                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                  <span className="font-bold text-xs text-slate-700">Guests Count</span>
                                  <div className="flex items-center space-x-3 font-extrabold text-xs">
                                    <button 
                                      type="button"
                                      onClick={() => setSelectedSeats(prev => Math.max(1, prev - 1))}
                                      className="w-6.5 h-6.5 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-350 cursor-pointer"
                                    >
                                      -
                                    </button>
                                    <span className="text-slate-800">{selectedSeats} Guests</span>
                                    <button 
                                      type="button"
                                      onClick={() => setSelectedSeats(prev => Math.min(8, prev + 1))}
                                      className="w-6.5 h-6.5 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-350 cursor-pointer"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>

                                {/* Seating Selector */}
                                <div className="space-y-1.5">
                                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Seating Area</label>
                                  <div className="grid grid-cols-2 gap-2">
                                    {[
                                      { name: 'Indoor Booth', icon: '🛋️' },
                                      { name: 'Rooftop Lounge', icon: '🌇' },
                                      { name: 'Private Dining', icon: '🍷' },
                                      { name: 'Garden Area', icon: '🌿' }
                                    ].map(area => (
                                      <button
                                        key={area.name}
                                        type="button"
                                        onClick={() => setSelectedSeating(area.name)}
                                        className={`py-2 px-2.5 rounded-xl text-[10px] font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                                          selectedSeating === area.name
                                            ? 'bg-orange-50 text-[#F97316] border-orange-200 shadow-sm font-extrabold'
                                            : 'bg-white text-slate-500 border-slate-205 hover:border-slate-350 font-semibold'
                                        }`}
                                      >
                                        <span>{area.icon}</span>
                                        <span>{area.name}</span>
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Date Selector */}
                                <div className="space-y-1.5">
                                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Select Date</label>
                                  <input 
                                    type="date"
                                    value={reserveDate}
                                    onChange={(e) => setReserveDate(e.target.value)}
                                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                  />
                                </div>

                                {/* Time Slots Selection */}
                                <div className="space-y-1.5">
                                  <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Available Time Slots</label>
                                  <div className="grid grid-cols-3 gap-2">
                                    {['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map(t => (
                                      <button
                                        key={t}
                                        type="button"
                                        onClick={() => setSelectedTimeSlot(t)}
                                        className={`py-2 rounded-xl text-[10px] font-bold border transition-all cursor-pointer ${
                                          selectedTimeSlot === t
                                            ? 'bg-blue-50 text-[#2563EB] border-blue-200 shadow-sm font-extrabold'
                                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 font-semibold'
                                        }`}
                                      >
                                        {t}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                  <div className="space-y-1.5">
                                    <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Full Name</label>
                                    <input 
                                      type="text" 
                                      placeholder="e.g. Aishwarya" 
                                      value={reserveName}
                                      onChange={(e) => setReserveName(e.target.value)}
                                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                    />
                                  </div>

                                  <div className="space-y-1.5">
                                    <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Mobile Number</label>
                                    <input 
                                      type="tel" 
                                      placeholder="e.g. +91 98765 43210" 
                                      value={reservePhone}
                                      onChange={(e) => setReservePhone(e.target.value)}
                                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB]"
                                    />
                                  </div>

                                  <div className="space-y-1.5">
                                    <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block">Special Requests (Optional)</label>
                                    <textarea 
                                      rows={2}
                                      placeholder="e.g. Window table, vegetarian menu, birthday celebration..." 
                                      value={reserveRequests}
                                      onChange={(e) => setReserveRequests(e.target.value)}
                                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#2563EB] resize-none"
                                    />
                                  </div>
                                </div>

                                {/* Confirmation Trigger */}
                                <button
                                  type="button"
                                  disabled={!selectedTimeSlot || !reserveName.trim() || !reservePhone.trim()}
                                  onClick={() => {
                                    executeReserveTable(selectedOpp.id);
                                  }}
                                  className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md active:scale-95 font-bold uppercase border-none"
                                >
                                  Reserve Table
                                </button>
                              </div>
                            )}

                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification Banner */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-[9999] px-5 py-3.5 rounded-2xl shadow-xl flex items-center space-x-3 text-xs font-black uppercase tracking-wider text-white ${
              toast.type === 'error' ? 'bg-rose-600' :
              toast.type === 'warning' ? 'bg-amber-500' :
              toast.type === 'info' ? 'bg-blue-600' :
              'bg-emerald-600'
            }`}
          >
            <span>{
              toast.type === 'error' ? '❌' :
              toast.type === 'warning' ? '⚠️' :
              toast.type === 'info' ? 'ℹ️' :
              '✓'
            }</span>
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
