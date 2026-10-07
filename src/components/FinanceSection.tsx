import { motion } from 'framer-motion';
import { Banknote, TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, BarChart3 } from 'lucide-react';
import { SectionWrap, Container } from './primitives';
import { slideInLeft, slideInRight, staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

const metrics = [
  { label: 'Revenue', value: '₹48,75,000', icon: TrendingUp, tone: 'text-emerald-600 bg-emerald-50', trend: '+18%' },
  { label: 'Expenses', value: '₹8,75,000', icon: TrendingDown, tone: 'text-amber-600 bg-amber-50', trend: '-4%' },
  { label: 'Profit', value: '₹7,82,000', icon: Wallet, tone: 'text-brand-600 bg-brand-50', trend: '+24%' },
  { label: 'Cash Flow', value: '₹12,40,000', icon: Banknote, tone: 'text-accent-600 bg-accent-400/10', trend: '+9%' },
];

const flowData = [30, 45, 38, 55, 48, 62, 58, 72, 68, 80, 75, 88];

export default function FinanceSection() {
  return (
    <SectionWrap>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* left: content */}
          <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-5 order-2 lg:order-1">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
              Finance & Accounting
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl text-balance">
              Take Complete Control of Your Finances.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-ink-500 sm:text-lg">
              Manage accounts, expenses, budgets, cash flow and financial statements from one centralized platform.
            </motion.p>

            <motion.div variants={staggerParent} className="mt-3 grid grid-cols-2 gap-3">
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={staggerChild}
                  className="rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-shadow hover:shadow-card"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.tone}`}>
                      <m.icon className="h-4 w-4" />
                    </span>
                    <span className={`flex items-center gap-0.5 text-xs font-semibold ${m.trend.startsWith('+') ? 'text-emerald-600' : 'text-amber-600'}`}>
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
          <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 lg:order-2">
            <div className="rounded-2xl border border-ink-200/70 bg-white p-5 shadow-premium">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <BarChart3 className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-base font-bold text-ink-900">Financial Summary</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">FY 2025-26</span>
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
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={areaPath(flowData, 320, 120)}
                    fill="url(#cf-grad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.path
                    d={linePath(flowData, 320, 120)}
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                </svg>
              </div>

              {/* mini summary */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { label: 'Total Income', value: '₹48.7L', icon: ArrowUpRight, tone: 'text-emerald-600' },
                  { label: 'Total Expense', value: '₹8.7L', icon: ArrowDownRight, tone: 'text-amber-600' },
                  { label: 'Net Profit', value: '₹7.8L', icon: TrendingUp, tone: 'text-brand-600' },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-ink-100 bg-white p-3 text-center">
                    <s.icon className={`mx-auto mb-1 h-4 w-4 ${s.tone}`} />
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
