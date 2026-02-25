const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and modern websites using React, TypeScript, and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "UI / UX Design",
    description:
      "Designing clean and user-friendly interfaces with a focus on user experience.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, scalability, and best performance.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#0f172a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h3 className="text-yellow-400 text-sm tracking-widest uppercase mb-2">
            Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            What I Do
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#020617] p-8 rounded-2xl hover:bg-yellow-500/80 transition duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:text-black transition">
                {service.icon}
              </div>

              {/* Title */}
              <h4 className="text-xl font-semibold mb-4 group-hover:text-black transition">
                {service.title}
              </h4>

              {/* Description */}
              <p className="text-gray-400 group-hover:text-black transition">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;