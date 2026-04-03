"use client";

import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { profile } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Mail, UserCircle as LinkedIn, Send, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to conversations about interesting problems, strategic leadership, and growth opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-background border border-border p-10 rounded-3xl shadow-sm space-y-12 h-full">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight">Contact Information</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Feel free to reach out via email or connect with me on LinkedIn. I generally respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-6 group p-4 -ml-4 rounded-2xl hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">Email</span>
                    <span className="block text-xl font-bold text-foreground group-hover:text-accent transition-colors">{profile.email}</span>
                  </div>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group p-4 -ml-4 rounded-2xl hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/5 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <LinkedIn className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</span>
                    <span className="block text-xl font-bold text-foreground group-hover:text-accent transition-colors">mehmet-tenekeci</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-background border border-border p-10 rounded-3xl shadow-sm">
              <div className="flex items-center gap-4 mb-10 text-accent">
                <MessageSquareText className="h-8 w-8" />
                <h3 className="text-3xl font-bold tracking-tight text-foreground">Send a Message</h3>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-secondary/50 border-none rounded-xl p-4 text-foreground focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-secondary/50 border-none rounded-xl p-4 text-foreground focus:ring-2 focus:ring-accent transition-all"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-secondary/50 border-none rounded-xl p-4 text-foreground focus:ring-2 focus:ring-accent transition-all"
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>

                <div className="py-2">
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
                  <p className="p-4 bg-green-500/10 text-green-600 rounded-xl font-medium flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Message sent — I&apos;ll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="p-4 bg-red-500/10 text-red-600 rounded-xl font-medium flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-8 text-lg rounded-2xl group gap-3"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
