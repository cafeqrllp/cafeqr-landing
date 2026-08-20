import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Users2,
  Wifi,
  MapPin,
  ShoppingBag,
  Smartphone,
  Printer,
  BarChart3,
  UtensilsCrossed,
  Truck,
  Check,
  Star,
  Shield
} from 'lucide-react';
import CheckoutModal from './components/CheckoutModal';
import FAQ from './components/FAQ';
import Terms from './pages/Terms';

// ── Pricing Plans ─────────────────────────────────────────────────────────────

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  printer?: string;
  printerSize?: string;
  badge?: string;
  bestFor: string;
  features: string[];
  highlight?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'STARTER',
    name: 'Starter Kit',
    price: 4999,
    originalPrice: 5998,
    printer: 'Hoin 58mm Bluetooth Printer',
    printerSize: '2-inch',
    bestFor: 'Tea shops, juice stalls, food carts',
    features: [
      'Portable 58mm Bluetooth Printer',
      'CafeQR POS — 1 Year Core License',
      'Billing, QR Ordering & Reports',
      'Free menu setup & onboarding',
      'Optional ERP add-ons available',
    ],
  },
  {
    id: 'PRO',
    name: 'Pro Kit',
    price: 7999,
    originalPrice: 8898,
    printer: 'SHREYANS 80mm Bluetooth Printer',
    printerSize: '3-inch',
    badge: 'MOST POPULAR',
    bestFor: 'Restaurants, cafes, bakeries, grocery stores',
    highlight: true,
    features: [
      'Professional 80mm Bluetooth Printer',
      'CafeQR POS — 1 Year Core License',
      'Billing, QR Ordering & Reports',
      'Free menu setup & onboarding',
      'Priority support & ERP add-on options',
    ],
  },
  {
    id: 'SOFTWARE_ONLY',
    name: 'Software Only',
    price: 2499,
    bestFor: 'Already have a Bluetooth printer?',
    features: [
      'CafeQR POS — 1 Year Core License',
      'Billing, QR Ordering & Reports',
      'Free menu setup & onboarding',
      'Standard renewal at ₹999/year',
      'Optional ERP add-ons available',
    ],
  },
];

// ── Features Grid ─────────────────────────────────────────────────────────────

const features = [
  { icon: Smartphone, title: 'Works on Any Device', desc: 'Android tablets, phones, or desktop browsers — your POS runs everywhere.', color: 'bg-blue-50 text-blue-600 border-blue-100/50' },
  { icon: Printer, title: 'Bluetooth Printing', desc: 'Print receipts instantly via any Bluetooth thermal printer.', color: 'bg-emerald-50 text-emerald-600 border-emerald-100/50' },
  { icon: BarChart3, title: 'Sales & Reports', desc: 'Daily, weekly, monthly sales analytics with export to Excel.', color: 'bg-violet-50 text-violet-600 border-violet-100/50' },
  { icon: UtensilsCrossed, title: 'Kitchen Display (KOT)', desc: 'Orders go straight to the kitchen screen — no more paper tickets.', color: 'bg-rose-50 text-rose-600 border-rose-100/50' },
  { icon: Truck, title: 'Online Delivery', desc: 'Accept delivery orders with your own branded customer website.', color: 'bg-amber-50 text-amber-600 border-amber-100/50' },
  { icon: Users2, title: 'Multi-Branch & Staff', desc: 'Manage multiple outlets, roles, and permissions from one dashboard.', color: 'bg-indigo-50 text-indigo-600 border-indigo-100/50' },
];

// ── POS Login URL (Environment-Aware) ──────────────────────────────────────────

const getPosLoginUrl = (): string => {
  if (typeof window !== 'undefined') {
    const envUrl = (import.meta as any).env?.VITE_POS_LOGIN_URL;
    if (envUrl) return envUrl;
    const hostname = window.location.hostname.toLowerCase();
    if (hostname.includes('test') || hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'https://cafe-test-qr-frontend.vercel.app/login';
    }
    return 'https://cafeqr-frontend.pages.dev/login/';
  }
  return 'https://cafeqr-frontend.pages.dev/login/';
};

const getBackendApiUrl = (): string => {
  if (typeof window !== 'undefined') {
    const envUrl = (import.meta as any).env?.VITE_BACKEND_API_URL;
    if (envUrl) return envUrl;
    const hostname = window.location.hostname.toLowerCase();
    if (hostname.includes('test') || hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'https://test-api.cafeqr.in';
    }
    return 'https://api.cafeqr.in';
  }
  return 'https://api.cafeqr.in';
};

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'terms'>('home');
  const [activeApp, setActiveApp] = useState<'pos' | 'delivery'>('pos');
  const [posLoginUrl, setPosLoginUrl] = useState<string>('https://cafeqr-frontend.pages.dev/login/');
  const [backendApiUrl, setBackendApiUrl] = useState<string>('https://api.cafeqr.in');
  const [checkoutPlan, setCheckoutPlan] = useState<PricingPlan | null>(null);

  useEffect(() => {
    setPosLoginUrl(getPosLoginUrl());
    setBackendApiUrl(getBackendApiUrl());

    const checkRoute = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash === '#terms' || path === '/terms') {
        setCurrentView('terms');
      } else {
        setCurrentView('home');
      }
    };

    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (currentView !== 'home') return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    if (checkoutPlan) {
      lenis.stop();
    } else {
      lenis.start();
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => { lenis.destroy(); };
  }, [currentView, checkoutPlan]);

  if (currentView === 'terms') {
    return (
      <Terms
        onBack={() => {
          window.location.hash = '';
          setCurrentView('home');
          window.scrollTo(0, 0);
        }}
        posLoginUrl={posLoginUrl}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 overflow-hidden font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-5 lg:px-8 bg-white/50 backdrop-blur-2xl border-b border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Cafe QR Logo" className="w-10 h-10 object-contain rounded-md" />
          <span className="text-xl font-bold tracking-tight text-zinc-900">Cafe QR ERP</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={posLoginUrl}
            className="px-6 py-2.5 bg-zinc-900/90 backdrop-blur-md text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors shadow-lg text-sm"
          >
            POS Login
          </a>
        </div>
      </nav>

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="relative z-10 text-center max-w-4xl mx-auto pointer-events-none select-none flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-white/50 shadow-sm rounded-full text-xs font-bold uppercase tracking-wider text-primary"
          >
            ✦ Complete POS Kit — Software + Printer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] text-zinc-900 drop-shadow-sm px-2"
          >
            Start Billing<br />
            <span className="text-primary bg-none">In 5 Minutes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Get a ready-to-use POS system with a Bluetooth printer. All features included — billing, inventory, KOT, delivery, CRM, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <a
              href="#pricing"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 cursor-pointer"
            >
              See Pricing <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href={posLoginUrl}
              className="px-8 py-4 bg-white border border-zinc-200 text-zinc-700 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all shadow-sm cursor-pointer"
            >
              Already a user? Login
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Up & Running in 3 Steps
            </h2>
            <p className="mt-4 text-zinc-600 text-lg font-medium">No complex setup. No IT team needed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Your Kit', desc: 'Pick a Starter or Pro kit with a Bluetooth printer, or get software only if you already have one.', icon: '📦' },
              { step: '02', title: 'We Set You Up', desc: 'Our team configures your menu, categories, and POS settings. You just share your details.', icon: '⚙️' },
              { step: '03', title: 'Start Billing', desc: "Install the app, connect your printer, and start taking orders. It's that simple.", icon: '🧾' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-all text-center"
              >
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {s.step}</span>
                <h3 className="text-xl font-bold text-zinc-900 mt-2 mb-2">{s.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Bundles ────────────────────────────────────────── */}
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-zinc-600 text-lg font-medium">
              Everything included. No hidden fees. No module upsells.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-8 rounded-[2rem] border backdrop-blur-xl flex flex-col transition-all ${
                  plan.highlight
                    ? 'bg-zinc-900/90 border-zinc-700/50 text-white shadow-2xl scale-[1.03] ring-2 ring-primary/30'
                    : 'bg-white/70 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/30 flex items-center gap-1.5">
                    <Star className="w-3 h-3" /> {plan.badge}
                  </div>
                )}

                {/* Printer Image */}
                {plan.printer ? (
                  <div className={`h-48 rounded-2xl flex items-center justify-center mb-6 overflow-hidden ${plan.highlight ? 'bg-zinc-800/50' : 'bg-zinc-50'}`}>
                    <img
                      src={plan.printerSize === '2-inch' ? '/printer-2inch.png' : '/printer-3inch.png'}
                      alt={plan.printer}
                      className="h-36 object-contain drop-shadow-lg"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                        const parent = (e.currentTarget as HTMLElement).parentElement;
                        if (parent && !parent.querySelector('.printer-fallback')) {
                          const div = document.createElement('div');
                          div.className = 'printer-fallback flex flex-col items-center justify-center text-center p-4';
                          div.innerHTML = `<span class="text-4xl">🖨️</span><span class="text-xs font-bold mt-2 ${plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}">${plan.printer}</span>`;
                          parent.appendChild(div);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className={`h-48 rounded-2xl flex flex-col items-center justify-center mb-6 overflow-hidden ${plan.highlight ? 'bg-zinc-800/50' : 'bg-zinc-50'}`}>
                    <img
                      src="/software-license.png"
                      alt="Software License"
                      className="h-28 object-contain drop-shadow-lg mb-2"
                      onError={(e) => {
                        (e.currentTarget as HTMLElement).style.display = 'none';
                        const parent = (e.currentTarget as HTMLElement).parentElement;
                        if (parent && !parent.querySelector('.software-fallback')) {
                          const div = document.createElement('div');
                          div.className = 'software-fallback flex flex-col items-center justify-center text-center';
                          div.innerHTML = `<span class="text-4xl">📱</span>`;
                          parent.insertBefore(div, parent.firstChild);
                        }
                      }}
                    />
                    <span className={`text-xs font-bold ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`}>Software License Only</span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-xl font-extrabold ${plan.highlight ? 'text-white' : 'text-zinc-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 mb-4 ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {plan.bestFor}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-zinc-900'}`}>
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  {plan.originalPrice && (
                    <span className={`text-sm line-through ${plan.highlight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      ₹{plan.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-primary' : 'text-emerald-500'}`} />
                      <span className={plan.highlight ? 'text-zinc-300' : 'text-zinc-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => setCheckoutPlan(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30'
                      : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md'
                  }`}
                >
                  Get Started
                </button>

                {/* Warranty note */}
                {plan.printer && (
                  <p className={`text-[10px] mt-3 text-center ${plan.highlight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    <Shield className="w-3 h-3 inline mr-1" />
                    Hardware warranty by manufacturer
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features Grid ──────────────────────────────────────── */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
              Everything You Need to Run Your Business
            </h2>
            <p className="mt-4 text-zinc-600 text-lg font-medium">
              All features included in every plan. No module upsells, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-7 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:bg-white/80 transition-all"
              >
                <div className={`p-3 w-fit rounded-2xl mb-5 shadow-sm border ${f.color}`}>
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-1.5">{f.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Play Store Apps Section ────────────────────────────────── */}
      <section id="apps" className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side App Selectors */}
            <div className="bg-white/40 p-10 rounded-[3rem] backdrop-blur-xl border border-white/50 shadow-xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6 text-zinc-900">Official Mobile Suite</h2>
              <p className="text-zinc-700 text-lg mb-10 leading-relaxed font-medium">
                Connect and sync mobile operations directly to your main cloud database.
              </p>

              <div className="space-y-6">
                {/* POS App Card */}
                <div
                  onClick={() => setActiveApp('pos')}
                  className={`flex gap-5 items-start p-6 rounded-3xl border transition-all duration-300 cursor-pointer select-none ${
                    activeApp === 'pos'
                      ? 'bg-white/95 border-primary/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]'
                      : 'bg-white/10 border-transparent hover:bg-white/40'
                  }`}
                >
                  <img src="/logo-pos.png" alt="POS App Logo" className="w-16 h-16 object-contain bg-white rounded-2xl shadow-sm border border-zinc-200 p-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-zinc-900">Cafe QR POS App</h4>
                      {activeApp === 'pos' && <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>}
                    </div>
                    <p className="text-zinc-600 text-sm mt-1 mb-3">Your master terminal register. Install on Android tablets, touch displays, or hand-held devices.</p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cafeqr.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Play Store <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Delivery App Card */}
                <div
                  onClick={() => setActiveApp('delivery')}
                  className={`flex gap-5 items-start p-6 rounded-3xl border transition-all duration-300 cursor-pointer select-none ${
                    activeApp === 'delivery'
                      ? 'bg-white/95 border-primary/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] scale-[1.02]'
                      : 'bg-white/10 border-transparent hover:bg-white/40'
                  }`}
                >
                  <img src="/logo-delivery.png" alt="Delivery App Logo" className="w-16 h-16 object-contain bg-white rounded-2xl shadow-sm border border-zinc-200 p-1 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-zinc-900">Cafe QR Delivery App</h4>
                      {activeApp === 'delivery' && <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>}
                    </div>
                    <p className="text-zinc-600 text-sm mt-1 mb-3">Driver tracking and dispatch system for fleet management.</p>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.cafeqr.delivery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View on Play Store <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side Phone Simulator */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-[100px] -z-10"></div>

              <div className="w-full max-w-[325px] aspect-[9/19.2] bg-zinc-950 rounded-[3.2rem] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] relative border-4 border-zinc-900/90 ring-1 ring-zinc-800">
                <div className="absolute top-24 -left-1.5 w-1 h-12 bg-zinc-800 rounded-l-md border-l border-zinc-700"></div>
                <div className="absolute top-38 -left-1.5 w-1 h-12 bg-zinc-800 rounded-l-md border-l border-zinc-700"></div>
                <div className="absolute top-30 -right-1.5 w-1 h-16 bg-zinc-800 rounded-r-md border-r border-zinc-700"></div>

                <div className="w-full h-full bg-zinc-900 rounded-[2.5rem] overflow-hidden relative flex flex-col justify-between border border-zinc-800 shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]">
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-28 h-6.5 bg-black rounded-full z-30 flex items-center justify-between px-3 text-[9px]">
                    <div className="w-2 h-2 bg-zinc-900 rounded-full border border-zinc-800/80"></div>
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="flex justify-between items-center px-6 pt-4 text-[10px] font-bold text-zinc-900 z-20 mix-blend-difference select-none pointer-events-none">
                    <span className="text-white">11:40 AM</span>
                    <div className="flex gap-1.5 text-white items-center">
                      <Wifi className="w-3 h-3" />
                      <span>🔋</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full bg-zinc-50 flex flex-col justify-between p-4 pt-8 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      {activeApp === 'pos' ? (
                        <motion.div key="pos-screen" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="w-full h-full flex flex-col justify-between pt-4">
                          <div>
                            <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-2xl border border-zinc-200/50 shadow-sm">
                              <img src="/logo-pos.png" alt="POS App Logo" className="w-10 h-10 object-contain" />
                              <div>
                                <h5 className="font-extrabold text-zinc-900 text-sm leading-tight">Cafe QR POS</h5>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full mt-0.5 border border-emerald-100">
                                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                                  ERP Sync Active
                                </span>
                              </div>
                            </div>
                            <div className="space-y-2.5">
                              <h6 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider px-1">Active Ticket</h6>
                              <div className="bg-white rounded-2xl p-3.5 border border-zinc-200/50 shadow-sm space-y-3">
                                <div className="flex justify-between text-xs font-semibold text-zinc-800"><span>2x Cappuccino</span><span className="font-bold text-zinc-900">₹360</span></div>
                                <div className="flex justify-between text-xs font-semibold text-zinc-800"><span>1x Paneer Tikka Roll</span><span className="font-bold text-zinc-900">₹150</span></div>
                                <div className="flex justify-between text-xs font-semibold text-zinc-800 border-b border-dashed border-zinc-200 pb-2"><span>1x Choco Lava Cake</span><span className="font-bold text-zinc-900">₹90</span></div>
                                <div className="flex justify-between text-sm font-bold text-zinc-900 pt-1"><span>Total Amount</span><span className="text-primary font-extrabold text-base">₹600</span></div>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2.5">
                            <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-md">
                              <ShoppingBag className="w-4 h-4" /> Print Bill & Checkout
                            </button>
                            <span className="text-[9px] text-zinc-400 block text-center font-semibold">Registered: Terminal Counter #1</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="delivery-screen" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="w-full h-full flex flex-col justify-between pt-4">
                          <div>
                            <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-2xl border border-zinc-200/50 shadow-sm">
                              <img src="/logo-delivery.png" alt="Delivery App Logo" className="w-10 h-10 object-contain" />
                              <div>
                                <h5 className="font-extrabold text-zinc-900 text-sm leading-tight">Cafe QR Delivery</h5>
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary bg-orange-50 px-2 py-0.5 rounded-full mt-0.5 border border-orange-100">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                                  Active Shift
                                </span>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h6 className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-wider px-1">Upcoming Deliveries</h6>
                              <div className="bg-white rounded-2xl p-3 border border-zinc-200/50 shadow-sm flex items-center justify-between">
                                <div className="space-y-0.5">
                                  <span className="text-[10px] font-bold text-zinc-400">Order #4829</span>
                                  <h6 className="text-xs font-bold text-zinc-900">Pizza Plaza, Sector 4</h6>
                                  <p className="text-[9px] text-zinc-500 font-medium">Distance: 1.2 km</p>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full shrink-0">Ready</span>
                              </div>
                              <div className="h-28 bg-sky-50 border border-sky-100 rounded-2xl relative overflow-hidden flex items-center justify-center p-2 shadow-inner">
                                <svg className="absolute w-full h-full inset-0 p-4" viewBox="0 0 100 50">
                                  <path d="M 10 40 Q 50 10 90 30" fill="none" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
                                  <path d="M 10 40 Q 50 10 90 30" fill="none" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" />
                                </svg>
                                <div className="absolute left-[13%] bottom-[20%] w-3 h-3 bg-zinc-900 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                                  <div className="w-1 h-1 bg-white rounded-full"></div>
                                </div>
                                <div className="absolute right-[13%] bottom-[38%] text-primary animate-bounce">
                                  <MapPin className="w-4 h-4 fill-primary text-white" />
                                </div>
                                <span className="absolute bottom-2 left-3 text-[8px] font-bold text-zinc-500 bg-white/80 px-2 py-0.5 rounded-full border border-zinc-200">Simulating Route...</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2.5">
                            <button className="w-full py-3.5 bg-zinc-900 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors shadow-md">
                              Start Delivery Route
                            </button>
                            <span className="text-[9px] text-zinc-400 block text-center font-semibold">Driver ID: Riyas (Online)</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-300 rounded-full z-20"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="border-t border-white/30 py-12 px-4 text-center text-zinc-500 text-sm bg-white/40 backdrop-blur-xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cafe QR Logo" className="w-8 h-8 object-contain rounded-md" />
            <span className="font-bold text-zinc-900">Cafe QR POS ERP Ecosystem</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'terms';
                setCurrentView('terms');
                window.scrollTo(0, 0);
              }}
              className="text-zinc-500 hover:text-zinc-700 font-medium transition-colors cursor-pointer"
            >
              Terms & Conditions
            </a>
            <span className="text-zinc-300">•</span>
            <p>© {new Date().getFullYear()} Cafe QR. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ── Checkout Modal ─────────────────────────────────────────── */}
      {checkoutPlan && (
        <CheckoutModal
          plan={checkoutPlan}
          onClose={() => setCheckoutPlan(null)}
          backendApiUrl={backendApiUrl}
        />
      )}

    </div>
  );
}

export default App;
