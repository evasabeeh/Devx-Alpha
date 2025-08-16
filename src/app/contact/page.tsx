import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | DevX Alpha",
    description:
        "Get in touch with DevX Alpha. Have questions or need assistance? Contact us via email, phone, or visit our Pune, Maharashtra office.",
    keywords: [
        "DevX Alpha contact",
        "contact us",
        "software development support",
        "IT services Pune",
        "DevX Alpha email",
        "DevX Alpha phone number",
    ],
    openGraph: {
        title: "Contact DevX Alpha",
        description:
            "Reach out to DevX Alpha for your IT and software development needs. Email, call, or visit our Pune office.",
        url: process.env.NEXT_URL + "/contact",
        siteName: "DevX Alpha",
        images: [
            {
                url: "/Seo/contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact DevX Alpha",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact DevX Alpha",
        description:
            "Reach out to DevX Alpha for your IT and software development needs. Email, call, or visit our Pune office.",
        images: ["/Seo/contact.jpg"],
    },
};

export default function Page() {
    return (
        <>
            <div className="relative pt-20 pb-10">
                <div className="absolute inset-0 z-0 bg-[url('/contact-hero.jpg')] bg-cover bg-top" />

                <div className="absolute inset-0 z-10 bg-black/50" />

                <div className="relative z-20 flex h-full items-center justify-start px-5 pb-20 md:px-20">
                    <div className="max-w-xl text-white">
                        <p className="font-lato400 mb-5 text-sm sm:text-xl md:text-xl">
                            Contact us
                        </p>
                        <h1 className="font-lato900 mb-5 text-2xl font-bold sm:text-3xl md:text-5xl">
                            Get in Touch with Us
                        </h1>
                        <p className="montserrat400 text-sm sm:text-xl md:text-xl">
                            Have questions about{" "}
                            <span className="font-bold">DevX Alpha</span> or
                            need assistance?
                        </p>
                    </div>
                </div>
            </div>

            <ContactForm />

            <div className="mb-20 w-full px-5 md:px-20">
                <div className="font-montserrat400 flex flex-col items-start justify-between gap-6 text-sm text-gray-800 md:flex-row md:items-center md:text-base">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <CiMail className="h-5 w-5 text-white" />
                        </div>
                        <span>devxalphaa@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <LuPhone className="h-5 w-5 text-white" />
                        </div>
                        <span>+91 8840808354</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                            <FaLocationPin className="h-5 w-5 text-white" />
                        </div>
                        <span>Pune, Maharashtra</span>
                    </div>
                </div>
            </div>
        </>
    );
}
