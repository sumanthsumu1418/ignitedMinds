// import Image from "next/image";
// import styles from "./Course.module.css";

// interface CardData {
//   title: string;
//   description: string;
//   img: string;
//   icon: string;
// }

// interface BigCardsProps {
//   data: CardData[];
// }

// const BigCards: React.FC<BigCardsProps> = ({ data }) => {
//   if (!data || !Array.isArray(data)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-4 py-8">
//       {data.map((elem, index) => (
//         <div
//           key={index}
//           className="relative flex flex-col justify-center items-flex start w-[350px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[600px] h-[260px] sm:h-[320px] lg:h-[380px] bg-[#E3EAFE] rounded-[20px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500"
//         >
//           {/* Centered Text */}
//           <div className="absolute z-10 text-start px-4">
//             <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-800 font-medium">
//               {elem.title}
//             </p>
//             <h1 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-bold text-gray-900">
//               {elem.description}
//             </h1>
//           </div>

//           {/* Background Circle */}
//           <div
//             className={`${styles.circleBackground} absolute top-0 -right-[60px] sm:-right-[80px] lg:-right-[100px] w-[180px] sm:w-[220px] lg:w-[280px] h-[180px] sm:h-[220px] lg:h-[280px] rounded-full`}
//           ></div>

//           {/* Background Image */}
//           <img
//             src={elem.img}
//             alt={elem.title}
//             className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] lg:w-[220px] xl:w-[260px] h-auto"
//           />

//           {/* Arrow Icon */}
//           <div className="absolute bottom-4 right-4">
//             <img
//               src={elem.icon}
//               alt="Arrow Icon"
//               className="w-[24px] sm:w-[32px] lg:w-[40px] object-contain"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BigCards;

import Link from "next/link";
import styles from "./Course.module.css";

interface CardData {
  title: string;
  description: string;
  img: string;
  icon: string;
  link: string; // Add link property
}

interface BigCardsProps {
  data: CardData[];
}

const BigCards: React.FC<BigCardsProps> = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-4 py-8">
      {data.map((elem, index) => (
        <Link key={index} href={elem.link}>
          <div className="relative flex flex-col justify-center items-flex start w-[350px] sm:w-[450px] md:w-[600px] lg:w-[700px] xl:w-[600px] h-[260px] sm:h-[320px] lg:h-[380px] bg-[#E3EAFE] rounded-[20px] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 cursor-pointer">
            {/* Centered Text */}
            <div className="absolute z-10 text-start px-4">
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-800 font-medium">
                {elem.title}
              </p>
              <h1 className="text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] font-bold text-gray-900">
                {elem.description}
              </h1>
            </div>

            {/* Background Circle */}
            <div
              className={`${styles.circleBackground} absolute top-0 -right-[60px] sm:-right-[80px] lg:-right-[100px] w-[180px] sm:w-[220px] lg:w-[280px] h-[180px] sm:h-[220px] lg:h-[280px] rounded-full`}
            ></div>

            {/* Background Image */}
            <img
              src={elem.img}
              alt={elem.title}
              className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] lg:w-[220px] xl:w-[260px] h-auto"
            />

            {/* Arrow Icon */}
            <div className="absolute bottom-4 right-4">
              <img
                src={elem.icon}
                alt="Arrow Icon"
                className="w-[24px] sm:w-[32px] lg:w-[40px] object-contain"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BigCards;
