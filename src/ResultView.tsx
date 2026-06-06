import { useState, useEffect, useRef } from 'react';
import {
  Skull,
  Copy,
  RefreshCw,
  Check,
  AlertTriangle,
  Zap,
  Heart,
  TrendingDown,
} from 'lucide-react';
import {
  calculateLifeExpectancy,
  generateObituary,
  getDeathTitle,
  getRoastLine,
  type QuizAnswers,
} from './quizData';

interface ResultViewProps {
  answers: QuizAnswers;
  onRestart: () => void;
}

function CountingNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(80);
  const [done, setDone] = useState(false);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();
    const startVal = 80;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-in-out then rapid drop
      const eased = progress < 0.7
        ? progress / 0.7
        : 1;

      const current = Math.round(startVal + (target - startVal) * eased);
      setDisplay(current);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        setDone(true);
      }
    }

    const timer = setTimeout(() => {
      frameRef.current = requestAnimationFrame(tick);
    }, 600);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return (
    <span className={done ? '' : 'animate-pulse'} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {display}
    </span>
  );
}

export default function ResultView({ answers, onRestart }: ResultViewProps) {
  const lifeExpectancy = calculateLifeExpectancy(answers);
  const obituary = generateObituary(answers, lifeExpectancy);
  const title = getDeathTitle(lifeExpectancy);
  const roastLine = getRoastLine(lifeExpectancy, answers);
  const yearsLost = 80 - lifeExpectancy;

  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 300);
    return () => clearTimeout(t);
  }, []);

  const severityColor =
    lifeExpectancy <= 35
      ? 'neon-pink'
      : lifeExpectancy <= 55
      ? 'neon-yellow'
      : 'neon-green';

  const severityBorder =
    lifeExpectancy <= 35
      ? 'border-neon-pink/30 shadow-neon-pink'
      : lifeExpectancy <= 55
      ? 'border-yellow-500/30'
      : 'border-neon-green/30 shadow-neon-green';

  function handleCopy() {
    const ageGroup = answers.age_group as string;
    const text = [
      '☠️ MY SCROLLITUARY ☠️',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `📅 DIGITAL AGE OF DEATH: ${lifeExpectancy} YEARS OLD`,
      `💀 VERDICT: ${title}`,
      `📉 YEARS LOST TO THE SCROLL: ${yearsLost}`,
      '',
      obituary,
      '',
      `🏷️ ${ageGroup}`,
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      '📱 Calculate yours at scrollitary.app',
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  const dopamine = answers.dopamine_source as string;
  const hours = Number(answers.doomscroll_hours ?? 4);
  const battery = answers.battery_anxiety as string;
  const notifications = answers.notifications as string;

  const statsItems = [
    {
      icon: TrendingDown,
      label: 'Years Lost',
      value: `${yearsLost} yrs`,
      color: 'text-neon-pink',
    },
    { icon: Zap, label: 'Daily Scroll', value: `${hours}h`, color: 'text-neon-yellow' },
    {
      icon: Heart,
      label: 'Survival Odds',
      value: `${Math.round((lifeExpectancy / 80) * 100)}%`,
      color: 'text-neon-green',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background:
            lifeExpectancy <= 35
              ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,45,120,0.06) 0%, transparent 70%)'
              : lifeExpectancy <= 55
              ? 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,230,0,0.04) 0%, transparent 70%)'
              : 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(57,255,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div
        className={`max-w-2xl w-full space-y-6 transition-all duration-700 ${
          revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Title badge */}
        <div className="text-center animate-slide-up">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-charcoal-card text-sm font-mono mb-4 ${severityBorder}`}
          >
            <Skull size={14} className={`text-${severityColor}`} />
            <span className={`text-${severityColor} tracking-widest uppercase font-bold`}>
              {title}
            </span>
            <Skull size={14} className={`text-${severityColor}`} />
          </div>

          <h2 className="font-display font-black text-white/40 text-sm tracking-widest uppercase mb-2">
            Your Digital Life Expectancy
          </h2>
        </div>

        {/* Big number reveal */}
        <div
          className={`relative text-center border rounded-3xl bg-charcoal-card p-10 ${severityBorder}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute top-4 left-4 text-xs font-mono text-white/20 tracking-widest">
            AGE OF DEATH
          </div>
          <div className="absolute top-4 right-4 text-xs font-mono text-white/20 tracking-widest">
            CALCULATED
          </div>

          <div
            className={`font-black font-display leading-none text-${severityColor}`}
            style={{ fontSize: 'clamp(5rem, 20vw, 9rem)', lineHeight: 1 }}
          >
            <CountingNumber target={lifeExpectancy} duration={1800} />
          </div>
          <p className="font-mono text-white/30 text-sm mt-3 tracking-widest">YEARS OLD</p>

          <p
            className={`mt-5 text-${severityColor} font-display font-bold text-base md:text-lg`}
          >
            {roastLine}
          </p>

          {/* Glow orb behind number */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                lifeExpectancy <= 35
                  ? 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,45,120,0.08), transparent)'
                  : lifeExpectancy <= 55
                  ? 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,230,0,0.06), transparent)'
                  : 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(57,255,20,0.06), transparent)',
            }}
          />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {statsItems.map((stat) => (
            <div
              key={stat.label}
              className="bg-charcoal-card border border-charcoal-border rounded-2xl p-4 text-center"
            >
              <stat.icon size={16} className={`${stat.color} mx-auto mb-2`} />
              <div className={`font-black font-display text-xl ${stat.color}`}>{stat.value}</div>
              <div className="text-white/30 text-xs font-mono mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Coroner's Certificate */}
        <div
          className="relative border border-charcoal-border bg-charcoal-card rounded-2xl overflow-hidden animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Certificate header */}
          <div className="border-b border-charcoal-border px-6 py-4 flex items-center gap-3 bg-black/20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-neon-pink/60" />
              <div className="w-3 h-3 rounded-full bg-neon-yellow/60" />
              <div className="w-3 h-3 rounded-full bg-neon-green/60" />
            </div>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase flex-1 text-center">
              Official Coroner's Certificate — Digital Division
            </span>
            <AlertTriangle size={12} className="text-neon-pink/40" />
          </div>

          {/* Certificate body */}
          <div className="p-6 md:p-8">
            <div className="font-mono text-sm leading-relaxed text-white/70 border-l-2 border-neon-pink/30 pl-4">
              {obituary}
            </div>

            {/* Metadata row */}
            <div className="mt-6 pt-4 border-t border-charcoal-border grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
              {[
                { label: 'Primary Platform', value: (dopamine || '—').split(' ')[0] },
                {
                  label: 'Battery Panic',
                  value: battery?.includes('1%')
                    ? '1%'
                    : battery?.includes('20%')
                    ? '20%'
                    : '80%',
                },
                {
                  label: 'Notification Hell',
                  value: notifications?.includes('Infinite') ? 'INFINITE' : notifications?.includes('Double') ? 'DOUBLE DIGITS' : 'INBOX ZERO',
                },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-white/25 uppercase tracking-wider mb-0.5">{m.label}</div>
                  <div className="text-neon-pink/80">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 animate-slide-up"
          style={{ animationDelay: '0.5s' }}
        >
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl font-display font-bold transition-all duration-200 ${
              copied
                ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                : 'bg-neon-pink text-black hover:scale-[1.02] hover:shadow-neon-pink active:scale-[0.98]'
            }`}
          >
            {copied ? (
              <>
                <Check size={18} />
                Copied to Clipboard!
              </>
            ) : (
              <>
                <Copy size={18} />
                Copy My Scrollituary
              </>
            )}
          </button>

          <button
            onClick={onRestart}
            className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-display font-bold border border-charcoal-border text-white/60 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <RefreshCw size={18} />
            Cheat Death (Restart)
          </button>
        </div>

        {/* Footer */}
        <p
          className="text-center text-white/20 text-xs font-mono animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          Results are satirical and not actual medical advice. But seriously, stretch your neck.
        </p>
      </div>
    </div>
  );
}
