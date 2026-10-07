import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { features } from '@/lib/data';
import { getIcon } from '@/lib/icons';
import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';

export default function Features() {
  return (
    <SectionWrap id="features">
      <Container>
        <SectionHeading
          eyebrow="Powerful ERP Features"
          title="Everything Your Business Needs. One Powerful Platform."
          desc="Manage your core business operations from one centralized ERP system."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => {
            const Icon = getIcon(f.icon);
            return (
              <motion.article
                key={f.title}
                variants={staggerChild}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/0 to-brand-50/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-50/60 group-hover:to-transparent group-hover:opacity-100" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" />
                </span>

                <div className="relative flex flex-1 flex-col gap-2">
                  <h3 className="font-display text-lg font-bold text-ink-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-500 transition-colors group-hover:text-ink-600">
                    {f.desc}
                  </p>
                </div>

                <span className="relative flex items-center gap-1.5 text-sm font-semibold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrap>
  );
}
