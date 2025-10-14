import React, { useState, useCallback } from 'react';

// You would typically import this data from a file or API
const initialCarouselData = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1074&auto=format&fit=crop',
        name: 'Scotland',
        des: 'Experience the mystical Highlands under twilight skies and misty lochs.',
        seeMoreUrl: 'https://github.com/MDJAmin'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=1173&auto=format&fit=crop',
        name: 'Norway',
        des: 'Chase the Northern Lights under star-lit skies along scenic fjord roads.',
        seeMoreUrl: 'https://github.com/MDJAmin'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1170&auto=format&fit=crop',
        name: 'New Zealand',
        des: 'Wander dramatic, mist-laden mountain paths that feel straight out of a dream.',
        seeMoreUrl: 'https://github.com/MDJAmin'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop',
        name: 'Japan',
        des: 'Discover serene mountain temples shrouded in dusk and ancient forest trails.',
        seeMoreUrl: 'https://github.com/MDJAmin'
    },
    // You can add more items here
    {
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=2070&auto=format&fit=crop',
        name: 'Maldives',
        des: 'Relax on pristine beaches and swim in crystal-clear turquoise waters.',
        seeMoreUrl: 'https://github.com/MDJAmin'
    }
];

// Reusable component for the animated content
const CarouselContent = ({ name, des, seeMoreUrl, isActive }) => (
    <div 
        className={`absolute top-1/2 left-[100px] w-[300px] text-left text-gray-100 transform -translate-y-1/2 ${isActive ? 'z-10' : 'z-0'}`}
    >
        <div 
            className={`text-4xl font-bold uppercase transition-all duration-1000 ease-in-out transform ${isActive ? 'opacity-100 translate-y-0 blur-0 scale-100 rotate-0' : 'opacity-0 translate-y-24 blur-2xl scale-95 -rotate-3'}`}
        >
            {name}
        </div>
        <div 
            className={`mt-2.5 mb-5 transition-all duration-1000 ease-in-out delay-200 transform ${isActive ? 'opacity-100 translate-y-0 blur-0 scale-100 rotate-0' : 'opacity-0 translate-y-24 blur-2xl scale-95 -rotate-3'}`}
        >
            {des}
        </div>
        <a 
            href={seeMoreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-all duration-1000 ease-in-out delay-300 transform inline-block ${isActive ? 'opacity-100 translate-y-0 blur-0 scale-100 rotate-0' : 'opacity-0 translate-y-24 blur-2xl scale-95 -rotate-3'}`}
        >
            <button className="px-5 py-2.5 border-none cursor-pointer rounded-xl bg-white/70 hover:bg-white transition-colors">
                See More
            </button>
        </a>
    </div>
);

// Main Carousel Component
export default function Slider() {
    const [items, setItems] = useState(initialCarouselData);

    const handleNext = useCallback(() => {
        setItems(prevItems => {
            const [first, ...rest] = prevItems;
            return [...rest, first];
        });
    }, []);

    const handlePrev = useCallback(() => {
        setItems(prevItems => {
            const last = prevItems[prevItems.length - 1];
            const rest = prevItems.slice(0, prevItems.length - 1);
            return [last, ...rest];
        });
    }, []);

    // Helper to determine the position class for each item
    const getItemClass = (index) => {
        const baseClasses = "absolute w-[200px] h-[250px] top-1/2 transform -translate-y-1/2 rounded-2xl shadow-lg bg-cover bg-center transition-all duration-500 ease-in-out";
        
        switch (index) {
            case 0:
            case 1:
                return `${baseClasses} top-0 left-0 w-full h-full rounded-2xl`;
            case 2:
                return `${baseClasses} left-1/2 hover:scale-105`;
            case 3:
                return `${baseClasses} left-[calc(50%+220px)] hover:scale-105`;
            case 4:
                return `${baseClasses} left-[calc(50%+440px)] hover:scale-105`;
            default:
                return `${baseClasses} left-[calc(50%+660px)] opacity-0`;
        }
    };

    return (
        <div className="bg-[#b9bbb9] overflow-hidden flex items-center justify-center font-sans bg-secondary">
            <div className="relative w-[800px] h-[400px] bg-gray-100 shadow-2xl rounded-2xl">
                <div className="slide w-full h-full rounded-2xl overflow-hidden">
                    {items.map((item, index) => (
                        <div
                            key={item.name + index} // Use a more stable key if available
                            className={getItemClass(index)}
                        >
                             <div 
                                className={`w-full h-full bg-cover bg-center transition-transform duration-[7000ms] ease-linear ${index === 1 ? 'scale-110' : 'scale-100'}`}
                                style={{ backgroundImage: `url('${item.imageUrl}')` }}
                            />
                            <CarouselContent 
                                name={item.name} 
                                des={item.des} 
                                seeMoreUrl={item.seeMoreUrl} 
                                isActive={index === 1} 
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute z-20 bottom-5 w-full flex justify-center items-center gap-5">
                    <button 
                        onClick={handlePrev}
                        className="w-10 h-9 rounded-lg border-2 border-black/70 bg-white/60 cursor-pointer transition-all duration-300 hover:border-white/70 hover:scale-110 focus:scale-110 focus:bg-white active:scale-105"
                    >
                        ◁
                    </button>
                    <button 
                        onClick={handleNext}
                        className="w-10 h-9 rounded-lg border-2 border-black/70 bg-white/60 cursor-pointer transition-all duration-300 hover:border-white/70 hover:scale-110 focus:scale-110 focus:bg-white active:scale-105"
                    >
                        ▷
                    </button>
                </div>
            </div>
            
        </div>
    );
}

