import { IoCodeSlash } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Page() {
    return (
        <div>
            <section className="relative mt-30 w-full md:mt-40 lg:mt-50">
                <div className="block px-6 py-8 text-center md:hidden">
                    <h3 className="font-lato900 mb-4 text-2xl font-bold">Web Development</h3>
                    <p className="font-lato400 text-sm text-gray-700">
                        We build responsive, secure, and fast-loading websites
                        that reflect your brand and deliver seamless user
                        experiences.
                    </p>
                </div>

                <div className="h-[500px] w-full">
                    <img
                        src="/services-web-hero.jpg"
                        alt="Background"
                        className="h-full w-full object-cover"
                    />

                    <div className="font-lato900 absolute top-[-100] right-[-120] hidden w-[80%] -translate-x-1/2 transform rounded-xl bg-white px-25 py-12 text-center sm:w-[70%] md:block md:w-[50%]">
                        <h3 className="mb-15 text-2xl font-bold">
                            Web Development
                        </h3>
                        <p className="font-lato400 text-sm text-gray-700">
                            We build responsive, secure, and fast-loading
                            websites that reflect your brand and deliver
                            seamless user experiences.
                        </p>
                    </div>
                </div>
            </section>

            <div className="mx-5 mt-20 md:mx-20">
                <h1 className="font-lato900 mb-6 text-3xl font-black md:text-5xl">
                    {" "}
                    We can help you with
                </h1>

                <section className="mt-10">
                    <div className="mx-auto grid max-w-full grid-cols-1 items-stretch gap-6 md:grid-cols-[0.6fr_1.2fr]">
                        <div className="flex h-full flex-col justify-between rounded-md bg-[#fbfbff] p-5 shadow-md">
                            <h3 className="font-lato900 text-md font-bold">
                                Custom Website Development
                            </h3>
                            <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                <span>
                                    <RiComputerLine className="text-primary mb-1 text-3xl" />
                                </span>
                                We create unique, scalable websites tailored to
                                your business needs with clean, maintainable
                                code. From custom layouts to advanced features,
                                we ensure your site aligns with your goals while
                                delivering a professional digital presence.
                            </p>
                        </div>

                        <div className="flex h-full flex-col justify-between gap-6">
                            <div className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md">
                                <h3 className="font-lato900 text-md mb-3 font-semibold">
                                    Responsive & Mobile-First Design
                                </h3>
                                <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                    <span>
                                        <DiResponsive className="text-primary text-7xl" />
                                    </span>
                                    We design websites that adapt seamlessly
                                    across all devices, ensuring fast loading
                                    and smooth navigation on smartphones,
                                    tablets, and desktops. This helps you reach
                                    and engage your audience effectively
                                    everywhere.
                                </p>
                            </div>

                            <div className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md">
                                <h3 className="font-lato900 text-md mb-7 font-semibold">
                                    Frontend and Backend Integration
                                </h3>
                                <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                    <span>
                                        <IoCodeSlash className="text-primary mb-1 text-3xl" />
                                    </span>
                                    We handle both the user-facing interface and
                                    server-side functionality, ensuring your
                                    website runs smoothly. From dynamic forms to
                                    secure user dashboards, we integrate
                                    frontend and backend for seamless
                                    performance. SEO-Friendly Structure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="mx-auto grid max-w-full grid-cols-1 items-stretch gap-6 md:grid-cols-[1.2fr_0.6fr]">
                        <div className="flex h-full flex-col gap-6">
                            <div className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md">
                                <h3 className="font-lato900 text-md mb-7 font-semibold">
                                    SEO-Friendly Structure
                                </h3>
                                <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                    <span>
                                        <IoSearch className="text-primary mb-1 text-3xl" />
                                    </span>
                                    We build websites with clean code, fast
                                    loading speeds, and optimized structure to
                                    help your site rank higher on search
                                    engines. This ensures better visibility and
                                    organic traffic for your business.
                                </p>
                            </div>

                            <div className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md">
                                <h3 className="font-lato900 text-md mb-7 font-semibold">
                                    E-commerce & Landing Page Development
                                </h3>
                                <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                    <span>
                                        <FiShoppingCart className="text-primary mb-1 text-3xl" />
                                    </span>
                                    We develop high-converting online stores and
                                    landing pages with secure payment gateways
                                    and clear calls to action. Our pages are
                                    designed to drive sales and generate leads
                                    efficiently across devices.
                                </p>
                            </div>
                        </div>

                        <div className="flex h-full flex-col justify-between rounded-md bg-[#fbfbff] p-5 shadow-md">
                            <h3 className="font-lato900 text-md font-semibold">
                                Website Maintenance & Support
                            </h3>
                            <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                <span>
                                    <IoMdCheckmarkCircleOutline className="text-primary mb-1 text-3xl" />
                                </span>
                                We provide ongoing website maintenance to ensure
                                your site remains secure, updated, and
                                functioning smoothly. From fixing bugs to
                                updating content, we handle all technical upkeep
                                so you can focus on your business.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="font-lato900 mt-10 max-w-full rounded-xl bg-[#fbfbff] px-6 py-4 shadow-md">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs font-bold md:text-sm">
                            Ready to create your perfect software? We are!
                        </p>
                        <button className="bg-primary rounded-full px-6 py-1 text-xs text-white transition md:text-sm">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="font-lato900 my-20 w-full px-6 text-center md:px-20">
                    <h1 className="mb-6 text-3xl font-black md:text-5xl">
                        Join us on the journey?
                    </h1>

                    <p className="mx-auto max-w-full text-xs font-semibold md:text-sm">
                        We believe that every brand has a unique story to tell.
                        Let us help you share yours with the world. Partner with
                        devX Alpha, and together, we’ll create a digital
                        presence that leaves a lasting impression.
                    </p>
                </div>
            </div>
        </div>
    );
}
