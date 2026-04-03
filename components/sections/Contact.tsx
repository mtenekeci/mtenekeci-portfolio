"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { profile } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Mail, Send, MessageSquareText, CheckCircle2, AlertCircle } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "success" | "error";

export function Contact({ turnstileSiteKey }: { turnstileSiteKey: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMsg("Please wait for the security check to complete.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      message: fd.get("message") as string,
      turnstileToken,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      } else {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        turnstileRef.current?.reset();
        setTurnstileToken(null);
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 text-sm font-medium";

  return (
    <section className="py-28 bg-secondary/30 relative overflow-hidden" id="contact">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, color-mix(in srgb, var(--accent) 35%, transparent), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Open to conversations about engineering leadership, strategic opportunities, and interesting problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="glass bg-surface border border-border rounded-2xl p-8 h-full flex flex-col gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-3">Contact Details</h3>
                <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                  I generally respond within 24 hours. Whether you&apos;re recruiting, collaborating, or just curious — I&apos;d love to hear from you.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  id="contact-email-link"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent mb-0.5">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors break-all">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-link"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform shrink-0">
                    <LinkedInIcon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent mb-0.5">
                      LinkedIn
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      mehmet-tenekeci
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            <div className="glass bg-surface border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquareText className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit} id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={inputCls}
                      style={{ "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={inputCls}
                      style={{ "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={inputCls}
                    style={{ "--tw-ring-color": "var(--accent)" } as React.CSSProperties}
                    rows={5}
                    placeholder="Share what you're working on or what you'd like to discuss..."
                    required
                  />
                </div>

                <div className="py-1">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    onSuccess={setTurnstileToken}
                    onError={() => {
                      setTurnstileToken(null);
                      setErrorMsg("Security check failed. Please refresh and try again.");
                      setStatus("error");
                    }}
                    onExpire={() => setTurnstileToken(null)}
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Message sent — I&apos;ll be in touch soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-medium text-sm">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  id="contact-submit"
                  className="w-full py-4 text-base rounded-xl gap-3"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
