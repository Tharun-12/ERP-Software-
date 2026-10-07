import { motion } from 'framer-motion';
import { SectionWrap, Container, SectionHeading } from './primitives';
import { whyChooseUs } from '@/lib/data';
import { getIcon } from '@/lib/icons';
import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';

export default function WhyChooseUs() {
  return (
    <SectionWrap id="why">
      <Container>
        <SectionHeading
          eyebrow="Why iiiQBets"
          title="Built to Make Your Business Smarter, Faster and More Efficient."
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((b) => {
            const Icon = getIcon(b.icon);
            return (
              <motion.article
                key={b.title}
                variants={staggerChild}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">{b.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{b.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrap>
  );
}
