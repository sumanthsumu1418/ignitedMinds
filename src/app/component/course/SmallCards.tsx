// "use client";

// import React, { FC, useEffect, useState } from "react";
// import styles from "./Course.module.css"; // Import the CSS module
// import Image from "next/image";

// interface CardData {
//   icon: string;
//   title: string;
// }

// interface SmallCardsProps {
//   data: CardData[];
// }

// const SmallCards: FC<SmallCardsProps> = ({ data }) => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimate(true);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="overflow-x-hidden w-full relative">
//       {/* Static layout for all screen sizes */}
//       <div className="flex flex-wrap justify-center gap-4">
//         {data.map((elem, idx) => (
//           <div
//             key={idx}
//             className={`${styles.card} relative w-[300px] h-[200px] rounded-[10px] bg-[#E1F5FE] flex flex-col justify-between p-4 flex-none shadow-md`}
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
//             <h3 className="text-[16px] md:text-[20px] font-medium text-center mb-4 text-gray-800">
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

import React, { FC, useEffect, useState } from "react";
import styles from "./Course.module.css";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className={`${styles.card} relative w-[280px] sm:w-[300px] h-[200px] rounded-[10px] bg-[#E1F5FE] flex flex-col justify-between p-4 shadow-md`}
          >
            <div className="relative w-[104px] h-[120px] mx-auto mt-4">
              {/* Background Image */}
              <div className="relative w-full h-full">
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
            <h3 className="text-[16px] md:text-[20px] font-medium text-center mb-4 text-gray-800">
              {elem.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallCards;
