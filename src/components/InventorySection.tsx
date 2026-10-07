// import { motion } from 'framer-motion';
// import { Package, AlertTriangle, Warehouse, ArrowRightLeft, IndianRupee, ArrowRight, CheckCircle2 } from 'lucide-react';
// import { SectionWrap, Container } from './primitives';
// import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

// const benefits = [
//   'Real-time stock tracking across all warehouses',
//   'Automatic low-stock alerts and reorder points',
//   'Batch and serial number tracking',
//   'Stock valuation and movement history',
// ];

// export default function InventorySection() {
//   return (
//     <SectionWrap className="bg-ink-50/50">
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* left: dashboard visualization */}
//           <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
//             <div className="rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium">
//               <div className="mb-4 flex items-center gap-2">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
//                   <Package className="h-4 w-4" />
//                 </span>
//                 <h3 className="font-display text-base font-bold text-ink-900">Inventory Dashboard</h3>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//                 {[
//                   { icon: Package, label: 'Current Stock', value: '1,284', tone: 'text-brand-600 bg-brand-50' },
//                   { icon: AlertTriangle, label: 'Low Stock', value: '23', tone: 'text-amber-600 bg-amber-50' },
//                   { icon: Warehouse, label: 'Warehouses', value: '5', tone: 'text-accent-600 bg-accent-400/10' },
//                 ].map((m) => (
//                   <div key={m.label} className="rounded-xl border border-ink-100 bg-white p-3 shadow-soft">
//                     <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${m.tone}`}>
//                       <m.icon className="h-4 w-4" />
//                     </span>
//                     <div className="font-display text-lg font-bold text-ink-900">{m.value}</div>
//                     <div className="text-[11px] text-ink-400">{m.label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* stock movement */}
//               <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
//                 <div className="mb-3 flex items-center gap-2">
//                   <ArrowRightLeft className="h-4 w-4 text-brand-600" />
//                   <span className="text-sm font-semibold text-ink-800">Stock Movement</span>
//                 </div>
//                 <div className="flex h-28 items-end justify-between gap-2">
//                   {[40, 65, 50, 80, 55, 72, 90, 60, 78, 85].map((h, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ height: 0 }}
//                       whileInView={{ height: `${h}%` }}
//                       viewport={{ once: true }}
//                       transition={{ delay: i * 0.05, duration: 0.5 }}
//                       className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-accent-400"
//                     />
//                   ))}
//                 </div>
//               </div>

//               {/* inventory value */}
//               <div className="mt-4 flex items-center justify-between rounded-xl border border-ink-100 bg-gradient-to-r from-brand-50 to-white p-4 shadow-soft">
//                 <div className="flex items-center gap-3">
//                   <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
//                     <IndianRupee className="h-5 w-5" />
//                   </span>
//                   <div>
//                     <div className="text-xs text-ink-400">Inventory Value</div>
//                     <div className="font-display text-xl font-bold text-ink-900">₹1,24,50,000</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">
//                   <ArrowRight className="h-3 w-3 -rotate-45" /> 12.4%
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* right: content */}
//           <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-5">
//             <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
//               Inventory Management
//             </motion.span>
//             <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance">
//               Know Your Inventory. At Every Moment.
//             </motion.h2>
//             <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
//               Track stock in real-time, manage warehouses, and maintain optimal inventory levels.
//             </motion.p>

//             <motion.ul variants={staggerParent} className="mt-2 flex flex-col gap-3">
//               {benefits.map((b) => (
//                 <motion.li key={b} variants={staggerChild} className="flex items-start gap-3">
//                   <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
//                   <span className="text-sm text-ink-600">{b}</span>
//                 </motion.li>
//               ))}
//             </motion.ul>

//             <motion.a
//               variants={fadeUp}
//               href="#features"
//               className="group mt-3 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700"
//             >
//               Explore Inventory
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//             </motion.a>
//           </motion.div>
//         </div>
//       </Container>
//     </SectionWrap>
//   );
// }


import { motion } from 'framer-motion';
import { Package, AlertTriangle, Warehouse, ArrowRightLeft, IndianRupee, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionWrap, Container } from './primitives';
import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

const benefits = [
  'Real-time stock tracking across all warehouses',
  'Automatic low-stock alerts and reorder points',
  'Batch and serial number tracking',
  'Stock valuation and movement history',
];

export default function InventorySection() {
  return (
    <SectionWrap className="relative overflow-hidden bg-ink-50/50">
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: dashboard visualization */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="group relative rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
              {/* gradient hairline top */}
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Package className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">Inventory Dashboard</h3>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-100">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: Package, label: 'Current Stock', value: '1,284', tone: 'text-brand-600 bg-brand-50 ring-brand-100' },
                  { icon: AlertTriangle, label: 'Low Stock', value: '23', tone: 'text-amber-600 bg-amber-50 ring-amber-100' },
                  { icon: Warehouse, label: 'Warehouses', value: '5', tone: 'text-accent-600 bg-accent-400/10 ring-accent-400/20' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-ink-100 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-premium"
                  >
                    <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ring-1 ${m.tone}`}>
                      <m.icon className="h-4 w-4" />
                    </span>
                    <div className="font-display text-lg font-bold text-ink-900">{m.value}</div>
                    <div className="text-[11px] text-ink-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* stock movement */}
              <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="h-4 w-4 text-brand-600" />
                    <span className="text-sm font-semibold text-ink-800">Stock Movement</span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-400">Last 10 days</span>
                </div>
                <div className="flex h-28 items-end justify-between gap-2">
                  {[40, 65, 50, 80, 55, 72, 90, 60, 78, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="group/bar relative flex-1 overflow-hidden rounded-t bg-gradient-to-t from-brand-500 to-accent-400 transition-all duration-300 hover:from-brand-600 hover:to-accent-500"
                    />
                  ))}
                </div>
              </div>

              {/* inventory value */}
              <div className="mt-4 flex items-center justify-between rounded-xl border border-ink-100 bg-gradient-to-r from-brand-50 to-white p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white shadow-glow ring-1 ring-brand-700/20">
                    <IndianRupee className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-ink-400">Inventory Value</div>
                    <div className="font-display text-xl font-bold text-ink-900">₹1,24,50,000</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                  <ArrowRight className="h-3 w-3 -rotate-45" /> 12.4%
                </div>
              </div>
            </div>
          </motion.div>

          {/* right: content */}
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-5">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Inventory Management
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance"
            >
              Know Your Inventory.{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                At Every Moment.
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
              Track stock in real-time, manage warehouses, and maintain optimal inventory levels.
            </motion.p>

            <motion.ul variants={staggerParent} className="mt-2 flex flex-col gap-3">
              {benefits.map((b) => (
                <motion.li
                  key={b}
                  variants={staggerChild}
                  className="group flex items-start gap-3 rounded-xl border border-transparent p-2 -m-2 transition-colors duration-300 hover:border-ink-100 hover:bg-white/60"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm text-ink-600">{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              variants={fadeUp}
              href="#features"
              className="group mt-3 inline-flex w-fit items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)]"
            >
              Explore Inventory
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}