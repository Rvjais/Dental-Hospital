import React from 'react'
import pic from '../../../assets/about.jpeg'

const AboutHero = () => {
  return (
    <section className="pt-24 pb-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-white/80 mb-6" aria-label="Breadcrumb">
          <a className="hover:text-blue-600 transition-colors" href="/">Home</a>
          <div className="flex items-center space-x-2">
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
              className="lucide lucide-chevron-right w-4 h-4"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="text-white font-medium">About</span>
          </div>
        </nav>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-primary/10 text-primary hover:bg-primary/20 ">
                About Our Practice
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Transforming Smiles,
                <span className="text-white"> Changing Lives</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                At Gnathos Dental, we believe that a healthy, beautiful smile has the power to transform lives. For over 15 years, we've been committed to providing exceptional dental care that combines advanced technology with compassionate treatment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-white/20 rounded-2xl flex items-center justify-center">
              <img
                src={pic}
                alt="Gnathos Dental Team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
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
                  className="lucide lucide-star w-5 h-5 text-yellow-400 fill-current"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="text-sm text-primary">1000+ Reviews</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
