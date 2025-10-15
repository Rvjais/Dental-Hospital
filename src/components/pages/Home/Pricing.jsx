import React from 'react'

const plans = [
  { name: 'Basic Clean', price: '₹1,499', items: ['Scaling & Polishing', 'Oral Exam', 'Home Care Kit'] },
  { name: 'Root Canal', price: '₹4,999', items: ['Single Tooth', 'X‑Ray Included', 'Temporary Filling'] },
  { name: 'Implant Starter', price: '₹24,999', items: ['Consult + Planning', 'CBCT Scan', 'EMI Options'] },
]

const Pricing = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Transparent Pricing</h2>
          <p className="text-white/80">Affordable care with no hidden costs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl bg-primary p-6 shadow">
              <h3 className="text-xl font-semibold text-primary">{p.name}</h3>
              <p className="text-3xl font-bold text-white my-2">{p.price}</p>
              <ul className="text-white/90 text-sm space-y-2 mb-4">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="bg-white text-primary font-semibold px-4 py-2 rounded-lg inline-block">Book Now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing


