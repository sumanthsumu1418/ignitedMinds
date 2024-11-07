import Image from 'next/image'; // Use Next.js Image component for optimization
import styles from './Page.module.css'; // Import your CSS module

// Define the data type for the component's props
interface CardData {
    title: string;
    description: string;
    img: {
        src: string;   // Path to the image
        width: number; // Width of the image
        height: number; // Height of the image
    };
    icon: string;
}

interface BigCardsProps {
    data: CardData[];
}

const BigCards: React.FC<BigCardsProps> = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        return <div>No data available</div>; // Handle missing data
    }

    return (
        <div className='flex justify-center gap-[43px]'>
            {data.map((elem, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-between w-[653px] h-[653px] rounded-[20px] bg-[#8A47CB4F] border-[10px] border-white ${styles.backdropBlur}`}
                >
                    <div className='flex flex-col justify-between w-full h-[40%]'>
                        <p className="text-[39px] font-normal leading-[39px] tracking-[-0.32px] text-white ml-[50px] mt-[64px]">
                            {elem.title}
                        </p>
                        <h1 className="text-[66px] font-bold leading-[63px] tracking-[0.08em] text-white ml-[37px]">
                            {elem.description}
                        </h1>
                    </div>
                    <div className="flex justify-between items-end w-full h-[60%]">
                        <div className="ml-[48px] relative" style={{ width: elem.img.width, height: elem.img.height }}>
                            <Image
                                src={elem.img.src}
                                alt={elem.title}
                                fill // This will make the image fill the parent div
                                style={{ objectFit: 'cover' }} // Cover the area while maintaining aspect ratio
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Specify sizes for responsive behavior
                            />
                        </div>
                        <div className="mr-4 mb-8">
                            <Image
                                src={elem.icon}
                                alt="Right Arrow Icon"
                                width={28}
                                height={28}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BigCards;
