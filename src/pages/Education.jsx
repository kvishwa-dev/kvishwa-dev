export default function Education() {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center text-gray-800">
        Education
      </h2>

      <div className="flex flex-col items-center gap-8 sm:gap-12">

        {/* IIT Madras */}
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-lg sm:text-2xl font-semibold mb-3">
            Bachelor of Science, BS in Data Science & Applications
          </h3>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            Indian Institute of Technology Madras, Chennai | IIT-M
          </p>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            January 2024 - Present
          </p>

          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            CGPA: 7.13 / 10
          </p>
        </div>

        {/* BTech */}
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-lg sm:text-2xl font-semibold mb-3">
            Bachelor of Technology, BTech in Computer Science & Engineering
          </h3>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            Loknayak Jai Prakash Institute of Technology, Chapra | BEU Patna
          </p>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Sep 2023 - May 2027
          </p>

          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            CGPA: 8.34 / 10
          </p>
        </div>

        {/* BSc Physics */}
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-lg sm:text-2xl font-semibold mb-3">
            Bachelor of Science, BSc. in Physics (H)
          </h3>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            R. B. College, Dalsinghsarai | LNMU Darbhanga
          </p>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Aug 2022 - Aug 2023
          </p>

          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Grade: 66 %
          </p>
        </div>

        {/* 12th */}
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-lg sm:text-2xl font-semibold mb-3">
            Senior Secondary (12th)
          </h3>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            St. Joseph's Public School, Dalsinghsarai | CBSE
          </p>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            PCM | 2020 - 2022
          </p>

          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Percentage: 79.20%
          </p>
        </div>

        {/* 10th */}
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-lg sm:text-2xl font-semibold mb-3">
            Secondary School (10th)
          </h3>

          <p className="text-gray-700 font-medium text-sm sm:text-base">
            St. Joseph's Public School, Dalsinghsarai | CBSE
          </p>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            2018 - 2020
          </p>

          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Percentage: 90.20%
          </p>
        </div>

      </div>
    </div>
  )
}