export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Night Before Hype (8:00 PM)',
      description: 'Checks tomorrow\'s forecast against your "Good" tier. Helps you plan your alarm.',
    },
    {
      number: '02',
      title: 'Morning Reality Check (6:00 AM)',
      description: 'Validates live buoy data. Checks Google Traffic. Gives you a "Go/No-Go" with drive time.',
    },
    {
      number: '03',
      title: 'Pop-Up Alert',
      description: 'Runs every 2 hours. Catches wind switches or sudden pulse arrivals.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              The "Smart" Triggers
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-border flex items-center justify-center text-xs font-bold font-mono">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="h-full w-px bg-border my-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Surf Image Visual */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1476574898132-040f50db0a01?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ocean wave at sunset"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-white/80">Live monitoring active</span>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  Real-time conditions analyzed 24/7 so you never miss a session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
