import Hero from "@/components/Services/Services-Hero";
import Desc from "@/components/Services/Desc";

const heroData = {
    title: "AI Solutions",
    description:
        "We craft visually engaging designs that align with your brand, ensuring consistency across digital and print platforms.",
    image: "/services/hero/ai-hero.jpg",
};

const aiSolutionsData = {
    sections: [
        {
            layout: "left" as "left",
            cards: [
                {
                    title: "Chatbot Development",
                    icon: "BiMessageRoundedDetail",
                    description:
                        "We build AI-powered chatbots that efficiently handle customer support, lead generation, and FAQs across your website or app. These chatbots improve engagement, reduce response time, and provide 24/7 assistance to your customers.",
                },
                {
                    title: "AI Integration in Apps",
                    icon: "MdAppSettingsAlt",
                    description:
                        "We integrate AI features like personalized recommendations, NLP, and image recognition into your mobile and web apps. This enhances functionality, user experience, and adds intelligent capabilities to your product without complexity.",
                },
            ],
            cardsRight: [
                {
                    title: "Natural Language Processing (NLP)",
                    icon: "BiConversation",
                    description:
                        "We develop NLP solutions that enable your systems to understand, process, and generate human language. From text analysis and sentiment detection to voice assistants and smart search, NLP adds intelligence to your products and improves user interactions.",
                },
            ],
        },
        {
            layout: "right" as "right",
            cards: [
                {
                    title: "Predictive Analytics",
                    icon: "MdShowChart",
                    description:
                        "We develop predictive analytics models to forecast customer behavior, sales trends, and operational outcomes using your data. This empowers you to make informed, data-driven decisions that improve business strategies and reduce risks.",
                },
                {
                    title: "Computer Vision Solutions",
                    icon: "AiOutlineCamera",
                    description:
                        "We build computer vision applications that detect, analyze, and interpret images and video data, enabling capabilities like facial recognition, object detection, and automated quality control for your business operations.",
                },
            ],
            cardsRight: [
                {
                    title: "Data-Driven Automation Tools",
                    icon: "AiOutlineSync",
                    description:
                        "We build automation tools powered by AI that handle repetitive and time-consuming tasks within your business workflows. These tools help improve productivity, reduce errors, and free up your team to focus on higher-value work.",
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

                <Desc data={aiSolutionsData} />

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
