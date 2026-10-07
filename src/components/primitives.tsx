import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/anim';

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-brand-300' : 'text-brand-600'}`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] text-balance ${dark ? 'text-white' : 'text-ink-900'}`}
      >
        {title}
      </motion.h2>
      {desc && (
        <motion.p
          variants={fadeUp}
          className={`text-base leading-relaxed sm:text-lg ${dark ? 'text-ink-300' : 'text-ink-500'}`}
        >
          {desc}
        </motion.p>
      )}
    </motion.div>
  );
}

export function SectionWrap({
  id,
  children,
  className = '',
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 lg:py-28 ${dark ? 'bg-ink-950 text-white' : 'bg-white'} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
