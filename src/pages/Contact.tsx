import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, Star } from "lucide-react";
import { submitForm } from "@/lib/submitForm";

const inputStyle = {
  background: "var(--kq-opal-mid)",
  border: "0.5px solid var(--kq-opal-rim)",
  color: "var(--kq-text-primary)",
  fontFamily: "var(--font-body)",
} as const;

const labelClass = "block text-xs uppercase tracking-wider mb-2";
const labelStyle = { fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" } as const;

export default function Contact() {
  // ── General inquiry ──
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);
    try {
      await submitForm("inquiry", formData);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong sending your message — please email hello@kuriausity.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Consultant application ──
  const [consultantOpen, setConsultantOpen] = useState(false);
  const [consultantSubmitted, setConsultantSubmitted] = useState(false);
  const [consultantSubmitting, setConsultantSubmitting] = useState(false);
  const [consultantError, setConsultantError] = useState("");
  const [consultantData, setConsultantData] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    credentials: "",
    bio: "",
    link: "",
  });

  const handleConsultantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setConsultantError("");
    setConsultantSubmitting(true);
    try {
      await submitForm("consultant_application", consultantData);
      setConsultantSubmitted(true);
    } catch {
      setConsultantError("Something went wrong submitting your application — please email hello@kuriausity.com directly.");
    } finally {
      setConsultantSubmitting(false);
    }
  };

  // ── Client review ──
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [reviewSubmitting, setReviewSubmitting] = useState(false);
  const [reviewError, setReviewError] = useState("");
  const [reviewHover, setReviewHover] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: "",
    program: "",
    rating: 0,
    review: "",
    consent: false,
  });

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewData.rating === 0) {
      setReviewError("Please choose a star rating before submitting.");
      return;
    }
    setReviewError("");
    setReviewSubmitting(true);
    try {
      await submitForm("review", reviewData);
      setReviewSubmitted(true);
    } catch {
      setReviewError("Something went wrong submitting your review — please email hello@kuriausity.com directly.");
    } finally {
      setReviewSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <section
        className="section"
        style={{ background: "var(--kq-opal-mid)" }}
      >
        <div className="container">
          <p className="eyebrow mb-4">Contact</p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              color: "var(--kq-em-ghost)",
              fontSize: "clamp(2.2rem, 5vw, 3.625rem)",
            }}
          >
            Let's start a{" "}
            <em style={{ color: "var(--kq-em-light)" }}>conversation</em>.
          </h1>
          <p
            className="subheadline max-w-2xl mt-4"
            style={{ color: "var(--kq-text-muted)" }}
          >
            The discovery call is free, 45 minutes, and completely without obligation.
            We'll figure out what your student needs and whether Kuriausity is the
            right fit.
          </p>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-12 relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Rice sculpture courtyard */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url(/images/rice-sculpture.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div
            className="flex flex-col md:flex-row"
            style={{ borderTop: "0.5px solid var(--kq-opal-rim)", borderBottom: "0.5px solid var(--kq-opal-rim)" }}
          >
            {[
              { icon: <Phone size={15} />, label: "Phone", value: "(713) 555-0147" },
              { icon: <Mail size={15} />, label: "Email", value: "hello@kuriausity.com" },
              { icon: <MapPin size={15} />, label: "Location", value: "Houston & Sugar Land, TX" },
              { icon: <Clock size={15} />, label: "Hours", value: "Mon-Sat, 9am-7pm" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 flex items-center gap-3 py-6 px-6"
                style={{ borderLeft: i > 0 ? "0.5px solid var(--kq-opal-rim)" : "none" }}
              >
                <span style={{ color: "var(--kq-em-mid)" }}>{item.icon}</span>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--kq-text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ fontFamily: "var(--font-ui)", color: "var(--kq-em-pale)" }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-opal-mid)" }}>
        {/* Keck Hall at Rice */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.08]" style={{ backgroundImage: "url(/images/keck-hall.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-opal-mid) 0%, transparent 25%, transparent 75%, var(--kq-opal-mid) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-opal-mid) 0%, transparent 15%, transparent 85%, var(--kq-opal-mid) 100%)" }} />

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div
                className="text-center p-12 rounded-[10px]"
                style={{
                  background: "color-mix(in srgb, var(--kq-opal-deep) 90%, var(--kq-em-bright) 10%)",
                  boxShadow: "var(--kq-shadow-lg), inset 0 0 0 1px color-mix(in srgb, var(--kq-em-bright) 30%, transparent)",
                }}
              >
                <CheckCircle
                  size={48}
                  className="mx-auto mb-4"
                  style={{ color: "var(--kq-em-bright)" }}
                />
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--kq-em-pale)",
                  }}
                >
                  Message Received
                </h3>
                <p style={{ color: "var(--kq-text-muted)" }}>
                  Thank you for reaching out. We'll be in touch within 24 hours to
                  schedule your discovery call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-[10px]"
                style={{
                  background: "var(--kq-opal-deep)",
                  boxShadow: "var(--kq-shadow-lg)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Parent Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={inputStyle}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={inputStyle}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={inputStyle}
                      placeholder="(713) 555-0147"
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      Student's Grade
                    </label>
                    <select
                      value={formData.studentGrade}
                      onChange={(e) =>
                        setFormData({ ...formData, studentGrade: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={inputStyle}
                    >
                      <option value="">Select grade</option>
                      <option value="6-8">Middle School (6-8)</option>
                      <option value="9-10">High School Freshman/Sophomore</option>
                      <option value="11-12">High School Junior/Senior</option>
                      <option value="college">College</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className={labelClass} style={labelStyle}>
                    Tell us about your student
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md text-sm resize-none"
                    style={inputStyle}
                    placeholder="What are your student's goals, challenges, and learning style?"
                  />
                </div>

                {submitError && (
                  <p className="text-sm mb-4" style={{ color: "var(--kq-cobalt-soft)" }}>
                    {submitError}
                  </p>
                )}

                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center">
                  {submitting ? "Sending…" : "Request Discovery Call"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========== CONSULTANT APPLICATION + REVIEW ========== */}
      <section className="section relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: "url(/images/rice-aerial.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Beyond Tutoring</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--kq-em-pale)" }}>
              Two more ways to be{" "}
              <em style={{ color: "var(--kq-em-light)" }}>part of this</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-4xl mx-auto">
            {/* ── Consultant application ── */}
            <div className="pt-6" style={{ borderTop: "2px solid var(--kq-violet-flash)" }}>
              <h3 className="text-lg mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}>
                Join the Consultant Network
              </h3>

              {consultantSubmitted ? (
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  Thank you — your application is in. Michael reviews every submission
                  personally and will follow up within a week if it's a fit.
                </p>
              ) : (
                <>
                  <p className="mb-4" style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                    Professors, practitioners, and researchers who'd like to teach a
                    session or bring field-level expertise to a student, apply here.
                  </p>

                  {!consultantOpen ? (
                    <button type="button" onClick={() => setConsultantOpen(true)} className="btn-secondary">
                      Apply as a Consultant
                    </button>
                  ) : (
                    <form onSubmit={handleConsultantSubmit} className="space-y-4">
                      <div>
                        <label className={labelClass} style={labelStyle}>Full Name</label>
                        <input
                          type="text" required
                          value={consultantData.name}
                          onChange={(e) => setConsultantData({ ...consultantData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass} style={labelStyle}>Email</label>
                          <input
                            type="email" required
                            value={consultantData.email}
                            onChange={(e) => setConsultantData({ ...consultantData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className={labelClass} style={labelStyle}>Phone</label>
                          <input
                            type="tel"
                            value={consultantData.phone}
                            onChange={(e) => setConsultantData({ ...consultantData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                            placeholder="(713) 555-0147"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Area of Expertise</label>
                        <input
                          type="text" required
                          value={consultantData.expertise}
                          onChange={(e) => setConsultantData({ ...consultantData, expertise: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="e.g. Competition Math, Debate & Rhetoric, Writing"
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Credentials</label>
                        <input
                          type="text"
                          value={consultantData.credentials}
                          onChange={(e) => setConsultantData({ ...consultantData, credentials: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="e.g. Putnam Fellow, UT Austin"
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Bio / Experience</label>
                        <textarea
                          rows={3} required
                          value={consultantData.bio}
                          onChange={(e) => setConsultantData({ ...consultantData, bio: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm resize-none" style={inputStyle}
                          placeholder="Tell us about your background and how you'd like to contribute."
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>LinkedIn / Portfolio Link</label>
                        <input
                          type="url"
                          value={consultantData.link}
                          onChange={(e) => setConsultantData({ ...consultantData, link: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="https://"
                        />
                      </div>

                      {consultantError && (
                        <p className="text-sm" style={{ color: "var(--kq-cobalt-soft)" }}>{consultantError}</p>
                      )}

                      <button type="submit" disabled={consultantSubmitting} className="btn-secondary w-full justify-center">
                        {consultantSubmitting ? "Submitting…" : "Submit Application"}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>

            {/* ── Client review ── */}
            <div className="pt-6" style={{ borderTop: "2px solid var(--kq-em-mid)" }}>
              <h3 className="text-lg mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--kq-em-pale)" }}>
                Share Your Experience
              </h3>

              {reviewSubmitted ? (
                <p style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                  Thank you for taking the time — reviews like yours are what help the
                  next family find us.
                </p>
              ) : (
                <>
                  <p className="mb-4" style={{ color: "var(--kq-text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                    Worked with Kuriausity? Tell other families about your experience.
                  </p>

                  {!reviewOpen ? (
                    <button type="button" onClick={() => setReviewOpen(true)} className="btn-secondary">
                      Leave a Review
                    </button>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-4">
                      <div>
                        <label className={labelClass} style={labelStyle}>Your Name</label>
                        <input
                          type="text" required
                          value={reviewData.name}
                          onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="First name and last initial"
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Program / Course</label>
                        <input
                          type="text"
                          value={reviewData.program}
                          onChange={(e) => setReviewData({ ...reviewData, program: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm" style={inputStyle}
                          placeholder="e.g. SAT Mastery, Competitive Debate"
                        />
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Rating</label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <button
                              key={n}
                              type="button"
                              onMouseEnter={() => setReviewHover(n)}
                              onMouseLeave={() => setReviewHover(0)}
                              onClick={() => setReviewData({ ...reviewData, rating: n })}
                              aria-label={`${n} star${n > 1 ? "s" : ""}`}
                              className="p-0.5"
                            >
                              <Star
                                size={22}
                                fill={(reviewHover || reviewData.rating) >= n ? "var(--kq-em-bright)" : "none"}
                                style={{ color: "var(--kq-em-bright)" }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className={labelClass} style={labelStyle}>Your Review</label>
                        <textarea
                          rows={3} required
                          value={reviewData.review}
                          onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                          className="w-full px-4 py-3 rounded-md text-sm resize-none" style={inputStyle}
                          placeholder="What changed for your student?"
                        />
                      </div>
                      <label className="flex items-start gap-2 text-xs" style={{ color: "var(--kq-text-muted)" }}>
                        <input
                          type="checkbox" required
                          checked={reviewData.consent}
                          onChange={(e) => setReviewData({ ...reviewData, consent: e.target.checked })}
                          className="mt-0.5"
                        />
                        I agree Kuriausity may share this review publicly, attributed to
                        the name above.
                      </label>

                      {reviewError && (
                        <p className="text-sm" style={{ color: "var(--kq-cobalt-soft)" }}>{reviewError}</p>
                      )}

                      <button type="submit" disabled={reviewSubmitting} className="btn-secondary w-full justify-center">
                        {reviewSubmitting ? "Submitting…" : "Submit Review"}
                      </button>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
