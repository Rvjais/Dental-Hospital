import React from 'react'

const awards = [
  { title: 'Excellence in Dental Care', year: '2023', org: 'Healthcare Awards' },
  { title: 'Best Patient Experience', year: '2024', org: 'Dental Council' },
  { title: 'Top Implantology Clinic', year: '2022', org: 'Smile India' },
]

const Awards = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Awards & Recognition</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((a) => (
            <div key={a.title} className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
              <p className="text-accent font-semibold mb-1">{a.year}</p>
              <h3 className="text-xl font-semibold text-primary">{a.title}</h3>
              <p className="text-white/80 text-sm">{a.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards


