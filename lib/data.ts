import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  BarChart3,
  Boxes,
  Brain,
  Globe2,
  LineChart,
  Megaphone,
  PackageSearch,
  Rocket,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Workflow
} from 'lucide-react';

export const profile = {
  fullName: 'Walid Mostfaoui',
  title: 'E-Commerce Strategist & Growth Operator',
  tagline: "I don't just sell products — I build revenue machines.",
  bio: 'Walid is a seasoned e-commerce operator with over 5 years of hands-on experience scaling brands across fashion, electronics, and consumer goods. He has built and managed high-converting Shopify and WooCommerce stores, run profitable TikTok Shop campaigns, and mastered the full dropshipping supply chain — from product sourcing to post-purchase optimization. He works with brands that want to go from 0 to profitable, fast.',
  location: 'Algeria 🇩🇿 — working globally',
  languages: ['Arabic (native)', 'French (fluent)', 'English (professional)'],
  email: 'walid@mostfaoui.com',
  whatsapp: '+213 XX XX XX XX',
  instagram: '@walidmostfaoui'
};

export const metrics = [
  { label: 'Revenue Generated', value: '$2.4M+', numeric: 2.4, suffix: 'M+', prefix: '$', context: 'Attributed tracked store revenue' },
  { label: 'Ad Spend Managed', value: '$380K+', numeric: 380, suffix: 'K+', prefix: '$', context: 'Meta, TikTok, and Google campaigns' },
  { label: 'Average ROAS', value: '4.7x', numeric: 4.7, suffix: 'x', prefix: '', context: 'Average across validated paid acquisition' },
  { label: 'Stores Built & Scaled', value: '23+', numeric: 23, suffix: '+', prefix: '', context: 'Shopify and WooCommerce launches' },
  { label: 'Products Tested', value: '1,200+', numeric: 1200, suffix: '+', prefix: '', context: 'Research, validation, and creative tests' },
  { label: 'Countries Sold In', value: '17', numeric: 17, suffix: '', prefix: '', context: 'Cross-border e-commerce operations' },
  { label: 'Years of Experience', value: '5+', numeric: 5, suffix: '+', prefix: '', context: 'Hands-on operating experience' },
  { label: 'Client Satisfaction', value: '98%', numeric: 98, suffix: '%', prefix: '', context: 'Reported project satisfaction' }
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Paid Traffic & Ads Management',
    description:
      'Meta Ads, TikTok Ads, and Google Shopping — end-to-end campaign management. From creative strategy and audience targeting to scaling profitable ad sets. Average ROAS delivered: 4–6x.',
    icon: Megaphone
  },
  {
    title: 'Product Research & Validation',
    description:
      'Deep-dive market research using tools like Minea, AdSpy, and TikTok Creative Center. Walid identifies winning products before they trend, with a proprietary scoring system.',
    icon: PackageSearch
  },
  {
    title: 'Brand Strategy & Positioning',
    description:
      'Building e-commerce brands that feel premium — from naming, logo direction, color identity, to tone of voice and store design philosophy.',
    icon: Sparkles
  },
  {
    title: 'Store Setup & Optimization (WooCommerce / Shopify)',
    description:
      'Full store builds with conversion-rate optimization baked in — fast-loading themes, trust signals, upsell flows, abandoned cart sequences.',
    icon: Store
  },
  {
    title: 'TikTok Shop Growth',
    description:
      'Full organic + paid TikTok Shop strategy: product listing optimization, affiliate outreach, short-form video brief creation, and shop scaling playbook.',
    icon: ShoppingBag
  },
  {
    title: 'Dropshipping Systems',
    description:
      'End-to-end dropshipping operation setup: supplier sourcing, order automation, fulfillment chain, dispute handling, and scaling playbook documentation.',
    icon: Workflow
  }
];

export const skillTags = [
  'Meta Ads',
  'TikTok Ads',
  'Product Research',
  'WooCommerce',
  'Brand Strategy',
  'Dropshipping',
  'CRO'
];

export type CaseStudy = {
  slug: string;
  brand: string;
  niche: string;
  platform: string;
  result: string;
  roas?: string;
  keyWin?: string;
  strategy: string;
  image: string;
  problem: string;
  execution: string[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fashiondrop-co',
    brand: 'FashionDrop.co',
    niche: "Women's fashion accessories",
    platform: 'Shopify + Meta Ads',
    result: 'Scaled from $0 to $87K/month in 4 months',
    roas: '5.2x on Meta',
    strategy: 'Influencer-style UGC creatives + Lookalike audience stacking',
    image: '/assets/cases/fashiondrop.png',
    problem:
      'A new fashion accessories brand had a polished product selection but no repeatable acquisition system, weak creative direction, and no proven funnel.',
    execution: [
      'Rebuilt the store architecture around trust signals, bundled offers, and mobile-first collection pages.',
      'Created a UGC brief system for influencer-style hooks, product demonstrations, and urgency-driven angles.',
      'Scaled winning Meta campaigns through lookalike audience stacking and structured creative refreshes.'
    ],
    results: ['Reached $87K/month in 4 months', 'Delivered 5.2x ROAS on Meta', 'Created a repeatable product-launch testing system']
  },
  {
    slug: 'gadgetflow-dz',
    brand: 'GadgetFlow DZ',
    niche: 'Consumer electronics (phone accessories)',
    platform: 'WooCommerce + Google Shopping',
    result: '340% revenue increase in 90 days',
    keyWin: 'Structured Google Shopping feed + competitor pricing strategy',
    strategy: 'Structured Google Shopping feed + competitor pricing strategy',
    image: '/assets/cases/gadgetflow-dz.png',
    problem:
      'The store had demand but suffered from inconsistent product feeds, weak merchandising, and a pricing model that lost clicks to aggressive competitors.',
    execution: [
      'Cleaned product taxonomy, attributes, titles, and Shopping feed fields for stronger relevance.',
      'Built a competitor pricing tracker and weekly pricing action list.',
      'Improved WooCommerce product pages with trust modules, delivery promises, and accessory bundles.'
    ],
    results: ['Revenue increased by 340% in 90 days', 'Improved Google Shopping feed quality', 'Lifted conversion rate through pricing and merchandising']
  },
  {
    slug: 'trendvault-tiktok-shop',
    brand: 'TrendVault',
    niche: 'Viral lifestyle products',
    platform: 'TikTok Shop',
    result: '3 products hit $10K+ in sales in first week',
    strategy: 'Affiliate seeding + daily creative testing system',
    image: '/assets/cases/trendvault.png',
    problem:
      'TrendVault needed speed: a way to spot viral products, seed creators, and launch TikTok Shop listings before competitors saturated the trend.',
    execution: [
      'Built a product scoring framework around velocity, margin, creator fit, and fulfillment complexity.',
      'Activated affiliate outreach with short-form creative briefs and performance incentives.',
      'Launched daily listing, hook, and creative tests to identify traction within 48 hours.'
    ],
    results: ['3 products hit $10K+ in first-week sales', 'Built a daily TikTok Shop testing rhythm', 'Reduced time from product idea to live campaign']
  },
  {
    slug: 'luxehome-store',
    brand: 'LuxeHome Store',
    niche: 'Home decor & living',
    platform: 'Shopify + TikTok Ads',
    result: '$220K revenue in 6 months, 4.1x ROAS',
    roas: '4.1x ROAS',
    strategy: 'Full funnel from awareness reels to retargeting close',
    image: '/assets/cases/luxehome.png',
    problem:
      'A home decor catalog had strong visual appeal but no full-funnel strategy to convert inspiration-driven traffic into profitable purchases.',
    execution: [
      'Mapped creative from awareness reels to product proof, offer framing, and retargeting close.',
      'Reworked landing pages around room scenarios, bundles, and shipping confidence.',
      'Scaled TikTok Ads using a structured prospecting and retargeting budget split.'
    ],
    results: ['$220K revenue in 6 months', 'Delivered 4.1x ROAS', 'Created a reusable seasonal campaign framework']
  }
];

export const testimonials = [
  {
    name: 'Karim B.',
    country: 'Morocco',
    flag: '🇲🇦',
    quote: 'Walid transformed our store. Revenue tripled in 3 months. His ad knowledge is on another level.'
  },
  {
    name: 'Sophie L.',
    country: 'France',
    flag: '🇫🇷',
    quote: "I came to him with a failing store. He rebuilt the entire strategy and now we're profitable every month."
  },
  {
    name: 'Ahmed R.',
    country: 'UAE',
    flag: '🇦🇪',
    quote: "Best product researcher I've worked with. Every product he recommends converts."
  },
  {
    name: 'Lena M.',
    country: 'Germany',
    flag: '🇩🇪',
    quote: 'His TikTok Shop strategy is pure fire. We went from 0 to 2,000 orders in 6 weeks.'
  },
  {
    name: 'Youssef T.',
    country: 'Algeria',
    flag: '🇩🇿',
    quote: "Walid is the guy you want when you're serious about scaling. Professional, fast, results-driven."
  }
];

export type BlogStub = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  date: string;
  image: string;
  icon: LucideIcon;
};

export const blogStubs: BlogStub[] = [
  {
    slug: 'how-i-find-winning-products-before-they-go-viral',
    title: 'How I Find Winning Products Before They Go Viral (My Full Research System)',
    category: 'Product Research',
    readTime: '8 min read',
    date: '2025-01-08',
    image: '/assets/blog/product-research.png',
    icon: Brain,
    summary:
      'Winning products rarely appear out of nowhere. They leave signals before the market notices: creator volume, ad velocity, search lift, review language, margin structure, and the kind of emotional hook that makes a buyer stop scrolling. My research system starts with raw demand signals from TikTok Creative Center, Minea, AdSpy, Amazon movers, niche communities, and marketplace trend pages. I score each idea across five categories: proof of demand, creative potential, margin, fulfillment difficulty, and brandability. A product only moves forward when it can support multiple angles, a clean offer, and a realistic delivery promise. From there, I build a validation sprint: competitor teardown, supplier check, landing page angle, three creative hooks, and a small-budget test. The goal is not to predict perfectly. The goal is to remove bad ideas fast and put the best ideas in front of the market before the trend becomes expensive.'
  },
  {
    slug: 'tiktok-shop-in-2025',
    title: 'TikTok Shop in 2025: The Complete Playbook for New Sellers',
    category: 'TikTok Shop',
    readTime: '10 min read',
    date: '2025-02-15',
    image: '/assets/blog/tiktok-shop.png',
    icon: Rocket,
    summary:
      'TikTok Shop rewards speed, creator fit, and operational discipline. New sellers often think the platform is only about viral videos, but the real playbook combines product-market timing, listing quality, affiliate seeding, short-form creative testing, and fulfillment reliability. In 2025, the fastest-growing shops treat TikTok like a performance marketplace, not just a social channel. They launch products with clear proof points, creator-friendly hooks, simple bundles, and competitive shipping promises. The first week is about signal gathering: which creators respond, which hooks retain attention, which comments reveal objections, and which product pages convert traffic into orders. Paid ads become powerful only after organic and affiliate content reveal the strongest angles. This guide breaks down the setup sequence, product criteria, affiliate outreach system, creative brief structure, listing optimization checklist, and scaling rhythm that helps a new seller move from zero traction to repeatable daily sales without guessing.'
  },
  {
    slug: 'why-90-percent-of-dropshippers-fail-in-year-1',
    title: 'Why 90% of Dropshippers Fail in Year 1 (And How to Be in the 10%)',
    category: 'Dropshipping',
    readTime: '7 min read',
    date: '2025-03-02',
    image: '/assets/blog/dropshipping.png',
    icon: Boxes,
    summary:
      'Most dropshippers fail because they treat the model like a shortcut instead of an operating system. They copy products without understanding demand, launch generic stores, use weak creatives, ignore shipping quality, and spend ad budgets before the offer is proven. The winners do the opposite. They choose products with clear buyer emotion, solve one believable problem, source suppliers before scaling, and build trust into every step of the customer journey. They also know their numbers: gross margin, refund risk, fulfillment time, creative cost, contribution margin, and break-even ROAS. The first year is not about chasing every trend. It is about building a repeatable pipeline for product research, validation, creative testing, supplier management, and post-purchase support. Dropshipping still works when it is treated like real commerce. This article explains the failure patterns, the operating habits that separate serious sellers, and the practical checklist I use before scaling any product.'
  },
  {
    slug: 'the-roas-formula',
    title: 'The ROAS Formula: How to Structure Meta Ads for Consistent 4x Returns',
    category: 'Paid Ads',
    readTime: '9 min read',
    date: '2025-03-24',
    image: '/assets/blog/roas-formula.png',
    icon: BarChart3,
    summary:
      'Consistent ROAS is built before a campaign launches. The structure starts with a clear offer, sharp creative angles, accurate tracking, and a testing framework that separates signal from noise. On Meta, I organize campaigns around intent and learning stage: broad creative testing, winning-angle consolidation, retargeting, and scale. Each ad set needs enough budget to learn, but not so much that weak creatives burn cash. The creative matrix is the real engine: hooks, product proof, objections, social proof, demonstrations, and offer urgency. When a creative wins, I do not simply increase budget. I duplicate the insight into new variations, test fresh audiences, and protect performance with frequency control. The formula also depends on store economics. A 4x ROAS means different things depending on margin, shipping cost, refunds, and repeat purchase potential. This article shows how to connect campaign structure to business math so ad accounts scale with discipline.'
  },
  {
    slug: 'woocommerce-vs-shopify-in-2025',
    title: 'WooCommerce vs Shopify in 2025: Which One Should You Build On?',
    category: 'Store Strategy',
    readTime: '6 min read',
    date: '2025-04-10',
    image: '/assets/blog/shopify-woocommerce.png',
    icon: Globe2,
    summary:
      'The best platform is the one that fits your operating model. Shopify is usually the faster path for brands that want stable hosting, polished themes, strong checkout, app integrations, and less technical maintenance. WooCommerce gives more control, deeper customization, and flexibility for teams that already understand WordPress or need specific regional payment, content, or backend workflows. In 2025, the decision should be made around speed, ownership, budget, technical resources, conversion needs, and growth channel. A TikTok Shop-heavy brand may prefer Shopify for speed and app ecosystem. A content-led catalog with custom payment constraints may prefer WooCommerce. Both can convert well when built correctly. Both can fail when overloaded with plugins, slow themes, weak product pages, or poor tracking. This comparison breaks down setup time, costs, CRO flexibility, SEO, app ecosystems, performance, and scaling risks so founders can choose based on strategy instead of platform hype.'
  }
];

export const timeline = [
  { year: '2019', title: 'First E-Commerce Systems', body: 'Built early product testing funnels and learned the full dropshipping supply chain hands-on.' },
  { year: '2020', title: 'Store Build Specialization', body: 'Moved from simple launches to conversion-focused Shopify and WooCommerce builds.' },
  { year: '2021', title: 'Paid Acquisition Scale', body: 'Managed Meta Ads campaigns across fashion, electronics, and consumer goods.' },
  { year: '2023', title: 'TikTok Shop Growth', body: 'Added TikTok Shop operations, affiliate seeding, and daily creative testing systems.' },
  { year: '2025', title: 'Revenue Machine Framework', body: 'Combined product research, brand strategy, ads, CRO, and fulfillment into one operating playbook.' }
];

export const tools = [
  { name: 'Shopify', icon: Store },
  { name: 'WooCommerce', icon: ShoppingBag },
  { name: 'Meta Ads', icon: Target },
  { name: 'TikTok Ads', icon: TrendingUp },
  { name: 'Google Shopping', icon: LineChart },
  { name: 'Minea', icon: PackageSearch },
  { name: 'AdSpy', icon: BadgeCheck },
  { name: 'TikTok Creative Center', icon: Sparkles }
];

export const processSteps = [
  { step: '01', title: 'Diagnose', body: 'Audit the offer, margins, tracking, store experience, product pipeline, and acquisition bottlenecks.' },
  { step: '02', title: 'Build', body: 'Create the store architecture, product validation plan, creative briefs, and launch-ready campaign structure.' },
  { step: '03', title: 'Test', body: 'Run controlled product, offer, creative, and audience experiments to find reliable signal.' },
  { step: '04', title: 'Scale', body: 'Move budget into validated winners, improve fulfillment, and document the operating system.' }
];
