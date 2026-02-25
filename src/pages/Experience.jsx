export default function Experience() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
          Internships & Training
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-indigo-400 ml-6 space-y-16">

          {/* Experience 1 */}
          <div className="relative pl-10">

            {/* Timeline Dot */}
            <div className="absolute -left-6 top-2 w-5 h-5 bg-indigo-600 rounded-full shadow-lg"></div>

            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">

              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                AI & Data Science Intern Trainee
              </h3>

              <p className="text-gray-600 mb-4">
                C-DAC Patna | 02 May 2025 – 30 May 2025
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Worked on Machine Learning tasks including Regression,
                Classification, and Support Vector Machine (SVM) models.
                Built practical implementations and gained hands-on
                exposure to real-world ML workflows.
              </p>

              {/* Certificate Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-10">

            {/* Timeline Dot */}
            <div className="absolute -left-6 top-2 w-5 h-5 bg-indigo-600 rounded-full shadow-lg"></div>

            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 hover:shadow-2xl transition duration-300">

              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Cisco AICTE Virtual Internship Program 2025
              </h3>

              <p className="text-gray-600 mb-4">
                Edcreate Foundation | June 2025 – Aug 2025
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Successfully completed Cisco Networking Essentials coursework.
                Worked on assigned projects, strengthening knowledge in
                networking fundamentals, protocols, and infrastructure.
              </p>

              {/* Certificate Button */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}