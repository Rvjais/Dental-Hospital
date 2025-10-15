import React from 'react'
import drSuresh from '../../../assets/Dr-Suresh.jpg'
import drNaveetha from '../../../assets/Dr-Naveetha.jpg'
import drPratyusha from '../../../assets/Dr-Pratyusha.jpg'

const teamMembers = [
  {
    image: drSuresh,
    name: 'Dr. Suresh Kumar',
    title: 'Chief Dental Surgeon',
    bio: 'Passionate about restorative and cosmetic dentistry with 15+ years of experience.',
  },
  {
    image: drNaveetha,
    name: 'Dr. Naveetha Rao',
    title: 'Endodontist',
    bio: 'Expert in painless root canal treatments and patient-centered care.',
  },
  {
    image: drPratyusha,
    name: 'Dr. Pratyusha',
    title: 'Implantologist',
    bio: 'Specializes in dental implants and full mouth rehabilitation.',
  },
]

const Team = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Our Expert Team</h2>
          <p className="text-white/80">Meet the doctors behind confident, healthy smiles.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-primary rounded-2xl overflow-hidden shadow">
              <img src={member.image} alt={member.name} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.title}</p>
                <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team


