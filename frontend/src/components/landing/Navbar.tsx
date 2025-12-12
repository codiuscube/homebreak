import { useState } from "react";
import { Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, ComingSoonModal } from "../ui";
import { isProduction } from "../../utils/environment";

export function Navbar() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Waves className="w-5 h-5 text-primary" />
          <span className="font-bold tracking-tight text-sm uppercase">
            Home Break
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/dashboard"
            className="text-sm text-muted-foreground hover:text-primary hidden md:block"
          >
            Log in
          </Link>
          <Button size="sm" onClick={() => setShowComingSoon(true)}>
            Join Beta
          </Button>
        </div>
      </div>

      <ComingSoonModal
        isOpen={showComingSoon}
        onClose={() => setShowComingSoon(false)}
      />
    </nav>
  );
}
