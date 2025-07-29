import Image from "next/image";

export default function Page() {
    const features = [
        {
            heading: "Scalable Solutions",
            tagline: "Built to grow with your product.",
            image: "/features/1.png",
            content:
                "DevX Alpha is built to scale with your needs—whether you're handling a handful of users or millions. Enjoy consistent performance, no matter how fast your project grows.",
        },
        {
            heading: "AI-Powered Insights",
            tagline: "Smarter decisions, faster.",
            image: "/features/2.png",
            content:
                "Leverage advanced AI analytics to gain actionable insights on your app’s performance, user behavior, and optimization opportunities.",
        },
        {
            heading: "24/7 Support",
            tagline: "Help, anytime you need it.",
            image: "/features/3.png",
            content:
                "Get continuous, around-the-clock support so you can resolve issues quickly and keep your projects moving forward without downtime.",
        },
        {
            heading: "Seamless Integration",
            tagline: "Built to grow with your product.",
            image: "/features/4.png",
            content:
                "Easily connect DevX Alpha with your existing tools, APIs, and workflows, ensuring smooth adoption into your development environment.",
        },
        {
            heading: "Robust Security",
            tagline: "Your data stays protected.",
            image: "/features/5.png",
            content:
                "Your data and applications remain safe with enterprise-grade encryption, regular audits, and best practices for secure development.",
        },
        {
            heading: "Real-Time Collaboration",
            tagline: "Work together, live.",
            image: "/features/6.png",
            content:
                "Collaborate with your team in real-time, allowing for simultaneous editing, code review, and live feedback to accelerate your workflow.",
        },
    ];
    return (
        <div>
            <div className="mt-6 text-center">
                <h1 className="font-lato400 mb-4 text-5xl font-bold">
                    Features
                </h1>

                <h3 className="font-lato400 mb-4 text-xl">
                    Powerful Features to Supercharge Your Development
                </h3>
                <Image
                    src="/features_header.png"
                    alt="Features Header"
                    width={1000}
                    height={1000}
                    className="w-full"
                />
            </div>
            <div className="my-8 grid grid-cols-3 gap-4 px-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="font-montserrat400 hover:bg-primary cursor-pointer p-8 shadow transition-colors hover:text-white"
                    >
                        <h2 className="font-lato400 font-bold">
                            {feature.heading}
                        </h2>
                        <h3 className="mb-4">{feature.tagline}</h3>
                        <p>{index + 1}.</p>
                        <div className="border-primary mx-auto mb-4 flex h-[250px] w-[250px] rounded-full border-2 transition-colors hover:border-white">
                            <Image
                                src={feature.image}
                                alt={feature.heading}
                                width={250}
                                height={250}
                                className="mx-auto"
                            />
                        </div>
                        <p className="text-sm">{feature.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
