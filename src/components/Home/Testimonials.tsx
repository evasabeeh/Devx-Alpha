import Rating from "../Rating";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";

const TestimonialCard = () => {
    return (
        <section className="relative overflow-hidden bg-white py-16">
            <div
                className="pointer-events-none absolute top-1/2 left-75 z-0 hidden -translate-y-1/2 sm:block"
                aria-hidden="true"
            >
                <div className="relative h-[400px] w-[320px] rounded-sm bg-[#CB1919] sm:h-[450px] sm:w-[280px]">
                    <ImQuotesRight
                        className="absolute top-2 right-2 h-10 w-10 -scale-x-100 rotate-180 text-white sm:top-3 sm:right-3 sm:h-12 sm:w-12 md:top-4 md:right-4 md:h-14 md:w-14"
                        aria-hidden="true"
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row">
                <div className="flex-shrink-0">
                    <Image
                        width={500}
                        height={500}
                        src="/testimonials/1.png"
                        alt="User"
                        className="h-48 w-48 rounded-md object-cover sm:h-80 sm:w-60"
                    />
                </div>

                <div className="w-full md:flex-1">
                    <div className="mb-4 md:mb-4 md:ml-13 lg:ml-30">
                        <h2 className="ml-0 text-center text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:ml-20 md:text-left md:text-4xl">
                            Testimonials
                        </h2>
                    </div>

                    <div className="relative w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-4 shadow-xl md:p-6">
                        <div className="flex">
                            <div className="h-45 w-[10px] bg-[#CB1919] md:h-35"></div>
                            <div className="px-4">
                                <div className="mb-2 flex items-center">
                                    <Rating value={4} max={5} />
                                    <span className="ml-2 font-medium text-gray-600">
                                        4/5
                                    </span>
                                </div>
                                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                    The team took time to understand our vision
                                    and delivered a sleek, professional site
                                    that not only looks great but also improved
                                    our conversion rates. Their design process
                                    was smooth, communication was clear, and
                                    they met all deadlines. I can confidently
                                    say we’ll be working with them again in the
                                    future.
                                </p>

                                <p className="text-sm font-medium text-gray-800">
                                    <span className="rounded-xl bg-[#CB1919] p-1 text-white">
                                        ES
                                    </span>{" "}
                                    Emmanuel S
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCard;
