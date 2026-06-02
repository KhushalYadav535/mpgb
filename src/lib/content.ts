import {
  Sprout,
  Building2,
  Wallet,
  Smartphone,
  HandCoins,
  PiggyBank,
  Landmark,
  ShieldCheck,
  Tractor,
  Home,
  GraduationCap,
  CreditCard,
  type LucideIcon,
} from "lucide-react";

export type Rate = { label: string; rate: string; note?: string };

export const tickerRates: Rate[] = [
  { label: "Savings Account", rate: "3.50%" },
  { label: "Fixed Deposit (1–2 yr)", rate: "7.50%" },
  { label: "Kisan Credit Card", rate: "7.00%" },
  { label: "Home Loan", rate: "8.40%" },
  { label: "MUDRA Loan", rate: "9.25%" },
  { label: "Senior Citizen FD", rate: "8.00%" },
  { label: "Recurring Deposit", rate: "6.80%" },
  { label: "Gold Loan", rate: "8.75%" },
];

export type Product = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  accent?: string;
};

export const featuredProducts: Product[] = [
  {
    icon: Sprout,
    title: "Agriculture Loans",
    description:
      "Kisan Credit Card, crop and equipment finance designed around the harvest cycle.",
    href: "/loans/agriculture/kisan-credit-card",
  },
  {
    icon: Building2,
    title: "MSME Loans",
    description:
      "MUDRA, working capital and term loans to power India's small enterprises.",
    href: "/loans/msme/mudra-loan",
  },
  {
    icon: Wallet,
    title: "Personal Banking",
    description:
      "Premium savings, current accounts and deposits with rewarding interest rates.",
    href: "/personal-banking/savings-account",
  },
  {
    icon: Smartphone,
    title: "Digital Services",
    description:
      "Internet banking, UPI, mobile banking and instant payments — bank on the go.",
    href: "/digital-services/internet-banking",
  },
  {
    icon: Home,
    title: "Home Loans",
    description:
      "Competitive rates and flexible tenures to help you own your dream home.",
    href: "/loans/retail/home-loan",
  },
  {
    icon: HandCoins,
    title: "Gold Loans",
    description:
      "Unlock instant liquidity against your gold with transparent valuation.",
    href: "/loans/gold-loan",
  },
];

export type Stat = { value: string; label: string };

export const inclusionStats: Stat[] = [
  { value: "50L+", label: "Customers served" },
  { value: "500+", label: "Branches" },
  { value: "10,000+", label: "Villages reached" },
  { value: "₹12,400 Cr", label: "Deposits managed" },
];

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2024-03-15",
    category: "Announcement",
    title: "Revised interest rates effective April 1",
    excerpt:
      "New deposit and loan rates come into effect. Fixed deposits now earn up to 7.50% p.a.",
  },
  {
    date: "2024-02-28",
    category: "Award",
    title: "MPGB wins Best Regional Rural Bank 2024",
    excerpt:
      "Recognised for excellence in financial inclusion and rural digital adoption.",
  },
  {
    date: "2024-02-10",
    category: "Digital",
    title: "UPI Lite now live on MPGB mobile banking",
    excerpt:
      "Make small-value payments instantly, even offline, with the upgraded app.",
  },
  {
    date: "2024-01-22",
    category: "Notification",
    title: "Extended banking hours at 120 rural branches",
    excerpt:
      "Select branches now open until 6 PM to better serve farming communities.",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    description:
      "256-bit encryption, multi-factor authentication and 24/7 fraud monitoring keep you safe.",
  },
  {
    icon: Tractor,
    title: "Rooted in rural India",
    description:
      "Five decades of serving farmers, traders and families across the heartland.",
  },
  {
    icon: Landmark,
    title: "Trusted & regulated",
    description:
      "Sponsored by a leading public sector bank and regulated by the RBI & NABARD.",
  },
  {
    icon: PiggyBank,
    title: "Rewarding returns",
    description:
      "Among the most competitive deposit rates, with extra benefits for seniors.",
  },
];

export const quickActions: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: CreditCard, label: "Net Banking", href: "/net-banking/login" },
  { icon: HandCoins, label: "EMI Calculator", href: "/digital-services/calculators/emi-calculator" },
  { icon: Landmark, label: "Find a Branch", href: "/customer-service/branch-locator" },
  { icon: GraduationCap, label: "Apply for Loan", href: "/apply/personal-loan" },
];

export const loanCategories = [
  {
    icon: Tractor,
    title: "Agriculture",
    items: ["Kisan Credit Card", "Crop Loan", "Land Purchase", "Equipment Loan"],
    href: "/loans/agriculture/kisan-credit-card",
  },
  {
    icon: Building2,
    title: "MSME",
    items: ["MUDRA Loan", "Working Capital", "Term Loan"],
    href: "/loans/msme/mudra-loan",
  },
  {
    icon: Home,
    title: "Retail",
    items: ["Home Loan", "Vehicle Loan", "Personal Loan", "Education Loan"],
    href: "/loans/retail/home-loan",
  },
  {
    icon: HandCoins,
    title: "Gold Loan",
    items: ["Instant valuation", "Flexible tenure", "Low interest"],
    href: "/loans/gold-loan",
  },
];

export type HeroSlide = {
  id: string;
  visual: "savings" | "deposit" | "kcc" | "home";
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  rate?: string;
  rateLabel?: string;
  cta: { label: string; href: string };
  secondary?: { label: string; href: string };
  theme: "burgundy" | "ink" | "emerald";
  features: string[];
};

export const heroSlides: HeroSlide[] = [
  {
    id: "digital",
    visual: "savings",
    badge: "Digital Banking",
    title: "Your bank, now in",
    highlight: "your pocket.",
    subtitle:
      "Internet & mobile banking, UPI, and a missed-call balance facility — manage money anytime, anywhere across Madhya Pradesh.",
    rate: "24×7",
    rateLabel: "always open",
    cta: { label: "Internet Banking", href: "/net-banking/login" },
    secondary: { label: "Explore Digital", href: "/digital-services/internet-banking" },
    theme: "burgundy",
    features: ["Instant UPI & IMPS", "Missed call: 8010968293", "DICGC insured"],
  },
  {
    id: "fd",
    visual: "deposit",
    badge: "Fixed Deposits",
    title: "Assured growth, the",
    highlight: "MPGB way.",
    subtitle:
      "Park your savings in a term deposit with rewarding interest, flexible tenures and extra rates for senior citizens.",
    rate: "7.25%",
    rateLabel: "p.a. up to",
    cta: { label: "Open Fixed Deposit", href: "/personal-banking/fixed-deposit" },
    secondary: { label: "Calculate Returns", href: "/digital-services/calculators/fd-calculator" },
    theme: "ink",
    features: ["Extra rate for seniors", "Flexible tenures", "Loan against deposit"],
  },
  {
    id: "kcc",
    visual: "kcc",
    badge: "Agriculture · Kisan Credit Card",
    title: "Rooted in the soil of",
    highlight: "rural India.",
    subtitle:
      "Best Regional Rural Bank by NABARD. Flexible Kisan Credit Card finance designed around your sowing and harvest cycle.",
    rate: "7.00%",
    rateLabel: "p.a. from",
    cta: { label: "Apply for KCC", href: "/loans/agriculture/kisan-credit-card" },
    secondary: { label: "Eligibility & Docs", href: "/loans/agriculture/kisan-credit-card" },
    theme: "emerald",
    features: ["No collateral up to ₹1.6L", "RuPay KCC card", "Repay after harvest"],
  },
  {
    id: "home",
    visual: "home",
    badge: "Home Loan",
    title: "The keys to your dream",
    highlight: "home await.",
    subtitle:
      "Competitive interest, long tenures and quick approvals — move into your own home sooner with MPGB Home Loans.",
    rate: "8.70%",
    rateLabel: "p.a. from",
    cta: { label: "Apply for Home Loan", href: "/loans/retail/home-loan" },
    secondary: { label: "Calculate EMI", href: "/digital-services/calculators/emi-calculator" },
    theme: "burgundy",
    features: ["Low processing fee", "Long repayment tenure", "Balance transfer"],
  },
];

export const heroQuickLinks: { label: string; href: string }[] = [
  { label: "Savings Account", href: "/personal-banking/savings-account" },
  { label: "Kisan Credit Card", href: "/loans/agriculture/kisan-credit-card" },
  { label: "Personal Loan", href: "/apply/personal-loan" },
  { label: "Home Loan", href: "/loans/retail/home-loan" },
  { label: "Fixed Deposit", href: "/personal-banking/fixed-deposit" },
  { label: "Internet Banking", href: "/net-banking/login" },
];
