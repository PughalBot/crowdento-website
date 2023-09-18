import { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <motion.nav className=" font-lol p-2 md:p-4 md:mx-6  md:rounded-full sticky top-2 bg-white md:border-2 border-black">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <img src="/fill logo.png" alt="Logo" className="h-8 w-auto" />

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-black text-xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop navbar items */}
        <ul className={`flex space-x-4 mr-6 text-lg ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <li>
            <button onClick={() => handleScroll("hero")} className="text-black">Home</button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")} className="text-black">About</button>
          </li>
          <li>
            <button onClick={() => handleScroll("events")} className="text-black">Events</button>
          </li>
          <li>
            <button onClick={() => handleScroll("contact")} className="text-black">Contact</button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
