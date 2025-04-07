import React from "react";
// import { LogOut } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      {/* Top Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-[#1D1D1DD1] bg-[#080808]">
        <span className="text-md">{title}</span>
        <div className="flex items-center gap-12">
          <button className="text-white">Activity</button>
          <button className="text-white flex items-center gap-2">
            {/* <LogOut className="w-4 h-4" /> */}
            Log out
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
