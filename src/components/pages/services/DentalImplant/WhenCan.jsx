import React from 'react';

const WhenCan = () => {
  return (
    <>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              When Can You Get A Dental Implant?
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Look for these signs and indications that suggest you're a good candidate for dental implants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <div className="space-y-6">
              <Feature
                icon={
                  <TargetIcon />
                }
                title="Adequate Bone Density"
                description="Sufficient jawbone to support the implant or willingness to undergo bone grafting procedures."
              />
              <Feature
                icon={
                  <HeartIcon />
                }
                title="Good Overall Health"
                description="Healthy immune system and ability to heal properly after surgery."
              />
              <Feature
                icon={
                  <ShieldIcon />
                }
                title="Healthy Gums"
                description="Free from periodontal disease or willing to undergo gum treatment first."
              />
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <Feature
                icon={
                  <ClockIcon />
                }
                title="Commitment to Healing"
                description="Willingness to follow post-operative instructions and attend follow-up appointments."
              />
              <Feature
                icon={
                  <SmileIcon />
                }
                title="Non-Smoker Status"
                description="Non-smoking or willing to quit, as smoking can interfere with healing."
              />
              <Feature
                icon={
                  <AwardIcon />
                }
                title="Age Consideration"
                description="Completed jaw growth (typically 18+ years) and realistic expectations."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Reusable Feature Component
const Feature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-primary mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  </div>
);

// SVG Icons
const TargetIcon = () => (
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
    className="lucide lucide-target w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const HeartIcon = () => (
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
    className="lucide lucide-heart w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const ShieldIcon = () => (
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
    className="lucide lucide-shield w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
  </svg>
);

const ClockIcon = () => (
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
    className="lucide lucide-clock w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const SmileIcon = () => (
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
    className="lucide lucide-smile w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const AwardIcon = () => (
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
    className="lucide lucide-award w-4 h-4 text-emerald-600"
    aria-hidden="true"
  >
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
    <circle cx="12" cy="8" r="6"></circle>
  </svg>
);

export default WhenCan;
