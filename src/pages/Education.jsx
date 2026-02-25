export default function Education() {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen">

      <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
        Education
      </h2>

      <div className="flex flex-col items-center space-y-12">

        {/* IIT Madras */}
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-2xl font-semibold mb-3">
            Bachelor of Science, BS in Data Science & Applications
          </h3>

          <p className="text-gray-700 font-medium">
            Indian Institute of Technology Madras, Chennai | IIT-M
          </p>

          <p className="text-gray-500 mt-2">
            January 2024 - Present
          </p>

          <p className="text-gray-700 mt-2">
            CGPA: 7.13 / 10
          </p>
        </div>

        {/* BTech */}
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-2xl font-semibold mb-3">
            Bachelor of Technology, BTech in Computer Science & Engineering
          </h3>

          <p className="text-gray-700 font-medium">
            Loknayak Jai Prakash Institute of Technology, Chapra | BEU Patna
          </p>

          <p className="text-gray-500 mt-2">
            Sep 2023 - May 2027
          </p>

          <p className="text-gray-700 mt-2">
            CGPA: 8.34 / 10
          </p>
        </div>

        {/* BSc Physics */}
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-2xl font-semibold mb-3">
            Bachelor of Science, BSc. in Physics (H)
          </h3>

          <p className="text-gray-700 font-medium">
            R. B. College, Dalsinghsarai | LNMU Darbhanga
          </p>

          <p className="text-gray-500 mt-2">
            Aug 2022 - Aug 2023
          </p>

          <p className="text-gray-700 mt-2">
            Grade: 66 %
          </p>
        </div>

        {/* 12th */}
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-2xl font-semibold mb-3">
            Senior Secondary (12th)
          </h3>

          <p className="text-gray-700 font-medium">
            St. Joseph's Public School, Dalsinghsarai | CBSE
          </p>

          <p className="text-gray-500 mt-2">
            PCM | 2020 - 2022
          </p>

          <p className="text-gray-700 mt-2">
            Percentage: 79.20
          </p>
        </div>

        {/* 10th */}
        <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 text-center hover:scale-[1.02] transition duration-300">

          <h3 className="text-2xl font-semibold mb-3">
            Secondary School (10th)
          </h3>

          <p className="text-gray-700 font-medium">
            St. Joseph's Public School, Dalsinghsarai | CBSE
          </p>

          <p className="text-gray-500 mt-2">
            2018 - 2020
          </p>

          <p className="text-gray-700 mt-2">
            Percentage: 90.20
          </p>
        </div>

      </div>
    </div>
  )
}