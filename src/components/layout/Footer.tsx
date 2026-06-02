import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { footerNav } from "@/lib/navigation";
import { Logo } from "@/components/ui/Logo";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-ink-radial opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-px relative">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Ready to bank with confidence?
            </h3>
            <p className="mt-3 max-w-lg text-white/60">
              Open an account in minutes or speak with a relationship manager who
              understands your community.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/apply/account-opening" className="btn-gold">
              Open an Account <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/customer-service/contact-us" className="btn-ghost">
              Talk to Us
            </Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Madhya Pradesh Gramin Bank — serving rural and retail India with
              pride, integrity and a commitment to financial inclusion.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400" /> 1800 123 3313
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-400" /> 1800 233 6295 / 0731 244 5333
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-400" /> Head Office,
                Indore, Madhya Pradesh — 452001
              </p>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} MPGB Bank. All rights reserved. Regulated
            by the Reserve Bank of India.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/50">
            <Link href="/customer-service/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
