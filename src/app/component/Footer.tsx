import { FC } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: FC = () => {
    return (
        <footer className="w-full py-12 bg-cover bg-center" style={{ backgroundImage: "url('image/FooterBackground.png')" }}>
            <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">

                {/* Logo and Social Media Links */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <img src="image/logo.png" alt="Ignited Minds Logo" className="ml-6 h-52 w-auto" />
                    <img
                        src="image/SocialMedia.png"
                        alt="Social Media"
                        className="h-10 w-auto relative ml-10 md:mr-20"
                    />
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left">
                    <h3 className="text-5xl font-bold text-black mt-6 ">Let's<br /> Connect.</h3>
                    <p className="mt-8 text-black text-xs flex items-center space-x-2">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="image/Map.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>
                            #136, 2nd Main Rd, 4th Phase, <br />
                            Yelahanka New Town, Bengaluru, <br />
                            560064, Karnataka
                        </span>
                    </p>
                    <p className="flex items-center mt-4 space-x-2 text-black text-sm">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="image/Phone.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>+91-8296068323</span>
                    </p>
                    <p className="flex items-center mt-2 space-x-2 text-black text-xs">
                        <span className="relative w-4 h-4 rounded-full flex items-center justify-center bg-purple-500">
                            <img src="image/email.png" alt="Icon" className="w-2 h-2" />
                        </span>
                        <span>email@gmail.com</span>
                    </p>
                </div>

                {/* Useful Links and Map */}
                <div className="flex flex-col md:flex-row md:space-x-2">
                    {/* Useful Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mt-10 text-black">Useful Links</h4>
                        <ul className="space-y-2 text-black text-sm">
                            <li><a href="#" className="hover:text-purple-700">About Us</a></li>
                            <li><a href="#" className="hover:text-purple-700">Courses</a></li>
                            <li><a href="#" className="hover:text-purple-700">Placements</a></li>
                            <li><a href="#" className="hover:text-purple-700">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-700">Registration</a></li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="mt-8 md:mt-0">
                        <h4 className="text-xl font-semibold mb-4 text-black text-center md:text-left">Find us on map</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.35104583087!2d77.35073613645028!3d13.047487600469825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167a1b353ebd%3A0xa1d1d1d3b2f2e71d!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1619608752000!5m2!1sen!2sin"
                            width="300"
                            height="200"
                            allowFullScreen
                            loading="lazy"
                            className="border rounded-md"
                            title="Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
