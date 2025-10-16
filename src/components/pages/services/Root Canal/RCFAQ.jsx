import React from 'react';

const RCFAQ = () => {
  const faqs = [
    "Is root canal treatment painful?",
    "How long does a root canal take?",
    "What is the success rate of root canal treatment?",
    "What are the alternatives to root canal treatment?",
    "How much does root canal treatment cost in Hyderabad?",
    "What should I expect after root canal treatment?",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Root Canal Treatment FAQs - Your Questions Answered
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our dental services and treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-0">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  aria-expanded="false"
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">{question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down w-5 h-5 text-emerald-600 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RCFAQ;
