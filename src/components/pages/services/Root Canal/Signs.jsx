import React from 'react';

const Signs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Signs You Need Root Canal Treatment
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Look for these warning signs that suggest you may need endodontic treatment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {[
              {
                icon: 'target',
                title: 'Persistent Pain',
                description: "Constant, severe tooth pain that doesn't respond to pain medication."
              },
              {
                icon: 'heart',
                title: 'Temperature Sensitivity',
                description: 'Extreme sensitivity to hot or cold that lingers long after exposure.'
              },
              {
                icon: 'shield',
                title: 'Swelling',
                description: 'Swelling in the face, neck, or lymph nodes near the affected tooth.'
              }
            ].map((item, index) => (
              <SignItem key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[
              {
                icon: 'clock',
                title: 'Night Pain',
                description: 'Severe pain that wakes you up at night or gets worse when lying down.'
              },
              {
                icon: 'smile',
                title: 'Pressure Pain',
                description: 'Pain when chewing, biting down, or touching the tooth.'
              },
              {
                icon: 'award',
                title: 'Abscess Formation',
                description: 'Pus-filled pocket forming at the root tip, causing severe infection.'
              }
            ].map((item, index) => (
              <SignItem key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable Sign Item Component
const SignItem = ({ icon, title, description }) => {
  const icons = {
    target: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
    clock: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    smile: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" x2="9.01" y1="9" y2="9" />
        <line x1="15" x2="15.01" y1="9" y2="9" />
      </svg>
    ),
    award: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <circle cx="12" cy="8" r="6" />
      </svg>
    )
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        {icons[icon]}
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Signs;
