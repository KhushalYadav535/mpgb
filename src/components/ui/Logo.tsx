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
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gold-sheen bg-[length:200%_auto] shadow-gold transition-all duration-500 group-hover:bg-right">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-ink-900"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 10.5 12 4l9 6.5M5 9.8V19h14V9.8M9.5 19v-5.5h5V19"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-bold tracking-tight",
            isLight ? "text-white" : "text-ink-900"
          )}
        >
          MPGB<span className="text-gold-500"> Bank</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-[0.2em]",
            isLight ? "text-white/60" : "text-ink-400"
          )}
        >
          Gramin · Trusted Since 1976
        </span>
      </span>
    </Link>
  );
}
