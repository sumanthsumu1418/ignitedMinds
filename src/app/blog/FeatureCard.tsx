import React, { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";
import gsap from "gsap";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  index,
}) => {
  const [liked, setLiked] = useState(false);
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
      className="w-full max-w-[400px] bg-gray-900 shadow-lg transition-all ease-in-out transform hover:scale-105 rounded-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 sm:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
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
      <div className="p-6 bg-gray-900 flex-1 flex flex-col justify-between">
        <h3
          className="text-xl sm:text-2xl font-bold mb-3 text-white"
          style={{
            fontFamily: "Lexend, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-300"
          style={{
            fontFamily: "Lexend, sans-serif",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
