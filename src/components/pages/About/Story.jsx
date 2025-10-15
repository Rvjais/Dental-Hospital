import React from 'react';

const Story = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              From humble beginnings to becoming Hyderabad's trusted dental care provider
            </p>
          </div>

          {/* Story Block */}
          <div className="space-y-8">
            <div className="rounded-xl bg-primary/10 text-white border-0 shadow-sm">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                  {/* Text Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Founded on Care</h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      Gnathos Dental was founded with a simple yet powerful vision: to provide world-class dental care that's
                      accessible, comfortable, and transformative. Our journey began with Dr. Venkat's passion for creating
                      beautiful, healthy smiles.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      What started as a small clinic in Hitech City has grown into a network of dental excellence, serving
                      thousands of patients across Hyderabad with the same commitment to quality and care.
                    </p>
                  </div>

                  {/* Image */}
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop&crop=center"
                      alt="Dental clinic founding"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
