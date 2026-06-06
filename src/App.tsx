import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import LandingView from './LandingView';
import QuizView from './QuizView';
import ResultView from './ResultView';
import { type QuizAnswers } from './quizData';

type AppView = 'landing' | 'quiz' | 'result';

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [transitioning, setTransitioning] = useState(false);

  function transition(to: AppView, callback?: () => void) {
    setTransitioning(true);
    setTimeout(() => {
      callback?.();
      setView(to);
      setTransitioning(false);
    }, 300);
  }

  function handleStart() {
    transition('quiz');
  }

  function handleComplete(finalAnswers: QuizAnswers) {
    transition('result', () => setAnswers(finalAnswers));
  }

  function handleRestart() {
    transition('landing', () => setAnswers({}));
  }

  return (
    <div className="scanlines noise bg-charcoal min-h-screen font-display">
      <div
        className={`transition-all duration-300 ${
          transitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
      >
        {view === 'landing' && <LandingView onStart={handleStart} />}
        {view === 'quiz' && <QuizView onComplete={handleComplete} />}
        {view === 'result' && <ResultView answers={answers} onRestart={handleRestart} />}
      </div>
      <Analytics />
    </div>
  );
}
