"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/components/lib/utils";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Show button after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+923252467463"; // XFast Group WhatsApp
  const whatsappMessage = "Hi, I'm interested in your printing and packaging services.";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          {showTooltip && (
            <div className="hidden md:block bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg relative animate-in slide-in-from-right">
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 bg-white text-green-600 rounded-full p-1 hover:bg-gray-100 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
              <p className="text-sm font-medium whitespace-nowrap">
                Need help? Chat with us!
              </p>
              <div className="absolute bottom-3 -right-2 w-3 h-3 bg-green-600 transform rotate-45"></div>
            </div>
          )}

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110",
              "animate-in zoom-in"
            )}
          >
            <MessageCircle className="h-6 w-6" />
            
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75"></span>
          </a>
        </div>
      )}
    </>
  );
}
