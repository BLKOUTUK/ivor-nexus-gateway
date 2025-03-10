
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calendar, Users, Info, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md p-2 z-50">
      <nav className="flex justify-around items-center">
        <Link to="/" className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}>
          <Home size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/resources" className={`mobile-nav-item ${isActive('/resources') ? 'active' : ''}`}>
          <BookOpen size={20} />
          <span className="text-xs">Resources</span>
        </Link>
        <Link to="/events" className={`mobile-nav-item ${isActive('/events') ? 'active' : ''}`}>
          <Calendar size={20} />
          <span className="text-xs">Events</span>
        </Link>
        <Link to="/community" className={`mobile-nav-item ${isActive('/community') ? 'active' : ''}`}>
          <Users size={20} />
          <span className="text-xs">Community</span>
        </Link>
        {user ? (
          <button 
            onClick={() => signOut()} 
            className="mobile-nav-item"
          >
            <LogOut size={20} />
            <span className="text-xs">Sign Out</span>
          </button>
        ) : (
          <Link to="/auth" className={`mobile-nav-item ${isActive('/auth') ? 'active' : ''}`}>
            <LogIn size={20} />
            <span className="text-xs">Sign In</span>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default MobileNavigation;
