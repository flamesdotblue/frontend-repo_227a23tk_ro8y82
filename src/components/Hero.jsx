import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const letters = Array.from('Let\u2019s Redefine Work');

export default function Hero() {
  const letterVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 8, filter: 'blur(6px)' },
      show: (i) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: 0.03 * i, duration: 0.4 } }),
    }),
    []
  );

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#05060a]">
      {/* 3D Spline scene as immersive background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05060a]/30 via-[#05060a]/20 to-[#05060a]/80" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 50% 20%, rgba(0, 225, 255, 0.20), transparent 60%), radial-gradient(800px 400px at 70% 70%, rgba(88, 28, 135, 0.28), transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(0deg, rgba(5,6,10,0.2), rgba(5,6,10,0.2)), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), rgba(0,0,0,0))',
        }}
      />

      {/* Logo and Tagline */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center select-none">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent"
          style={{
            backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #60a5fa, #22d3ee, #a78bfa, #60a5fa)',
          }}
        >
          Flames.Blue
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          className="mt-6 text-lg md:text-2xl font-medium text-cyan-100/80"
          aria-label="Let's Redefine Work"
        >
          {letters.map((ch, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} className="inline-block">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 text-sm text-cyan-100/60"
        >
          Scroll to explore the automation flow
        </motion.div>
      </div>
    </section>
  );
}
