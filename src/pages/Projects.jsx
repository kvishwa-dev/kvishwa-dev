import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

export default function Projects() {
  const projects = [
    {
      title: "Med Genie AI",
      description:
        "AI-powered healthcare assistant that analyzes symptoms and provides preliminary medical insights.",
      github: "https://github.com/kvishwa-dev/med-genie-ai",
      live: "https://med-genie-ai.vercel.app/",
      tags: ["AI", "Healthcare", "MERN"],
    },
    {
      title: "Startup Cell LNJPIT",
      description:
        "Institutional initiative focused on fostering entrepreneurship and innovation within campus.",
      github: "https://github.com/kvishwa-dev/startup-cell-lnjpit",
      live: "https://startup-cell-lnjpit.vercel.app/",
      tags: ["MERN", "Startup", "Web"],
    },
  ]

  // 🎨 Tag color map
  const tagColors = {
    AI: "bg-purple-100 text-purple-600",
    MERN: "bg-green-100 text-green-600",
    Healthcare: "bg-red-100 text-red-600",
    Startup: "bg-yellow-100 text-yellow-600",
    Web: "bg-blue-100 text-blue-600",
  }

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between text-center"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        tagColors[tag] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-4 flex-wrap">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 hover:scale-105 transition duration-300"
                  >
                    <FiExternalLink />
                    <span>Try It Now</span>
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm">
                    Live demo coming soon
                  </span>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}