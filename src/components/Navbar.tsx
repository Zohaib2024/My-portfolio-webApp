import React from 'react'
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className="flex justify-between items-center">
      
        <div className="text-xl ml-10 font-medium">ZOHAIB</div>
      
        <ul className='gap-10 lg:gap-16 hidden md:flex mr-20'>
            <li className="menulink">Home</li>
            <li className="menulink">Projects</li>
            <li className="menulink">Skills</li>
            <li className="menulink">Social</li>
            <li className="menulink">Contact</li>
        </ul>

    <IoIosMenu className='md:hidden' size={30} />
    </div>
    </div>
   
  )
}

export default Navbar