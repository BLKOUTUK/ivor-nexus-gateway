
import React from 'react';
import { Globe, Heart, Book } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="glass-card p-6 mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">About IVOR</h1>
        <p className="text-white/70">
          Inspired by Ivor Cummings and the legacy of community building
        </p>
      </div>

      <div className="glass-card p-6 mb-8 animate-fade-in">
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-ivor-purple/30 to-ivor-teal/30 backdrop-blur-sm flex items-center justify-center animate-float">
            <div className="absolute inset-0 rounded-full bg-black/20 backdrop-blur-sm"></div>
            <div className="text-6xl font-playfair font-bold text-white/90 relative z-10">IC</div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-center">The Legacy of Ivor Cummings</h2>
        
        <p className="text-white/80 mb-4">
          Ivor Cummings (1913-1992) was an influential Black gay civil servant known for his extensive networks and community support. As a Colonial Office civil servant, he played a crucial role in supporting Caribbean immigrants in Britain and created spaces for the Black queer community to connect and thrive.
        </p>
        
        <p className="text-white/80 mb-6">
          IVOR (Informed Voice Of Resources) is inspired by Cummings' legacy of connecting people to resources and building community networks. Our platform aims to continue this tradition in the digital age, providing a space where wisdom, resources, and community support can be accessed by all.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-card p-4 text-center">
            <div className="flex justify-center mb-4">
              <Globe size={40} className="text-ivor-teal" />
            </div>
            <h3 className="text-xl font-bold mb-2">Connection</h3>
            <p className="text-white/70">
              Bringing together diverse voices and experiences within the community
            </p>
          </div>
          
          <div className="glass-card p-4 text-center">
            <div className="flex justify-center mb-4">
              <Book size={40} className="text-ivor-amber" />
            </div>
            <h3 className="text-xl font-bold mb-2">Knowledge</h3>
            <p className="text-white/70">
              Preserving and sharing historical and contemporary wisdom
            </p>
          </div>
          
          <div className="glass-card p-4 text-center">
            <div className="flex justify-center mb-4">
              <Heart size={40} className="text-ivor-teal" />
            </div>
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <p className="text-white/70">
              Providing resources and community care for those in need
            </p>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-white/80 mb-6">
          IVOR is dedicated to connecting the Black queer community with wisdom, resources, and support. We aim to honor the legacy of community builders like Ivor Cummings while addressing the needs of today's community through technology and human connection.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-white/80 mb-4">
          Have questions, suggestions, or want to contribute to IVOR? We'd love to hear from you.
        </p>
        
        <div className="glass-card p-4">
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input type="text" className="glass-input" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input type="email" className="glass-input" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea className="glass-input" rows={4} placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="glass-button w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
