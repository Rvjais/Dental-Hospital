import React from 'react'
import img1 from '../../../assets/Bridge-The-Gap In-Your-Smile.png'
import img2 from '../../../assets/Excellence in-Dental-Care.png'
import img3 from '../../../assets/Restore-Your-Smile-With-Dental-Crowns.png'
import img4 from '../../../assets/Save-Your-Natural-Tooth.png'
import img5 from '../../../assets/Safe & Painless-Wisdom-Tooth-Removal.png'

const images = [img1, img2, img3, img4, img5]

const Gallery = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Clinic Gallery</h2>
          <p className="text-white/80">Snapshots from our care and facilities.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`gallery-${idx}`} className="h-36 w-full object-cover rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery


