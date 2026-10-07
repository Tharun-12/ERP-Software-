// import { motion } from 'framer-motion';
// import { valueStripItems } from '@/lib/data';
// import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';
// import { Check } from 'lucide-react';

// export default function TrustStrip() {
//   return (
//     <section className="relative border-y border-ink-100 bg-ink-950 py-10">
//       <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
//       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={viewportOnce}
//           transition={{ duration: 0.5 }}
//           className="mb-7 text-center font-display text-lg font-bold text-white sm:text-xl lg:text-2xl"
//         >
//           One System. One Process. Complete Control.{' '}
//           <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
//             Better Results.
//           </span>
//         </motion.p>

//         <motion.ul
//           variants={staggerParent}
//           initial="hidden"
//           whileInView="visible"
//           viewport={viewportOnce}
//           className="flex snap-x snap-mandatory items-center gap-3 overflow-x-auto pb-1 scrollbar-hide sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:overflow-visible"
//         >
//           {valueStripItems.map((v) => (
//             <motion.li
//               key={v}
//               variants={staggerChild}
//               className="flex shrink-0 snap-center items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:shrink"
//             >
//               <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
//                 <Check className="h-4 w-4" />
//               </span>
//               <span className="text-sm font-medium text-ink-200">{v}</span>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>
//     </section>
//   );
// }




import { motion } from 'framer-motion';
import { valueStripItems } from '@/lib/data';
import { staggerChild, staggerParent, viewportOnce } from '@/lib/anim';
import { Check } from 'lucide-react';

export default function TrustStrip() {
  // Duplicate items for seamless infinite scrolling
  const marqueeItems = [...valueStripItems, ...valueStripItems];

  return (
    <section className="relative overflow-hidden border-y border-ink-100 bg-ink-950 py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center font-display text-lg font-bold text-white sm:text-xl lg:text-2xl"
        >
          One System. One Process. Complete Control.{' '}
          <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
            Better Results.
          </span>
        </motion.p>

        {/* Auto scrolling container */}
        <div className="relative overflow-hidden">
          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex w-max items-center gap-3"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
              },
            }}
          >
            {marqueeItems.map((v, index) => (
              <motion.li
                key={`${v}-${index}`}
                variants={staggerChild}
                className="flex shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300">
                  <Check className="h-4 w-4" />
                </span>

                <span className="whitespace-nowrap text-sm font-medium text-ink-200">
                  {v}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

