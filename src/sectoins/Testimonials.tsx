import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    text: "Amazing work! Very professional and fast delivery.",
  },
  {
    name: "Sarah Smith",
    role: "UI Designer",
    text: "Clean code and beautiful design. Highly recommended!",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    text: "Great communication and outstanding results.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto change every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0b0f19] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-yellow-400 text-sm tracking-widest uppercase mb-2">
          Testimonials
        </h3>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Clients Say
        </h2>

        <div className="bg-[#020617] p-10 rounded-2xl shadow-lg transition duration-500">
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">
            "{testimonials[current].text}"
          </p>

          <h4 className="text-xl font-semibold">
            {testimonials[current].name}
          </h4>

          <span className="text-yellow-400 text-sm">
            {testimonials[current].role}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
