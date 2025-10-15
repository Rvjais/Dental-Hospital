import React from 'react';

const AboutStats = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">

          {/* Happy Patients */}
          <div className="text-center">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-white/80 font-medium">Happy Patients</div>
          </div>

          {/* Years Experience */}
          <div className="text-center">
            <div className="text-4xl mb-2">⏰</div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-white/80 font-medium">Years Experience</div>
          </div>

          {/* Star Rating */}
          <div className="text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5.0</div>
            <div className="text-white/80 font-medium">Star Rating</div>
          </div>

          {/* Clinic Locations */}
          <div className="text-center">
            <div className="text-4xl mb-2">📍</div>
            <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-white/80 font-medium">Clinic Locations</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStats;
