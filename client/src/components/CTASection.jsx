import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden border-t border-[#E2E8F0]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-theme/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-10 sm:p-16 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden text-center"
        >
          {/* Soft Corner Orbs */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-theme/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-theme/5 rounded-full blur-2xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="inline-flex p-3.5 bg-white border border-[#E2E8F0] rounded-xl text-primary-theme mb-6 shadow-sm">
            <Compass className="h-6 w-6" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#0F172A] mb-5 leading-tight">
            Ready to Explore <br className="sm:hidden" />
            <span className="text-primary-theme">What's Around You?</span>
          </h2>

          {/* Subheading */}
          <p className="text-[#64748B] font-normal text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of users discovering better career roles, events, hackathons, and opportunities every day.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/login?mode=signup"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary-theme hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4.5 w-4.5" />
            </Link>
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
