
import React, { useState } from 'react';
import { Send, Mic, User } from 'lucide-react';

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

  const handleSendMessage = () => {
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

    // Simulate IVOR response
    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        text: "I'm here to help you connect with resources and information for the Black queer community. You can ask me about events, community resources, or historical information.",
        sender: 'ivor',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 2000);
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="bg-gradient-to-r from-ivor-teal to-ivor-amber text-transparent bg-clip-text">IVOR</span>
              </h1>
              <p className="text-xl text-white/80 mb-6">
                Your guide to community wisdom and resources
              </p>
              <p className="text-white/70 mb-6">
                Inspired by Ivor Cummings, connecting the Black queer community with knowledge, support, and history.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-ivor-teal/30 to-ivor-amber/30 backdrop-blur-sm flex items-center justify-center animate-float">
                <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm"></div>
                <User size={80} className="text-white/90 relative z-10" />
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
