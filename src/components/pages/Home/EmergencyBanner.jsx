import React from 'react'

const EmergencyBanner = () => {
  return (
    <section className="bg-accent text-white">
      <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">24/7 Emergency Dental Care</h3>
          <p className="text-white/90 text-sm">Severe toothache, trauma, or swelling? We’re one call away.</p>
        </div>
        <a href="#" className="bg-white text-accent font-semibold px-5 py-2 rounded-lg">Call +91 9955708885</a>
      </div>
    </section>
  )
}

export default EmergencyBanner


