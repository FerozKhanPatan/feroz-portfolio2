import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Lock, FileText, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'sonner';

const AuthModal = ({ isOpen, onClose }) => {
  const [method, setMethod] = useState('email');
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sentCode, setSentCode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const { grantResumeAccess } = useAuth();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSentCode(false);
      setCode('');
      setEmail('');
      setPhone('');
      setVerificationAttempts(0);
    }
  }, [isOpen]);

  // Handle send verification code
  const handleSendCode = () => {
    const value = method === 'email' ? email : phone;
    
    if (!value) {
      toast.error(`Please enter your ${method}`);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSentCode(true);
      setIsLoading(false);
      
      // In real app, this would come from backend
      const demoCode = '123456';
      
      // For demo purposes, show code in console and toast
      console.log(`[DEMO] Verification code for ${value}: ${demoCode}`);
      
      toast.info(`Demo: Code sent! Use ${demoCode}`, {
        duration: 5000,
        description: 'Check console for demo code'
      });
    }, 1500);
  };

  // Handle verification
  const handleVerify = () => {
    if (code.length !== 6) {
      toast.error('Please enter a 6-digit code');
      return;
    }

    setIsLoading(true);
    
    // Simulate verification
    setTimeout(() => {
      // DEMO: Always accept '123456'
      if (code === '123456') {
        const granted = grantResumeAccess(1); // 1 hour access
        
        if (granted) {
          toast.success('Verified! You can now download the resume.');
          onClose();
          
          // Auto-open resume after a brief delay
          setTimeout(() => {
            window.open('/resume.pdf', '_blank');
          }, 500);
        }
      } else {
        const newAttempts = verificationAttempts + 1;
        setVerificationAttempts(newAttempts);
        
        if (newAttempts >= 3) {
          toast.error('Too many failed attempts. Please try again later.');
          setSentCode(false);
          setCode('');
          setVerificationAttempts(0);
        } else {
          toast.error(`Invalid code. Try: 123456 (${3 - newAttempts} attempts left)`);
        }
      }
      
      setIsLoading(false);
    }, 1000);
  };

  // Format phone number
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '');
    if (phoneNumber.length <= 3) return phoneNumber;
    if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
          >
            
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-500/20 rounded-lg mt-1">
                      <FileText className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Access Resume</h3>
                      <p className="text-gray-400 text-sm">Verify to download (1 hour access)</p>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Method Selector */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setMethod('email')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                      method === 'email' 
                        ? 'bg-indigo-500 text-white ring-2 ring-indigo-500/50' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <Mail size={18} />
                    Email
                  </button>
                  <button
                    onClick={() => setMethod('phone')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg transition-colors ${
                      method === 'phone' 
                        ? 'bg-indigo-500 text-white ring-2 ring-indigo-500/50' 
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    <Phone size={18} />
                    Phone
                  </button>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  {!sentCode ? (
                    <>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2 font-medium">
                          {method === 'email' ? 'Email Address' : 'Phone Number'}
                        </label>
                        <div className="flex gap-2">
                          <input
                            type={method === 'email' ? 'email' : 'tel'}
                            value={method === 'email' ? email : phone}
                            onChange={method === 'email' 
                              ? (e) => setEmail(e.target.value)
                              : handlePhoneChange}
                            placeholder={method === 'email' 
                              ? 'you@example.com' 
                              : '(123) 456-7890'}
                            className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            disabled={isLoading}
                          />
                          <button
                            onClick={handleSendCode}
                            disabled={isLoading || (method === 'email' ? !email : !phone)}
                            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors"
                          >
                            {isLoading ? 'Sending...' : 'Send Code'}
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-500 text-sm">
                        We'll send a 6-digit verification code. Once verified, you'll have 1 hour to download the resume.
                      </p>
                      
                      <div className="p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                        <p className="text-gray-400 text-sm">
                          <span className="text-yellow-400 font-medium">Demo:</span> Use any email/phone. Code will be <code className="bg-gray-900 px-2 py-1 rounded text-indigo-300">123456</code>
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500/20 rounded-full mb-3">
                          <Lock className="w-6 h-6 text-indigo-400" />
                        </div>
                        <p className="text-gray-300">
                          Code sent to <span className="text-indigo-300">{method === 'email' ? email : phone}</span>
                        </p>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2 font-medium">
                          Verification Code
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={code}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                              setCode(value);
                            }}
                            placeholder="Enter 6-digit code"
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-center text-2xl tracking-widest font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            maxLength={6}
                            autoFocus
                            disabled={isLoading}
                          />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <span className="text-gray-500 text-xs">
                              {6 - code.length} digits left
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <button
                            onClick={() => setSentCode(false)}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                          >
                            ← Back
                          </button>
                          <p className="text-gray-500 text-sm">
                            Demo code: <span className="text-indigo-400 font-mono">123456</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => {
                            setSentCode(false);
                            setCode('');
                          }}
                          className="flex-1 py-3 border border-gray-700 text-gray-400 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                          disabled={isLoading}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleVerify}
                          disabled={code.length !== 6 || isLoading}
                          className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Verifying...
                            </>
                          ) : (
                            <>
                              <Download size={18} />
                              Verify & Download
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <p className="text-gray-500 text-sm">
                    <span className="text-yellow-400">Note:</span> This helps track resume downloads while keeping my portfolio accessible.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;