'use client';
import { useState } from "react";
import { Link, Button } from "@heroui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="mx-auto flex max-w-11/12 flex-col rounded-2xl border border-white/10 bg-[#1a1616]/80 px-6 py-3 backdrop-blur-md shadow-xl md:flex-row md:items-center md:justify-between">
        
        {/* Logo & Mobile Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold text-white">hire</span>
            <span className="text-xl font-bold text-[#5c53fe]">loop</span>
          </div>
          
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Links (Visible on md+) */}
        <div className={`mt-4 md:mt-0 flex-col md:flex-row gap-6 md:flex ${isMenuOpen ? "flex" : "hidden"}`}>
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <Link href="#" className="text-sm text-gray-300 hover:text-white">Browse Jobs</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">Company</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">Pricing</Link>
          </div>
          
          <div className="hidden md:block h-4 w-[1px] bg-gray-700" />
          
          <div className="flex flex-col md:flex-row gap-4 md:items-center pt-4 md:pt-0 border-t md:border-none border-white/10">
            <Link href="#" className="text-sm text-[#5c53fe] hover:text-blue-300">Sign In</Link>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;