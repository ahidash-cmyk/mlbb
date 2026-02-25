const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0b0f19] text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
            Contact
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
        </div>

        {/* Form */}
        <form className="bg-[#020617] p-8 rounded-2xl shadow-lg space-y-6">
          
          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition"
            />
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Comment
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400 transition resize-none"
            />
          </div>

          {/* Submit (UI فقط) */}
          <button
            type="button"
            className="w-full bg-yellow-400 text-black py-3 rounded-full font-medium hover:bg-yellow-300 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;