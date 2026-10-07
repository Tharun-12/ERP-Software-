import { motion } from 'framer-motion';
import {
  Package,
  ShoppingCart,
  Banknote,
  Users,
  BarChart3,
  Receipt,
  TrendingUp,
  Layers,
} from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { modules } from '@/lib/data';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/anim';

const moduleIcons: Record<string, typeof Package> = {
  Inventory: Package,
  Sales: ShoppingCart,
  Purchase: ShoppingCart,
  Finance: Banknote,
  'HR & Payroll': Users,
  Reports: BarChart3,
  Billing: Receipt,
  Analytics: TrendingUp,
};

export default function BusinessModules() {
  const positions = [
    { top: '4%', left: '50%', label: 'top' },
    { top: '22%', left: '88%', label: 'top-right' },
    { top: '62%', left: '92%', label: 'bottom-right' },
    { top: '90%', left: '50%', label: 'bottom' },
    { top: '62%', left: '8%', label: 'bottom-left' },
    { top: '22%', left: '12%', label: 'top-left' },
    { top: '8%', left: '78%', label: 'far-top-right' },
    { top: '8%', left: '22%', label: 'far-top-left' },
  ];

  return (
    <SectionWrap id="modules" dark className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="Complete Business Management"
          title="One ERP. Every Department."
          desc="All your business modules connected through a single centralized platform — working together in real time."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto mt-16 h-[460px] max-w-4xl sm:h-[520px]"
        >
          {/* connection lines */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {positions.map((p, i) => {
              const cx = 50;
              const cy = 50;
              return (
                <line
                  key={i}
                  x1={`${cx}%`}
                  y1={`${cy}%`}
                  x2={p.left}
                  y2={p.top}
                  stroke="url(#line-grad)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  className="opacity-60"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="24"
                    to="0"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </svg>

          {/* center node */}
          <motion.div
            variants={fadeUp}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-center shadow-glow sm:h-36 sm:w-36">
              <div className="absolute inset-0 rounded-full bg-brand-500/30" style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
              <div className="relative">
                <Layers className="mx-auto mb-1 h-6 w-6 text-white sm:h-7 sm:w-7" />
                <span className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
                  iiiQBets<br />ERP
                </span>
              </div>
            </div>
          </motion.div>

          {/* module nodes */}
          {modules.map((m, i) => {
            const Icon = moduleIcons[m] ?? Package;
            const pos = positions[i];
            return (
              <motion.div
                key={m}
                variants={fadeUp}
                className="absolute z-20"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="group flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-300 backdrop-blur-md transition-all duration-300 hover:border-brand-400/40 hover:bg-brand-500/15 hover:text-brand-200 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <span className="whitespace-nowrap text-[11px] font-semibold text-ink-200 sm:text-xs">{m}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrap>
  );
}
