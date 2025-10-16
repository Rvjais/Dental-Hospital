import React from 'react';

const WhoNeeds = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Who Needs Root Canal Treatment?
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            Root canal treatment is recommended when the inner pulp of your tooth becomes infected or severely damaged.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Severe Tooth Pain',
              description: 'Intense, throbbing pain when chewing or applying pressure to the tooth.'
            },
            {
              title: 'Prolonged Sensitivity',
              description: 'Lingering pain to hot or cold temperatures that doesn\'t go away.'
            },
            {
              title: 'Deep Decay',
              description: 'Extensive decay that has reached the tooth\'s inner pulp.'
            },
            {
              title: 'Dental Trauma',
              description: 'Injury to the tooth that has damaged the pulp, even without visible cracks.'
            },
            {
              title: 'Gum Swelling',
              description: 'Swelling and tenderness in nearby gums, sometimes with pus discharge.'
            },
            {
              title: 'Tooth Discoloration',
              description: 'Darkening of the tooth, indicating pulp death or damage.'
            }
          ].map(({ title, description }, index) => (
            <div key={index} className="rounded-xl bg-primary border-0 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-circle-check-big w-6 h-6 text-white" aria-hidden="true">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <h3 className="font-semibold text-white">{title}</h3>
                </div>
                <p className="text-white/90 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoNeeds;
