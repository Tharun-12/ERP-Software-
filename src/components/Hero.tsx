// import { motion } from 'framer-motion';
// import { ArrowRight, Play, Sparkles } from 'lucide-react';
// import { fadeUp, staggerParent, scaleIn } from '@/lib/anim';
// import DashboardPreview from './DashboardPreview';

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
//       {/* animated background */}
//       <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
//       <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />
//       <div className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" aria-hidden />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8">
//         {/* left */}
//         <motion.div variants={staggerParent} initial="hidden" animate="visible" className="flex flex-col items-start gap-6">
//           <motion.span
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur"
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             All-in-One ERP Platform
//           </motion.span>

//           <motion.h1
//             variants={fadeUp}
//             className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.5rem]"
//           >
//             Integrate. Automate.{' '}
//             <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
//               Accelerate Business Growth.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg"
//           >
//             Our ERP Software connects all your business processes in one integrated platform. Automate operations,
//             improve efficiency, reduce costs and make smarter business decisions.
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-center">
//             <a
//               href="#contact"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-premium"
//             >
//               Request a Demo
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//             </a>
//             <a
//               href="#features"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition-all hover:border-brand-300 hover:text-brand-600"
//             >
//               <Play className="h-4 w-4" />
//               Explore Features
//             </a>
//           </motion.div>

//           <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-ink-400">
//             <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> GST Ready</span>
//             <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Multi-User</span>
//             <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Real-Time Data</span>
//           </motion.div>
//         </motion.div>

//         {/* right - dashboard */}
//         <motion.div
//           variants={scaleIn}
//           initial="hidden"
//           animate="visible"
//           className="relative lg:pl-4"
//         >
//           <div className="animate-float-slow">
//             <DashboardPreview />
//           </div>
//           {/* floating badge */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.8, duration: 0.5 }}
//             className="absolute -left-3 top-1/4 hidden rounded-xl border border-ink-100 bg-white px-3 py-2 shadow-premium sm:block"
//           >
//             <div className="flex items-center gap-2">
//               <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
//                 <ArrowRight className="h-4 w-4 -rotate-45" />
//               </span>
//               <div>
//                 <div className="text-[10px] text-ink-400">Net Profit</div>
//                 <div className="font-display text-sm font-bold text-ink-900">₹7,82,000</div>
//               </div>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 1, duration: 0.5 }}
//             className="absolute -bottom-4 -right-2 hidden rounded-xl border border-ink-100 bg-white px-3 py-2 shadow-premium sm:block"
//           >
//             <div className="flex items-center gap-2">
//               <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
//                 <Sparkles className="h-4 w-4" />
//               </span>
//               <div>
//                 <div className="text-[10px] text-ink-400">Automation</div>
//                 <div className="font-display text-sm font-bold text-ink-900">Active</div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



// import { motion } from 'framer-motion';
// import { ArrowRight, Play, Sparkles } from 'lucide-react';
// import { fadeUp, staggerParent, scaleIn } from '@/lib/anim';
// import DashboardPreview from './DashboardPreview';

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
//     >
//       {/* animated background */}
//       <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
//       <div
//         className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"
//         aria-hidden
//       />
//       <div
//         className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl"
//         aria-hidden
//       />

//       <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-8">
//         {/* left */}
//         <motion.div
//           variants={staggerParent}
//           initial="hidden"
//           animate="visible"
//           className="flex flex-col items-start gap-6"
//         >
//           <motion.span
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur"
//           >
//             <Sparkles className="h-3.5 w-3.5" />
//             All-in-One ERP Platform
//           </motion.span>

//           <motion.h1
//             variants={fadeUp}
//             className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.5rem]"
//           >
//             Integrate. Automate.{' '}
//             <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
//               Accelerate Business Growth.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg"
//           >
//             Our ERP Software connects all your business processes in one integrated platform. Automate operations,
//             improve efficiency, reduce costs and make smarter business decisions.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="flex flex-col gap-3 sm:flex-row sm:items-center"
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-premium"
//             >
//               Request a Demo
//               <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//             </a>
//             <a
//               href="#features"
//               className="group inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition-all hover:border-brand-300 hover:text-brand-600"
//             >
//               <Play className="h-4 w-4" />
//               Explore Features
//             </a>
//           </motion.div>

//           <motion.div
//             variants={fadeUp}
//             className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-ink-400"
//           >
//             <span className="flex items-center gap-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> GST Ready
//             </span>
//             <span className="flex items-center gap-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Multi-User
//             </span>
//             <span className="flex items-center gap-1.5">
//               <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Real-Time Data
//             </span>
//           </motion.div>
//         </motion.div>

//         {/* right - dashboard (bigger) */}
//         <motion.div
//           variants={scaleIn}
//           initial="hidden"
//           animate="visible"
//           className="relative flex w-full items-center justify-center"
//         >
//           {/* Gradient glow behind dashboard */}
//           <div
//             className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full rounded-[2.5rem] bg-gradient-to-tr from-brand-200/50 via-accent-200/30 to-transparent blur-3xl"
//             aria-hidden
//           />

//           {/* Dashboard card with proper alignment */}
//           <div className="relative w-full max-w-2xl">
//             {/* Decorative frame */}
//             <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100/70 via-white to-accent-100/50 opacity-80 blur-sm" />

//             <div className="animate-float-slow">
//               <DashboardPreview />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { fadeUp, staggerParent, scaleIn } from '@/lib/anim';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-8">
        {/* left */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            All-in-One ERP Platform
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            Integrate. Automate.{' '}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Accelerate Business Growth.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg"
          >
            Our ERP Software connects all your business processes in one integrated platform. Automate operations,
            improve efficiency, reduce costs and make smarter business decisions.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-700 hover:shadow-premium"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-ink-700 transition-all hover:border-brand-300 hover:text-brand-600"
            >
              <Play className="h-4 w-4" />
              Explore Features
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-ink-400"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> GST Ready
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Multi-User
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Real-Time Data
            </span>
          </motion.div>
        </motion.div>

        {/* right - image */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative flex w-full items-center justify-center"
        >
          {/* Gradient glow behind image */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-full rounded-[2.5rem] bg-gradient-to-tr from-brand-200/50 via-accent-200/30 to-transparent blur-3xl"
            aria-hidden
          />

          <div className="relative w-full max-w-2xl">
            {/* Decorative frame */}
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-100/70 via-white to-accent-100/50 opacity-80 blur-sm" />

            <div className="animate-float-slow overflow-hidden rounded-[2rem] shadow-premium ring-1 ring-ink-100">
              <img
                src="https://i.pinimg.com/736x/14/40/f9/1440f9fdb32af3e8066057c89110ada4.jpg"
                alt="ERP platform dashboard preview"
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}