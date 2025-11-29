import React from 'react';
import Link from 'next/link';

const CTACard = ({ ctaData, serviceId }) => {
  if (!ctaData) return null;

  // Default booking link, can be customized or made dynamic
  const bookingLink = "/contact?service=" + (serviceId || 'general-consultation') + "&source=cta_card";

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl shadow-2xl text-white text-center">
      {ctaData.heading && <h2 className="text-3xl font-bold mb-4">{ctaData.heading}</h2>}
      {ctaData.text && <p className="text-lg text-blue-100 mb-6 max-w-xl mx-auto">{ctaData.text}</p>}
      
      {ctaData.buttonText && (
        <Link href={bookingLink} legacyBehavior>
          <a className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            {ctaData.buttonText}
          </a>
        </Link>
      )}

      {ctaData.secondaryLinkText && ctaData.secondaryLinkHref && (
        <div className="mt-6">
          <Link href={ctaData.secondaryLinkHref} legacyBehavior>
            <a className="text-blue-200 hover:text-white hover:underline transition duration-150">
              {ctaData.secondaryLinkText}
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CTACard;
