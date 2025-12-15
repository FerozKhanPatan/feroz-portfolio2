
import { useState } from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Server, Database, Cpu, Terminal } from "lucide-react";

const Projects = () => {
  const projects = [
    // Java & Spring Boot Projects
    {
      title: "E-Commerce Backend API",
      description: "RESTful e-commerce backend with Spring Boot, JWT authentication, payment integration, and microservices architecture.",
      tech: ["Java", "Spring Boot", "MySQL", "Redis", "Docker", "JWT"],
      link: "#",
      github: "#",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      category: "Backend"
    },
    {
      title: "Banking Management System",
      description: "Secure banking application with role-based access, transaction processing, and real-time notifications using Spring Security.",
      tech: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Kafka"],
      link: "#",
      github: "#",
      icon: <Database className="w-5 h-5 text-green-400" />,
      category: "Backend"
    },
    {
      title: "Hotel Booking API",
      description: "Microservices-based hotel reservation system with real-time availability, booking engine, and payment gateway integration.",
      tech: ["Java", "Spring Cloud", "MongoDB", "RabbitMQ", "Docker"],
      link: "#",
      github: "#",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      category: "Microservices"
    },

    // React Projects
    {
      title: "Instagram UI Clone",
      description: "A pixel-perfect, responsive Instagram clone with dark/light themes, stories, and posts feed built using React and Material-UI.",
      tech: ["React", "Material-UI", "Tailwind", "Framer Motion"],
      link: "https://instagram-ui-assignment.vercel.app/",
      github: "https://github.com/feroz365/instagram-clone",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      category: "Frontend"
    },
    {
      title: "Real-Time Dashboard",
      description: "Admin dashboard with real-time analytics, interactive charts, and user management using React Query and Recharts.",
      tech: ["React", "TypeScript", "Recharts", "React Query", "Zustand"],
      link: "#",
      github: "#",
      icon: <Terminal className="w-5 h-5 text-yellow-400" />,
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with drag-drop functionality, team assignments, and real-time updates.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      link: "#",
      github: "#",
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      category: "Full Stack"
    },

    // Angular Projects
    {
      title: "Employee Portal",
      description: "Enterprise-grade employee management portal with Angular Material, NgRx state management, and role-based dashboards.",
      tech: ["Angular", "TypeScript", "NgRx", "Angular Material", "RxJS"],
      link: "#",
      github: "#",
      icon: <Terminal className="w-5 h-5 text-red-400" />,
      category: "Frontend"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive fitness application with workout planning, progress tracking, and nutrition logging using Angular.",
      tech: ["Angular", "Firebase", "Chart.js", "PWA", "IndexedDB"],
      link: "#",
      github: "#",
      icon: <Code className="w-5 h-5 text-orange-400" />,
      category: "Frontend"
    },

    // C/C++ Projects
    {
      title: "Multi-threaded Web Server",
      description: "High-performance HTTP server written in C with thread pooling, request parsing, and static file serving capabilities.",
      tech: ["C", "POSIX Threads", "Socket Programming", "Makefile", "Linux"],
      link: "#",
      github: "#",
      icon: <Cpu className="w-5 h-5 text-gray-400" />,
      category: "Systems"
    },
    {
      title: "File Compression Utility",
      description: "Command-line file compression tool implementing Huffman coding algorithm with custom binary tree structures.",
      tech: ["C++", "Data Structures", "Algorithms", "STL", "CMake"],
      link: "#",
      github: "#",
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
      category: "Systems"
    },
    {
      title: "Student Database System",
      description: "Console-based student records management system with file I/O, searching, sorting, and reporting features.",
      tech: ["C", "File Handling", "Data Structures", "Pointers", "Memory Management"],
      link: "#",
      github: "#",
      icon: <Database className="w-5 h-5 text-green-500" />,
      category: "Systems"
    },

    // Additional Full Stack Projects
    {
      title: "Food Delivery App",
      description: "Restaurant discovery and food ordering platform with real-time tracking, reviews, and payment integration.",
      tech: ["React Native", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "#",
      github: "#",
      icon: <Code className="w-5 h-5 text-pink-400" />,
      category: "Mobile"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with 7-day forecasts, location-based data, and interactive maps.",
      tech: ["React", "OpenWeather API", "Chart.js", "Geolocation", "PWA"],
      link: "#",
      github: "#",
      icon: <Terminal className="w-5 h-5 text-sky-400" />,
      category: "Frontend"
    },
    {
      title: "Portfolio Website",
      description: "This portfolio built with React, Framer Motion animations, and responsive design principles.",
      tech: ["React", "Tailwind", "Framer Motion", "Vite", "Sonner"],
      link: "#",
      github: "https://github.com/feroz365/portfolio",
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      category: "Frontend"
    }
  ];

  // Get unique categories for filtering
  const categories = [...new Set(projects.map(project => project.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 px-4 w-full" id="projects">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Explore my work across different technologies and domains
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full transition-all ${activeCategory === 'All' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${activeCategory === category 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-indigo-500/30 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Project Header with Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-700/50 rounded-lg">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 bg-gray-900/50 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-700/50 text-gray-300 text-xs px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technology Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-6 bg-gray-800/30 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Technology <span className="text-indigo-400">Stack</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Frontend
                </h4>
                <ul className="space-y-2">
                  {["React", "Angular", "TypeScript", "Tailwind CSS", "Material-UI", "Framer Motion"].map((tech) => (
                    <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Server className="w-5 h-5 text-green-400" />
                  Backend
                </h4>
                <ul className="space-y-2">
                  {["Java", "Spring Boot", "Node.js", "Express", "Python", "REST APIs"].map((tech) => (
                    <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-400" />
                  Database
                </h4>
                <ul className="space-y-2">
                  {["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Elasticsearch"].map((tech) => (
                    <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Others */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-yellow-400" />
                  Tools & Others
                </h4>
                <ul className="space-y-2">
                  {["Git", "Docker", "AWS", "C/C++", "Linux", "Microservices"].map((tech) => (
                    <li key={tech} className="text-gray-300 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;