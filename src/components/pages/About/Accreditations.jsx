import React from 'react'

const orgs = [
  { name: 'IDA Certified Clinic', note: 'Adheres to sterilization protocols' },
  { name: 'ISO 9001:2015', note: 'Quality management systems' },
  { name: 'NABH Compliant', note: 'Patient safety standards' },
]

const Accreditations = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Accreditations</h2>
          <p className="text-white/80">Recognitions that reflect our commitment to excellence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orgs.map((o) => (
            <div key={o.name} className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
              <h3 className="text-lg font-semibold text-primary">{o.name}</h3>
              <p className="text-white/80 text-sm">{o.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Accreditations


