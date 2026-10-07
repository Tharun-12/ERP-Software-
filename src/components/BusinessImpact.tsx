// import { motion } from 'framer-motion';
// import { X, Check, ArrowDown, Zap } from 'lucide-react';
// import { SectionWrap, Container, SectionHeading } from './primitives';
// import { beforeItems, afterItems } from '@/lib/data';
// import { staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

// export default function BusinessImpact() {
//   return (
//     <SectionWrap className="bg-ink-50/50">
//       <Container>
//         <SectionHeading
//           eyebrow="Business Impact"
//           title="See the Transformation"
//           desc="From scattered, manual processes to a centralized, automated business operation."
//         />

//         <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
//           {/* before */}
//           <motion.div
//             variants={staggerParent}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft"
//           >
//             <div className="mb-4 flex items-center gap-2">
//               <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//                 <X className="h-5 w-5" />
//               </span>
//               <h3 className="font-display text-lg font-bold text-ink-800">Before</h3>
//             </div>
//             <ul className="flex flex-col gap-3">
//               {beforeItems.map((item) => (
//                 <motion.li key={item} variants={staggerChild} className="flex items-center gap-3 text-sm text-ink-500">
//                   <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
//                     <X className="h-3.5 w-3.5" />
//                   </span>
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* arrow */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="flex items-center justify-center"
//           >
//             <div className="flex flex-col items-center gap-2">
//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
//                 <ArrowDown className="h-6 w-6 lg:rotate-[-90deg]" />
//               </span>
//               <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Transform</span>
//             </div>
//           </motion.div>

//           {/* after */}
//           <motion.div
//             variants={staggerParent}
//             initial="hidden"
//             whileInView="visible"
//             viewport={viewportOnce}
//             className="relative rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-800 p-6 shadow-premium text-white"
//           >
//             <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
//             <div className="relative mb-4 flex items-center gap-2">
//               <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
//                 <Zap className="h-5 w-5" />
//               </span>
//               <h3 className="font-display text-lg font-bold">With iiiQBets ERP</h3>
//             </div>
//             <ul className="relative flex flex-col gap-3">
//               {afterItems.map((item) => (
//                 <motion.li key={item} variants={staggerChild} className="flex items-center gap-3 text-sm text-ink-100">
//                   <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/15 text-emerald-300">
//                     <Check className="h-3.5 w-3.5" />
//                   </span>
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </Container>
//     </SectionWrap>
//   );
// }



import { motion } from 'framer-motion';
import {
  X,
  Check,
  ArrowRight,
  Zap,
  CircleCheck,
  TrendingUp,
} from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { beforeItems, afterItems } from '@/lib/data';
import {
  staggerChild,
  staggerParent,
  viewportOnce,
  fadeUp,
} from '@/lib/anim';

export default function BusinessImpact() {
  return (
    <SectionWrap className="relative overflow-hidden bg-ink-50/70">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-brand-200/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[5%] h-80 w-80 rounded-full bg-brand-300/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Business Impact"
          title="See the Transformation"
          desc="From scattered, manual processes to a centralized, automated business operation."
        />

        {/* Transformation visual */}
        <div className="relative mt-14">
          {/* Connecting line - desktop */}
          <div className="pointer-events-none absolute left-[25%] right-[25%] top-1/2 hidden h-px bg-gradient-to-r from-amber-200 via-brand-300 to-brand-500 lg:block" />

          <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_130px_1fr] lg:gap-8">
            {/* BEFORE CARD */}
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-6 shadow-[0_15px_50px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 to-orange-400" />

              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-8 ring-amber-50/50">
                    <X className="h-5 w-5" strokeWidth={2.5} />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600">
                      Current State
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink-900">
                      Before
                    </h3>
                  </div>
                </div>

                <span className="rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Manual
                </span>
              </div>

              <div className="mb-5 h-px bg-ink-100" />

              <ul className="flex flex-col gap-3">
                {beforeItems.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={staggerChild}
                    className="group/item flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition-all duration-200 hover:border-amber-100 hover:bg-amber-50/60"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-500 transition-transform duration-200 group-hover/item:scale-110">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>

                    <span className="text-sm leading-5 text-ink-600">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom status */}
              <div className="mt-6 flex items-center gap-2 rounded-xl bg-amber-50/70 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-xs font-semibold text-amber-700">
                  Slower. Scattered. Difficult to scale.
                </span>
              </div>
            </motion.div>

            {/* TRANSFORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative z-10 flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                {/* Desktop arrow */}
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(59,130,246,0)',
                      '0 0 0 10px rgba(59,130,246,0.08)',
                      '0 0 0 0 rgba(59,130,246,0)',
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 text-white shadow-xl"
                >
                  <ArrowRight className="h-7 w-7" />
                </motion.div>

                <div className="mt-3 rounded-full border border-brand-100 bg-white px-4 py-1.5 shadow-sm">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-600">
                    Transform
                  </span>
                </div>

                <p className="mt-2 hidden text-center text-[11px] leading-4 text-ink-400 lg:block">
                  One system.
                  <br />
                  Complete control.
                </p>
              </div>
            </motion.div>

            {/* AFTER CARD */}
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-6 text-white shadow-[0_20px_70px_rgba(37,99,235,0.22)] transition-all duration-300 hover:shadow-[0_25px_80px_rgba(37,99,235,0.3)] sm:p-7"
            >
              {/* Glow effects */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

              {/* Decorative rings */}
              <div className="pointer-events-none absolute right-5 top-5 h-20 w-20 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute right-9 top-9 h-12 w-12 rounded-full border border-white/10" />

              <div className="relative mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-8 ring-white/5 backdrop-blur-sm">
                    <Zap className="h-5 w-5" fill="currentColor" />
                  </span>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-100">
                      Future State
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold">
                      With iiiQBets ERP
                    </h3>
                  </div>
                </div>

                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  Automated
                </span>
              </div>

              <div className="relative mb-5 h-px bg-white/10" />

              <ul className="relative flex flex-col gap-3">
                {afterItems.map((item, index) => (
                  <motion.li
                    key={item}
                    variants={staggerChild}
                    className="group/item flex items-center gap-3 rounded-xl border border-transparent px-2 py-2.5 transition-all duration-200 hover:border-white/10 hover:bg-white/10"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-emerald-300 backdrop-blur-sm transition-transform duration-200 group-hover/item:scale-110">
                      <Check
                        className="h-3.5 w-3.5"
                        strokeWidth={3}
                      />
                    </span>

                    <span className="text-sm leading-5 text-white/90">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom status */}
              <div className="relative mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                  <TrendingUp className="h-3.5 w-3.5" />
                </span>

                <div>
                  <p className="text-xs font-bold text-white">
                    Built for growth
                  </p>
                  <p className="text-[10px] text-white/60">
                    Faster decisions. Better control.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom benefit strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-ink-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur-sm"
        >
          {[
            'Centralized Operations',
            'Real-time Visibility',
            'Smarter Decisions',
            'Scalable Growth',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-brand-500" />
              <span className="text-xs font-semibold text-ink-600">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </SectionWrap>
  );
}