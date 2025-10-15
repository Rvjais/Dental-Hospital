import React from 'react'

const roles = [
  { title: 'Dental Assistant', type: 'Full-time', blurb: 'Chairside support, sterilization, patient care.' },
  { title: 'Front Desk Executive', type: 'Full-time', blurb: 'Scheduling, patient coordination, billing support.' },
  { title: 'Marketing Intern', type: 'Internship', blurb: 'Content, social media, community outreach.' },
]

const Careers = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Careers</h2>
          <p className="text-white/80">Join a team that puts patients first.</p>
        </div>
        <div className="space-y-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-2xl bg-primary/10 p-6 border border-primary/20 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary">{r.title}</h3>
                <p className="text-white/80">{r.blurb}</p>
              </div>
              <div className="text-right">
                <p className="text-accent text-sm">{r.type}</p>
                <a href="#" className="text-primary font-semibold text-sm hover:text-accent">Apply Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Careers


