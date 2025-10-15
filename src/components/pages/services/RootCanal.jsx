import React from 'react';
import Pill from '../common/Pill';
import Button from '../common/Button';

const RootCanal = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Pill>
                🦷 Best Root Canal Treatment in Hyderabad
              </Pill>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Save Your Natural
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  {' '}
                  Tooth{' '}
                </span>
                With Pain-Free Root Canal!
              </h1>
              <p className="text-lg text-primary/80 leading-relaxed">
                Advanced root canal treatment to save your infected tooth and restore your oral health with minimal discomfort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Book Free Consultation
              </Button>
              <Button variant="secondary">
                Emergency: +91 9955 708 885
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/services/root-canal-hero.png"
              alt="Root canal treatment procedure"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Benefits Of Root Canal Treatment
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Discover why root canal treatment is the best way to save your natural tooth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Save Your Natural Tooth',
                desc: 'Preserve your original tooth structure and maintain natural appearance.'
              },
              {
                title: 'Pain Relief',
                desc: 'Eliminate severe tooth pain and discomfort from infection.'
              },
              {
                title: 'Prevent Further Damage',
                desc: 'Stop the spread of infection to surrounding teeth and tissues.'
              },
              {
                title: 'Maintain Jaw Structure',
                desc: 'Prevent bone loss and maintain proper bite alignment.'
              },
              {
                title: 'Cost-Effective',
                desc: 'More affordable than tooth extraction and replacement.'
              },
              {
                title: 'Natural Function',
                desc: 'Restore normal chewing and speaking abilities.'
              }
            ].map((item, index) => (
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

      {/* When You Need Root Canal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              When Do You Need Root Canal Treatment?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Recognize the signs that indicate you may need root canal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Severe Tooth Pain",
                desc: "Persistent, throbbing pain that worsens with pressure or temperature changes."
              },
              {
                title: "Sensitivity to Hot/Cold",
                desc: "Sharp pain when consuming hot or cold foods and beverages."
              },
              {
                title: "Swollen Gums",
                desc: "Tender, swollen gums around the affected tooth."
              },
              {
                title: "Tooth Discoloration",
                desc: "Darkening or discoloration of the tooth due to nerve damage."
              },
              {
                title: "Pus Formation",
                desc: "Formation of abscess or pus around the tooth."
              },
              {
                title: "Loose Tooth",
                desc: "Tooth mobility due to infection affecting the supporting bone."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-primary p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-center space-x-3 mb-4">
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
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Root Canal Process
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Step-by-step process of our advanced root canal treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Examination & X-rays",
                desc: "Comprehensive examination and digital X-rays to assess the infection."
              },
              {
                step: "02", 
                title: "Anesthesia",
                desc: "Local anesthesia to ensure a completely pain-free procedure."
              },
              {
                step: "03",
                title: "Cleaning & Shaping",
                desc: "Remove infected pulp and clean the root canals thoroughly."
              },
              {
                step: "04",
                title: "Filling & Restoration",
                desc: "Fill the canals and restore the tooth with a crown if needed."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Ready to Save Your Tooth?
          </h2>
          <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
            Don't let tooth pain affect your daily life. Book your consultation today and get the relief you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              Book Free Consultation
            </Button>
            <Button variant="secondary">
              Call Now: +91 9955 708 885
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// Check Icon Component
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
    className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1"
    aria-hidden="true"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);

export default RootCanal;
