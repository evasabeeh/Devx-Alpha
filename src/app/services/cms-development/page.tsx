import Hero from "@/components/Services/Services-Hero";
import Desc from "@/components/Services/Desc";

const heroData = {
    title: "CMS Development",
    description:
        "We develop easy-to-manage, scalable CMS solutions that empower you to control your website content without technical barriers.",
    image: "/services/hero/cms-hero.jpg",
};

const cmsSolutionsData = {
    sections: [
        {
            layout: "left" as const,
            cards: [
                {
                    title: "WordPress, Shopify, Webflow Development",
                    icon: "GoGlobe",
                    description:
                        "We build and customize websites on WordPress, Shopify, and Webflow tailored to your business needs, whether for e-commerce, blogs, or portfolios. Our builds ensure your site is secure, responsive, SEO-friendly, and easy to update without technical complexity.",
                },
            ],
            cardsRight: [
                {
                    title: "Custom CMS Solutions",
                    icon: "FiSettings",
                    description:
                        "We develop fully custom CMS solutions tailored to your workflows and business goals. This gives you full control over your content structure, flexibility in design, and the ability to scale your website as your business grows without platform limitations.",
                },
                {
                    title: "Content Migration & Setup",
                    icon: "HiOutlineArrowUpTray",
                    description:
                        "We handle seamless content migration from your old platform to your new CMS, ensuring all data, images, and SEO structures are preserved. We also organize and set up your content for easy updates, maintaining consistency and structure across your website.",
                },
            ],
        },
        {
            layout: "right" as const,
            cards: [
                {
                    title: "Plugin & Theme Customization",
                    icon: "BsPlugin",
                    description:
                        "We customize themes and plugins to match your branding and functionality needs while maintaining performance and user experience. This allows your CMS site to remain unique, visually aligned with your brand, and optimized for your goals.",
                },
                {
                    title: "CMS Performance Optimization",
                    icon: "IoMdCheckmarkCircleOutline",
                    description:
                        "We optimize your CMS website for speed, responsiveness, and SEO by improving loading times, image handling, and code efficiency. A fast, optimized website enhances user experience, lowers bounce rates, and improves your search engine rankings.",
                },
            ],
            cardsRight: [
                {
                    title: "CMS Maintenance and Support",
                    icon: "BiCheckShield",
                    description:
                        "We provide ongoing CMS maintenance, updates, and technical support to ensure your website remains secure, up-to-date, and performs efficiently. This includes monitoring, backups, troubleshooting, and feature enhancements as your needs evolve.",
                },
            ],
        },
    ],
};

export default function Page() {
    return (
        <div>
            <Hero
                title={heroData.title}
                description={heroData.description}
                image={heroData.image}
            />

            <div className="mx-5 mt-20 md:mx-20">
                <h1 className="font-lato900 mb-6 text-3xl font-black md:text-5xl">
                    {" "}
                    We can help you with
                </h1>

                <Desc data={cmsSolutionsData} />

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
