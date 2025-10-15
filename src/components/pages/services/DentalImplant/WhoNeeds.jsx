import React from 'react';

const WhoNeeds = () => {
  return (
    <>
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Who Needs Dental Implants?
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Dental implants are the ideal solution for various dental conditions and situations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Single Missing Tooth",
                desc: "Replace one missing tooth without affecting adjacent healthy teeth."
              },
              {
                title: "Multiple Missing Teeth",
                desc: "Support bridges or individual crowns for several missing teeth."
              },
              {
                title: "Complete Tooth Loss",
                desc: "Full arch restoration with implant-supported dentures."
              },
              {
                title: "Loose Dentures",
                desc: "Secure and stabilize ill-fitting or uncomfortable dentures."
              },
              {
                title: "Damaged Tooth Roots",
                desc: "Replace teeth with severely damaged or infected roots."
              },
              {
                title: "Bone Preservation",
                desc: "Prevent jawbone deterioration after tooth extraction."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-primary border-0 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
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
                      className="lucide lucide-circle-check-big w-6 h-6 text-white"
                      aria-hidden="true"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                      <path d="m9 11 3 3L22 4"></path>
                    </svg>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoNeeds;
