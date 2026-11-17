"use client";

import { useMemo, useState, type FormEvent } from "react";

const steps = [
  {
    question: "What brand are you making its next big move?",
    options: [
      "Fashion",
      "Real estate",
      "Food & beverage",
      "Technology",
      "Beauty & Wellness",
      "More"
    ]
  },
  {
    question: "What's keeping your brand from its next big breakthrough? 🚀",
    options: [
      "We need more audience talking about us",
      "More content with less spend",
      "Ads that stops the scroll",
      "Influencers who bring customers, not just followers"
    ]
  },
  {
    question: "What's your business revenue month?",
    options: [
      "Below AED 50K",
      "AED 50K – 150K",
      "AED 150K – 500K",
      "AED 500K+"
    ]
  },
  {
    question: "Who's handling your marketing right now?",
    options: [
      "An external agency",
      "An in-house team",
      "Both",
      "We're handling it ourselves"
    ]
  }
] as const;

type Contact = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
};

const emptyContact: Contact = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: ""
};

export function HeroShortlistForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [contact, setContact] = useState<Contact>(emptyContact);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = steps.length + 1;
  const progress = ((step + 1) / totalSteps) * 100;
  const isContactStep = step >= steps.length;

  const canSubmit = useMemo(() => {
    return (
      contact.firstName.trim() &&
      contact.lastName.trim() &&
      contact.email.trim() &&
      contact.phone.trim()
    );
  }, [contact]);

  const selectOption = (option: string) => {
    const next = [...answers];
    next[step] = option;
    setAnswers(next);
    setStep((prev) => Math.min(prev + 1, steps.length));
  };

  const goBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mpr-shortlist">
        <div className="mpr-shortlist__done">
          <span className="mpr-kicker">YOU&apos;RE IN</span>
          <h2>Thanks — we&apos;ll reach out within 1 hour.</h2>
          <p>
            Our team is preparing a curated creator shortlist based on your
            answers.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mpr-shortlist">
      <div className="mpr-shortlist__top">
        {step > 0 ? (
          <button type="button" className="mpr-shortlist__back" onClick={goBack}>
            ← Back
          </button>
        ) : (
          <span />
        )}
        <span className="mpr-shortlist__step">
          STEP {step + 1} OF {totalSteps}
        </span>
      </div>
      <div className="mpr-shortlist__progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      {!isContactStep ? (
        <>
          <h2 className="mpr-shortlist__question">{steps[step].question}</h2>
          <div className="mpr-shortlist__options">
            {steps[step].options.map((option) => (
              <button
                key={option}
                type="button"
                className={`mpr-shortlist__option${
                  answers[step] === option ? " is-active" : ""
                }`}
                onClick={() => selectOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <form className="mpr-shortlist__form" onSubmit={onSubmit}>
          <h2 className="mpr-shortlist__question">
            Our team will reach out to you within 1 hour.
          </h2>
          <div className="mpr-shortlist__row">
            <label>
              <span className="sr-only">First name</span>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={contact.firstName}
                onChange={(e) =>
                  setContact((prev) => ({ ...prev, firstName: e.target.value }))
                }
                required
              />
            </label>
            <label>
              <span className="sr-only">Last name</span>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={contact.lastName}
                onChange={(e) =>
                  setContact((prev) => ({ ...prev, lastName: e.target.value }))
                }
                required
              />
            </label>
          </div>
          <label>
            <span className="sr-only">Company name</span>
            <input
              type="text"
              name="company"
              placeholder="Company name"
              value={contact.company}
              onChange={(e) =>
                setContact((prev) => ({ ...prev, company: e.target.value }))
              }
            />
          </label>
          <div className="mpr-shortlist__row">
            <label>
              <span className="sr-only">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={contact.email}
                onChange={(e) =>
                  setContact((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </label>
            <label>
              <span className="sr-only">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="+971 50 123 4567"
                value={contact.phone}
                onChange={(e) =>
                  setContact((prev) => ({ ...prev, phone: e.target.value }))
                }
                required
              />
            </label>
          </div>
          <button type="submit" className="mpr-shortlist__submit" disabled={!canSubmit}>
            Get My Curated Creator Shortlist!
            <span aria-hidden="true">➤</span>
          </button>
        </form>
      )}
    </div>
  );
}
