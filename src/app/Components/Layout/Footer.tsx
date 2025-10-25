"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../../public/logo.jpg";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    let phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Validate all fields
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Indian phone number
    // Accepts 10 digits or +91 followed by 10 digits
    const phoneDigits = phone.replace(/\D/g, ""); // remove non-digit characters
    if (!(phoneDigits.length === 10 && !phone.startsWith("+")) && !(phone.startsWith("+91") && phoneDigits.length === 12)) {
      alert("Please enter a valid Indian phone number (10 digits or +91XXXXXXXXXX).");
      return;
    }

    // Send to Formspree
    const response = await fetch("https://formspree.io/f/mzzkbzpw", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000); // hide thank-you after 5s
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <footer id="contact" className="bg-white border-t border-gray-200 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Logo & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center h-full space-y-4"
        >
          <div className="flex flex-col items-center space-y-2">
            <Image src={logo} alt="Eighteenth Square Logo" width={50} height={50} />
            <span className="text-lg font-semibold">Eighteenth Square</span>
          </div>
          <p className="text-gray-600 text-sm md:text-base max-w-xs">
            Mission Statement: Placeholder
          </p>
          <ul className="text-gray-500 text-sm space-y-1">
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
          <div className="flex space-x-4 mt-2">
            {[
              { href: "https://www.instagram.com/eighteenthsquare/", icon: <FaInstagram />, label: "Instagram", color: "#E1306C" },
              { href: "https://www.linkedin.com/in/bhavya-parikh-4928612b8/", icon: <FaLinkedin />, label: "LinkedIn", color: "#0A66C2" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors duration-300"
                style={{ color: social.color }}
              >
                <span className="sr-only">{social.label}</span>
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-md">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black shadow-sm text-center"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black shadow-sm text-center"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              required
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black shadow-sm text-center"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              required
              className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black shadow-sm text-center"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-md font-medium"
            >
              Send
            </button>
          </form>

          {/* Thank You Message with Smooth Animation */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-green-600 font-medium"
              >
                Thank you! Your message has been sent.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Eighteenth Square. All rights reserved.
      </div>
    </footer>
  );
}
