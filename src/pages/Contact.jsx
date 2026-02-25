import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen flex items-center justify-center">

      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-12 w-full max-w-xl text-center hover:shadow-2xl transition duration-300">

        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Contact Me
        </h2>

        <p className="mb-10 text-gray-600">
          Feel free to connect with me for collaborations,
          projects, or discussions.
        </p>

        <div className="space-y-8 flex flex-col items-center">

          {/* Email */}
          <a
            href="mailto:cse.kvishwa@gmail.com"
            className="flex items-center space-x-3 bg-indigo-50 px-6 py-3 rounded-lg hover:bg-indigo-100 hover:scale-105 transition"
          >
            <FaEnvelope className="text-indigo-600" size={20} />
            <span className="font-medium text-gray-700">
              cse.kvishwa@gmail.com
            </span>
          </a>

          {/* GitHub + LinkedIn Row */}
          <div className="flex space-x-6">

            <a
              href="https://github.com/kvishwa-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-indigo-50 px-6 py-3 rounded-lg hover:bg-indigo-100 hover:scale-105 transition"
            >
              <FaGithub className="text-indigo-600" size={20} />
              <span className="font-medium text-gray-700">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/kvishwa-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-indigo-50 px-6 py-3 rounded-lg hover:bg-indigo-100 hover:scale-105 transition"
            >
              <FaLinkedin className="text-indigo-600" size={20} />
              <span className="font-medium text-gray-700">
                LinkedIn
              </span>
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}