import { createPortal } from 'react-dom';
import { X, Waves } from 'lucide-react';
import { Button } from './Button';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-background border border-border rounded-xl p-8 max-w-md mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Waves className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-2xl font-bold mb-3">Coming Soon</h2>

          <p className="text-muted-foreground mb-6">
            We're putting the finishing touches on Home Break. Sign up to be notified when we launch!
          </p>

          <Button onClick={onClose} className="w-full">
            Got it
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
