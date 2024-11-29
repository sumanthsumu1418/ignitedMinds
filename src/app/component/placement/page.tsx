// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";

// gsap.registerPlugin(TextPlugin);

// interface Partner {
//   name: string;
//   logo: string;
// }

// interface Milestone {
//   count: string;
//   label: string;
// }

// const partners: Partner[] = [
//   { name: "Cognizant", logo: "/image/cognizant.svg" },
//   { name: "HP", logo: "/image/hp.svg" },
//   { name: "Bosch", logo: "/image/bosch.svg" },
//   { name: "State Street", logo: "/image/state-street.svg" },
//   { name: "Accenture", logo: "/image/accenture.svg" },
// ];

// export default function Component() {
//   const countRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const partnerRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const animateCounters = () => {
//       countRefs.current.forEach((countRef, i) => {
//         if (countRef) {
//           gsap.fromTo(
//             countRef,
//             { textContent: "0" },
//             {
//               textContent: milestones[i].count,
//               duration: 2,
//               ease: "power1.out",
//               snap: { textContent: 1 },
//               onUpdate: function () {
//                 countRef.innerText = `${Math.ceil(
//                   parseFloat(this.targets()[0].textContent || "0")
//                 )}+`;
//               },
//             }
//           );
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateCounters();
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     countRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     if (!isMobile) {
//       partnerRefs.current.forEach((partnerRef, i) => {
//         if (partnerRef) {
//           gsap.fromTo(
//             partnerRef,
//             { opacity: 0, y: 20 },
//             {
//               opacity: 1,
//               y: 0,
//               delay: i * 0.2,
//               duration: 0.8,
//               ease: "power2.out",
//             }
//           );
//         }
//       });
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [isMobile]);

//   const renderPartnerLogo = (partner: Partner, index?: number) => (
//     <div
//       ref={
//         index !== undefined
//           ? (el) => {
//               partnerRefs.current[index] = el;
//             }
//           : undefined
//       }
//       key={partner.name}
//       className="bg-gray-900 p-4 md:p-6 rounded-[24px] shadow-sm w-full max-w-[150px] md:max-w-[200px] h-[100px] md:h-[120px] flex items-center justify-center transition-shadow"
//     >
//       <Image
//         src={partner.logo}
//         alt={`${partner.name} logo`}
//         width={100}
//         height={50}
//         className="object-contain"
//       />
//     </div>
//   );

//   return (
//     <section className="w-full py-12 md:py-24 bg-black text-white">
//       <div className="container px-4 md:px-6 mx-auto">
//         {/* Partners Section */}
//         <div className="mb-20">
//           <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">
//             <span className="relative inline-block">
//               Brands
//               <Image
//                 src="/image/line1.png"
//                 alt=""
//                 width={200}
//                 height={10}
//                 className="absolute -bottom-2 left-0 w-full"
//               />
//               <Image
//                 src="/image/line2.png"
//                 alt=""
//                 width={200}
//                 height={10}
//                 className="absolute -bottom-1 left-0 w-full"
//               />
//             </span>{" "}
//             that are our placement partners
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
//             {partners.map((partner, index) =>
//               renderPartnerLogo(partner, index)
//             )}
//           </div>
//         </div>

//         {/* Milestones Section */}
//         <div>
//           <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-16">
//             Milestones Achieved
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {milestones.map((milestone, index) => (
//               <div key={milestone.label} className="flex flex-col items-center">
//                 <div
//                   ref={(el) => {
//                     countRefs.current[index] = el;
//                   }}
//                   className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent"
//                 >
//                   0+
//                 </div>

//                 <div className="text-base md:text-xl font-semibold text-red-300">
//                   {milestone.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
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

  const renderPartnerLogo = (partner: Partner) => (
    <div key={partner.name} className="px-4">
      <div className="bg-gray-900 p-6 rounded-[24px] shadow-lg w-full max-w-[250px] h-[150px] mx-auto flex items-center justify-center transition-shadow hover:shadow-xl">
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full py-12 bg-black text-white">
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
        {isMobile ? (
          <Slider {...sliderSettings}>{partners.map(renderPartnerLogo)}</Slider>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
            {partners.map(renderPartnerLogo)}
          </div>
        )}

        {/* Milestones Section */}
        <div className="mt-16">
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

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { submitContactForm } from "../../../app/actions/contact";
// import WhatsAppButton from "../../WhatsAppButton";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const [submitStatus, setSubmitStatus] = useState<{
//     success: boolean;
//     message: string;
//   } | null>(null);

//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const buttonRef = useRef(null);
//   const formRef = useRef(null);
//   const alertRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

//     tl.fromTo(
//       headerRef.current,
//       { opacity: 0, y: -50 },
//       { opacity: 1, y: 0, delay: 0.2 }
//     )
//       .fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1 },
//         "<0.3"
//       )
//       .fromTo(
//         buttonRef.current,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0 },
//         "<0.2"
//       )
//       .fromTo(
//         formRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0 },
//         "<0.3"
//       );

//     const handleResize = () => {
//       const isMobile = window.innerWidth <= 768;
//       if (isMobile) {
//         gsap.to(headerRef.current, { fontSize: "3xl", duration: 0.5 });
//       } else {
//         gsap.to(headerRef.current, { fontSize: "5xl", duration: 0.5 });
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Please enter your full name";
//       isValid = false;
//     } else {
//       newErrors.fullName = "";
//     }

//     if (!formData.contactNumber.trim()) {
//       newErrors.contactNumber = "Please enter your contact number";
//       isValid = false;
//     } else {
//       newErrors.contactNumber = "";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     } else {
//       newErrors.email = "";
//     }

//     if (!formData.course) {
//       newErrors.course = "Please select a course";
//       isValid = false;
//     } else {
//       newErrors.course = "";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please enter a message";
//       isValid = false;
//     } else {
//       newErrors.message = "";
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitStatus(null);

//     if (!validateForm()) {
//       gsap.to(alertRef.current, {
//         y: 20,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//         onComplete: () => {
//           gsap.to(alertRef.current, {
//             y: 0,
//             opacity: 0,
//             duration: 0.5,
//             delay: 3,
//           });
//         },
//       });
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     const result = await submitContactForm(formDataToSend);
//     setSubmitStatus(result);

//     if (result.success) {
//       setFormData({
//         fullName: "",
//         contactNumber: "",
//         email: "",
//         course: "",
//         message: "",
//       });
//       gsap.to(alertRef.current, {
//         y: 20,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//         onComplete: () => {
//           gsap.to(alertRef.current, {
//             y: 0,
//             opacity: 0,
//             duration: 0.5,
//             delay: 3,
//           });
//         },
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 relative text-white">
//       <WhatsAppButton />
//       <div
//         ref={alertRef}
//         className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg opacity-0 z-50"
//       >
//         {submitStatus?.success
//           ? submitStatus.message
//           : "Please fill out all required fields"}
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="text-center md:text-left space-y-8" ref={headerRef}>
//           <div className="space-y-4">
//             <div className="w-12 h-1 bg-red-600 hidden md:block" />
//             <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
//               Get in Touch
//             </h1>
//             <p className="text-lg text-red-300 max-w-md mx-auto md:mx-0">
//               Would you like to speak to one of our consultants over the phone?
//             </p>
//           </div>

//           <div
//             className="relative w-full max-w-md mx-auto md:mx-0 h-[300px]"
//             ref={imageRef}
//           >
//             <img
//               src="/placeholder.svg?height=300&width=400"
//               alt="Consultant illustration"
//               className="w-full h-full object-contain filter drop-shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="w-full max-w-xl relative">
//           <div className="absolute -top-3 right-4 z-10">
//             <div className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium relative animate-pulse">
//               Join us now!
//             </div>
//           </div>

//           <div
//             className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-[2rem] p-8 shadow-xl"
//             ref={formRef}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 Want us to call back?
//               </h2>

//               <div className="space-y-5">
//                 <div>
//                   <label htmlFor="fullName" className="block text-red-300 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     id="fullName"
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, fullName: e.target.value })
//                     }
//                     className={`w-full px-4 py-2 bg-gray-700 border ${
//                       errors.fullName ? "border-red-500" : "border-gray-600"
//                     } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                   />
//                   {errors.fullName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.fullName}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="contactNumber"
//                       className="block text-red-300 mb-2"
//                     >
//                       Contact Number
//                     </label>
//                     <input
//                       id="contactNumber"
//                       type="tel"
//                       placeholder="Your number"
//                       value={formData.contactNumber}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           contactNumber: e.target.value,
//                         })
//                       }
//                       className={`w-full px-4 py-2 bg-gray-700 border ${
//                         errors.contactNumber
//                           ? "border-red-500"
//                           : "border-gray-600"
//                       } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                     />
//                     {errors.contactNumber && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.contactNumber}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-red-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Your email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       className={`w-full px-4 py-2 bg-gray-700 border ${
//                         errors.email ? "border-red-500" : "border-gray-600"
//                       } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-red-300 mb-3">
//                     SELECT COURSE
//                   </label>
//                   <div className="space-y-3">
//                     {[
//                       "ORACLE",
//                       "AWS DEVOPS",
//                       "PYTHON BIG DATA",
//                       "JAVA FULL STACK",
//                     ].map((course) => (
//                       <label
//                         key={course}
//                         className="flex items-center space-x-3 text-red-200"
//                       >
//                         <input
//                           type="radio"
//                           name="course"
//                           value={course}
//                           checked={formData.course === course}
//                           onChange={() => setFormData({ ...formData, course })}
//                           className="w-4 h-4 text-red-600 border-gray-700 focus:ring-red-500"
//                         />
//                         <span>{course}</span>
//                       </label>
//                     ))}
//                   </div>
//                   {errors.course && (
//                     <p className="text-red-500 text-sm mt-1">{errors.course}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-red-300 mb-2">
//                     MESSAGE
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Your text here"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className={`w-full px-4 py-2 bg-gray-700 border ${
//                       errors.message ? "border-red-500" : "border-gray-600"
//                     } rounded-lg focus:outline-none focus:border-red-500 h-32 resize-none text-white transition-colors duration-300`}
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                 ref={buttonRef}
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-red-300 text-xl font-medium max-w-2xl mx-auto">
//         Strengthen your career prospects and get placed in renowned companies
//       </div>

//       {/* Layer images displayed below the contact form */}
//       <div className="mt-8 flex justify-around items-center gap-4 px-4 md:px-0">
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 1"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 2"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 3"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { submitContactForm } from "../../actions/contact";
// import WhatsAppButton from "../../component/WhatsAppButton";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const [submitStatus, setSubmitStatus] = useState<{
//     success: boolean;
//     message: string;
//   } | null>(null);

//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const buttonRef = useRef(null);
//   const formRef = useRef(null);
//   const alertRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

//     tl.fromTo(
//       headerRef.current,
//       { opacity: 0, y: -50 },
//       { opacity: 1, y: 0, delay: 0.2 }
//     )
//       .fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1 },
//         "<0.3"
//       )
//       .fromTo(
//         buttonRef.current,
//         { opacity: 0, x: 50 },
//         { opacity: 1, x: 0 },
//         "<0.2"
//       )
//       .fromTo(
//         formRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0 },
//         "<0.3"
//       );

//     const handleResize = () => {
//       const isMobile = window.innerWidth <= 768;
//       if (isMobile) {
//         gsap.to(headerRef.current, { fontSize: "3xl", duration: 0.5 });
//       } else {
//         gsap.to(headerRef.current, { fontSize: "5xl", duration: 0.5 });
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Please enter your full name";
//       isValid = false;
//     } else {
//       newErrors.fullName = "";
//     }

//     if (!formData.contactNumber.trim()) {
//       newErrors.contactNumber = "Please enter your contact number";
//       isValid = false;
//     } else {
//       newErrors.contactNumber = "";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Please enter your email";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     } else {
//       newErrors.email = "";
//     }

//     if (!formData.course) {
//       newErrors.course = "Please select a course";
//       isValid = false;
//     } else {
//       newErrors.course = "";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Please enter a message";
//       isValid = false;
//     } else {
//       newErrors.message = "";
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setSubmitStatus(null);

//     if (!validateForm()) {
//       gsap.to(alertRef.current, {
//         y: 20,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//         onComplete: () => {
//           gsap.to(alertRef.current, {
//             y: 0,
//             opacity: 0,
//             duration: 0.5,
//             delay: 3,
//           });
//         },
//       });
//       return;
//     }

//     const formDataToSend = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataToSend.append(key, value);
//     });

//     const result = await submitContactForm(formDataToSend);
//     setSubmitStatus(result);

//     if (result.success) {
//       setFormData({
//         fullName: "",
//         contactNumber: "",
//         email: "",
//         course: "",
//         message: "",
//       });
//       gsap.to(alertRef.current, {
//         y: 20,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.out",
//         onComplete: () => {
//           gsap.to(alertRef.current, {
//             y: 0,
//             opacity: 0,
//             duration: 0.5,
//             delay: 3,
//           });
//         },
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 relative text-white">
//       <WhatsAppButton />
//       <div
//         ref={alertRef}
//         className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg opacity-0 z-50"
//       >
//         {submitStatus?.success
//           ? submitStatus.message
//           : "Please fill out all required fields"}
//       </div>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="text-center md:text-left space-y-8" ref={headerRef}>
//           <div className="space-y-4">
//             <div className="w-12 h-1 bg-red-600 hidden md:block" />
//             <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
//               Get in Touch
//             </h1>
//             <p className="text-lg text-red-300 max-w-md mx-auto md:mx-0">
//               Would you like to speak to one of our consultants over the phone?
//             </p>
//           </div>

//           <div
//             className="relative w-full max-w-md mx-auto md:mx-0 h-[300px]"
//             ref={imageRef}
//           >
//             <img
//               src="/placeholder.svg?height=300&width=400"
//               alt="Consultant illustration"
//               className="w-full h-full object-contain filter drop-shadow-lg"
//             />
//           </div>
//         </div>

//         <div className="w-full max-w-xl relative">
//           <div className="absolute -top-3 right-4 z-10">
//             <div className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium relative animate-pulse">
//               Join us now!
//             </div>
//           </div>

//           <div
//             className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-[2rem] p-8 shadow-xl"
//             ref={formRef}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <h2 className="text-2xl font-bold text-white mb-6">
//                 Want us to call back?
//               </h2>

//               <div className="space-y-5">
//                 <div>
//                   <label htmlFor="fullName" className="block text-red-300 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     id="fullName"
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, fullName: e.target.value })
//                     }
//                     className={`w-full px-4 py-2 bg-gray-700 border ${
//                       errors.fullName ? "border-red-500" : "border-gray-600"
//                     } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                   />
//                   {errors.fullName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.fullName}
//                     </p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="contactNumber"
//                       className="block text-red-300 mb-2"
//                     >
//                       Contact Number
//                     </label>
//                     <input
//                       id="contactNumber"
//                       type="tel"
//                       placeholder="Your number"
//                       value={formData.contactNumber}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           contactNumber: e.target.value,
//                         })
//                       }
//                       className={`w-full px-4 py-2 bg-gray-700 border ${
//                         errors.contactNumber
//                           ? "border-red-500"
//                           : "border-gray-600"
//                       } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                     />
//                     {errors.contactNumber && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.contactNumber}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-red-300 mb-2">
//                       Email
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Your email"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({ ...formData, email: e.target.value })
//                       }
//                       className={`w-full px-4 py-2 bg-gray-700 border ${
//                         errors.email ? "border-red-500" : "border-gray-600"
//                       } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-red-300 mb-3">
//                     SELECT COURSE
//                   </label>
//                   <div className="space-y-3">
//                     {[
//                       "ORACLE",
//                       "AWS DEVOPS",
//                       "PYTHON BIG DATA",
//                       "JAVA FULL STACK",
//                     ].map((course) => (
//                       <label
//                         key={course}
//                         className="flex items-center space-x-3 text-red-200"
//                       >
//                         <input
//                           type="radio"
//                           name="course"
//                           value={course}
//                           checked={formData.course === course}
//                           onChange={() => setFormData({ ...formData, course })}
//                           className="w-4 h-4 text-red-600 border-gray-700 focus:ring-red-500"
//                         />
//                         <span>{course}</span>
//                       </label>
//                     ))}
//                   </div>
//                   {errors.course && (
//                     <p className="text-red-500 text-sm mt-1">{errors.course}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-red-300 mb-2">
//                     MESSAGE
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Your text here"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className={`w-full px-4 py-2 bg-gray-700 border ${
//                       errors.message ? "border-red-500" : "border-gray-600"
//                     } rounded-lg focus:outline-none focus:border-red-500 h-32 resize-none text-white transition-colors duration-300`}
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//                 ref={buttonRef}
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-red-300 text-xl font-medium max-w-2xl mx-auto">
//         Strengthen your career prospects and get placed in renowned companies
//       </div>

//       {/* Layer images displayed below the contact form */}
//       <div className="mt-8 flex justify-around items-center gap-4 px-4 md:px-0">
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 1"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 2"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//         <img
//           src="/placeholder.svg?height=32&width=32"
//           alt="Layer 3"
//           className="w-16 md:w-24 lg:w-32 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// }
