
const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src='/aboutpg.jpg'
            alt="About me"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
            About Me
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            I am a Frontend Developer <br />
            based in Syria
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m a passionate frontend developer specializing in building
            responsive and modern web interfaces using React, TypeScript,
            and Tailwind CSS. I enjoy turning complex problems into simple,
            beautiful designs.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            My focus is on clean code, reusable components, and smooth user
            experiences across all devices.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
            Download CV
          </button>
        </div>
      </div>
        <div className="w-auto h-[2px] bg-yellow-400/80 my-8"></div>
    </section>
    
  );
};

export default About;