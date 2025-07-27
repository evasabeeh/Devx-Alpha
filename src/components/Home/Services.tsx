"use client";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
    const [isHovered, setIsHovered] = useState(false);
    const services_images = [
        {
            src: "/services/red/web_development.svg",
            hoverSrc: "/services/white/web_development.svg",
            name: "Web Development",
            heading: "Web Development",
            content:
                "We build responsive, fast, and scalable websites tailored to your business goals. From design to deployment, we ensure a seamless user experience.",
        },
        {
            src: "/services/red/app_development.svg",
            hoverSrc: "/services/white/app_development.svg",
            name: "App Development",
            heading: "App Development",
            content:
                "Our team creates high-performance mobile apps for Android and iOS. We focus on functionality, performance, and user engagement.",
        },
        {
            src: "/services/red/graphic_design.svg",
            hoverSrc: "/services/white/graphic_design.svg",
            name: "Graphic Design",
            heading: "Graphic Design",
            content:
                "From branding to promotional content, our designs speak louder than words. We turn ideas into visually compelling graphics.",
        },
        {
            src: "/services/red/ui_ux_design.svg",
            hoverSrc: "/services/white/ui_ux_design.svg",
            name: "UI UX Design",
            heading: "UI UX Design",
            content:
                "We design intuitive interfaces and seamless user experiences. Every element is crafted to enhance usability and visual appeal.",
        },
        {
            src: "/services/red/ai_solutions.svg",
            hoverSrc: "/services/white/ai_solutions.svg",
            name: "AI Solutions",
            heading: "AI Solutions",
            content:
                "Leverage the power of AI to automate, optimize, and innovate. Our AI-driven tools help your business stay ahead in a smart world.",
        },
        {
            src: "/services/red/cms_development.svg",
            hoverSrc: "/services/white/cms_development.svg",
            name: "CMS Development",
            heading: "CMS Development",
            content:
                "We offer custom CMS solutions that put you in control of your content. Easily manage, update, and scale your digital presence.",
        },
    ];
    return (
        <div className="mb-20 px-4 md:px-20">
            <div className="text-center">
                <p className="tag mb-5">our services</p>
                <h2 className="mb-10">
                    Save Time Managing Your Business With Our Best Services
                </h2>
            </div>
            <div className="grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-3 md:grid-rows-2">
                {services_images.map((image, index) => {
                    return (
                        <div
                            key={index}
                            className="hover:bg-primary cursor-pointer rounded-2xl bg-slate-100 p-4 transition-colors ease-linear hover:text-white"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div className="services_container_item">
                                <Image
                                    src={isHovered ? image.hoverSrc : image.src}
                                    alt={image.name}
                                    width={50}
                                    height={50}
                                    className="mb-4 transition-all duration-300"
                                />
                            </div>
                            <h3 className="font-lato400 mb-2 text-xl font-bold">
                                {image.heading}
                            </h3>
                            <p className="font-montserrat400">
                                {image.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
