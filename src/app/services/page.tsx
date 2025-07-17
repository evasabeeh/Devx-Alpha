import { IoCodeSlash } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Page() {
    return (
        <>
            <section className="relative w-full mt-30 md:mt-40 lg:mt-50">

                <div className="block md:hidden text-center font-montserrat400 px-6 py-8">
                    <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                    <p className="text-sm text-gray-700">
                        We build responsive, secure, and fast-loading websites that reflect your brand and deliver seamless user experiences.
                    </p>
                </div>

                <div className="w-full h-[500px]">
                    <img
                        src="/services-web-hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />

                    <div className="hidden md:block absolute top-[-100] right-[-120] transform -translate-x-1/2 w-[80%] sm:w-[70%] md:w-[50%] bg-white py-12 px-25 rounded-xl text-center font-montserrat400">
                        <h3 className="text-2xl font-bold mb-15">Web Development</h3>
                        <p className="text-sm text-gray-700">
                            We build responsive, secure, and fast-loading websites that reflect your brand and deliver seamless user experiences.
                        </p>
                    </div>
                </div>
            </section>


            <div className="mx-5 md:mx-20 mt-20 font-montserrat400">
                
                <h1 className="text-3xl md:text-5xl font-black mb-6"> We can help you with</h1>

                <section className="mt-10">
                    <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-[0.6fr_1.2fr] gap-6 items-stretch">

                        <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex flex-col justify-between h-full">
                            <h3 className="text-md font-bold">Custom Website Development</h3>
                            <p className="text-xs text-gray-600 leading-relaxed"><span><RiComputerLine className="text-[#d75152] text-3xl mb-1" /></span>
                                We create unique, scalable websites tailored to your business needs with clean, maintainable code. From custom layouts to advanced features, we ensure your site aligns with your goals while delivering a professional digital presence.
                            </p>
                        </div>

                        <div className="flex flex-col justify-between gap-6 h-full">
                            <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex-1">
                                <h3 className="text-md font-semibold mb-3">Responsive & Mobile-First Design</h3>
                                <p className="text-xs text-gray-600 leading-relaxed"><span><DiResponsive className="text-[#d75152] text-7xl" /></span>
                                    We design websites that adapt seamlessly across all devices, ensuring fast loading and smooth navigation on smartphones, tablets, and desktops. This helps you reach and engage your audience effectively everywhere.
                                </p>
                            </div>

                            <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex-1">
                                <h3 className="text-md font-semibold mb-7">Frontend and Backend Integration</h3>
                                <p className="text-xs text-gray-600 leading-relaxed"><span><IoCodeSlash className="text-[#d75152] text-3xl mb-1" /></span>
                                    We handle both the user-facing interface and server-side functionality, ensuring your website runs smoothly. From dynamic forms to secure user dashboards, we integrate frontend and backend for seamless performance.
                                    SEO-Friendly Structure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5">
                    <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.6fr] gap-6 items-stretch">

                        <div className="flex flex-col gap-6 h-full">
                            <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex-1">
                                <h3 className="text-md font-semibold mb-7">SEO-Friendly Structure</h3>
                                <p className="text-xs text-gray-600 leading-relaxed"><span><IoSearch className="text-[#d75152] text-3xl mb-1" /></span>
                                    We build websites with clean code, fast loading speeds, and optimized structure to help your site rank higher on search engines. This ensures better visibility and organic traffic for your business.
                                </p>
                            </div>
                            
                            <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex-1">
                                <h3 className="text-md font-semibold mb-7">E-commerce & Landing Page Development</h3>
                                <p className="text-xs text-gray-600 leading-relaxed"><span><FiShoppingCart className="text-[#d75152] text-3xl mb-1" /></span>
                                    We develop high-converting online stores and landing pages with secure payment gateways and clear calls to action. Our pages are designed to drive sales and generate leads efficiently across devices.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#fbfbff] p-5 rounded-md shadow-md flex flex-col justify-between h-full">
                            <h3 className="text-md font-semibold">Website Maintenance & Support</h3>
                            <p className="text-xs text-gray-600 leading-relaxed"><span><IoMdCheckmarkCircleOutline className="text-[#d75152] text-3xl mb-1" /></span>
                                We provide ongoing website maintenance to ensure your site remains secure, updated, and functioning smoothly. From fixing bugs to updating content, we handle all technical upkeep so you can focus on your business.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mt-10 bg-[#fbfbff] shadow-md rounded-xl px-6 py-4 max-w-full">
                    <div className="flex flex-row items-center justify-between gap-4 text-center md:text-left">
                        <p className="text-xs md:text-sm font-bold">
                            Ready to create your perfect software? We are!
                        </p>
                        <button className="text-xs md:text-sm bg-[#cb1919] text-white px-6 py-1 rounded-full transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="w-full px-6 md:px-20 my-20 text-center">
                    <h1 className="text-3xl md:text-5xl font-black mb-6">Join us on the journey?</h1>

                    <p className="text-xs md:text-sm font-semibold max-w-full mx-auto">
                        We believe that every brand has a unique story to tell. Let us help you share yours with the world. Partner with devX Alpha, and together, we’ll create a digital presence that leaves a lasting impression.
                    </p>
                </div>
            </div>
        </>
    );
}