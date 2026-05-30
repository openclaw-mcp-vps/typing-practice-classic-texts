export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-xl tracking-tight">TypeClassics</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-semibold px-4 py-2 rounded-md text-sm hover:bg-[#79b8ff] transition-colors">
          Start Typing
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Classic Literature · Real-Time Metrics · Progress Tracking
        </div>
        <h1 className="text-5xl font-bold text-[#e6edf3] mb-6 leading-tight">
          Type your way through<br />
          <span className="text-[#58a6ff]">the greatest books ever written</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Practice typing with passages from Shakespeare, Austen, Dickens, and more. Build speed and accuracy while experiencing timeless literature.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg hover:bg-[#79b8ff] transition-colors">
            Start Practicing — $5/mo
          </a>
          <a href="#how-it-works" className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            See How It Works
          </a>
        </div>

        {/* Demo typing box */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-8 text-left max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-[#8b949e] uppercase tracking-widest">Pride and Prejudice — Jane Austen</span>
          </div>
          <p className="text-[#e6edf3] font-mono text-base leading-relaxed mb-4">
            <span className="text-[#58a6ff]">It is a truth universally acknowledged, </span>
            <span className="text-[#e6edf3]">that a single man in possession of a good fortune, must be in want of a wife.</span>
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-[#3fb950]">WPM: <strong>72</strong></span>
            <span className="text-[#58a6ff]">Accuracy: <strong>98%</strong></span>
            <span className="text-[#8b949e]">Time: <strong>0:42</strong></span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-[#161b22] border-y border-[#30363d] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#e6edf3] text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-full flex items-center justify-center text-[#58a6ff] font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Choose a Classic</h3>
              <p className="text-[#8b949e] text-sm">Browse our curated library of public domain masterpieces — from Greek epics to Victorian novels.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-full flex items-center justify-center text-[#58a6ff] font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Type in Real Time</h3>
              <p className="text-[#8b949e] text-sm">Our interface highlights your progress character by character, showing errors instantly as you type.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#0d1117] border border-[#30363d] rounded-full flex items-center justify-center text-[#58a6ff] font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-[#e6edf3] font-semibold text-lg mb-2">Track Your Growth</h3>
              <p className="text-[#8b949e] text-sm">View your WPM, accuracy, and streak history over time. Watch your skills improve session by session.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-12">One plan. Everything included. Cancel anytime.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-[#e6edf3] mb-1">$5</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited typing sessions",
              "100+ classic literature passages",
              "Real-time WPM & accuracy metrics",
              "Personal progress dashboard",
              "Daily streak tracking",
              "New texts added weekly"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center">
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure payment via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#161b22] border-t border-[#30363d] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#e6edf3] text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border border-[#30363d] rounded-xl p-6">
              <h3 className="text-[#e6edf3] font-semibold mb-2">What texts are available to practice with?</h3>
              <p className="text-[#8b949e] text-sm">We offer 100+ passages from public domain classics including works by Shakespeare, Jane Austen, Charles Dickens, Mark Twain, Homer, and many more. New texts are added every week.</p>
            </div>
            <div className="border border-[#30363d] rounded-xl p-6">
              <h3 className="text-[#e6edf3] font-semibold mb-2">How is my typing progress tracked?</h3>
              <p className="text-[#8b949e] text-sm">Every session records your words per minute (WPM), accuracy percentage, and time. Your dashboard shows trends over time so you can see exactly how much you've improved.</p>
            </div>
            <div className="border border-[#30363d] rounded-xl p-6">
              <h3 className="text-[#e6edf3] font-semibold mb-2">Can I cancel my subscription at any time?</h3>
              <p className="text-[#8b949e] text-sm">Yes, absolutely. You can cancel your subscription at any time from your account settings. You'll retain access until the end of your current billing period with no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} TypeClassics. All rights reserved.</p>
      </footer>
    </main>
  );
}
