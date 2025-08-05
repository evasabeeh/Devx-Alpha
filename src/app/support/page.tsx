"use client";

import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaBookOpen,
  FaTruck,
  FaUserShield,
  FaComments,
  FaFileDownload,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

// Support features data
const supportItems = [
  {
    title: "Blog Writing",
    icon: <FaBookOpen className="text-3xl text-red-500 mb-4" />
  },
  {
    title: "Delivery Help",
    icon: <FaTruck className="text-3xl text-red-500 mb-4" />
  },
  {
    title: "Account Support",
    icon: <FaUserShield className="text-3xl text-red-500 mb-4" />
  },
  {
    title: "Live Chat",
    icon: <FaComments className="text-3xl text-red-500 mb-4" />
  },
  {
    title: "Free eBook",
    icon: <FaFileDownload className="text-3xl text-red-500 mb-4" />
  },
  {
    title: "Troubleshooting",
    icon: <FaTools className="text-3xl text-red-500 mb-4" />
  }
];

// FAQ questions
const FAQ_ITEMS = [
  {
    q: "How can I get help with my account?",
    a: "You can get help by contacting our support team via email or the live chat option below."
  },
  {
    q: "Where can I download the free ebook?",
    a: "The free ebook can be downloaded from the Resources section on our homepage."
  },
  {
    q: "How do I track my delivery?",
    a: "Log into your account and go to the 'My Orders' section to track your delivery."
  },
  {
    q: "How to write a blog on DevXAlpha?",
    a: "Sign in and navigate to the Blog section, then click on 'Write a Blog' to get started."
  }
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-[400px] md:min-h-[550px] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/supp.jpg"
            alt="DevXAlpha Support Center Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="relative z-10 py-14 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-700">
          Support Center
        </h1>
        <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
          Find expert answers, get in touch with us, and explore helpful resources to get the most out of DevXAlpha.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 text-gray-900 border border-red-700 hover:bg-gray-100 rounded-lg font-semibold transition duration-300">
            Contact Support
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="grid md:grid-cols-3 gap-6 mb-20 mt-5 mx-4">
        {supportItems.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-gray-100 shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-red-400"
          >
            {item.icon}
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">
              Get expert assistance and helpful guides on {item.title.toLowerCase()}.
            </p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-lg hover:bg-gray-50"
              >
                {item.q}
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 p-10 rounded-3xl shadow-xl max-w-4xl mx-auto border border-red-100">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 px-6 bg-red-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
