"use client";

import { useState, type FormEvent } from "react";

export default function AuditCta() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: send to your CRM / email service, e.g.
    // await fetch("/api/audit", { method: "POST", body: new FormData(e.currentTarget) });
    await new Promise((r) => setTimeout(r, 600));
    setStatus("done");
  }

  return (
    <section id="audit" className="cta-section">
      <div className="cta">
        <div className="cta-copy">
          <h2>Find your biggest leak — free.</h2>
          <p>Send us your URL. We&apos;ll record a teardown of your funnel with the top opportunities we&apos;d test first.</p>
        </div>
        <form className="cta-form" onSubmit={onSubmit}>
          <label>
            Work email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Website URL
            <input type="url" name="url" placeholder="https://" required />
          </label>
          <button type="submit" disabled={status !== "idle"}>
            {status === "sending" ? "Sending…" : status === "done" ? "Request received" : "Get my free audit"}
          </button>
          {status === "done" && (
            <p className="form-msg" role="status">Thanks — we&apos;ll be in touch within [X] business days.</p>
          )}
        </form>
      </div>
    </section>
  );
}
