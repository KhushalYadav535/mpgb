import Link from "next/link";
import { cn } from "@/lib/utils";

/** MPGB lotus mark — blue petals with a green leaf, echoing the official logo. */
function LotusMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      {/* outer blue petals */}
      <path
        d="M24 6c-3.2 4-5 8-5 12 0 4.2 2.1 7.6 5 10 2.9-2.4 5-5.8 5-10 0-4-1.8-8-5-12Z"
        fill="#2076e6"
      />
      <path
        d="M11 14c-.6 5 0 9.3 1.9 12.8 2 3.7 5.3 5.8 8.9 6.6.4-3.7-.4-7.6-2.6-11.1C17 18.8 14.2 16 11 14Z"
        fill="#135ccb"
      />
      <path
        d="M37 14c.6 5 0 9.3-1.9 12.8-2 3.7-5.3 5.8-8.9 6.6-.4-3.7.4-7.6 2.6-11.1C31 18.8 33.8 16 37 14Z"
        fill="#4f9bf5"
      />
      {/* green leaf base */}
      <path
        d="M24 30c-4 1.4-7 3.6-9 6.6 3.4 1.5 6.8 1.8 9 .9 2.2.9 5.6.6 9-.9-2-3-5-5.2-9-6.6Z"
        fill="#34a82a"
      />
    </svg>
  );
}

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
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-brand-100 transition-transform duration-500 group-hover:scale-105">
        <LotusMark className="h-8 w-8" />
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
