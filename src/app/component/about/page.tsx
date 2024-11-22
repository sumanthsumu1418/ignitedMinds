// import Image from "next/image";

// export default function About() {
//   return (
//     <section className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-6 md:p-12">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading Section */}
//         <div className="flex flex-col items-center text-center gap-3 mb-12">
//           <h1
//             className="text-3xl md:text-5xl font-bold text-gray-800"
//             style={{
//               fontFamily: "var(--fontfamilyFont3)",
//               fontSize: "56.81px",
//               fontWeight: "700",
//               lineHeight: "73.85px",
//             }}
//           >
//             08 reasons why Ignited Minds{" "}
//             <span className="relative inline-block">
//               is every{" "}
//               <svg
//                 width="200"
//                 height="17"
//                 viewBox="0 0 547 17"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute bottom-[-5px] left-0"
//                 style={{ width: "100%" }}
//               >
//                 <g clipPath="url(#clip0_83_159)">
//                   <path
//                     d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
//                     stroke="url(#paint0_linear_83_159)"
//                     strokeWidth="2.64342"
//                   />
//                   <path
//                     d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
//                     stroke="url(#paint1_linear_83_159)"
//                     strokeWidth="2.64342"
//                   />
//                 </g>
//                 <defs>
//                   <linearGradient
//                     id="paint0_linear_83_159"
//                     x1="42.3283"
//                     y1="10.3379"
//                     x2="49.6943"
//                     y2="44.6203"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#0063F4" />
//                     <stop offset="1" stopColor="#00F0AA" />
//                   </linearGradient>
//                   <linearGradient
//                     id="paint1_linear_83_159"
//                     x1="1.32172"
//                     y1="6.40797"
//                     x2="9.48162"
//                     y2="48.5804"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#0063F4" />
//                     <stop offset="1" stopColor="#00F0AA" />
//                   </linearGradient>
//                   <clipPath id="clip0_83_159">
//                     <rect
//                       width="546.67"
//                       height="15.8605"
//                       fill="white"
//                       transform="translate(0 0.399902)"
//                     />
//                   </clipPath>
//                 </defs>
//               </svg>
//             </span>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 border-b-2 border-cyan-400">
//               Student&apos;s Choice
//             </span>
//           </h1>
//         </div>

//         {/* Content Section */}
//         <div className="grid md:grid-cols-2 gap-8 md:gap-12">
//           {/* Left Column - Images */}
//           <div className="flex flex-col md:flex-row md:relative md:h-[600px] gap-6 md:gap-0 items-center">
//             <Image
//               src="/image/about1.jpg.jpg"
//               alt="Student with books"
//               width={222}
//               height={222}
//               quality={100}
//               className="object-cover rounded-tl-md md:absolute md:top-[-51px] md:left-[52px]"
//             />
//             <Image
//               src="/image/about2.jpg.jpg"
//               alt="Student studying"
//               width={264}
//               height={396}
//               quality={100}
//               className="object-cover rounded-tl-md md:absolute md:top-[195px] md:left-[12px]"
//             />
//             <Image
//               src="/image/about3.jpg.jpg"
//               alt="Student with laptop"
//               width={320}
//               height={435}
//               quality={100}
//               className="object-cover rounded-tl-md md:absolute md:top-[100px] md:right-[-40px] md:z-10"
//             />
//           </div>

//           {/* Right Column - Features */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
//             <div className="space-y-7">
//               <h3 className="text-black font-semibold">
//                 Skilled & Certified Faculty
//               </h3>
//               <h3 className="text-black font-semibold">100% Job Assistance</h3>
//               <h3 className="text-black font-semibold">Value for your Money</h3>
//               <h3 className="text-black font-semibold">
//                 1-on-1 mentorship with dedicated Placement Managers
//               </h3>
//             </div>
//             <div className="space-y-7">
//               <h3 className="text-black font-semibold">
//                 Special attention given to each student
//               </h3>
//               <h3 className="text-black font-semibold">
//                 Digital Certification after Completion
//               </h3>
//               <h3 className="text-black font-semibold">
//                 Highly practical oriented training
//               </h3>
//               <h3 className="text-black font-semibold">
//                 Learn anytime, anywhere, with any device
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-purple-50 to-purple-200 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold text-gray-800"
            style={{
              fontFamily: "var(--fontfamilyFont3)",
              fontSize: "56.81px",
              fontWeight: "700",
              lineHeight: "73.85px",
            }}
          >
            08 reasons why Ignited Minds{" "}
            <span className="relative inline-block">
              is every{" "}
              <svg
                width="200"
                height="17"
                viewBox="0 0 547 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-5px] left-0"
                style={{ width: "100%" }}
              >
                <g clipPath="url(#clip0_83_159)">
                  <path
                    d="M42.3283 13.8732C95.418 9.72367 205.259 3.03559 219.905 9.47959"
                    stroke="url(#paint0_linear_83_159)"
                    strokeWidth="2.64342"
                  />
                  <path
                    d="M1.32172 10.7207C64.5413 5.8389 201.159 -2.16728 241.873 4.86253"
                    stroke="url(#paint1_linear_83_159)"
                    strokeWidth="2.64342"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_83_159"
                    x1="42.3283"
                    y1="10.3379"
                    x2="49.6943"
                    y2="44.6203"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0063F4" />
                    <stop offset="1" stopColor="#00F0AA" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_83_159"
                    x1="1.32172"
                    y1="6.40797"
                    x2="9.48162"
                    y2="48.5804"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0063F4" />
                    <stop offset="1" stopColor="#00F0AA" />
                  </linearGradient>
                  <clipPath id="clip0_83_159">
                    <rect
                      width="546.67"
                      height="15.8605"
                      fill="white"
                      transform="translate(0 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 border-b-2 border-cyan-400">
              Student&apos;s Choice
            </span>
          </h1>
        </div>

        {/* Content Section */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Left Column - Images */}
      <div className="flex flex-col md:flex-row md:relative md:h-[600px] gap-6 md:gap-0 items-center">
        <Image
          src="/image/about2.jpg.jpg"
          alt="Student with books"
          width={222}
          height={222}
          quality={100}
          className="object-cover rounded-tl-md md:absolute md:top-[-51px] md:left-[300px]"
        />
        <Image
          src="/image/about3.jpg.jpg"
          alt="Student studying"
          width={264}
          height={396}
          quality={100}
          className="object-cover rounded-tl-md md:absolute md:top-[195px] md:left-[100px]"
        />
      </div>

      {/* Right Column - Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-12">
        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">1.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Skilled & Certified Faculty
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">2.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              100% Job Assistance
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">3.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Value for your Money
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">4.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              1-on-1 mentorship with dedicated Placement Managers
            </h3>
          </div>
        </div>
        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">5.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Special attention given to each student
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">6.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Digital Certification after Completion
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">7.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Highly practical oriented training
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-4xl text-cyan-500">8.</span>
            <h3 className="text-lg md:text-2xl text-black font-semibold">
              Learn anytime, anywhere, with any device
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
