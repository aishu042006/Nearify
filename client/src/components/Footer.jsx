import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Opportunities', href: '#opportunities' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Live Demo', href: '#demo' },
  ];

  const opportunitiesLinks = [
    { name: 'Tech Internships', href: '#opportunities' },
    { name: 'Coding Hackathons', href: '#opportunities' },
    { name: 'React Workshops', href: '#opportunities' },
    { name: 'Student Discounts', href: '#opportunities' },
  ];

  return (
    <footer id="contact" className="bg-[#F8FAFC] border-t border-[#E2E8F0] pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-theme/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Bio */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#home" className="group w-max block">
              <Logo variant="full" />
            </a>
            <p className="text-sm text-[#64748B] leading-relaxed font-normal">
              Bridging the gap between you and local opportunities. Find CS internships, coding hackathons, technical workshops, and local restaurant discounts right around your campus.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-primary-theme hover:bg-blue-50/20 hover:border-primary-theme/20 transition-all" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-primary-theme hover:bg-blue-50/20 hover:border-primary-theme/20 transition-all" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-primary-theme hover:bg-blue-50/20 hover:border-primary-theme/20 transition-all" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-primary-theme hover:bg-blue-50/20 hover:border-primary-theme/20 transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">Explore</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opportunities Column */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">Opportunities</h4>
            <ul className="space-y-2.5">
              {opportunitiesLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-[#64748B] hover:text-[#0F172A] transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#64748B] font-normal">
              <li className="flex items-start space-x-2.5">
                <MapPin className="h-4.5 w-4.5 text-primary-theme flex-shrink-0 mt-0.5" />
                <span>100 Innovation Way, Suite 400, Tech City, TC 90210</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4.5 w-4.5 text-primary-theme flex-shrink-0" />
                <span>+1 (800) 555-NEAR</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4.5 w-4.5 text-primary-theme flex-shrink-0" />
                <a href="mailto:support@nearify.io" className="hover:text-[#0F172A] transition-colors">
                  support@nearify.io
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator and Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Nearify Inc. All rights reserved.
          </p>
          
          {/* Brand Quote */}
          <div className="text-center md:text-right">
            <p className="text-xs italic text-[#64748B]">
              "Every opportunity starts with discovery."
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2 text-xs text-[#64748B]">
              <a href="#" className="hover:text-[#0F172A]">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0F172A]">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
