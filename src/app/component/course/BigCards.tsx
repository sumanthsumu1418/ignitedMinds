import styles from "./Course.module.css";

interface CardData {
  title: string;
  description: string;
  img: string;
  icon: string;
}

interface BigCardsProps {
  data: CardData[];
}

const BigCards: React.FC<BigCardsProps> = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col items-center lg:flex lg:flex-row lg:justify-center gap-8 overflow-hidden">
      {data.map((elem, index) => (
        <div
          key={index}
          className={`flex flex-col justify-between  w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] rounded-[20px] bg-[#8A47CB4F] border-[10px] border-white ${styles.backdropBlur}`}
        >
          <div className="flex flex-col items-center justify-between md:items-start lg:items-start w-full h-[38%] p-4 lg:p-0">
            <p className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[39px] font-normal leading-[40px] text-white lg:ml-[54px] lg:mt-[44px]">
              {elem.title}
            </p>
            <h1 className="flex flex-wrap lg:w-[500px] lg:leading-[64px] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[66px] font-bold text-white lg:ml-[54px]">
              {elem.description}
            </h1>
          </div>

          <div className="flex justify-between items-end w-full h-[56%] ml-[48px]">
            {/* Image Container with responsive width/height using Tailwind */}
            <div className="lg:w-[400px] h-full">
              <img
                src={elem.img}
                alt={elem.title}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Icon Section */}
            <div className="w-[16px] h-[16px] mr-[62px] mb-[16px] lg:w-[28px] lg:h-[28px] lg:mr-[86px] lg:mb-[20px]">
              <img
                src={elem.icon}
                alt="Right Arrow Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BigCards;
