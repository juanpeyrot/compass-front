import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CompassLogo } from "./CompassLogo";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent absolute w-full z-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <CompassLogo className="h-32 w-32 mr-2 text-white" />
            <span className="font-bold text-xl text-white">Compass</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="bg-accent text-white hover:bg-accent-light px-4 py-2 rounded-md transition-colors">
              Login
            </a>
            <a href="#" className="bg-white text-primary hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">
              Register
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#" className="block py-2 text-white hover:text-accent-light transition-colors">
              Home
            </a>
            <a href="#" className="block py-2 text-white hover:text-accent-light transition-colors">
              About
            </a>
            <a href="#" className="block py-2 text-white hover:text-accent-light transition-colors">
              Contact
            </a>
            <a href="#" className="block py-2 text-white hover:text-accent-light transition-colors">
              Login
            </a>
            <a href="#" className="block py-2 text-white hover:text-accent-light transition-colors">
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}