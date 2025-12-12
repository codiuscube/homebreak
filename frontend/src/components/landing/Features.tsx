import { Sliders, BrainCircuit, Anchor, MapPin } from "lucide-react";

const features = [
  {
    icon: Sliders,
    title: "You Define the Vibe",
    description:
      'Dial in your perfect conditions. Set custom ranges for wave height, swell period, swell direction, wind speed, and more. Your triggers, your rules.',
  },
  {
    icon: MapPin,
    title: "Multiple Spots, One App",
    description:
      'Monitor all your go-to breaks simultaneously. Different triggers for each spot - because what works at the jetty might not work at the point.',
  },
  {
    icon: BrainCircuit,
    title: "Your Surf Buddy",
    description:
      'No robot reports. Pick your vibe: Stoked Local (hyped buddy energy), Chill Surfer (laid back), Data Nerd (just the facts), or Hype Beast (maximum send).',
  },
  {
    icon: Anchor,
    title: "No Spam, Only Signals",
    description:
      "We cross-reference forecasts with real-time NOAA buoy data to confirm the swell is actually in the water. Smart cooldowns mean you only hear from us when it matters.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 border-b border-border bg-zinc-950/30"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            No Bullshit. Just Waves.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Most surf apps are cluttered with ads, social feeds, and cameras.
            Home Break is a utility that lives in the background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group border border-border bg-card p-8 rounded-xl hover:border-zinc-700 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-zinc-900 border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
