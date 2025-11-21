"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg space-y-5 bg-black/40 p-6 rounded-xl border border-gray-700"
        >
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-black border border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-black border border-gray-600"
            />
          </div>

          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-black border border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-400 text-xl">
          Thank you! Your message has been submitted.
        </p>
      )}
    </main>
  );
}

