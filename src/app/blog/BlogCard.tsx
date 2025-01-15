// // import React, { useRef, useEffect } from "react";
// // import gsap from "gsap";
// // import Image from "next/image";

// // interface BlogCardProps {
// //   title: string;
// //   category: string;
// //   date: string;
// //   image: string;
// //   description: string;
// // }

// // const BlogCard: React.FC<BlogCardProps> = ({
// //   title,
// //   category,
// //   date,
// //   image,
// //   description,
// // }) => {
// //   const cardRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const card = cardRef.current;
// //     if (card) {
// //       gsap.fromTo(
// //         card,
// //         { opacity: 0, y: 30 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: card,
// //             start: "top 90%",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   return (
// //     <div
// //       ref={cardRef}
// //       className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
// //     >
// //       <div className="relative h-48">
// //         <Image
// //           src={image || "/placeholder.svg"}
// //           alt={title}
// //           fill
// //           className="object-cover"
// //         />
// //       </div>
// //       <div className="p-6">
// //         <div className="flex items-center justify-between mb-2">
// //           <span className="text-sm font-medium text-red-400">{category}</span>
// //           <span className="text-sm text-gray-400">{date}</span>
// //         </div>
// //         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
// //         <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
// //         <button className="mt-4 text-red-400 font-medium hover:text-red-300 transition-colors">
// //           Read More
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogCard;

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// interface BlogCardProps {
//   title: string;
//   category: string;
//   date: string;
//   image: string;
//   description: string;
// }

// const BlogCard: React.FC<BlogCardProps> = ({
//   title,
//   category,
//   date,
//   image,
//   description,
// }) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (card) {
//       gsap.fromTo(
//         card,
//         { opacity: 0, y: 30 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 90%",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
//     >
//       <div className="relative h-48">
//         <Image
//           src={image || "/placeholder.svg"}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-2">
//           <span className="text-sm font-medium text-red-400">{category}</span>
//           <span className="text-sm text-gray-400">{date}</span>
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
//         <button className="mt-4 text-red-400 font-medium hover:text-red-300 transition-colors">
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  date,
  image,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-red-400">{category}</span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
        <button className="mt-4 text-red-400 font-medium hover:text-red-300 transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
