import React from 'react'
import drSuresh from '../../../assets/Dr-Suresh.jpg'
import drNaveetha from '../../../assets/Dr-Naveetha.jpg'
import drPratyusha from '../../../assets/Dr-Pratyusha.jpg'

const doctors = [
  { image: drSuresh, name: 'Dr. Suresh Kumar', role: 'Chief Dental Surgeon' },
  { image: drNaveetha, name: 'Dr. Naveetha Rao', role: 'Endodontist' },
  { image: drPratyusha, name: 'Dr. Pratyusha', role: 'Implantologist' },
]

const Doctors = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Meet Our Doctors</h2>
          <p className="text-white/80">Experienced specialists committed to compassionate care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <div key={d.name} className="bg-primary rounded-2xl overflow-hidden shadow">
              <img src={d.image} alt={d.name} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">{d.name}</h3>
                <p className="text-accent">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctors


