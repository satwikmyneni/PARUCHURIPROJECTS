import { cn } from "@/lib/utils";
import { useState } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.svg";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "918465080241",
  message = "Hello Paruchuri Projects, I'm interested in your transformer servicing services.",
}: WhatsAppButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      
      {/* Tooltip */}
      <div
        className={cn(
          "mr-3 px-4 py-2 rounded-full shadow-md text-sm font-medium bg-white text-gray-800 transition-all duration-300",
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
      >
        Chat with us
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 6px 25px rgba(37, 211, 102, 0.5)" }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>

        {/* REAL WhatsApp logo */}
        <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 relative" />
      </button>
    </div>
  );
};
