"use client";

import { useState } from "react";
import { profile } from "@/content/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      message: fd.get("message") as string,
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
      } else {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="section section--subtle" id="contact">
      <div className="container">
        <SectionHeader
          title="Get in Touch"
          subtitle="Open to conversations about interesting problems and opportunities."
        />

        <div className={styles.grid}>
          <div className={styles.links}>
            <a href={`mailto:${profile.email}`} className={styles.linkItem}>
              <span className={styles.linkLabel}>Email</span>
              <span className={styles.linkValue}>{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              <span className={styles.linkLabel}>LinkedIn</span>
              <span className={styles.linkValue}>mehmet-tenekeci</span>
            </a>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input id="name" name="name" type="text" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input id="email" name="email" type="email" className={styles.input} required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                rows={5}
                required
              />
            </div>

            {status === "success" && (
              <p className={styles.success}>Message sent — I&apos;ll be in touch soon.</p>
            )}
            {status === "error" && <p className={styles.error}>{errorMsg}</p>}

            <Button type="submit" variant="primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
