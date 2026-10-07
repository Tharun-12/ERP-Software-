import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Banknote,
  Users,
  BarChart3,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { heroMetrics, dashboardNav } from '@/lib/data';

const navIcons: Record<string, typeof LayoutDashboard> = {
  Dashboard: LayoutDashboard,
  Inventory: Package,
  Sales: ShoppingCart,
  Purchase: ShoppingCart,
  Finance: Banknote,
  'HR & Payroll': Users,
  Reports: BarChart3,
  Settings: Settings,
};

const toneStyles: Record<string, { ring: string; text: string; bg: string; icon: typeof TrendingUp }> = {
  sales: { ring: 'ring-brand-200', text: 'text-brand-600', bg: 'bg-brand-50', icon: ArrowUpRight },
  purchase: { ring: 'ring-accent-400/30', text: 'text-accent-600', bg: 'bg-accent-400/10', icon: ArrowDownRight },
  expense: { ring: 'ring-amber-200', text: 'text-amber-600', bg: 'bg-amber-50', icon: ArrowDownRight },
  profit: { ring: 'ring-emerald-200', text: 'text-emerald-600', bg: 'bg-emerald-50', icon: ArrowUpRight },
};

const chartSales = [42, 55, 48, 68, 60, 78, 72, 88, 82, 95, 90, 100];
const chartPurchase = [30, 38, 35, 48, 42, 52, 50, 58, 55, 62, 60, 68];

export default function DashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-ink-200/70 bg-white shadow-premium">
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="ml-3 hidden items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs text-ink-400 ring-1 ring-ink-200 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          app.iiqbets.com/dashboard
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-44 shrink-0 border-r border-ink-100 bg-ink-50/40 p-3 sm:block">
          <div className="mb-3 flex items-center gap-2 px-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-[10px] font-bold text-white">
              iQ
            </span>
            <span className="font-display text-sm font-bold text-ink-800">iiiQBets</span>
          </div>
          <nav className="flex flex-col gap-1">
            {dashboardNav.map((item, i) => {
              const Icon = navIcons[item] ?? LayoutDashboard;
              const active = i === 0;
              return (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                    active ? 'bg-brand-600 text-white shadow-sm' : 'text-ink-500 hover:bg-ink-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? 'text-white' : 'text-ink-400'}`} />
                  <span className="truncate">{item}</span>
                </div>
              );
            })}
          </nav>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-ink-900 sm:text-lg">Dashboard</h3>
              <p className="text-xs text-ink-400">Business overview · This fiscal year</p>
            </div>
            <div className="hidden items-center gap-2 rounded-lg bg-ink-50 px-3 py-1.5 text-xs font-medium text-ink-500 ring-1 ring-ink-200 sm:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live
            </div>
          </div>

          {/* metric cards */}
          <div className={`grid gap-3 ${compact ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'}`}>
            {heroMetrics.map((m, i) => {
              const t = toneStyles[m.tone];
              const Icon = t.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="rounded-xl border border-ink-100 bg-white p-3 shadow-soft"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-ink-400">{m.label}</span>
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md ${t.bg} ${t.text}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="font-display text-base font-bold text-ink-900 sm:text-lg">{m.value}</div>
                </motion.div>
              );
            })}
          </div>

          {/* chart */}
          <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-ink-900">Business Overview</h4>
                  <p className="text-[11px] text-ink-400">Sales vs Purchase trend</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-medium">
                <span className="flex items-center gap-1.5 text-ink-500">
                  <span className="h-2.5 w-2.5 rounded-sm bg-brand-500" /> Sales
                </span>
                <span className="flex items-center gap-1.5 text-ink-500">
                  <span className="h-2.5 w-2.5 rounded-sm bg-accent-400" /> Purchase
                </span>
              </div>
            </div>
            <DualBarChart sales={chartSales} purchase={chartPurchase} />
          </div>

          {/* quick access */}
          <div className="mt-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center gap-2">
              <Wallet className="h-4 w-4 text-brand-600" />
              <h4 className="font-display text-sm font-bold text-ink-900">Quick Access</h4>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {['Add Sales', 'Add Purchase', 'Add Expense', 'Add Employee', 'Bank Rec.', 'Reports'].map((q) => (
                <div
                  key={q}
                  className="flex flex-col items-center gap-1.5 rounded-lg bg-ink-50/70 px-1 py-2.5 text-center ring-1 ring-ink-100 transition-colors hover:bg-brand-50 hover:ring-brand-200"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-brand-600 shadow-sm">
                    <LayoutDashboard className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-medium leading-tight text-ink-500">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DualBarChart({ sales, purchase }: { sales: number[]; purchase: number[] }) {
  const max = Math.max(...sales, ...purchase);
  const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  return (
    <div className="flex h-36 items-end justify-between gap-1.5 sm:h-40">
      {sales.map((s, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1">
          <div className="flex h-full w-full items-end justify-center gap-0.5">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(purchase[i] / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: 'easeOut' }}
              className="w-1.5 rounded-t bg-accent-400/80 sm:w-2"
            />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(s / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 + 0.08, duration: 0.5, ease: 'easeOut' }}
              className="w-1.5 rounded-t bg-brand-500 sm:w-2"
            />
          </div>
          <span className="text-[9px] font-medium text-ink-300">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}
