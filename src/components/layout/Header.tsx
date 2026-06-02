"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Lock,
  Phone,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility strip */}
      <div
        className={cn(
          "hidden border-b border-white/10 bg-ink-950 text-white/70 transition-all duration-300 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="container-px flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-leaf-300" /> Toll Free: 1800 123 3313
            </span>
            <span className="text-white/40">|</span>
            <span>Customer care available 24 × 7</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/customer-service/grievance-redressal" className="transition-colors hover:text-leaf-300">
              Grievance Redressal
            </Link>
            <button className="inline-flex items-center gap-1.5 transition-colors hover:text-leaf-300">
              <Globe className="h-3.5 w-3.5" /> English / हिंदी
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-ink-950/90 shadow-lift backdrop-blur-xl"
            : "bg-gradient-to-b from-ink-950/80 to-transparent backdrop-blur-sm"
        )}
      >
        <div className="container-px flex h-20 items-center justify-between">
          <Logo variant="light" />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white",
                    openMenu === item.label && "text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        openMenu === item.label && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {item.children && openMenu === item.label && (
                  <div className="absolute left-1/2 top-full w-[28rem] -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-lift backdrop-blur-xl">
                      <div className="grid grid-cols-1 gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-white/5"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf-400/70 transition-all group-hover:scale-150 group-hover:bg-leaf-400" />
                            <span className="flex-1">
                              <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                                {child.label}
                                <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-leaf-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                              </span>
                              {child.desc && (
                                <span className="mt-0.5 block text-xs text-white/50">
                                  {child.desc}
                                </span>
                              )}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/net-banking/login"
              className="hidden items-center gap-2 rounded-full bg-brand-sheen bg-[length:180%_auto] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(32,118,230,0.6)] transition-all duration-300 hover:bg-right hover:shadow-lift sm:inline-flex"
            >
              <Lock className="h-4 w-4" /> Net Banking
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-ink-900 px-6 pb-10 pt-24 shadow-lift transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <MobileNavGroup key={item.label} item={item} />
            ))}
          </nav>
          <Link
            href="/net-banking/login"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand-sheen bg-[length:180%_auto] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-8px_rgba(32,118,230,0.6)]"
          >
            <Lock className="h-4 w-4" /> Login to Net Banking
          </Link>
        </div>
      </div>
    </header>
  );
}

function MobileNavGroup({ item }: { item: (typeof mainNav)[number] }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded-xl px-4 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/5"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-semibold text-white/90"
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="flex flex-col gap-0.5 pb-2 pl-4">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="rounded-lg px-4 py-2.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
