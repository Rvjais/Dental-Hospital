import React from "react";
import pic from '../../../assets/Excellence in-Dental-Care.png'
const Excellence = () => {
  return (
    <>
      <section id="about" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={pic}
                alt="Advanced Dental Care in Hyderabad"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Excellence in Dental Care Since 2009
                </h2>
                <h3 className="text-xl text-white font-semibold mb-4">
                  For Us, Excellence Is Not A Choice But A Commitment!
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  At Gnathos Dental, the best dental clinic in Hyderabad, we are
                  committed to delivering exceptional dental care with advanced
                  treatments and a patient-first approach. Whether you need pain
                  relief, smile enhancement, braces, or dental implants, our
                  expert team ensures painless and precise solutions using
                  cutting-edge technology.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-gray-400">Hyderabad Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">80%</div>
                  <div className="text-sm text-gray-400">Smile Transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Emergency Care</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
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
                    className="lucide lucide-circle-check-big w-5 h-5 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-gray-400">
                    Latest 3D imaging &amp; laser technology
                  </span>
                </div>
                <div className="flex items-center space-x-3">
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
                    className="lucide lucide-circle-check-big w-5 h-5 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-gray-400">
                    Personalized treatment plans
                  </span>
                </div>
                <div className="flex items-center space-x-3">
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
                    className="lucide lucide-circle-check-big w-5 h-5 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-gray-400">
                    Comprehensive oral hygiene guidance
                  </span>
                </div>
                <div className="flex items-center space-x-3">
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
                    className="lucide lucide-circle-check-big w-5 h-5 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  <span className="text-gray-400">
                    Ongoing support &amp; follow-up care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Excellence;
