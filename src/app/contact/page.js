// app/contact/page.js
"use client";
import React, { useState, useTransition } from "react";
import { ArrowRight, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const topics = [
    "Your goals and challenges",
    "What kind of solution might fit",
    "Whether we can deliver value fast",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    startTransition(async () => {
      try {
        const result = await submitContactForm(formData);

        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", company: "", message: "" });
        } else {
          setError(result.error || "Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setError(
          "Something went wrong. Please try again or email us directly."
        );
      }
    });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden py-12">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 blur-sm scale-105 object-cover"
        >
          <source src="/videos/hero-solutions.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-gray-900/50"></div>
      </div>

      {/* Background Elements - subtle */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Success State */}
          {isSubmitted ? (
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 lg:p-16 shadow-2xl border border-white/20 text-center">
              <div className="space-y-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-semibold text-primary mb-4">
                    Thanks! We'll follow up within 24&nbsp;hours.
                  </h1>
                  <p className="text-xl text-secondary mb-8">
                    We'll review your request and send you a calendar link to
                    book your clarity call.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-secondary"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Main Contact Form Layout */
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12 bg-gray-50/80 backdrop-blur-sm">
                  <div className="space-y-8">
                    {/* Status Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/30 shadow-sm">
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                      <span className="text-primary text-sm font-medium">
                        Usually respond within 24 hours
                      </span>
                    </div>

                    {/* Headlines */}
                    <div className="space-y-4">
                      <h1 className="text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                        Let's Talk Through Your Use&nbsp;Case
                      </h1>
                      <p className="text-lg text-secondary">
                        No hard pitch. No bloated scope.
                      </p>
                      <p className="text-base text-secondary">
                        Just a 30-minute call to explore whether we're the
                        right&nbsp;fit.
                      </p>
                    </div>

                    {/* What We'll Cover */}
                    <div className="space-y-6">
                      <h2 className="text-lg font-semibold text-primary">
                        We'll cover:
                      </h2>

                      <ul className="space-y-3">
                        {topics.map((topic, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                              <CheckCircle2
                                className="w-3 h-3 text-primary"
                                strokeWidth={2}
                              />
                            </div>
                            <span className="text-base text-secondary leading-relaxed">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-muted font-medium pt-4 border-t border-gray-200/50">
                        If we're not the right fit, we'll tell you —
                        no&nbsp;pressure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 lg:p-12 bg-white/80 backdrop-blur-sm">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all duration-200 text-primary placeholder-gray-500"
                        required
                        disabled={isPending}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Work email preferred"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all duration-200 text-primary placeholder-gray-500"
                        required
                        disabled={isPending}
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Company{" "}
                        <span className="text-gray-400 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="What company are you with?"
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all duration-200 text-primary placeholder-gray-500"
                        disabled={isPending}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        What would you like help with? *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="E.g. Dashboards, Automation, AI use case"
                        rows={4}
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all duration-200 text-primary placeholder-gray-500 resize-vertical"
                        required
                        disabled={isPending}
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50/90 backdrop-blur-sm p-3 rounded-lg border border-red-200/50">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                      >
                        {isPending ? (
                          <span>Sending...</span>
                        ) : (
                          <>
                            <span>Book Clarity Call</span>
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Helper Text & Fallback */}
                    <div className="space-y-4 pt-4 border-t border-gray-100/50">
                      <p className="text-sm text-muted text-center">
                        ✅ Keep this short — you'll qualify on the call, not
                        the&nbsp;form.
                      </p>

                      <div className="text-center">
                        <p className="text-sm text-muted mb-2">
                          Form not working?
                        </p>
                        <a
                          href="mailto:hello@altrabyte.com?subject=Clarity Call Request&body=Hi! I'd like to schedule a clarity call to discuss my use case.%0D%0A%0D%0AName: %0D%0ACompany: %0D%0AWhat I need help with: "
                          className="inline-flex items-center text-sm text-primary hover:text-primary-hover font-medium transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email us directly
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
