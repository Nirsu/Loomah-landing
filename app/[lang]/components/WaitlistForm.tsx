"use client";

import { FormEvent, useState } from "react";
import {
  CircleCheck,
  CircleAlert,
  LoaderCircle,
} from "lucide-react";

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

export default function WaitlistForm({
  dict,
  lang,
  compact = false,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setInvalidEmail(true);
      setStatus("error");
      setMessage(dict.invalid);
      return;
    }

    setStatus("loading");
    setInvalidEmail(false);
    setMessage("");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/newsletter", {
        signal: controller.signal,
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
    } finally {
      clearTimeout(timeout);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
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
          aria-invalid={invalidEmail}
          onChange={() => {
            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
            setInvalidEmail(false);
          }}
          aria-describedby={`form-message-${compact}`}
          className="waitlist-input min-h-14 min-w-0 flex-1 rounded-xl px-5 text-base"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="waitlist-submit inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-6"
        >
          {status === "loading"
            ? lang === "fr"
              ? "Inscription…"
              : "Signing up…"
            : dict.button}
          {status === "loading" && (
            <LoaderCircle
              size={20}
              className="waitlist-spinner"
              aria-hidden="true"
            />
          )}
        </button>
      </div>
      <div className="mt-3 min-h-6" aria-live="polite" aria-atomic="true">
        {message ? (
          <p
            id={`form-message-${compact}`}
            className={`flex items-center gap-2 text-sm font-semibold ${
              status === "success"
                ? "form-message-success"
                : "form-message-error"
            }`}
          >
            {status === "success" ? (
              <CircleCheck size={18} aria-hidden="true" />
            ) : (
              <CircleAlert size={18} aria-hidden="true" />
            )}
            {message}
          </p>
        ) : (
          <p
            id={`form-message-${compact}`}
            className="text-sm text-muted"
          >
            {dict.privacy}
          </p>
        )}
      </div>
    </form>
  );
}
