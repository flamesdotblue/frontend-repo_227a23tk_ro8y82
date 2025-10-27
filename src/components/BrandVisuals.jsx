import { motion } from 'framer-motion';

const apps = [
  { name: 'Slack', x: 18, y: 30, color: '#36c5f0' },
  { name: 'Notion', x: 78, y: 24, color: '#ffffff' },
  { name: 'HubSpot', x: 24, y: 72, color: '#ff7a59' },
  { name: 'Airtable', x: 80, y: 70, color: '#18bfff' },
  { name: 'GDrive', x: 50, y: 12, color: '#0f9d58' },
];

export default function BrandVisuals() {
  return (
    <section className="relative w-full bg-[#06070c] py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(900px 400px at 50% 30%, rgba(3, 233, 244, 0.12), transparent 60%), radial-gradient(700px 300px at 30% 80%, rgba(167,139,250,0.12), transparent 60%)'
      }} />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl md:text-4xl font-bold text-cyan-100"
        >
          Systems that think — data that flows
        </motion.h2>
        <p className="mt-4 text-center text-cyan-100/70 max-w-2xl mx-auto">
          Watch complex processes collapse into elegant, living networks. This is automation made visual.
        </p>

        <div className="relative mt-16 h-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
          {/* Dynamic connectors */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="50%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="0.6" floodColor="#06b6d4" floodOpacity="0.8" />
              </filter>
            </defs>

            {apps.map((a, i) => (
              <Connector key={i} from={apps[i]} to={apps[(i + 1) % apps.length]} />
            ))}
          </svg>

          {/* App nodes */}
          {apps.map((a, i) => (
            <Node key={i} {...a} />
          ))}

          {/* Flow particles */}
          {[...Array(24)].map((_, i) => (
            <Particle key={i} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Node({ name, x, y, color }) {
  return (
    <motion.div
      className="absolute flex items-center gap-3"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div
          className="h-12 w-12 rounded-full border border-white/20"
          style={{ background: `radial-gradient(35% 35% at 30% 30%, ${color}, rgba(255,255,255,0.05))`, boxShadow: `0 0 24px ${color}66` }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: `1px solid ${color}` }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <span className="text-cyan-50/90 font-medium tracking-wide drop-shadow">{name}</span>
    </motion.div>
  );
}

function Connector({ from, to }) {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - 8;
  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  return (
    <path d={d} stroke="url(#line)" strokeWidth="0.6" filter="url(#lineGlow)" fill="none" opacity="0.7" />
  );
}

function Particle({ idx }) {
  const duration = 6 + (idx % 10);
  const delay = (idx % 5) * 0.5;
  const size = 2 + (idx % 3);
  return (
    <motion.span
      className="absolute rounded-full bg-cyan-200/80 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
      style={{ width: size, height: size, left: `${(idx * 37) % 100}%`, top: `${(idx * 19) % 100}%` }}
      animate={{ x: ['0%', '3%', '-2%', '0%'], y: ['0%', '-2%', '3%', '0%'], opacity: [0.8, 1, 0.7, 0.8] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
