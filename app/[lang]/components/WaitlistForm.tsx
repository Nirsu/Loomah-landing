"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";

interface WaitlistFormProps {
  dict: {
    placeholder: string;
    button: string;
    privacy: string;
    invalid: string;
    success: string;
    error: string;
  };
  lang: string;
  compact?: boolean;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export default function WaitlistForm({
  dict,
  lang,
  compact = false,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage(dict.invalid);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          locale: lang,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
      setMessage(dict.success);
    } catch {
      setStatus("error");
      setMessage(dict.error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={compact ? "max-w-xl" : "max-w-[34rem]"}
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor={`email-${compact}`}>
          Email
        </label>
        <input
          id={`email-${compact}`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder={dict.placeholder}
          disabled={status === "loading"}
          aria-invalid={status === "error"}
          aria-describedby={`form-message-${compact}`}
          className="focus-ring min-h-14 min-w-0 flex-1 rounded-xl border border-line bg-white px-5 text-base text-ink shadow-[0_8px_28px_rgba(76,53,39,0.06)] outline-none transition-colors placeholder:text-muted/70 hover:border-terracotta/40 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="focus-ring group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-terracotta px-6 font-bold text-white shadow-[0_12px_30px_rgba(152,75,53,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark active:translate-y-0 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "loading" ? "..." : dict.button}
          <ArrowRight
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
            strokeWidth={1.75}
          />
        </button>
      </div>
      <div className="mt-3 min-h-6">
        {message ? (
          <p
            id={`form-message-${compact}`}
            role="status"
            className={`flex items-center gap-2 text-sm font-semibold ${
              status === "success" ? "text-sage" : "text-terracotta-dark"
            }`}
          >
            {status === "success" && (
              <Check className="h-4 w-4" strokeWidth={1.75} />
            )}
            {message}
          </p>
        ) : (
          <p
            id={`form-message-${compact}`}
            className="flex items-center gap-2 text-sm text-muted"
          >
            <LockKeyhole className="h-4 w-4" strokeWidth={1.75} />
            {dict.privacy}
          </p>
        )}
      </div>
    </form>
  );
}
