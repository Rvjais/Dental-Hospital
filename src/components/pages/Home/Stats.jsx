import React from 'react'
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <>
    <div className="stats flex justify-around items-center py-10">
        <ul className='flex flex-col md:flex-row justify-around items-center text-4xl md:text-6xl font-bold text-primary text-shadow-2xs text-shadow-secondary w-full gap-10 md:gap-0'>
            <li className='flex flex-col items-center text-center'>
                <CountUp 
                end={1000}
                start={0}
                suffix='+'
                duration={2}
                enableScrollSpy
                />
                <h2 className='text-xl md:text-2xl'>
                    Happy Patients
                </h2>
            </li>
            <li className='flex flex-col items-center text-center'>
                   <CountUp 
                end={15}
                start={0}
                suffix='+'
                duration={2}
                enableScrollSpy
                />
                <h2 className='text-xl md:text-2xl'>
                    Years of Experience
                </h2>
            </li>
            
            <li className='flex flex-col items-center text-center'>
                   <CountUp 
                end={99}
                start={0}
                suffix='%'
                duration={2}
                enableScrollSpy
                />
                 <h2 className='text-xl md:text-2xl'>
                    Success Rate
                </h2>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Stats