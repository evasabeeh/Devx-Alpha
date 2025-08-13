import Link from "next/link";

import {
    FaXTwitter,
    FaInstagram,
    FaFacebookF,
    FaGithub,
} from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="font-plusJakartaSans400 bg-black px-4 text-white md:px-20">
            <div className="border-faded-text flex-none items-center justify-around border-b-2 py-6 md:flex">
                <div className="mb-5 w-full md:w-1/2">
                    <p className="text-center text-xl font-bold md:text-left md:text-4xl">
                        Learn how to grow 💪audience fast in Twitter
                    </p>
                </div>
                <div className="w-full text-center md:w-1/2 md:text-right">
                    <Link
                        href="/"
                        className="rounded-full bg-white px-4 py-2 font-bold text-black"
                    >
                        Download Free Chapter
                    </Link>
                </div>
            </div>
            <div className="flex-none py-6 text-center md:flex md:text-left">
                <div className="mb-10 w-full pr-0 md:mb-0 md:w-2/5 md:pr-10">
                    <h3 className="mb-5 font-bold">About Rareblocks</h3>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam dictum aliquet accumsan porta lectus ridiculus in
                        mattis. Netus sodales in volutpat ullamcorper amet
                        adipiscing fermentum.
                    </p>
                    <div className="flex justify-center gap-5 md:justify-start">
                        <Link href="/">
                            <FaXTwitter size={30} />
                        </Link>
                        <Link href="/">
                            <FaFacebookF size={30} />
                        </Link>
                        <Link href="/">
                            <FaInstagram size={30} />
                        </Link>
                        <Link href="/">
                            <FaGithub size={30} />
                        </Link>
                    </div>
                </div>
                <div className="mb-10 w-full md:mb-0 md:w-1/5">
                    <h3 className="mb-5 font-bold">Company</h3>
                    <ul className="list-none">
                        <li className="mb-2">
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/features" className="hover:underline">
                                Features
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/career" className="hover:underline">
                                Career
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/" className="hover:underline">
                                Works
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-10 w-full md:mb-0 md:w-1/5">
                    <h3 className="mb-5 font-bold">Help</h3>
                    <ul>
                        <li className="mb-2">
                            <Link href="/customers" className="hover:underline">
                                Customer
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/support" className="hover:underline">
                                Support
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/delivery" className="hover:underline">
                                Delivery Details
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/terms" className="hover:underline">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/privacy" className="hover:underline">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/cookies" className="hover:underline">
                                Manage Cookies
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5">
                    <h3 className="mb-5 font-bold">Resources</h3>
                    <ul>
                        <li className="mb-2">
                            <Link href="/free-book" className="hover:underline">
                                Free eBooks
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/our-team" className="hover:underline">
                                Our Team
                            </Link>
                        </li>

                        <li className="mb-2">
                            <Link
                                href="/how-to-blog"
                                className="hover:underline"
                            >
                                How to Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
