import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import AIFlowJourney from './components/AIFlowJourney.jsx';
import BrandVisuals from './components/BrandVisuals.jsx';
import CTA from './components/CTA.jsx';

function App() {
  // Soft cursor glow that follows pointer for micro-interaction
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05060a] text-white antialiased overflow-x-hidden">
      {/* Cursor glow */}
      <div
        className="pointer-events-none fixed z-50 w-72 h-72 rounded-full"
        style={{
          left: pos.x - 144,
          top: pos.y - 144,
          background: 'radial-gradient(120px 120px at 50% 50%, rgba(34,211,238,0.20), rgba(0,0,0,0))',
          filter: 'blur(10px)'
        }}
      />

      <Hero />
      <AIFlowJourney />
      <BrandVisuals />
      <CTA />

      {/* Subtle bottom gradient to close the scene */}
      <div className="pointer-events-none h-24 w-full bg-gradient-to-t from-[#05060a] to-transparent" />
    </div>
  );
}

export default App;
