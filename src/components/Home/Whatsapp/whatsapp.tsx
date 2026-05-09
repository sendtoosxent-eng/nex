"use client";

import {
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

export default function Whatsapp() {
  // WhatsApp setup
  const whatsappNumber = "256740442029";

  const message = encodeURIComponent(
    "Hello can i know more about your latest iphones and their prices?"
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-20">
      {/* CONTAINER */}
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl border border-sky-100 shadow-2xl rounded-full px-4 py-3">
        
        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="text-white w-7 h-7" />

          {/* TOOLTIP */}
          <span className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            Chat With Us
          </span>
        </a>

        {/* CALL */}
        <a
          href="tel:+256700000000"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-sky-500 hover:bg-sky-600 hover:scale-110 transition-all duration-300 shadow-[0_8px_25px_rgba(14,165,233,0.4)]"
          aria-label="Call us"
        >
          <Phone className="text-blue w-6 h-6" />

          {/* TOOLTIP */}
          <span className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            Call Experts
          </span>
        </a>

        {/* LOCATION */}
        <a
          href="https://maps.google.com/?q=Pioneer+Mall+Kampala"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-black hover:bg-gray-900 hover:scale-110 transition-all duration-300 shadow-[0_8px_25px_rgba(0,0,0,0.3)] border border-sky-400"
          aria-label="Find our location"
        >
          <MapPin className="text-sky-400 w-6 h-6" />

          {/* TOOLTIP */}
          <span className="absolute bottom-16 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
            Pioneer Mall Kampala
          </span>
        </a>
      </div>
    </div>
  );
}