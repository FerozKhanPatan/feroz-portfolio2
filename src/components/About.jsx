import { motion } from "framer-motion";
import { 
  Code, 
  Coffee, 
  Rocket, 
  Target, 
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";

const About = () => {
  // Timeline data
  const timeline = [
    {
      year: "2021 - Present",
      title: "Full Stack Developer",
      description: "Building scalable web applications with React, Node.js, and modern cloud technologies",
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "2020 - 2021",
      title: "Backend Engineer",
      description: "Developed microservices and APIs using Java Spring Boot and PostgreSQL",
      icon: <Coffee className="w-5 h-5" />
    },
    {
      year: "2019 - 2020",
      title: "Systems Programmer",
      description: "Worked on low-level systems programming and algorithm optimization in C/C++",
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: "2018",
      title: "Computer Science Graduate",
      description: "Bachelor's in Computer Science with focus on Data Structures & Algorithms",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ];

  // Core competencies
  const competencies = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "End-to-end application development from UI to database",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Strong algorithmic thinking with DSA background",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Focus",
      description: "Optimized, scalable solutions with modern best practices",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Experience working in agile teams and code reviews",
      color: "from-green-500 to-teal-500"
    }
  ];

  // Fun facts
  const funFacts = [
    "🎯 Can solve complex algorithms problems in under 30 minutes",
    "☕ Writes cleaner code after 2 cups of coffee",
    "🚀 Built my first website at 16 years old",
    "📚 Always learning 2 new technologies simultaneously",
    "🎮 Loves coding challenges and hackathons",
    "🤝 Mentored 5+ junior developers in past year"
  ];

  // Tech stack highlights
  const techHighlights = [
    { name: "React", level: "Expert", projects: 15, color: "bg-cyan-500" },
    { name: "Spring Boot", level: "Advanced", projects: 8, color: "bg-green-500" },
    { name: "Angular", level: "Advanced", projects: 6, color: "bg-red-500" },
    { name: "Node.js", level: "Expert", projects: 12, color: "bg-green-600" },
    { name: "C/C++", level: "Proficient", projects: 5, color: "bg-blue-600" },
    { name: "MongoDB", level: "Advanced", projects: 10, color: "bg-green-400" }
  ];

  return (
    <section className="py-20 px-4 w-full" id="about">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium">Full Stack Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Digital</span> Experiences
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            I craft high-performance web applications that solve real problems. With expertise spanning from systems programming to modern web frameworks, I bridge the gap between robust backend logic and beautiful frontend interfaces.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Years Experience", value: "3+", icon: <Briefcase className="w-6 h-6" /> },
            { label: "Projects Completed", value: "30+", icon: <Award className="w-6 h-6" /> },
            { label: "Technologies", value: "25+", icon: <Code className="w-6 h-6" /> },
            { label: "Happy Clients", value: "15+", icon: <Heart className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 text-center group hover:border-indigo-500/30 transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-700/50 rounded-xl mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Story</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with curiosity about how computers work at their core. I began with <span className="text-blue-400 font-semibold">C/C++</span> programming, which gave me a solid foundation in memory management, algorithms, and system architecture.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                This systems-level understanding naturally evolved into web development, where I discovered the power of building accessible, user-centric applications. Today, I thrive on creating solutions that are not just functional, but <span className="text-cyan-400 font-semibold">performant, scalable, and delightful to use</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                What excites me most is the intersection of <span className="text-purple-400 font-semibold">robust backend systems</span> and <span className="text-pink-400 font-semibold">elegant frontend experiences</span>. Whether it's optimizing a database query or crafting a smooth animation, I love every part of the development process.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-12 p-6 bg-gray-800/30 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">Bring</span>
            </h2>
            
            <div className="space-y-6 mb-12">
              {competencies.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Highlights */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Tech Expertise</h3>
              <div className="space-y-4">
                {techHighlights.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                        <span className="text-white font-medium">{tech.name}</span>
                        <span className="text-gray-400 text-sm">({tech.projects} projects)</span>
                      </div>
                      <span className="text-sm px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                        {tech.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${tech.color} transition-all duration-1000`}
                        style={{ 
                          width: tech.level === 'Expert' ? '95%' : 
                                 tech.level === 'Advanced' ? '85%' : '75%' 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gray-900 border-4 border-indigo-500 rounded-full transform -translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700 hover:border-indigo-500/30 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-700/50 rounded-lg">
                        <div className="text-indigo-400">{item.icon}</div>
                      </div>
                      <span className="text-indigo-400 font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl border border-gray-700"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
              <Target className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-400 text-sm font-medium">My Philosophy</span>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Code should be <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">efficient</span>, maintainable, and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">delightful</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I believe great software combines technical excellence with user empathy. Every line of code should serve a purpose, every feature should solve a real problem, and every interaction should feel intuitive. Whether I'm optimizing a complex algorithm or designing a user interface, I strive for solutions that are both technically sound and human-centered.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300">
                🚀 Performance First
              </div>
              <div className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300">
                🎯 User-Centric Design
              </div>
              <div className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300">
                📚 Continuous Learning
              </div>
              <div className="px-4 py-2 bg-gray-700/50 rounded-full text-gray-300">
                🤝 Collaborative Approach
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;