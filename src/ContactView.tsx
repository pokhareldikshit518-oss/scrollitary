import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface ContactViewProps {
  onBack: () => void;
}

export default function ContactView({ onBack }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    // For example, send to an email service or API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
            Contact Us
          </h1>
          <p className="text-lg text-neon-pink/80 font-mono">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Mail size={20} className="text-neon-pink" />
              <span className="text-sm font-mono text-gray-400">Email</span>
            </div>
            <p className="text-white text-sm break-all">pokharedikshit518@gmail.com</p>
          </div>

          <div className="p-4 rounded border border-neon-green/20 bg-neon-green/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <Phone size={20} className="text-neon-green" />
              <span className="text-sm font-mono text-gray-400">Phone</span>
            </div>
            <p className="text-white text-sm">+977 9842041963</p>
          </div>

          <div className="p-4 rounded border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={20} className="text-neon-pink" />
              <span className="text-sm font-mono text-gray-400">Location</span>
            </div>
            <p className="text-white text-sm">Biratnagar , Nepal</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 rounded border border-neon-pink/20 bg-neon-pink/5 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 rounded border border-neon-green/50 bg-neon-green/10 text-neon-green">
              <p className="font-mono">✓ Message sent successfully! We'll get back to you soon.</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-charcoal border border-neon-pink/30 text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-charcoal border border-neon-pink/30 text-white focus:outline-none focus:border-neon-pink transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded bg-charcoal border border-neon-pink/30 text-white focus:outline-none focus:border-neon-pink transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded font-mono font-bold text-white bg-neon-pink/20 border border-neon-pink/50 hover:bg-neon-pink/30 hover:border-neon-pink transition-all duration-200 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
