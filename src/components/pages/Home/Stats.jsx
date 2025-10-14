import React from 'react'
import CountUp from 'react-countup';
const Stats = () => {
  return (
    <>
    <div className="stats  flex justify-around items-center h-35  ">
        <ul className='flex justify-around items-center text-6xl font-bold text-primary text-shadow-2xs text-shadow-secondary w-full  '>
            <li className='flex-col'>
                <CountUp 
                end={1000}
                start={0}
                suffix='+'
                duration={2}
                />
                <h2 className='text-2xl'>
                    Happy Patients
                </h2>
            </li>
            <li className='flex-col'>
                   <CountUp 
                end={15}
                start={0}
                suffix='+'
                duration={2}
                />
                <h2 className='text-2xl'>
                    Years of Experience
                </h2>
            </li>
            
            <li className='flex-col'>
                   <CountUp 
                end={99}
                start={0}
                suffix='%'
                duration={2}
                />
                 <h2 className='text-2xl'>
                    Success Rate
                </h2>
            </li>
           
        </ul>
    </div>
    </>
  )
}

export default Stats