import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-52 h-52 md:w-72 md:h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 md:w-72 md:h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-5 sm:px-8 md:px-20 py-12 md:py-0 z-10 text-center md:text-left">

        {/* Tagline */}
        <div className="mb-6 flex items-start justify-center md:justify-start gap-2 sm:gap-3">

          <span className="text-xl sm:text-2xl md:text-4xl mt-1 shrink-0">
            ⚡
          </span>

          <div>
            <p className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-[1.2] tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Building Intelligent & Secure <br />
              Systems for a Smarter Future.
            </p>
          </div>
        </div>

        {/* Content */}
        <div>

          <p className="text-base sm:text-lg md:text-xl mb-3 md:mb-4 text-gray-600">
            Hi, I am
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-3 md:mb-4 leading-[1.2]">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vishwajeet Kumar
            </span>
          </h1>

          {/* Roles */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 md:mb-8">
            <span className="text-gray-600 mr-2">I am a</span>
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  "Data Scientist",
                  2000,
                  "ML Engineer",
                  2000,
                  "Web Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-10">

            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/Resume.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 hover:scale-105 transition duration-300"
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-start gap-4 sm:gap-5">

            <a href="mailto:cse.kvishwa@gmail.com" className="bg-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition">
              <FaEnvelope className="text-indigo-600 text-lg sm:text-xl" />
            </a>

            <a href="https://github.com/kvishwa-dev" target="_blank" rel="noopener noreferrer" className="bg-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition">
              <FaGithub className="text-gray-800 text-lg sm:text-xl" />
            </a>

            <a href="https://linkedin.com/in/kvishwa-dev" target="_blank" rel="noopener noreferrer" className="bg-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition">
              <FaLinkedin className="text-blue-600 text-lg sm:text-xl" />
            </a>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0 relative z-10">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>

          {/* Profile Image */}
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border-[8px] md:border-[12px] border-white overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
            <img
              src="profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </div>
  )
}