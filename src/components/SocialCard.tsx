import React from 'react'

interface propsType {
    companyName:string;
    desc:string;
    img:string;
    name:string;
    designation:string;
}
const SocialCard:React.FC<propsType> = ({ companyName,desc,img, name, designation}) => {
  return (
    <div>
        <div className="border border-accent p-5 h-[450px] flex flex-col justify-between" data-aos="zoom-in-up">
            <h2 className='text-3xl text-accent'>{companyName}</h2>
            <p>{desc}</p>
            <div className='flex flex-row m-3'>
            <div className='flex gap-4'>
                <img className='greyscale rounded-full' src={img} height={50} width={50} alt="profile pic" />
            </div>
            <div className='ml-5'>
                <h2>{name}</h2>
                <p className='text-gray-500'>{designation}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SocialCard