import React from 'react';

const Benifits = () => {
  const benefits = [
    {
      title: 'Save Natural Tooth',
      description: 'Preserve your natural tooth instead of extraction and replacement.',
    },
    {
      title: 'Pain Relief',
      description: 'Eliminate severe tooth pain and infection immediately.',
    },
    {
      title: 'Cost-Effective',
      description: 'More affordable than tooth extraction and replacement options.',
    },
    {
      title: 'Normal Function',
      description: 'Maintain normal chewing and biting efficiency.',
    },
    {
      title: 'Prevent Spread',
      description: 'Stop infection from spreading to other teeth or jawbone.',
    },
    {
      title: 'Long-lasting Results',
      description: 'Root canal treated teeth can last a lifetime with proper care.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Benefits Of Root Canal Treatment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover why root canal treatment is the preferred option for saving infected teeth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
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
                className="lucide lucide-circle-check-big w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
                aria-hidden="true"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
