import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Message ready! (Hook this to Formspree/EmailJS next)");
  };

  return (
    <section name="contact" className="w-full bg-[#0A2540] text-white pt-24">
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-teal-400">
            Contact
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Want to collaborate or chat backend? Send me a message.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-xl mx-auto rounded-xl bg-white/5 border border-white/10 p-6 hover:border-teal-400/40 transition">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-sm text-gray-300">
              Name
              <input
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white
                           placeholder:text-gray-500 focus:outline-none focus:border-teal-400/60
                           focus:ring-1 focus:ring-teal-400/20 transition"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </label>

            <label className="text-sm text-gray-300">
              Email
              <input
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white
                           placeholder:text-gray-500 focus:outline-none focus:border-teal-400/60
                           focus:ring-1 focus:ring-teal-400/20 transition"
                type="email"
                placeholder="you@email.com"
                name="email"
                required
              />
            </label>

            <label className="text-sm text-gray-300">
              Message
              <textarea
                className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white
                           placeholder:text-gray-500 focus:outline-none focus:border-teal-400/60
                           focus:ring-1 focus:ring-teal-400/20 transition"
                name="message"
                rows="6"
                placeholder="Tell me what you’re building..."
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-teal-500 hover:bg-teal-400 text-[#0A2540]
                         font-semibold px-6 py-3 transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-teal-300 text-center mt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
