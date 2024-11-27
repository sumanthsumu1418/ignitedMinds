import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--fontfamilyFont3)", lineHeight: "1.3" }}
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
                    <stop stopColor="#FF0000" />
                    <stop offset="1" stopColor="#FF6666" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_83_159"
                    x1="1.32172"
                    y1="6.40797"
                    x2="9.48162"
                    y2="48.5804"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF0000" />
                    <stop offset="1" stopColor="#FF6666" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 border-b-2 border-red-500">
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
            {[
              "Skilled & Certified Faculty",
              "100% Job Assistance",
              "Value for your Money",
              "1-on-1 mentorship with dedicated Placement Managers",
              "Special attention given to each student",
              "Digital Certification after Completion",
              "Highly practical oriented training",
              "Learn anytime, anywhere, with any device",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="font-semibold text-4xl text-red-500">
                  {index + 1}.
                </span>
                <h3 className="text-lg md:text-xl text-white font-semibold">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
