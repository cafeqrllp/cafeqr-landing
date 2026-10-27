import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What's included in every plan?",
    a: "Every kit includes the CafeQR POS 1-Year Core License: Fast POS Billing, Tableside QR Ordering, Live Staff Dashboard & Reports, Digital Menu, GST Invoicing, and free onboarding. Powerful ERP sachets (KOT Screen, Inventory ERP, CRM & Credit Ledger) can be added anytime directly from your dashboard."
  },
  {
    q: "Do I need a specific printer?",
    a: "Any 58mm (2-inch) or 80mm (3-inch) Bluetooth thermal printer works with CafeQR POS. Our Starter and Pro kits include a tested, compatible printer so you can start billing immediately."
  },
  {
    q: "Who provides the printer warranty?",
    a: "Hardware warranty is provided exclusively by the printer manufacturer (SHREYANS / Hoin). CafeQR handles all software support, setup, and onboarding. For warranty claims, please contact the manufacturer directly."
  },
  {
    q: "What happens after 1 year?",
    a: "Renew your software subscription at just ₹999/year. No setup fee on renewal. If you purchased a printer kit, the printer is yours to keep forever — no recurring hardware costs."
  },
  {
    q: "How long does printer delivery take?",
    a: "3-5 business days across India. Free shipping on all orders. You'll receive tracking details via SMS and email once dispatched."
  },
  {
    q: "Can I get a refund?",
    a: "Software subscriptions are non-refundable once activated. Hardware can be returned within 7 days of delivery if unopened and in original packaging. Read our full Terms & Conditions for details."
  },
  {
    q: "Does it work offline?",
    a: "CafeQR POS works on Android devices and web browsers. An internet connection is needed for syncing data, but the Android app supports offline billing mode with automatic sync when back online."
  },
  {
    q: "Can I manage multiple branches?",
    a: "Yes! CafeQR supports unlimited branches with role-based access control. Manage staff, inventory, and sales across all your outlets from a single owner dashboard."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-600 text-lg font-medium">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'bg-white border-zinc-200 shadow-[0_8px_30px_rgba(0,0,0,0.06)]'
                    : 'bg-white/60 border-white/60 hover:bg-white/80'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-bold text-sm pr-4 ${isOpen ? 'text-zinc-900' : 'text-zinc-700'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
