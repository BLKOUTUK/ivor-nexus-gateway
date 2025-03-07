
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, MessageCircle, Book, Users, Info } from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link to={to} className={`nav-item ${isActive ? 'nav-item-active' : ''}`}>
      <div className="mb-1">{icon}</div>
      <span className="text-sm">{label}</span>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="hidden md:flex glass-card w-72 h-screen flex-col p-6 fixed left-0 top-0 animate-slide-in">
      <div className="flex items-center mb-12">
        <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-ivor-teal to-ivor-amber text-transparent bg-clip-text">
          IVOR
        </h1>
      </div>
      
      <div className="flex flex-col space-y-2">
        <NavItem 
          to="/" 
          icon={<MessageCircle size={24} />} 
          label="Conversation" 
          isActive={currentPath === '/'} 
        />
        <NavItem 
          to="/resources" 
          icon={<Book size={24} />} 
          label="Resources" 
          isActive={currentPath === '/resources'} 
        />
        <NavItem 
          to="/events" 
          icon={<Calendar size={24} />} 
          label="Events" 
          isActive={currentPath === '/events'} 
        />
        <NavItem 
          to="/community" 
          icon={<Users size={24} />} 
          label="Community" 
          isActive={currentPath === '/community'} 
        />
        <NavItem 
          to="/about" 
          icon={<Info size={24} />} 
          label="About" 
          isActive={currentPath === '/about'} 
        />
      </div>
      
      <div className="mt-auto">
        <div className="glass-card p-4 text-sm text-white/70">
          <p>IVOR - Connecting the community with wisdom and resources</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
