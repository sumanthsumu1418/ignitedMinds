"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Confetti from "react-confetti";

interface Partner {
  name: string;
  logo: string;
}

interface Milestone {
  count: string;
  label: string;
}

const partners: Partner[] = [
  { name: "Cognizant", logo: "/image/cognizant.svg" },
  { name: "HP", logo: "/image/hp.svg" },
  { name: "Bosch", logo: "/image/bosch.svg" },
  { name: "State Street", logo: "/image/state-street.svg" },
  { name: "Accenture", logo: "/image/accenture.svg" },
  { name: "Cognizant", logo: "/image/cognizant.svg" },
  { name: "HP", logo: "/image/hp.svg" },
  { name: "Bosch", logo: "/image/bosch.svg" },
  { name: "State Street", logo: "/image/state-street.svg" },
  { name: "Accenture", logo: "/image/accenture.svg" },
];

const milestones: Milestone[] = [
  { count: "800+", label: "Students Placed" },
  { count: "5+", label: "Years of Success Legacy" },
  { count: "5000+", label: "Students Trained" },
];

export default function Component() {
  const countRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 500,
          autoplaySpeed: 3000,
          cssEase: "ease",
        },
      },
    ],
  };

  useEffect(() => {
    const animateCounters = () => {
      countRefs.current.forEach((countRef, i) => {
        if (countRef) {
          gsap.fromTo(
            countRef,
            { textContent: "0" },
            {
              textContent: milestones[i].count,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              onUpdate: function () {
                countRef.innerText = `${Math.ceil(
                  parseFloat(this.targets()[0].textContent || "0")
                )}+`;
              },
              onComplete: () => {
                if (i === milestones.length - 1) {
                  setShowConfetti(true);
                  setTimeout(() => setShowConfetti(false), 5000);
                }
              },
            }
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    countRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderPartnerLogo = (partner: Partner) => (
    <div key={partner.name} className="px-4">
      <div className="w-full h-[100px] mx-auto flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={200}
          height={100}
          className="object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full py-12 bg-black text-white overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Partners Section */}
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
          <span className="relative inline-block text-red-500">
            Our Partners
            <Image
              src="/image/line1.png"
              alt=""
              width={200}
              height={10}
              className="absolute -bottom-2 left-0 w-full"
            />
            <Image
              src="/image/line2.png"
              alt=""
              width={200}
              height={10}
              className="absolute -bottom-1 left-0 w-full"
            />
          </span>
        </h2>
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...sliderSettings}>
            {partners.map(renderPartnerLogo)}
          </Slider>
        </div>

        {/* Milestones Section */}
        <div className="mt-16 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-16">
            Milestones Achieved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {milestones.map((milestone, index) => (
              <div key={milestone.label} className="flex flex-col items-center">
                <div
                  ref={(el) => {
                    countRefs.current[index] = el;
                  }}
                  className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
                >
                  0+
                </div>
                <div className="text-base md:text-xl font-semibold text-red-300">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
          {showConfetti && (
            <Confetti
              width={typeof window !== "undefined" ? window.innerWidth : 300}
              height={typeof window !== "undefined" ? window.innerHeight : 200}
              recycle={false}
              numberOfPieces={200}
            />
          )}
        </div>
      </div>
    </section>
  );
}
