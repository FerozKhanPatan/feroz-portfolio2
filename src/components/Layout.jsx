import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = ({ children }) => {
  useEffect(() => {
    // Add basic protection
    const disableSelection = (e) => e.preventDefault();
    const disableContext = (e) => e.preventDefault();
    
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('contextmenu', disableContext);
    
    // Add anti-print CSS
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden !important;
        }
        .print-message {
          visibility: visible !important;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #000;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('contextmenu', disableContext);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans w-full overflow-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        {children}
      </main>
      {/* Print message (hidden by default) */}
      <div className="print-message hidden">
        This portfolio content is protected. Please contact me directly for information.
      </div>
    </div>
  );
};

export default Layout;