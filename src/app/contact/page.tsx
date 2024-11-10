// src/app/contact/page.tsx

"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
// import nodemailer from "nodemailer";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Make an API call to send email
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ email: "", name: "", address: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error: Unable to send message.");
    }
  };

  return (
    <div className="container mx-auto px-8">
      <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-cente">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-md w-full max-w-2xl mx-4">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-gray-400 mb-8">We’d love to hear from you! Please fill out the form below to get in touch.</p>

        <div className="flex flex-col md:flex-row md:gap-8 text-white mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2">📱</span>
            <div>
              <h2 className="font-bold">Call Us</h2>
              <p>+92 3162125881</p>
            </div>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2">🏠</span>
            <div>
              <h2 className="font-bold">Location</h2>
              <p>Sindh, Karachi</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🕒</span>
            <div>
              <h2 className="font-bold">Business Hours</h2>
              <p>Mon–Fri: 9am – 5pm, Sat–Sun: Closed</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded bg-gray-800 text-white"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded bg-gray-800 text-white"
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white"
          />
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 rounded bg-yellow-500 text-gray-900 font-bold hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </form>

        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </div>
    </div>
    </div>
  );
};

export default Contact;
