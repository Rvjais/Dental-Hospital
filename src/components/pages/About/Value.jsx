import React from 'react';

const Value = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            The principles that guide every aspect of our dental practice and patient care
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Value 1 */}
          <div className="rounded-xl bg-primary/10 text-card-foreground border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <div className="font-semibold tracking-tight text-xl text-white">Patient-Centered Care</div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-sm text-white/80 text-center">
                Every treatment plan is customized to meet individual patient needs and comfort levels.
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="rounded-xl bg-primary/10 text-card-foreground border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                </svg>
              </div>
              <div className="font-semibold tracking-tight text-xl text-white">Excellence in Treatment</div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-sm text-white/80 text-center">
                We maintain the highest standards of dental care using advanced technology and techniques.
              </div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="rounded-xl bg-primary/10 text-card-foreground border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <div className="font-semibold tracking-tight text-xl text-white">Safe & Sterile Environment</div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-sm text-white/80 text-center">
                State-of-the-art sterilization protocols ensure the safest treatment environment.
              </div>
            </div>
          </div>

          {/* Value 4 */}
          <div className="rounded-xl bg-primary/10 text-card-foreground border-0 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="9" cy="7" r="4" />
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </div>
              <div className="font-semibold tracking-tight text-xl text-white">Expert Team</div>
            </div>
            <div className="p-6 pt-0">
              <div className="text-sm text-white/80 text-center">
                Our team of experienced dentists and specialists are committed to your oral health.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Value;
