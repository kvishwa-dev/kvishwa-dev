import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Home() {
  return (
    <div className="min-h-screen flex relative overflow-hidden">

      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center px-20 z-10">

        <div>
          <p className="text-xl mb-4 text-gray-600 tracking-wide">
            Hi, I am
          </p>

          <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
  Vishwajeet Kumar
</h1>

          <p className="text-lg text-gray-600 mb-8">
            Aspiring Data Scientist | ML Engineer
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4 mb-10">
            <a
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5">

            <a
              href="mailto:cse.kvishwa@gmail.com"
              className="bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-indigo-50 transition duration-300"
            >
              <FaEnvelope className="text-indigo-600 text-xl" />
            </a>

            <a
              href="https://github.com/kvishwa-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-gray-200 transition duration-300"
            >
              <FaGithub className="text-gray-800 text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/kvishwa-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-blue-100 transition duration-300"
            >
              <FaLinkedin className="text-blue-600 text-xl" />
            </a>

          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-center relative z-10">

        <div className="relative">

          {/* Decorative Glow Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>

          <img
            src="/profile.jpg"
            alt="Profile"
            className="h-[70vh] object-contain relative z-10 drop-shadow-2xl"
          />

        </div>

      </div>

    </div>
  )
}