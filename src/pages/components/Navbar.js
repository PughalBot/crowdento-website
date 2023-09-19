import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu toggle

  const handleScroll = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className=" font-lol p-2 md:p-4 mx-6 rounded-full sticky top-2 bg-white border-2 border-black">
      <div className="flex justify-between">
        {/* Desktop navbar items */}
        <ul className={`flex space-x-4 w-full text-lg justify-between md:flex`}>
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
    </div>
  );
};

export default Navbar;
