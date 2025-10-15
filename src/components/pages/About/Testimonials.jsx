import React from 'react'

const testimonials = [
  {
    name: 'Ananya',
    text: 'Painless root canal and super friendly team. Highly recommended!'
  },
  {
    name: 'Rahul',
    text: 'Got my dental implant done here. Seamless experience and great follow-up.'
  },
  {
    name: 'Meera',
    text: 'Clean clinic, caring doctors, and affordable treatment plans.'
  },
]

const Testimonials = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Patient Stories</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary rounded-2xl p-6 shadow">
              <div className="flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-accent" fill="currentColor"><path d="M7.17 6.17A3 3 0 0 1 9.293 5H11a1 1 0 1 1 0 2H9.293a1 1 0 0 0-.707.293l-2 2A1 1 0 0 0 6 10v1h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a6 6 0 0 1 3.17-5.83z"/></svg>
                <p className="font-semibold text-primary">{t.name}</p>
              </div>
              <p className="text-white/90">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


