import { Skull, Crosshair, Orbit, Radio } from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "YOUR_CONDITIONS",
    description:
      'Dial in custom ranges. Swell direction, period, height. If it doesn’t hit your numbers, it doesn’t hit your phone.',
    className: "rotate-1 z-10",
  },
  {
    icon: Orbit,
    title: "ANY_BREAK",
    description:
      'Monitor multiple spots. What fires at the jetty might be trash at the point. Set unique logic for every break.',
    className: "-rotate-2 -ml-8 mt-12 z-20",
  },
  {
    icon: Skull,
    title: "SURF_BUDDY",
    description:
      'Pick your vibe: Stoked Local (hyped), Chill (relaxed), or Just Data. AI generated, but feels like your best friend.',
    className: "rotate-2 -mt-12 ml-12 z-30",
  },
  {
    icon: Radio,
    title: "SIGNAL_ONLY",
    description:
      "We cross-check forecasts with live buoy data. No false alarms. If we text you, it's actually happening.",
    className: "-rotate-1 -ml-4 -mt-8 z-40",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-32 bg-brand-abyss overflow-hidden"
    >
      <div className="absolute inset-0 grunge-overlay opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 border-l-4 border-brand-rogue pl-6">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-display font-black tracking-tighter text-white mb-4 uppercase leading-[0.8] break-words">
            NO_BULLSHIT.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-acid to-white">JUST_WAVES.</span>
          </h2>
          <p className="font-mono text-brand-concrete max-w-xl text-sm md:text-base border-t border-dashed border-white/20 pt-4 mt-4">
            <span className="inline-block bg-brand-rogue text-brand-abyss px-2 py-0.5 transform -rotate-1 mb-2 font-mono text-xs font-bold tracking-widest tape">
              // STATUS: SYSTEM_OPTIMIZED
            </span><br />
            <span className="text-xl md:text-2xl text-zinc-400 font-mono">
              WAVE_WIRE lives in the background until the ocean turns on.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto px-4 sm:px-0">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`group relative bg-brand-abyss border-2 border-white/10 p-8 sm:p-12 transition-all duration-300 hover:border-brand-acid hover:z-50 hover:scale-[1.02] shadow-2xl ${feature.className}`}
            >
              {/* Paper tear effect at top */}
              <div className="absolute -top-1 left-0 right-0 h-2 bg-brand-abyss skew-x-12"></div>

              {/* Grunge Icon Container */}
              <div className="mb-8 relative">
                <div className="absolute -inset-4 bg-brand-rogue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <feature.icon className="text-white w-12 h-12 stroke-[1.5] group-hover:stroke-brand-acid transition-colors" />
              </div>

              <h3 className="font-black font-display text-2xl sm:text-3xl text-white mb-4 uppercase tracking-tighter">
                <span className="text-brand-rogue mr-2 text-sm font-mono align-middle tracking-widest">// 0{idx + 1}</span>
                {feature.title}
              </h3>

              <p className="font-mono text-sm sm:text-base text-brand-foam/80 leading-relaxed max-w-xs">
                {feature.description}
              </p>

              {/* Decorative elements */}
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/20 rotate-90 origin-bottom-right">
                SYS_ID_{idx + 42}X
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
