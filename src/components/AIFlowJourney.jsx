import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Flow content based on user's narrative
const nodes = [
  {
    id: 'entry',
    title: 'Entry Node — “Let’s Redefine Work”',
    desc:
      "Work isn’t supposed to feel heavy. Every repetitive click, message, or follow-up can be automated. Flames.Blue studies your workflow, understands your process, and builds intelligent systems that handle it all — saving you time, cost, and energy. Your business keeps running. You stop running after it.",
    color: '#22d3ee',
  },
  {
    id: 'custom',
    title: 'Flow Node — “Custom Automation for Every Need”',
    desc:
      'No templates. No one-size-fits-all setups. We build automations around your business — not the other way around. Whether you need: an AI Receptionist that manages calls and bookings, an automated lead system that follows up without fail, or a smart workflow that connects your tools like n8n does, we design, build, and maintain it — completely tailored to you.',
    color: '#a78bfa',
  },
  {
    id: 'n8n',
    title: 'Flow Node — “Built on n8n, Enhanced with AI”',
    desc:
      'Our core tech is n8n, an open automation engine that can connect hundreds of apps and services. We customize it, scale it, and layer AI intelligence on top — turning simple triggers into decision-making systems. Your automations don’t just run, they think.',
    color: '#60a5fa',
  },
  {
    id: 'evolve',
    title: 'Flow Node — “We Make Systems That Work For You”',
    desc:
      'We don’t build something and disappear. Every setup evolves with your business. As your process changes, we adapt the automation to match — adding new integrations, AI agents, and smarter logic when needed. You don’t need to manage anything. You just tell us what’s slowing you down, and we’ll automate it.',
    color: '#06b6d4',
  },
  {
    id: 'results',
    title: 'Flow Node — “Results That Speak in Numbers”',
    desc:
      'Our clients cut costs, save hours, and simplify operations — all without hiring more people. With custom automation, a small team can perform like a large one. Every workflow we build is designed to reduce human friction and multiply output.',
    color: '#22d3ee',
  },
  {
    id: 'output',
    title: 'Output Node — “Automation That Feels Effortless”',
    desc:
      'You’ll see it, but you won’t have to touch it. Your systems will connect, respond, and execute automatically. You’ll simply notice how much smoother everything becomes. Automation shouldn’t feel technical. It should feel invisible.',
    color: '#a78bfa',
  },
  {
    id: 'final',
    title: 'Final Node — “Let’s Build Yours”',
    desc:
      'Every business has a different rhythm. We build automations that move with yours. → Tell us what you need automated → We’ll design your custom AI-powered flow. Your future workflows are already being built — at Flames.Blue.',
    color: '#60a5fa',
  },
];

export default function AIFlowJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0.45]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={ref} className="relative min-h-[260vh] w-full bg-[#07070d]">
      {/* Ambient grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(88,28,135,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(2,132,199,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div style={{ opacity: glowOpacity, y: parallaxY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(600px 300px at 20% 30%, rgba(34,211,238,0.25), transparent 60%), radial-gradient(800px 500px at 80% 70%, rgba(167,139,250,0.25), transparent 60%)',
          }}
        />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        {/* Curved connection path (SVG) */}
        <svg
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[900px] max-w-[90vw]"
          viewBox="0 0 900 2600"
          fill="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="wire" x1="0" y1="0" x2="900" y2="2600">
              <stop stopColor="#22d3ee" />
              <stop offset="0.5" stopColor="#a78bfa" />
              <stop offset="1" stopColor="#60a5fa" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#67e8f9" floodOpacity="0.6" />
            </filter>
          </defs>
          <path
            d="M 100 100 C 450 200 450 300 800 400 S 450 700 100 900 S 450 1200 800 1400 S 450 1700 100 1900 S 450 2200 800 2400"
            stroke="url(#wire)"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.7"
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
  const alignLeft = index % 2 === 0;
  const topSpacing = index === 0 ? 100 : 70;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.4, once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[320px]"
      style={{ marginTop: topSpacing }}
    >
      {/* Node orb */}
      <div className={`absolute ${alignLeft ? 'left-[8%]' : 'right-[8%]'} top-1/2 -translate-y-1/2`}>
        <div className="relative">
          <div
            className="h-20 w-20 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${color}, rgba(10, 12, 20, 0.8))`,
              boxShadow: `0 0 24px ${color}66, 0 0 64px ${color}33`,
            }}
          />
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: `2px solid ${color}` }}
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className={`max-w-xl ${alignLeft ? 'ml-[20%]' : 'ml-auto mr-[20%]'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 backdrop-blur-md`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.6, once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <h3
          className="text-xl md:text-2xl font-semibold text-cyan-100"
          style={{ textShadow: '0 0 18px rgba(34,211,238,0.25)' }}
        >
          {title}
        </h3>
        <p className="mt-3 text-cyan-100/75 leading-relaxed">{desc}</p>
      </motion.div>
    </motion.div>
  );
}
