import React from "react";
import { Diamond, ShoppingCart } from "lucide-react";

const navItems = ["HOME", "BAG", "SNEAKERS", "BELTS", "CONTACT"];

const TopNav = () => {
  return (
    <div className="w-full h-18 bg-[#F6F7F8] flex items-center justify-between px-4 py-2">
      <div className="flex items-center mb-4">
        <div className="bg-blue-400 rounded-lg p-2 mr-3">
          <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <h2 className="text-xl font-black text-gray-800">E-Comm</h2>
      </div>

      <div className="nav-center w-[40%] h-[100%] flex items-center justify-between">
        <ul className="flex items-center justify-between w-full h-full text-lg font-semibold">
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="nav-right w-[11%] h-[100%] flex items-center justify-between ">
        <ShoppingCart />

        <h2 className="text-lg font-semibold flex items-center gap-3">
          Iteams <span className="text-zinc-400 font-regular">$3.00</span>
        </h2>
      </div>
    </div>
  );
};

export default TopNav;
