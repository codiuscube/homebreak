import { useState, useMemo } from 'react';
import { useSpotName } from '../../contexts/LocationContext';
import { ArrowUpRight } from 'lucide-react';

function getSlides(spotName: string) {
  return [
    {
      number: '01',
      title: 'NIGHT_BEFORE',
      time: '20:00',
      description: 'Checks forecasts against your triggers. Get hyped or sleep in.',
      image: 'https://images.unsplash.com/photo-1552918147-eb18f7613987?q=80&w=2070&auto=format&fit=crop',
      overlay: `${spotName.toUpperCase()} // PUMPING TOMORROW // 4FT @ 12S // SET ALARM`,
    },
    {
      number: '02',
      title: 'MORNING_CHECKBOARD',
      time: '06:00',
      description: 'Live buoy confirm. Real traffic. Exact leave time.',
      image: 'https://images.unsplash.com/photo-1704320392193-247c05689e36?q=80&w=2070&auto=format&fit=crop',
      overlay: `BUOY CONFIRMED // ${spotName.toUpperCase()} // 4.2FT // CLEAN // GO NOW`,
    },
    {
      number: '03',
      title: 'POP_UP_ALERT',
      time: 'AUTO',
      description: 'Surprise swells. Wind switches. Immediate pulses.',
      image: 'https://images.unsplash.com/photo-1760755958496-bf5fe0b9fd13?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      overlay: `WIND SWITCH // OFFSHORE DETECTED // WINDOW OPEN: 2HRS`,
    },
  ];
}

export function HowItWorks() {
  const spotName = useSpotName();
  const slides = useMemo(() => getSlides(spotName), [spotName]);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="how-it-works" className="relative py-32 bg-brand-abyss overflow-hidden">
      {/* Background Chaos */}
      <div className="absolute inset-0 grunge-overlay opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-acid/5 -skew-x-12 transform origin-top-right mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Sticky Navigation/Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="border-b-4 border-brand-rogue pb-6 mb-8 inline-block transform -rotate-1">
              <h2 className="text-6xl font-black font-display tracking-tighter text-white uppercase leading-[0.8]">
                SMART<br />
                <span className="text-brand-concrete">TRIGGERS</span>
              </h2>
            </div>

            <p className="font-mono text-sm text-brand-foam/80 mb-12 border-l border-white/20 pl-4">
              <span className="inline-block bg-brand-rogue text-brand-abyss px-2 py-0.5 transform -rotate-1 mb-2 font-mono text-xs font-bold tracking-widest tape">
                // ALGORITHM: ACTIVE
              </span><br />
              How we keep you wet and keep you working.
            </p>

            <div className="space-y-4">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left group flex items-center gap-4 p-4 border transition-all duration-300 ${activeIdx === idx
                    ? 'border-brand-acid bg-brand-acid/10 translate-x-4'
                    : 'border-white/10 hover:border-white/40'
                    }`}
                >
                  <span className={`font-mono font-bold text-xl ${activeIdx === idx ? 'text-brand-acid' : 'text-brand-concrete'}`}>
                    {s.number}:
                  </span>
                  <span className="font-bold text-white tracking-widest uppercase text-sm">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Visual Display */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 absolute inset-0 ${activeIdx === idx ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-12 pointer-events-none'
                  }`}
              >
                {/* Main Image Container */}
                <div className="relative group shadow-[16px_16px_0px_0px_rgba(255,51,0,0.2)] border-2 border-white/10 bg-black">

                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-brand-rogue/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-[400px] object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* "Sticker" Overlay */}
                  <div className="absolute bottom-6 right-6 bg-brand-abyss border border-brand-acid p-4 max-w-sm rotate-1 group-hover:rotate-0 transition-transform z-20 shadow-2xl">
                    <div className="flex justify-between items-center mb-2 border-b border-brand-concrete/30 pb-2">
                      <span className="font-mono text-xs text-brand-acid">INCOMING_TRANSMISSION</span>
                      <div className="w-2 h-2 bg-brand-rogue animate-pulse"></div>
                    </div>
                    <p className="font-mono text-sm text-white leading-tight">
                      {s.overlay}
                    </p>
                  </div>

                  {/* Corner Text */}
                  <div className="absolute top-0 left-0 bg-white text-black font-black font-mono text-xl p-2 z-20">
                    {s.time}
                  </div>
                </div>

                {/* Description Box */}
                <div className="mt-8 ml-8 border-l-2 border-brand-acid pl-6">
                  <p className="text-xl md:text-2xl text-brand-foam font-bold leading-tight uppercase font-display max-w-lg">
                    <span className="text-brand-rogue">//</span> {s.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-acid font-mono text-xs cursor-pointer hover:underline">
                    CONFIGURE_TRIGGER <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
