import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowOnboardingIncomplete = false }) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F1F5F9] flex flex-col items-center justify-center font-sans">
        <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />
        <span className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse">Verifying Session...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to onboarding if they haven't completed it yet
  if (user && !user.hasCompletedOnboarding && !allowOnboardingIncomplete) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
}
