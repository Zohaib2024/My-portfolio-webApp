

import Link from 'next/link';

import React from 'react'

interface propsType {
  title:string;
  Desc: string;
  img :string ;
  location :string;
}
const Card:React.FC<propsType> = ({title, Desc ,img ,location }) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]   mt-10   ' data-aos="zoom-in-up">
      <div >
        <img className='w-[300px] sm:w-[350px] h-auto '
        src = {img}     
        width={1000}
        height={500}
        alt={title}
      />
      </div>
    <div className=' p-4 space-y-4'>
      <div className="  text-4xl font-extralight">{title}</div>
      <div className=''> {Desc}</div>
   
      <button
  className={`text-black font-bold p-2 px-6 ${location ? 'bg-accent' : 'bg-gray-400 cursor-not-allowed'}`}
  disabled={!location}
>
  <a href={location || '#'} className={location ? '' : 'pointer-events-none'}>
    Go to page
  </a>
</button>
    </div>
    </div>
  )
}

export default Card