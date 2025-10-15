import React from 'react'

const highlights = [
  'Compassionate, patient-first care with transparent communication',
  'Advanced technology for painless and precise treatments',
  'Preventive dentistry to build lifelong oral health habits',
  'Evidence-based protocols and strict sterilization standards',
]

const Mission = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent shadow bg-primary/10 text-primary mb-4">Our Mission</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Redefining Comfortable Dental Care</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            We are dedicated to delivering world-class dental care that is comfortable, ethical, and accessible. Our goal is to help every patient achieve a confident smile through personalized treatment plans and modern techniques.
          </p>
          <ul className="space-y-3">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-primary/10 rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-2 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-xl bg-primary/20 p-4">
                <p className="text-primary font-semibold">Quality Focus</p>
                <p className="text-white/80 text-sm">We blend empathy with precision to deliver predictable outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission


