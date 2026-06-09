import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OpportunitiesSection from './components/OpportunitiesSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import LiveDemoSection from './components/LiveDemoSection';
import TestimonialsSection from './components/TestimonialsSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

const AuthPage = React.lazy(() => import('./pages/AuthPage'));
const OnboardingPage = React.lazy(() => import('./pages/OnboardingPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const EventDetailsPage = React.lazy(() => import('./pages/EventDetailsPage'));

function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col min-h-screen"
    >
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <HeroSection />
        <OpportunitiesSection />
        <FeaturesSection />
        <HowItWorksSection />
        <LiveDemoSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col items-center justify-center space-y-4">
      <div className="h-10 w-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xs font-black text-slate-800 uppercase tracking-widest animate-pulse">Loading Nearify...</p>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-bg-theme min-h-screen text-text-theme flex flex-col font-sans selection:bg-primary-theme/10 selection:text-primary-theme transition-colors duration-300">
      <AnimatePresence mode="wait">
        <React.Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route 
              path="/onboarding" 
              element={
                <ProtectedRoute allowOnboardingIncomplete={true}>
                  <OnboardingPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/event/:id" 
              element={
                <ProtectedRoute>
                  <EventDetailsPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </React.Suspense>
      </AnimatePresence>
    </div>
  );
}
