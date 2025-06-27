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
        <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          {/* Hero Content - Centered for Impact */}
          <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-2 bg-green-50 rounded-full border border-green-200 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 text-sm font-medium">
                <Clock className="w-3 h-3 inline mr-1" />
                Usually respond within 24 hours
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary mb-3 sm:mb-4 leading-tight">
              Let's Talk Through Your Use Case
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-secondary mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              No hard pitch. No bloated scope. Just a 30-minute call to explore
              whether we're the right fit.
            </p>
          </div>

          {/* Mobile-Only Value Props */}
          <div className="lg:hidden max-w-2xl mx-auto">
            {/* Value Props - Left-Aligned for Action */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-sm font-medium text-secondary mb-3 sm:mb-4">
                We'll cover:
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-sm text-secondary">
                    Your goals and challenges
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-sm text-secondary">
                    What kind of solution might fit
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-sm text-secondary">
                    Whether we can deliver value fast
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance - Left-Aligned */}
            <p className="text-sm text-muted font-medium mb-4 sm:mb-6">
              If we're not the right fit, we'll tell you — no pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section - Desktop Optimized */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Mobile: Single Column, Desktop: Two Column */}
          <div className="max-w-6xl mx-auto">
            {/* Success State */}
            {isSubmitted ? (
              <div className="max-w-2xl mx-auto">
                <SuccessState onReset={() => setIsSubmitted(false)} />
              </div>
            ) : (
              /* Desktop Two-Column Layout */
              <div className="lg:grid lg:grid-cols-5 lg:gap-12 xl:gap-16">
                {/* Left Column - Context & Benefits (Desktop Only) */}
                <div className="hidden lg:block lg:col-span-2">
                  <div className="sticky top-8">
                    <div className="space-y-8">
                      {/* Context Header */}
                      <div>
                        <h2 className="text-2xl xl:text-3xl font-semibold text-primary mb-4">
                          Ready to move fast?
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed">
                          No hard pitch. No bloated scope. Just a 30-minute call
                          to explore whether we're the right fit.
                        </p>
                      </div>

                      {/* What We'll Cover - Moved from Mobile */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-sm font-medium text-secondary mb-4">
                          We'll cover:
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-secondary">
                              Your goals and challenges
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-secondary">
                              What kind of solution might fit
                            </span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm text-secondary">
                              Whether we can deliver value fast
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Simple Reassurance */}
                      <div>
                        <p className="text-sm text-muted font-medium">
                          If we're not the right fit, we'll tell you — no
                          pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 xl:p-10">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5 sm:space-y-6"
                    >
                      {/* Form Header */}
                      <div className="mb-4 sm:mb-6">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-2">
                          Book your clarity call
                        </h2>
                        <p className="text-sm sm:text-base text-secondary">
                          30 minutes to explore your use case — no commitment
                          required.
                        </p>
                      </div>

                      {/* Form Fields - Desktop Optimized */}
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                            className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target text-base"
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
                            className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target text-base"
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
                          className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 touch-target text-base"
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
                          className="w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-white border border-gray-200 rounded-lg sm:rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-primary placeholder-gray-400 resize-vertical text-base"
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

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full flex items-center justify-center px-4 sm:px-6 py-3.5 sm:py-4 bg-primary text-white font-semibold rounded-lg sm:rounded-xl hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none touch-target text-base"
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
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                      <p className="text-sm text-muted mb-3 sm:mb-4">
                        Prefer email?
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
    <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm border border-gray-100 p-4 sm:p-6 lg:p-8 text-center">
      <div className="space-y-4 sm:space-y-6">
        {/* Success Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        </div>

        {/* Success Message */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-3 sm:mb-4">
            Thanks! We'll follow up within 24 hours.
          </h2>
          <p className="text-base sm:text-lg text-secondary mb-4 sm:mb-6 px-2 sm:px-0">
            We'll review your request and send you a calendar link to book your
            clarity call.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="btn-secondary touch-target px-4 sm:px-6 py-3 text-sm sm:text-base"
          >
            Send another message
          </button>
          <a
            href="/solutions"
            className="btn-tertiary touch-target px-4 sm:px-6 py-3 text-sm sm:text-base"
          >
            Explore our solutions
          </a>
        </div>
      </div>
    </div>
  );
}
