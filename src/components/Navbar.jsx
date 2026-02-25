import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center space-x-8 text-white font-medium">
        
        {["/", "/about", "/skills", "/projects", "/experience", "/achievements", "/education", "/contact"].map((path, index) => {
          const names = ["Home", "About", "Skills", "Projects", "Internships", "Achievements", "Education", "Contact"]

          return (
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
          )
        })}

      </div>
    </nav>
  )
}