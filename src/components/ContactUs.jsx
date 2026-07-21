"use client";

import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {

    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};


  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-orange-100 text-[#EA7A00] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
            Get In Touch With Us
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Have a legal question or need professional legal assistance?
            Contact us today and we'll get back to you as soon as possible.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left Side */}

          <div className="space-y-6">

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[#EA7A00] text-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Phone Number
                </h3>

                <p className="text-gray-600 mt-2">
                  +880 1700-000000
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[#EA7A00] text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Email Address
                </h3>

                <p className="text-gray-600 mt-2">
                  info@jurispoint.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[#EA7A00] text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Office Address
                </h3>

                <p className="text-gray-600 mt-2">
                  House-25, Road-10,
                  Dhanmondi, Dhaka-1209,
                  Bangladesh
                </p>
              </div>

            </div>

            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md">

              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-[#EA7A00] text-xl">
                <FaClock />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#111827]">
                  Office Hours
                </h3>

                <p className="text-gray-600 mt-2">
                  Saturday - Thursday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 7:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-3xl font-bold text-[#111827] mb-8">
              Send Message
            </h3>

            <form
             onSubmit={handleSubmit}
             className="space-y-5"
        >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#EA7A00]"
               />

             <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#EA7A00]"
              />

              <input
              type="text"
              name="phone"
              value={formData.phone}
               onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#EA7A00]"
              />

            <input
              type="text"
               name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#EA7A00]"
            />

              <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write Your Message..."
              className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#EA7A00]"
            />

              <button
                type="submit"
                className="w-full bg-[#EA7A00] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;