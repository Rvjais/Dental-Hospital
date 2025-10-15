import React from 'react'

const steps = [
  { title: 'Book Appointment', desc: 'Online or phone scheduling with reminders.' },
  { title: 'Consultation', desc: 'Detailed exam with X-rays if required.' },
  { title: 'Personalized Plan', desc: 'Transparent options and costs explained.' },
  { title: 'Treatment', desc: 'Gentle, precise procedures with follow-up care.' },
]

const PatientJourney = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Your Journey With Us</h2>
          <p className="text-white/80">Simple steps to a healthier smile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-3">{i+1}</div>
              <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
              <p className="text-white/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PatientJourney


