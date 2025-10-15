import React from 'react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      desc: 'Comprehensive examination, medical history review, and treatment options discussion.',
    },
    {
      number: 2,
      title: '3D Imaging & Planning',
      desc: 'Advanced CT scans and digital planning for precise implant placement.',
    },
    {
      number: 3,
      title: 'Bone Grafting (if needed)',
      desc: 'Bone augmentation procedures to ensure adequate bone volume for implant stability.',
    },
    {
      number: 4,
      title: 'Implant Placement',
      desc: 'Surgical placement of titanium implant into the jawbone using guided surgery techniques.',
    },
    {
      number: 5,
      title: 'Healing & Integration',
      desc: '3-6 months healing period for osseointegration and temporary restoration if needed.',
    },
    {
      number: 6,
      title: 'Crown Placement',
      desc: 'Final restoration placement and bite adjustment for optimal function and aesthetics.',
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Dental Implant Process
          </h2>
          <p className="text-white max-w-3xl mx-auto">
            A systematic 6-step approach to ensure successful implant placement and optimal healing.
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
                <p className="text-white/90 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
