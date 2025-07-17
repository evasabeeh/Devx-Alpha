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
                            <Link href="/">About</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Features</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Career</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Works</Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-10 w-full md:mb-0 md:w-1/5">
                    <h3 className="mb-5 font-bold">Help</h3>
                    <ul>
                        <li className="mb-2">
                            <Link href="">Customer</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="">Support</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="">Delivery Details</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="">Terms & Conditions</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5">
                    <h3 className="mb-5 font-bold">Resources</h3>
                    <ul>
                        <li className="mb-2">
                            <Link href="/">Free eBooks</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Tutorial</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">How to Blog</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/">Youtube Playlist</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
