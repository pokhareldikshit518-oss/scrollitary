import { ArrowLeft } from 'lucide-react';

interface AboutViewProps {
  onBack: () => void;
}

export default function AboutView({ onBack }: AboutViewProps) {
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

      <div className="relative z-10 max-w-2xl w-full animate-fade-in">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded border border-neon-pink/30 hover:border-neon-pink/60 text-neon-pink hover:text-neon-pink transition-colors"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            About Us
          </h1>
          <p className="text-lg text-neon-pink/80 font-mono">
            Learn more about our mission and team
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="p-6 rounded border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              i am dedicated to creating interactive and engaging experiences that challenge
              and educate my users. Our platform combines cutting-edge technology with
              thoughtful design to deliver memorable moments. my mission is just to create fun and let everyone enjoy it.
            </p>
          </section>

          <section className="p-6 rounded border border-neon-green/20 bg-neon-green/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-gray-300 leading-relaxed">
              From interactive quizzes to personalized assessments, I build tools that are
              both fun and functional with little help of AI. Every feature is designed with the user experience in
              mind, ensuring that your time with us is well spent.
            </p>
          </section>

          <section className="p-6 rounded border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-neon-pink">▸</span>
                <span>Innovation - Pushing boundaries with new ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-green">▸</span>
                <span>Quality - Crafting excellence in everything we do</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-pink">▸</span>
                <span>User-First - Your experience is our priority</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-green">▸</span>
                <span>Transparency - Honest communication always</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
