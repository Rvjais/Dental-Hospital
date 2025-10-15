import React from 'react';
import Pill from '../../../common/Pill';
import Button from '../../../common/Button';

const DentalHome = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <Pill>
              🦷 Best Dental Implants in Hyderabad
            </Pill>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
              Bridge The Gap In Your
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {' '}
                Smile{' '}
              </span>
              Left By Your Missing Tooth!
            </h1>
            <p className="text-lg text-primary/80 leading-relaxed">
              Transform your life with permanent, natural-looking dental implants that restore your confidence, function, and beautiful smile.
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
            src="/images/services/dental-implant-hero.png"
            alt="A smiling person showing their dental implants"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DentalHome;
