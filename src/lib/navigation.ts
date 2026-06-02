export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  {
    label: "Personal Banking",
    href: "/personal-banking",
    children: [
      { label: "Savings Account", href: "/personal-banking/savings-account", desc: "Everyday banking with premium rates" },
      { label: "Current Account", href: "/personal-banking/current-account", desc: "Built for businesses & traders" },
      { label: "Fixed Deposit", href: "/personal-banking/fixed-deposit", desc: "Guaranteed returns up to 7.5%" },
      { label: "Recurring Deposit", href: "/personal-banking/recurring-deposit", desc: "Save monthly, grow steadily" },
      { label: "Senior Citizen Schemes", href: "/personal-banking/senior-citizen-schemes", desc: "Extra rates & priority service" },
    ],
  },
  {
    label: "Loans",
    href: "/loans",
    children: [
      { label: "Kisan Credit Card", href: "/loans/agriculture/kisan-credit-card", desc: "Flexible credit for farmers" },
      { label: "Crop Loan", href: "/loans/agriculture/crop-loan", desc: "Seasonal agricultural finance" },
      { label: "MUDRA Loan", href: "/loans/msme/mudra-loan", desc: "Empowering small enterprises" },
      { label: "Home Loan", href: "/loans/retail/home-loan", desc: "Own your dream home" },
      { label: "Vehicle Loan", href: "/loans/retail/vehicle-loan", desc: "Drive home today" },
      { label: "Gold Loan", href: "/loans/gold-loan", desc: "Instant liquidity on gold" },
    ],
  },
  {
    label: "Digital Services",
    href: "/digital-services",
    children: [
      { label: "Internet Banking", href: "/digital-services/internet-banking", desc: "Bank from anywhere" },
      { label: "Mobile Banking", href: "/digital-services/mobile-banking", desc: "Your branch in your pocket" },
      { label: "UPI", href: "/digital-services/upi", desc: "Instant payments, zero hassle" },
      { label: "Debit Cards", href: "/digital-services/debit-cards", desc: "Premium cards & rewards" },
      { label: "EMI Calculator", href: "/digital-services/calculators/emi-calculator", desc: "Plan your repayments" },
      { label: "FD Calculator", href: "/digital-services/calculators/fd-calculator", desc: "Project your returns" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Bank Profile", href: "/about-us/bank-profile", desc: "Our story & mission" },
      { label: "Board of Directors", href: "/about-us/board-of-directors", desc: "Leadership & governance" },
      { label: "Financials", href: "/about-us/financials", desc: "Reports & disclosures" },
      { label: "Careers", href: "/about-us/careers", desc: "Grow with us" },
    ],
  },
  { label: "Customer Service", href: "/customer-service" },
];

export const footerNav: { title: string; links: NavChild[] }[] = [
  {
    title: "Personal Banking",
    links: [
      { label: "Savings Account", href: "/personal-banking/savings-account" },
      { label: "Fixed Deposit", href: "/personal-banking/fixed-deposit" },
      { label: "Recurring Deposit", href: "/personal-banking/recurring-deposit" },
      { label: "Senior Citizen", href: "/personal-banking/senior-citizen-schemes" },
    ],
  },
  {
    title: "Loans",
    links: [
      { label: "Kisan Credit Card", href: "/loans/agriculture/kisan-credit-card" },
      { label: "Home Loan", href: "/loans/retail/home-loan" },
      { label: "MUDRA Loan", href: "/loans/msme/mudra-loan" },
      { label: "Gold Loan", href: "/loans/gold-loan" },
    ],
  },
  {
    title: "Digital",
    links: [
      { label: "Internet Banking", href: "/digital-services/internet-banking" },
      { label: "Mobile Banking", href: "/digital-services/mobile-banking" },
      { label: "UPI", href: "/digital-services/upi" },
      { label: "EMI Calculator", href: "/digital-services/calculators/emi-calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Bank Profile", href: "/about-us/bank-profile" },
      { label: "Careers", href: "/about-us/careers" },
      { label: "Branch Locator", href: "/customer-service/branch-locator" },
      { label: "Contact Us", href: "/customer-service/contact-us" },
    ],
  },
];
