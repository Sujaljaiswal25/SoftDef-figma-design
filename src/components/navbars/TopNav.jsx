import React, { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";

const navItems = ["HOME", "BAG", "SNEAKERS", "BELTS", "CONTACT"];

const TopNav = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
  return (
    <div className="w-full h-18 bg-[#F6F7F8] flex items-center justify-between px-4 lg:px-8 py-2">
      <div className="flex items-center gap-4">
        <button
          className="block lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center">
          <div className="bg-blue-400 rounded-lg p-2 mr-3">
            <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <h2 className="text-xl font-black text-gray-800">E-Comm</h2>
        </div>
      </div>

      <div className="hidden lg:flex nav-center w-[40%] h-[100%] items-center justify-between">
        <ul className="flex items-center justify-between w-full h-full text-lg font-semibold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-600 transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-right flex items-center gap-4">
        <ShoppingCart className="cursor-pointer" />
        <h2 className="hidden lg:flex text-lg font-semibold items-center gap-3">
          Items <span className="text-zinc-400 font-regular">$3.00</span>
        </h2>
      </div>
    </div>
  );
};

export default TopNav;
