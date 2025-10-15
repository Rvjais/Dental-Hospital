import React, { useState } from 'react';
import faqImage from '../../../assets/Restore-Your-Smile-With-Dental-Crowns.png';

const faqData = [
  {
    question: 'What makes Gnathos Dental the best dental clinic in Hyderabad?',
    answer: 'Gnathos Dental is recognized as the best dental clinic in Hyderabad due to our advanced technology, expert team of specialists, painless treatments, and comprehensive care. We offer world-class dental services with 15+ years of experience and have treated over 1000+ happy patients.',
  },
  {
    question: 'Do you provide painless dental treatments?',
    answer: 'Yes, we specialize in painless dental treatments using advanced laser technology, modern anesthesia techniques, and gentle procedures. Our patients experience minimal discomfort during treatments like root canal, dental implants, and extractions.',
  },
  {
    question: 'What dental services do you offer in Hyderabad?',
    answer: 'We offer comprehensive dental services including dental implants, root canal treatment, dental crowns, wisdom tooth extraction, smile designing, cosmetic dentistry, and general dentistry. All treatments are performed using the latest technology.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major dental insurance plans. Our team can help you understand your coverage and maximize your benefits. We also offer flexible payment options and affordable treatment plans.',
  },
  {
    question: 'How do I book an appointment at Gnathos Dental?',
    answer: 'You can book an appointment by calling us at +91 9955 708 885, emailing gnathosdentalcare@gmail.com, or visiting our clinic. We offer convenient scheduling including early morning and late evening appointments for working professionals.',
  },
  {
    question: 'Do you provide emergency dental care?',
    answer: 'Yes, we provide 24/7 emergency dental care for urgent situations like severe tooth pain, dental trauma, or infections. Our experienced team is always ready to help you during dental emergencies.',
  }
];

const FaqItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-700">
    <h2>
      <button
        type="button"
        className="flex justify-between items-center w-full py-5 font-semibold text-left text-white"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.question.replace(/\s+/g, '-')}`}
      >
        <span>{faq.question}</span>
        <svg
          className={`w-5 h-5 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </h2>
    <div
      id={`faq-answer-${faq.question.replace(/\s+/g, '-')}`}
      className={`grid text-sm text-gray-400 transition-all duration-300 ease-in-out ${
        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <p className="pb-5 pr-4">{faq.answer}</p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:mt-12">
            <img
              src={faqImage}
              alt="A smiling patient at a dental clinic"
              className="h-96 w-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <div className="divide-y divide-gray-700">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openFaq === index}
                  onClick={() => handleFaqClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;