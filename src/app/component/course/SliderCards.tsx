// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// interface SliderCard {
//   image: string;
//   title: string;
// }

// interface SliderCardsProps {
//   cards: SliderCard[];
// }

// const SliderCards: React.FC<SliderCardsProps> = ({ cards }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//         setIsAnimating(false);
//       }, 500); // Half of the transition duration
//     }, 5000); // Change card every 5 seconds

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="w-full max-w-4xl mx-auto py-4 sm:py-8 px-4">
//       <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`
//               absolute top-0 left-0 w-full h-full transition-opacity duration-1000
//               ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
//               ${isAnimating ? "transition-none" : ""}
//             `}
//           >
//             <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
//               <Image
//                 src={card.image}
//                 alt={card.title}
//                 layout="fill"
//                 objectFit="contain"
//                 className="w-full h-full object-contain"
//               />
//               <div className="absolute bottom-0 left-10 right-10 p-4 sm:p-4 bg-gradient-to-t from-black to-transparent flex justify-center align-center">
//                 <h3 className="text-white text-sm sm:text-xl font-bold truncate">
//                   {card.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SliderCards;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SliderCard {
  image: string;
  title: string;
}

interface SliderCardsProps {
  cards: SliderCard[];
}

const SliderCards: React.FC<SliderCardsProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        setIsAnimating(false);
      }, 500); // Half of the transition duration
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="w-full max-w-4xl mx-auto py-4 sm:py-8 px-4">
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`
              absolute top-0 left-0 w-full h-full transition-opacity duration-1000
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
              ${isAnimating ? "transition-none" : ""}
            `}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src={card.image}
                alt={`${card.title} course`}
                layout="fill"
                objectFit="contain"
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-10 right-10 p-4 sm:p-4 bg-gradient-to-t from-black to-transparent flex justify-center align-center">
                <h3 className="text-white text-sm sm:text-xl font-bold truncate">
                  {card.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
