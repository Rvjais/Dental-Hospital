import React, { useState } from "react";

const faqs = [
  {
    question: "What are dental implants and how do they work?",
    answer:
      "Dental implants are titanium posts surgically placed into your jawbone to act as artificial tooth roots. They support crowns, bridges, or dentures for a natural-looking and durable tooth replacement.",
  },
  {
    question: "Am I a candidate for dental implants in Hyderabad?",
    answer:
      "Most people with good oral and general health are suitable candidates. A dentist will evaluate your bone density, gum health, and overall medical history to determine your eligibility.",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper care, dental implants can last over 20 years, and often a lifetime. Regular checkups and good oral hygiene are key.",
  },
  {
    question: "What is the cost of dental implants in Hyderabad?",
    answer:
      "The cost varies depending on the number of implants, materials used, and clinic location. Generally, single-tooth implants start from ₹25,000 onwards.",
  },
  {
    question: "Is the dental implant procedure painful?",
    answer:
      "The procedure is done under local anesthesia, so you won’t feel pain during surgery. Some mild discomfort may occur after, but it’s manageable with medication.",
  },
  {
    question: "How long does the dental implant process take?",
    answer:
      "The full process usually takes 3 to 6 months, allowing time for the implant to integrate with your jawbone before placing the final crown.",
  },
];

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Dental Implant FAQs - Your Questions Answered
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Get answers to the most common questions about our dental services and treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-primary border shadow-sm transition-all duration-300"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-primary/90"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
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
                  className={`w-5 h-5 text-emerald-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-white/90 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
