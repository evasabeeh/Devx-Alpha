import Hero from "@/components/Services/ServicesHero";
import Desc from "@/components/Services/Desc";

const heroData = {
    title: "UI/UX Design",
    description:
        "We design user-centered interfaces that are visually appealing and easy to use, enhancing your product’s engagement and usability.",
    image: "/services/hero/uiux-hero.jpg",
};

const designSolutionsData = {
    sections: [
        {
            layout: "left" as const,
            cards: [
                {
                    title: "User Research & Personas",
                    icon: "PiUser",
                    description:
                        "We conduct in-depth user research to understand your audience’s goals, frustrations, and behavior patterns. By creating detailed user personas, we align your product design with real user needs, ensuring your product solves the right problems.",
                },
            ],
            cardsRight: [
                {
                    title: "Wireframing & Prototyping",
                    icon: "PiSquaresFour",
                    description:
                        "We design clear wireframes to map user flows and structure, then build interactive prototypes to visualize the user journey before development. This process helps refine user experience early and allows for stakeholder feedback to reduce rework later.",
                },
                {
                    title: "Mobile & Web Interface Design",
                    icon: "HiOutlineDeviceMobile",
                    description:
                        "We design intuitive and visually compelling interfaces for mobile and web that prioritize usability, accessibility, and your brand’s identity. From typography and color to interaction design, we ensure your product looks modern and feels seamless to use.",
                },
            ],
        },
        {
            layout: "right" as const,
            cards: [
                {
                    title: "Usability Testing",
                    icon: "FaRegClock",
                    description:
                        "We create visually clear and engaging infographics that transform complex information into easy-to-understand visuals. These are perfect for social sharing, presentations, and simplifying reports for your audience.",
                },
                {
                    title: "Interaction Design & Microinteractions",
                    icon: "LuChevronsLeftRight",
                    description:
                        "We design intuitive interactions and micro animations that guide users seamlessly through your product while making the experience delightful. Thoughtful micro interactions enhance usability, provide feedback, and add a polished, human touch to your app or website.",
                },
            ],
            cardsRight: [
                {
                    title: "Design Systems & UI Kits",
                    icon: "LiaLocationArrowSolid",
                    description:
                        "We build scalable design systems and UI kits to maintain visual consistency and speed up product development. Our systems include reusable components, typography, colors, and guidelines to ensure your product remains cohesive as it grows.",
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

                <Desc data={designSolutionsData} />

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
