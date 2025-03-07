
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, MessageCircle, Book, Users, Info } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass-card rounded-t-2xl p-2 backdrop-blur-lg animate-slide-up z-10">
      <div className="flex justify-around items-center">
        <Link to="/" className={`mobile-nav-item ${currentPath === '/' ? 'mobile-nav-item-active' : ''}`}>
          <MessageCircle size={24} />
          <span className="text-xs">Chat</span>
        </Link>
        <Link to="/resources" className={`mobile-nav-item ${currentPath === '/resources' ? 'mobile-nav-item-active' : ''}`}>
          <Book size={24} />
          <span className="text-xs">Resources</span>
        </Link>
        <Link to="/events" className={`mobile-nav-item ${currentPath === '/events' ? 'mobile-nav-item-active' : ''}`}>
          <Calendar size={24} />
          <span className="text-xs">Events</span>
        </Link>
        <Link to="/community" className={`mobile-nav-item ${currentPath === '/community' ? 'mobile-nav-item-active' : ''}`}>
          <Users size={24} />
          <span className="text-xs">Community</span>
        </Link>
        <Link to="/about" className={`mobile-nav-item ${currentPath === '/about' ? 'mobile-nav-item-active' : ''}`}>
          <Info size={24} />
          <span className="text-xs">About</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
