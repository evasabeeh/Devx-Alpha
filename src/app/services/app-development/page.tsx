import Hero from "@/components/Services/Services-Hero";
import Desc from "@/components/Services/Desc";

const heroData = {
    title: "App Development",
    description:
        "We build intuitive, high-performance mobile apps for iOS and Android to help you engage your audience effectively.",
    image: "/services/hero/app-hero.jpg",
};

const mobileAppDevData = {
    sections: [
        {
            layout: "left" as "left",
            cards: [
                {
                    title: 'iOS & Android App Development',
                    icon: 'BsLayoutSidebarReverse',
                    description:
                        'We build native apps for iOS and Android, ensuring top performance, smooth user experience, and full utilization of platform features.',
                },
            ],
            cardsRight: [
                {
                    title: 'Cross-Platform Apps (Flutter/React Native)',
                    icon: 'PiShareNetwork',
                    description:
                        'We develop apps that work seamlessly on both iOS and Android using Flutter or React Native, reducing cost while ensuring consistent user experience.',
                },
                {
                    title: 'API Integration',
                    icon: 'AiOutlineApi',
                    description:
                        'We integrate third-party APIs to extend your app’s functionality, enabling features like payments, maps, and social logins seamlessly.',
                },
            ],
        },
        {
            layout: "right" as "right",
            cards: [
                {
                    title: 'App Testing and Deployment',
                    icon: 'LuDiamond',
                    description:
                        'We rigorously test and deploy your app on App Store and Play Store, ensuring it is bug-free, secure, and ready for your audience.',
                },
                {
                    title: 'App Maintenance and Updates',
                    icon: 'IoMdCheckmarkCircleOutline',
                    description:
                        'We provide regular updates, security checks, and feature enhancements to keep your app running smoothly and aligned with user needs.',
                },
            ],
            cardsRight: [
                {
                    title: 'App UI/UX Redesign',
                    icon: 'PiAppWindow',
                    description:
                        'We refresh and improve your existing app’s design to enhance usability, visual appeal, and user retention while aligning it with current trends and user expectations.',
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

                <Desc data={mobileAppDevData} />

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
