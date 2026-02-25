type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
};

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Modern Portfolio with React",
    excerpt:
      "Learn how to structure and design a modern portfolio website using React and Tailwind CSS.",
    image: "/Bimage1.jpg",
    date: "Jan 12, 2025",
  },
  {
    id: 2,
    title: "Responsive Design Tips for Frontend Developers",
    excerpt:
      "Best practices and techniques to create fully responsive layouts that look great on all devices.",
    image: "/Bimage2.jpg",
    date: "Feb 3, 2025",
  },
  {
    id: 3,
    title: "Why Tailwind CSS Boosts Productivity",
    excerpt:
      "Discover how Tailwind CSS helps developers build fast, consistent, and scalable UI components.",
    image: "/Bimage3.png",
    date: "Mar 8, 2025",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-[#0f172a] text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
            Blog
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Articles
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-sm text-gray-400">
                  {post.date}
                </span>

                <h3 className="text-xl font-semibold mt-3 mb-3 group-hover:text-yellow-400 transition">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                <button className="text-yellow-400 font-medium underline cursor-pointer hover:text-yellow-300 transition">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
             <div className="w-auto h-[2px] bg-yellow-400/80 my-8"></div>
    </section>
  );
};

export default Blog;