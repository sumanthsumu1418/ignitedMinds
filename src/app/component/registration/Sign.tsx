// "use client";

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import gsap from "gsap";

// export default function Register_1() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
//   const imageRef = useRef(null);
//   const buttonRef = useRef(null);
//   const formRef = useRef(null);

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

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form submitted:", formData);
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("/api/sendEmail", formData);
//       alert(response.data.message);
//     } catch (error: any) {
//       alert(error.response?.data?.message || "Something went wrong!");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-4 md:p-8 relative "
//       ref={containerRef}
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         <div className="text-center md:text-left space-y-8" ref={headerRef}>
//           <div className="space-y-4">
//             <div className="w-12 h-1 bg-purple-600 hidden md:block" />
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//               Get in Touch
//             </h1>
//             <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
//               Would you like to speak to one of our consultants over the phone?
//             </p>
//           </div>

//           <div
//             className="relative w-full max-w-md mx-auto md:mx-0 h-[300px]"
//             ref={imageRef}
//           >
//             <img
//               src="/image/contact.png"
//               alt="Consultant illustration"
//               className="w-full h-full object-contain"
//             />
//           </div>
//         </div>

//         <div className="w-full max-w-xl relative">
//           <div className="absolute -top-3 right-4 z-10">
//             <div className="bg-white px-6 py-2 rounded-full text-[#a855f7] font-medium relative">
//               Join us now!
//             </div>
//           </div>

//           <div
//             className="bg-[#e9d5ff] rounded-[2rem] p-8 shadow-lg"
//             ref={formRef}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 Want us to call back?
//               </h2>

//               <div className="space-y-5">
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="block text-gray-700 mb-2"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     id="fullName"
//                     type="text"
//                     value={formData.fullName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, fullName: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="contactNumber"
//                       className="block text-gray-700 mb-2"
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
//                       className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-gray-700 mb-2">
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
//                       className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-gray-700 mb-3">
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
//                         className="flex items-center space-x-3 text-gray-500"
//                       >
//                         <input
//                           type="radio"
//                           name="course"
//                           value={course}
//                           checked={formData.course === course}
//                           onChange={() => setFormData({ ...formData, course })}
//                           className="w-4 h-4 text-[#a855f7] border-gray-300 focus:ring-[#a855f7]"
//                         />
//                         <span>{course}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-700 mb-2">
//                     MESSAGE
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Your text here"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7] h-32 resize-none"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#a855f7] text-white py-3 rounded-lg hover:bg-[#9333ea] transition-colors"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-gray-800 text-xl font-medium max-w-2xl mx-auto">
//         Strengthen your career prospects and get placed in renowned companies
//       </div>

//       {/* Layer images displayed below the contact form */}
//       <div className="mt-8 flex justify-around items-center gap-4 px-4 md:px-0">
//         <img
//           src="/image/layer1.png"
//           alt="Layer 1"
//           className="w-16 md:w-24 lg:w-32 object-contain"
//         />
//         <img
//           src="/image/layer2.png"
//           alt="Layer 2"
//           className="w-16 md:w-24 lg:w-32 object-contain"
//         />
//         <img
//           src="/image/layer3.png"
//           alt="Layer 3"
//           className="w-16 md:w-24 lg:w-32 object-contain"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import gsap from "gsap";

export default function Register_1() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    course: "",
    message: "",
  });

  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, delay: 0.2 }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1 },
        "<0.3"
      )
      .fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        "<0.3"
      );
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/sendEmail", formData);
      alert(response.data.message);
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-4 md:p-8 relative "
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left space-y-8" ref={headerRef}>
          <div className="space-y-4">
            <div className="w-12 h-1 bg-purple-600 hidden md:block" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
              Would you like to speak to one of our consultants over the phone?
            </p>
          </div>
          <div
            className="relative w-full max-w-md mx-auto md:mx-0 h-[300px]"
            ref={imageRef}
          >
            <img
              src="/image/contact.png"
              alt="Consultant illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-full max-w-xl relative">
          <div
            className="bg-[#e9d5ff] rounded-[2rem] p-8 shadow-lg"
            ref={formRef}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Want us to call back?
              </h2>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-gray-700 mb-2"
                    >
                      Contact Number
                    </label>
                    <input
                      id="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-3">
                    Select Course
                  </label>
                  <div className="space-y-3">
                    {[
                      "ORACLE",
                      "AWS DEVOPS",
                      "PYTHON BIG DATA",
                      "JAVA FULL STACK",
                    ].map((course) => (
                      <label
                        key={course}
                        className="flex items-center space-x-3 text-gray-500"
                      >
                        <input
                          type="radio"
                          name="course"
                          value={course}
                          checked={formData.course === course}
                          onChange={() => setFormData({ ...formData, course })}
                          className="w-4 h-4 text-[#a855f7] border-gray-300 focus:ring-[#a855f7]"
                        />
                        <span>{course}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#a855f7] h-32 resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#a855f7] text-white py-3 rounded-lg hover:bg-[#9333ea] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import axios from "axios";

// export default function Register_1() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     contactNumber: "",
//     email: "",
//     course: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post("/api/sendEmail", formData);
//       alert(response.data.message);
//       setFormData({
//         fullName: "",
//         contactNumber: "",
//         email: "",
//         course: "",
//         message: "",
//       });
//     } catch (error: any) {
//       console.error("Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-4 md:p-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Full Name
//             </label>
//             <input
//               type="text"
//               value={formData.fullName}
//               onChange={(e) =>
//                 setFormData({ ...formData, fullName: e.target.value })
//               }
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Contact Number
//             </label>
//             <input
//               type="tel"
//               value={formData.contactNumber}
//               onChange={(e) =>
//                 setFormData({ ...formData, contactNumber: e.target.value })
//               }
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Course
//             </label>
//             <select
//               value={formData.course}
//               onChange={(e) =>
//                 setFormData({ ...formData, course: e.target.value })
//               }
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
//             >
//               <option value="">Select a course</option>
//               <option value="ORACLE">ORACLE</option>
//               <option value="AWS DEVOPS">AWS DEVOPS</option>
//               <option value="PYTHON BIG DATA">PYTHON BIG DATA</option>
//               <option value="JAVA FULL STACK">JAVA FULL STACK</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({ ...formData, message: e.target.value })
//               }
//               required
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
//               rows={5}
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg disabled:opacity-50"
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
