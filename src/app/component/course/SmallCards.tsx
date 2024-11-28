// "use client";

// import React, { FC } from "react";
// import styles from "./Course.module.css";
// import Image from "next/image";

// interface CardData {
//   icon: string;
//   title: string;
// }

// interface SmallCardsProps {
//   data: CardData[];
// }

// const SmallCards: FC<SmallCardsProps> = ({ data }) => {
//   return (
//     <div className="w-full relative">
//       <h1>Career growth</h1>
//       <div className="flex flex-wrap justify-center gap-4">
//         {data.map((elem, idx) => (
//           <div
//             key={idx}
//             className={`${styles.card} relative w-[280px] sm:w-[300px] h-[200px] rounded-[10px] bg-gray-900 flex flex-col justify-between p-4 shadow-md`}
//           >
//             <div className="relative w-[104px] h-[120px] mx-auto mt-4">
//               {/* Background Image */}
//               <div className="relative w-full h-full">
//                 <Image
//                   src="/image/CareerGuidance_Images/categories-bg-shape.svg fill.png"
//                   alt="Background Shape"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               {/* Foreground Icon */}
//               <div
//                 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.icon}`}
//               >
//                 <Image
//                   src={elem.icon}
//                   alt={elem.title}
//                   width={78}
//                   height={78}
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//             <h3 className="text-[16px] md:text-[20px] font-medium text-center mb-4 text-white">
//               {elem.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SmallCards;

"use client";

import React, { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./Course.module.css";
import "../../../styles/globals.css";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CardData {
  icon: string;
  title: string;
}

interface SmallCardsProps {
  data: CardData[];
}

const SmallCards: FC<SmallCardsProps> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full relative">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center text-red-500">
        Career growth
      </h1>
      <div className="hidden sm:flex flex-wrap justify-center gap-4">
        {data.map((elem, idx) => (
          <Card key={idx} elem={elem} />
        ))}
      </div>
      <div className={`sm:hidden ${styles.sliderContainer}`}>
        <Slider {...settings}>
          {data.map((elem, idx) => (
            <div key={idx} className="px-4">
              <Card elem={elem} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card: FC<{ elem: CardData }> = ({ elem }) => (
  <div
    className={`${styles.card} relative w-[280px] sm:w-[300px] h-[200px] rounded-[10px] bg-gray-900 flex flex-col justify-between p-4 shadow-md mx-auto`}
  >
    <div className="relative w-[104px] h-[120px] mx-auto mt-4">
      {/* Background Image */}
      <div className={`relative w-full h-full ${styles.circleBackground}`}>
        <Image
          src="/image/CareerGuidance_Images/categories-bg-shape.svg fill.png"
          alt="Background Shape"
          fill
          className="object-cover"
        />
      </div>
      {/* Foreground Icon */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.icon}`}
      >
        <Image
          src={elem.icon}
          alt={elem.title}
          width={78}
          height={78}
          className="object-cover"
        />
      </div>
    </div>
    <h3 className="text-[16px] md:text-[20px] font-medium text-center mb-4 text-white">
      {elem.title}
    </h3>
  </div>
);

export default SmallCards;
