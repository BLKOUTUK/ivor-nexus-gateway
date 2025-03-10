
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Users, 
  Info, 
  LogOut, 
  LogIn
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-72 bg-black/30 backdrop-blur-md p-6">
      <div className="flex items-center mb-10">
        <div className="w-12 h-12 mr-3 rounded-full overflow-hidden flex items-center justify-center">
          <img 
            src="/lovable-uploads/b6d0c34e-5be3-45c0-a630-79db1ca97500.png" 
            alt="BLKOUT Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-ivor-teal to-ivor-amber text-transparent bg-clip-text">IVOR</span>
        </h1>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              className={`sidebar-link ${isActive('/') ? 'active' : ''}`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/resources" 
              className={`sidebar-link ${isActive('/resources') ? 'active' : ''}`}
            >
              <BookOpen size={20} />
              <span>Resources</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/events" 
              className={`sidebar-link ${isActive('/events') ? 'active' : ''}`}
            >
              <Calendar size={20} />
              <span>Events</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/community" 
              className={`sidebar-link ${isActive('/community') ? 'active' : ''}`}
            >
              <Users size={20} />
              <span>Community</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`sidebar-link ${isActive('/about') ? 'active' : ''}`}
            >
              <Info size={20} />
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-white/10">
        {user ? (
          <button 
            onClick={() => signOut()} 
            className="sidebar-link w-full justify-start"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        ) : (
          <Link 
            to="/auth" 
            className="sidebar-link"
          >
            <LogIn size={20} />
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
