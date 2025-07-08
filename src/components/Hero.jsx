import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <motion.img
        src="/profile.jpg"
        alt="Feroz Profile"
        className="w-32 h-42 rounded-full border-4 border-indigo-500 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Hey, I'm Feroz
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Full Stack Developer | React & Node.js
      </motion.p>
      <motion.a
        href="/resume.pdf"
        download
        className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl text-white transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;