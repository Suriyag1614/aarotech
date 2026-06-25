import { Code, Search, Megaphone, Share2, PenTool, LayoutTemplate, Video } from "lucide-react";

export const services = [
  {
    id: "content-creation",
    title: "Content Creation",
    description: "High-quality, engaging content designed to capture attention and tell your brand's unique story.",
    icon: Video,
    h1: "High-Quality Content Creation Services",
    intro: "We produce engaging video, image, and text content that stops the scroll and drives meaningful interaction.",
    benefits: ["High-retention video editing that keeps viewers watching", "Engaging copywriting that speaks to your audience", "Professional visual design that elevates your brand"],
    faqs: [{ question: "Do you shoot videos?", answer: "We focus on post-production and editing high-quality supplied footage." }],
    cta: "Start Creating Content"
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Engaging content and community management to build trust and loyalty.",
    icon: Code,
    h1: "Organic Social Media Management",
    intro: "Grow an engaged following and build trust through consistent, high-quality organic social media content.",
    benefits: ["Consistent, high-quality posting schedule", "Active community engagement to foster loyalty", "Authentic brand voice development"],
    faqs: [{ question: "Which platforms do you handle?", answer: "We specialize in Instagram, Facebook, LinkedIn, and Twitter." }],
    cta: "Elevate Your Social Presence"
  },
  {
    id: "digital-advertising",
    title: "Meta & Google Ads",
    description: "Data-driven advertising campaigns across Search, Facebook, and Instagram to generate qualified leads.",
    icon: Megaphone,
    h1: "High-ROI Digital Advertising Campaigns",
    intro: "Capture high-intent searchers on Google and build massive brand awareness on Meta to generate qualified leads.",
    benefits: ["Advanced keyword and audience targeting", "Relentless conversion rate optimization", "Fully transparent reporting on your ROI"],
    faqs: [{ question: "Do you handle both Meta and Google?", answer: "Yes, we create omni-channel strategies using both platforms to maximize your return on ad spend." }],
    cta: "Get a Free Ads Audit"
  },
  {
    id: "branding",
    title: "Branding & Creative Design",
    description: "Professional logos, brand identity, and visual assets that make your business stand out.",
    icon: PenTool,
    h1: "Premium Brand Identity Design",
    intro: "Look like an industry leader with a cohesive, professional brand identity that builds immediate trust.",
    benefits: ["Memorable logo and visual identity design", "Comprehensive brand guidelines", "Stunning marketing collateral"],
    faqs: [{ question: "Do you do rebranding?", answer: "Yes, we help established businesses refresh their look for the modern digital era." }],
    cta: "Transform Your Brand"
  },
  {
    id: "website-development",
    title: "Web Development",
    description: "Fast, conversion-optimized websites built to turn your visitors into paying customers.",
    icon: LayoutTemplate,
    h1: "High-Converting Website Development",
    intro: "We build fast, scalable, and beautifully designed websites focused on lead generation and user experience.",
    benefits: ["Lightning fast, optimized load times", "Flawless mobile-first responsive design", "Built-in SEO architecture from day one"],
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
    benefits: ["Comprehensive technical SEO audits", "High-quality, authoritative link building", "Google Business Profile optimization for local search"],
    faqs: [{ question: "When will I see results?", answer: "SEO is a long-term strategy, typically showing significant movement in 3-6 months." }],
    cta: "Start Your SEO Campaign"
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
    benefits: ["Strict HIPAA compliant marketing practices", "Local SEO dominance for 'near me' patient searches", "Strategies built around establishing patient trust"],
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
    benefits: ["Funnels specifically designed to increase enrollments", "Precise parent and student demographic targeting", "Proactive brand reputation management"],
    faqs: [{ question: "Can you handle seasonal enrollment spikes?", answer: "Yes, we plan campaigns months in advance for peak admissions." }],
    cta: "Increase Enrollments"
  },
  {
    id: "local-businesses",
    title: "Local Businesses",
    problem: "Losing foot traffic to competitors with stronger online visibility.",
    solution: "We dominate local search results (Google Business Profile) to ensure you're the top choice in your area.",
    h1: "Local SEO & Ads for Retail Businesses",
    intro: "Dominate your neighborhood and become the #1 choice when locals search for your services.",
    benefits: ["Complete Google Business Profile optimization", "Dominating local keywords in your neighborhood", "Accurate foot traffic and lead tracking"],
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
    description: "We build and execute your campaigns from high-converting landing pages to targeted ads and local SEO.",
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
    clientIndustry: "Healthcare Client (Orthopedic)",
    challenge: "The Clinic faced very low physical walk-ins and was losing patients to heavy local competition.",
    solution: "We deployed a comprehensive trust-building content strategy to establish medical authority, paired with an aggressive local visibility campaign to drive high footfalls.",
    outcome: "Increased physical walk-ins by 210% and established a dominant local search presence, drastically reducing reliance on traditional marketing.",
    image: "/images/showcase/orthopedic.jpeg",
  },
  {
    id: "cs-2",
    clientIndustry: "Local Service Client",
    challenge: "Started with extremely low initial footfalls and had weak local visibility for their primary services.",
    solution: "Launched hyper-targeted Meta Ads, fully optimized their Google My Business (GMB) profile, and set up direct lead generation campaigns.",
    outcome: "Achieved a 300% increase in local foot traffic and generated 200+ highly qualified service leads within the first 60 days.",
    image: "/images/showcase/services.jpeg",
  },
  {
    id: "cs-3",
    clientIndustry: "Healthcare Client (Skin & Haircare)",
    challenge: "Struggling to attract new daily patients and competing against long-established clinics in their immediate vicinity.",
    solution: "Executed highly targeted performance marketing campaigns and optimized their local search presence to immediately gain patient trust.",
    outcome: "Generated a consistent flow of 70+ new patient consultations per week, effectively doubling their monthly revenue.",
    image: "/images/showcase/skincare.jpeg",
  },
];

export const founders = [
  {
    name: "Suriyanarayanan",
    fullName: "Suriyanarayanan",
    role: "Web Development & Data Analytics",
    bio: "Building lightning-fast, scalable, and beautifully designed websites focused entirely on user experience and lead generation.",
    quote: "Performance is a feature. If your website isn't fast, you're losing customers before they even see your offer.",
    linkedin: "",
    photo: "/images/crew/suriyanarayanan.jpeg",
  },
  {
    name: "Aaron",
    fullName: "Aaron John",
    role: "Founder & Lead Strategist",
    bio: "I don't believe in handing you off to a junior account manager. When you work with us, I personally oversee your strategy to ensure we are driving actual revenue, not just clicks.",
    quote: "Helping businesses generate measurable growth through data-driven digital marketing.",
    linkedin: "",
    photo: "/images/crew/aaron.jpeg",
  },
  {
    name: "Susinthiran",
    fullName: "Susinthiran",
    role: "Video Editor & Creative",
    bio: "Crafting engaging, high-retention video content that captures attention, stops the scroll, and builds brand awareness.",
    quote: "A good video doesn't just look pretty. It communicates your core value in the first three seconds.",
    linkedin: "",
    photo: "/images/crew/susinthiran.jpeg",
  },
];

export const testimonials: Array<{ id: string, quote: string, author: string, role: string, company?: string, resultAchieved?: string, photo?: string, videoUrl?: string }> = [
  {
    id: "t1",
    quote: "Aarotech completely transformed our digital presence. We saw incredible results within the first quarter.",
    author: "Rahul Verma",
    role: "CEO",
    company: "Gleam",
    resultAchieved: "200% Increase in Leads",
    photo: "/images/client-logos/gleam.jpeg",
  },
  {
    id: "t2",
    quote: "The level of communication and the quality of leads we've been getting is unmatched.",
    author: "Sneha Patel",
    role: "Founder",
    company: "Rose",
    resultAchieved: "Tripled Revenue in 6 Months",
    photo: "/images/client-logos/rose.jpeg",
  },
  {
    id: "t3",
    quote: "Highly recommend them for anyone looking to scale their educational institution.",
    author: "Dr. Ananya Reddy",
    role: "Director",
    company: "Shine Academy",
    resultAchieved: "50% Higher Enrollment",
    photo: "/images/client-logos/shine-academy.jpeg",
  },
  {
    id: "t4",
    quote: "They understand our brand perfectly and execute flawlessly on every campaign.",
    author: "Karthik Subramaniam",
    role: "Marketing Head",
    company: "Stepzy",
    resultAchieved: "150k+ New Followers",
    photo: "/images/client-logos/stepzy.jpeg",
  },
  {
    id: "t5",
    quote: "Best agency we've worked with. Period. The ROI speaks for itself.",
    author: "Arjun Nair",
    role: "Operations Manager",
    company: "Tosh",
    resultAchieved: "Lowered CPA by 40%",
    photo: "/images/client-logos/tosh.jpeg",
  }
];

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
    answer: "While we have deep expertise in Healthcare and Education, our data-driven approach allows us to effectively market almost any B2B or B2C business.",
  },
  {
    question: "How do reporting and communication work?",
    answer: "We believe in complete transparency. You will receive regular performance reports detailing key metrics and ROI. Plus, you get direct access to the founders for fast communication and strategic alignment.",
  },
];
