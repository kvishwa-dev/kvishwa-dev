import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Internships", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <h1 className="text-lg font-bold">K Vishwa.</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">

          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              className="relative group"
            >
              {link.name}

              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
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

          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)} // close menu
              className="block text-lg font-medium hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  )
}