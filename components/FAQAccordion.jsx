import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react'; // Using lucide-react for icons

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) {
    return <p className="text-gray-400">No frequently asked questions available.</p>;
  }

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
          >
            <span className="text-lg font-medium text-blue-300">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUpIcon className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-400" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-5 pb-5 pt-2 text-gray-300 leading-relaxed">
              <p className="whitespace-pre-line">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
