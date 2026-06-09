import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Liam Vance',
      role: 'Computer Science Student',
      text: 'Nearify is incredible. I discovered a local AI hackathon just 1 km away, built a prototype, and actually landed a paid internship offer on the spot. Highly recommended!',
      rating: 5,
      avatarBg: 'bg-blue-50 text-primary-theme border-blue-100',
      initials: 'LV',
    },
    {
      name: 'Sofia Martinez',
      role: 'Junior UI/UX Designer',
      text: 'As a student, I need quiet study spaces and cheap coffee. Nearify mapped out three local library co-working spaces and student BOGO food deals instantly.',
      rating: 5,
      avatarBg: 'bg-indigo-50 text-secondary-theme border-indigo-100',
      initials: 'SM',
    },
    {
      name: 'Marcus Brody',
      role: 'Tech Recruiter @ Stripe',
      text: 'We index our local internships on Nearify. The applicant pool has been outstandingly local and hyper-focused. It bridges the gap between campus talent and office hubs.',
      rating: 5,
      avatarBg: 'bg-cyan-50 text-accent-theme border-cyan-100',
      initials: 'MB',
    },
    {
      name: 'Clara Reynolds',
      role: 'Full Stack Developer',
      text: 'Finding workshops that fit my curriculum used to take hours. Nearify aggregates everything within walking distance. Saved me so much research time!',
      rating: 5,
      avatarBg: 'bg-blue-50 text-primary-theme border-blue-100',
      initials: 'CR',
    },
    {
      name: 'Dave Patel',
      role: 'Community Builder',
      text: 'I promoted our local campus Hackathon on Nearify and got over 150 local sign-ups in 2 days. The location intelligence works flawlessly.',
      rating: 5,
      avatarBg: 'bg-indigo-50 text-secondary-theme border-indigo-100',
      initials: 'DP',
    },
  ];

  // Duplicate list to create a seamless infinite marquee effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Background soft gradients */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary-theme/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary-theme/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-theme/10 text-xs font-semibold text-primary-theme uppercase tracking-wider mb-4">
            <span>Career Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#0F172A] mb-4">
            Student & Recruiter Success
          </h2>
          <p className="text-[#64748B] font-normal text-base sm:text-lg">
            Hear from students, recruiters, and developers using Nearify to discover opportunities.
          </p>
        </div>
      </div>

      {/* Auto-Scrolling Marquee Container */}
      <div className="w-full overflow-hidden relative py-4 mask-gradient">
        {/* Masking overlays to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee hover:[animation-play-state:paused] flex">
          {duplicatedReviews.map((rev, idx) => (
            <div
              key={idx}
              className="w-[360px] md:w-[400px] shrink-0 mx-4 bg-white border border-[#E2E8F0] p-8 rounded-2xl relative flex flex-col justify-between hover:shadow-md hover:border-primary-theme/10 transition-all duration-300"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-[#E2E8F0] opacity-35">
                <Quote className="h-8 w-8 stroke-[1.5]" />
              </div>

              {/* Review Copy */}
              <div className="mb-8 relative z-10 text-left">
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary-theme fill-primary-theme" />
                  ))}
                </div>
                <p className="text-[#0F172A] font-normal text-sm sm:text-base leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center space-x-3.5 border-t border-[#E2E8F0] pt-5">
                <div className={`h-10 w-10 rounded-lg ${rev.avatarBg} border flex items-center justify-center text-sm font-bold shadow-sm shrink-0`}>
                  {rev.initials}
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-bold text-[#0F172A] tracking-wide">{rev.name}</h4>
                  <p className="text-[11px] text-[#64748B] font-normal mt-0.5">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
