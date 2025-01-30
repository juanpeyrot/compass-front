import { LogIn } from "lucide-react";
import { CompassLogo } from "./";
import { useLocation } from "react-router-dom";


export const Navbar = () => {
	const { pathname } = useLocation();

  return (
    <nav className={`${pathname == "/" ? "absolute z-20" : "relative"} bg-transparent w-full`}>
      <div className="px-4 md:px-20 w-full">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <CompassLogo className="h-20 w-20 mr-2 text-white" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-lg font-medium flex items-center gap-3 bg-accent text-white hover:text-orange-500 px-4 py-2 rounded-md transition-colors">
              <LogIn />
							Log In
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}