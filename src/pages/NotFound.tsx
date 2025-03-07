
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass-card p-8 max-w-md w-full animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 text-center">404</h1>
        <p className="text-xl text-white/80 mb-6 text-center">
          Oops! Page not found
        </p>
        <p className="text-white/70 mb-8 text-center">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="glass-button block text-center w-full">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
