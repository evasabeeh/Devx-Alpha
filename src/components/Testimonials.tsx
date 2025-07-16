import { Quote } from "lucide-react";
import Image from "next/image";
export default function Testimonials() {
    const tesmonials = [
        {
            image: "/testimonials/1.jpg",
            rating: 4,
            content:
                "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate. I can confidently say we’ll be working with them again in the future.",
            name: "John Doe",
        },
    ];
    return (
        <div className="font-dmSans400 px-4 md:px-20">
            <h2 className="mb-4 text-center">Testimonials</h2>
            <div>
                {tesmonials.map((tesmonial, index) => (
                    <div key={index} className="flex items-center">
                        <div className="w-1/2">
                            <img
                                src={tesmonial.image}
                                alt=""
                                className="w-full overflow-hidden"
                            />
                        </div>
                        <div className="bg-primary w-1/2 p-4 text-white">
                            <div className="border-l-2 border-white pl-6">
                                <div className="flex items-center gap-2">
                                    {Array(tesmonial.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <Image
                                                key={index}
                                                src="/star_orange.svg"
                                                alt="Orange star"
                                                width={20}
                                                height={20}
                                            />
                                        ))}
                                    {Array(5 - tesmonial.rating)
                                        .fill(0)
                                        .map((_, index) => (
                                            <Image
                                                key={index}
                                                src="/star_white.svg"
                                                alt="Grey star"
                                                width={20}
                                                height={20}
                                            />
                                        ))}
                                    <p className="ml-4 font-bold">
                                        {tesmonial.rating}/5
                                    </p>
                                </div>
                                <br />
                                <Quote />
                                <br />
                                <p>
                                    The team took time to understand our vision
                                    and delivered a sleek, professional site
                                    that not only looks great but also improved
                                    our conversion rates. Their design process
                                    was smooth, communication was clear, and
                                    they met all deadlines. We’ve received
                                    numerous compliments on the new site, and
                                    it’s easier for customers to navigate. I can
                                    confidently say we’ll be working with them
                                    again in the future.”
                                </p>
                                <br />
                                <p className="font-bold">- John Doe</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
