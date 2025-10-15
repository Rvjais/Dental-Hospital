import React from 'react'

const items = [
  { title: 'Digital X‑Rays', desc: 'Low-radiation imaging for accurate diagnosis.' },
  { title: 'Intraoral Scanners', desc: 'Comfortable, gag-free impressions.' },
  { title: 'Laser Dentistry', desc: 'Painless soft-tissue procedures and faster healing.' },
  { title: 'CBCT Imaging', desc: '3D visualization for implant planning and root canals.' },
]

const Technology = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Technology We Trust</h2>
          <p className="text-white/80">Modern tools that make dentistry precise and comfortable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary">{it.title}</h3>
              <p className="text-white/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology


