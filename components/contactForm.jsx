"use client";
import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      reason: form.reason.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-50 w-full py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h2 className="font-['Quicksand'] text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-['Quicksand'] text-gray-700 font-medium">
              Why are you contacting us?
            </label>
            <select
              name="reason"
              required
              className="mt-2 w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select an option</option>
              <option>Startup Incubation</option>
              <option>Funding Support</option>
              <option>Mentorship</option>
              <option>Partnership / Collaboration</option>
              <option>Events & Workshops</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="font-['Quicksand'] text-black font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-2 w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="font-['Quicksand']  text-black font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="font-['Quicksand'] text-black font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-2 w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="font-['Quicksand'] text-black font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="mt-2 w-full border text-black border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-[rgb(241,116,0)] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
``;
