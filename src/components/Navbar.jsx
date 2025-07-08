import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Feroz.dev</h1>
        <ul className="hidden md:flex space-x-6 text-sm">
          {navItems.map(item => (
            <li key={item} className="hover:text-indigo-400 cursor-pointer transition-all">{item}</li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-xl">&#9776;</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          {navItems.map(item => (
            <div key={item} className="py-2 border-b border-gray-700">{item}</div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;