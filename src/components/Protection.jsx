import { useEffect } from 'react';

const Protection = () => {
  useEffect(() => {
    // Disable right-click (context menu)
    const handleContextMenu = (e) => {
      e.preventDefault();
      showWarning('Right-click is disabled to protect content.');
      return false;
    };

    // Disable text selection
    const disableSelection = (e) => {
      if (e.ctrlKey || e.metaKey) {
        // Allow Ctrl+C, Cmd+C for accessibility
        return;
      }
      e.preventDefault();
    };

    // Disable keyboard shortcuts for copy/cut
    const handleKeyDown = (e) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+A, Ctrl+U, Ctrl+S
      if (
        (e.ctrlKey || e.metaKey) && 
        (e.key === 'c' || e.key === 'C' || 
         e.key === 'x' || e.key === 'X' ||
         e.key === 'a' || e.key === 'A' ||
         e.key === 'u' || e.key === 'U' ||
         e.key === 's' || e.key === 'S')
      ) {
        e.preventDefault();
        showWarning('Copying content is disabled.');
      }

      // Disable Print Screen and Print shortcuts
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
        e.preventDefault();
        showWarning('Printing is disabled on this portfolio.');
      }

      // Disable F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        showWarning('Developer tools are restricted.');
      }
    };

    // Disable dragging of images
    const disableDrag = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // Show warning toast/message
    const showWarning = (message) => {
      // Create a custom warning element
      const warning = document.createElement('div');
      warning.className = 'copy-protection-warning';
      warning.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: #ef4444;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 999999;
          animation: slideIn 0.3s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        ">
          <svg style="width: 20px; height: 20px;" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
          </svg>
          ${message}
        </div>
      `;
      
      document.body.appendChild(warning);
      
      // Remove warning after 3 seconds
      setTimeout(() => {
        if (warning.parentNode) {
          warning.parentNode.removeChild(warning);
        }
      }, 3000);
    };

    // Add CSS for anti-selection
    const style = document.createElement('style');
    style.innerHTML = `
      /* Disable text selection */
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      /* Allow selection only in specific areas */
      .allow-select {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      
      /* Disable image dragging */
      img {
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
      }
      
      /* Hide content when printing */
      @media print {
        body * {
          visibility: hidden !important;
        }
        
        .no-print, .no-print * {
          display: none !important;
        }
        
        body::after {
          content: "This portfolio is protected. Please contact me directly for information.";
          visibility: visible;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          text-align: center;
          color: #000;
        }
      }
      
      /* Animation for warning */
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', disableSelection);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', disableDrag);

    // Disable print functionality
    window.addEventListener('beforeprint', (e) => {
      e.preventDefault();
      showWarning('Printing is disabled on this portfolio.');
      return false;
    });

    // Protect against iframe embedding
    if (window.self !== window.top) {
      window.top.location = window.self.location;
    }

    // Protect against view-source
    document.onkeydown = function(e) {
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showWarning('Developer tools are restricted.');
        return false;
      }
    };

    // Clear selection on click
    document.addEventListener('click', () => {
      window.getSelection().removeAllRanges();
    });

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', disableSelection);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', disableDrag);
      window.removeEventListener('beforeprint', handleContextMenu);
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Protection; 