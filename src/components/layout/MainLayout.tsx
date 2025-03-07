
import React from 'react';
import Sidebar from './Sidebar';
import MobileNavigation from './MobileNavigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <main className="flex-grow md:ml-72 p-4 md:p-8 pb-20 md:pb-8">
        {children}
      </main>
      <MobileNavigation />
    </div>
  );
};

export default MainLayout;
