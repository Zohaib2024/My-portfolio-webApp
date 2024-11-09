import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = (id:any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Close the menu after clicking an item
  };

  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl ml-10 font-medium">ZOHAIB</div>
      
        {/* Regular menu for larger screens */}
        <ul className="gap-10 lg:gap-16 hidden md:flex mr-20">
          <li className="menulink">
            <a href="#hero" onClick={() => handleScroll('hero')}>Home</a>
          </li>
          <li className="menulink">
            <a href="#Projects" onClick={() => handleScroll('Projects')}>Projects</a>
          </li>
          <li className="menulink">
            <a href="#Skills" onClick={() => handleScroll('Skills')}>Skills</a>
          </li>
          <li className="menulink">
            <a href="#Social" onClick={() => handleScroll('Social')}>Social</a>
          </li>
          <li className="menulink">
            <a href="#Contact" onClick={() => handleScroll('Contact')}>Contact</a>
          </li>
        </ul>

        {/* Hamburger menu for smaller screens */}
        <IoIosMenu 
          className="md:hidden cursor-pointer" 
          size={30} 
          onClick={toggleMenu} 
        />
      </div>

      {/* Dropdown menu for smaller screens */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col text-xl items-end gap-6">
          <li className="menulink">
            <a href="#hero" onClick={() => handleScroll('hero')}>Home</a>
          </li>
          <li className="menulink">
            <a href="#Projects" onClick={() => handleScroll('Projects')}>Projects</a>
          </li>
          <li className="menulink">
            <a href="#Skills" onClick={() => handleScroll('Skills')}>Skills</a>
          </li>
          <li className="menulink">
            <a href="#Social" onClick={() => handleScroll('Social')}>Social</a>
          </li>
          <li className="menulink">
            <a href="#Contact" onClick={() => handleScroll('Contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
