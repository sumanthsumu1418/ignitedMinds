import { PhoneIcon as WhatsappIcon } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "8296068323";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <WhatsappIcon size={24} />
    </a>
  );
}
