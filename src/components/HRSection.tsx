// import { motion } from 'framer-motion';
// import { Users, CalendarCheck, CalendarOff, Banknote, Award } from 'lucide-react';
// import { SectionWrap, Container } from './primitives';
// import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

// const employees = [
//   { name: 'Aarav Sharma', role: 'Sales Manager', initials: 'AS', present: true },
//   { name: 'Priya Nair', role: 'Accountant', initials: 'PN', present: true },
//   { name: 'Rohan Gupta', role: 'Inventory Lead', initials: 'RG', present: false },
// ];

// const hrMetrics = [
//   { label: 'Employees', value: '142', icon: Users, tone: 'text-brand-600 bg-brand-50' },
//   { label: 'Present Today', value: '128', icon: CalendarCheck, tone: 'text-emerald-600 bg-emerald-50' },
//   { label: 'On Leave', value: '14', icon: CalendarOff, tone: 'text-amber-600 bg-amber-50' },
//   { label: 'Payroll', value: '₹18.6L', icon: Banknote, tone: 'text-accent-600 bg-accent-400/10' },
// ];

// export default function HRSection() {
//   return (
//     <SectionWrap className="bg-ink-50/50">
//       <Container>
//         <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
//           {/* left: dashboard */}
//           <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
//             <div className="rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium">
//               <div className="mb-4 flex items-center gap-2">
//                 <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
//                   <Users className="h-4 w-4" />
//                 </span>
//                 <h3 className="font-display text-base font-bold text-ink-900">HR Dashboard</h3>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
//                 {hrMetrics.map((m) => (
//                   <motion.div
//                     key={m.label}
//                     initial={{ opacity: 0, y: 16 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="rounded-xl border border-ink-100 bg-white p-3 shadow-soft"
//                   >
//                     <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ${m.tone}`}>
//                       <m.icon className="h-4 w-4" />
//                     </span>
//                     <div className="font-display text-base font-bold text-ink-900">{m.value}</div>
//                     <div className="text-[11px] text-ink-400">{m.label}</div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* attendance bar */}
//               <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
//                 <div className="mb-3 flex items-center justify-between">
//                   <span className="text-sm font-semibold text-ink-700">Weekly Attendance</span>
//                   <span className="text-xs text-emerald-600 font-semibold">90.1%</span>
//                 </div>
//                 <div className="flex h-24 items-end justify-between gap-2">
//                   {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => {
//                     const h = [88, 92, 85, 90, 87, 70][i];
//                     return (
//                       <div key={d} className="flex flex-1 flex-col items-center gap-1">
//                         <motion.div
//                           initial={{ height: 0 }}
//                           whileInView={{ height: `${h}%` }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.06, duration: 0.5 }}
//                           className="w-full rounded-t bg-gradient-to-t from-brand-500 to-brand-400"
//                         />
//                         <span className="text-[10px] text-ink-400">{d}</span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* employee list */}
//               <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
//                 <div className="mb-3 flex items-center justify-between">
//                   <span className="text-sm font-semibold text-ink-700">Team Members</span>
//                   <Award className="h-4 w-4 text-brand-500" />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   {employees.map((e) => (
//                     <div key={e.name} className="flex items-center gap-3 rounded-lg bg-ink-50/60 px-3 py-2">
//                       <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white">
//                         {e.initials}
//                       </span>
//                       <div className="flex-1 min-w-0">
//                         <div className="text-sm font-semibold text-ink-800 truncate">{e.name}</div>
//                         <div className="text-[11px] text-ink-400">{e.role}</div>
//                       </div>
//                       <span
//                         className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${
//                           e.present ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
//                         }`}
//                       >
//                         <span className={`h-1.5 w-1.5 rounded-full ${e.present ? 'bg-emerald-500' : 'bg-amber-500'}`} />
//                         {e.present ? 'Present' : 'On Leave'}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* right: content */}
//           <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-5">
//             <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
//               HR & Payroll
//             </motion.span>
//             <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance">
//               Simplify HR. Empower Your People.
//             </motion.h2>
//             <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
//               Manage employee records, attendance, leave, payroll and performance in one place.
//             </motion.p>

//             <motion.div variants={staggerParent} className="mt-2 grid gap-3 sm:grid-cols-2">
//               {[
//                 { t: 'Employee Records', d: 'Centralized profiles with full history.' },
//                 { t: 'Attendance & Leave', d: 'Track presence and manage leave requests.' },
//                 { t: 'Payroll Processing', d: 'Automated salary calculation and payslips.' },
//                 { t: 'Performance Reviews', d: 'Set goals and track employee progress.' },
//               ].map((b) => (
//                 <motion.div key={b.t} variants={staggerChild} className="rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
//                   <h4 className="mb-1 font-display text-sm font-bold text-ink-900">{b.t}</h4>
//                   <p className="text-xs text-ink-500">{b.d}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </Container>
//     </SectionWrap>
//   );
// }



import { motion } from 'framer-motion';
import { Users, CalendarCheck, CalendarOff, Banknote, Award } from 'lucide-react';
import { SectionWrap, Container } from './primitives';
import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

const employees = [
  { name: 'Aarav Sharma', role: 'Sales Manager', initials: 'AS', present: true },
  { name: 'Priya Nair', role: 'Accountant', initials: 'PN', present: true },
  { name: 'Rohan Gupta', role: 'Inventory Lead', initials: 'RG', present: false },
];

const hrMetrics = [
  { label: 'Employees', value: '142', icon: Users, tone: 'text-brand-600 bg-brand-50 ring-brand-100' },
  { label: 'Present Today', value: '128', icon: CalendarCheck, tone: 'text-emerald-600 bg-emerald-50 ring-emerald-100' },
  { label: 'On Leave', value: '14', icon: CalendarOff, tone: 'text-amber-600 bg-amber-50 ring-amber-100' },
  { label: 'Payroll', value: '₹18.6L', icon: Banknote, tone: 'text-accent-600 bg-accent-400/10 ring-accent-400/20' },
];

export default function HRSection() {
  return (
    <SectionWrap className="relative overflow-hidden bg-ink-50/50">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: dashboard */}
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <div className="group relative rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium transition-shadow duration-500 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.18)]">
              {/* gradient hairline top */}
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Users className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">HR Dashboard</h3>
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600 ring-1 ring-emerald-100">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {hrMetrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-xl border border-ink-100 bg-white p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-premium"
                  >
                    <span className={`mb-2 flex h-7 w-7 items-center justify-center rounded-lg ring-1 ${m.tone}`}>
                      <m.icon className="h-4 w-4" />
                    </span>
                    <div className="font-display text-base font-bold text-ink-900">{m.value}</div>
                    <div className="text-[11px] text-ink-400">{m.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* attendance bar */}
              <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-700">Weekly Attendance</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-600 ring-1 ring-emerald-100">
                    90.1%
                  </span>
                </div>
                <div className="flex h-24 items-end justify-between gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => {
                    const h = [88, 92, 85, 90, 87, 70][i];
                    return (
                      <div key={d} className="flex flex-1 flex-col items-center gap-1">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="w-full rounded-t bg-gradient-to-t from-brand-500 to-brand-400 transition-colors duration-300 hover:from-brand-600 hover:to-brand-500"
                        />
                        <span className="text-[10px] text-ink-400">{d}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* employee list */}
              <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-ink-700">Team Members</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                    <Award className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {employees.map((e) => (
                    <div
                      key={e.name}
                      className="flex items-center gap-3 rounded-lg bg-ink-50/60 px-3 py-2 transition-colors duration-300 hover:bg-ink-50"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-bold text-white ring-2 ring-white shadow-soft">
                        {e.initials}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-ink-800 truncate">{e.name}</div>
                        <div className="text-[11px] text-ink-400">{e.role}</div>
                      </div>
                      <span
                        className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ${
                          e.present
                            ? 'bg-emerald-50 text-emerald-600 ring-emerald-100'
                            : 'bg-amber-50 text-amber-600 ring-amber-100'
                        }`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${e.present ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                        {e.present ? 'Present' : 'On Leave'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* right: content */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              HR &amp; Payroll
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance"
            >
              Simplify HR.{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                Empower Your People.
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
              Manage employee records, attendance, leave, payroll and performance in one place.
            </motion.p>

            <motion.div variants={staggerParent} className="mt-2 grid gap-3 sm:grid-cols-2">
              {[
                { t: 'Employee Records', d: 'Centralized profiles with full history.' },
                { t: 'Attendance & Leave', d: 'Track presence and manage leave requests.' },
                { t: 'Payroll Processing', d: 'Automated salary calculation and payslips.' },
                { t: 'Performance Reviews', d: 'Set goals and track employee progress.' },
              ].map((b) => (
                <motion.div
                  key={b.t}
                  variants={staggerChild}
                  className="group relative overflow-hidden rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-200 hover:shadow-premium"
                >
                  {/* hover accent */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <h4 className="mb-1 font-display text-sm font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-600">
                    {b.t}
                  </h4>
                  <p className="text-xs text-ink-500">{b.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}