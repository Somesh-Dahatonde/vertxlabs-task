import { NavLink } from "react-router-dom";
import { BarChart3, Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-[290px] border-r border-[#1D1D1DD1] hidden md:flex flex-col justify-between h-screen bg-black text-white fixed top-0 left-0 z-50">
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-4 px-4 py-4 border-b border-[#1D1D1DD1] h-[60px]">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-lg font-medium text-white">Vertxlabs, Inc</h1>
        </div>

        <div className="flex h-[85vh]">
          {/* Avatar Column */}
          <div className="w-16 flex flex-col items-center py-6 gap-4 border-r border-[#1D1D1DD1]">
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col justify-start gap-2 py-6 px-4 text-md font-bold">
            {[
              { name: "Dashboard", to: "/", disabled: false },
              { name: "Analytics", to: "/analytics", disabled: false },
              { name: "Connect", to: "/connect", disabled: false },
              { name: "Dealroom", to: "/dealroom", disabled: false },
              { name: "Profile", to: "/profile", disabled: false },
              { name: "Settings", to: "/settings", disabled: false },
            ].map(({ name, to, disabled }) => (
              <NavLink
                key={name}
                to={disabled ? "#" : to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-md ${
                    disabled
                      ? "text-[#555555] cursor-not-allowed"
                      : isActive
                      ? "text-white"
                      : "text-[#555555] hover:text-gray-300"
                  }`
                }
                onClick={(e) => disabled && e.preventDefault()}
              >
                {name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Fixed Bottom Add Button */}
      <div className="flex justify-center items-center py-4 border-t border-[#1D1D1DD1]">
        <Plus className="w-7 h-7 rounded-full bg-white text-black p-1 cursor-pointer" />
      </div>
    </aside>
  );
};

export default Sidebar;
