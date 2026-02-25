export default function Projects() {
  const projects = [
    {
      title: "Med Genie AI",
      description:
        "AI-powered healthcare assistant that analyzes symptoms and provides preliminary medical insights.",
      github: "https://github.com/kvishwa-dev/med-genie-ai"
    },
    {
      title: "Startup Cell LNJPIT",
      description:
        "Institutional initiative focused on fostering entrepreneurship and innovation within campus.",
      github: "https://github.com/kvishwa-dev/startup-cell-lnjpit"
    },
  ]

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

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}