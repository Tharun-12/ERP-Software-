import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Container } from './primitives';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/anim';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" aria-hidden />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl" aria-hidden />

      {/* floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/4 top-10 h-16 w-16 rounded-2xl border border-white/10 bg-white/5"
      />
      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute right-1/4 bottom-10 h-12 w-12 rounded-full border border-white/10 bg-white/5"
      />

      <Container className="relative">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Transform Your Business With{' '}
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              ERP Software
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-ink-300">
            Streamline operations. Improve performance. Drive growth.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-500 hover:shadow-premium"
            >
              Request a Demo Today!
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to Our Team
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
