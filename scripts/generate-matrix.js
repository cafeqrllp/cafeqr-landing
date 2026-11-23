import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// ── Niche Vertical Dataset (Customized Deeply per Sector) ────────────────────
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
    receiptHeader: 'ROYAL CHAI & SNACK POINT',
    receiptSub: 'Chai Counter • Token Station',
    receiptItems: [
      { name: '3x Cutting Masala Chai @ ₹20', price: '₹60.00' },
      { name: '2x Bun Maska @ ₹40', price: '₹80.00' },
      { name: '2x Hot Samosa @ ₹20', price: '₹40.00' }
    ],
    receiptSubtotal: '₹180.00',
    receiptTax: '₹0.00 (Inclusive)',
    receiptTotal: '₹180.00',
    receiptToken: 'TOKEN #042',
    receiptPaidVia: 'PAID VIA UPI (SCAN & PAY)',
    printerImg: '/printer-2inch.png',
    printerName: '58mm Portable Bluetooth Printer',
    printerBadge: 'Pocket Size • Battery Powered',
    painPoints: [
      { title: 'Morning Rush-Hour Queue Speed', desc: 'Serving 50 customers in 15 minutes? 2-tap fast checkout prints thermal receipts in 2 seconds so morning tea queues never stall.' },
      { title: 'Eliminate Loose Change & Cash Leakage', desc: 'A dynamic UPI QR code printed directly on every bill lets customers pay the exact ₹20 or ₹40 via GPay/PhonePe directly to your bank.' },
      { title: 'Zero Computer Training Needed', desc: 'Large, intuitive touch buttons with food pictures make it effortless for any counter helper to punch bills with zero training.' }
    ],
    comparison: [
      { feature: 'Counter Billing Speed', cafeqr: '2-Click Checkout (2 Seconds)', legacy: 'Slow Manual Pen & Calculator' },
      { feature: 'UPI Payment Collection', cafeqr: 'Dynamic QR on Bill (Exact Amount)', legacy: 'Static standee (Staff must verify phone)' },
      { feature: 'Complete Hardware Kit Cost', cafeqr: '₹4,999 (Bluetooth Printer Included)', legacy: '₹15,000+ proprietary handheld POS' },
      { feature: 'Offline Safeguard', cafeqr: '100% Offline (Works without SIM/Wi-Fi)', legacy: 'Freezes when network drops' }
    ],
    faqs: [
      { q: 'Can my tea stall staff use this without computer knowledge?', a: 'Yes! The CafeQR POS interface uses big, visual item buttons designed for mobile screens. Any staff member can learn to tap items and print bills in under 5 minutes.' },
      { q: 'How fast does a tea bill print on the Bluetooth printer?', a: 'Bills print in approximately 2 seconds over high-speed Bluetooth ESC/POS commands, keeping high-volume morning tea lines moving rapidly.' },
      { q: 'Does the UPI QR code on the bill prevent payment fraud?', a: 'Yes. The printed receipt generates a specific UPI QR code matching the exact bill total, eliminating manual amount entry mistakes and fake payment screenshot scams.' },
      { q: 'What is included in the ₹4,999 complete kit?', a: 'You receive a brand-new 58mm portable Bluetooth thermal printer with manufacturer warranty, a 1-year CafeQR POS Core license, free menu digitization, and WhatsApp support.' }
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
    receiptHeader: 'CLOUD KITCHEN DIRECT ORDER #302',
    receiptSub: 'The Biryani Co. • Online Delivery',
    receiptItems: [
      { name: '1x Hyderabadi Dum Biryani Combo', price: '₹299.00' },
      { name: '2x Garlic Naan with Butter', price: '₹70.00' },
      { name: '1x Gulab Jamun (Pack of 2)', price: '₹60.00' }
    ],
    receiptSubtotal: '₹429.00',
    receiptTax: '₹21.45 (GST 5%)',
    receiptTotal: '₹450.45',
    receiptToken: 'DIRECT WEB ORDER',
    receiptPaidVia: 'PREPAID ONLINE • 0% AGGREGATOR COMMISSION',
    printerImg: '/printer-3inch.png',
    printerName: '80mm High-Speed Auto-Cutter Printer',
    printerBadge: 'Multi-Brand Kitchen KOT Dispatch',
    painPoints: [
      { title: 'Stop 30% Aggregator Commission Bleed', desc: 'Every order through your free CafeQR delivery store goes straight to your bank account with zero platform cuts, saving ₹40,000+ monthly.' },
      { title: 'Manage Multiple Virtual Brands on 1 Screen', desc: 'Run 2, 3, or 5 virtual food concepts from a single kitchen space. Manage all incoming menus and tickets on one master tablet.' },
      { title: 'Direct WhatsApp Customer Retention', desc: 'Own your customer phone numbers and ordering history. Send automated weekend discount coupons directly to their WhatsApp.' }
    ],
    comparison: [
      { feature: 'Platform Commission Cut', cafeqr: '0% Commission (Keep 100% Revenue)', legacy: '25% – 33% (Swiggy / Zomato)' },
      { feature: 'Customer Data Ownership', cafeqr: '100% Direct Phone & Order Records', legacy: 'Masked customer phone numbers' },
      { feature: 'Multi-Brand Kitchen KOT', cafeqr: 'Single Tablet Centralized Hub', legacy: 'Cluttered desk with 4 separate tablets' },
      { feature: 'Software Pricing', cafeqr: '₹2,499/year (or ₹4,999 with printer)', legacy: '₹25,000+ high annual POS lock-ins' }
    ],
    faqs: [
      { q: 'How does the free online ordering website work?', a: 'CafeQR generates a branded mobile ordering website for your cloud kitchen with your logo, menu, and payment gateway. Diners order directly from you without paying Swiggy/Zomato commission cuts.' },
      { q: 'Can I manage 4 different virtual food brands on one POS?', a: 'Yes! You can host multiple distinct food concepts from a single dashboard, with orders neatly labeled and routed to their respective kitchen prep stations.' },
      { q: 'Can I print kitchen tickets (KOT) automatically when an order arrives?', a: 'Yes. Incoming delivery orders instantly trigger an automatic kitchen order ticket (KOT) on your thermal printer or kitchen tablet screen.' },
      { q: 'How do I market my direct website to customers?', a: 'Every delivery package can include a small flyer or printed bill sticker offering 10% off their next direct order via your CafeQR website, converting aggregator users into direct repeat buyers.' }
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
    receiptHeader: 'BLISS GELATO & DESSERT LOUNGE',
    receiptSub: 'Scoop Counter • Table 02',
    receiptItems: [
      { name: '1x Dark Chocolate Gelato (Double Scoop)', price: '₹180.00' },
      { name: '  ↳ Modifier: Fresh Waffle Cone', price: '₹30.00' },
      { name: '  ↳ Modifier: Hot Fudge Drizzle', price: '₹30.00' },
      { name: '1x Red Velvet Waffle Sundae', price: '₹160.00' }
    ],
    receiptSubtotal: '₹400.00',
    receiptTax: '₹20.00 (GST 5%)',
    receiptTotal: '₹420.00',
    receiptToken: 'TOKEN #088 (SCOOP BAR)',
    receiptPaidVia: 'PAID VIA UPI • GPAY',
    printerImg: '/printer-2inch.png',
    printerName: '58mm Bluetooth Thermal Printer',
    printerBadge: 'Compact Counter Footprint',
    painPoints: [
      { title: '1-Tap Scoop & Topping Modifiers', desc: 'Easily punch single/double scoops, cone variations, waffle bowls, and syrup toppings in seconds without cashier confusion.' },
      { title: 'Tub & Flavor Inventory Depletion', desc: 'Track flavor tub stock in real time. Automatically know when high-demand Belgian chocolate or mango gelato runs low.' },
      { title: 'Dual Billing & Scoop Token Flow', desc: 'Print a customer receipt with UPI QR and a separate pickup token ticket for the scoop station to ensure zero customer handoff errors.' }
    ],
    comparison: [
      { feature: 'Flavor & Topping Modifiers', cafeqr: '1-Tap Touch Custom Modifiers', legacy: 'Tedious manual dropdowns / notes' },
      { feature: 'Sunday Rush Performance', cafeqr: '3-Second Checkout with Bluetooth Print', legacy: 'Slow loading software causes queues' },
      { feature: 'Hardware Bundle Price', cafeqr: '₹4,999 Complete (Printer Included)', legacy: '₹28,000+ proprietary POS terminals' },
      { feature: 'Offline Operation', cafeqr: '100% Offline Safeguard', legacy: 'Halts when customer Wi-Fi is busy' }
    ],
    faqs: [
      { q: 'Can I add custom cone types, scoops, and extra toppings easily?', a: 'Yes! CafeQR has a powerful modifier engine. When cashiers tap an ice cream item, a quick popup lets them select Single/Double scoop, Waffle Cone or Cup, and add toppings with one touch.' },
      { q: 'Can it print a separate token for the customer to collect at the scoop bar?', a: 'Yes. You can configure CafeQR to print a customer tax receipt and an automated pickup token number for clean queue organization.' },
      { q: 'What happens if our shop Wi-Fi disconnects during a Sunday rush?', a: 'CafeQR operates 100% offline. You can continue punching orders and printing Bluetooth receipts without interruption. All data syncs to the cloud when connection returns.' },
      { q: 'Does the ₹4,999 starter kit work on an Android tablet or phone?', a: 'Yes. CafeQR runs seamlessly on any Android tablet, smartphone, iPad, or Windows PC, connecting wirelessly to the included Bluetooth printer.' }
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
    receiptHeader: 'ARTISAN PIZZERIA & CAFE',
    receiptSub: 'Table 06 • Oven Station KOT #104',
    receiptItems: [
      { name: '1x 12" Hand-Tossed Pizza', price: '₹420.00' },
      { name: '  ↳ [Half 1]: Margherita Classic', price: '₹0.00' },
      { name: '  ↳ [Half 2]: Peri-Peri Paneer & Peppers', price: '₹0.00' },
      { name: '  ↳ Crust: Stuffed Cheese Burst', price: '₹70.00' },
      { name: '1x Garlic Breadsticks with Dip', price: '₹130.00' },
      { name: '1x Peach Iced Tea', price: '₹90.00' }
    ],
    receiptSubtotal: '₹710.00',
    receiptTax: '₹35.50 (GST 5%)',
    receiptTotal: '₹745.50',
    receiptToken: 'TABLE 06 • KITCHEN TICKET #104',
    receiptPaidVia: 'PAID VIA CREDIT CARD • EDC',
    printerImg: '/printer-3inch.png',
    printerName: '80mm High-Speed Auto-Cutter Printer',
    printerBadge: 'Oven & Bar KOT Dispatch',
    painPoints: [
      { title: 'Half-and-Half & Crust Modifiers', desc: 'Easily split pizzas into two topping styles, add cheese burst or sourdough crusts, and manage combos without manual cashier workarounds.' },
      { title: 'Oven & Prep Station KOT Routing', desc: 'Orders automatically dispatch to the pizza prep table or oven screen with explicit customer instructions, preventing kitchen mistakes.' },
      { title: 'Direct Zero-Commission Pizza Delivery', desc: 'Launch your own branded pizza ordering store with custom delivery radii, keeping 100% of pizza margins away from aggregators.' }
    ],
    comparison: [
      { feature: 'Half-and-Half Customization', cafeqr: 'Built-in 1-Click Split Toppings', legacy: 'Complex cashier notes / errors' },
      { feature: 'Prep Station Kitchen Routing', cafeqr: 'Multi-Printer / Screen KOT Routing', legacy: 'Single loud receipt printer' },
      { feature: 'Delivery Website Included', cafeqr: 'Free Direct Store (0% Commission)', legacy: '₹15,000+ add-on module' },
      { feature: 'Hardware Freedom', cafeqr: 'Works on any tablet + Bluetooth printer', legacy: 'Locked proprietary hardware' }
    ],
    faqs: [
      { q: 'Can cashiers easily split pizzas into Half-and-Half toppings?', a: 'Yes! CafeQR supports flexible half-and-half modifiers. Cashiers can select two different topping halves and custom crust types with simple touchscreen taps.' },
      { q: 'Can pizza tickets route to the pizza oven and beverage bar separately?', a: 'Yes. CafeQR supports multi-station KOT routing. Food items print at the pizza kitchen station while mocktails and beverages print at the bar station.' },
      { q: 'Does CafeQR include an online website for customer pizza delivery?', a: 'Yes. Every CafeQR plan includes your own branded direct ordering website with delivery zone management and zero aggregator commission fees.' },
      { q: 'Can I connect thermal receipt printers with automatic paper cutters?', a: 'Yes. CafeQR supports both 58mm compact mobile printers and 80mm high-speed heavy-duty auto-cutters via Bluetooth, USB, or LAN.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want CafeQR POS for my Pizzeria.'
  }
];

// ── Regional City Hub Dataset (Customized Deeply per Metro City) ─────────────
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
    neighborhoods: 'Beach Road, Mavoor Road, SM Street, Thondayad, Hilite Mall corridor, Nadakkavu, and Palayam',
    specialties: 'Malabar dum biryani, Sulaimani tea counters, fresh bakery goods, and late-night seaside cafes',
    localAdvantage: 'Direct WhatsApp onboarding in Malayalam, pre-configured 58mm/80mm Bluetooth printers, and built-in KOT routing for busy kitchen stations.',
    receiptHeader: 'CALICUT MALABAR BISTRO',
    receiptSub: 'Beach Road • Kozhikode',
    receiptItems: [
      { name: '2x Special Malabar Dum Biryani', price: '₹440.00' },
      { name: '2x Sulaimani Tea with Mint', price: '₹40.00' },
      { name: '1x Kozhikodan Halwa Plate', price: '₹90.00' }
    ],
    receiptSubtotal: '₹570.00',
    receiptTax: '₹28.50 (Kerala GST 5%)',
    receiptTotal: '₹598.50',
    receiptToken: 'TABLE 04 • BILL #1084',
    receiptPaidVia: 'PAID VIA UPI • GPAY',
    faqs: [
      { q: 'Can I get Malayalam support and onboarding for my staff in Calicut?', a: 'Yes! Our customer success team provides full onboarding, menu setup, and ongoing support via WhatsApp and phone in Malayalam and English.' },
      { q: 'Is CafeQR fully compliant with Kerala GST tax invoicing?', a: 'Yes. CafeQR automatically calculates CGST and SGST (5%), prints your GSTIN on bills, and exports monthly GSTR-1 ready Excel spreadsheets.' },
      { q: 'Does CafeQR work if internet broadband drops in Calicut?', a: 'Yes. CafeQR features a 100% offline billing engine. Your counter keeps billing and printing tickets offline, automatically syncing once connection restores.' },
      { q: 'How quickly can I get the ₹4,999 printer kit delivered in Kozhikode?', a: 'Hardware starter kits dispatch via express courier and typically reach Calicut within 24 to 48 hours, pre-configured for instant plug-and-play.' }
    ],
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
    receiptHeader: 'BANDRA CAFE & ROASTERY',
    receiptSub: 'Pali Hill • Bandra West',
    receiptItems: [
      { name: '2x Oat Milk Flat White', price: '₹480.00' },
      { name: '1x Truffle Mushroom Sourdough', price: '₹340.00' },
      { name: '1x Blueberry Cheesecake Slice', price: '₹220.00' }
    ],
    receiptSubtotal: '₹1,040.00',
    receiptTax: '₹52.00 (GST 5%)',
    receiptTotal: '₹1,092.00',
    receiptToken: 'TABLE 12 • MUMBAI POS V2',
    receiptPaidVia: 'PAID VIA APPLE PAY / CARD',
    faqs: [
      { q: 'Why are Mumbai cafes switching from Petpooja to CafeQR?', a: 'Mumbai restaurateurs save up to ₹20,000 annually. CafeQR offers complete hardware freedom, zero per-transaction commissions, and an all-inclusive ₹4,999 starter kit without renewal traps.' },
      { q: 'Can CafeQR handle high-traffic rush hours in Bandra and Lower Parel?', a: 'Yes. With our sub-3-second counter billing and instant Bluetooth printing, cashiers clear customer lines with zero system lag or freeze.' },
      { q: 'Does CafeQR support Maharashtra GST reporting?', a: 'Yes. All invoices generate compliant B2B/B2C GST numbers with one-click export for CA audit and monthly filing.' },
      { q: 'Can I launch my own direct delivery store to combat Swiggy/Zomato in Mumbai?', a: 'Yes! CafeQR includes your own zero-commission online delivery website, allowing Mumbai food outlets to save thousands in aggregator cuts.' }
    ],
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
    receiptHeader: 'CHENNAI TIFFIN & COFFEE BAR',
    receiptSub: 'Anna Nagar • Chennai',
    receiptItems: [
      { name: '3x Degree Filter Coffee', price: '₹90.00' },
      { name: '2x Ghee Podi Roast Dosa', price: '₹180.00' },
      { name: '2x Medu Vada with Sambar', price: '₹80.00' }
    ],
    receiptSubtotal: '₹350.00',
    receiptTax: '₹17.50 (Tamil Nadu GST 5%)',
    receiptTotal: '₹367.50',
    receiptToken: 'TOKEN #055 (COUNTER QUEUE)',
    receiptPaidVia: 'PAID VIA UPI • PHONEPE',
    faqs: [
      { q: 'Can CafeQR manage fast morning token queues for Chennai tiffin centers?', a: 'Yes! CafeQR prints high-speed customer tokens and kitchen tickets in under 3 seconds, keeping breakfast crowds moving smoothly.' },
      { q: 'Does CafeQR generate dynamic UPI QR on thermal bills?', a: 'Yes. Customers simply scan the printed QR code with GPay, PhonePe, or Paytm to pay the exact amount, eliminating loose coin change delays.' },
      { q: 'Is CafeQR suitable for cloud kitchens along the OMR tech corridor?', a: 'Yes. Cloud kitchens can manage multiple online menus and route KOTs to kitchen screens seamlessly from a single tablet.' },
      { q: 'What printer hardware works best for Chennai cafes?', a: 'Our ₹4,999 starter kit includes a durable 58mm Bluetooth thermal printer, or you can opt for the 80mm Pro high-speed cutter for dine-in restaurants.' }
    ],
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
    receiptHeader: 'MADHAPUR BIRYANI & CHAI HUB',
    receiptSub: 'Hitec City • Hyderabad',
    receiptItems: [
      { name: '2x Special Mutton Biryani', price: '₹620.00' },
      { name: '4x Irani Chai with Osmania Biscuits', price: '₹120.00' },
      { name: '1x Double Ka Meetha', price: '₹80.00' }
    ],
    receiptSubtotal: '₹820.00',
    receiptTax: '₹41.00 (Telangana GST 5%)',
    receiptTotal: '₹861.00',
    receiptToken: 'TABLE 08 • DINE-IN',
    receiptPaidVia: 'PAID VIA UPI • GPAY',
    faqs: [
      { q: 'Can waiters take orders on their Android phones at dining tables?', a: 'Yes! Waiters can log into the CafeQR mobile interface on their own phones to punch table orders, which instantly print tickets in the kitchen.' },
      { q: 'Does CafeQR handle split bills for corporate groups in Madhapur / Hitec City?', a: 'Yes. Cashiers can split bills by item or by percentage in seconds, making group corporate lunch settlements effortless.' },
      { q: 'Is CafeQR reliable for late-night drive-ins and food trucks in Hyderabad?', a: 'Yes. With 100% offline operation and a portable battery-powered Bluetooth printer, you can bill outside anywhere without internet issues.' },
      { q: 'How does CafeQR help Hyderabad biryani restaurants increase direct sales?', a: 'CafeQR provides a free direct online delivery website with zero aggregator commission, allowing restaurants to keep 100% of delivery revenue.' }
    ],
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
    receiptHeader: 'CYBER HUB CAFE & BAKERY',
    receiptSub: 'DLF Cyber City • Gurgaon NCR',
    receiptItems: [
      { name: '2x Artisan Cold Brew Coffee', price: '₹440.00' },
      { name: '1x Truffle Mushroom Penne Pasta', price: '₹410.00' },
      { name: '1x Avocado & Feta Sourdough Toast', price: '₹320.00' }
    ],
    receiptSubtotal: '₹1,170.00',
    receiptTax: '₹58.50 (GST 5%)',
    receiptTotal: '₹1,228.50',
    receiptToken: 'TABLE 14 • NCR POS',
    receiptPaidVia: 'PAID VIA CREDIT CARD • TAP & PAY',
    faqs: [
      { q: 'Can Delhi NCR cafes use QR codes for table ordering?', a: 'Yes! Customers simply scan the stylish table QR code with their phone camera to view the interactive menu, place orders, and pay directly.' },
      { q: 'Does CafeQR support multi-outlet chain management across Delhi, Gurgaon, and Noida?', a: 'Yes. Owners can track real-time sales, inventory levels, and staff performance across all outlets from a single cloud dashboard.' },
      { q: 'Is the system compliant with Delhi and Haryana GST laws?', a: 'Yes. Invoices include full GST breakdowns with customizable tax rates for food, beverages, and alcoholic service where applicable.' },
      { q: 'What hardware is recommended for premium bistros in Gurgaon and South Delhi?', a: 'Our Pro 80mm Kit (₹7,999) with an automatic paper cutter and customer-facing QR display provides a premium checkout aesthetic.' }
    ],
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
    receiptHeader: 'KOREGAON PARK ROASTERY & BISTRO',
    receiptSub: 'North Main Road • Pune',
    receiptItems: [
      { name: '2x Pour-Over Ethiopian Coffee', price: '₹420.00' },
      { name: '1x Jalapeno Cheese Melt Sandwich', price: '₹220.00' },
      { name: '1x Warm Chocolate Walnut Brownie', price: '₹140.00' }
    ],
    receiptSubtotal: '₹780.00',
    receiptTax: '₹39.00 (Maharashtra GST 5%)',
    receiptTotal: '₹819.00',
    receiptToken: 'TABLE 05 • PUNE POS',
    receiptPaidVia: 'PAID VIA UPI • GPAY',
    faqs: [
      { q: 'Is CafeQR affordable for student cafes and new outlets in Pune?', a: 'Yes! Our ₹4,999 complete starter kit includes both the Bluetooth printer and a 1-year POS license with zero hidden setup fees or monthly surcharges.' },
      { q: 'Can Pune cafes print dynamic UPI QR codes directly on receipts?', a: 'Yes. Every bill prints a scannable UPI QR code for GPay and PhonePe, so students and patrons can settle bills in 2 seconds.' },
      { q: 'Does CafeQR support recipe stock tracking for bakeries and roasteries?', a: 'Yes. Track coffee beans, milk, and bakery ingredients automatically as bills are punched, alerting you before key items run out.' },
      { q: 'How fast is customer support if we need assistance in Pune?', a: 'We provide direct priority WhatsApp and phone support with a typical response time under 10 minutes.' }
    ],
    whatsappMessage: 'Hi CafeQR! I want to get started with CafeQR POS for my restaurant in Pune.'
  }
];

// ── Master HTML Template Generator (Agency-Grade, International Standard) ──
function generateCustomPageHtml(item, isCity) {
  const breadcrumbCategory = isCity ? 'Locations' : 'Solutions';
  const whatsappUrl = `https://wa.me/917012120844?text=${encodeURIComponent(item.whatsappMessage)}`;

  // FAQ Schema JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': item.faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a
      }
    }))
  };

  const businessSchema = isCity ? {
    '@type': 'LocalBusiness',
    'name': `CafeQR POS Billing Software ${item.name}`,
    'telephone': '+917012120844',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': item.locality,
      'addressRegion': item.regionName,
      'addressCountry': item.country
    },
    'priceRange': '₹₹'
  } : {
    '@type': 'Service',
    'name': `CafeQR POS Billing System for ${item.name}`,
    'provider': {
      '@type': 'Organization',
      'name': 'CafeQR POS'
    }
  };

  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${item.title}</title>
  <meta name="description" content="${item.metaDescription}">
  <meta name="keywords" content="${item.keywords}">
  <link rel="canonical" href="https://www.cafeqr.in/${item.slug}/">
  <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Context">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="CafeQR POS ERP">
  <meta property="og:url" content="https://www.cafeqr.in/${item.slug}/">
  <meta property="og:title" content="${item.metaTitle}">
  <meta property="og:description" content="${item.metaDescription}">
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
        "name": "CafeQR POS ${item.name}",
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
          "reviewCount": "48",
          "bestRating": "5"
        }
      },
      ${JSON.stringify(businessSchema)},
      ${JSON.stringify(faqSchema)},
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cafeqr.in/" },
          { "@type": "ListItem", "position": 2, "name": "${breadcrumbCategory}", "item": "https://www.cafeqr.in/compare/" },
          { "@type": "ListItem", "position": 3, "name": "${item.name}", "item": "https://www.cafeqr.in/${item.slug}/" }
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
      --zinc-700: #334155;
      --zinc-600: #475569;
      --zinc-500: #64748B;
      --zinc-200: #E2E8F0;
      --zinc-100: #F1F5F9;
      --zinc-50: #F8FAFC;
      --green-600: #16A34A;
      --green-50: #F0FDF4;
      --green-200: #BBF7D0;
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
      margin-bottom: 3rem;
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

    /* ── Sector Thermal Receipt Visual Box ──────────────────────────────── */
    .showcase-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      background: white;
      border: 1px solid var(--zinc-200);
      border-radius: 1.5rem;
      padding: 2rem;
      margin: 3rem 0;
      box-shadow: 0 8px 30px rgba(0,0,0,0.04);
      align-items: center;
    }
    @media (min-width: 768px) { .showcase-grid { grid-template-columns: 1fr 1.1fr; padding: 2.5rem; } }

    .receipt-paper {
      background: #FEFCE8;
      border: 1px solid #FEF08A;
      border-radius: 0.75rem;
      padding: 1.5rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      color: #1E293B;
      font-size: 0.85rem;
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      position: relative;
    }
    .receipt-paper::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 8px;
      background: radial-gradient(circle, transparent, transparent 50%, #FEFCE8 50%, #FEFCE8 100%);
      background-size: 12px 12px;
    }
    .receipt-header { text-align: center; border-bottom: 1px dashed #CBD5E1; padding-bottom: 0.75rem; margin-bottom: 0.75rem; }
    .receipt-title { font-weight: 900; font-size: 1rem; color: #0F172A; }
    .receipt-sub { font-size: 0.75rem; color: #64748B; }
    .receipt-line { display: flex; justify-content: space-between; margin-bottom: 0.35rem; }
    .receipt-totals { border-top: 1px dashed #CBD5E1; border-bottom: 2px solid #0F172A; padding: 0.5rem 0; margin: 0.5rem 0; font-weight: 800; font-size: 0.95rem; }
    .receipt-token { text-align: center; background: #DCFCE7; color: #166534; font-weight: 900; padding: 0.4rem; border-radius: 0.5rem; margin-top: 0.5rem; font-size: 0.8rem; }
    .receipt-footer-tag { text-align: center; font-size: 0.7rem; color: #94A3B8; margin-top: 0.5rem; }

    .showcase-info h3 { font-size: 1.75rem; font-weight: 900; margin-bottom: 0.75rem; line-height: 1.2; }
    .showcase-info p { color: var(--zinc-600); margin-bottom: 1.25rem; font-size: 0.95rem; }
    .feature-check-list { list-style: none; space-y: 0.5rem; }
    .feature-check-list li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-weight: 600; color: var(--zinc-700); margin-bottom: 0.5rem; }

    /* ── Feature Cards ─────────────────────────────────────────────────── */
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

    /* ── Comparison Table ──────────────────────────────────────────────── */
    .comparison-section { margin: 4rem 0; }
    .comparison-section h2 { font-size: 1.75rem; font-weight: 900; margin-bottom: 1.5rem; text-align: center; }
    .table-wrap { overflow-x: auto; background: white; border-radius: 1.25rem; border: 1px solid var(--zinc-200); box-shadow: 0 4px 20px rgba(0,0,0,0.03); }
    table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; }
    th, td { padding: 1rem 1.25rem; border-bottom: 1px solid var(--zinc-200); }
    th { background: var(--zinc-100); font-weight: 800; color: var(--zinc-800); }
    td:nth-child(2) { font-weight: 700; color: #15803D; background: #F0FDF4; }
    td:nth-child(3) { color: var(--zinc-500); }

    /* ── Pricing Box ───────────────────────────────────────────────────── */
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

    /* ── Trust Badges ──────────────────────────────────────────────────── */
    .trust-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      margin: 2.5rem 0;
    }
    @media (min-width: 768px) { .trust-grid { grid-template-columns: repeat(4, 1fr); } }
    .trust-item {
      background: white;
      border: 1px solid var(--zinc-200);
      border-radius: 1rem;
      padding: 1.25rem 1rem;
      text-align: center;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--zinc-700);
    }
    .trust-icon { font-size: 1.5rem; display: block; margin-bottom: 0.35rem; }

    /* ── FAQ Accordion ─────────────────────────────────────────────────── */
    .faq-section { margin: 4rem 0; }
    .faq-section h2 { font-size: 1.75rem; font-weight: 900; margin-bottom: 1.5rem; text-align: center; }
    details {
      background: white;
      border: 1px solid var(--zinc-200);
      border-radius: 1rem;
      margin-bottom: 1rem;
      padding: 1.25rem;
      transition: all 0.2s;
    }
    details[open] { border-color: var(--primary); box-shadow: 0 4px 15px rgba(249, 115, 22, 0.08); }
    summary {
      font-weight: 800;
      font-size: 1rem;
      cursor: pointer;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--zinc-900);
    }
    summary::-webkit-details-marker { display: none; }
    summary::after { content: "+"; font-size: 1.4rem; color: var(--primary); font-weight: 900; }
    details[open] summary::after { content: "−"; }
    details p { margin-top: 0.85rem; color: var(--zinc-600); font-size: 0.9rem; line-height: 1.6; }

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
    🚀 Dedicated Setup for ${item.name}: Complete Hardware Kit + 1-Year License just ₹4,999.
    <a href="${whatsappUrl}" target="_blank">Get Started &rarr;</a>
  </div>

  <header>
    <a href="https://www.cafeqr.in/" class="logo-group">
      <img src="/logo.png" alt="CafeQR Logo">
      <span class="logo-text">CafeQR</span>
    </a>
    <a href="${whatsappUrl}" target="_blank" class="nav-cta">WhatsApp Demo</a>
  </header>

  <main class="container">
    <div class="badge">🔥 ${item.badge}</div>
    <h1>${item.metaTitle}</h1>
    <p class="hero-lead">${item.heroSubtitle}</p>

    <div class="cta-row">
      <a href="${whatsappUrl}" target="_blank" class="btn-main">
        <span>💬</span> Chat for 10-Min Demo
      </a>
      <a href="https://www.cafeqr.in/#pricing" class="btn-sec">View All Plans</a>
    </div>

    <!-- ── Sector-Specific Thermal Receipt Showcase ─────────────────────── -->
    <div class="showcase-grid">
      <div>
        <div class="receipt-paper">
          <div class="receipt-header">
            <div class="receipt-title">${item.receiptHeader}</div>
            <div class="receipt-sub">${item.receiptSub}</div>
          </div>
          <div style="margin: 0.75rem 0;">
            ${item.receiptItems.map(it => `
            <div class="receipt-line">
              <span>${it.name}</span>
              <span style="font-weight: 700;">${it.price}</span>
            </div>`).join('')}
          </div>
          <div class="receipt-line" style="font-size: 0.75rem; color: #64748B;">
            <span>Subtotal</span>
            <span>${item.receiptSubtotal}</span>
          </div>
          <div class="receipt-line" style="font-size: 0.75rem; color: #64748B;">
            <span>Taxes & GST</span>
            <span>${item.receiptTax}</span>
          </div>
          <div class="receipt-line receipt-totals">
            <span>TOTAL DUE</span>
            <span style="color: #15803D;">${item.receiptTotal}</span>
          </div>
          <div class="receipt-token">${item.receiptToken}</div>
          <div class="receipt-footer-tag">${item.receiptPaidVia}</div>
        </div>
      </div>

      <div class="showcase-info">
        <span class="badge" style="margin-bottom: 0.75rem;">LIVE THERMAL BILL PREVIEW</span>
        <h3>Built for the Real-World Operations of ${item.name}</h3>
        <p>No generic templates or rigid retail software. CafeQR is calibrated for fast counter turnover, instant Bluetooth printing, and zero internet downtime.</p>
        <ul class="feature-check-list">
          <li>✓ 2-second wireless ESC/POS Bluetooth printing</li>
          <li>✓ Dynamic UPI QR code generated on every bill</li>
          <li>✓ 100% offline billing safeguard during network drops</li>
          <li>✓ Zero commissions on your branded delivery website</li>
        </ul>
      </div>
    </div>

    <!-- ── Core Pain Points & Solutions ────────────────────────────────── -->
    <div class="grid-3">
      ${(item.painPoints || []).map(p => `
      <div class="card">
        <h3>⚡ ${p.title}</h3>
        <p>${p.desc}</p>
      </div>`).join('')}
    </div>

    <!-- ── Comparison Table ────────────────────────────────────────────── -->
    <section class="comparison-section">
      <h2>Why Food Businesses Upgrade to CafeQR</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Operational Capability</th>
              <th>CafeQR Solution</th>
              <th>Legacy POS / Aggregators</th>
            </tr>
          </thead>
          <tbody>
            ${(item.comparison || [
              { feature: 'Upfront Hardware Setup', cafeqr: '₹4,999 (Bluetooth Printer Included)', legacy: '₹25,000 – ₹45,000 proprietary machines' },
              { feature: 'Delivery Commission Cut', cafeqr: '0% Commission (Free Direct Store)', legacy: '28% – 33% (Swiggy / Zomato)' },
              { feature: 'Offline Counter Billing', cafeqr: '100% Offline Safeguard', legacy: 'Freezes when Wi-Fi drops' },
              { feature: 'Onboarding & Menu Setup', cafeqr: '10 Minutes via WhatsApp', legacy: '3 to 7 days manual configuration' }
            ]).map(r => `
            <tr>
              <td><strong>${r.feature}</strong></td>
              <td>${r.cafeqr}</td>
              <td>${r.legacy}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <!-- ── Trust Badges ────────────────────────────────────────────────── -->
    <div class="trust-grid">
      <div class="trust-item"><span class="trust-icon">🛡️</span> 1-Year Hardware Warranty</div>
      <div class="trust-item"><span class="trust-icon">⚡</span> 10-Min Menu Setup Guarantee</div>
      <div class="trust-item"><span class="trust-icon">📶</span> 100% Offline Billing Safeguard</div>
      <div class="trust-item"><span class="trust-icon">⭐</span> 5.0★ Google Verified Ratings</div>
    </div>

    <!-- ── Pricing Box ─────────────────────────────────────────────────── -->
    <div class="pricing-box">
      <div class="badge">ALL-IN-ONE STARTER BUNDLE</div>
      <h2>CafeQR Complete Starter Hardware Kit</h2>
      <p style="color: var(--zinc-600); margin-top: 0.5rem;">Everything you need to launch professional billing in 10 minutes</p>
      <div class="price-val">₹4,999 <span style="font-size: 1rem; color: var(--zinc-500); font-weight: normal;">/ all-inclusive</span></div>
      <p style="color: #16A34A; font-weight: 700; margin-bottom: 1.5rem;">✓ Portable 58mm Bluetooth Printer Included + 1-Year Full POS License</p>
      <a href="${whatsappUrl}" target="_blank" class="btn-main" style="padding: 1rem 2rem;">
        Claim Starter Kit for ${item.name} &rarr;
      </a>
    </div>

    <!-- ── FAQ Accordion with Schema.org Rich Snippets ─────────────────── -->
    <section class="faq-section">
      <h2>Frequently Asked Questions</h2>
      ${item.faqs.map(f => `
      <details>
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`).join('')}
    </section>
  </main>

  <footer>
    <p>&copy; 2026 CafeQR. All rights reserved. • <a href="https://www.cafeqr.in/">Visit Homepage</a> • <a href="https://www.cafeqr.in/compare/">Compare POS Alternatives</a></p>
  </footer>

</body>
</html>`;
}

// ── Main Execution ───────────────────────────────────────────────────────────
async function run() {
  console.log('🚀 Starting Deeply-Customized Matrix Generation...');

  // 1. Generate Niche Pages
  for (const n of niches) {
    const itemDir = path.join(publicDir, n.slug);
    if (!fs.existsSync(itemDir)) fs.mkdirSync(itemDir, { recursive: true });
    const htmlPath = path.join(itemDir, 'index.html');
    fs.writeFileSync(htmlPath, generateCustomPageHtml(n, false), 'utf-8');
    console.log(`✓ Generated Customized Niche Page: ${n.slug}/index.html`);
  }

  // 2. Generate City Pages
  for (const c of cities) {
    const itemDir = path.join(publicDir, c.slug);
    if (!fs.existsSync(itemDir)) fs.mkdirSync(itemDir, { recursive: true });
    const htmlPath = path.join(itemDir, 'index.html');
    fs.writeFileSync(htmlPath, generateCustomPageHtml(c, true), 'utf-8');
    console.log(`✓ Generated Customized City Page: ${c.slug}/index.html`);
  }

  // 3. Sync Sitemap.xml
  const allItems = [...niches, ...cities];
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

  // 4. Sync llms.txt
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

  console.log(`\n🎉 All ${allItems.length} Custom Pages Successfully Upgraded to International Standard!`);
}

run().catch(console.error);
