import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen bg-slate-300 h-[80px] fixed drop-shadow-lg">
      <div className="px-2 flex justify-between w-full h-full items-center">
        <div className="flex align-center">
          <h1 className="text-2xl font-bold sm:text-4xl">Sani</h1>
        </div>
        <ul>
          <li>
            <li>Home</li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
