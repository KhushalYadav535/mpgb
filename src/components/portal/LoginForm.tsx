"use client";

import { useState } from "react";
import { Eye, EyeOff, ArrowRight, User } from "lucide-react";

export function LoginForm() {
  const [showPwd, setShowPwd] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="userId" className="mb-1.5 block text-sm font-medium text-ink-700">
          User ID
        </label>
        <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 transition-colors focus-within:border-gold-400 focus-within:ring-2 focus-within:ring-gold-100">
          <User className="h-4 w-4 text-ink-400" />
          <input
            id="userId"
            type="text"
            required
            autoComplete="username"
            placeholder="Enter your user ID"
            className="w-full bg-transparent py-3 text-sm text-ink-900 outline-none placeholder:text-ink-400"
          />
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium text-ink-700">
            Password
          </label>
          <button type="button" className="text-xs font-medium text-gold-600 hover:text-gold-700">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-3 transition-colors focus-within:border-gold-400 focus-within:ring-2 focus-within:ring-gold-100">
          <input
            id="password"
            type={showPwd ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full bg-transparent py-3 text-sm text-ink-900 outline-none placeholder:text-ink-400"
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            aria-label={showPwd ? "Hide password" : "Show password"}
            className="text-ink-400 transition-colors hover:text-ink-700"
          >
            {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-ink-600">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-ink-300 text-gold-500 accent-gold-500"
        />
        Keep me signed in on this device
      </label>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-gold transition-all duration-300 hover:bg-right hover:shadow-lift"
      >
        Secure Login <ArrowRight className="h-4 w-4" />
      </button>

      {submitted && (
        <p className="rounded-xl bg-emerald/10 px-4 py-3 text-center text-sm text-emerald">
          This is a demo login. Connect your authentication API to go live.
        </p>
      )}
    </form>
  );
}
