import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const phoneNumber = "+254721744035";
  const message = "Hello BeaconTrust! I'm interested in your real estate services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;