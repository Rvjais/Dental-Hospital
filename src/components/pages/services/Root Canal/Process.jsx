import React from 'react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Diagnosis & X-rays',
      description: 'Comprehensive examination and digital X-rays to assess the condition.',
    },
    {
      number: 2,
      title: 'Local Anesthesia',
      description: 'Complete numbing of the area to ensure a painless procedure.',
    },
    {
      number: 3,
      title: 'Pulp Removal',
      description: 'Careful removal of infected or damaged pulp tissue from root canals.',
    },
    {
      number: 4,
      title: 'Canal Cleaning',
      description: 'Thorough cleaning and shaping of root canals with advanced instruments.',
    },
    {
      number: 5,
      title: 'Filling & Sealing',
      description: 'Filling the cleaned canals with biocompatible material and sealing.',
    },
    {
      number: 6,
      title: 'Crown Placement',
      description: 'Final restoration with a crown to protect and strengthen the tooth.',
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Root Canal Treatment Process
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            A systematic approach to ensure successful treatment and optimal healing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl bg-primary border-0 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-white/90 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
