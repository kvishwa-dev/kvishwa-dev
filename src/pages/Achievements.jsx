export default function Achievements() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <div className="text-center">

        <h2 className="text-4xl font-bold mb-16 text-gray-800">
          Achievements & Conferences
        </h2>

        {/* ================= ACHIEVEMENTS ================= */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-indigo-600 mb-10">
            Achievements
          </h3>

          <div className="w-fit max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 hover:shadow-2xl transition duration-300">

            <h4 className="text-2xl font-semibold mb-4">
              🏆 Winner – AI for Cybersecurity Bootcamp Competition
            </h4>

            <p className="text-gray-600 mb-4">
              IIT Patna | 27 October – 31 October 2025
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Secured top position in the 5-day
              <span className="italic"> AI for Cybersecurity Bootcamp</span>
              at IIT Patna. Applied AI techniques to solve real-world
              cybersecurity challenges, demonstrating strong analytical,
              technical, and problem-solving skills.
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

        {/* ================= CONFERENCES ================= */}
        <div>
          <h3 className="text-3xl font-semibold text-indigo-600 mb-10">
            Conferences
          </h3>

          <div className="w-fit max-w-3xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 hover:shadow-2xl transition duration-300">

            <h4 className="text-2xl font-semibold mb-4">
              2nd International Conference – BuildSEC’25
            </h4>

            <p className="text-gray-600 mb-4">
              IIT Patna | December 1–3, 2025
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Attended the international conference
              <span className="italic"> BuildSEC’25 – Building a Secure and Empowered Cyberspace</span>,
              engaging with researchers and experts in cybersecurity and secure systems.
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
  )
}