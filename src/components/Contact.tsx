import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='pt-32 container'>
        <div className="grid md:grid-cols-2 gap-10 ">
            <div className="space-y-8 ">
                <h2 className='text-5xl ' data-aos="zoom-in-up">Get in touch</h2>
                <p className='text-grey-600 text-[18px] pt-2' data-aos="zoom-in-up">free to ask any question about me just Email me which is given below</p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <CiMail size={30} /> azohaibshoukat22@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                    <BsTelephone size={30} /> +92 310 8335216
                </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-3' data-aos="zoom-in-up">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='name' />
                </div>
                <div className='flex flex-col gap-3' data-aos="zoom-in-up">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='h-[40px] bg-transparent border border-accent' id='email' />
                </div>
                <div className='flex flex-col gap-3' data-aos="zoom-in-up">
                    <label htmlFor="message">Message</label>
                    <textarea  className=' bg-transparent border border-accent' id='message' rows={8}></textarea>
                </div>
                <button className='text-black font-bold bg-accent p-2 px-6' data-aos="zoom-in-up">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact