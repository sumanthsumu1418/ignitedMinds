"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

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
];

const milestones: Milestone[] = [
  { count: "800+", label: "Students Placed" },
  { count: "5+", label: "Years of Success Legacy" },
  { count: "5000+", label: "Students Trained" },
];

export default function Component() {
  const countRefs = useRef<(HTMLDivElement | null)[]>([]);
  const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

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

    if (!isMobile) {
      partnerRefs.current.forEach((partnerRef, i) => {
        if (partnerRef) {
          gsap.fromTo(
            partnerRef,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              delay: i * 0.2,
              duration: 0.8,
              ease: "power2.out",
            }
          );
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  const renderPartnerLogo = (partner: Partner, index?: number) => (
    <div
      ref={
        index !== undefined
          ? (el) => {
              partnerRefs.current[index] = el;
            }
          : undefined
      }
      key={partner.name}
      className="bg-gray-900 p-4 md:p-6 rounded-[24px] shadow-sm w-full max-w-[150px] md:max-w-[200px] h-[100px] md:h-[120px] flex items-center justify-center transition-shadow"
    >
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        width={100}
        height={50}
        className="object-contain"
      />
    </div>
  );

  return (
    <section className="w-full py-12 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Partners Section */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
            <span className="relative inline-block">
              Brands
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
            </span>{" "}
            that are our placement partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {partners.map((partner, index) =>
              renderPartnerLogo(partner, index)
            )}
          </div>
        </div>

        {/* Milestones Section */}
        <div>
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
        </div>
      </div>
    </section>
  );
}
