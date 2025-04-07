import { NavLink } from "react-router-dom";
import { BadgeCheck, BarChart3 } from "lucide-react";
import Header from "../components/Header";

const Profile = () => {
  return (
    <main className="flex-1">
      <Header title="Profile" />

      {/* Sub Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-[#1D1D1DD1]">
        <div className="flex gap-2">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "bg-[#080808] text-white" : "text-[#555555]"
              } rounded-lg`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/profile/portfolio"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "bg-[#080808] text-white" : "text-[#555555]"
              } rounded-lg`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/profile/experience"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "bg-[#080808] text-white" : "text-[#555555]"
              } rounded-lg`
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/profile/media"
            className={({ isActive }) =>
              `px-4 py-2 ${
                isActive ? "bg-[#080808] text-white" : "text-[#555555]"
              } rounded-lg`
            }
          >
            Media
          </NavLink>
        </div>
        <button className="text-[#555555] hover:text-white">More</button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Overview</h2>

        {/* Profile Card */}
        <div className="bg-[#080808] rounded-xl p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-[#1D1D1D] flex items-center justify-center text-3xl">
              A
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-2xl font-semibold">Mr A</h3>
                <BadgeCheck className="w-5 h-5 text-[#4834D4]" />
              </div>
              <p className="text-[#555555] mb-4">Co-Founder & CEO @Vertx</p>
              <div className="inline-block px-3 py-1 bg-[#1D1D1D] rounded-full text-sm">
                Entrepreneur
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="p-2 bg-[#1D1D1D] rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="p-2 bg-[#1D1D1D] rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
                    alt="X (Twitter)"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="p-2 bg-[#1D1D1D] rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                    alt="Email"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Founded Companies */}
          <div className="bg-[#080808] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Founded Companies</h3>
            <div className="text-[#FFFFFF] text-6xl font-bold mb-8">02</div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Vertx</span>
                      <span className="px-2 py-0.5 bg-[#01754F] text-xs rounded">
                        CEO
                      </span>
                    </div>
                    <p className="text-sm text-[#555555]">
                      Founded in 2025 in Fintech
                    </p>
                  </div>
                </div>
                <button className="text-[#555555] hover:text-white text-sm">
                  View Profile
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1D1D1D] rounded-lg"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Company</span>
                      <span className="px-2 py-0.5 bg-[#4834D4] text-xs rounded">
                        FOUNDER
                      </span>
                    </div>
                    <p className="text-sm text-[#555555]">
                      Details/Information
                    </p>
                  </div>
                </div>
                <button className="text-[#555555] hover:text-white text-sm">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-[#080808] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            <div className="text-[#FFFFFF] text-6xl font-bold mb-8">03</div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1D1D1D] rounded-lg"></div>
                    <span className="font-medium">Company {i}</span>
                  </div>
                  <button className="text-[#555555] hover:text-white text-sm">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
