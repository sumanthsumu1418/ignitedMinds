import React, { useRef, useEffect } from "react";
import { Heart } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  highlights,
  index,
}) => {
  const [liked, setLiked] = React.useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
          delay: index * 0.2,
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="w-full bg-gray-800 shadow-lg transition-all ease-in-out transform hover:scale-105 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 sm:h-56">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <button
          onClick={toggleLike}
          className="absolute top-2 right-2 w-10 h-10 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors flex items-center justify-center shadow-md"
          aria-label="Like"
        >
          <Heart
            className={`w-6 h-6 ${liked ? "text-red-500" : "text-white"}`}
          />
        </button>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 text-white"
          style={{
            fontFamily: "Lexend, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-300 mb-4"
          style={{
            fontFamily: "Lexend, sans-serif",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
        <ul className="space-y-2 mt-auto">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-400">
              <span className="text-red-500 mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
