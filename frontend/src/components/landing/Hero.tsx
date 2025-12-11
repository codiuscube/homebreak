import { ArrowRight, Database, Bot, Zap, Waves, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';

export function Hero() {
  return (
    <header className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg -z-10 opacity-30" />
      <div className="scanline" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero Text */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              v1.0 Ready to Build
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] glow-text">
              The Invisible <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-foreground">
                Surf Check.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">
              No ads. No social feeds. No noise. Just a personalized AI buddy
              that texts you when your spot is actually firing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Set Your Break
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <Database className="w-3 h-3" /> NOAA Data
              </div>
              <div className="w-px h-3 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Bot className="w-3 h-3" /> Claude 4.5 Haiku
              </div>
              <div className="w-px h-3 bg-border hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3" /> Real-time
              </div>
            </div>
          </div>

          {/* Hero Visual (The Notification) */}
          <div className="flex-1 relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20" />

            {/* Phone Mockup Container */}
            <div className="relative bg-card border border-border rounded-[2rem] p-3 sm:p-4 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-5 sm:h-6 bg-card rounded-b-xl border-b border-l border-r border-border z-20" />

              {/* Screen */}
              <div className="bg-muted/50 rounded-2xl overflow-hidden h-[400px] sm:h-[500px] flex flex-col relative">
                {/* Wallpaper/Map */}
                <div className="absolute inset-0 bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    className="w-full h-full object-cover opacity-20 grayscale"
                    alt="Ocean map"
                  />
                </div>

                {/* Notification Element */}
                <div className="mt-16 sm:mt-20 mx-3 sm:mx-4 z-10 space-y-3 sm:space-y-4">
                  {/* Actual Notification */}
                  <div className="glass-panel p-3 sm:p-4 rounded-xl shadow-lg animate-[slideIn_1s_ease-out]">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                        <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-xs sm:text-sm text-foreground">Home Break</h4>
                          <span className="text-[10px] text-muted-foreground">Now</span>
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/80 leading-snug">
                          {' '}<span className="font-bold text-foreground">OMFG Alert:</span>{' '}
                          Surfside is firing. 5ft sets and offshore wind. Go now.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Morning Reality Check */}
                  <div className="glass-panel p-3 sm:p-4 rounded-xl shadow-lg opacity-60 scale-95 origin-top">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-accent flex items-center justify-center text-muted-foreground shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-[10px] sm:text-xs text-muted-foreground">06:00 AM Check</h4>
                        </div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-mono">
                          Buoy: 4ft @ 11s (NW)<br />
                          Traffic: 45m drive.<br />
                          Verdict: Green Light.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom UI */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-card to-transparent">
                  <div className="flex justify-center">
                    <div className="h-1 w-12 bg-border rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
