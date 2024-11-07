import React from 'react';
import BigCards from './BigCards';
import SmallCards from './SmallCards';


const Page = () => {
    const bigCard_Data = [
        {
            title: "career guidance for ", description: "Graduation",
            img: {
                src: "/image/CareerGuidance_Images/Frame 1.png",  // Path to the image
                width: 309, // Width for this image
                height: 338 // Height for this image
            },
            icon: "/image/CareerGuidance_Images/right_arrow.svg"
        },
        {
            title: "career guidance for ", description: "Tech Graduation",
            img: {
                src: "/image/CareerGuidance_Images/OBJECTS.png",  // Path to the image
                width: 443, // Width for this image
                height: 381 // Height for this image
            },
            icon: "/image/CareerGuidance_Images/right_arrow.svg",
        }
    ];

    const smallCard_Data = [
        { icon: "/image/CareerGuidance_Images/business 1.png", title: "1-on-1 with Mentors" },
        { icon: "/image/CareerGuidance_Images/practice 1.png", title: "Learn Practically" },
        { icon: "/image/CareerGuidance_Images/certificate 1.png", title: "Get Certified" },
        { icon: "/image/CareerGuidance_Images/job-offer 1.png", title: "Get Placed" },
    ]

    return (
        // style={{ background: "linear-gradient(260deg, #E1D0F0, #AE8EDA)" }}
        <div className="pt-[186px] bg-[#F3E7FF] pb-[0.1px]">
            <div className='mb-[85px]'>
                <h4 className="text-[32px] font-bold leading-[21.6px] tracking-[0.08em] text-center text-black">
                    Expert Training and Placement Institute
                </h4>
            </div>
            <BigCards data={bigCard_Data} />

            <div className='mx-[47px] my-[120px] flex gap-[35px] justify-center'>
                <SmallCards data={smallCard_Data} />
            </div>
        </div>
    );
}

export default Page;
