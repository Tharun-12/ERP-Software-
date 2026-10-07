// import { motion } from 'framer-motion';
// import {
//   Package,
//   ShoppingCart,
//   Banknote,
//   Users,
//   BarChart3,
//   Receipt,
//   TrendingUp,
//   Layers,
// } from 'lucide-react';
// import { SectionWrap, Container, SectionHeading } from './primitives';
// import { modules } from '@/lib/data';
// import { fadeUp, staggerParent, viewportOnce } from '@/lib/anim';

// const moduleIcons: Record<string, typeof Package> = {
//   Inventory: Package,
//   Sales: ShoppingCart,
//   Purchase: ShoppingCart,
//   Finance: Banknote,
//   'HR & Payroll': Users,
//   Reports: BarChart3,
//   Billing: Receipt,
//   Analytics: TrendingUp,
// };

// export default function BusinessModules() {
//   const positions = [
//     { top: '4%', left: '50%', label: 'top' },
//     { top: '22%', left: '88%', label: 'top-right' },
//     { top: '62%', left: '92%', label: 'bottom-right' },
//     { top: '90%', left: '50%', label: 'bottom' },
//     { top: '62%', left: '8%', label: 'bottom-left' },
//     { top: '22%', left: '12%', label: 'top-left' },
//     { top: '8%', left: '78%', label: 'far-top-right' },
//     { top: '8%', left: '22%', label: 'far-top-left' },
//   ];

//   return (
//     <SectionWrap id="modules" dark className="overflow-hidden">
//       <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden />
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-3xl" aria-hidden />

//       <Container className="relative">
//         <SectionHeading
//           dark
//           eyebrow="Complete Business Management"
//           title="One ERP. Every Department."
//           desc="All your business modules connected through a single centralized platform — working together in real time."
//         />

//         <motion.div
//           variants={staggerParent}
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           className="relative mx-auto mt-16 h-[460px] max-w-4xl sm:h-[520px]"
//         >
//           {/* connection lines */}
//           <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden>
//             <defs>
//               <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
//                 <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
//                 <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
//               </linearGradient>
//             </defs>
//             {positions.map((p, i) => {
//               const cx = 50;
//               const cy = 50;
//               return (
//                 <line
//                   key={i}
//                   x1={`${cx}%`}
//                   y1={`${cy}%`}
//                   x2={p.left}
//                   y2={p.top}
//                   stroke="url(#line-grad)"
//                   strokeWidth="1.5"
//                   strokeDasharray="6 6"
//                   className="opacity-60"
//                 >
//                   <animate
//                     attributeName="stroke-dashoffset"
//                     from="24"
//                     to="0"
//                     dur="1.2s"
//                     repeatCount="indefinite"
//                   />
//                 </line>
//               );
//             })}
//           </svg>

//           {/* center node */}
//           <motion.div
//             variants={fadeUp}
//             className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
//           >
//             <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-center shadow-glow sm:h-36 sm:w-36">
//               <div className="absolute inset-0 rounded-full bg-brand-500/30" style={{ animation: 'pulse-ring 3s ease-out infinite' }} />
//               <div className="relative">
//                 <Layers className="mx-auto mb-1 h-6 w-6 text-white sm:h-7 sm:w-7" />
//                 <span className="font-display text-sm font-extrabold leading-tight text-white sm:text-base">
//                   iiiQBets<br />ERP
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* module nodes */}
//           {modules.map((m, i) => {
//             const Icon = moduleIcons[m] ?? Package;
//             const pos = positions[i];
//             return (
//               <motion.div
//                 key={m}
//                 variants={fadeUp}
//                 className="absolute z-20"
//                 style={{
//                   top: pos.top,
//                   left: pos.left,
//                   transform: 'translate(-50%, -50%)',
//                 }}
//               >
//                 <div className="group flex flex-col items-center gap-2">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-300 backdrop-blur-md transition-all duration-300 hover:border-brand-400/40 hover:bg-brand-500/15 hover:text-brand-200 sm:h-16 sm:w-16">
//                     <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
//                   </div>
//                   <span className="whitespace-nowrap text-[11px] font-semibold text-ink-200 sm:text-xs">{m}</span>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </Container>
//     </SectionWrap>
//   );
// }






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

const moduleAccents = [
  'from-cyan-500/20 to-blue-500/10 text-cyan-300 border-cyan-400/40 shadow-[0_0_20px_-4px_rgba(34,211,238,0.6)]',
  'from-violet-500/20 to-fuchsia-500/10 text-fuchsia-300 border-fuchsia-400/40 shadow-[0_0_20px_-4px_rgba(232,121,249,0.6)]',
  'from-emerald-500/20 to-teal-500/10 text-emerald-300 border-emerald-400/40 shadow-[0_0_20px_-4px_rgba(52,211,153,0.6)]',
  'from-amber-500/20 to-orange-500/10 text-amber-300 border-amber-400/40 shadow-[0_0_20px_-4px_rgba(251,191,36,0.6)]',
  'from-rose-500/20 to-pink-500/10 text-rose-300 border-rose-400/40 shadow-[0_0_20px_-4px_rgba(251,113,133,0.6)]',
  'from-sky-500/20 to-indigo-500/10 text-sky-300 border-sky-400/40 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]',
  'from-lime-500/20 to-green-500/10 text-lime-300 border-lime-400/40 shadow-[0_0_20px_-4px_rgba(163,230,53,0.6)]',
  'from-purple-500/20 to-violet-500/10 text-purple-300 border-purple-400/40 shadow-[0_0_20px_-4px_rgba(192,132,252,0.6)]',
];

// 8 nodes evenly distributed on a circle (angles in degrees, 0 = top)
const nodeLayout = [
  { angle: -90, radius: 0.92 }, // top
  { angle: -45, radius: 0.92 }, // top-right
  { angle: 0, radius: 0.92 },   // right
  { angle: 45, radius: 0.92 },  // bottom-right
  { angle: 90, radius: 0.92 },  // bottom
  { angle: 135, radius: 0.92 }, // bottom-left
  { angle: 180, radius: 0.92 }, // left
  { angle: -135, radius: 0.92 },// top-left
];

export default function BusinessModules() {
  return (
    <SectionWrap id="modules" dark className="overflow-hidden">
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px]"
        aria-hidden
      />

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
          className="relative mx-auto mt-16 aspect-square w-full max-w-[640px] sm:max-w-[720px]"
        >
          {/* ---------- SVG: lines + rings, all in 0..100 viewBox coords ---------- */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* faint concentric rings */}
            <circle cx="50" cy="50" r="20" fill="none" stroke="#3b82f6" strokeOpacity="0.12" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#3b82f6" strokeOpacity="0.10" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeOpacity="0.08" strokeWidth="0.2" />

            {/* connection lines from center to each node */}
            {nodeLayout.map((n, i) => {
              const rad = (n.angle * Math.PI) / 180;
              const r = 46 * n.radius;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  stroke="url(#line-grad)"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="4"
                    to="0"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </svg>

          {/* ---------- Rotating orbital rings ---------- */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/20"
            style={{ animation: 'spin-slow 24s linear infinite' }}
            aria-hidden
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/10"
            style={{ animation: 'spin-slow 36s linear infinite reverse' }}
            aria-hidden
          >
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_#e879f9]" />
          </div>

          {/* ---------- CENTER NODE (FIXED) ---------- */}
          {/* The outer div handles positioning, the motion.div handles animation. */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div variants={fadeUp}>
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 via-brand-600 to-brand-800 text-center shadow-[0_0_60px_-5px_rgba(59,130,246,0.8)] sm:h-36 sm:w-36">
                <div
                  className="absolute inset-0 rounded-full border border-brand-300/40"
                  style={{ animation: 'pulse-ring 3s ease-out infinite' }}
                />
                <div
                  className="absolute inset-0 rounded-full border border-brand-300/30"
                  style={{ animation: 'pulse-ring 3s ease-out infinite 1.5s' }}
                />
                <div className="absolute inset-1 rounded-full bg-gradient-to-b from-white/25 to-transparent" />
                <div className="relative">
                  <Layers className="mx-auto mb-1 h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] sm:h-8 sm:w-8" />
                  <span className="font-display text-sm font-extrabold leading-tight tracking-wide text-white sm:text-base">
                    iiiQBets
                    <br />
                    ERP
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ---------- MODULE NODES (FIXED) ---------- */}
          {modules.map((m, i) => {
            const Icon = moduleIcons[m] ?? Package;
            const accent = moduleAccents[i % moduleAccents.length];
            const node = nodeLayout[i % nodeLayout.length];
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + 46 * node.radius * Math.cos(rad);
            const y = 50 + 46 * node.radius * Math.sin(rad);

            return (
              // Positioned wrapper (no animation transform conflict)
              <div
                key={m}
                className="absolute z-30"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Animated child — free to use its own transform */}
                <motion.div variants={fadeUp} className="group">
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative">
                      <div className="absolute -inset-2 rounded-2xl bg-brand-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:bg-brand-500/40 group-hover:opacity-100" />
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:h-16 sm:w-16 ${accent}`}
                      >
                        <Icon className="h-6 w-6 drop-shadow-[0_0_6px_currentColor] sm:h-7 sm:w-7" />
                        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-current opacity-90 shadow-[0_0_8px_currentColor]" />
                      </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-slate-900/70 px-2.5 py-0.5 text-[11px] font-semibold text-ink-100 backdrop-blur-sm transition-colors duration-300 group-hover:border-white/25 group-hover:text-white sm:text-xs">
                      {m}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </Container>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes spin-slow {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </SectionWrap>
  );
}