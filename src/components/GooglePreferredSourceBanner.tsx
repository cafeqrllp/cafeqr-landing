import { useState, useEffect } from 'react';
import { X, Sparkles, ChevronRight } from 'lucide-react';

export default function GooglePreferredSourceBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('cafeqr_promo_banner_dismissed');
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem('cafeqr_promo_banner_dismissed', 'true');
    } catch {
      // Ignore localStorage errors
    }
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-md text-xs sm:text-sm border-b border-zinc-700/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
        
        {/* Left: Promotional announcement */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary border border-primary/30 p-1">
            <Sparkles className="w-3.5 h-3.5 fill-primary text-primary" />
          </span>
          <span className="font-medium tracking-tight text-zinc-200">
            <strong className="text-white font-bold">Limited Time Offer:</strong> Free menu setup, thermal printer config & zero onboarding fees on all POS kits!
          </span>
        </div>

        {/* Right: Action button & close */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#pricing"
            className="inline-flex items-center gap-1 bg-primary hover:bg-orange-600 text-white font-bold px-3.5 py-1.5 rounded-full text-xs shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>See Starter Kits (From ₹4,999)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss banner"
            className="p-1 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
