import React from 'react';

const Benefits = () => {
  const benefitsData = [
    {
      title: 'Natural Look and Feel',
      desc: 'Implants look, feel, and function like your natural teeth.',
    },
    {
      title: 'Preserve Facial Structure',
      desc: 'Prevent bone loss and maintain your facial appearance.',
    },
    {
      title: 'Protect Adjacent Teeth',
      desc: 'No need to alter healthy neighboring teeth.',
    },
    {
      title: 'Improved Eating and Speaking',
      desc: 'Restore full chewing function and clear speech.',
    },
    {
      title: 'Permanent Solution',
      desc: 'Last a lifetime with proper care and maintenance.',
    },
    {
      title: 'Enhanced Confidence',
      desc: 'Smile, laugh, and speak with complete confidence.',
    },
    {
      title: 'Easy Maintenance',
      desc: 'Care for them like natural teeth with regular brushing and flossing.',
    },
    {
      title: 'No Dietary Restrictions',
      desc: 'Enjoy all your favorite foods without worry.',
    },
    {
      title: 'Cost-Effective Long Term',
      desc: 'One-time investment that lasts for decades.',
    },
  ];

  return (
    <>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Benefits Of Dental Implants
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Discover why dental implants are considered the gold standard for tooth replacement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ✅ SVG Component
const CheckIcon = () => (
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
    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);

export default Benefits;
