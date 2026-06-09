import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Calendar, Percent } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom animated counter component using requestAnimationFrame
function Counter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const rate = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeRate = rate * (2 - rate);
      const currentCount = Math.floor(easeRate * (end - start) + start);
      
      setCount(currentCount);

      if (rate < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="font-sans">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Briefcase,
      target: 1000,
      suffix: "+",
      label: "Opportunities",
      color: "text-primary-theme",
      bgGlow: "bg-blue-50 border-blue-100",
    },
    {
      icon: Calendar,
      target: 500,
      suffix: "+",
      label: "Events",
      color: "text-secondary-theme",
      bgGlow: "bg-indigo-50 border-indigo-100",
    },
    {
      icon: Percent,
      target: 200,
      suffix: "+",
      label: "Food Offers",
      color: "text-accent-theme",
      bgGlow: "bg-cyan-50 border-cyan-100",
    },
    {
      icon: Users,
      target: 50,
      suffix: "+",
      label: "Partner Communities",
      color: "text-primary-theme",
      bgGlow: "bg-blue-50 border-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Background soft grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className={`p-3 rounded-xl ${stat.bgGlow} ${stat.color} mb-4 border`}>
                  <Icon className="h-5.5 w-5.5" />
                </div>
                {/* Count */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#0F172A] tracking-tight">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                {/* Label */}
                <span className="text-[10px] sm:text-xs font-bold text-[#64748B] mt-2.5 uppercase tracking-wider leading-none">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
