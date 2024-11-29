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
//   const [visibleCards, setVisibleCards] = useState<SliderCard[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     setVisibleCards(cards.slice(0, 4));
//   }, [cards]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   useEffect(() => {
//     setVisibleCards((prevCards) => {
//       const newCards = [...prevCards];
//       newCards.shift();
//       newCards.push(cards[currentIndex]);
//       return newCards;
//     });
//   }, [currentIndex, cards]);

//   return (
//     <div className="w-full px-4 py-8">
//       <div className="flex justify-center space-x-4">
//         {visibleCards.map((card, index) => (
//           <div key={index} className="w-1/4">
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div className="relative aspect-w-16 aspect-h-9">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   width={300}
//                   height={169}
//                   layout="responsive"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-white text-lg font-semibold truncate">
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
//   const [position, setPosition] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const newPosition = prevPosition - 0.5;
//         return newPosition <= -100 ? 0 : newPosition;
//       });
//     }, 16); // Approximately 60 fps

//     return () => clearInterval(interval);
//   }, []);

//   const duplicatedCards = [...cards, ...cards];

//   return (
//     <div className="w-full px-4 py-8 overflow-hidden">
//       <div
//         className="flex transition-transform duration-300 ease-linear"
//         style={{
//           transform: `translateX(${position}%)`,
//           width: `${duplicatedCards.length * 25}%`
//         }}
//       >
//         {duplicatedCards.map((card, index) => (
//           <div key={index} className="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 px-2">
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full">
//               <div className="relative aspect-w-16 aspect-h-9">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-white text-lg font-semibold truncate">
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
//   const [position, setPosition] = useState(0);
//   const cardWidth = 20; // Each card occupies 25% width (1/4 for four cards visible)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const newPosition = prevPosition - cardWidth;
//         return newPosition <= -100 ? 0 : newPosition;
//       });
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full overflow-hidden px-4 py-8">
//       <div
//         className="flex transition-transform duration-700"
//         style={{
//           transform: `translateX(${position}%)`,
//           width: `${cards.length * cardWidth}%`,
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             style={{ width: `${cardWidth}%` }}
//           >
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div
//                 className="relative w-full h-0"
//                 style={{ paddingBottom: "56.25%" }} // Aspect ratio 16:9
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-2">
//                 <h3 className="text-white text-sm font-medium truncate">
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
//   const [position, setPosition] = useState(0);
//   const cardWidth = 20; // Each card occupies 20% width (5 cards per slide)
//   const cardGap = 2; // Gap percentage

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const newPosition = prevPosition - (cardWidth + cardGap);
//         return newPosition <= -(100 + (cardGap * (cards.length - 1)) / 5)
//           ? 0
//           : newPosition;
//       });
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="w-full overflow-hidden px-4 py-8">
//       <div
//         className="flex transition-transform duration-700"
//         style={{
//           transform: `translateX(${position}%)`,
//           width: `calc(${cards.length * (cardWidth + cardGap)}%)`,
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             style={{
//               width: `${cardWidth}%`,
//               marginRight: `${cardGap}%`,
//             }}
//           >
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div
//                 className="relative w-full h-0"
//                 style={{ paddingBottom: "56.25%" }} // Aspect ratio 16:9
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-2">
//                 <h3 className="text-white text-sm font-medium truncate">
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
//   const [position, setPosition] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prevPosition) => (prevPosition + 1) % cards.length);
//     }, 5000); // Slower interval for smooth sliding (5 seconds)

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   if (isMobile) {
//     return (
//       <div className="w-full overflow-hidden px-4 py-8">
//         <div
//           className="flex transition-transform duration-1000 ease-in-out"
//           style={{
//             transform: `translateX(-${position * 100}%)`,
//             width: `${cards.length * 100}%`,
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="w-full flex-shrink-0 flex justify-center items-center"
//               style={{ minWidth: "100%" }}
//             >
//               <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-auto">
//                 <div
//                   className="relative w-full h-0"
//                   style={{ paddingBottom: "56.25%" }}
//                 >
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-white text-lg font-medium text-center truncate">
//                     {card.title}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Desktop View
//   const cardWidth = 20; // Each card occupies 20% width
//   const cardGap = 2; // Gap percentage

//   return (
//     <div className="w-full overflow-hidden px-4 py-8">
//       <div
//         className="flex transition-transform duration-700"
//         style={{
//           transform: `translateX(-${position * (cardWidth + cardGap)}%)`,
//           width: `calc(${cards.length * (cardWidth + cardGap)}%)`,
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             style={{
//               width: `${cardWidth}%`,
//               marginRight: `${cardGap}%`,
//             }}
//           >
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div
//                 className="relative w-full h-0"
//                 style={{ paddingBottom: "56.25%" }}
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-white text-lg font-medium truncate">
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
//   const [position, setPosition] = useState(0);
//   const cardWidthDesktop = 18; // Smaller width for desktop (5-6 cards)
//   const cardGapDesktop = 2; // Gap percentage for desktop
//   const cardWidthMobile = 50; // Smaller width for mobile (1 card)
//   const cardGapMobile = 5; // Gap percentage for mobile

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const cardWidth =
//           window.innerWidth <= 768 ? cardWidthMobile : cardWidthDesktop;
//         const cardGap =
//           window.innerWidth <= 768 ? cardGapMobile : cardGapDesktop;

//         const newPosition = prevPosition - (cardWidth + cardGap);
//         const maxOffset =
//           window.innerWidth <= 768
//             ? -(cardWidthMobile + cardGapMobile) * cards.length +
//               cardWidthMobile +
//               cardGapMobile
//             : -(100 + (cardGapDesktop * (cards.length - 1)) / 5);

//         return newPosition <= maxOffset ? 0 : newPosition;
//       });
//     }, 3000); // Slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   return (
//     <div className="w-full overflow-hidden px-4 py-8">
//       <div
//         className="flex transition-transform duration-700"
//         style={{
//           transform: `translateX(${position}%)`,
//           width: `calc(${
//             cards.length *
//             (window.innerWidth <= 768
//               ? cardWidthMobile + cardGapMobile
//               : cardWidthDesktop + cardGapDesktop)
//           }%)`,
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 card-mobile"
//             style={{
//               width: `${
//                 window.innerWidth <= 768 ? cardWidthMobile : cardWidthDesktop
//               }%`,
//               marginRight: `${
//                 window.innerWidth <= 768 ? cardGapMobile : cardGapDesktop
//               }%`,
//             }}
//           >
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div
//                 className="relative w-full"
//                 style={{
//                   height: window.innerWidth <= 768 ? "150px" : "150px", // Smaller card height
//                 }}
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-lg"
//                 />
//               </div>
//               <div className="p-2">
//                 <h3 className="text-white text-sm font-medium truncate text-center">
//                   {card.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .flex {
//             justify-content: center;
//           }
//           .card-mobile {
//             margin: 0 auto; /* Center the cards */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SliderCards;

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
//   const [position, setPosition] = useState(0);
//   const [isClient, setIsClient] = useState(false); // Track if we are on the client
//   const cardWidthDesktop = 18;
//   const cardGapDesktop = 2;
//   const cardWidthMobile = 50;
//   const cardGapMobile = 5;

//   useEffect(() => {
//     // Ensure this runs only on the client
//     setIsClient(true);

//     const interval = setInterval(() => {
//       setPosition((prevPosition) => {
//         const cardWidth =
//           window.innerWidth <= 768 ? cardWidthMobile : cardWidthDesktop;
//         const cardGap =
//           window.innerWidth <= 768 ? cardGapMobile : cardGapDesktop;

//         const newPosition = prevPosition - (cardWidth + cardGap);
//         const maxOffset =
//           window.innerWidth <= 768
//             ? -(cardWidthMobile + cardGapMobile) * cards.length +
//               cardWidthMobile +
//               cardGapMobile
//             : -(100 + (cardGapDesktop * (cards.length - 1)) / 5);

//         return newPosition <= maxOffset ? 0 : newPosition;
//       });
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [cards.length]);

//   if (!isClient) return null; // Avoid rendering on the server

//   return (
//     <div className="w-full overflow-hidden px-4 py-8">
//       <div
//         className="flex transition-transform duration-700"
//         style={{
//           transform: `translateX(${position}%)`,
//           width: `calc(${
//             cards.length *
//             (window.innerWidth <= 768
//               ? cardWidthMobile + cardGapMobile
//               : cardWidthDesktop + cardGapDesktop)
//           }%)`,
//         }}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 card-mobile"
//             style={{
//               width: `${
//                 window.innerWidth <= 768 ? cardWidthMobile : cardWidthDesktop
//               }%`,
//               marginRight: `${
//                 window.innerWidth <= 768 ? cardGapMobile : cardGapDesktop
//               }%`,
//             }}
//           >
//             <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//               <div
//                 className="relative w-full"
//                 style={{
//                   height: window.innerWidth <= 768 ? "150px" : "150px",
//                 }}
//               >
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-t-lg"
//                 />
//               </div>
//               <div className="p-2">
//                 <h3 className="text-white text-sm font-medium truncate text-center">
//                   {card.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @media (max-width: 768px) {
//           .flex {
//             justify-content: center;
//           }
//           .card-mobile {
//             margin: 0 auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SliderCards;

"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderCard {
  image: string;
}

interface SliderCardsProps {
  cards: SliderCard[];
}

const SliderCards: React.FC<SliderCardsProps> = ({ cards }) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
        sliderRef.current.slickPlay();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderCard = (card: SliderCard, index: number) => (
    <div key={index} className="px-2">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mx-auto">
        <div className="relative w-full" style={{ paddingTop: "75%" }}>
          <Image
            src={card.image}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  const customSliderStyles = `
    .slick-slide {
      padding: 0 10px;
    }
    .slick-list {
      margin: 0 -10px;
    }
    .slick-track {
      display: flex !important;
    }
    .slick-slide > div {
      height: 100%;
    }
  `;

  return (
    <div className="w-full overflow-hidden px-4 py-12">
      <style>{customSliderStyles}</style>
      <Slider ref={sliderRef} {...sliderSettings}>
        {cards.map(renderCard)}
      </Slider>
    </div>
  );
};

export default SliderCards;
