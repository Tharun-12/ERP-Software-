import { motion } from 'framer-motion';
import { Wifi, BatteryFull, Signal } from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { mobileCards } from '@/lib/data';
import { getIcon } from '@/lib/icons';
import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';

export default function MobileDashboard() {
  return (
    <SectionWrap dark className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden />
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-72 w-72 rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

      <Container className="relative">
        <SectionHeading
          dark
          eyebrow="Mobile ERP"
          title="Your Business. Wherever You Are."
          desc="Access important business information from anywhere — anytime, on any device."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7 }}
            className="mx-auto w-fit"
          >
            <div className="relative h-[560px] w-[280px] rounded-[2.5rem] border-4 border-ink-800 bg-ink-950 p-3 shadow-premium">
              {/* notch */}
              <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-800" />

              {/* screen */}
              <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white">
                {/* status bar */}
                <div className="flex items-center justify-between bg-ink-950 px-5 pt-4 pb-2 text-[10px] text-white">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="h-3 w-3" />
                    <Wifi className="h-3 w-3" />
                    <BatteryFull className="h-3 w-3" />
                  </div>
                </div>

                {/* app header */}
                <div className="flex items-center justify-between bg-ink-950 px-5 pb-4">
                  <div>
                    <div className="text-[10px] text-ink-400">Welcome back</div>
                    <div className="font-display text-sm font-bold text-white">Dashboard</div>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-[10px] font-bold text-white">
                    iQ
                  </span>
                </div>

                {/* content */}
                <div className="bg-ink-50/60 p-3">
                  {/* summary card */}
                  <div className="mb-3 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 text-white shadow-lg">
                    <div className="text-[10px] text-ink-200">Monthly Summary</div>
                    <div className="mt-1 font-display text-xl font-bold">₹7,82,000</div>
                    <div className="text-[10px] text-ink-200">Net Profit · Oct 2026</div>
                    <div className="mt-3 h-1.5 rounded-full bg-white/20">
                      <div className="h-full w-3/4 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* grid cards */}
                  <motion.div
                    variants={staggerParent}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="grid grid-cols-2 gap-2"
                  >
                    {mobileCards.slice(2).map((c) => {
                      const Icon = getIcon(c.icon);
                      return (
                        <motion.div
                          key={c.label}
                          variants={staggerChild}
                          className="rounded-xl border border-ink-100 bg-white p-3 shadow-sm"
                        >
                          <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div className="font-display text-sm font-bold text-ink-900">{c.value}</div>
                          <div className="text-[9px] text-ink-400">{c.label}</div>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* recent activity */}
                  <div className="mt-3 rounded-xl border border-ink-100 bg-white p-3 shadow-sm">
                    <div className="mb-2 text-[11px] font-bold text-ink-800">Recent Activities</div>
                    {[
                      { t: 'Invoice #2041 paid', s: '2 min ago' },
                      { t: 'New PO created', s: '1 hr ago' },
                      { t: 'Payroll processed', s: '3 hr ago' },
                    ].map((a) => (
                      <div key={a.t} className="flex items-center justify-between border-t border-ink-50 py-1.5 text-[10px]">
                        <span className="text-ink-600">{a.t}</span>
                        <span className="text-ink-300">{a.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* features list */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {mobileCards.map((c) => {
              const Icon = getIcon(c.icon);
              return (
                <motion.div
                  key={c.label}
                  variants={staggerChild}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:border-brand-400/30 hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="font-display text-base font-bold text-white">{c.label}</div>
                    <div className="text-sm text-ink-400">{c.value} · {c.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}
