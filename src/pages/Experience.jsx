export default function Experience() {

  const experiences = [
    {
      title: "Cyber Security Intern",
      org: "Anonymous India",
      duration: "02 April 2026 onwards",
      desc: "Will be learning and working on Cyber Security skills.",
      cert: "https://drive.google.com/file/d/14yvNxjmdJ-vtUcb8rb6TVjnNi4F1I1A1/view?usp=sharing",
      status: "Ongoing",
      logo: "/logos/anony.png",
    },
    {
      title: "AI & Data Science Intern Trainee",
      org: "C-DAC Patna",
      duration: "02 May 2025 – 30 May 2025",
      desc: "Worked on Machine Learning tasks including Regression, Classification, and SVM models.",
      cert: "https://drive.google.com/file/d/1nThYTTB8K5ErJzFBbybZIwJxD-k2tV2R/view?usp=sharing",
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
    <div className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <div className="max-w-2xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
          Internships & Training
        </h2>

        <div className="flex flex-col gap-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition duration-300"
            >

              {/* 🔥 Header */}
              <div className="flex items-start gap-4">

                {/* Logo */}
                <img
                  src={exp.logo}
                  alt={exp.org}
                  className="w-12 h-12 object-contain rounded-lg shadow-sm bg-white p-1"
                />

                {/* Title + Status */}
                <div>

                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-600 mb-2">
                    {exp.title}
                  </h3>

                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(exp.status)}`}>
                    {exp.status}
                  </span>

                </div>

              </div>

              {/* 🔥 Content aligned properly */}
              <div className="mt-4 pl-[64px]">

                <p className="text-gray-600">
                  {exp.org}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  {exp.duration}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.desc}
                </p>

                <a
                  href={exp.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition duration-300"
                >
                  View Certificate
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}