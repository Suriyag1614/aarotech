import { Code, Search, Megaphone, Share2, PenTool, LayoutTemplate } from "lucide-react";

export const services = [
  {
    id: "website-development",
    title: "Website Development",
    description: "Fast, conversion-optimized websites built to turn your visitors into paying customers.",
    icon: LayoutTemplate,
    h1: "High-Converting Website Development",
    intro: "We build fast, scalable, and beautifully designed websites focused on lead generation and user experience.",
    benefits: ["Benefit 1: Lightning fast load times", "Benefit 2: Mobile-first responsive design", "Benefit 3: SEO-optimized architecture"],
    faqs: [{ question: "How long does it take?", answer: "Usually 4-6 weeks depending on complexity." }],
    cta: "Get a Web Dev Quote"
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Rank higher on Google and attract high-quality, organic traffic to your business.",
    icon: Search,
    h1: "SEO Services to Dominate Local Search",
    intro: "Stop paying for every click. Build long-term organic traffic with our proven SEO methodologies.",
    benefits: ["Benefit 1: Technical SEO audits", "Benefit 2: High-quality link building", "Benefit 3: Local Google Business Profile optimization"],
    faqs: [{ question: "When will I see results?", answer: "SEO is a long-term strategy, typically showing significant movement in 3-6 months." }],
    cta: "Start Your SEO Campaign"
  },
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Data-driven search campaigns that place your business right where your customers are looking.",
    icon: Megaphone,
    h1: "High-ROI Google Ads Management",
    intro: "Capture high-intent searches the exact moment potential customers are looking for your services.",
    benefits: ["Benefit 1: Advanced keyword targeting", "Benefit 2: Conversion rate optimization", "Benefit 3: Transparent ROI reporting"],
    faqs: [{ question: "What is a good budget?", answer: "It depends on your industry, but we recommend starting with at least ₹30,000/month." }],
    cta: "Get a Free Ads Audit"
  },
  {
    id: "meta-ads",
    title: "Meta Ads (Facebook & Instagram)",
    description: "Targeted social advertising to build brand awareness and generate qualified leads.",
    icon: Share2,
    h1: "Scalable Meta Ads Strategies",
    intro: "Build massive brand awareness and generate cheap, qualified leads using Facebook and Instagram targeting.",
    benefits: ["Benefit 1: Custom audience building", "Benefit 2: Engaging creative design", "Benefit 3: Retargeting campaigns"],
    faqs: [{ question: "Do Meta Ads work for B2B?", answer: "Yes, with the right offer and lookalike audiences, B2B campaigns can be highly successful." }],
    cta: "Scale with Meta Ads"
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Engaging content and community management to build trust and loyalty.",
    icon: Code,
    h1: "Organic Social Media Management",
    intro: "Grow an engaged following and build trust through consistent, high-quality organic social media content.",
    benefits: ["Benefit 1: Consistent posting schedule", "Benefit 2: Community engagement", "Benefit 3: Brand voice development"],
    faqs: [{ question: "Which platforms do you handle?", answer: "We specialize in Instagram, Facebook, LinkedIn, and Twitter." }],
    cta: "Elevate Your Social Presence"
  },
  {
    id: "branding",
    title: "Branding & Creative Design",
    description: "Professional logos, brand identity, and visual assets that make your business stand out.",
    icon: PenTool,
    h1: "Premium Brand Identity Design",
    intro: "Look like an industry leader with a cohesive, professional brand identity that builds immediate trust.",
    benefits: ["Benefit 1: Logo and visual identity", "Benefit 2: Brand guidelines creation", "Benefit 3: Marketing collateral design"],
    faqs: [{ question: "Do you do rebranding?", answer: "Yes, we help established businesses refresh their look for the modern digital era." }],
    cta: "Transform Your Brand"
  },
];

export const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    problem: "Struggling to attract new patients consistently in a competitive market.",
    solution: "We build trust-focused websites and run targeted local SEO and Google Ads to connect you with patients seeking care.",
    h1: "Digital Marketing for Healthcare Clinics",
    intro: "Attract more patients and build trust before they even step into your waiting room.",
    benefits: ["HIPAA compliant practices", "Local SEO for 'near me' searches", "Patient trust building"],
    faqs: [{ question: "Do you understand medical advertising rules?", answer: "Yes, we navigate platform restrictions carefully." }],
    cta: "Get a Healthcare Growth Plan"
  },
  {
    id: "education",
    title: "Education",
    problem: "Low enrollment rates and high competition from other institutions.",
    solution: "We implement lead-generation funnels and Meta Ads to reach parents and students effectively.",
    h1: "Digital Marketing for Schools & Colleges",
    intro: "Maximize your admissions season with targeted lead generation campaigns.",
    benefits: ["Enrollment-focused funnels", "Parent demographic targeting", "Brand reputation management"],
    faqs: [{ question: "Can you handle seasonal enrollment spikes?", answer: "Yes, we plan campaigns months in advance for peak admissions." }],
    cta: "Increase Enrollments"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    problem: "Relying on unpredictable referrals and expensive third-party portals.",
    solution: "We generate exclusive, high-intent leads through targeted advertising and optimized landing pages.",
    h1: "Lead Generation for Real Estate Developers",
    intro: "Stop fighting for shared leads. We build systems that generate exclusive, high-intent property buyers.",
    benefits: ["Exclusive lead generation", "High-converting property landing pages", "CRM integration"],
    faqs: [{ question: "What is a typical CPL?", answer: "Cost per lead varies wildly by property ticket size, but we focus on lowering Cost Per Acquisition." }],
    cta: "Get More Property Leads"
  },
  {
    id: "manufacturing",
    title: "Manufacturing & B2B",
    problem: "Invisible to potential B2B buyers searching for suppliers online.",
    solution: "We optimize your digital presence for B2B search intent to capture high-value contracts.",
    h1: "B2B Digital Marketing for Manufacturers",
    intro: "Modernize your sales pipeline by capturing high-intent B2B search traffic.",
    benefits: ["Complex product SEO", "Long-cycle lead nurturing", "Professional B2B website design"],
    faqs: [{ question: "Do you understand industrial buyers?", answer: "Yes, we map out the entire procurement decision journey." }],
    cta: "Transform B2B Sales"
  },
  {
    id: "local-businesses",
    title: "Local Businesses",
    problem: "Losing foot traffic to competitors with stronger online visibility.",
    solution: "We dominate local search results (Google Business Profile) to ensure you're the top choice in your area.",
    h1: "Local SEO & Ads for Retail Businesses",
    intro: "Dominate your neighborhood and become the #1 choice when locals search for your services.",
    benefits: ["Google Business Profile optimization", "Local keyword dominance", "Foot traffic tracking"],
    faqs: [{ question: "Do I need a big budget?", answer: "No, local SEO provides massive ROI even for single-location shops." }],
    cta: "Dominate Local Search"
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Business & Marketing Audit",
    description: "We analyze your current digital footprint, competitors, and revenue goals to identify exact growth opportunities.",
  },
  {
    step: "02",
    title: "Custom Growth Plan",
    description: "You receive a tailored, step-by-step digital strategy designed specifically to acquire more customers in your industry.",
  },
  {
    step: "03",
    title: "Campaign Launch",
    description: "We build and execute your campaigns—from high-converting landing pages to targeted ads and local SEO.",
  },
  {
    step: "04",
    title: "Optimization & Scaling",
    description: "We continuously monitor data, reduce cost-per-acquisition, and scale the campaigns that drive the most revenue.",
  },
];

export const caseStudies = [
  {
    id: "cs-1",
    clientIndustry: "Healthcare Client",
    challenge: "The hospital was heavily reliant on walk-ins and struggling to attract patients for specialized treatments.",
    solution: "We rebuilt their website for conversions and launched a targeted Google Ads campaign for high-value specialties.",
    outcome: "300% increase in patient inquiries within the first 3 months, leading to a significant boost in revenue.",
  },
  {
    id: "cs-2",
    clientIndustry: "Real Estate Client",
    challenge: "High cost-per-lead on generic platforms and poor lead quality from existing marketing efforts.",
    solution: "Developed custom landing pages and implemented a hyper-targeted Meta Ads strategy.",
    outcome: "Reduced Cost Per Acquisition (CPA) by 45% while generating 150+ qualified leads in 30 days.",
  },
  {
    id: "cs-3",
    clientIndustry: "Retail Client",
    challenge: "Losing market share to larger e-commerce competitors and lacking local visibility.",
    solution: "Optimized Google Business Profiles and launched a localized SEO and content strategy.",
    outcome: "Ranked #1 for core keywords locally, resulting in a 2x increase in store footfall driven by online search.",
  },
  {
    id: "cs-4",
    clientIndustry: "Education Client",
    challenge: "Declining enrollment numbers and ineffective traditional advertising campaigns.",
    solution: "Designed an enrollment-focused landing page funnel paired with targeted social media lead generation.",
    outcome: "Achieved full capacity for the upcoming academic year 2 months ahead of schedule.",
  },
];

export const founders = [
  {
    name: "Aaron",
    fullName: "Aaron",
    role: "Founder & Lead Strategist",
    bio: "I don't believe in handing you off to a junior account manager. When you work with us, I personally oversee your strategy to ensure we are driving actual revenue, not just clicks.",
    linkedin: "",
    photo: "", // Placeholder for real photo
  },
  {
    name: "Reethika",
    fullName: "Reethika",
    role: "Co-Founder & Head of Growth",
    bio: "With hands-on experience scaling businesses in Tamil Nadu, I focus purely on execution. If a campaign isn't generating a positive ROI, I'll be the first to tell you and pivot.",
    linkedin: "",
    photo: "", // Placeholder for real photo
  },
];

export const testimonials: Array<{id: string, quote: string, author: string, role: string}> = [];

export const faqs = [
  {
    question: "How much does digital marketing cost?",
    answer: "Our pricing is customized based on your goals, industry, and the specific services required. We focus on delivering a high ROI, ensuring your marketing is an investment, not an expense. Contact us for a free audit and custom proposal.",
  },
  {
    question: "How long does SEO take to see results?",
    answer: "SEO is a long-term strategy. While technical improvements can show quick wins, significant ranking and traffic improvements typically take 3 to 6 months depending on competition and current website authority.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely. We are passionate about helping founder-led and early-stage businesses scale. We offer scalable solutions that grow with you.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we have deep expertise in Healthcare, Education, Real Estate, and Manufacturing, our data-driven approach allows us to effectively market almost any B2B or B2C business.",
  },
  {
    question: "How do reporting and communication work?",
    answer: "We believe in complete transparency. You will receive regular performance reports detailing key metrics and ROI. Plus, you get direct access to the founders for fast communication and strategic alignment.",
  },
];
