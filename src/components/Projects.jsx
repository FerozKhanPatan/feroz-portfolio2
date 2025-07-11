import { motion } from "framer-motion";

const projects = [
  {
    title: "Instagram UI Clone",
    description: "A responsive Instagram-inspired UI built using React and MUI.",
    tech: ["React", "Tailwind", "MUI"],
    link: "https://instagram-ui-assignment.vercel.app/",
  },
  {
    title: "E-Commerce Clone",
    description: "I developed an Amazon-style e-commerce clone. The project replicates key features of an online shopping platform, such as product listings, categories, a shopping cart, and a responsive design.",
    tech: ["HTML", "CSS", "Firebase", "JavaScript"],
    link: "https://your-automation-tool.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio you're looking at!",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Food Delivery",
    description: "This very portfolio you're looking at!",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <ul className="flex gap-2 flex-wrap mt-4 text-sm">
              {project.tech.map((t, i) => (
                <li
                  key={i}
                  className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-indigo-500 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;