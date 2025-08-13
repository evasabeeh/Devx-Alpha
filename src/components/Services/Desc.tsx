"use client";

import { IoCodeSlash, IoSearch, IoSyncSharp } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FiShoppingCart, FiSettings } from "react-icons/fi";
import { MdOutlineTabletAndroid, MdOutlineChat } from "react-icons/md";
import { IoMdCheckmarkCircleOutline, IoMdConstruct } from "react-icons/io";
import {
    LuDiamond,
    LuImage,
    LuCircleDot,
    LuChevronsLeftRight,
    LuTestTube,
} from "react-icons/lu";
import { AiOutlineApi, AiOutlineFunction } from "react-icons/ai";
import {
    BsLayoutSidebarReverse,
    BsFileBarGraph,
    BsMotherboard,
} from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { TbCube } from "react-icons/tb";
import {
    PiUser,
    PiSquaresFour,
    PiBrowser,
    PiAppWindow,
    PiShareNetwork,
    PiStack,
    PiWaveSine,
} from "react-icons/pi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { LiaLocationArrowSolid } from "react-icons/lia";
import {
    HiMiniArrowTrendingUp,
    HiOutlineChatBubbleOvalLeft,
    HiOutlineArrowUpTray,
} from "react-icons/hi2";
import { GoGlobe } from "react-icons/go";
import { BiCheckShield } from "react-icons/bi";
import { BsPlugin } from "react-icons/bs";

type CardData = {
    title: string;
    description: string;
    icon: string;
};

type Section = {
    layout: "left" | "right";
    cards: CardData[];
    cardsRight?: CardData[];
};

type DescProps = {
    data: {
        sections: Section[];
    };
};

const Icons = {
    IoCodeSlash,
    IoSearch,
    IoMdCheckmarkCircleOutline,
    RiComputerLine,
    MdOutlineTabletAndroid,
    FiShoppingCart,
    LuDiamond,
    AiOutlineApi,
    BsLayoutSidebarReverse,
    PiAppWindow,
    PiShareNetwork,
    FaRegClock,
    LuImage,
    TbCube,
    BsFileBarGraph,
    PiBrowser,
    PiUser,
    HiOutlineDeviceMobile,
    PiSquaresFour,
    LiaLocationArrowSolid,
    LuChevronsLeftRight,
    HiMiniArrowTrendingUp,
    HiOutlineChatBubbleOvalLeft,
    LuCircleDot,
    MdOutlineChat,
    IoSyncSharp,
    GoGlobe,
    FiSettings,
    BiCheckShield,
    HiOutlineArrowUpTray,
    BsPlugin,
    BsMotherboard,
    PiStack,
    AiOutlineFunction,
    LuTestTube,
    IoMdConstruct,
    PiWaveSine,
};

export default function Desc({ data }: DescProps) {
    const renderIcon = (iconName: string) => {
        const IconComponent = Icons[iconName as keyof typeof Icons];
        return IconComponent ? (
            <IconComponent
                className="text-primary mb-1 text-3xl"
                aria-hidden="true"
            />
        ) : null;
    };

    return (
        <>
            {data.sections.map((section, index) => {
                const leftCol =
                    section.layout === "left"
                        ? "md:col-span-5"
                        : "md:col-span-7";
                const rightCol =
                    section.layout === "left"
                        ? "md:col-span-7"
                        : "md:col-span-5";

                return (
                    <section className="mt-10" key={index}>
                        <div className="mx-auto grid max-w-full grid-cols-1 gap-6 md:grid-cols-12">
                            <div
                                className={`flex h-full flex-col gap-6 ${leftCol}`}
                            >
                                {section.cards.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="flex h-full flex-col justify-between rounded-md bg-[#fbfbff] p-5 shadow-md"
                                    >
                                        <h3 className="font-lato900 text-md flex items-center gap-2 font-semibold">
                                            {renderIcon(card.icon)}
                                            {card.title}
                                        </h3>
                                        <p className="font-lato400 mt-4 text-xs leading-relaxed text-gray-700">
                                            {card.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {section.cardsRight && (
                                <div
                                    className={`flex h-full flex-col justify-between gap-6 ${rightCol}`}
                                >
                                    {section.cardsRight.map((card, idx) => (
                                        <div
                                            key={idx}
                                            className="flex h-full flex-col justify-between rounded-md bg-[#fbfbff] p-5 shadow-md"
                                        >
                                            <h3 className="font-lato900 text-md flex items-center gap-2 font-semibold">
                                                {renderIcon(card.icon)}
                                                {card.title}
                                            </h3>
                                            <p className="font-lato400 mt-4 text-xs leading-relaxed text-gray-700">
                                                {card.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}
        </>
    );
}
