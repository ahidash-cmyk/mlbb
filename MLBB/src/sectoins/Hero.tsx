import hero from "../assets/Hero.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[73vh] flex items-center justify-center text-white"
    >
      {/* Background image */}
      <img
        src={hero}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-yellow-400 text-lg mb-4">Hello 👋</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          I’m Jood Alash
        </h1>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Frontend Developer specializing in React, TypeScript, and modern UI
          design.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold transition duration-300">
          Download CV
        </button>
      </div>
    </section>
  );
};
export default Hero;
