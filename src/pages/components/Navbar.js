import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div 
      className={`font-pp font-bold p-4 md:p-6 mx-4 md:mx-8 fixed top-2 z-10 left-0 right-0 min-h-[60px] md:min-h-[80px] bg-radial from-[#B3C2FF] via-[#D0AFFF] to-[#E8E2F1] shadow-lg border-[#5E3653] border-2 
        ${isOpen ? 'rounded-xl' : 'rounded-full'}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="/weblogo.png" alt="Logo" className="h-[40px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-lg pl-4 pr-4 md:pl-8 md:pr-8 justify-between">
            <li>
              <button 
                onClick={() => handleScroll("hero")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("about")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("services")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                People
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("contact")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                onClick={() => window.location.href = "https://store.ebiv.in"} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Visit Store
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg text-center">
            <li>
              <button 
                onClick={() => handleScroll("hero")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("about")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("services")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll("contact")} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Contact
              </button>
            </li>
            <li>
              <button 
                onClick={() => window.location.href = "https://store.ebiv.in"} 
                className="text-[#2E2A39] hover:text-[#5E3653] transition duration-300"
              >
                Visit Store
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
