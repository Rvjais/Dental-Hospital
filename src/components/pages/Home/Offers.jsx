import React from 'react'

const offers = [
  { title: 'Free Consultation', desc: 'For first-time patients this month' },
  { title: '20% Off Scaling', desc: 'Comprehensive oral prophylaxis package' },
  { title: 'Implant EMI Plans', desc: '0% interest for 6 months' },
]

const Offers = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Current Offers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div key={o.title} className="rounded-2xl bg-primary p-6 shadow">
              <h3 className="text-xl font-semibold text-primary mb-1">{o.title}</h3>
              <p className="text-white/90">{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers


