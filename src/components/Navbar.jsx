import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const paths = ["/", "/about", "/skills", "/projects", "/experience", "/achievements", "/education", "/contact"]
  const names = ["Home", "About", "Skills", "Projects", "Internships", "Achievements", "Education", "Contact"]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-lg font-bold">K Vishwa.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          {paths.map((path, index) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative group ${isActive ? "text-yellow-300 font-semibold" : ""}`
              }
            >
              {names[index]}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md text-gray-800 px-6 py-6 space-y-4 shadow-lg">

          {paths.map((path, index) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)} // close on click
              className={({ isActive }) =>
                `block text-lg font-medium ${
                  isActive ? "text-indigo-600" : ""
                }`
              }
            >
              {names[index]}
            </NavLink>
          ))}

        </div>
      )}
    </nav>
  )
}