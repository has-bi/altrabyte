// app/contact/page.js - Mobile-First Clean Design
"use client";
import React, { useState, useTransition } from "react";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  AlertCircle,
  Clock,
} from "lucide-react";
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
    <div className="min-h-screen bg-gray-50">
      {/* Mobile-First Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Status Badge - Mobile Optimized */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-200 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">
                <Clock className="w-3 h-3 inline mr-1" />
                Usually respond within 24 hours
              </span>
            </div>

            {/* Clean Headlines */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 leading-tight">
              Let's Talk Through Your Use Case
            </h1>

            <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed">
              No hard pitch. No bloated scope. Just a 30-minute call to explore
              whether we're the right fit.
            </p>

            {/* Simple Value Props - Mobile Friendly */}
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-secondary">
                  Your goals and challenges
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-secondary">
                  What kind of solution might fit
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-sm font-medium text-secondary">
                  Whether we can deliver value fast
                </p>
              </div>
            </div>

            <p className="text-sm text-muted font-medium">
              If we're not the right fit, we'll tell you — no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - Mobile-First */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Success State */}
            {isSubmitted ? (
              <SuccessState onReset={() => setIsSubmitted(false)} />
            ) : (
              /* Contact Form */
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form Header */}
                  <div className="text-center md:text-left mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
                      Start the conversation
                    </h2>
                    <p className="text-secondary">
                      Keep this short — you'll qualify on the call, not the
                      form.
                    </p>
                  </div>

                  {/* Form Fields - Mobile Optimized */}
                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target"
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
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target"
                        required
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  {/* Company Field - Full Width */}
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target"
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
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 resize-vertical"
                      required
                      disabled={isPending}
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="flex items-center space-x-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button - Mobile Optimized */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="group w-full flex items-center justify-center px-6 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none touch-target"
                  >
                    {isPending ? (
                      <span className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span>Book Clarity Call</span>
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>

                {/* Helper Section */}
                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-muted mb-4">Form not working?</p>
                  <a
                    href="mailto:hello@altrabyte.com?subject=Clarity Call Request&body=Hi! I'd like to schedule a clarity call to discuss my use case.%0D%0A%0D%0AName: %0D%0ACompany: %0D%0AWhat I need help with: "
                    className="inline-flex items-center text-sm text-primary hover:text-primary-hover font-medium transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email us directly
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// Success Component
function SuccessState({ onReset }) {
  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8 text-center">
      <div className="space-y-6">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>

        {/* Success Message */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Thanks! We'll follow up within 24 hours.
          </h2>
          <p className="text-lg text-secondary mb-6">
            We'll review your request and send you a calendar link to book your
            clarity call.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onReset} className="btn-secondary touch-target">
            Send another message
          </button>
          <a href="/solutions" className="btn-tertiary touch-target">
            Explore our solutions
          </a>
        </div>
      </div>
    </div>
  );
}
