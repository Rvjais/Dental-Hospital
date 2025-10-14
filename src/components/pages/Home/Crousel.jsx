import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import img1 from '../../../assets/Dr-Naveetha.jpg'
import img2 from '../../../assets/Dr-Pratyusha.jpg'
import img3 from '../../../assets/Dr-Suresh.jpg'


// Define the style for the images in the carousel
const imageStyle = {
    width: '447px',
    height: '500px',
    borderRadius: '20px',
    border: '1px solid #FFFFFF33',
};

function Carousel() {
    return (

        <div className="main overflow-hidden">

             <div className="heading w-screen bg-primary justify-center items-center flex p-[20px] ">
                        <h2 className='text-4xl'>
                            Our Specialised Doctors
                        </h2>
                    </div>
<div className="relative flex h-full bg-black">
             
            <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
                <Splide className=' flex justify-center'
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: true, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 1 // Scrolling speed
                        },
                        arrows: true, // Hide navigation arrows
                        pagination: false, // Hide pagination dots
                        fixedWidth: '445px', // Fixed width for each slide
                        gap: '12px', // Gap between slides
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                  
                    <SplideSlide className='bg-primary text-center'>
                        <img src={img1} alt="Poster Brooklyn" style={imageStyle} />
                        <h2 className='text-2xl'>Dr. Naveetha</h2>
                         <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                    <SplideSlide className='bg-primary text-center' >
                        <img src={img2} alt="Poster Macao" style={imageStyle} />
                        <h2 className='text-2xl' >Dr. Naveetha</h2>
                         <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                    <SplideSlide className='bg-primary text-center' >
                        <img src={img3} alt="Poster Navada" style={imageStyle} />
                        <h2 className='text-2xl' >Dr. Naveetha</h2>
                         <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                    <SplideSlide className='bg-primary text-center' >
                        <img src={img1} alt="Poster Brooklyn" style={imageStyle} />
                        <h2 className='text-2xl' >Dr. Naveetha</h2>
                         <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                    <SplideSlide className='bg-primary text-center' >
                        <img src={img2} alt="Poster Macao" style={imageStyle} />
                        <h2 className='text-2xl' >Dr. Naveetha</h2>
                         <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                    <SplideSlide className='bg-primary text-center'>
                        <img src={img3} alt="Poster Navada" style={imageStyle} />
                        <h2 className='text-2xl' >Dr. Naveetha</h2>
                        <p>
                            Specialist in oral and maxillofacial surgery with expertise in complex dental procedures,
                             wisdom tooth extraction, and facial trauma.
                        </p>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
        </div>
        
        
    );
}

export default Carousel;