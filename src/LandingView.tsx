import { Zap, AlertTriangle, Skull } from 'lucide-react';

interface LandingViewProps {
  onStart: () => void;
}

export default function LandingView({ onStart }: LandingViewProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,45,120,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,120,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,45,120,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating badges */}
      <div className="absolute top-8 left-8 hidden md:flex items-center gap-2 text-xs font-mono text-neon-pink/60 border border-neon-pink/20 rounded px-3 py-1.5 animate-pulse">
        <span className="w-1.5 h-1.5 bg-neon-pink rounded-full" />
        SYSTEM ONLINE
      </div>
      <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 text-xs font-mono text-neon-green/60 border border-neon-green/20 rounded px-3 py-1.5">
        v2.4.1-FINAL
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center animate-fade-in">
        {/* Warning badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neon-pink/30 bg-neon-pink/5 text-neon-pink text-sm font-mono">
          <AlertTriangle size={14} />
          MEDICAL-GRADE ROASTING AHEAD
          <AlertTriangle size={14} />
        </div>

        {/* Title */}
        <h1
          className="font-display font-black text-7xl md:text-9xl tracking-tighter leading-none mb-4 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-white text-glow-pink">SCROLL</span>
          <br />
          <span
            className="text-neon-pink text-glow-pink"
            style={{
              WebkitTextStroke: '2px #ff2d78',
              color: 'transparent',
            }}
          >
            ITARY
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl text-white/70 font-display mb-3 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          The Life Expectancy Calculator
          <br />
          <span className="text-neon-green text-glow-green">for Chronically Online Humans</span>
        </p>

        {/* Disclaimer */}
        <div
          className="mt-6 mb-10 p-4 rounded-xl border border-charcoal-border bg-charcoal-card/50 text-sm font-mono text-white/40 max-w-md mx-auto animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex items-start gap-2">
            <Skull size={14} className="shrink-0 mt-0.5 text-neon-pink" />
            <span>
              <strong className="text-white/60">DISCLAIMER:</strong> Results are not real medical
              advice. But your neck probably does look like a lowercase 'r'. Prepare to be
              cyber-roasted.
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-center gap-6 mb-10 text-sm font-mono animate-slide-up"
          style={{ animationDelay: '0.35s' }}
        >
          {[
            { label: 'QUESTIONS', value: '15' },
            { label: 'BASE YEARS', value: '80' },
            { label: 'YEARS AT RISK', value: '62' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-neon-pink">{stat.value}</div>
              <div className="text-white/30 text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-display font-black text-xl text-black bg-neon-pink transition-all duration-200 hover:scale-105 hover:shadow-neon-pink active:scale-95 animate-bounce-slow"
          style={{ animationDelay: '0.4s' }}
        >
          <Zap size={20} className="group-hover:animate-spin" />
          Begin My Diagnosis
          <Zap size={20} className="group-hover:animate-spin" />

          {/* Button glow */}
          <div className="absolute inset-0 rounded-2xl bg-neon-pink opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-200" />
        </button>

        <p
          className="mt-4 text-white/25 text-xs font-mono animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          No sign-up required. Spine examination not included.
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(circle at bottom left, rgba(57,255,20,0.8), transparent 70%)',
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(191,0,255,0.8), transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
