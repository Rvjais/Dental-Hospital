import React from 'react'
import banner from './../../../assets/Dental-Care.png'
import CountUp from 'react-countup';
// import Countup from "react-countup-animate";
const Hero = () => {
  return (
    <>
    <div class="container mx-auto px-4 lg:px-8 py-16">
  <div class="grid lg:grid-cols-2 gap-12 items-center">
    
   

 
    <div class="relative">
      <div class=" bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center ">
        <img src={banner} alt="Best Dental Clinic in Hyderabad - Gnathos Dental" class="w-[100%]  object-cover rounded-2xl"/>
      </div>

      {/* <!-- Rating Badge --> */}
      <div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
          <span class="font-semibold text-gray-800">4.9/5 Rating</span>
        </div>
      </div>
    </div>

  </div>
</div>

    </>
  )
}

export default Hero