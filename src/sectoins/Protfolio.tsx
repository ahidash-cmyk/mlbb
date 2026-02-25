type Project = {
  id: number;
  title: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Admin Dashboard",
    image: "/public/Pimage1.png",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/public/Pimage2.jpg",
  },
  {
    id: 3,
    title: "E-commerce UI",
    image: "/public/Pimage3.jpg",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */} 
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
