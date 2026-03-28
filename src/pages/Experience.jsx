export default function Experience() {

  const experiences = [
    {
      title: "Full Stack Development using MERN Stack",
      org: "C-DAC Patna",
      duration: "01 April 2026 onwards",
      desc: "Will be learning and working on real world projects of MERN.",
      cert: "#",
      status: "Ongoing",
      logo: "/logos/cdac.jpg", // 👈 add logo in public/logos
    },
    {
      title: "AI & Data Science Intern Trainee",
      org: "C-DAC Patna",
      duration: "02 May 2025 – 30 May 2025",
      desc: "Worked on Machine Learning tasks including Regression, Classification, and SVM models.",
      cert: "#",
      status: "Completed",
      logo: "/logos/cdac.jpg",
    },
    {
      title: "Cisco AICTE Virtual Internship Program 2025",
      org: "Edcreate Foundation",
      duration: "June 2025 – Aug 2025",
      desc: "Completed Cisco Networking Essentials coursework.",
      cert: "#",
      status: "Completed",
      logo: "/logos/edcreate.png",
    },
  ]

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600"
      case "Ongoing":
        return "bg-yellow-100 text-yellow-600"
      case "Upcoming":
        return "bg-blue-100 text-blue-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Internships & Training
        </h2>

        <div className="flex flex-col gap-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition duration-300"
            >

              {/* 🔥 Top Section (Logo + Title) */}
              <div className="flex items-start gap-4 mb-4">

                {/* Logo */}
                <img
                  src={exp.logo}
                  alt={exp.org}
                  className="w-12 h-12 object-contain rounded-lg shadow-sm bg-white p-1"
                />

                {/* Title + Status */}
                <div className="flex-1">

                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
                    {exp.title}
                  </h3>

                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(exp.status)}`}>
                    {exp.status}
                  </span>

                </div>

              </div>

              {/* Org */}
              <p className="text-gray-600">
                {exp.org}
              </p>

              {/* Duration */}
              <p className="text-sm text-gray-500 mb-4">
                {exp.duration}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                {exp.desc}
              </p>

              {/* Button */}
              <a
                href={exp.cert}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-fit inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
              >
                View Certificate
              </a>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}