import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-60 h-60 md:w-72 md:h-72 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 md:w-72 md:h-72 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="w-full md:w-3/5 flex flex-col justify-center px-6 sm:px-10 md:px-20 py-16 md:py-0 z-10 text-center md:text-left">

        {/* Tagline + Content aligned together */}
        <div className="mb-8 flex items-start justify-center md:justify-start gap-3">

          {/* Icon */}
          <span className="text-2xl sm:text-3xl md:text-4xl mt-1 shrink-0">
            ⚡
          </span>

          {/* Content Block */}
          <div className="flex flex-col">

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Building Intelligent & Secure <br />
              Systems for a Smarter Future.
            </p>

            {/* Main Content */}
            <div className="mt-6">

              <p className="text-lg sm:text-xl mb-4 text-gray-600">
                Hi, I am
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-[1.2]">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Vishwajeet Kumar
                </span>
              </h1>

              {/* Roles */}
              <p className="text-xl sm:text-2xl font-semibold mb-8">
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
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10">

                <a
                  href="/projects"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300"
                >
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 hover:scale-105 transition duration-300"
                >
                  <FaDownload />
                  Resume
                </a>

              </div>

              {/* Social */}
              <div className="flex justify-center md:justify-start space-x-5">

                <a href="mailto:kvishwa@outlook.in" className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
                  <FaEnvelope className="text-indigo-600 text-xl" />
                </a>

                <a href="https://github.com/kvishwa-dev" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
                  <FaGithub className="text-gray-800 text-xl" />
                </a>

                <a href="https://linkedin.com/in/kvishwa-dev" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
                  <FaLinkedin className="text-blue-600 text-xl" />
                </a>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-2/5 flex justify-center items-center py-10 md:py-0 relative z-10">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>

          {/* Profile Image */}
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[12px] border-white overflow-hidden shadow-2xl hover:scale-105 transition duration-300">
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