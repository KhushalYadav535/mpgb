import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="MPGB Bank home"
    >
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-brand-100 transition-transform duration-500 group-hover:scale-105 overflow-hidden">
        <img src="/MPGB-logo-Refined.png" alt="MPGB Logo" className="h-full w-full object-contain p-1" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            isLight ? "text-white" : "text-brand-800"
          )}
        >
          MPGB<span className="text-leaf-500"> Bank</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-[0.18em]",
            isLight ? "text-white/60" : "text-brand-400"
          )}
        >
          आपका अपना बैंक
        </span>
      </span>
    </Link>
  );
}
