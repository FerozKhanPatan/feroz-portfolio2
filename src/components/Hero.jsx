import { motion } from "framer-motion";
import { useState } from "react";
import { Download, FileText, Clock, MapPin, Calendar } from "lucide-react";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";

const Hero = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { resumeAccess, getRemainingTime, revokeResumeAccess } = useAuth();
  
  const remainingTime = getRemainingTime();
  
  const formatTime = (seconds) => {
    if (seconds <= 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResumeClick = () => {
    if (resumeAccess) {
      window.open('/resume.pdf', '_blank');
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Profile Photo with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 blur-xl opacity-30"></div>
              
              {/* Profile image container */}
              <div className="relative w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-950">
                  <img
                    src="/profile.jpg"
                    alt="Feroz Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Status badge */}
              <div className="absolute bottom-4 right-6">
                <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300">Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
              <span className="text-gray-300 text-sm">👋 Hello! I'm</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Feroz Khan Patan
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-6">
              <span className="font-semibold text-white">Full Stack Developer</span>
              <span className="mx-3">•</span>
              <span className="text-cyan-400">React & Node.js Expert</span>
            </div>
            
            {/* Location & Experience */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>3+ Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* Resume Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <div className="inline-block relative group">
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              {/* Main Resume Button */}
              <button
                onClick={handleResumeClick}
                className="relative inline-flex items-center gap-3 bg-gray-900 border border-gray-700 group-hover:border-indigo-500 px-10 py-5 rounded-2xl text-white text-lg font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {resumeAccess ? (
                  <>
                    <Download className="group-hover:animate-bounce" size={24} />
                    <div className="text-left">
                      <div className="font-bold">Download Resume</div>
                      <div className="text-sm text-gray-400">PDF Format</div>
                    </div>
                  </>
                ) : (
                  <>
                    <FileText size={24} />
                    <div className="text-left">
                      <div className="font-bold">View My Resume</div>
                      <div className="text-sm text-gray-400">Secure Access</div>
                    </div>
                  </>
                )}
                <div className="ml-4 px-3 py-1 bg-gray-800 rounded-lg text-sm">
                  {resumeAccess ? "Ready" : "Click"}
                </div>
              </button>
            </div>
            
            {/* Access Status */}
            {resumeAccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 inline-flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-green-400 font-medium">Access Active</div>
                    <div className="text-gray-400 text-sm">
                      Expires in: <span className="text-white font-mono">{formatTime(remainingTime)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={revokeResumeAccess}
                  className="text-gray-400 hover:text-red-400 px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors"
                  title="End Session"
                >
                  End
                </button>
              </motion.div>
            )}
            
            {/* Status Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-500 mt-6 max-w-md mx-auto"
            >
              {resumeAccess 
                ? "✅ Resume access granted. You can download anytime within the session."
                : "🔒 Resume requires verification to track professional engagement."
              }
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span className="text-sm">Explore More</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2 group-hover:border-indigo-500">
                <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};

export default Hero;