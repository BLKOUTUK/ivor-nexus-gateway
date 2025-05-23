
import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { saveConversation } from '@/utils/supabaseClient';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ivor';
  timestamp: Date;
}

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Welcome to IVOR, your guide to community wisdom and resources. How can I assist you today?", 
      sender: 'ivor', 
      timestamp: new Date() 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Check authentication
  useEffect(() => {
    if (!user) {
      // Uncomment for production to enforce login
      // navigate('/auth');
    }
  }, [user, navigate]);

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // In a production app, this would call an AI service
      // For now, we'll use a simple response
      const responseText = "I'm here to help you connect with resources and information for the Black queer community. You can ask me about events, community resources, or historical information.";
      
      // Save to Supabase if user is logged in
      if (user) {
        await saveConversation(inputText, responseText);
      }

      // Simulate delay for typing effect
      setTimeout(() => {
        const response: Message = {
          id: messages.length + 2,
          text: responseText,
          sender: 'ivor',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
        setIsTyping(false);
      }, 2000);
    } catch (error) {
      console.error('Error saving conversation:', error);
      setIsTyping(false);
      toast({
        title: 'Error',
        description: 'Failed to save conversation',
        variant: 'destructive'
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="mb-8">
        <div className="glass-card p-6 mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-3 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/b6d0c34e-5be3-45c0-a630-79db1ca97500.png" 
                    alt="BLKOUT Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-ivor-teal to-ivor-amber text-transparent bg-clip-text">IVOR</span>
                </h1>
              </div>
              <p className="text-xl text-white/80 mb-6">
                Your guide to community wisdom and resources
              </p>
              <p className="text-white/70 mb-6">
                Inspired by Ivor Cummings, connecting the Black queer community with knowledge, support, and history.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden flex items-center justify-center animate-float">
                <img 
                  src="/lovable-uploads/c4fc13e6-ca79-4b24-99b4-186bb5f7d82f.png" 
                  alt="IVOR Assistant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-4 md:p-6 h-[60vh] flex flex-col animate-fade-in">
        <div className="flex-grow overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {messages.map((message) => (
            <div key={message.id} className={message.sender === 'user' ? "chat-bubble-user" : "chat-bubble-ivor"}>
              <p>{message.text}</p>
              <div className="text-xs text-white/50 mt-1 text-right">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble-ivor flex space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex gap-2">
          <textarea 
            className="glass-input flex-grow"
            placeholder="Type your message here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={1}
          />
          <button 
            className="glass-button h-auto aspect-square"
            onClick={handleSendMessage}
          >
            <Send size={20} />
          </button>
          <button className="glass-button h-auto aspect-square">
            <Mic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
