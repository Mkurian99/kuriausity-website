import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

      {/* Contact Info Cards */}
      <section className="py-12 relative overflow-hidden" style={{ background: "var(--kq-obsidian)" }}>
        {/* Rice sculpture courtyard */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: "url(/images/rice-sculpture.jpg)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--kq-obsidian) 0%, transparent 25%, transparent 75%, var(--kq-obsidian) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--kq-obsidian) 0%, transparent 15%, transparent 85%, var(--kq-obsidian) 100%)" }} />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Phone size={20} />, label: "Phone", value: "(713) 555-0147" },
              { icon: <Mail size={20} />, label: "Email", value: "hello@kuriausity.com" },
              { icon: <MapPin size={20} />, label: "Location", value: "Houston & Sugar Land, TX" },
              { icon: <Clock size={20} />, label: "Hours", value: "Mon-Sat, 9am-7pm" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-[10px]"
                style={{
                  background: "var(--kq-opal-deep)",
                  border: "0.5px solid var(--kq-opal-rim)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3"
                  style={{
                    background: "rgba(16,185,129,0.10)",
                    color: "var(--kq-em-light)",
                  }}
                >
                  {item.icon}
                </div>
                <p
                  className="text-xs uppercase tracking-wider mb-1"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--kq-text-muted)",
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="font-semibold text-sm"
                  style={{
                    fontFamily: "var(--font-ui)",
                    color: "var(--kq-em-pale)",
                  }}
                >
                  {item.value}
                </p>
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
                  background: "var(--kq-opal-deep)",
                  border: "0.5px solid var(--kq-em-bright)",
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
                  border: "0.5px solid var(--kq-opal-rim)",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-text-muted)",
                      }}
                    >
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
                      style={{
                        background: "var(--kq-opal-mid)",
                        border: "0.5px solid var(--kq-opal-rim)",
                        color: "var(--kq-text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-text-muted)",
                      }}
                    >
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
                      style={{
                        background: "var(--kq-opal-mid)",
                        border: "0.5px solid var(--kq-opal-rim)",
                        color: "var(--kq-text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-text-muted)",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={{
                        background: "var(--kq-opal-mid)",
                        border: "0.5px solid var(--kq-opal-rim)",
                        color: "var(--kq-text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
                      placeholder="(713) 555-0147"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-2"
                      style={{
                        fontFamily: "var(--font-ui)",
                        color: "var(--kq-text-muted)",
                      }}
                    >
                      Student's Grade
                    </label>
                    <select
                      value={formData.studentGrade}
                      onChange={(e) =>
                        setFormData({ ...formData, studentGrade: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-md text-sm"
                      style={{
                        background: "var(--kq-opal-mid)",
                        border: "0.5px solid var(--kq-opal-rim)",
                        color: "var(--kq-text-primary)",
                        fontFamily: "var(--font-body)",
                      }}
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
                  <label
                    className="block text-xs uppercase tracking-wider mb-2"
                    style={{
                      fontFamily: "var(--font-ui)",
                      color: "var(--kq-text-muted)",
                    }}
                  >
                    Tell us about your student
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-md text-sm resize-none"
                    style={{
                      background: "var(--kq-opal-mid)",
                      border: "0.5px solid var(--kq-opal-rim)",
                      color: "var(--kq-text-primary)",
                      fontFamily: "var(--font-body)",
                    }}
                    placeholder="What are your student's goals, challenges, and learning style?"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Request Discovery Call
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
