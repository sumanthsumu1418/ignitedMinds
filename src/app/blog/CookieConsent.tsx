import React, { useState, useEffect } from "react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          This website uses cookies to enhance user experience.{" "}
          <a href="/cookie-policy" className="underline hover:text-yellow-400">
            Read cookie policies
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400 transition-colors whitespace-nowrap"
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
