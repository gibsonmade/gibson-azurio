"use client";

import { type FormEvent, useState } from "react";
import { CommonLoadItem } from "@/components/animations/CommonLoadAnimation";
import TextScramble from "@/components/animations/TextScramble";

type FormStatus = "idle" | "sending" | "success" | "error";

const WEB3_SUBMIT = "https://api.web3forms.com/submit";

type Web3Response = { success: boolean; message?: string };

/**
 * Web3Forms React example: FormData from the form, `access_key` appended, then POST to their API.
 * The key is public (inlined at build) — set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local` (not hardcoded).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!key) {
      setStatus("error");
      setFeedback(
        "The form is not available right now. Email hello@gibsooon.com and Gibson will get back to you.",
      );
      return;
    }

    setStatus("sending");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("botcheck") ?? "").trim().length > 0) {
      setStatus("success");
      setFeedback("Thanks for your message. Gibson will get back as soon as possible.");
      form.reset();
      return;
    }
    formData.append("access_key", key);

    try {
      const res = await fetch(WEB3_SUBMIT, { method: "POST", body: formData });
      const data: Web3Response = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(
          "Thanks for your message. Gibson will get back as soon as possible.",
        );
        form.reset();
        return;
      }
      setStatus("error");
      setFeedback(
        data.message && data.message.length > 0
          ? data.message
          : "Something went wrong. Try again in a moment or email hello@gibsooon.com.",
      );
    } catch {
      setStatus("error");
      setFeedback(
        "The message did not send. Try again in a moment or email hello@gibsooon.com.",
      );
    }
  }

  const showSuccessReply = status === "success";

  return (
    <div className="mxd-block contact">
      <div className="mxd-form-container">
        {showSuccessReply && (
          <div
            className="form__reply centered text-center is-visible"
            role="status"
            aria-live="polite"
          >
            <i className="ph-fill ph-smiley-wink reply__icon" />
            <p className="reply__title">Done!</p>
            <span className="reply__text">{feedback}</span>
          </div>
        )}

        <form
          className={`form contact-form${status === "success" ? " is-hidden" : ""}`}
          id="contact-form"
          onSubmit={onSubmit}
        >
          <input
            type="hidden"
            name="subject"
            defaultValue="New message from contact page"
            aria-hidden
          />
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
            aria-hidden
          />
          <div className="container-fluid p-0">
            <div className="row gx-0">
              <CommonLoadItem index={0}>
                <div className="col-12 col-md-6 mxd-grid-item loading-item">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name*"
                    required
                    disabled={status === "sending" || showSuccessReply}
                  />
                </div>
              </CommonLoadItem>
              <CommonLoadItem index={1}>
                <div className="col-12 col-md-6 mxd-grid-item loading-item">
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                    disabled={status === "sending" || showSuccessReply}
                  />
                </div>
              </CommonLoadItem>
              <CommonLoadItem index={2}>
                <div className="col-12 col-md-6 mxd-grid-item loading-item">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Email*"
                    required
                    disabled={status === "sending" || showSuccessReply}
                  />
                </div>
              </CommonLoadItem>
              <CommonLoadItem index={3}>
                <div className="col-12 col-md-6 mxd-grid-item loading-item">
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Phone"
                    disabled={status === "sending" || showSuccessReply}
                  />
                </div>
              </CommonLoadItem>
              <CommonLoadItem index={4}>
                <div className="col-12 mxd-grid-item loading-item">
                  <textarea
                    name="message"
                    placeholder="A few words about your project*"
                    required
                    defaultValue={""}
                    disabled={status === "sending" || showSuccessReply}
                  />
                </div>
              </CommonLoadItem>
              <CommonLoadItem index={5}>
                <div className="col-12 mxd-grid-item loading-item">
                  <button
                    className="btn btn-default-icon btn-default-accent slide-right"
                    type="submit"
                    disabled={status === "sending" || showSuccessReply}
                  >
                    {status === "sending" ? (
                      <span className="btn-caption">Sending…</span>
                    ) : (
                      <TextScramble className="btn-caption mxd-scramble">
                        Submit
                      </TextScramble>
                    )}
                    <i className="btn-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 18 18"
                        aria-hidden
                      >
                        <path d="M10.8,0v3.6h-3.6V0h3.6ZM14.4,10.8h3.6v-3.6h-3.6v-3.6h-3.6v3.6H0v3.6h10.8v3.6h3.6v-3.6ZM10.8,14.4h-3.6v3.6h3.6v-3.6Z" />
                      </svg>
                    </i>
                  </button>
                </div>
              </CommonLoadItem>
            </div>
          </div>
        </form>
        {status === "error" && feedback ? (
          <p className="reply__text" role="alert" style={{ marginTop: "2.4rem" }}>
            {feedback}
          </p>
        ) : null}
      </div>
    </div>
  );
}
