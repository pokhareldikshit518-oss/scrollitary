import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronRight } from 'lucide-react';
import { QUESTIONS, STEPS, type QuizAnswers, type Question } from './quizData';

interface QuizViewProps {
  onComplete: (answers: QuizAnswers) => void;
}

function SliderQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: number;
  onChange: (v: number) => void;
}) {
  const min = question.sliderMin ?? 0;
  const max = question.sliderMax ?? 10;
  const pct = ((value - min) / (max - min)) * 100;

  const sliderLabels: Record<string, string[]> = {
    doomscroll_hours: ['0', '2', '4', '6', '8', '10', '12', '14', '16+'],
    one_more_video: ['Never', '1-2x', '3x/night', 'Regular', 'Sunrise club'],
  };

  const label = sliderLabels[question.id]?.[value] ?? `${value}`;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm font-mono">
        <span className="text-white/40">{question.sliderLabels?.[0]}</span>
        <span className="text-neon-pink font-black text-lg">{label}</span>
        <span className="text-white/40">{question.sliderLabels?.[1]}</span>
      </div>
      <div className="relative">
        <div
          className="absolute top-0 left-0 h-1.5 rounded-l-full mt-[9px] transition-all duration-150"
          style={{
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #ff2d78, #bf00ff)',
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="flex justify-between text-xs font-mono text-white/20">
        {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((v) => (
          <span
            key={v}
            className={`transition-colors duration-150 ${v === value ? 'text-neon-pink' : ''}`}
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function ChoiceQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-3">
      {question.choices?.map((choice) => {
        const isSelected = value === choice.label;
        return (
          <button
            key={choice.label}
            onClick={() => onChange(choice.label)}
            className={`group relative flex items-center justify-between px-5 py-4 rounded-xl border transition-all duration-200 text-left ${
              isSelected
                ? 'border-neon-pink bg-neon-pink/10 text-white shadow-neon-pink'
                : 'border-charcoal-border bg-charcoal-card/50 text-white/70 hover:border-white/20 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 shrink-0 transition-all duration-200 ${
                  isSelected
                    ? 'border-neon-pink bg-neon-pink shadow-neon-pink'
                    : 'border-white/20 group-hover:border-white/40'
                }`}
              />
              <span className="font-display text-sm md:text-base">{choice.label}</span>
            </div>
            {choice.tag && (
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded shrink-0 ml-2 ${
                  isSelected
                    ? choice.yearsLost > 4
                      ? 'bg-neon-pink/20 text-neon-pink'
                      : 'bg-neon-green/20 text-neon-green'
                    : 'bg-white/5 text-white/30'
                }`}
              >
                {choice.tag}
              </span>
            )}
            {isSelected && (
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-neon-pink/50 shadow-neon-pink" />
            )}
          </button>
        );
      })}
    </div>
  );
}

function ToggleQuestion({
  question,
  value,
  onChange,
}: {
  question: Question;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <p className="text-white/50 font-mono text-sm text-center">
        Do you close Instagram only to immediately re-open Instagram?
      </p>
      <div className="flex gap-4">
        {[
          { label: 'YES', val: true, color: 'neon-pink', note: '-4 yrs' },
          { label: 'NO', val: false, color: 'neon-green', note: '+0 yrs' },
        ].map((opt) => (
          <button
            key={opt.label}
            onClick={() => onChange(opt.val)}
            className={`relative flex flex-col items-center gap-2 px-10 py-6 rounded-2xl border-2 font-black text-2xl transition-all duration-200 ${
              value === opt.val
                ? opt.color === 'neon-pink'
                  ? 'border-neon-pink text-neon-pink bg-neon-pink/10 shadow-neon-pink scale-105'
                  : 'border-neon-green text-neon-green bg-neon-green/10 shadow-neon-green scale-105'
                : 'border-charcoal-border text-white/30 bg-charcoal-card/50 hover:border-white/20 hover:text-white/60'
            }`}
          >
            {opt.label}
            <span className="text-xs font-mono opacity-60">{opt.note}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  value,
  onChange,
  index,
}: {
  question: Question;
  value: number | string | boolean;
  onChange: (v: number | string | boolean) => void;
  index: number;
}) {
  return (
    <div
      className="animate-slide-up space-y-4"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-neon-pink/60 tracking-widest uppercase">
            Q{QUESTIONS.findIndex((q) => q.id === question.id) + 1}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg md:text-xl text-white leading-tight">
          {question.title}
        </h3>
        {question.subtitle && (
          <p className="text-white/40 text-sm font-mono mt-1">{question.subtitle}</p>
        )}
      </div>

      {question.type === 'slider' && (
        <SliderQuestion
          question={question}
          value={value as number}
          onChange={onChange as (v: number) => void}
        />
      )}
      {question.type === 'choice' && (
        <ChoiceQuestion
          question={question}
          value={value as string}
          onChange={onChange as (v: string) => void}
        />
      )}
      {question.type === 'toggle' && (
        <ToggleQuestion
          question={question}
          value={value as boolean}
          onChange={onChange as (v: boolean) => void}
        />
      )}
    </div>
  );
}

export default function QuizView({ onComplete }: QuizViewProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [animating, setAnimating] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>(() => {
    const defaults: QuizAnswers = {};
    for (const q of QUESTIONS) {
      if (q.type === 'slider') defaults[q.id] = q.defaultValue as number ?? q.sliderMin ?? 0;
      else if (q.type === 'toggle') defaults[q.id] = q.defaultValue ?? true;
      else defaults[q.id] = '';
    }
    return defaults;
  });

  const currentStepData = STEPS[step];
  const stepQuestions = currentStepData.questions.map(
    (id) => QUESTIONS.find((q) => q.id === id)!
  );

  const isStepComplete = stepQuestions.every((q) => {
    const v = answers[q.id];
    if (q.type === 'slider') return true;
    if (q.type === 'toggle') return v === true || v === false;
    return v !== '' && v !== undefined;
  });

  const progressPct = ((step + (isStepComplete ? 1 : 0.5)) / STEPS.length) * 100;

  function handleAnswer(id: string, value: number | string | boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function goNext() {
    if (!isStepComplete) return;
    if (step === STEPS.length - 1) {
      onComplete(answers);
      return;
    }
    setDirection('forward');
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimating(false);
    }, 200);
  }

  function goBack() {
    if (step === 0) return;
    setDirection('back');
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => s - 1);
      setAnimating(false);
    }, 200);
  }

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isStepComplete) goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isStepComplete, step, answers]);

  return (
    <div className="min-h-screen flex flex-col px-4 py-8">
      {/* Progress header */}
      <div className="max-w-2xl mx-auto w-full mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-display font-bold text-sm">
            Step{' '}
            <span className="text-neon-pink">{step + 1}</span>
            <span className="text-white/30"> / {STEPS.length}</span>
          </span>
          <span className="text-white/40 font-mono text-xs tracking-widest uppercase">
            {currentStepData.label}
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-1.5 bg-charcoal-border rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #ff2d78, #bf00ff)',
              boxShadow: '0 0 8px rgba(255,45,120,0.6)',
            }}
          />
        </div>

        {/* Step dots */}
        <div className="flex justify-between mt-2">
          {STEPS.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-1 text-xs font-mono transition-colors duration-300 ${
                i <= step ? 'text-neon-pink' : 'text-white/20'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i < step
                    ? 'bg-neon-pink'
                    : i === step
                    ? 'bg-neon-pink w-3 shadow-neon-pink'
                    : 'bg-white/20'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Questions */}
      <div
        className={`max-w-2xl mx-auto w-full flex-1 transition-all duration-200 ${
          animating
            ? direction === 'forward'
              ? 'opacity-0 translate-x-4'
              : 'opacity-0 -translate-x-4'
            : 'opacity-100 translate-x-0'
        }`}
      >
        <div className="bg-charcoal-card border border-charcoal-border rounded-2xl p-6 md:p-8 space-y-8 shadow-card">
          {stepQuestions.map((q, i) => (
            <div key={q.id}>
              {i > 0 && <div className="border-t border-charcoal-border" />}
              <div className={i > 0 ? 'pt-8' : ''}>
                <QuestionCard
                  question={q}
                  value={answers[q.id]}
                  onChange={(v) => handleAnswer(q.id, v)}
                  index={i}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-2xl mx-auto w-full mt-6 flex items-center justify-between gap-4">
        <button
          onClick={goBack}
          disabled={step === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-charcoal-border text-white/40 hover:text-white hover:border-white/20 disabled:opacity-0 disabled:pointer-events-none transition-all duration-200 font-display text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="text-xs font-mono text-white/20 hidden md:block">
          {isStepComplete ? 'Press Enter to continue' : 'Answer all questions to continue'}
        </div>

        <button
          onClick={goNext}
          disabled={!isStepComplete}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl font-display font-bold text-sm transition-all duration-200 ${
            isStepComplete
              ? step === STEPS.length - 1
                ? 'bg-neon-pink text-black hover:scale-105 hover:shadow-neon-pink active:scale-95'
                : 'bg-white/10 text-white hover:bg-white/15 border border-white/10 hover:border-white/20'
              : 'bg-white/5 text-white/20 cursor-not-allowed border border-charcoal-border'
          }`}
        >
          {step === STEPS.length - 1 ? (
            <>
              Calculate My Fate
              <ChevronRight size={16} />
            </>
          ) : (
            <>
              Continue
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
