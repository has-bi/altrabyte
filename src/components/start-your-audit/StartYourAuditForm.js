"use client";

import { useState, useEffect, useRef } from "react";
import {
  getCountries,
  getCountryCallingCode,
  parsePhoneNumber,
  AsYouType,
} from "libphonenumber-js";

export default function StartYourAuditForm() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    industry: "",
    companySize: "",
    yourRole: "",

    // Contact Details
    fullName: "",
    emailAddress: "",
    countryCode: "+1",
    phoneNumber: "",
    preferredContactMethod: "",

    // Current Data Situation
    dataStorage: [],
    reportingTime: "",
    dataFrustration: "",

    // What You're Looking For
    advancedAnalytics: "",
    drivingProject: "",
    expectedTimeline: "",

    // Preferred Audit Timing
    auditTiming: "",
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const formLoadedAtRef = useRef(Date.now());
  const countryDropdownRef = useRef(null);

  // Country names mapping
  const countryNames = {
    US: "United States",
    GB: "United Kingdom",
    ID: "Indonesia",
    SG: "Singapore",
    MY: "Malaysia",
    AU: "Australia",
    JP: "Japan",
    KR: "South Korea",
    CN: "China",
    IN: "India",
    CA: "Canada",
    DE: "Germany",
    FR: "France",
    IT: "Italy",
    ES: "Spain",
    NL: "Netherlands",
    BR: "Brazil",
    MX: "Mexico",
    AR: "Argentina",
    PH: "Philippines",
    TH: "Thailand",
    VN: "Vietnam",
    NZ: "New Zealand",
    ZA: "South Africa",
    AE: "United Arab Emirates",
    SA: "Saudi Arabia",
    EG: "Egypt",
    NG: "Nigeria",
    KE: "Kenya",
    PK: "Pakistan",
  };

  // Country flag emojis
  const countryFlags = {
    US: "🇺🇸",
    GB: "🇬🇧",
    ID: "🇮🇩",
    SG: "🇸🇬",
    MY: "🇲🇾",
    AU: "🇦🇺",
    JP: "🇯🇵",
    KR: "🇰🇷",
    CN: "🇨🇳",
    IN: "🇮🇳",
    CA: "🇨🇦",
    DE: "🇩🇪",
    FR: "🇫🇷",
    IT: "🇮🇹",
    ES: "🇪🇸",
    NL: "🇳🇱",
    BR: "🇧🇷",
    MX: "🇲🇽",
    AR: "🇦🇷",
    PH: "🇵🇭",
    TH: "🇹🇭",
    VN: "🇻🇳",
    NZ: "🇳🇿",
    ZA: "🇿🇦",
    AE: "🇦🇪",
    SA: "🇸🇦",
    EG: "🇪🇬",
    NG: "🇳🇬",
    KE: "🇰🇪",
    PK: "🇵🇰",
  };

  // Get popular countries with their calling codes
  const popularCountries = [
    "US",
    "GB",
    "ID",
    "SG",
    "MY",
    "AU",
    "CA",
    "JP",
    "KR",
    "CN",
    "IN",
    "PH",
    "TH",
    "VN",
    "NZ",
    "DE",
    "FR",
    "IT",
    "ES",
    "NL",
    "BR",
    "MX",
    "AR",
    "ZA",
    "AE",
    "SA",
    "EG",
    "NG",
    "KE",
    "PK",
  ];

  const countryCodes = popularCountries
    .map((countryCode) => {
      try {
        const callingCode = getCountryCallingCode(countryCode);
        return {
          code: `+${callingCode}`,
          country: countryCode,
          flag: countryFlags[countryCode] || "🏳️",
          name: countryNames[countryCode] || countryCode,
        };
      } catch (e) {
        return null;
      }
    })
    .filter(Boolean);

  const selectedCountry =
    countryCodes.find((c) => c.code === formData.countryCode) ||
    countryCodes[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCountryDropdown]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    // Format phone number as user types
    const formatter = new AsYouType(selectedCountry.country);
    const formatted = formatter.input(input);
    setFormData((prev) => ({ ...prev, phoneNumber: formatted }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (code) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setShowCountryDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const elapsed = Date.now() - formLoadedAtRef.current;
    if (honeypot.trim() !== "" || elapsed < 1500) {
      alert("Submission blocked. Please try again.");
      return;
    }

    // Validate and format phone number
    try {
      const phoneNumberObj = parsePhoneNumber(
        formData.phoneNumber,
        selectedCountry.country
      );

      if (phoneNumberObj && phoneNumberObj.isValid()) {
        const submissionData = {
          ...formData,
          phoneNumber: phoneNumberObj.formatInternational(),
          countryCode: formData.countryCode,
          country: selectedCountry.country,
          honeypot,
        };
        fetch("/api/start-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submissionData),
        })
          .then((res) => res.json().then((data) => ({ ok: res.ok, data })))
          .then(({ ok, data }) => {
            if (!ok) {
              throw new Error(data?.error || "Failed to send");
            }
            alert("Thanks! We'll reach out shortly.");
          })
          .catch(() => {
            alert("Something went wrong. Please try again in a moment.");
          });
      } else {
        alert("Please enter a valid phone number");
      }
    } catch (error) {
      alert("Please enter a valid phone number");
    }
  };

  return (
    <section id="start-your-audit-form" className="form-section">
      <div className="form-container">
        {/* Header */}
        <div className="form-header">
          <h2 className="form-title">Foundation Audit Request Form</h2>
          <p className="form-subtitle">Tell Us About Your Current Reality</p>
        </div>

        {/* Form */}
        <form className="form-content" onSubmit={handleSubmit}>
          {/* Honeypot field to deter bots */}
          <div className="honeypot-field">
            <label htmlFor="company-website">Company website</label>
            <input
              id="company-website"
              name="company-website"
              type="text"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>
          {/* Company Information */}
          <div className="form-section-container">
            <div className="section-header">
              <div className="section-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6.66"
                    y="6.66"
                    width="10.68"
                    height="17.36"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path d="M8.66 4 L8.66 3" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M4 10.66 L18.68 10.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M18.68 5.33 L27.36 5.33 L27.36 22.68"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M10.66 16 L10.66 27.36 L27.36 27.36 L27.36 16"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path d="M14 23 L14 22" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M14 19.33 L14 18.33"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M2.66 27.36 L29.33 27.36"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="section-title">Company Information</h3>
            </div>

            <div className="text-field">
              <label className="field-label">Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="e.g. Technologies Cinta Karya"
                className="field-input"
                required
              />
            </div>

            <div className="field-row">
              <div className="select-field">
                <label className="field-label">Industry*</label>
                <div className="select-wrapper">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="field-input"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="chevron-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#122232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="select-field">
                <label className="field-label">Company Size (employees)*</label>
                <div className="select-wrapper">
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="field-input"
                    required
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-500">201-500</option>
                    <option value="501+">501+</option>
                  </select>
                  <svg
                    className="chevron-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#122232"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-field">
              <label className="field-label">Your Role/Title*</label>
              <input
                type="text"
                name="yourRole"
                value={formData.yourRole}
                onChange={handleInputChange}
                placeholder="e.g. Head of Data Analytics"
                className="field-input"
                required
              />
            </div>
          </div>

          <div className="form-divider" />

          {/* Contact Details */}
          <div className="form-section-container">
            <div className="section-header">
              <div className="section-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 6 L22 6" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M17.33 9.33 L18.66 9.33"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path d="M17.33 4 L25.33 4" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M21.33 10.66 L21.33 17.33"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M25.33 7.33 L25.33 17.33"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="section-title">Contact Details</h3>
            </div>

            <div className="text-field">
              <label className="field-label">Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className="field-input"
                required
              />
            </div>

            <div className="field-row">
              <div className="select-field">
                <label className="field-label">Email Address*</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  placeholder="e.g. john.doe@company.com"
                  className="field-input"
                  required
                />
              </div>

              <div className="select-field">
                <label className="field-label">Phone Number*</label>
                <div className="phone-input-wrapper">
                  <div
                    ref={countryDropdownRef}
                    className="country-selector"
                    onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  >
                    <span className="flag-icon">{selectedCountry.flag}</span>
                    <svg
                      className="chevron-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#122232"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {showCountryDropdown && (
                      <div className="country-dropdown">
                        {countryCodes.map((country) => (
                          <div
                            key={country.country}
                            className="country-option"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCountrySelect(country.code);
                            }}
                          >
                            <span className="country-flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                            <span className="country-code">{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder={selectedCountry.code}
                    className="phone-input"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-field">
              <label className="field-label">Preferred Contact Method*</label>
              <div className="select-wrapper">
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleInputChange}
                  className="field-input"
                  required
                >
                  <option value="">Select preferred method</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                <svg
                  className="chevron-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#122232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="form-divider" />

          {/* Current Data Situation */}
          <div className="form-section-container">
            <div className="section-header">
              <div className="section-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path d="M4 8.66 L28 8.66" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M8 12.66 L9.33 12.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 16.66 L9.33 16.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 20.66 L9.33 20.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.66 9.33 L12.66 18.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="section-title">Current Data Situation</h3>
            </div>

            <div className="question-container">
              <p className="question-label">
                How do you currently store business data?
              </p>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.dataStorage.includes("excel")
                      ? "selected"
                      : ""
                  }`}
                >
                  <div className="checkbox-wrapper">
                    <div
                      className={`checkbox ${
                        formData.dataStorage.includes("excel") ? "checked" : ""
                      }`}
                    >
                      {formData.dataStorage.includes("excel") && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.33 8L6.66 11.33L12.66 5.33"
                            stroke="#FFFFFF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="option-label">Excel files</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.dataStorage.includes("excel")}
                    onChange={() => handleCheckboxChange("dataStorage", "excel")}
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.dataStorage.includes("multiple-systems")
                      ? "selected"
                      : ""
                  }`}
                >
                  <div className="checkbox-wrapper">
                    <div
                      className={`checkbox ${
                        formData.dataStorage.includes("multiple-systems")
                          ? "checked"
                          : ""
                      }`}
                    >
                      {formData.dataStorage.includes("multiple-systems") && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.33 8L6.66 11.33L12.66 5.33"
                            stroke="#FFFFFF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="option-label">
                      Multiple disconnected systems
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.dataStorage.includes("multiple-systems")}
                    onChange={() =>
                      handleCheckboxChange("dataStorage", "multiple-systems")
                    }
                    className="hidden-checkbox"
                  />
                </label>
              </div>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.dataStorage.includes("cloud") ? "selected" : ""
                  }`}
                >
                  <div className="checkbox-wrapper">
                    <div
                      className={`checkbox ${
                        formData.dataStorage.includes("cloud") ? "checked" : ""
                      }`}
                    >
                      {formData.dataStorage.includes("cloud") && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.33 8L6.66 11.33L12.66 5.33"
                            stroke="#FFFFFF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="option-label">Some cloud solutions</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.dataStorage.includes("cloud")}
                    onChange={() => handleCheckboxChange("dataStorage", "cloud")}
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.dataStorage.includes("not-sure")
                      ? "selected"
                      : ""
                  }`}
                >
                  <div className="checkbox-wrapper">
                    <div
                      className={`checkbox ${
                        formData.dataStorage.includes("not-sure") ? "checked" : ""
                      }`}
                    >
                      {formData.dataStorage.includes("not-sure") && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3.33 8L6.66 11.33L12.66 5.33"
                            stroke="#FFFFFF"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="option-label">Not sure/Mixed approach</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={formData.dataStorage.includes("not-sure")}
                    onChange={() =>
                      handleCheckboxChange("dataStorage", "not-sure")
                    }
                    className="hidden-checkbox"
                  />
                </label>
              </div>
            </div>

            <div className="question-container">
              <p className="question-label">
                How long does your monthly reporting take?
              </p>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.reportingTime === "hours" ? "selected-radio" : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.reportingTime === "hours" ? "checked-radio" : ""
                      }`}
                    >
                      {formData.reportingTime === "hours" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Hours</span>
                  </div>
                  <input
                    type="radio"
                    name="reportingTime"
                    value="hours"
                    checked={formData.reportingTime === "hours"}
                    onChange={() => handleRadioChange("reportingTime", "hours")}
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.reportingTime === "days" ? "selected-radio" : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.reportingTime === "days" ? "checked-radio" : ""
                      }`}
                    >
                      {formData.reportingTime === "days" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Days</span>
                  </div>
                  <input
                    type="radio"
                    name="reportingTime"
                    value="days"
                    checked={formData.reportingTime === "days"}
                    onChange={() => handleRadioChange("reportingTime", "days")}
                    className="hidden-checkbox"
                  />
                </label>
              </div>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.reportingTime === "weeks" ? "selected-radio" : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.reportingTime === "weeks" ? "checked-radio" : ""
                      }`}
                    >
                      {formData.reportingTime === "weeks" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Weeks</span>
                  </div>
                  <input
                    type="radio"
                    name="reportingTime"
                    value="weeks"
                    checked={formData.reportingTime === "weeks"}
                    onChange={() => handleRadioChange("reportingTime", "weeks")}
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.reportingTime === "no-regular"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.reportingTime === "no-regular"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.reportingTime === "no-regular" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">
                      We don't do regular reporting
                    </span>
                  </div>
                  <input
                    type="radio"
                    name="reportingTime"
                    value="no-regular"
                    checked={formData.reportingTime === "no-regular"}
                    onChange={() =>
                      handleRadioChange("reportingTime", "no-regular")
                    }
                    className="hidden-checkbox"
                  />
                </label>
              </div>
            </div>

            <div className="text-area-field">
              <label className="field-label">
                What's your biggest data frustration?
              </label>
              <div className="textarea-wrapper">
                <textarea
                  name="dataFrustration"
                  value={formData.dataFrustration}
                  onChange={handleInputChange}
                  placeholder="Enter here"
                  className="field-textarea"
                  rows="4"
                />
                <div className="resize-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1" stroke="#B6BABF" strokeWidth="2" />
                    <path d="M6 11L11 6" stroke="#B6BABF" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="form-divider" />

          {/* What You're Looking For */}
          <div className="form-section-container">
            <div className="section-header">
              <div className="section-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 9.33L25.33 9.33L25.33 22.66L4 22.66L4 9.33Z"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="section-title">What You're Looking For</h3>
            </div>

            <div className="text-area-field">
              <label className="field-label">
                What advanced analytics do you think you need?
              </label>
              <div className="textarea-wrapper">
                <textarea
                  name="advancedAnalytics"
                  value={formData.advancedAnalytics}
                  onChange={handleInputChange}
                  placeholder="Enter here"
                  className="field-textarea"
                  rows="4"
                />
                <div className="resize-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1" stroke="#B6BABF" strokeWidth="2" />
                    <path d="M6 11L11 6" stroke="#B6BABF" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="text-area-field">
              <label className="field-label">
                What's driving this data transformation project?
              </label>
              <div className="textarea-wrapper">
                <textarea
                  name="drivingProject"
                  value={formData.drivingProject}
                  onChange={handleInputChange}
                  placeholder="Enter here"
                  className="field-textarea"
                  rows="4"
                />
                <div className="resize-icon">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1" stroke="#B6BABF" strokeWidth="2" />
                    <path d="M6 11L11 6" stroke="#B6BABF" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="question-container">
              <p className="question-label">What's your expected timeline?</p>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.expectedTimeline === "1-3-months"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.expectedTimeline === "1-3-months"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.expectedTimeline === "1-3-months" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">1-3 months</span>
                  </div>
                  <input
                    type="radio"
                    name="expectedTimeline"
                    value="1-3-months"
                    checked={formData.expectedTimeline === "1-3-months"}
                    onChange={() =>
                      handleRadioChange("expectedTimeline", "1-3-months")
                    }
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.expectedTimeline === "3-6-months"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.expectedTimeline === "3-6-months"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.expectedTimeline === "3-6-months" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">3-6 months</span>
                  </div>
                  <input
                    type="radio"
                    name="expectedTimeline"
                    value="3-6-months"
                    checked={formData.expectedTimeline === "3-6-months"}
                    onChange={() =>
                      handleRadioChange("expectedTimeline", "3-6-months")
                    }
                    className="hidden-checkbox"
                  />
                </label>
              </div>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.expectedTimeline === "6-12-months"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.expectedTimeline === "6-12-months"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.expectedTimeline === "6-12-months" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">6-12 months</span>
                  </div>
                  <input
                    type="radio"
                    name="expectedTimeline"
                    value="6-12-months"
                    checked={formData.expectedTimeline === "6-12-months"}
                    onChange={() =>
                      handleRadioChange("expectedTimeline", "6-12-months")
                    }
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.expectedTimeline === "no-specific"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.expectedTimeline === "no-specific"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.expectedTimeline === "no-specific" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">No specific timeline</span>
                  </div>
                  <input
                    type="radio"
                    name="expectedTimeline"
                    value="no-specific"
                    checked={formData.expectedTimeline === "no-specific"}
                    onChange={() =>
                      handleRadioChange("expectedTimeline", "no-specific")
                    }
                    className="hidden-checkbox"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="form-divider" />

          {/* Preferred Audit Timing */}
          <div className="form-section-container">
            <div className="section-header">
              <div className="section-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="4"
                    width="24"
                    height="24"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path d="M4 8.66 L28 8.66" stroke="#122232" strokeWidth="2" />
                  <path
                    d="M8 12.66 L9.33 12.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 16.66 L9.33 16.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 20.66 L9.33 20.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                  <path
                    d="M12.66 9.33 L12.66 18.66"
                    stroke="#122232"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="section-title">Preferred Audit Timing</h3>
            </div>

            <div className="question-container">
              <p className="question-label">
                When would you prefer your Foundation Audit?
              </p>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.auditTiming === "this-week"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.auditTiming === "this-week"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.auditTiming === "this-week" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">This week</span>
                  </div>
                  <input
                    type="radio"
                    name="auditTiming"
                    value="this-week"
                    checked={formData.auditTiming === "this-week"}
                    onChange={() => handleRadioChange("auditTiming", "this-week")}
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.auditTiming === "next-week"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.auditTiming === "next-week"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.auditTiming === "next-week" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Next week</span>
                  </div>
                  <input
                    type="radio"
                    name="auditTiming"
                    value="next-week"
                    checked={formData.auditTiming === "next-week"}
                    onChange={() => handleRadioChange("auditTiming", "next-week")}
                    className="hidden-checkbox"
                  />
                </label>
              </div>

              <div className="options-row">
                <label
                  className={`option-item ${
                    formData.auditTiming === "within-2-weeks"
                      ? "selected-radio"
                      : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.auditTiming === "within-2-weeks"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.auditTiming === "within-2-weeks" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Within 2 weeks</span>
                  </div>
                  <input
                    type="radio"
                    name="auditTiming"
                    value="within-2-weeks"
                    checked={formData.auditTiming === "within-2-weeks"}
                    onChange={() =>
                      handleRadioChange("auditTiming", "within-2-weeks")
                    }
                    className="hidden-checkbox"
                  />
                </label>

                <label
                  className={`option-item ${
                    formData.auditTiming === "flexible" ? "selected-radio" : ""
                  }`}
                >
                  <div className="radio-wrapper">
                    <div
                      className={`radio ${
                        formData.auditTiming === "flexible"
                          ? "checked-radio"
                          : ""
                      }`}
                    >
                      {formData.auditTiming === "flexible" && (
                        <div className="radio-dot" />
                      )}
                    </div>
                    <span className="option-label">Flexible</span>
                  </div>
                  <input
                    type="radio"
                    name="auditTiming"
                    value="flexible"
                    checked={formData.auditTiming === "flexible"}
                    onChange={() => handleRadioChange("auditTiming", "flexible")}
                    className="hidden-checkbox"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Submit Foundation Audit Request
          </button>
        </form>
      </div>

      <style jsx>{`
        .form-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 7.5rem 7.5rem;
          gap: 4rem;
          background: #ffffff;
        }

        .form-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          width: 100%;
          max-width: 786px;
        }

        .form-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
        }

        .form-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 2.5rem;
          line-height: 128%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
          text-align: center;
        }

        .form-subtitle {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 150%;
          text-align: center;
          letter-spacing: -0.01em;
          color: #414e5b;
          margin: 0;
        }

        .form-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2.5rem;
          width: 100%;
        }

        /* Honeypot */
        .honeypot-field {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .form-section-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          width: 100%;
        }

        .section-header {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
        }

        .section-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-title {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 140%;
          color: #122232;
          margin: 0;
        }

        .text-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          width: 100%;
        }

        .field-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
        }

        .field-input {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 1rem;
          gap: 0.625rem;
          width: 100%;
          height: 3.5rem;
          background: #ffffff;
          border: 1px solid #b6babf;
          border-radius: 10px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          transition: border-color 300ms ease;
        }

        .field-input::placeholder {
          color: #b6babf;
        }

        .field-input:focus {
          outline: none;
          border-color: #7863fc;
        }

        .field-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 1.25rem;
          width: 100%;
        }

        .select-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          flex: 1;
        }

        .select-wrapper {
          position: relative;
          width: 100%;
        }

        .select-wrapper select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        .chevron-icon {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .phone-input-wrapper {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
        }

        .country-selector {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 1rem;
          gap: 0.625rem;
          border: 1px solid #b6babf;
          border-radius: 10px 0 0 10px;
          background: #ffffff;
          cursor: pointer;
          transition: border-color 300ms ease;
        }

        .country-selector:hover {
          border-color: #7863fc;
        }

        .country-selector .chevron-icon {
          position: static;
          transform: none;
          pointer-events: none;
        }

        .flag-icon {
          font-size: 1.25rem;
        }

        .country-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          width: 250px;
          max-height: 300px;
          overflow-y: auto;
          background: #ffffff;
          border: 1px solid #b6babf;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .country-option {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0.75rem 1rem;
          gap: 0.75rem;
          cursor: pointer;
          transition: background 200ms ease;
        }

        .country-option:hover {
          background: rgba(120, 99, 252, 0.05);
        }

        .country-flag {
          font-size: 1.25rem;
          width: 24px;
          text-align: center;
        }

        .country-name {
          flex: 1;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 0.875rem;
          line-height: 140%;
          color: #122232;
        }

        .country-code {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          line-height: 140%;
          color: #414e5b;
        }

        .phone-input {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0 1rem;
          gap: 0.625rem;
          height: 3.5rem;
          background: #ffffff;
          border: 1px solid #b6babf;
          border-left: none;
          border-radius: 0 10px 10px 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
        }

        .phone-input::placeholder {
          color: #b6babf;
        }

        .phone-input:focus {
          outline: none;
          border-color: #7863fc;
        }

        .form-divider {
          width: 100%;
          height: 0;
          border: 1px dashed #122232;
        }

        .question-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        .question-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          margin: 0;
        }

        .options-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        .option-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0.75rem;
          gap: 0.625rem;
          flex: 1;
          border: 1px solid #b6babf;
          border-radius: 10px;
          cursor: pointer;
          transition: all 300ms ease;
          background: #ffffff;
        }

        .option-item:hover {
          border-color: #7863fc;
        }

        .option-item.selected {
          border-color: #7863fc;
          background: rgba(120, 99, 252, 0.05);
        }

        .option-item.selected-radio {
          border-color: #7863fc;
          background: rgba(120, 99, 252, 0.05);
        }

        .checkbox-wrapper,
        .radio-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
        }

        .checkbox {
          width: 20px;
          height: 20px;
          border: 1px solid #b6babf;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 300ms ease;
          flex-shrink: 0;
        }

        .checkbox.checked {
          background: #7863fc;
          border-color: #7863fc;
        }

        .radio {
          width: 20px;
          height: 20px;
          border: 2px solid #b6babf;
          border-radius: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 300ms ease;
          flex-shrink: 0;
        }

        .radio.checked-radio {
          border-color: #7863fc;
        }

        .radio-dot {
          width: 12px;
          height: 12px;
          background: #7863fc;
          border-radius: 100px;
        }

        .option-label {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
        }

        .hidden-checkbox {
          display: none;
        }

        .text-area-field {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
          width: 100%;
        }

        .textarea-wrapper {
          position: relative;
          width: 100%;
        }

        .field-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #ffffff;
          border: 1px solid #b6babf;
          border-radius: 10px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #122232;
          resize: vertical;
          min-height: 7.5rem;
          transition: border-color 300ms ease;
        }

        .field-textarea::placeholder {
          color: #b6babf;
        }

        .field-textarea:focus {
          outline: none;
          border-color: #7863fc;
        }

        .resize-icon {
          position: absolute;
          right: 4px;
          bottom: 4px;
          pointer-events: none;
        }

        .submit-button {
          align-self: center;
          padding: 1rem 2rem;
          background: #0f172a;
          border: none;
          border-radius: 10px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 500;
          font-size: 1.125rem;
          line-height: 140%;
          letter-spacing: -0.01em;
          color: #ffffff;
          cursor: pointer;
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .submit-button:hover {
          background: #1e293b;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.3);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .form-section {
            padding: 4rem 3rem 6rem;
          }
        }

        @media (max-width: 768px) {
          .form-section {
            padding: 3rem 1.5rem 4rem;
            gap: 2.5rem;
          }

          .form-title {
            font-size: 2rem;
          }

          .form-subtitle {
            font-size: 1.125rem;
          }

          .field-row {
            flex-direction: column;
          }

          .options-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
