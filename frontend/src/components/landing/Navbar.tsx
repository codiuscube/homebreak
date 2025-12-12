import { useState } from "react";
import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import { ComingSoonModal } from "../ui";

export function Navbar() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-abyss/40 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-brand-acid group">
          <Waves className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            ITSPUMPING.AI
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/dashboard"
            className="text-xs font-mono text-brand-foam/60 hover:text-brand-acid hidden md:block transition-colors"
          >
            [ VIEW_DEMO_MODE ]
          </Link>

          <button
            onClick={() => setShowComingSoon(true)}
            className="font-mono text-xs border border-brand-acid/50 text-brand-acid px-4 py-1.5 hover:bg-brand-acid hover:text-brand-abyss transition-all uppercase tracking-wider"
          >
            Join_Beta
          </button>
        </div>
      </div>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </nav>
  );
}
