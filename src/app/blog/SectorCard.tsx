import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

interface SectorCardProps {
  title: string;
  description: string;
  image: string;
}

const SectorCard: React.FC<SectorCardProps> = ({
  title,
  description,
  image,
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
      className="group relative overflow-hidden rounded-lg bg-gray-900 transition-transform hover:scale-105"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-30" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SectorCard;
