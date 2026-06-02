import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/portal/LoginForm";
import { ShieldCheck, Lock, Headphones } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Net Banking Login",
  description: "Securely log in to MPGB internet banking.",
};

const assurances = [
  { icon: ShieldCheck, text: "256-bit end-to-end encryption" },
  { icon: Lock, text: "Multi-factor authentication" },
  { icon: Headphones, text: "24 × 7 fraud monitoring & support" },
];

export default function NetBankingLoginPage() {
  return (
    <section className="relative grid min-h-screen lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden overflow-hidden bg-ink-950 p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-ink-radial" />
        <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        <div className="relative">
          <Logo variant="light" />
        </div>
        <div className="relative max-w-md">
          <h2 className="font-display text-4xl font-bold leading-tight">
            Your money, guarded like our own.
          </h2>
          <p className="mt-4 text-white/60">
            Bank securely from anywhere. Manage accounts, transfer funds, pay bills
            and track your deposits — all protected by bank-grade security.
          </p>
          <ul className="mt-8 space-y-4">
            {assurances.map((a) => (
              <li key={a.text} className="flex items-center gap-3 text-sm text-white/80">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-gold-300">
                  <a.icon className="h-4 w-4" />
                </span>
                {a.text}
              </li>
            ))}
          </ul>
        </div>
        <p className="relative text-xs text-white/40">
          © {new Date().getFullYear()} MPGB Bank · Regulated by the RBI
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center bg-ink-50/40 px-5 py-28 lg:py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden">
            <Logo />
          </div>
          <div className="mt-8 rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:mt-0 lg:p-10">
            <h1 className="font-display text-2xl font-bold text-ink-900">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-ink-500">
              Log in to your MPGB net banking account.
            </p>

            <LoginForm />

            <p className="mt-6 text-center text-sm text-ink-500">
              New to MPGB?{" "}
              <Link
                href="/apply/account-opening"
                className="font-semibold text-gold-600 hover:text-gold-700"
              >
                Open an account
              </Link>
            </p>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-400">
            <Lock className="h-3.5 w-3.5" /> Never share your password or OTP with
            anyone, including bank staff.
          </p>
        </div>
      </div>
    </section>
  );
}
