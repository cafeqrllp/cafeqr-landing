import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, User, Phone, Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  printer?: string;
  printerSize?: string;
}

interface CheckoutModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
  backendApiUrl: string;
}

interface CustomerForm {
  name: string;
  phone: string;
  email: string;
  addressLine1: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
}

const initialForm: CustomerForm = {
  name: '', phone: '', email: '', addressLine1: '', area: '', city: '', state: '', pincode: ''
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutModal({ plan, onClose, backendApiUrl }: CheckoutModalProps) {
  const [form, setForm] = useState<CustomerForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerForm, string>>>({});
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  // Lock background body scroll and isolate mouse wheel when modal is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, []);

  if (!plan) return null;

  const updateField = (key: keyof CustomerForm, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: '' }));
    setPaymentError('');
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof CustomerForm, string>> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.addressLine1.trim()) e.addressLine1 = 'Address is required';
    if (!form.area.trim()) e.area = 'Area/locality is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.state.trim()) e.state = 'State is required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode)) e.pincode = 'Enter a valid 6-digit pincode';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePayment = async () => {
    if (!validate()) return;
    if (!agreedToTerms) {
      setPaymentError('Please agree to the Terms & Conditions');
      return;
    }

    setLoading(true);
    setPaymentError('');

    try {
      // 1. Create payment order on backend
      const createRes = await fetch(`${backendApiUrl}/api/v1/public/hardware-order/create-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          customer: form
        })
      });

      if (!createRes.ok) {
        const errData = await createRes.json().catch(() => ({}));
        throw new Error(errData.message || 'Failed to create payment order');
      }

      const createData = await createRes.json();
      const payment = createData.data || createData;

      if (!payment.orderId || !payment.keyId) {
        throw new Error('Invalid payment response from server');
      }

      // 2. Open Razorpay checkout
      if (!window.Razorpay) {
        throw new Error('Payment gateway is loading. Please try again in a moment.');
      }

      const options = {
        key: payment.keyId,
        amount: payment.amount,
        currency: payment.currency || 'INR',
        name: 'CafeQR POS',
        description: `${plan.name} — CafeQR POS Kit`,
        order_id: payment.orderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: `+91${form.phone}`
        },
        theme: { color: '#f97316' },
        modal: {
          ondismiss: () => setLoading(false)
        },
        handler: async (response: any) => {
          try {
            // 3. Verify payment on backend
            const verifyRes = await fetch(`${backendApiUrl}/api/v1/public/hardware-order/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                planId: plan.id,
                customer: form
              })
            });

            if (!verifyRes.ok) {
              const errData = await verifyRes.json().catch(() => ({}));
              throw new Error(errData.message || 'Payment verification failed');
            }

            const verifyData = await verifyRes.json();
            setOrderId(verifyData.data?.orderId || response.razorpay_payment_id);
            setSuccess(true);
          } catch (err: any) {
            setPaymentError(err.message || 'Payment succeeded but verification failed. Contact support.');
          } finally {
            setLoading(false);
          }
        }
      };

      const checkout = new window.Razorpay(options);
      checkout.on('payment.failed', (resp: any) => {
        setPaymentError(resp.error?.description || 'Payment failed. Please try again.');
        setLoading(false);
      });
      checkout.open();
    } catch (err: any) {
      setPaymentError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const inputClass = (key: keyof CustomerForm) =>
    `w-full px-4 py-3 bg-zinc-50 border rounded-xl text-sm outline-none transition-all ${
      errors[key] ? 'border-red-400 bg-red-50/50' : 'border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/10'
    }`;

  return (
    <AnimatePresence>
      <div data-lenis-prevent className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.96 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 shrink-0">
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Complete Your Order</h3>
              <p className="text-xs text-zinc-500 mt-0.5">{plan.name}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-400">
              <X className="w-5 h-5" />
            </button>
          </div>

        {/* Scrollable content */}
        <div
          data-lenis-prevent
          onWheel={(e) => e.stopPropagation()}
          className="flex-1 overflow-y-auto px-6 py-5 space-y-5 overscroll-contain"
        >
          {success ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900">Payment Successful!</h4>
              <p className="text-sm text-zinc-600 max-w-xs">
                Your order <strong className="text-zinc-900">{orderId}</strong> is confirmed and your <strong>1-Year CafeQR POS account is active</strong>.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs text-emerald-900 text-left w-full space-y-1.5">
                <p><strong>📧 Account Credentials:</strong> We've emailed your POS login credentials to <strong>{form.email}</strong>.</p>
                <p className="text-[11px] text-emerald-700">Our onboarding specialist will reach out to <strong>{form.phone}</strong> for setup guidance.</p>
              </div>
              {plan.printer && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 w-full text-center">
                  📦 Estimated printer dispatch: <strong>3-5 business days</strong> (Free Shipping)
                </div>
              )}
              <a
                href={typeof window !== 'undefined' && (window.location.hostname.includes('test') || window.location.hostname.includes('localhost')) ? 'https://cafe-test-qr-frontend.vercel.app/login' : 'https://cafeqr-frontend.pages.dev/login/'}
                className="w-full py-3.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors block text-center shadow-lg shadow-orange-500/20"
              >
                Go to POS Login →
              </a>
            </div>
          ) : (
            <>
              {/* Order Summary */}
              <div className="bg-zinc-50 rounded-2xl p-4 border border-zinc-100 space-y-2">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wide">Order Summary</h4>
                {plan.printer && (
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700">{plan.printer}</span>
                    <span className="font-medium text-zinc-800">Included</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-700">CafeQR POS Software — 1 Year</span>
                  <span className="font-medium text-zinc-800">Included</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-700">Free Setup & Onboarding</span>
                  <span className="font-medium text-emerald-600">Free</span>
                </div>
                <div className="border-t border-dashed border-zinc-200 my-2" />
                <div className="flex justify-between text-base font-bold">
                  <span className="text-zinc-900">Total</span>
                  <span className="text-primary">₹{plan.price.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Customer Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wide flex items-center gap-2">
                  <User className="w-3.5 h-3.5" /> Contact Details
                </h4>
                <div>
                  <input className={inputClass('name')} placeholder="Full Name" value={form.name}
                    onChange={e => updateField('name', e.target.value)} />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input className={`${inputClass('phone')} pl-9`} placeholder="Mobile Number"
                        value={form.phone} onChange={e => updateField('phone', e.target.value)}
                        maxLength={10} inputMode="numeric" />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input className={`${inputClass('email')} pl-9`} placeholder="Email"
                        value={form.email} onChange={e => updateField('email', e.target.value)} />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              {plan.printer && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wide flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" /> Shipping Address
                  </h4>
                  <div>
                    <input className={inputClass('addressLine1')} placeholder="House / Flat / Building"
                      value={form.addressLine1} onChange={e => updateField('addressLine1', e.target.value)} />
                    {errors.addressLine1 && <p className="text-xs text-red-500 mt-1">{errors.addressLine1}</p>}
                  </div>
                  <div>
                    <input className={inputClass('area')} placeholder="Area / Locality / Street"
                      value={form.area} onChange={e => updateField('area', e.target.value)} />
                    {errors.area && <p className="text-xs text-red-500 mt-1">{errors.area}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <input className={inputClass('city')} placeholder="City"
                        value={form.city} onChange={e => updateField('city', e.target.value)} />
                      {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <input className={inputClass('state')} placeholder="State"
                        value={form.state} onChange={e => updateField('state', e.target.value)} />
                      {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <input className={inputClass('pincode')} placeholder="Pincode"
                        value={form.pincode} onChange={e => updateField('pincode', e.target.value)}
                        maxLength={6} inputMode="numeric" />
                      {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Warranty Disclaimer */}
              {plan.printer && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
                  <strong>⚠️ Hardware Warranty Notice:</strong> Printer warranty is provided exclusively by the manufacturer. CafeQR provides software support only.
                  <a href="#terms" target="_blank" rel="noopener noreferrer" className="underline ml-1 font-semibold">Read Terms</a>
                </div>
              )}

              {/* Terms checkbox */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={e => { setAgreedToTerms(e.target.checked); setPaymentError(''); }}
                  className="mt-0.5 w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary accent-[#f97316]"
                />
                <span className="text-xs text-zinc-600 leading-relaxed">
                  I agree to the <a href="#terms" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">Terms & Conditions</a> including the hardware warranty disclaimer and refund policy.
                </span>
              </label>

              {/* Error */}
              {paymentError && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-medium">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {paymentError}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer CTA */}
        {!success && (
          <div className="px-6 py-4 border-t border-zinc-100 bg-white">
            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full py-4 bg-primary hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Processing...</>
              ) : (
                `Pay ₹${plan.price.toLocaleString('en-IN')}`
              )}
            </button>
            <p className="text-center text-[10px] text-zinc-400 mt-2 font-semibold uppercase tracking-wider">
              🔒 Secured by Razorpay — 128-bit encryption
            </p>
          </div>
        )}

        {success && (
          <div className="px-6 py-4 border-t border-zinc-100">
            <button onClick={onClose}
              className="w-full py-3.5 bg-zinc-900 text-white font-bold rounded-xl text-sm hover:bg-zinc-800 transition-colors">
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  </AnimatePresence>
);
}


