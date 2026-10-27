import { Star, CheckCircle2, ShoppingBag, ChevronRight, Shield } from 'lucide-react';

interface RealReview {
  id: string;
  name: string;
  badge: string;
  quote: string;
  rating: number;
  date: string;
}

const allReviews: RealReview[] = [
  {
    id: '1',
    name: 'Dharsan Ram',
    badge: 'Local Guide • 26 reviews',
    quote: 'Using this system for a few months, better than many softwares available in the market, user friendly can use in multiple device and android and windows version which can be used simultaneously. Above all really good customer service. Happy to use cafeqr pos',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '7',
    name: 'Tax Bridge',
    badge: 'Business Account',
    quote: 'Excellent experience with Cafe QR POS & ERP. The system is user-friendly, efficient, and makes managing cafe operations much easier. The features are well-designed and the overall experience has been exceptional. Highly recommended!',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '2',
    name: 'Suryanath Ravindranathan',
    badge: 'Verified Customer • 2 photos',
    quote: 'Very user friendly software and good customer support 👍🏽👍🏽👍🏽',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: '8',
    name: 'Cma Grp2',
    badge: 'Cafe Owner',
    quote: 'A fantastic POS and ERP solution for cafes. It makes billing, order management, and day-to-day operations smooth and hassle-free. Easy to use, efficient, and highly recommended for cafe businesses.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Aditya Prakash',
    badge: 'Local Guide • 23 reviews',
    quote: 'Best support team and easy to use billing software ❤️',
    rating: 5,
    date: '1 week ago',
  },
  {
    id: '9',
    name: 'Adham Muhammed',
    badge: 'Verified Customer',
    quote: 'It is an excellent billing software with a simple and user-friendly interface. It makes billing quick, accurate, and convenient. The features are useful for managing daily business operations, and the overall experience has been smooth.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '4',
    name: 'Ashwin Jinan',
    badge: '7 reviews • 1 photo',
    quote: 'Cafe QR handles our daily billing smoothly and keeps order tracking straightforward. It’s a practical, easy-to-use tool that reliably meets our operational needs.',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: '10',
    name: 'Mk Shakeer',
    badge: '5 reviews • 3 photos',
    quote: 'I’m really impressed with Cafe QR POS and the entire Cafe QR team. The system is user-friendly, reliable, and makes day-to-day cafe operations much easier and more efficient.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '5',
    name: 'Sebastian Zacharias',
    badge: '3 reviews',
    quote: 'cafe qr is user friendly software with many features. price reasonable with excellent after sales. we recommend cafe qr to other parties also.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '11',
    name: 'Theertha Sukumar',
    badge: '3 reviews',
    quote: 'I really like how simple CafeQR is to use. It makes ordering quick and convenient without any unnecessary steps.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '6',
    name: 'Babu Francis Ptb',
    badge: 'Verified Customer • 2 photos',
    quote: 'I am using cafe QR more than 6 months. Really very good program, easy to use for beginners also',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '12',
    name: 'Sariga Uk',
    badge: 'Verified Customer',
    quote: 'Cafe QR is a really useful system for managing daily cafe operations. The billing and order management are easy to handle, and the reports are helpful for keeping track of the business. Overall, a smooth and convenient experience.',
    rating: 5,
    date: '1 month ago',
  },
];

function ReviewCard({ review }: { review: RealReview }) {
  return (
    <div className="w-[280px] sm:w-[330px] shrink-0 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-xs hover:shadow-lg hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-0.5 text-amber-400">
            {[...Array(review.rating)].map((_, idx) => (
              <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-[10px] text-zinc-400 font-medium">{review.date}</span>
        </div>
        <p className="text-zinc-800 text-xs sm:text-[13px] leading-relaxed line-clamp-4 font-normal mb-3">
          "{review.quote}"
        </p>
      </div>

      <div className="pt-2.5 border-t border-zinc-100 flex items-center gap-2.5">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-primary/20 to-orange-100 text-primary font-bold text-xs flex items-center justify-center shrink-0 border border-primary/20">
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <h4 className="text-xs font-bold text-zinc-900 truncate">{review.name}</h4>
            <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
          </div>
          <p className="text-[10px] text-zinc-500 truncate">{review.badge}</p>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-16 border-t border-white/20 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-white/30 to-transparent">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 backdrop-blur-md border border-zinc-200 shadow-2xs rounded-full text-xs font-bold text-zinc-800 mb-3">
          <span className="flex items-center justify-center w-3.5 h-3.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.28-2.1 3.665-5.2 3.665-9.12z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.43 7.33 24 12 24z" />
              <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.57H1.24C.45 8.14 0 9.97 0 12s.45 3.86 1.24 5.43l4.04-3.14z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.57 1.24 6.57l4.04 3.14c.95-2.83 3.6-4.96 6.72-4.96z" />
            </svg>
          </span>
          <span>Google Business Verified Reviews</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
          Rated 5.0 Stars by Business Owners
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-sm text-zinc-600 font-medium">
          <span className="text-amber-500 flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="font-extrabold text-zinc-900 text-base">5.0 / 5.0</span>
          <span className="text-zinc-400">•</span>
          <span className="font-semibold text-zinc-700">100% 5-Star Google Feedback</span>
          <span className="text-zinc-400 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200/80 rounded-full text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Verified Customer Reviews
          </span>
        </div>
      </div>

      {/* Modern Auto-Scrolling Single-Row Infinite Marquee Ticker with Edge Fades */}
      <div className="relative w-full overflow-hidden pause-on-hover py-3">
        {/* Left and Right Edge Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-20" />

        {/* Single Sleek Industry-Standard Infinite Marquee */}
        <div className="flex gap-4 animate-marquee">
          {[...allReviews, ...allReviews].map((r, index) => (
            <ReviewCard key={`rev-${index}`} review={r} />
          ))}
        </div>
      </div>

      {/* Conversion Actions Footer (Keeps Visitors Inside the Funnel) */}
      <div className="mt-10 px-4 flex flex-col items-center justify-center gap-3 relative z-30">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact-demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-orange-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <span>Request Free Live Demo</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-50 text-zinc-800 text-xs sm:text-sm font-bold rounded-full border border-zinc-200/90 shadow-2xs hover:shadow-xs transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-primary" />
            <span>View Hardware Kits (From ₹4,999)</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>
        <p className="text-[11px] sm:text-xs text-zinc-500 flex items-center gap-1.5 mt-1 font-medium">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Real, unedited feedback from active businesses across India</span>
        </p>
      </div>
    </section>
  );
}
