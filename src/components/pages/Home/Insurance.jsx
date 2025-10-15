import React from 'react'

const insurers = [
  { name: 'MediSure', note: 'Cashless available' },
  { name: 'HealthPlus', note: 'Reimbursement support' },
  { name: 'CareCover', note: 'Cashless available' },
  { name: 'SmileSecure', note: 'Dental coverage add-on' },
]

const Insurance = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Insurance & Payments</h2>
          <p className="text-white/80">We support leading insurers and flexible payment plans.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {insurers.map((i) => (
            <div key={i.name} className="rounded-xl bg-primary/10 p-4 text-center">
              <p className="text-primary font-semibold">{i.name}</p>
              <p className="text-white/70 text-sm">{i.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Insurance


