'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({
        fullName: '',
        company: '',
        email: '',
        message: '',
        hearAboutUs: '',
        agreePrivacy: false,
        subscribeNewsletter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (name: string, checked: boolean) => {
        setForm((prev) => ({ ...prev, [name]: checked }));
    };

    return (
        <div className="mx-5 md:mx-20">
  
            <section className="border border-gray-200 bg-[#fbfbff] max-w-6xl mx-auto mt-10 shadow-md rounded-xl">
                <div className="mt-2 mb-10 w-full px-6 text-center md:px-20">
                    <h1 className="font-lato900 mb-6 pt-15 text-3xl font-black md:text-5xl">
                        How can we help you?
                    </h1>
                    <p className="font-montserrat400 mx-auto my-8 max-w-full text-xs md:text-sm">
                        Ready to transform your ideas into reality with{" "}
                        <span className="font-extrabold">DevX Alpha</span>? We’re here to help you grow.
                    </p>
                    <p className="font-montserrat400 mx-auto max-w-full text-xs md:text-sm">
                        Whether you’re looking to elevate your digital presence, need expert guidance for your business, or have a project you’re excited to launch, let’s connect and make it happen.
                        Share your vision with us today, and let’s build something impactful together.
                    </p>
                </div>

                <form className="pb-20 font-montserrat400 text-sm">
                    <div className="border border-gray-300 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-0">

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Full Name *"
                                className="border border-gray-300 px-3 py-4 placeholder-black"
                            />

                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Company *"
                                className="border border-gray-300 px-3 py-4 placeholder-black"
                            />
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="How can we help you? *"
                            rows={5}
                            className="border border-gray-300 px-3 py-2 resize-none md:row-span-2 placeholder-black"
                        ></textarea>

                        <div className="grid grid-cols-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Business email *"
                                className="border border-gray-300 px-3 py-4 placeholder-black"
                            />

                            <input
                                type="text"
                                name="hearAboutUs"
                                id="hearAboutUs"
                                value={form.hearAboutUs}
                                onChange={handleChange}
                                placeholder="How did you hear about us?"
                                className="border border-gray-300 px-3 py-4 placeholder-black"
                            />
                        </div>
                    </div>
                </form>
            </section>

            <p className="text-xs text-right text-gray-400 mt-4 mb-10">* Required field</p>

            <div className="font-montserrat400 text-sm text-gray-700 mb-10 space-y-2">
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="agreePrivacy"
                        checked={form.agreePrivacy}
                        onChange={(e) => handleCheckboxChange('agreePrivacy', e.target.checked)}
                        className="mt-1"
                    />
                    <label htmlFor="agreePrivacy">
                        Yes, I agree with Devx Alpha’s{' '}
                        <a href="#" className="text-[#dd2c00] underline">Data Privacy</a>{' '}
                        and{' '}
                        <a href="#" className="text-[#dd2c00] underline">Legal Notice</a>.
                        <span className="text-[#dd2c00]">*</span>
                    </label>
                </div>

                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        id="subscribeNewsletter"
                        checked={form.subscribeNewsletter}
                        onChange={(e) => handleCheckboxChange('subscribeNewsletter', e.target.checked)}
                        className="mt-1"
                    />
                    <label htmlFor="subscribeNewsletter">
                        Yes, I’d like to receive Devx Alpha newsletter with updates, valuable tech resources, and useful digitalization tips.
                    </label>
                </div>

                <div className="text-center mt-7 mb-20">
                    <button className="cursor-pointer bg-black text-white rounded-4xl px-7 py-3">
                        Send message
                    </button>
                </div>
            </div>
        </div>
    );
}
