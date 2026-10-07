import { motion } from 'framer-motion';
import { X, Check, ArrowDown, Zap } from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { beforeItems, afterItems } from '@/lib/data';
import { staggerChild, staggerParent, viewportOnce, fadeUp } from '@/lib/anim';

export default function BusinessImpact() {
  return (
    <SectionWrap className="bg-ink-50/50">
      <Container>
        <SectionHeading
          eyebrow="Business Impact"
          title="See the Transformation"
          desc="From scattered, manual processes to a centralized, automated business operation."
        />

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* before */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl border border-ink-200 bg-white p-6 shadow-soft"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <X className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-ink-800">Before</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {beforeItems.map((item) => (
                <motion.li key={item} variants={staggerChild} className="flex items-center gap-3 text-sm text-ink-500">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-amber-50 text-amber-500">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* arrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                <ArrowDown className="h-6 w-6 lg:rotate-[-90deg]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">Transform</span>
            </div>
          </motion.div>

          {/* after */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-600 to-brand-800 p-6 shadow-premium text-white"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white">
                <Zap className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold">With iiiQBets ERP</h3>
            </div>
            <ul className="relative flex flex-col gap-3">
              {afterItems.map((item) => (
                <motion.li key={item} variants={staggerChild} className="flex items-center gap-3 text-sm text-ink-100">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/15 text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </SectionWrap>
  );
}
