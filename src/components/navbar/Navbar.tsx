import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";
import { CompassLogo } from "./";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent absolute w-full z-20">
      <div className="px-4 md:px-20 w-full">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <CompassLogo className="h-20 w-20 mr-2 text-white" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-lg font-medium flex items-center gap-3 bg-accent text-white hover:text-orange-500 px-4 py-2 rounded-md transition-colors">
              <LogIn />
							Log In
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
              Login
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}