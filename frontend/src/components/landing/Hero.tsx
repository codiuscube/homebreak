import { useState, useEffect } from "react";
import { ArrowRight, Database, Bot, Zap, Waves, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui";

const rotatingNotifications = [
  {
    label: "🤙🔥",
    message:
      "DUDE! Surfside is FIRING - rare Texas glass! 4.2ft @ 12s SE, 8mph NW keeping it CLEAN.",
  },
  {
    label: "🤙",
    message:
      "Surfside's looking good! Gulf's cooperating - 4.2ft @ 12s SE, 8mph NW. Worth the drive!",
  },
  {
    label: "🚨🚨🚨",
    message:
      "THIS IS NOT A DRILL!! SURFSIDE IS GOING OFF - BEST GULF SWELL THIS YEAR!! CALL IN SICK!!",
  },
  {
    label: "🌊",
    message:
      "Hey - Surfside's actually really nice. 4.2ft @ 12s SE, 8mph NW. Clean for the Gulf.",
  },
  {
    label: "📊",
    message:
      "SURFSIDE: 4.2ft @ 12s SE | Wind: 8mph NW | Buoy 42035: 3ft @ 15s | ETA: 45min | Good",
  },
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState<
    "idle" | "exit" | "prepare" | "enter"
  >("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Exit - fade out and slide up
      setAnimationPhase("exit");

      setTimeout(() => {
        // Phase 2: Prepare - instantly position below (no transition)
        const next = (currentIndex + 1) % rotatingNotifications.length;
        setCurrentIndex(next);
        setDisplayIndex(next);
        setAnimationPhase("prepare");

        // Use requestAnimationFrame to ensure the "prepare" state is painted
        // before transitioning to "enter"
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            // Phase 3: Enter - animate up into view
            setAnimationPhase("enter");

            setTimeout(() => {
              // Phase 4: Idle - complete
              setAnimationPhase("idle");
            }, 400);
          });
        });
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1760755795966-8ae34c66de07?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Surfer in the ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero Text */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white/90">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              Live Alerts Active
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
              The Invisible
              <br />
              Surf Check.
            </h1>

            <p className="text-base sm:text-xl text-white/70 max-w-lg leading-relaxed mx-auto lg:mx-0">
              No apps to check. No forecasts to analyze. Just a text from your
              AI surf buddy when conditions line up with your preferences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              <Link to="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-white/60 font-mono">
              <div className="flex items-center gap-2">
                <Database className="w-3 h-3" /> NOAA Buoys
              </div>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Bot className="w-3 h-3" /> AI Powered
              </div>
              <div className="w-px h-3 bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3" /> Real-time SMS
              </div>
            </div>
          </div>

          {/* Hero Visual (The Notification Carousel) */}
          <div className="flex-1 relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 overflow-hidden py-8">
            {/* Glow effect behind */}
            <div className="absolute inset-0 -m-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl opacity-40" />

            {/* Single notification with carousel animation */}
            <div
              style={
                animationPhase === "prepare"
                  ? { transition: "none" }
                  : { transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)" }
              }
              className={`relative bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-xl shadow-lg ${
                animationPhase === "exit"
                  ? "opacity-0 -translate-y-6"
                  : animationPhase === "prepare"
                  ? "opacity-0 translate-y-6"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-cyan-500 flex items-center justify-center text-white shrink-0">
                  <Waves className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold text-xs sm:text-sm text-white">
                      Home Break
                    </h4>
                    <span className="text-[10px] text-white/60">Now</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 leading-snug">
                    <span className="font-bold text-cyan-400">
                      {rotatingNotifications[displayIndex].label}
                    </span>{" "}
                    {rotatingNotifications[displayIndex].message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
