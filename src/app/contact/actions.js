"use server";

import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Initialize Google Sheets auth
const getGoogleSheetsDoc = async () => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/spreadsheets"],
    });

    // Your Google Sheets document ID
    const SHEET_ID = "115AqEiVpl77qqQU-SUbOkXvtuVHeT1fvKdveyErn5kc";

    const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);
    await doc.loadInfo();

    return doc;
  } catch (error) {
    console.error("Google Sheets initialization error:", error);
    throw new Error("Failed to initialize Google Sheets");
  }
};

// Submit to both Formspree and Google Sheets
export async function submitContactForm(formData) {
  try {
    const { name, email, company, message } = formData;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return { success: false, error: "Missing required fields" };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Invalid email format" };
    }

    // Parallel execution for better performance
    const [formspreeResult, sheetsResult] = await Promise.allSettled([
      submitToFormspree(formData),
      submitToGoogleSheets(formData),
    ]);

    // Check if at least one submission succeeded
    const formspreeSuccess =
      formspreeResult.status === "fulfilled" && formspreeResult.value.success;
    const sheetsSuccess =
      sheetsResult.status === "fulfilled" && sheetsResult.value.success;

    if (formspreeSuccess || sheetsSuccess) {
      // Log any partial failures for debugging
      if (!formspreeSuccess) {
        console.warn("Formspree submission failed:", formspreeResult.reason);
      }
      if (!sheetsSuccess) {
        console.warn("Google Sheets submission failed:", sheetsResult.reason);
      }

      return { success: true };
    } else {
      // Both failed
      console.error("Both Formspree and Google Sheets failed:", {
        formspree: formspreeResult.reason,
        sheets: sheetsResult.reason,
      });

      return {
        success: false,
        error:
          "Failed to submit form. Please try again or contact us directly.",
      };
    }
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

// Submit to Formspree
async function submitToFormspree(formData) {
  try {
    const { name, email, company, message } = formData;

    if (!process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT) {
      throw new Error("Formspree endpoint not configured");
    }

    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        company: company?.trim() || "Not specified",
        message: message.trim(),
        _replyto: email.trim(),
        _subject: `New contact form submission from ${name.trim()}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Formspree HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.error) {
      throw new Error(result.error);
    }

    return { success: true };
  } catch (error) {
    console.error("Formspree submission error:", error);
    return { success: false, error: error.message };
  }
}

// Submit to Google Sheets
async function submitToGoogleSheets(formData) {
  try {
    const { name, email, company, message } = formData;

    const doc = await getGoogleSheetsDoc();

    // Get the first sheet (or specify by title)
    const sheet = doc.sheetsByIndex[0];

    // Check if headers exist, if not create them
    await sheet.loadHeaderRow();

    if (!sheet.headerValues || sheet.headerValues.length === 0) {
      // Set headers if they don't exist
      await sheet.setHeaderRow([
        "Timestamp",
        "Name",
        "Email",
        "Company",
        "Message",
        "Status",
        "Source",
      ]);
    }

    // Add the form data as a new row
    const newRow = await sheet.addRow({
      Timestamp: new Date().toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      Name: name.trim(),
      Email: email.trim(),
      Company: company?.trim() || "Not specified",
      Message: message.trim(),
      Status: "New",
      Source: "Website Contact Form",
    });

    return { success: true, rowNumber: newRow.rowNumber };
  } catch (error) {
    console.error("Google Sheets submission error:", error);
    return { success: false, error: error.message };
  }
}
