
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Auth: React.FC = () => {
  const [heartbeatId, setHeartbeatId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, signIn } = useAuth();
  const { toast } = useToast();

  // If user is already logged in, redirect to home
  if (user) {
    return <Navigate to="/" />;
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!heartbeatId.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter your Heartbeat Chat ID',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      await signIn(heartbeatId);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#2D1B4E] to-[#1A2B47] p-4">
      <div className="glass-card w-full max-w-md p-8 animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center">
            <img 
              src="/lovable-uploads/b6d0c34e-5be3-45c0-a630-79db1ca97500.png" 
              alt="BLKOUT Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-ivor-teal to-ivor-amber text-transparent bg-clip-text">Welcome to IVOR</span>
        </h1>
        
        <p className="text-white/70 text-center mb-8">
          Sign in with your Heartbeat.chat community ID to continue
        </p>
        
        <form onSubmit={handleSignIn}>
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Enter your Heartbeat ID"
              value={heartbeatId}
              onChange={(e) => setHeartbeatId(e.target.value)}
              className="glass-input"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full glass-button" 
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
          
          <div className="mt-4 text-center">
            <p className="text-white/50 text-sm">
              For development purposes, any ID will work.
              In production, this would validate against Heartbeat.chat.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
