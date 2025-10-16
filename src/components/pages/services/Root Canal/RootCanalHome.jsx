import React from 'react';
import NaturalTooth from '../../../../assets/Save-Your-Natural-Tooth.png'
import Pill from '../../../common/Pill';
import Button from '../../../common/Button';

const RootCanalHome = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Pill>
              🛠️ Best Root Canal Treatment in Hyderabad
            </Pill>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Save Your Natural Tooth With
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {' '}Root Canal{' '}
              </span>
              Treatment
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Expert endodontic treatment to relieve tooth pain and save your natural teeth from extraction. Modern, painless procedures with lasting results.
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

        {/* Image Section */}
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src={NaturalTooth}
              alt="Advanced Root Canal Treatment - Expert Care"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RootCanalHome;
