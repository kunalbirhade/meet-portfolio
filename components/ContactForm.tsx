"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setPopup(true);
        setForm({ email: "", message: "" });
      } else {
        alert("Failed to send: " + data.message);
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full flex flex-col items-start justify-center w-full">
      <div className="w-full max-w-full p-6 rounded-xl text-center">
        <form onSubmit={handleSubmit} className="pb-5 w-full ">
          <div className="flex flex-col items-start justify-center gap-2 ">
            <label htmlFor="email" className="text-left text-lg font-inter">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-border-custom rounded-md bg-dark-charcoal"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-2  pt-4">
            <label htmlFor="message" className="text-left text-lg font-inter">
              Type your message here...
            </label>
            <textarea
              name="message"
              placeholder=""
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-border-custom rounded-md bg-dark-charcoal"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-1/2 bg-[#272727] text-white py-2 rounded-md hover:bg-[#313131] transition mt-4"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Popup confirmation */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-sm text-center">
            <h2 className="text-xl font-semibold mb-3">✅ Thank you!</h2>
            <p className="text-gray-600 mb-4">
              Your message has been sent successfully. We’ll get back to you
              shortly.
            </p>
            <button
              onClick={() => setPopup(false)}
              className="bg-[#272727] text-white px-4 py-2 rounded-md hover:bg-[#313131]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
