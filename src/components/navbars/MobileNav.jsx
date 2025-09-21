import React from "react";
import LeftNav from "./LeftNav";
import { X } from "lucide-react";

const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black transition-opacity duration-300 lg:hidden
          ${isMobileMenuOpen ? "opacity-50 z-40" : "opacity-0 -z-10"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {isMobileMenuOpen && (
        <button
          className={`
            fixed top-4 left-4 z-[60] lg:hidden
            rounded-full p-2 bg-blue-600 text-white
            shadow-lg transform transition-all duration-300
            hover:bg-blue-700 active:scale-95
            animate-fadeIn
          `}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      <LeftNav isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
};

export default MobileNav;
