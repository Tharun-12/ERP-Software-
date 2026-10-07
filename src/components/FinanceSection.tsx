// import { motion } from 'framer-motion';
// import { Banknote, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';
// import { SectionWrap, Container } from './primitives';
// import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

// const metrics = [
//   { label: 'Revenue', value: '₹48,75,000', icon: TrendingUp, tone: 'text-emerald-600 bg-emerald-50', trend: '+18%' },
//   { label: 'Expenses', value: '₹8,75,000', icon: TrendingDown, tone: 'text-amber-600 bg-amber-50', trend: '-4%' },
//   { label: 'Profit', value: '₹7,82,000', icon: Wallet, tone: 'text-brand-600 bg-brand-50', trend: '+24%' },
//   { label: 'Cash Flow', value: '₹12,40,000', icon: Banknote, tone: 'text-accent-600 bg-accent-400/10', trend: '+9%' },
// ];

// const flowData = [30, 45, 38, 55, 48, 62, 58, 72, 68, 80, 75, 88];

// export default function FinanceSection() {
//   return (
//     <SectionWrap>
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* left: content */}
//           <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-5 order-2 lg:order-1">
//             <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
//               Finance & Accounting
//             </motion.span>
//             <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance">
//               Take Complete Control of Your Finances.
//             </motion.h2>
//             <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
//               Manage accounts, expenses, budgets, cash flow and financial statements from one centralized platform.
//             </motion.p>

//             <motion.div variants={staggerParent} className="mt-3 grid grid-cols-2 gap-3">
//               {metrics.map((m) => (
//                 <motion.div
//                   key={m.label}
//                   variants={staggerChild}
//                   className="rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-shadow hover:shadow-card"
//                 >
//                   <div className="mb-2 flex items-center justify-between">
//                     <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.tone}`}>
//                       <m.icon className="h-4 w-4" />
//                     </span>
//                     <span className={`flex items-center gap-0.5 text-xs font-semibold ${m.trend.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'}`}>
//                       {m.trend}
//                     </span>
//                   </div>
//                   <div className="font-display text-lg font-bold text-ink-900">{m.value}</div>
//                   <div className="text-xs text-ink-400">{m.label}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* right: dashboard */}
//           <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 lg:order-2">
//             <div className="rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium">
//               <div className="mb-4 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
//                     <BarChart3 className="h-4 w-4" />
//                   </span>
//                   <h3 className="font-display text-base font-bold text-ink-900">Financial Summary</h3>
//                 </div>
//                 <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">FY 2025-26</span>
//               </div>

//               {/* cash flow chart */}
//               <div className="rounded-xl border border-ink-100 bg-ink-50/40 p-4">
//                 <div className="mb-2 flex items-center justify-between">
//                   <span className="text-sm font-semibold text-ink-700">Cash Flow Trend</span>
//                   <div className="flex items-center gap-3 text-[11px]">
//                     <span className="flex items-center gap-1 text-ink-400">
//                       <span className="h-2 w-2 rounded-full bg-brand-500" /> Inflow
//                     </span>
//                     <span className="flex items-center gap-1 text-ink-400">
//                       <span className="h-2 w-2 rounded-full bg-accent-400" /> Outflow
//                     </span>
//                   </div>
//                 </div>
//                 <svg viewBox="0 0 320 120" className="h-28 w-full">
//                   <defs>
//                     <linearGradient id="cf-grad" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
//                       <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
//                     </linearGradient>
//                   </defs>
//                   <motion.path
//                     d={areaPath(flowData, 320, 120)}
//                     fill="url(#cf-grad)"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.8 }}
//                   />
//                   <motion.path
//                     d={linePath(flowData, 320, 120)}
//                     fill="none"
//                     stroke="#2563eb"
//                     strokeWidth="2.5"
//                     strokeLinecap="round"
//                     initial={{ pathLength: 0 }}
//                     whileInView={{ pathLength: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 1.2, ease: 'easeInOut' }}
//                   />
//                 </svg>
//               </div>

//               {/* mini summary */}
//               <div className="mt-4 grid grid-cols-3 gap-3">
//                 {[
//                   { label: 'Total Income', value: '₹48.7L', icon: ArrowUpRight, tone: 'text-emerald-600' },
//                   { label: 'Total Expense', value: '₹8.7L', icon: ArrowDownRight, tone: 'text-amber-600' },
//                   { label: 'Net Profit', value: '₹7.8L', icon: TrendingUp, tone: 'text-brand-600' },
//                 ].map((s) => (
//                   <div key={s.label} className="rounded-lg border border-ink-100 bg-white p-3 text-center">
//                     <s.icon className={`mx-auto mb-1 h-4 w-4 ${s.tone}`} />
//                     <div className="font-display text-sm font-bold text-ink-900">{s.value}</div>
//                     <div className="text-[10px] text-ink-400">{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </Container>
//     </SectionWrap>
//   );
// }

// function linePath(data: number[], w: number, h: number) {
//   const max = Math.max(...data);
//   const step = w / (data.length - 1);
//   return data
//     .map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (d / max) * (h - 10) - 5}`)
//     .join(' ');
// }

// function areaPath(data: number[], w: number, h: number) {
//   return `${linePath(data, w, h)} L ${w} ${h} L 0 ${h} Z`;
// }



import { motion } from 'framer-motion';
import { Banknote, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';
import { SectionWrap, Container } from './primitives';
import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

const metrics = [
  { label: 'Revenue', value: '₹48,75,000', icon: TrendingUp, tone: 'text-emerald-600 bg-emerald-50 ring-emerald-100', trend: '+18%' },
  { label: 'Expenses', value: '₹8,75,000', icon: TrendingDown, tone: 'text-amber-600 bg-amber-50 ring-amber-100', trend: '-4%' },
  { label: 'Profit', value: '₹7,82,000', icon: Wallet, tone: 'text-brand-600 bg-brand-50 ring-brand-100', trend: '+24%' },
  { label: 'Cash Flow', value: '₹12,40,000', icon: Banknote, tone: 'text-accent-600 bg-accent-400/10 ring-accent-400/20', trend: '+9%' },
];

const flowData = [30, 45, 38, 55, 48, 62, 58, 72, 68, 80, 75, 88];

export default function FinanceSection() {
  return (
    <SectionWrap className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: content */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5 order-2 lg:order-1"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Finance &amp; Accounting
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance"
            >
              Take Complete Control of{' '}
              <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
                Your Finances.
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
              Manage accounts, expenses, budgets, cash flow and financial statements from one centralized platform.
            </motion.p>

            <motion.div variants={staggerParent} className="mt-3 grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={staggerChild}
                  className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-premium"
                >
                  {/* hover accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="mb-2 flex items-center justify-between">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${m.tone}`}>
                      <m.icon className="h-4 w-4" />
                    </span>
                    <span
                      className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-bold ${
                        m.trend.startsWith('+')
                          ? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100'
                          : 'bg-amber-50 text-amber-600 ring-1 ring-amber-100'
                      }`}
                    >
                      {m.trend}
                    </span>
                  </div>
                  <div className="font-display text-lg font-bold text-ink-900">{m.value}</div>
                  <div className="text-xs text-ink-400">{m.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* right: dashboard */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="order-1 lg:order-2"
          >
            <div className="group relative rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
              {/* gradient hairline top */}
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">Financial Summary</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                  FY 2025-26
                </span>
              </div>

              {/* cash flow chart */}
              <div className="rounded-xl border border-ink-100 bg-ink-50/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-700">Cash Flow Trend</span>
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className="flex items-center gap-1 text-ink-400">
                      <span className="h-2 w-2 rounded-full bg-brand-500" /> Inflow
                    </span>
                    <span className="flex items-center gap-1 text-ink-400">
                      <span className="h-2 w-2 rounded-full bg-accent-400" /> Outflow
                    </span>
                  </div>
                </div>
                <svg viewBox="0 0 320 120" className="h-28 w-full">
                  <defs>
                    <linearGradient id="cf-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cf-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  {/* horizontal grid lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      x2="320"
                      y1={10 + i * 30}
                      y2={10 + i * 30}
                      stroke="currentColor"
                      className="text-ink-100"
                      strokeWidth="1"
                      strokeDasharray="3 5"
                    />
                  ))}

                  <motion.path
                    d={areaPath(flowData, 320, 120)}
                    fill="url(#cf-grad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.path
                    d={linePath(flowData, 320, 120)}
                    fill="none"
                    stroke="url(#cf-line)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                  {/* end dot */}
                  <motion.circle
                    cx={320}
                    cy={120 - (flowData[flowData.length - 1] / Math.max(...flowData)) * (120 - 10) - 5}
                    r="3.5"
                    fill="#10b981"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                </svg>
              </div>

              {/* mini summary */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Total Income', value: '₹48.7L', icon: ArrowUpRight, tone: 'text-emerald-600', bg: 'bg-emerald-50 ring-emerald-100' },
                  { label: 'Total Expense', value: '₹8.7L', icon: ArrowDownRight, tone: 'text-amber-600', bg: 'bg-amber-50 ring-amber-100' },
                  { label: 'Net Profit', value: '₹7.8L', icon: TrendingUp, tone: 'text-brand-600', bg: 'bg-brand-50 ring-brand-100' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="group/mini rounded-lg border border-ink-100 bg-white p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-soft"
                  >
                    <span className={`mx-auto mb-1.5 flex h-6 w-6 items-center justify-center rounded-md ring-1 ${s.bg}`}>
                      <s.icon className={`h-3.5 w-3.5 ${s.tone}`} />
                    </span>
                    <div className="font-display text-sm font-bold text-ink-900">{s.value}</div>
                    <div className="text-[10px] text-ink-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}

function linePath(data: number[], w: number, h: number) {
  const max = Math.max(...data);
  const step = w / (data.length - 1);
  return data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (d / max) * (h - 10) - 5}`)
    .join(' ');
}

function areaPath(data: number[], w: number, h: number) {
  return `${linePath(data, w, h)} L ${w} ${h} L 0 ${h} Z`;
}