"use client"; // Ensure this is a client component if you have interactivity

import React, { FC } from 'react';
import Image from 'next/image'; // Import Next.js Image component for optimization

interface CardData {
    icon: string; // URL for the icon
    title: string; // Title of the card
}

interface SmallCardsProps {
    data: CardData[]; // Prop type for the data array
}

const SmallCards: FC<SmallCardsProps> = ({ data }) => {
    return (
        <>
            {data.map((elem, index) => (
                <div key={index} className="relative w-[305px] h-[198px] rounded-[7px] bg-[#EFFFDF] flex flex-col justify-between">
                    {/* Background Shape */}
                    <div className='relative w-[104px] h-[120px] mx-auto mt-[14px]'>
                        <Image
                            src="/images/CareerGuidance_Images/categories-bg-shape.svg fill.png" 
                            alt="Background Shape"
                            layout="fill" // Fill parent element
                            objectFit="cover" // Cover while maintaining aspect ratio
                        />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            {/* Centered Inner Image */}
                            <Image
                                src={elem.icon} 
                                alt="Business Icon"
                                width={78} // Set the width
                                height={78} // Set the height
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <h3 className='text-[20px] font-normal leading-[20px] tracking-[-0.32px] text-center mb-[30px]'>{elem.title}</h3>
                </div>
            ))}
        </>
    );
};

export default SmallCards;
