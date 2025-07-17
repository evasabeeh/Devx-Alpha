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
            <div className="font-lato900 relative pt-20 pb-10">
                <div className="absolute inset-0 z-0 bg-[url('/contact-hero.jpg')] bg-cover bg-top" />

                <div className="absolute inset-0 z-10 bg-black/50" />

                <div className="relative z-20 flex h-full items-center justify-start px-5 pb-20 md:px-20">
                    <div className="max-w-xl text-white">
                        <p className="mb-5 text-sm sm:text-xl md:text-xl">
                            Contact us
                        </p>
                        <h1 className="mb-5 text-2xl font-bold sm:text-3xl md:text-5xl">
                            Get in Touch with Us
                        </h1>
                        <p className="text-sm sm:text-xl md:text-xl">
                            Have questions about{" "}
                            <span className="font-bold">DevX Alpha</span> or
                            need assistance?
                        </p>
                    </div>
                </div>
            </div>

            <div className="font-montserrat400 my-15 w-full px-6 text-center md:px-20">
                <h1 className="mb-6 text-3xl font-black md:text-5xl">
                    How can we help you?
                </h1>
                <p className="mx-auto mb-4 max-w-full text-xs md:text-sm">
                    Ready to transform your ideas into reality with{" "}
                    <span className="font-bold">DevX Alpha</span>? We’re here to
                    help you grow.
                </p>
                <p className="mx-auto max-w-full text-xs md:text-sm">
                    Whether you’re looking to elevate your digital presence,
                    need expert guidance for your business, or have a project
                    you’re excited to launch, let’s connect and make it happen.
                    Share your vision with us today, and let’s build something
                    impactful together.
                </p>
            </div>

            <div className="mb-5 flex w-full justify-center px-6 py-12 md:px-12">
                <form className="font-montserrat400 w-full max-w-xl space-y-6 rounded-2xl border border-black px-8 py-10">
                    <div className="flex items-center border-b-2 !border-gray-400">
                        <TbUserFilled className="mr-4 h-5 w-5 fill-current text-gray-400" />
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <PiPhoneCallFill className="mr-4 h-5 w-5 fill-current text-gray-400" />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <MdEmail className="mr-4 h-5 w-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <RiBuildingFill className="mr-4 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <AiFillInfoCircle className="mr-4 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border-b-2 !border-gray-400">
                        <PiPencilSimpleLineFill className="mr-4 h-5 w-5 fill-current text-gray-400" />
                        <input
                            type="text"
                            placeholder="How can we help you? Feel free to get in touch."
                            className="w-full bg-transparent py-2 font-bold text-gray-400 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="mt-10 cursor-pointer bg-red-700 px-6 py-2 text-white transition hover:bg-red-900"
                        >
                            Get in touch
                        </button>
                    </div>
                </form>
            </div>

            <div className="mb-20 w-full px-20 md:px-20">
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
