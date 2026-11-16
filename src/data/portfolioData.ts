export type SectorFilter = 'all' | 'ecommerce' | 'bfsi' | 'telecom';

export interface HeroKpi {
  value: string;
  label: string;
}

export interface ProfilePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'target' | 'cpu' | 'layers' | 'users';
}

export interface CompetencyItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  iconName: 'sparkles' | 'building' | 'trending' | 'heart' | 'award' | 'shield';
}

export interface ImpactMetric {
  id: string;
  context: string;
  metric: string;
  title: string;
  description: string;
  sector: Exclude<SectorFilter, 'all'>;
}

export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  highlights: string[];
  expandedOutcomes: string[];
}

export interface AiTier {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  levers: string[];
  outcome: string;
}

export interface AiCapability {
  id: string;
  title: string;
  description: string;
  iconName: 'activity' | 'bot' | 'gauge' | 'calendar' | 'message';
}

export interface LeadershipTenet {
  id: string;
  title: string;
  description: string;
  iconName: 'compass' | 'users' | 'smile' | 'refresh' | 'shield';
}

export interface TargetVertical {
  id: string;
  name: string;
  sector: SectorFilter;
  summary: string;
}

export interface CertificationItem {
  title: string;
  detail: string;
}

export const HERO_KPIS: HeroKpi[] = [
  { value: '25+', label: 'Years Leadership Experience' },
  { value: '$45M+', label: 'P&L Portfolio Managed' },
  { value: '2,500+', label: 'Global Professionals Led' },
  { value: '5+', label: 'Global Markets (EU, US, UAE, APAC)' },
];

export const PROFILE_PILLARS: ProfilePillar[] = [
  {
    id: 'strategy-finance',
    title: 'Strategy & Financial Discipline',
    description:
      'Full P&L ownership, margin expansion, capital allocation, and rapid commercial turnaround.',
    iconName: 'target',
  },
  {
    id: 'ai-tech',
    title: 'AI & Tech Infrastructure',
    description:
      'Generative AI adoption, intelligent workflow automation, and omnichannel CRM architecture.',
    iconName: 'cpu',
  },
  {
    id: 'operational-execution',
    title: 'Operational Execution',
    description:
      'Global GCC & BPO operations across multi-shore delivery models, governance, and strict SLAs.',
    iconName: 'layers',
  },
  {
    id: 'people-transformation',
    title: 'People & Transformation',
    description:
      'Leading 2,500+ professionals, executive coaching pipelines, and high-performance cultures.',
    iconName: 'users',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'ai-transformation',
    title: 'AI-Led Business Transformation',
    description:
      'Architecting intelligent enterprise operating models that accelerate time-to-value and unlock AI capabilities across verticals.',
    points: [
      'AI-accelerated digital operating models',
      'Workflow & process automation',
      'Data-driven decision architectures',
      'Performance intelligence frameworks',
    ],
    iconName: 'sparkles',
  },
  {
    id: 'enterprise-ops',
    title: 'Enterprise Operations & Strategy',
    description:
      'Achieving unified operational excellence across omnichannel customer journeys and global shared service centers.',
    points: [
      'Multi-vertical scaling ($45M+ P&L)',
      'Hub-and-spoke operational excellence',
      'End-to-end SLA & governance',
      'GCC & Shared Services setup & scaling',
    ],
    iconName: 'building',
  },
  {
    id: 'pnl-stewardship',
    title: 'Business Growth & P&L Stewardship',
    description:
      'Delivering measurable commercial outcomes via revenue expansion, strategic deal structuring, and gross margin growth.',
    points: [
      'Full P&L ownership (revenue & cost lines)',
      'Margin expansion & cost optimization (~35%)',
      'Annual budgeting & dynamic forecasting',
      'International business expansion',
    ],
    iconName: 'trending',
  },
  {
    id: 'cx-transformation',
    title: 'Customer Experience Transformation',
    description:
      'Elevating customer retention and brand loyalty through hyper-personalized touchpoints across digital ecosystems.',
    points: [
      'Omnichannel customer journey optimization',
      'Voice & non-voice engagement excellence',
      'Loyalty & CSAT/NPS turnaround frameworks',
      'AI-assisted CSAT & NPS predictive analytics',
    ],
    iconName: 'heart',
  },
  {
    id: 'org-development',
    title: 'Leadership & Organization Development',
    description:
      'Building high-trust cultures, developing next-gen leaders, and managing enterprise change with human-centered empowerment.',
    points: [
      'Large-scale workforce empowerment',
      'Executive & mid-level leadership coaching',
      'Culture & change management at scale',
      'Stakeholder & cross-market alignment',
    ],
    iconName: 'award',
  },
  {
    id: 'governance-excellence',
    title: 'Governance & Operational Excellence',
    description:
      'Implementing stringent global quality benchmarks (COPC, ISO, Six Sigma) with continuous process audit and risk mitigation.',
    points: [
      'COPC & ISO standards implementation',
      'Regulatory audit & risk mitigation',
      'Global enterprise vendor commissioning',
      'Continuous improvement & Lean Six Sigma',
    ],
    iconName: 'shield',
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'tataneu-cost',
    context: 'Tata Digital / TataNeu',
    metric: '-35%',
    title: 'Cost Reduction',
    description:
      'Achieved through systematic process re-engineering, digital self-service enablement, and operational workflow optimization.',
    sector: 'ecommerce',
  },
  {
    id: 'omnichannel-csat',
    context: 'Enterprise Omnichannel',
    metric: '25%',
    title: 'CSAT Improvement',
    description:
      'Elevated across customer touchpoints by streamlining resolution workflows, introducing real-time agent assist tools, and QA governance.',
    sector: 'ecommerce',
  },
  {
    id: 'workforce-uplift',
    context: 'Workforce Performance',
    metric: '25%',
    title: 'Productivity Uplift',
    description:
      'Delivered via intelligent capacity modeling, structured agent coaching modules, and automated operational workflows.',
    sector: 'telecom',
  },
  {
    id: 'account-governance',
    context: 'Account Governance',
    metric: '100%',
    title: 'Annual KPI Compliance',
    description:
      'Maintained zero SLA defaults across mission-critical international telecom and BFSI enterprise accounts.',
    sector: 'bfsi',
  },
  {
    id: 'retail-revenue',
    context: 'E-Commerce & Retail Operations',
    metric: '~110%',
    title: 'Revenue Growth',
    description:
      'More than doubled revenue in the US Retail line of business via consultative sales strategies and customer lifecycle orchestration.',
    sector: 'ecommerce',
  },
  {
    id: 'sla-recovery',
    context: 'Rapid Operational Turnaround',
    metric: '55% to 100%',
    title: 'SLA Recovery in 90 Days',
    description:
      'Turned around a flagged delivery unit within a single quarter, restoring executive client trust and securing incremental scope.',
    sector: 'bfsi',
  },
  {
    id: 'techm-uae',
    context: 'Tech Mahindra (UAE & GCC)',
    metric: '95%+',
    title: 'Client & SLA Compliance',
    description:
      'Executed multi-year transformation across UAE telecom and enterprise operations, earning premier compliance recognition.',
    sector: 'telecom',
  },
  {
    id: 'tcs-profitability',
    context: 'Tata Consultancy Services (TCS)',
    metric: '20%',
    title: 'Profitability Improvement',
    description:
      'Transformed mature account margins via resource optimization, automation levers, and strategic commercial contract restructuring.',
    sector: 'telecom',
  },
  {
    id: 'peak-margin',
    context: 'Peak Global Accounts',
    metric: '35% to 50%',
    title: 'Gross Margin Expansion',
    description:
      'Delivered on turnaround of distressed operations programs by restructuring cost baselines, driving utilization, and upselling.',
    sector: 'bfsi',
  },
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: 'tata-digital',
    period: 'Oct 2022 - Mar 2026',
    role: 'Director – E-Commerce Operations & Transformation',
    company: 'Tata Digital (TataNeu)',
    location: 'Mumbai, India',
    summary:
      "Spearheaded e-commerce operations for the Tata Group's flagship super-app, orchestrating customer experience, high-touch luxury service fulfillment, and digital operations performance across diverse verticals.",
    highlights: [
      '35% Cost Optimization',
      '95%+ Omnichannel Experience',
      'AI-Driven Chat & Voice Automation',
      'Scale-Up Operations',
    ],
    expandedOutcomes: [
      'Reduced operational cost-to-serve by 35% through self-service deflection and automated ticket triage.',
      'Unified omnichannel voice, chat, and escalation desks across multi-brand Tata ecosystem categories.',
      'Instituted real-time CX intelligence dashboards linking fulfillment SLAs directly to repeat-purchase retention.',
    ],
  },
  {
    id: '24-7-ai',
    period: 'Nov 2020 - Oct 2022',
    role: 'Vice President – Retail Operations',
    company: '[24]7.ai',
    location: 'Hyderabad, India (US Geo)',
    summary:
      'Led global retail operations encompassing US & UK markets, accountable for 2,000+ FTEs and comprehensive P&L delivery, driving operational excellence and deploying AI-driven conversational platforms.',
    highlights: [
      '$45M+ Portfolio Managed',
      '~110% Revenue Surge',
      'US Retail Market Expansion',
      'High-Volume Launch Delivery',
    ],
    expandedOutcomes: [
      'Expanded US Retail business unit revenue by ~110% through consultative account growth and seasonal surge readiness.',
      'Deployed conversational AI and predictive routing across 2,000+ FTEs serving Fortune 500 retail logos.',
      'Standardized intraday capacity planning to protect gross margins during peak holiday traffic spikes.',
    ],
  },
  {
    id: 'tech-mahindra',
    period: 'Jul 2019 - Nov 2020',
    role: 'Head – Service Delivery',
    company: 'Tech Mahindra',
    location: 'Noida & Hyderabad, India',
    summary:
      'Directed cross-border shared services and technology service delivery for prominent enterprise and government clients in the UAE, driving Greenfield transitions and contractual SLA benchmarks.',
    highlights: [
      '95%+ Greenfield SLA Compliance',
      'Multi-Shore Global Governance',
      'Multi-Cultural Team Leadership',
    ],
    expandedOutcomes: [
      'Built and scaled multicultural service delivery hubs across Dubai and offshore centers with 95%+ sustained SLA compliance.',
      'Led high-complexity Greenfield transitions for premier UAE telecom and public-sector clients.',
      'Embedded COPC-aligned quality assurance and Arabic/English bilingual CX frameworks.',
    ],
  },
  {
    id: 'tcs',
    period: 'Jul 2010 - Jul 2019',
    role: 'Assistant General Manager (AGM) – Operations & Business Development',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Chennai, Kolkata, Manila',
    summary:
      'Managed strategic enterprise operational delivery, transition management, and client account growth across BFSI, Telecom, and Retail verticals. Spearheaded margin turnarounds from 35% to 50% gross margin via cost optimization.',
    highlights: [
      '10 Years of Enterprise Impact',
      '35% to 50% Gross Margin Turnaround',
      'Global Account Expansion',
      'COPC Operations Alignment',
    ],
    expandedOutcomes: [
      'Recovered distressed account SLA performance from 55% to 100% within a 90-day rapid stabilization mandate.',
      'Improved mature account profitability by 20% and lifted gross margins from 35% to 50% through Lean Six Sigma levers.',
      'Partnered with global deal teams on commercial pricing, transition governance, and multi-year renewals.',
    ],
  },
  {
    id: 'standard-chartered',
    period: 'Nov 1998 - Jul 2010',
    role: 'Operations Leadership – Consumer Banking & Shared Services',
    company: 'Standard Chartered Bank',
    location: 'Chennai & Bangalore, India',
    summary:
      'Built foundational executive expertise across consumer banking processes, rigorous risk compliance, service delivery frameworks, and back-office card transformations across both domestic and international divisions.',
    highlights: [
      '12-Year Tenure Foundation',
      'BFSI Service Mastery',
      'Cards & Risk Operations',
    ],
    expandedOutcomes: [
      'Directed high-accuracy consumer banking, cards, and reconciliation workflows under strict regulatory audit regimes.',
      'Contributed to cross-border shared services standardization linking India operations with UK banking standards.',
      'Developed frontline team-leader capability programs that served as a long-term talent bench.',
    ],
  },
];

export const AI_TIERS: AiTier[] = [
  {
    id: 'strategy',
    step: '01',
    title: 'Business Strategy',
    subtitle: 'Clear financial goals, margin focus & KPI design',
    levers: [
      'Unit-economics baselining & cost-to-serve mapping',
      'Target SLA & CSAT architecture tied to P&L impact',
      'Prioritized automation business case by ROI payback',
    ],
    outcome: 'Measurable 20–35% operational cost efficiency with protected customer loyalty.',
  },
  {
    id: 'intelligence',
    step: '02',
    title: 'AI & Data Intelligence',
    subtitle: 'Predictive forecasting, GenAI & workflow intelligence',
    levers: [
      'Conversational GenAI deflection & real-time agent co-pilots',
      'Automated QA scoring across 100% of omnichannel interactions',
      'ML-driven volume, attrition, and SLA breach early warning',
    ],
    outcome: 'Faster resolution cycles, 25%+ productivity uplift, and proactive SLA governance.',
  },
  {
    id: 'human',
    step: '03',
    title: 'Human Transformation',
    subtitle: 'Empowered teams, change leadership & culture',
    levers: [
      'Role elevation from repetitive handling to complex advisory',
      'Transparent coaching cadences & skill-adjacency reskilling',
      'Cross-functional alignment across Operations, Tech & Product',
    ],
    outcome: 'High-trust adoption where technology augments human capability at enterprise scale.',
  },
];

export const AI_CAPABILITIES: AiCapability[] = [
  {
    id: 'op-intel',
    title: 'AI-Powered Operational Intelligence',
    description:
      'Replacing backward-looking reporting with real-time predictive dashboards, sentiment heatmaps, and intuitive strategic metrics at your fingertips.',
    iconName: 'activity',
  },
  {
    id: 'workflow-auto',
    title: 'Intelligent Workflow Automation',
    description:
      'Deploying conversational AI bots, natural language processing for triage, and automated QA scoring to eliminate repetitive manual work.',
    iconName: 'bot',
  },
  {
    id: 'predictive-perf',
    title: 'Predictive Performance Management',
    description:
      'Leveraging machine learning algorithms to forecast attrition, staffing surges, and SLA risks before they impact customer metrics.',
    iconName: 'gauge',
  },
  {
    id: 'wfo',
    title: 'Data-Driven Workforce Optimization',
    description:
      'Dynamic intraday scheduling, automated capacity modeling, and skill-based routing to maximize utilization and agent experience.',
    iconName: 'calendar',
  },
  {
    id: 'ai-cx',
    title: 'AI-Enabled Customer Experience',
    description:
      'Hyper-personalized omnichannel journeys, real-time language translation, and seamless escalation from virtual assistants to specialists.',
    iconName: 'message',
  },
];

export const LEADERSHIP_TENETS: LeadershipTenet[] = [
  {
    id: 'strategy-execution',
    title: 'Strategy With Execution',
    description:
      'Vision without flawless execution is a hallucination. Every corporate strategy must translate into the trenches and metrics.',
    iconName: 'compass',
  },
  {
    id: 'people-first',
    title: 'People Before Processes',
    description:
      'Technology and KPIs accelerate only when people feel valued, aligned, and empowered within a cohesive culture.',
    iconName: 'users',
  },
  {
    id: 'customer-centricity',
    title: 'Customer-Centricity',
    description:
      'Every process change, SLA structure, and transformation initiative is anchored in end-customer friction removal.',
    iconName: 'smile',
  },
  {
    id: 'continuous-evolution',
    title: 'Continuous Evolution',
    description:
      'Challenging the status quo in enterprise management, embracing continuous learning, and adapting to emerging tech.',
    iconName: 'refresh',
  },
  {
    id: 'ownership-integrity',
    title: 'Ownership & Integrity',
    description:
      'Full accountability across good quarters and turnarounds, upholding transparency in both achievements and challenges.',
    iconName: 'shield',
  },
];

export const TARGET_VERTICALS: TargetVertical[] = [
  {
    id: 'ecom-retail',
    name: 'E-Commerce & Digital Retail',
    sector: 'ecommerce',
    summary: 'Super-app fulfillment, omnichannel CX, and peak-season scale across India, UK & US.',
  },
  {
    id: 'bfsi',
    name: 'BFSI & International Financial Services',
    sector: 'bfsi',
    summary: 'Consumer banking, cards, risk compliance, and high-trust SLA turnaround programs.',
  },
  {
    id: 'telecom',
    name: 'Telecommunications & Media',
    sector: 'telecom',
    summary: 'High-volume subscriber lifecycle operations and UAE/GCC enterprise transformations.',
  },
  {
    id: 'gcc',
    name: 'Global Capability Centers (GCCs)',
    sector: 'bfsi',
    summary: 'Greenfield hub setup, multi-shore governance, and executive talent pipeline architecture.',
  },
  {
    id: 'shared-services',
    name: 'Global Shared Services & BPO',
    sector: 'telecom',
    summary: '$45M+ P&L stewardship, commercial restructuring, and 35% to 50% margin expansion.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'COPC CX Implementation',
    detail: 'Global standard for high-performance customer operations.',
  },
  {
    title: 'Customer Journey Mapping & Experience Design',
    detail: 'Certified omnichannel customer experience architect.',
  },
  {
    title: 'MIS & Data-Driven Analytics',
    detail: 'Executive decision intelligence & predictive forecasting.',
  },
  {
    title: 'AI Strategy, Integration and Implementation in Ops, HR, Training & Quality & Overall Leadership',
    detail: 'Enterprise AI transformation & responsible governance.',
  },
  {
    title: 'Six Sigma & Quality Assurance Methodology',
    detail: 'Process excellence, lean waste elimination & zero-defect SLAs.',
  },
];

export const CONTACT_INFO = {
  name: 'Sumana Dey',
  role: 'Business Transformation & Operations Leader',
  location: 'Navi Mumbai, Maharashtra, India',
  email: 'soumanadey25@gmail.com',
  phone: '+91 9841267271',
  phoneHref: 'tel:+919841267271',
  linkedinLabel: 'linkedin.com/in/sumanadey',
  linkedinUrl: 'https://www.linkedin.com/in/sumanadey',
};

export const ENGAGEMENT_SUBJECTS = [
  'Executive Advisory & Consultation',
  'COO / VP / Director Leadership Role',
  'AI & Digital Transformation Advisory',
  'Board & Strategic Mentorship',
  'Keynote & Speaking Engagement',
];
