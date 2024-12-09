// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { submitContactForm } from "../actions/contact";
// import WhatsAppButton from "../component/WhatsAppButton";

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
//     }

//     gsap.to(alertRef.current, {
//       y: 20,
//       opacity: 1,
//       duration: 0.5,
//       ease: "power2.out",
//       onComplete: () => {
//         gsap.to(alertRef.current, {
//           y: 0,
//           opacity: 0,
//           duration: 0.5,
//           delay: 3,
//         });
//       },
//     });
//   };

//   return (
//     <div className="min-h-screen bg-black p-4 md:p-8 relative text-white">
//       <WhatsAppButton />
//       <div
//         ref={alertRef}
//         className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg opacity-0 z-50 ${
//           submitStatus?.success
//             ? "bg-green-500 text-white"
//             : "bg-red-500 text-white"
//         }`}
//       >
//         {submitStatus?.message || "Please fill out all required fields"}
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
//             <Image
//               src="/image/contact.png"
//               alt="Consultant illustration"
//               layout="fill"
//               objectFit="contain"
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
//                       "React",
//                       "AWS Cloud Engineering",
//                       "Python Data Engineering",
//                       "Java Full Stack",
//                       "Data Analyst",
//                       "Snowflake/ETL Testing",
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

//       <div className="mt-8 flex justify-around items-center gap-4 px-4 md:px-0">
//         <Image
//           src="/image/layer1.png"
//           alt="Layer 1"
//           width={128}
//           height={128}
//           className="w-16 md:w-24 lg:w-32 object-contain hover:scale-110 transition-transform duration-300"
//         />
//         <Image
//           src="/image/layer2.png"
//           alt="Layer 2"
//           width={128}
//           height={128}
//           className="w-16 md:w-24 lg:w-32 object-contain hover:scale-110 transition-transform duration-300"
//         />
//         <Image
//           src="/image/layer3.png"
//           alt="Layer 3"
//           width={128}
//           height={128}
//           className="w-16 md:w-24 lg:w-32 object-contain hover:scale-110 transition-transform duration-300"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { submitContactForm } from "../actions/contact";
import WhatsAppButton from "../component/WhatsAppButton";

const formAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const inputAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Sign() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    course: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const formRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");

    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        controls.start({ fontSize: "3xl", transition: { duration: 0.5 } });
      } else {
        controls.start({ fontSize: "5xl", transition: { duration: 0.5 } });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [controls]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
      isValid = false;
    } else {
      newErrors.fullName = "";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Please enter your contact number";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.contactNumber.trim())) {
      newErrors.contactNumber = "Please enter a valid 10-digit number";
      isValid = false;
    } else {
      newErrors.contactNumber = "";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
      isValid = false;
    } else {
      newErrors.course = "";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) {
      controls.start({
        y: [0, 20, 0],
        opacity: [0, 1, 0],
        transition: { duration: 1.5, times: [0, 0.2, 1] },
      });
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    const result = await submitContactForm(formDataToSend);
    setSubmitStatus(result);

    if (result.success) {
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        course: "",
        message: "",
      });
    }

    controls.start({
      y: [0, 20, 0],
      opacity: [0, 1, 0],
      transition: { duration: 1.5, times: [0, 0.2, 1] },
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formAnimation}
      className="min-h-screen bg-black p-4 md:p-8 relative text-white"
    >
      <WhatsAppButton />

      <motion.div
        animate={controls}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 ${
          submitStatus?.success ? "bg-green-500" : "bg-red-500"
        } text-white opacity-0`}
      >
        {submitStatus?.message || "Please fill out all required fields"}
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          ref={headerRef}
          variants={formAnimation}
          className="text-center md:text-left space-y-8"
        >
          <div className="space-y-4">
            <div className="w-12 h-1 bg-red-600 hidden md:block" />
            <motion.h1
              animate={controls}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500"
            >
              Start Your Journey
            </motion.h1>
            <p className="text-lg text-red-300 max-w-md mx-auto md:mx-0">
              Fill out the form below to begin your IT career transformation
            </p>
          </div>

          <motion.div
            ref={imageRef}
            variants={formAnimation}
            className="relative w-full max-w-md mx-auto md:mx-0 h-[300px]"
          >
            <Image
              src="/image/contact.png"
              alt="Start your IT career journey"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={formAnimation}
          className="w-full max-w-xl relative"
        >
          <div className="absolute -top-3 right-4 z-10">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-2 rounded-full text-white font-medium"
            >
              Register Now!
            </motion.div>
          </div>

          <motion.div
            ref={formRef}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-[2rem] p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={inputAnimation} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-red-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={`w-full px-4 py-2 bg-gray-700 border ${
                      errors.fullName ? "border-red-500" : "border-gray-600"
                    } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-red-300 mb-2"
                    >
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      type="tel"
                      placeholder="Your number"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        })
                      }
                      className={`w-full px-4 py-2 bg-gray-700 border ${
                        errors.contactNumber
                          ? "border-red-500"
                          : "border-gray-600"
                      } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
                    />
                    {errors.contactNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-red-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-2 bg-gray-700 border ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      } rounded-lg focus:outline-none focus:border-red-500 text-white transition-colors duration-300`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-red-300 mb-3">
                    SELECT COURSE
                  </label>
                  <div className="space-y-3">
                    {[
                      "React",
                      "AWS Cloud Engineering",
                      "Python Data Engineering",
                      "Java Full Stack",
                      "Data Analyst",
                      "Snowflake/ETL Testing",
                    ].map((course) => (
                      <label
                        key={course}
                        className="flex items-center space-x-3 text-red-200"
                      >
                        <input
                          type="radio"
                          name="course"
                          value={course}
                          checked={formData.course === course}
                          onChange={() => setFormData({ ...formData, course })}
                          className="w-4 h-4 text-red-600 border-gray-700 focus:ring-red-500"
                        />
                        <span>{course}</span>
                      </label>
                    ))}
                  </div>
                  {errors.course && (
                    <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-red-300 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your text here"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-2 bg-gray-700 border ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    } rounded-lg focus:outline-none focus:border-red-500 h-32 resize-none text-white transition-colors duration-300`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
              </motion.div>

              <motion.button
                ref={buttonRef}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                SUBMIT
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={formAnimation}
        className="text-center mt-8 text-red-300 text-xl font-medium max-w-2xl mx-auto"
      >
        Transform your career with our industry-leading IT training programs
      </motion.div>

      <motion.div
        variants={formAnimation}
        className="mt-8 flex justify-around items-center gap-4 px-4 md:px-0"
      >
        {[1, 2, 3].map((num) => (
          <motion.div
            key={num}
            whileHover={{ scale: 1.1 }}
            className="relative w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32"
          >
            <Image
              src={`/image/layer${num}.png`}
              alt={`Partner Logo ${num}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
