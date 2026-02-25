export default function Skills() {

  const skillCategories = {
    "Programming Languages": [
      "Java",
      "Python",
      "C",
      "C++",
      "JavaScript"
    ],
    "Libraries": [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn"
    ],
    "Frameworks": [
      "React",
      "Node.js",
      "Express"
    ],
    "Databases": [
      "MySQL",
      "MongoDB"
    ],
    "Concepts": [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Artificial Intelligence",
      "Object Oriented Programming",
      "Database Management System",
      "Computer Networks",
      "REST APIs"
    ]
  }

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">

        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8"
          >

            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-8 text-indigo-600 text-center">
              {category}
            </h3>

            {/* Skills Section */}
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="w-64 min-h-[70px] flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-6 py-4 rounded-xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}