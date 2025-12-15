import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/feroz365", 
      label: "GitHub",
      color: "hover:text-white"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/feroz365", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: <Mail size={24} />, 
      href: "mailto:faerouz@tutamail.com", 
      label: "Email",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section className="py-16 px-4 w-full" id="contact">
      <div className="max-w-2xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm currently open to new opportunities, interesting projects, or just a friendly chat about tech!
          </p>
          
          <motion.a
            href="mailto:faerouz@tutamail.com"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 font-medium text-lg group mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Mail size={20} />
              Say Hello
            </span>
          </motion.a>

          <div className="mt-12">
            <p className="text-gray-400 mb-6">Or find me on</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-all duration-300 p-3 rounded-full bg-gray-800 hover:bg-gray-700`}
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;