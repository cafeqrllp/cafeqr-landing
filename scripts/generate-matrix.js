import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// ── City Dataset ─────────────────────────────────────────────────────────────
const cities = [
  {
    slug: 'pos-billing-software-calicut',
    name: 'Calicut (Kozhikode)',
    state: 'Kerala',
    country: 'IN',
    locality: 'Calicut',
    regionName: 'Kerala',
    badge: 'MALABAR FOOD CAPITAL',
    title: '#1 Restaurant & Cafe POS Billing Software in Calicut | CafeQR',
    metaTitle: 'Fast Restaurant & Cafe POS Billing Software in Calicut | CafeQR',
    metaDescription: 'The #1 POS billing machine and Bluetooth thermal printer system for cafes, Malabar bakeries, and tea counters in Calicut and Kerala. Kerala GST compliant, 100% offline billing safeguard.',
    keywords: 'restaurant billing software Calicut, cafe POS Kozhikode, bakery billing software Calicut, thermal printer billing Malabar, CafeQR Calicut',
    heroSubtitle: 'Designed for Calicut\'s high-traffic cafes, Malabar bakeries, and beach restaurants. Instant 3-second counter checkouts, Malayalam WhatsApp onboarding, and 100% offline billing safeguard.',
    neighborhoods: 'Beach Road, Mavoor Road, SM Street, Thondayad, Hilite Mall area, Nadakkavu, and Palayam',
    specialties: 'Malabar dum biryani, Sulaimani tea counters, fresh bakery goods, and late-night seaside cafes',
    localAdvantage: 'Direct WhatsApp onboarding in Malayalam, pre-configured 58mm/80mm Bluetooth printers, and built-in KOT routing for busy kitchen stations.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Calicut.'
  },
  {
    slug: 'pos-billing-software-mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    country: 'IN',
    locality: 'Mumbai',
    regionName: 'Maharashtra',
    badge: 'INDIA\'S FOOD & CAFE CAPITAL',
    title: 'High-Speed Cafe & Restaurant POS Billing Software in Mumbai | CafeQR',
    metaTitle: 'Best Cafe & Restaurant POS Billing Software in Mumbai | CafeQR',
    metaDescription: 'Replace slow, overpriced POS systems in Mumbai. Fast 3-second counter billing, Bluetooth thermal printing, and free direct delivery store for Bandra, Andheri, and South Mumbai cafes.',
    keywords: 'restaurant billing software Mumbai, cafe POS Bandra, bakery billing software Andheri, POS machine South Mumbai, CafeQR Mumbai',
    heroSubtitle: 'Built for Mumbai\'s fast-paced cafes, rooftop bistros, Irani bakeries, and high-volume QSRs. Slash billing times, print dynamic UPI QR codes on bills, and stop paying ₹25,000/year to legacy POS vendors.',
    neighborhoods: 'Bandra, Andheri West, Lower Parel, Colaba, Dadar, Powai, Juhu, and Thane',
    specialties: 'Specialty coffee shops, artisan bakeries, seaside QSRs, and high-density cloud kitchens',
    localAdvantage: 'Maharashtra GST compliance, 100% offline safeguard during Wi-Fi outages, and direct WhatsApp customer ordering eliminating 30% Swiggy/Zomato commission bleed.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Mumbai.'
  },
  {
    slug: 'pos-billing-software-chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    country: 'IN',
    locality: 'Chennai',
    regionName: 'Tamil Nadu',
    badge: 'SOUTH INDIA QSR & CAFE HUB',
    title: 'Fast Restaurant & Cafe POS Billing Software in Chennai | CafeQR',
    metaTitle: 'Best Cafe & Restaurant POS Billing Software in Chennai | CafeQR',
    metaDescription: 'Modern POS billing software and Bluetooth thermal printer kit for cafes, tiffin centers, and bakeries in Chennai (Anna Nagar, T. Nagar, OMR). Instant UPI QR billing & KOT routing.',
    keywords: 'restaurant billing software Chennai, cafe POS Anna Nagar, bakery billing T Nagar, thermal printer billing Chennai, CafeQR Chennai',
    heroSubtitle: 'Tailored for Chennai\'s bustling filter coffee stalls, vegetarian tiffin centers, modern cafes, and OMR cloud kitchens. Fast 2-click counter sales, kitchen token display, and seamless GST invoicing.',
    neighborhoods: 'Anna Nagar, T. Nagar, OMR, Adyar, Velachery, Nungambakkam, and Kilpauk',
    specialties: 'Filter coffee & tea bars, quick tiffin breakfast counters, multi-branch bakeries, and cloud kitchens',
    localAdvantage: 'Instant thermal printing via Bluetooth, customer queue token management, and Tamil Nadu GST compliant reporting.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Chennai.'
  },
  {
    slug: 'pos-billing-software-hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    country: 'IN',
    locality: 'Hyderabad',
    regionName: 'Telangana',
    badge: 'FAST-GROWING CAFE & BIRYANI HUB',
    title: 'Restaurant & Cafe POS Billing Software in Hyderabad | CafeQR',
    metaTitle: 'Best Cafe & Restaurant POS Billing Software in Hyderabad | CafeQR',
    metaDescription: 'High-speed POS billing software and thermal printer system for cafes, chai joints, and restaurants in Hyderabad (Madhapur, Jubilee Hills, Gachibowli). 100% offline reliability.',
    keywords: 'restaurant billing software Hyderabad, cafe POS Madhapur, bakery billing Jubilee Hills, POS machine Gachibowli, CafeQR Hyderabad',
    heroSubtitle: 'Engineered for Hyderabad\'s vibrant late-night drive-ins, Irani chai cafes, Jubilee Hills bistros, and Madhapur IT dining. Multi-terminal KOT routing, dynamic UPI QR on receipts, and offline protection.',
    neighborhoods: 'Madhapur, Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Hitec City, and Secunderabad',
    specialties: 'Irani chai & biscuit points, biryani dining halls, modern co-working cafes, and late-night food trucks',
    localAdvantage: 'Instant table management, multi-device sync across waiter phones and cashier tablet, with zero cloud downtime.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Hyderabad.'
  },
  {
    slug: 'pos-billing-software-delhi',
    name: 'Delhi NCR',
    state: 'Delhi',
    country: 'IN',
    locality: 'Delhi NCR',
    regionName: 'Delhi',
    badge: 'NORTH INDIA BISTRO & CAFE CAPITAL',
    title: 'Modern Cafe & Restaurant POS Billing Software in Delhi NCR | CafeQR',
    metaTitle: 'Best Cafe & Restaurant POS Billing Software in Delhi NCR | CafeQR',
    metaDescription: 'Premium, fast POS billing software and thermal printer kit for cafes, bakeries, and bistros in Delhi, Gurgaon, and Noida. GST compliant, table QR ordering, zero commission delivery.',
    keywords: 'restaurant billing software Delhi, cafe POS Gurgaon, bakery billing Noida, POS software South Delhi, CafeQR Delhi NCR',
    heroSubtitle: 'Designed for high-AOV cafes, artisan cake studios, and quick-serve outlets in Delhi, Gurgaon, and Noida. Deliver sleek customer QR menus, lightning-fast counter checkout, and direct online delivery.',
    neighborhoods: 'Hauz Khas, Connaught Place, Cyber Hub Gurgaon, Sector 29, Noida Sector 18, and Greater Kailash',
    specialties: 'Artisan specialty cafes, European bistros, patisseries, and high-volume delivery kitchens',
    localAdvantage: 'Modern glassmorphic UI, multi-outlet cloud reports for restaurant owners, and free branded customer ordering website.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Delhi NCR.'
  },
  {
    slug: 'pos-billing-software-pune',
    name: 'Pune',
    state: 'Maharashtra',
    country: 'IN',
    locality: 'Pune',
    regionName: 'Maharashtra',
    badge: 'STUDENT & IT CAFE CAPITAL',
    title: 'Fast Cafe & Restaurant POS Billing Software in Pune | CafeQR',
    metaTitle: 'Best Cafe & Restaurant POS Billing Software in Pune | CafeQR',
    metaDescription: 'Ultra-fast POS billing machine and Bluetooth thermal printer kit for cafes, bakeries, and food joints in Pune (FC Road, Koregaon Park, Baner, Viman Nagar). Starts at ₹4,999 complete.',
    keywords: 'restaurant billing software Pune, cafe POS Koregaon Park, bakery billing FC Road, POS machine Baner, CafeQR Pune',
    heroSubtitle: 'Perfect for Pune\'s bustling student hangouts, Koregaon Park specialty roasteries, and Baner IT corridor eateries. Fast 3-second counter checkout, split-bill options, and offline POS protection.',
    neighborhoods: 'FC Road, Koregaon Park, Baner, Viman Nagar, Kothrud, Kalyani Nagar, and Hinjewadi',
    specialties: 'Youth cafes, tea bars, sandwich & burger joints, and modern cloud kitchens',
    localAdvantage: 'Minimal counter footprint with portable 58mm Bluetooth printer, automatic daily sales summaries via WhatsApp, and zero hidden fees.',
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Pune.'
  }
];

// ── Niche Vertical Dataset ───────────────────────────────────────────────────
const niches = [
  {
    slug: 'pos-for-tea-stalls-chai-cafes',
    name: 'Tea Stalls & Chai Cafes',
    badge: 'HIGH-SPEED CHAI & SNACK BILLING',
    title: 'Fast Billing Machine & Bluetooth Printer for Tea Stalls & Chai Cafes | CafeQR',
    metaTitle: 'Best POS Billing Machine for Chai Shops & Tea Stalls | CafeQR',
    metaDescription: 'The #1 fast counter billing system and Bluetooth printer for tea stalls and chai cafes. 2-click billing, UPI QR code on bill, 100% offline mode. Complete kit at ₹4,999.',
    keywords: 'tea stall billing machine, chai cafe POS software, tea counter printer, fast billing machine for tea shop, CafeQR tea stall',
    heroSubtitle: 'Tired of slow pen-and-paper billing or lost cash during morning tea rush? CafeQR gives you a complete 58mm Bluetooth printer + software kit for ₹4,999. Print a tea bill in just 2 seconds.',
    painPoints: [
      { title: 'Rush-Hour Counter Chaos', desc: 'Serving 50 customers in 15 minutes? 2-tap fast checkout prints receipts instantly so customer queues never stall.' },
      { title: 'Loose Change & Cash Leakage', desc: 'Dynamic UPI QR printed on every bill lets customers pay the exact amount via GPay or PhonePe directly.' },
      { title: 'Zero Internet Worries', desc: '100% offline billing safeguard keeps your printer spitting bills even when Wi-Fi drops or SIM signal is weak.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want CafeQR POS with Bluetooth printer for my Tea Stall / Chai Cafe.'
  },
  {
    slug: 'pos-for-cloud-kitchens',
    name: 'Cloud Kitchens & Delivery Brands',
    badge: 'ZERO-COMMISSION DIRECT DELIVERY',
    title: 'Cloud Kitchen POS & Free Branded Delivery Website Software | CafeQR',
    metaTitle: 'Cloud Kitchen POS Software & Zero Commission Delivery | CafeQR',
    metaDescription: 'Stop bleeding 30% to Swiggy & Zomato. CafeQR gives cloud kitchens an all-in-one POS, multi-brand kitchen display (KOT), and a free customer delivery ordering website.',
    keywords: 'cloud kitchen POS software, dark kitchen billing system, zero commission food delivery software, multi brand kitchen POS, CafeQR cloud kitchen',
    heroSubtitle: 'Convert third-party aggregator diners into loyal direct customers. Accept zero-commission online orders through your own branded website, auto-route KOTs to kitchen stations, and keep 100% of your revenue.',
    painPoints: [
      { title: 'Stop 30% Aggregator Commission Bleed', desc: 'Every order through your free CafeQR delivery website goes straight to your bank account with zero platform cuts.' },
      { title: 'Multi-Brand Menu Routing', desc: 'Run 2, 3, or 5 virtual food brands from one kitchen. Manage all orders and kitchen tickets on a single screen.' },
      { title: 'Direct WhatsApp Customer Marketing', desc: 'Own your customer phone numbers. Send automated re-order offers and festival discounts directly via WhatsApp.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want CafeQR POS and free delivery store for my Cloud Kitchen.'
  },
  {
    slug: 'pos-for-ice-cream-dessert-parlors',
    name: 'Ice Cream & Dessert Parlors',
    badge: 'FAST SCOOP & TOPPING MODIFIER BILLING',
    title: 'POS Billing Software for Ice Cream Parlors & Dessert Cafes | CafeQR',
    metaTitle: 'Best POS Billing Software for Ice Cream & Dessert Parlors | CafeQR',
    metaDescription: 'Fast POS billing system for ice cream parlors, waffle bars, and dessert cafes. Manage scoop sizes, cone types, and custom toppings with 2-second counter billing.',
    keywords: 'ice cream parlor billing software, dessert cafe POS, waffle shop billing machine, scoop modifier POS, CafeQR dessert',
    heroSubtitle: 'Handle weekend dessert rushes with ease. Configure flexible scoop sizes, toppings, and sauce modifiers in seconds. High-speed thermal printing keeps lines moving fast.',
    painPoints: [
      { title: 'Complex Scoop & Modifier Billing', desc: 'Easily add single/double scoops, waffle cones, and extra toppings with intuitive 1-tap touch modifiers.' },
      { title: 'Batch & Flavor Inventory Tracking', desc: 'Track tub inventory in real time. Know exactly when high-demand gelato or brownie stocks are running low.' },
      { title: 'Fast Token & Receipt Printing', desc: 'Dual token and customer receipt printing ensures smooth handoff between billing counter and scoop station.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want CafeQR POS for my Ice Cream / Dessert Parlor.'
  },
  {
    slug: 'pos-for-pizzerias',
    name: 'Pizzerias & Italian Cafes',
    badge: 'CRUST & TOPPING KOT ROUTING',
    title: 'Pizzeria POS Billing Software with Kitchen Display & Modifiers | CafeQR',
    metaTitle: 'Best Pizzeria & Pizza Restaurant POS Software | CafeQR',
    metaDescription: 'Specialized POS billing software for pizza shops and Italian cafes. Half-and-half toppings, crust choices, multi-deck oven KOT tickets, and online ordering.',
    keywords: 'pizza billing software, pizzeria POS system, pizza restaurant KOT software, pizza delivery website generator, CafeQR pizzeria',
    heroSubtitle: 'Built for the unique complexities of pizza crafting. Handle crust selections, half-and-half toppings, combos, and direct oven-station KOT routing without errors.',
    painPoints: [
      { title: 'Half-and-Half & Custom Crusts', desc: 'Flawless modifier options for thin crust, cheese burst, gourmet toppings, and combo deals without cashier errors.' },
      { title: 'Oven & Prep Station KOT Routing', desc: 'Orders automatically dispatch to the pizza prep station printer or screen with exact customer customizations.' },
      { title: 'Free Direct Pizza Delivery Store', desc: 'Launch your own branded pizza ordering website with custom delivery radius zones and zero platform commissions.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want CafeQR POS for my Pizzeria.'
  }
];

// ── HTML Template Generator for Cities ───────────────────────────────────────
function generateCityHtml(c) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${c.title}</title>
  <meta name="description" content="${c.metaDescription}">
  <meta name="keywords" content="${c.keywords}">
  <link rel="canonical" href="https://www.cafeqr.in/${c.slug}/">
  <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CafeQR POS ERP">
  <meta property="og:url" content="https://www.cafeqr.in/${c.slug}/">
  <meta property="og:title" content="${c.metaTitle}">
  <meta property="og:description" content="${c.metaDescription}">
  <meta property="og:image" content="https://www.cafeqr.in/logo.png">

  <!-- Mobile & Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" href="/logo.png">
  <link rel="apple-touch-icon" href="/logo.png">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "CafeQR POS ${c.name}",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Android, Windows, Web, iOS",
        "offers": {
          "@type": "Offer",
          "price": "2499",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "32",
          "bestRating": "5"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "CafeQR POS Billing Software ${c.name}",
        "telephone": "+917012120844",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "${c.locality}",
          "addressRegion": "${c.regionName}",
          "addressCountry": "${c.country}"
        },
        "priceRange": "₹₹"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cafeqr.in/" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.cafeqr.in/compare/" },
          { "@type": "ListItem", "position": 3, "name": "${c.name}", "item": "https://www.cafeqr.in/${c.slug}/" }
        ]
      }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #F97316;
      --primary-hover: #EA580C;
      --zinc-900: #0F172A;
      --zinc-800: #1E293B;
      --zinc-600: #475569;
      --zinc-500: #64748B;
      --zinc-200: #E2E8F0;
      --zinc-100: #F1F5F9;
      --zinc-50: #F8FAFC;
      --green-600: #16A34A;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      color: var(--zinc-900);
      background: var(--zinc-50);
      -webkit-font-smoothing: antialiased;
    }

    .banner {
      background: #FFF7ED;
      border-bottom: 1px solid #FFEDD5;
      color: #C2410C;
      text-align: center;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .banner a { color: #EA580C; font-weight: 700; margin-left: 0.5rem; text-decoration: underline; }

    header {
      background: #FFFFFF;
      border-bottom: 1px solid var(--zinc-200);
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .logo-group { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    .logo-group img { width: 36px; height: 36px; object-fit: contain; }
    .logo-text { font-size: 1.25rem; font-weight: 800; color: var(--zinc-900); }
    .nav-cta {
      background: var(--primary);
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.85rem;
      text-decoration: none;
      transition: background 0.2s;
    }
    .nav-cta:hover { background: var(--primary-hover); }

    .container { max-width: 1080px; margin: 0 auto; padding: 3rem 1.5rem; }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #FFEDD5;
      color: #C2410C;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1.25rem;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.15;
      font-weight: 900;
      letter-spacing: -0.03em;
      margin-bottom: 1.25rem;
      color: var(--zinc-900);
    }
    @media (min-width: 768px) { h1 { font-size: 3.25rem; } }

    .hero-lead {
      font-size: 1.15rem;
      color: var(--zinc-600);
      max-width: 780px;
      margin-bottom: 2rem;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
    }
    .btn-main {
      background: #25D366;
      color: white;
      padding: 0.85rem 1.75rem;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
    }
    .btn-sec {
      background: var(--zinc-900);
      color: white;
      padding: 0.85rem 1.75rem;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 3rem 0;
    }
    @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }

    .card {
      background: white;
      border: 1px solid var(--zinc-200);
      border-radius: 1.25rem;
      padding: 1.75rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }
    .card h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem; }
    .card p { font-size: 0.9rem; color: var(--zinc-600); line-height: 1.5; }

    .pricing-box {
      background: white;
      border: 2px solid var(--primary);
      border-radius: 1.5rem;
      padding: 2.5rem;
      margin: 3.5rem 0;
      text-align: center;
      box-shadow: 0 10px 30px rgba(249, 115, 22, 0.1);
    }
    .price-val { font-size: 3rem; font-weight: 900; color: var(--zinc-900); margin: 0.5rem 0; }

    footer {
      border-top: 1px solid var(--zinc-200);
      background: #FFFFFF;
      padding: 2.5rem 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: var(--zinc-500);
    }
    footer a { color: var(--primary); text-decoration: none; font-weight: 600; margin: 0 0.5rem; }
  </style>
</head>

<body>

  <div class="banner">
    🚀 Special ${c.name} Launch: Complete Starter Hardware Kit (POS + 58mm Bluetooth Printer) only ₹4,999.
    <a href="https://wa.me/917012120844?text=${encodeURIComponent(c.whatsappMessage)}" target="_blank">Claim Kit &rarr;</a>
  </div>

  <header>
    <a href="https://www.cafeqr.in/" class="logo-group">
      <img src="/logo.png" alt="CafeQR Logo">
      <span class="logo-text">CafeQR</span>
    </a>
    <a href="https://wa.me/917012120844?text=${encodeURIComponent(c.whatsappMessage)}" target="_blank" class="nav-cta">WhatsApp Demo</a>
  </header>

  <main class="container">
    <div class="badge">📍 ${c.badge}</div>
    <h1>${c.metaTitle}</h1>
    <p class="hero-lead">${c.heroSubtitle}</p>

    <div class="cta-row">
      <a href="https://wa.me/917012120844?text=${encodeURIComponent(c.whatsappMessage)}" target="_blank" class="btn-main">
        <span>💬</span> Chat for 10-Min Demo in ${c.name}
      </a>
      <a href="https://www.cafeqr.in/#pricing" class="btn-sec">View All Plans</a>
    </div>

    <div class="grid-3">
      <div class="card">
        <h3>⚡ 3-Second Counter Billing</h3>
        <p>Built for rush hour queues. Tap items, print thermal receipts via Bluetooth in under 3 seconds, and auto-generate dynamic UPI payment QR codes on every bill.</p>
      </div>
      <div class="card">
        <h3>📶 100% Offline Safeguard</h3>
        <p>Never halt operations when Wi-Fi or broadband drops. CafeQR continues to punch orders, print KOTs, and tally receipts offline, syncing to the cloud automatically once restored.</p>
      </div>
      <div class="card">
        <h3>🛵 Zero-Commission Delivery</h3>
        <p>Tired of losing 30% to food aggregators? CafeQR includes your own free, branded online ordering website so ${c.name} diners order directly from you.</p>
      </div>
    </div>

    <div class="pricing-box">
      <div class="badge">MOST POPULAR IN ${c.name.toUpperCase()}</div>
      <h2>CafeQR Complete Starter Hardware Kit</h2>
      <p style="color: var(--zinc-600); margin-top: 0.5rem;">Everything you need to start professional billing in 10 minutes</p>
      <div class="price-val">₹4,999 <span style="font-size: 1rem; color: var(--zinc-500); font-weight: normal;">/ all-inclusive</span></div>
      <p style="color: #16A34A; font-weight: 700; margin-bottom: 1.5rem;">✓ Portable 58mm Bluetooth Printer Included + 1-Year Full POS License</p>
      <a href="https://wa.me/917012120844?text=${encodeURIComponent(c.whatsappMessage)}" target="_blank" class="btn-main" style="padding: 1rem 2rem;">
        Order Starter Kit for ${c.name} &rarr;
      </a>
    </div>

    <section style="margin: 3.5rem 0;">
      <h2 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 1rem;">Trusted Across ${c.name} Hotspots</h2>
      <p style="color: var(--zinc-600); margin-bottom: 1.5rem;">Serving independent food entrepreneurs in <strong>${c.neighborhoods}</strong>.</p>
      <p style="color: var(--zinc-600); line-height: 1.7;">${c.localAdvantage} Perfect for ${c.specialties}.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 CafeQR. All rights reserved. • <a href="https://www.cafeqr.in/">Visit Homepage</a> • <a href="https://www.cafeqr.in/compare/">Compare POS Alternatives</a></p>
  </footer>

</body>
</html>`;
}

// ── HTML Template Generator for Niches ───────────────────────────────────────
function generateNicheHtml(n) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${n.title}</title>
  <meta name="description" content="${n.metaDescription}">
  <meta name="keywords" content="${n.keywords}">
  <link rel="canonical" href="https://www.cafeqr.in/${n.slug}/">
  <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CafeQR POS ERP">
  <meta property="og:url" content="https://www.cafeqr.in/${n.slug}/">
  <meta property="og:title" content="${n.metaTitle}">
  <meta property="og:description" content="${n.metaDescription}">
  <meta property="og:image" content="https://www.cafeqr.in/logo.png">

  <!-- Mobile & Icons -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" href="/logo.png">
  <link rel="apple-touch-icon" href="/logo.png">

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "CafeQR POS for ${n.name}",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Android, Windows, Web, iOS",
        "offers": {
          "@type": "Offer",
          "price": "4999",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "41",
          "bestRating": "5"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cafeqr.in/" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://www.cafeqr.in/compare/" },
          { "@type": "ListItem", "position": 3, "name": "${n.name}", "item": "https://www.cafeqr.in/${n.slug}/" }
        ]
      }
    ]
  }
  </script>

  <style>
    :root {
      --primary: #F97316;
      --primary-hover: #EA580C;
      --zinc-900: #0F172A;
      --zinc-800: #1E293B;
      --zinc-600: #475569;
      --zinc-500: #64748B;
      --zinc-200: #E2E8F0;
      --zinc-100: #F1F5F9;
      --zinc-50: #F8FAFC;
      --green-600: #16A34A;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      color: var(--zinc-900);
      background: var(--zinc-50);
      -webkit-font-smoothing: antialiased;
    }

    .banner {
      background: #FFF7ED;
      border-bottom: 1px solid #FFEDD5;
      color: #C2410C;
      text-align: center;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .banner a { color: #EA580C; font-weight: 700; margin-left: 0.5rem; text-decoration: underline; }

    header {
      background: #FFFFFF;
      border-bottom: 1px solid var(--zinc-200);
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .logo-group { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    .logo-group img { width: 36px; height: 36px; object-fit: contain; }
    .logo-text { font-size: 1.25rem; font-weight: 800; color: var(--zinc-900); }
    .nav-cta {
      background: var(--primary);
      color: white;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-weight: 700;
      font-size: 0.85rem;
      text-decoration: none;
      transition: background 0.2s;
    }
    .nav-cta:hover { background: var(--primary-hover); }

    .container { max-width: 1080px; margin: 0 auto; padding: 3rem 1.5rem; }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #FFEDD5;
      color: #C2410C;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1.25rem;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.15;
      font-weight: 900;
      letter-spacing: -0.03em;
      margin-bottom: 1.25rem;
      color: var(--zinc-900);
    }
    @media (min-width: 768px) { h1 { font-size: 3.25rem; } }

    .hero-lead {
      font-size: 1.15rem;
      color: var(--zinc-600);
      max-width: 780px;
      margin-bottom: 2rem;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-bottom: 2rem;
    }
    .btn-main {
      background: #25D366;
      color: white;
      padding: 0.85rem 1.75rem;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
    }
    .btn-sec {
      background: var(--zinc-900);
      color: white;
      padding: 0.85rem 1.75rem;
      border-radius: 0.75rem;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin: 3rem 0;
    }
    @media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }

    .card {
      background: white;
      border: 1px solid var(--zinc-200);
      border-radius: 1.25rem;
      padding: 1.75rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    }
    .card h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem; }
    .card p { font-size: 0.9rem; color: var(--zinc-600); line-height: 1.5; }

    .pricing-box {
      background: white;
      border: 2px solid var(--primary);
      border-radius: 1.5rem;
      padding: 2.5rem;
      margin: 3.5rem 0;
      text-align: center;
      box-shadow: 0 10px 30px rgba(249, 115, 22, 0.1);
    }
    .price-val { font-size: 3rem; font-weight: 900; color: var(--zinc-900); margin: 0.5rem 0; }

    footer {
      border-top: 1px solid var(--zinc-200);
      background: #FFFFFF;
      padding: 2.5rem 1.5rem;
      text-align: center;
      font-size: 0.85rem;
      color: var(--zinc-500);
    }
    footer a { color: var(--primary); text-decoration: none; font-weight: 600; margin: 0 0.5rem; }
  </style>
</head>

<body>

  <div class="banner">
    🔥 Built for ${n.name}: Plug-and-play POS Kit with 58mm Bluetooth Printer just ₹4,999.
    <a href="https://wa.me/917012120844?text=${encodeURIComponent(n.whatsappMessage)}" target="_blank">Claim Kit &rarr;</a>
  </div>

  <header>
    <a href="https://www.cafeqr.in/" class="logo-group">
      <img src="/logo.png" alt="CafeQR Logo">
      <span class="logo-text">CafeQR</span>
    </a>
    <a href="https://wa.me/917012120844?text=${encodeURIComponent(n.whatsappMessage)}" target="_blank" class="nav-cta">WhatsApp Demo</a>
  </header>

  <main class="container">
    <div class="badge">🔥 ${n.badge}</div>
    <h1>${n.metaTitle}</h1>
    <p class="hero-lead">${n.heroSubtitle}</p>

    <div class="cta-row">
      <a href="https://wa.me/917012120844?text=${encodeURIComponent(n.whatsappMessage)}" target="_blank" class="btn-main">
        <span>💬</span> Chat for 10-Min Demo
      </a>
      <a href="https://www.cafeqr.in/#pricing" class="btn-sec">View All Plans</a>
    </div>

    <div class="grid-3">
      ${n.painPoints.map(p => `
      <div class="card">
        <h3>⚡ ${p.title}</h3>
        <p>${p.desc}</p>
      </div>`).join('')}
    </div>

    <div class="pricing-box">
      <div class="badge">RECOMMENDED FOR ${n.name.toUpperCase()}</div>
      <h2>CafeQR Complete Starter Hardware Kit</h2>
      <p style="color: var(--zinc-600); margin-top: 0.5rem;">Everything you need to launch professional billing in 10 minutes</p>
      <div class="price-val">₹4,999 <span style="font-size: 1rem; color: var(--zinc-500); font-weight: normal;">/ all-inclusive</span></div>
      <p style="color: #16A34A; font-weight: 700; margin-bottom: 1.5rem;">✓ Portable 58mm Bluetooth Printer Included + 1-Year Full POS License</p>
      <a href="https://wa.me/917012120844?text=${encodeURIComponent(n.whatsappMessage)}" target="_blank" class="btn-main" style="padding: 1rem 2rem;">
        Get Started Today &rarr;
      </a>
    </div>
  </main>

  <footer>
    <p>&copy; 2026 CafeQR. All rights reserved. • <a href="https://www.cafeqr.in/">Visit Homepage</a> • <a href="https://www.cafeqr.in/compare/">Compare POS Alternatives</a></p>
  </footer>

</body>
</html>`;
}

// ── Main Execution ───────────────────────────────────────────────────────────
async function run() {
  console.log('🚀 Starting Programmatic Matrix Generation...');

  const allItems = [...cities, ...niches];

  // 1. Generate HTML Files
  for (const item of allItems) {
    const itemDir = path.join(publicDir, item.slug);
    if (!fs.existsSync(itemDir)) {
      fs.mkdirSync(itemDir, { recursive: true });
    }
    const htmlPath = path.join(itemDir, 'index.html');
    const htmlContent = 'locality' in item ? generateCityHtml(item) : generateNicheHtml(item);
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
    console.log(`✓ Generated: ${item.slug}/index.html`);
  }

  // 2. Update Sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  for (const item of allItems) {
    const pageUrl = `https://www.cafeqr.in/${item.slug}/`;
    if (!sitemapContent.includes(pageUrl)) {
      const entry = `  <url>
    <loc>${pageUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
`;
      sitemapContent = sitemapContent.replace('</urlset>', `${entry}</urlset>`);
      console.log(`✓ Added to sitemap: ${pageUrl}`);
    }
  }
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');

  // 3. Update llms.txt
  const llmsPath = path.join(publicDir, 'llms.txt');
  let llmsContent = fs.readFileSync(llmsPath, 'utf-8');

  for (const item of allItems) {
    const pageUrl = `https://www.cafeqr.in/${item.slug}/`;
    if (!llmsContent.includes(pageUrl)) {
      const entry = `- [${item.name} POS Software](${pageUrl}): ${item.metaDescription || item.title}\n`;
      llmsContent += entry;
      console.log(`✓ Added to llms.txt: ${pageUrl}`);
    }
  }
  fs.writeFileSync(llmsPath, llmsContent, 'utf-8');

  // 4. Update compare/index.html Directory Hub
  const comparePath = path.join(publicDir, 'compare', 'index.html');
  if (fs.existsSync(comparePath)) {
    let compareContent = fs.readFileSync(comparePath, 'utf-8');
    
    // Check if city cards exist
    for (const c of cities) {
      if (!compareContent.includes(c.slug)) {
        const cardHtml = `
        <div class="card">
          <div class="badge">REGIONAL HUB</div>
          <div>
            <h3>${c.name} Restaurant POS</h3>
            <p>${c.heroSubtitle.slice(0, 130)}...</p>
          </div>
          <a href="/${c.slug}/" class="btn-link">Explore ${c.name} Hub &rarr;</a>
        </div>`;
        // Insert before the last closing div of grid
        compareContent = compareContent.replace('</div>\n    </div>\n  </main>', `${cardHtml}\n      </div>\n    </div>\n  </main>`);
        console.log(`✓ Added ${c.name} to /compare/ hub`);
      }
    }
    fs.writeFileSync(comparePath, compareContent, 'utf-8');
  }

  console.log(`\n🎉 Matrix Generation Complete! Generated ${allItems.length} pages.`);
}

run().catch(console.error);
