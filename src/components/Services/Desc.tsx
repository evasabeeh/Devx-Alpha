'use client';

import {
    IoCodeSlash,
    IoSearch,
    IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { DiResponsive } from 'react-icons/di';
import { FiShoppingCart } from 'react-icons/fi';

type CardData = {
    title: string;
    description: string;
    icon: string;
};

type Section = {
    layout: 'left' | 'right';
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
    IoCheckmarkCircleOutline,
    RiComputerLine,
    DiResponsive,
    FiShoppingCart,
};

export default function Desc({ data }: DescProps) {
    const renderIcon = (iconName: string) => {
        const IconComponent = Icons[iconName as keyof typeof Icons];
        return IconComponent ? <IconComponent className="text-primary mb-1 text-3xl" /> : null;
    };

    return (
        <>
            {data.sections.map((section, index) => (
                <section className="mt-10" key={index}>
                    <div
                        className={`mx-auto grid max-w-full grid-cols-1 items-stretch gap-6 md:grid-cols-[${section.layout === 'left' ? '0.6fr_1.2fr' : '1.2fr_0.6fr'
                            }]`}
                    >
                        <div className="flex h-full flex-col gap-6">
                            {section.cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md"
                                >
                                    <h3 className="font-lato900 text-md mb-3 font-semibold">
                                        {card.title}
                                    </h3>
                                    <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                        <span>{renderIcon(card.icon)}</span>
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {section.cardsRight && (
                            <div className="flex h-full flex-col gap-6 justify-between">
                                {section.cardsRight.map((card, idx) => (
                                    <div
                                        key={idx}
                                        className="flex-1 rounded-md bg-[#fbfbff] p-5 shadow-md"
                                    >
                                        <h3 className="font-lato900 text-md mb-3 font-semibold">
                                            {card.title}
                                        </h3>
                                        <p className="font-lato400 text-xs leading-relaxed text-gray-600">
                                            <span>{renderIcon(card.icon)}</span>
                                            {card.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            ))}
        </>
    );
}
