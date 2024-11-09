'use client';

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

interface CardData {
    icon: string;
    title: string;
}

interface SmallCardsProps {
    data: CardData[];
}

const SmallCards: FC<SmallCardsProps> = ({ data }) => {
    const [animate, setAnimate] = useState(false);

    // Trigger the animation after 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 1000); // 1 second delay

        return () => clearTimeout(timer);
    }, []);

    // Duplicate the data to create a seamless scrolling effect
    const duplicatedData = [...data, ...data];

    return (
        <div className="overflow-x-hidden w-full relative">
            {/* Animation applied on below sm, sm, and md screens */}
            <div
                className={`flex space-x-4 justify-start min-w-max ${animate ? "animate-scroll md:animate-scroll sm:animate-scroll" : ""
                    } lg:hidden`}
            >
                {duplicatedData.map((elem, idx) => (
                    <div
                        key={idx}
                        className="relative w-[350px] h-[198px] rounded-[7px] bg-[#E1F5FE] flex flex-col justify-between p-2 flex-none"
                    >
                        <div className="relative w-[104px] h-[120px] mx-auto mt-4">
                            {/* Background Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/image/CareerGuidance_Images/categories-bg-shape.svg fill.png"
                                    alt="Background Shape"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            {/* Foreground Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src={elem.icon}
                                    alt={elem.title}
                                    width={78}
                                    height={78}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-[16px] md:text-[20px] font-normal leading-[20px] tracking-[-0.32px] text-center mb-4 md:mb-[30px] text-black">
                            {elem.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Large Screens: No Animation, 4 Centered Cards */}
            <div className="hidden lg:flex lg:justify-center lg:space-x-4 lg:max-w-[1440px] lg:mx-auto">
                {data.slice(0, 4).map((elem, idx) => (
                    <div
                        key={idx}
                        className="relative w-[350px] h-[198px] rounded-[7px] bg-[#E1F5FE] flex flex-col justify-between p-2 flex-none"
                    >
                        <div className="relative w-[104px] h-[120px] mx-auto mt-4">
                            {/* Background Image */}
                            <div className="relative w-full h-full">
                                <Image
                                    src="/image/CareerGuidance_Images/categories-bg-shape.svg fill.png"
                                    alt="Background Shape"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            {/* Foreground Icon */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src={elem.icon}
                                    alt={elem.title}
                                    width={78}
                                    height={78}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <h3 className="text-[16px] md:text-[20px] font-normal leading-[20px] tracking-[-0.32px] text-center mb-4 md:mb-[30px] text-black">
                            {elem.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmallCards;
