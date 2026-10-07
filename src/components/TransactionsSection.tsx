import { motion } from 'framer-motion';
import { FileText, ShoppingCart, ArrowDownToLine, Wallet, CheckCircle2, Clock } from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { transactions, quickActions } from '@/lib/data';
import { getIcon } from '@/lib/icons';
import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';

const txIcons: Record<string, typeof FileText> = {
  invoice: FileText,
  purchase: ShoppingCart,
  payment: ArrowDownToLine,
  expense: Wallet,
};

const txTones: Record<string, string> = {
  invoice: 'bg-brand-50 text-brand-600',
  purchase: 'bg-accent-400/10 text-accent-600',
  payment: 'bg-emerald-50 text-emerald-600',
  expense: 'bg-amber-50 text-amber-600',
};

export default function TransactionsSection() {
  return (
    <SectionWrap>
      <Container>
        <SectionHeading
          eyebrow="Live Activity"
          title="Everything Happening. Right at Your Fingertips."
          desc="Track every business transaction as it happens — invoices, purchases, payments and expenses in real time."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* transactions table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-ink-100 bg-white p-5 shadow-card lg:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-ink-900">Recent Transactions</h3>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600">Live</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px]">
                <thead>
                  <tr className="border-b border-ink-100 text-left text-xs font-semibold text-ink-400">
                    <th className="pb-3 pr-4">Transaction</th>
                    <th className="pb-3 pr-4">Ref ID</th>
                    <th className="pb-3 pr-4">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => {
                    const Icon = txIcons[tx.type];
                    return (
                      <motion.tr
                        key={tx.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        className="border-b border-ink-50 transition-colors hover:bg-ink-50/50"
                      >
                        <td className="py-3.5 pr-4">
                          <div className="flex items-center gap-3">
                            <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${txTones[tx.type]}`}>
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-ink-800">{tx.label}</span>
                          </div>
                        </td>
                        <td className="py-3.5 pr-4 text-xs font-medium text-ink-400">{tx.id}</td>
                        <td className="py-3.5 pr-4 font-display text-sm font-bold text-ink-900">{tx.amount}</td>
                        <td className="py-3.5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                              tx.status === 'Completed'
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'bg-amber-50 text-amber-600'
                            }`}
                          >
                            {tx.status === 'Completed' ? (
                              <CheckCircle2 className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {tx.status}
                          </span>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* quick access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-ink-100 bg-gradient-to-br from-ink-950 to-ink-800 p-5 shadow-card text-white"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                <Wallet className="h-4 w-4" />
              </span>
              <h3 className="font-display text-base font-bold">Quick Access</h3>
            </div>

            <motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={viewportOnce} className="grid grid-cols-2 gap-3">
              {quickActions.map((a) => {
                const Icon = getIcon(a.icon);
                return (
                  <motion.button
                    key={a.label}
                    variants={staggerChild}
                    whileHover={{ y: -3 }}
                    className="group flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3.5 text-left transition-colors hover:border-brand-400/30 hover:bg-brand-500/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-brand-300 transition-colors group-hover:bg-brand-500/30 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-medium text-ink-200">{a.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}
