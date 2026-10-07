import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, TrendingDown, Wallet, IndianRupee } from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { topExpenses } from '@/lib/data';
import { staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

const analyticsMetrics = [
  { label: 'Revenue', value: '₹48,75,000', icon: IndianRupee, tone: 'text-emerald-600 bg-emerald-50' },
  { label: 'Expenses', value: '₹8,75,000', icon: TrendingDown, tone: 'text-amber-600 bg-amber-50' },
  { label: 'Profit', value: '₹7,82,000', icon: TrendingUp, tone: 'text-brand-600 bg-brand-50' },
  { label: 'Cash Flow', value: '₹12,40,000', icon: Wallet, tone: 'text-accent-600 bg-accent-400/10' },
];

const salesTrend = [35, 48, 42, 60, 55, 68, 72, 80, 76, 88, 82, 95];
const purchaseTrend = [25, 32, 30, 42, 38, 48, 50, 55, 52, 60, 58, 65];

export default function AnalyticsSection() {
  return (
    <SectionWrap id="analytics" className="bg-ink-50/50">
      <Container>
        <SectionHeading
          eyebrow="Reports & Analytics"
          title="Turn Business Data Into Better Decisions."
          desc="Get real-time insights with custom reports and dashboards for better decisions."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {/* metric cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-3">
            {analyticsMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                variants={staggerChild}
                className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
              >
                <span className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${m.tone}`}>
                  <m.icon className="h-5 w-5" />
                </span>
                <div className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{m.value}</div>
                <div className="text-sm text-ink-400">{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* sales vs purchase chart */}
          <motion.div variants={staggerChild} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <BarChart3 className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-bold text-ink-900">Business Performance</h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-ink-500">
                  <span className="h-2.5 w-2.5 rounded-sm bg-brand-500" /> Sales
                </span>
                <span className="flex items-center gap-1.5 text-ink-500">
                  <span className="h-2.5 w-2.5 rounded-sm bg-accent-400" /> Purchase
                </span>
              </div>
            </div>

            <svg viewBox="0 0 400 160" className="h-44 w-full">
              <defs>
                <linearGradient id="sales-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="0" y1={i * 40 + 10} x2="400" y2={i * 40 + 10} stroke="#f1f5f9" strokeWidth="1" />
              ))}
              <motion.path
                d={areaPath(salesTrend, 400, 160)}
                fill="url(#sales-grad)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.path
                d={linePath(salesTrend, 400, 160)}
                fill="none"
                stroke="#2563eb"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
              <motion.path
                d={linePath(purchaseTrend, 400, 160)}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="5 5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
              />
            </svg>
          </motion.div>

          {/* top expenses */}
          <motion.div variants={staggerChild} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <TrendingDown className="h-4 w-4" />
              </span>
              <h3 className="font-display text-base font-bold text-ink-900">Top Expenses</h3>
            </div>

            {/* donut */}
            <div className="relative mx-auto mb-4 h-36 w-36">
              <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                {renderDonut(topExpenses)}
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-lg font-bold text-ink-900">₹8.7L</span>
                <span className="text-[10px] text-ink-400">Total</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {topExpenses.map((e) => (
                <div key={e.label} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: e.color }} />
                  <span className="flex-1 text-xs font-medium text-ink-600">{e.label}</span>
                  <span className="text-xs font-bold text-ink-800">{e.pct}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrap>
  );
}

function linePath(data: number[], w: number, h: number) {
  const max = Math.max(...data) * 1.1;
  const step = w / (data.length - 1);
  return data.map((d, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${h - (d / max) * (h - 20) - 10}`).join(' ');
}

function areaPath(data: number[], w: number, h: number) {
  return `${linePath(data, w, h)} L ${w} ${h} L 0 ${h} Z`;
}

function renderDonut(items: { pct: number; color: string }[]) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  return items.map((item, i) => {
    const dash = (item.pct / 100) * circumference;
    const circle = (
      <motion.circle
        key={i}
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={item.color}
        strokeWidth="10"
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, duration: 0.4 }}
      />
    );
    offset += dash;
    return circle;
  });
}
