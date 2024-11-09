import { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer
            className="relative w-full py-12 bg-cover bg-center"
            style={{ backgroundImage: "url('/image/FooterBackground.png')" }}
        >
            <div className="max-w-7xl mx-auto px-10 grid  sm:grid-cols-12 gap-4">

                {/* Logo and Social Media Links */}
                <div className="sm:col-span-3 flex flex-col items-center md:items-start space-y-2">
                    <img src="/image/logo.png" alt="Ignited Minds Logo" className="ml-6 h-60 w-auto" />
                    <img
                        src="/image/SocialMedia.png"
                        alt="Social Media"
                        className="h-10 w-auto relative ml-12 "
                    />
                </div>

                {/* Contact Information */}
                <div className="sm:col-span-2 text-center md:text-left md:ml-0">
                    <h3 className="text-5xl font-bold text-black mt-6">
                        Let's<br /> Connect.
                    </h3>
                    <p className="mt-8 text-black text-xs flex items-center justify-center md:justify-start space-x-2">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="/image/Map.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>
                            #136, 2nd Main Rd, 4th Phase, <br />
                            Yelahanka New Town, Bengaluru, <br />
                            560064, Karnataka
                        </span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start mt-4 space-x-2 text-black text-sm">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="/image/Phone.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>+91-8296068323</span>
                    </p>
                    <p className="flex items-center justify-center md:justify-start mt-2 space-x-2 text-black text-xs">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="/image/email.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>email@gmail.com</span>
                    </p>
                </div>
                {/* Useful Links */}
                <div className="sm:col-span-2 text-center md:text-left mt-8 md:mt-8 sm:ml-12">
                    <h4 className="text-lg font-semibold mt-10 text-black">Useful Link</h4>
                    <ul className="space-y-6 text-black text-sm pt-4">
                        <li><a href="#" className="hover:text-purple-700">About Us</a></li>
                        <li><a href="#" className="hover:text-purple-700">Courses</a></li>
                        <li><a href="#" className="hover:text-purple-700">Placements</a></li>
                        <li><a href="#" className="hover:text-purple-700">Blog</a></li>
                        <li><a href="#" className="hover:text-purple-700">Registration</a></li>
                    </ul>
                </div>

                {/* Map */}
                <div className="sm:col-span-5 mt-8 md:mt-0 flex flex-col items-center md:items-center">
                    <h4 className="text-xl font-semibold mb-4 text-black text-center md:text-left">Find us on map</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.35104583087!2d77.557329!3d13.1038112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19aa2ebb65e7%3A0x965fdb8d3dba1d86!2sIgnited+Minds+IT+Technologies!5e0!3m2!1sen!2sin!4v1619608752000!5m2!1sen!2sin"
                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[18rem] border rounded-md"

                        allowFullScreen
                        loading="lazy"
                        title="Map"
                    ></iframe>
                </div>

            </div>



            {/* Footer Bottom Section */}
            <div className="absolute bottom-0 w-full bg-gray-800 text-white text-center ">
                Powered by IgnitedMinds IT Technologies
            </div>
        </footer>
    );
};

export default Footer;
