import React from 'react'

const Skills = () => {
  return (
    <div className='container pt-32'>
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className='ml-16 ' data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl '>Technologies work with</h2>
                <p className='text-gray-500 pt-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure a asperiores libero, accusamus aliquid dolor illo quas modi earum praesentium expedita esse minus ullam fugit!
                </p>
            </div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl sm:ml-16 md:ml-1 lg:ml-16  place-items-center'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                </div>
                <div className='space-y-2 sm:ml-10 '>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills