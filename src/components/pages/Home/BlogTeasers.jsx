import React from 'react'

const posts = [
  { title: '5 Tips for Healthy Gums', date: 'Oct 2025' },
  { title: 'Dental Implants vs Bridges', date: 'Sep 2025' },
  { title: 'Is Root Canal Painful?', date: 'Aug 2025' },
]

const BlogTeasers = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">From Our Blog</h2>
          <p className="text-white/80">Dental care insights and updates.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl bg-primary/10 p-6 border border-primary/20">
              <p className="text-accent text-sm mb-1">{p.date}</p>
              <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
              <p className="text-white/80 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in dui a arcu volutpat volutpat.</p>
              <a href="#" className="text-accent font-semibold mt-3 inline-block">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogTeasers


