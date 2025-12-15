import { useAuth } from '../context/AuthContext';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const AccessStatus = () => {
  const { isAuthenticated, expiryTime, logout } = useAuth();

  if (!isAuthenticated) return null;

  const timeLeft = expiryTime 
    ? Math.max(0, Math.floor((new Date(expiryTime) - new Date()) / 60000))
    : 0;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-green-500/20 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <p className="text-white text-sm font-medium">Access Active</p>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className="text-gray-400 text-xs">
              {timeLeft > 0 ? `${timeLeft} minutes left` : 'Expiring soon'}
            </span>
          </div>
        </div>
        <button
          onClick={logout}
          className="text-gray-400 hover:text-red-400 text-xs ml-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccessStatus;