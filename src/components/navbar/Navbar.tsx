import { User } from "lucide-react";
import { CompassLogo } from "./";
import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "../../store";
import { LogoutButton } from "./";

export const Navbar = () => {
  const { pathname } = useLocation();
  const { user } = useUserStore();

  return (
    <nav
      className={`${
        pathname == "/" ? "absolute z-20" : "relative"
      } bg-transparent w-full`}
    >
      <div className="px-4 md:px-20 w-full">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center cursor-pointer">
            <CompassLogo className="h-20 w-20 mr-2 text-white" />
          </Link>
          <div className="flex space-x-4">
            {user ? (
              <LogoutButton />
            ) : (
              <Link
                to={"/login"}
                className="text-lg font-medium flex items-center gap-3 bg-accent text-white hover:text-orange-500 px-4 py-2 rounded-md transition-colors"
              >
                <User />
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
