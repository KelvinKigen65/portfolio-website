import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-dark text-light shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">My Portfolio</a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#skills" className="hover:text-primary">Skills</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#about" className="block hover:text-primary">About</a>
            <a href="#skills" className="block hover:text-primary">Skills</a>
            <a href="#projects" className="block hover:text-primary">Projects</a>
            <a href="#contact" className="block hover:text-primary">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;