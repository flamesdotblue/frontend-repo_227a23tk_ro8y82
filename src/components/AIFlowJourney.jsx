import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const nodes = [
  {
    id: 'design',
    title: 'Automation Design',
    desc: 'Blueprint intelligent flows that mirror your business logic — modular, observable, and resilient.',
    color: '#22d3ee',
  },
  {
    id: 'assistants',
    title: 'AI Assistants',
    desc: 'Deploy specialized agents that understand context, converse naturally, and take action.',
    color: '#a78bfa',
  },
  {
    id: 'workflows',
    title: 'Workflow Systems',
    desc: 'Orchestrate multi-step automations with branching logic, retries, and real-time monitoring.',
    color: '#60a5fa',
  },
  {
    id: 'integrations',
    title: 'Integrations',
    desc: 'Connect apps and data with secure, low-latency bridges. Your stack becomes one brain.',
    color: '#06b6d4',
  },
];

export default function AIFlowJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.5]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  useEffect(() => {
    // Avoid heavy listeners; framer handles most of it
  }, []);

  return (
    <section ref={ref} className="relative min-h-[220vh] w-full bg-[#07070d]">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{
        backgroundImage:
          'linear-gradient(to right, rgba(88,28,135,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.12) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <motion.div style={{ opacity: glowOpacity, y: parallaxY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background:
            'radial-gradient(600px 300px at 20% 30%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(800px 500px at 80% 70%, rgba(167,139,250,0.25), transparent 60%)'
        }} />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Curved connection path (SVG) */}
        <svg className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[900px] max-w-[90vw]" viewBox="0 0 900 2000" fill="none" aria-hidden>
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="900" y2="2000">
              <stop stopColor="#22d3ee" />
              <stop offset="0.5" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#67e8f9" floodOpacity="0.6" />
            </filter>
          </defs>
          <path
            d="M 100 100 C 450 200 450 300 800 400 S 450 700 100 900 S 450 1200 800 1400 S 450 1700 100 1900"
            stroke="url(#wire)" strokeWidth="2" filter="url(#glow)" opacity="0.7"
          />
        </svg>

        {/* Nodes */}
        <div className="relative">
          {nodes.map((n, idx) => (
            <FlowNode key={n.id} index={idx} title={n.title} desc={n.desc} color={n.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowNode({ index, title, desc, color }) {
  // Compute alternating alignment
  const alignLeft = index % 2 === 0;
  const yStart = 120 + index * 380;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.8 }}
      className="relative h-[320px]"
      style={{ marginTop: index === 0 ? yStart - 120 : 60 }}
    >
      {/* Node orb */}
      <div className={`absolute ${alignLeft ? 'left-[8%]' : 'right-[8%]'} top-1/2 -translate-y-1/2`}> 
        <div className="relative">
          <div
            className="h-20 w-20 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${color}, rgba(10, 12, 20, 0.8))`,
              boxShadow: `0 0 24px ${color}66, 0 0 64px ${color}33`
            }}
          />
          {/* Pulse */}
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${color}` }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Description card-like but fluid */}
      <motion.div
        className={`max-w-xl ${alignLeft ? 'ml-[20%]' : 'ml-auto mr-[20%]'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-md`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h3 className="text-xl md:text-2xl font-semibold text-cyan-100" style={{ textShadow: '0 0 18px rgba(34,211,238,0.25)' }}>
          {title}
        </h3>
        <p className="mt-3 text-cyan-100/70 leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </motion.div>
  );
}
