import Sidebar from "./Sidebar";
import BottomNav from "./BottomNav";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white flex md:flex-row flex-col">
      {/* Sidebar for md+ */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Page content */}
      <div className="flex-1 md:ml-[290px] pb-14 md:pb-0 overflow-y-auto max-h-screen">
        {children}
      </div>

      {/* Bottom navigation for mobile */}
      <BottomNav />
    </div>
  );
};

export default Layout;
