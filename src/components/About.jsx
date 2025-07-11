const About = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center" id="about">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        I'm a passionate Full Stack Developer with 3 years of hands-on experience
        crafting interactive web applications using React, Node.js, and modern
        frontend tools. I love solving real-world problems with clean code, a
        creative eye, and performance in mind.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {[
          "React",
          "Tailwind CSS",
          "Bootstrap",
          "Node.js",
          "Express",
          "MongoDB",
          "TypeScript",
          "MUI",
          "Framer Motion",
          "Git",
        ].map((skill, i) => (
          <span
            key={i}
            className="bg-gray-800 text-gray-200 px-4 py-1 rounded-full hover:bg-indigo-500 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;