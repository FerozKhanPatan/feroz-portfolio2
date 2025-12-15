import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [resumeAccess, setResumeAccess] = useState(false);
  const [resumeExpiry, setResumeExpiry] = useState(null);

  // Check localStorage on mount
  useEffect(() => {
    const savedAccess = localStorage.getItem('resumeAccess');
    const savedExpiry = localStorage.getItem('resumeExpiry');
    
    if (savedAccess === 'true' && savedExpiry) {
      const expiryTime = new Date(savedExpiry);
      const now = new Date();
      
      if (now < expiryTime) {
        setResumeAccess(true);
        setResumeExpiry(expiryTime);
      } else {
        // Clear expired access
        localStorage.removeItem('resumeAccess');
        localStorage.removeItem('resumeExpiry');
      }
    }
  }, []);

  // Grant access function
  const grantResumeAccess = (hours = 1) => {
    const expiry = new Date();
    expiry.setHours(expiry.getHours() + hours);
    
    setResumeAccess(true);
    setResumeExpiry(expiry);
    
    // Save to localStorage
    localStorage.setItem('resumeAccess', 'true');
    localStorage.setItem('resumeExpiry', expiry.toISOString());
    
    toast.success(`Resume access granted for ${hours} hour${hours > 1 ? 's' : ''}!`);
    return true;
  };

  // Revoke access function
  const revokeResumeAccess = () => {
    setResumeAccess(false);
    setResumeExpiry(null);
    
    localStorage.removeItem('resumeAccess');
    localStorage.removeItem('resumeExpiry');
    
    toast.info('Resume access revoked');
  };

  // Get remaining time in seconds
  const getRemainingTime = () => {
    if (!resumeExpiry) return 0;
    
    const now = new Date();
    const expiry = new Date(resumeExpiry);
    const diffInSeconds = Math.floor((expiry - now) / 1000);
    
    return Math.max(0, diffInSeconds);
  };

  // Auto-revoke when time expires
  useEffect(() => {
    if (!resumeExpiry) return;

    const interval = setInterval(() => {
      const remaining = getRemainingTime();
      if (remaining <= 0) {
        revokeResumeAccess();
        clearInterval(interval);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [resumeExpiry]);

  return (
    <AuthContext.Provider value={{ 
      resumeAccess, 
      grantResumeAccess, 
      revokeResumeAccess,
      resumeExpiry,
      getRemainingTime
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);