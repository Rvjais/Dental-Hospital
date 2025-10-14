import React from 'react'
import image1 from '../../../assets/Icons/Dental-Crowns.png'
import image2 from '../../../assets/Icons/Dental-Implants.png'
import image3 from '../../../assets/Icons/Root-Canal.png'
import image4 from '../../../assets/Icons/Wisdom-Tooth.png'

const servicesData = [
    {
        image: image1,
        title: 'Dental Crowns',
        description: 'Durable caps to protect and strengthen damaged or weakened teeth.',
        link: '#'
    },
    {
        image: image2,
        title: 'Dental Implants',
        description: 'Permanent tooth replacement solutions for a natural-looking, confident smile.',
        link: '#'
    },
    {
        image: image3,
        title: 'Root Canal',
        description: 'Pain-free treatment to save infected teeth and restore oral health.',
        link: '#'
    },
    {
        image: image4,
        title: 'Wisdom Tooth',
        description: 'Safe and comfortable removal of problematic wisdom teeth.',
        link: '#'
    }
];

const Services = () => {
    return (
        <div className="py-16 bg-secondary">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-primary mb-4 underline ">
                    Our Best Dental Services in Hyderabad
                </h1>
                <p className="text-lg text-white mb-12">
                    Comprehensive dental treatments with advanced technology and expert care for all your oral health needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => (
                        <div className="bg-primary p-6 rounded-lg shadow-lg text-center" key={service.title}>
                            <img src={service.image} alt={service.title} className="h-25 w-25 mx-auto mb-4 " />
                            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                            <p className="text-white mb-4">{service.description}</p>
                            <a href={service.link} className="font-semibold text-accent hover:underline">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services