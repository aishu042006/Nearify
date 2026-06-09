import React from 'react';

/**
 * Premium Startup Logo for Nearify
 * Concept: "N" + Location Pin / Compass representing discovery & navigation.
 */
export default function Logo({ variant = 'full', className = '' }) {
  // SVG Icon representing Location Pin + Compass Needle forming 'N'
  const Icon = () => (
    <svg
      className="h-6 w-6 select-none"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background shape */}
      <rect width="32" height="32" rx="9" fill="url(#logo-grad)" />
      
      {/* Location Pin border */}
      <path
        d="M16 6.5C12.13 6.5 9 9.63 9 13.5C9 18.5 16 25.5 16 25.5C16 25.5 23 18.5 23 13.5C23 9.63 19.87 6.5 16 6.5Z"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner geometric lines forming 'N' compass needle */}
      <path
        d="M13.5 16.5V11.5L18.5 16.5V11.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );

  const Monogram = () => (
    <svg
      className="h-6 w-6 select-none"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 22V10L22 22V10"
        stroke="url(#logo-grad-mono)"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-grad-mono" x1="10" y1="10" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === 'icon') {
    return <Icon />;
  }

  if (variant === 'monogram') {
    return <Monogram />;
  }

  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <Icon />
      <span className="text-xl font-bold font-display tracking-tight text-[#0F172A]">
        Near<span className="text-primary-theme">ify</span>
      </span>
    </div>
  );
}
