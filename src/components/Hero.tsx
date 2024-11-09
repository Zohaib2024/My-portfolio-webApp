import React from 'react'
import Image from 'next/image'


const Hero = () => {
  return (
    <section id="hero">
   <div className='flex flex-row '>
  
    <div className="hidden md:hidden lg:block place-content-center ml-32 mt-10" data-aos="zoom-in-up">
    <Image
      src="/portfolio.jpg"
      width={1000}
      height={500}
      alt="Picture of the author"
      className='rounded-full border border-accent border-solid'
    />
  </div>

<div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] sm:mr-10 md:mr-10 lg:mr-32 place-content-center">
  <div className="hidden lg:block"></div>
  <div className="text-[100px] sm:tex-[130px] font-bold leading-light flex justify-center items-center place-content-center">
    <div>
      <p data-aos="zoom-in-up">HELLO!</p>
      <p data-aos="zoom-in-up" >I am</p>
      <p data-aos="zoom-in-up">ZOHAIB</p>
    </div>
    
  </div>
 

</div>
    </div>
    </section>


  )
}

export default Hero
