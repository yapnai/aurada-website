"use client";

import { useRef, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const attempt = useRef(null);

  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const content = JSON.stringify(data);
    if (attempt.current?.content !== content)
      attempt.current = { content, id: crypto.randomUUID() };
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(
        "https://khzt4grp6nhy4wcbpuvmnrjuym0kovkd.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": attempt.current.id,
          },
          body: content,
          signal: AbortSignal.timeout(20000),
        },
      );
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.error || "Your message could not be sent. Please try again.",
        );
      setStatus("sent");
      form.reset();
      attempt.current = null;
    } catch (failure) {
      setError(
        failure.name === "TimeoutError"
          ? "That took longer than expected. Please try again."
          : failure.message || "Please try again or email team@yapn.ai.",
      );
      setStatus("idle");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder="Alex Morgan"
            required
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="alex@company.com"
            required
          />
        </label>
      </div>
      <label>
        Company <span className="optional">(optional)</span>
        <input
          name="company"
          autoComplete="organization"
          maxLength={160}
          placeholder="Your business"
        />
      </label>
      <label>
        What’s on your mind?
        <textarea
          name="message"
          rows={3}
          maxLength={5000}
          placeholder="Tell us a little about your business and what you have in mind."
          required
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-bottom">
        <span className="form-note">
          Straight to our team.
          <br />A conversation starts here.
        </span>
        <button
          className="button button-light"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div aria-live="polite" role="status">
        {status === "sent" && (
          <p className="form-success">Message sent. Thanks for reaching out.</p>
        )}
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
