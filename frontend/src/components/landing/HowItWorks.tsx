import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSpotName } from '../../contexts/LocationContext';

function getSlides(spotName: string) {
  return [
    {
      number: '01',
      title: 'Night Before Hype',
      time: '8:00 PM',
      description: 'Checks tomorrow\'s forecast against your triggers. Get hyped or sleep in - we\'ll tell you which.',
      image: 'https://images.unsplash.com/photo-1552918147-eb18f7613987?q=80&w=2070&auto=format&fit=crop',
      overlay: `🌅 Tomorrow's forecast for ${spotName} is looking FUN - 3-4ft @ 11s, light winds early. Set that alarm!`,
    },
    {
      number: '02',
      title: 'Morning Reality Check',
      time: '6:00 AM',
      description: 'Live buoy validation confirms real conditions. Includes real-time traffic estimates so you know exactly when to leave.',
      image: 'https://images.unsplash.com/photo-1704320392193-247c05689e36?q=80&w=2070&auto=format&fit=crop',
      overlay: `🤙🔥 IT'S ON! ${spotName} buoy just jumped to 4.2ft @ 12s. Wind is clean. 38 min drive. GO GO GO!`,
    },
    {
      number: '03',
      title: 'Pop-Up Alert',
      time: 'Every 2 hours',
      description: 'Catches surprise swells, wind switches, and sudden pulse arrivals. Know exactly how long it would take to drop everything and go.',
      image: 'https://images.unsplash.com/photo-1760755958486-a6d88891e7f5?q=80&w=2070&auto=format&fit=crop',
      overlay: `🚨 WIND SWITCH! Offshore just kicked in at ${spotName}. Was junky, now it's CLEAN. Paddle out window: 2hrs`,
    },
  ];
}

export function HowItWorks() {
  const spotName = useSpotName();
  const slides = useMemo(() => getSlides(spotName), [spotName]);

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[currentSlide];

  return (
    <section id="how-it-works" className="py-24 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            The "Smart" Triggers
          </h2>
          <p className="text-muted-foreground mt-2">
            Three ways we keep you in the water
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />

            {/* Main card */}
            <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
              {/* Image */}
              <div className="relative h-[300px] sm:h-[400px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />

                {/* Hype text bubble */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="inline-block bg-[#34C759] text-white text-sm px-4 py-2 rounded-2xl rounded-bl-sm shadow-lg">
                    {slide.overlay}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg font-bold font-mono">
                    {slide.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{slide.title}</h3>
                    <p className="text-sm text-cyan-400 font-mono">{slide.time}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {slide.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between p-6 pt-0">
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-cyan-400 w-6'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
