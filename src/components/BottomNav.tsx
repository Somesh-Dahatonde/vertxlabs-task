import { NavLink } from "react-router-dom";
import {
  LineChart,
  LayoutDashboardIcon,
  Earth,
  BellIcon,
  Snowflake,
} from "lucide-react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-black border-t border-[#1D1D1DD1] md:hidden z-50">
      <div className="flex justify-around items-center h-14 text-white text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-white" : "text-gray-500"
            }`
          }
        >
          <LayoutDashboardIcon className="w-5 h-5" />
          Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-white" : "text-gray-500"
            }`
          }
        >
          <LineChart className="w-5 h-5" />
          Analytics
        </NavLink>
        <NavLink
          to="/connect"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-white" : "text-gray-500"
            }`
          }
        >
          <Earth className="w-5 h-5" />
          Connect
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-white" : "text-gray-500"
            }`
          }
        >
          <BellIcon className="w-5 h-5" />
          Activity
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-white" : "text-gray-500"
            }`
          }
        >
          <Snowflake className="w-5 h-5" />
          Dealroom
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
