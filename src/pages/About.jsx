export default function About() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center text-gray-800">
          About Me
        </h2>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:shadow-2xl transition duration-300">

          {/* Paragraphs */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            I am a passionate Computer Science student with a strong interest in 
            Artificial Intelligence, Machine Learning, and Data Science. 
            I enjoy transforming complex problems into simple, efficient, and scalable solutions.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8">
            My journey in tech is driven by curiosity and a desire to build impactful systems. 
            I continuously explore modern technologies, contribute to projects, 
            and improve my problem-solving skills through hands-on development.
          </p>

          {/* Focus Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8">

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Machine Learning
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                Building predictive models and intelligent systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Data Science
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                Extracting insights and creating data-driven solutions.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-5 sm:p-6 shadow-lg hover:scale-105 transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Full Stack Development
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                Designing and developing responsive web applications.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}