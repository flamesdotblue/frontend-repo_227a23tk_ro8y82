import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full bg-[#05060a] py-28 overflow-hidden">
      {/* Starfield/points */}
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        {[...Array(140)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-cyan-100/70"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(34,211,238,0.7)'
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(90deg, #67e8f9, #a78bfa)'
          }}
        >
          Ready to Automate Everything?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-cyan-100/70"
        >
          Your organization, reimagined as a living network — fast, adaptive, precise.
        </motion.p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center mt-10 px-8 py-4 rounded-full font-semibold tracking-wide text-slate-900"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 blur-md opacity-80 transition-opacity group-hover:opacity-100" />
          <span className="relative rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 px-8 py-3">
            <span className="relative z-10">Engage AI Mode</span>
          </span>
        </motion.a>

        {/* Logo echo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 text-cyan-100/30 text-xs tracking-widest"
        >
          FLAMES.BLUE
        </motion.div>
      </div>
    </section>
  );
}
