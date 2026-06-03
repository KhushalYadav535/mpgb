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
        <img src="/logo.jpeg" alt="MPGB Logo" className="h-full w-full object-contain p-1" />
      </span>
      <span className="flex flex-col items-center">
        <span className="flex w-[260px] sm:w-[320px] h-[56px] sm:h-[68px] items-center rounded-lg overflow-hidden shadow-sm bg-white">
          <img 
            src="/MPGB-logo-Refined.png" 
            alt="MPGB Bank Banner" 
            className="w-full h-full object-cover object-[center_35%]" 
          />
        </span>
        <span className={cn(
          "text-[10px] sm:text-[11px] font-bold tracking-widest mt-1",
          isLight ? "text-white" : "text-brand-800"
        )}>
          आपका अपना बैंक
        </span>
      </span>
    </Link>
  );
}
