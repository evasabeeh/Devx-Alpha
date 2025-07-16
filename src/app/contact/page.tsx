import { Navbar, Footer } from '@/components';
import { TbUserFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill, PiPencilSimpleLineFill } from "react-icons/pi";
import { RiBuildingFill } from "react-icons/ri";
import { AiFillInfoCircle } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { FaLocationPin } from "react-icons/fa6";

export default function Page() {
    return (
        <>
            <div className="relative px-4 pb-10 md:px-20 font-lato900">

                <div className="absolute inset-0 z-0 bg-[url('/contact-hero.jpg')] bg-cover bg-top" />

                <div className="absolute inset-0 z-10 bg-black/50" />

                <div className="relative z-20 mb-20">
                    <Navbar />
                </div>

                <div className="relative z-20 flex h-full items-center justify-start px-5 md:px-0 pb-20">
                    <div className="text-white max-w-xl">
                        <p className="mb-5 text-sm sm:text-xl md:text-xl">Contact us</p>
                        <h1 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-bold">
                            Get in Touch with Us
                        </h1>
                        <p className="text-sm sm:text-xl md:text-xl">
                            Have questions about <span className="font-bold">DevX Alpha</span> or need assistance?
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 md:px-20 my-15 text-center font-montserrat400">
                <h1 className="text-3xl md:text-5xl font-black mb-6">How can we help you?</h1>
                <p className="text-xs md:text-sm mb-4 max-w-full mx-auto">
                    Ready to transform your ideas into reality with <span className="font-bold">DevX Alpha</span>? We’re here to help you grow.
                </p>
                <p className="text-xs md:text-sm max-w-full mx-auto">
                    Whether you’re looking to elevate your digital presence, need expert guidance for your business, or have a project you’re excited to launch, let’s connect and make it happen. Share your vision with us today, and let’s build something impactful together.
                </p>
            </div>

            <div className="w-full mb-5 px-6 md:px-12 py-12 flex justify-center">
                <form className="font-montserrat400 w-full max-w-xl border border-black rounded-2xl px-8 py-10 space-y-6">

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <TbUserFilled className="w-5 h-5 mr-4 text-gray-400 fill-current" />
                        <input
                            type="text"
                            placeholder="Name"
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <PiPhoneCallFill className="w-5 h-5 mr-4 text-gray-400 fill-current" />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <MdEmail className="w-5 h-5 mr-4 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <RiBuildingFill className="w-5 h-5 mr-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Company"
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <AiFillInfoCircle className="w-5 h-5 mr-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <PiPencilSimpleLineFill className="w-5 h-5 mr-4 text-gray-400 fill-current" />
                        <input
                            type="text"
                            placeholder="How can we help you? Feel free to get in touch."
                            className="font-bold w-full bg-transparent focus:outline-none text-gray-400 placeholder-gray-400 py-2"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="cursor-pointer mt-10 bg-red-700 text-white px-6 py-2 hover:bg-red-900 transition"
                        >
                            Get in touch
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-full px-20 md:px-20 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-gray-800 font-montserrat400 text-sm md:text-base">

                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <CiMail className="w-5 h-5 text-white" />
                        </div>
                        <span>devxalphaa@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <LuPhone className="w-5 h-5 text-white" />
                        </div>
                        <span>+91 8840808354</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                            <FaLocationPin className="w-5 h-5 text-white" />
                        </div>
                        <span>Pune, Maharashtra</span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

