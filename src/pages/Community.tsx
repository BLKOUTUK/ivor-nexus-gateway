
import React from 'react';
import { Users, MessageCircle, Heart } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="glass-card p-6 mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Community</h1>
        <p className="text-white/70">
          Connect with others and build meaningful relationships
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-6 animate-fade-in">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-ivor-teal mr-3" />
            <h2 className="text-2xl font-bold">Discussion Forums</h2>
          </div>
          <p className="text-white/70 mb-4">
            Join conversations on topics that matter to our community.
          </p>
          <div className="space-y-3">
            <div className="glass-card p-3 hover:bg-white/20 transition-all cursor-pointer">
              <h3 className="font-bold">Health & Wellness</h3>
              <p className="text-sm text-white/70">15 active discussions</p>
            </div>
            <div className="glass-card p-3 hover:bg-white/20 transition-all cursor-pointer">
              <h3 className="font-bold">Arts & Expression</h3>
              <p className="text-sm text-white/70">23 active discussions</p>
            </div>
            <div className="glass-card p-3 hover:bg-white/20 transition-all cursor-pointer">
              <h3 className="font-bold">History & Heritage</h3>
              <p className="text-sm text-white/70">8 active discussions</p>
            </div>
          </div>
          <button className="glass-button mt-6 w-full">Browse All Forums</button>
        </div>

        <div className="glass-card p-6 animate-fade-in">
          <div className="flex items-center mb-4">
            <MessageCircle size={24} className="text-ivor-amber mr-3" />
            <h2 className="text-2xl font-bold">Mentorship</h2>
          </div>
          <p className="text-white/70 mb-4">
            Connect with mentors who can provide guidance and support.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-ivor-purple flex items-center justify-center mr-3">
                <span className="font-bold">JW</span>
              </div>
              <div>
                <h3 className="font-bold">James Williams</h3>
                <p className="text-sm text-white/70">Career Development, 5 years experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-ivor-blue flex items-center justify-center mr-3">
                <span className="font-bold">MT</span>
              </div>
              <div>
                <h3 className="font-bold">Maria Thompson</h3>
                <p className="text-sm text-white/70">Health Advocacy, 8 years experience</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-ivor-teal/50 flex items-center justify-center mr-3">
                <span className="font-bold">DP</span>
              </div>
              <div>
                <h3 className="font-bold">David Parker</h3>
                <p className="text-sm text-white/70">Educational Guidance, 3 years experience</p>
              </div>
            </div>
          </div>
          <button className="glass-button mt-6 w-full">Find a Mentor</button>
        </div>
      </div>

      <div className="glass-card p-6 animate-fade-in">
        <div className="flex items-center mb-4">
          <Heart size={24} className="text-ivor-teal mr-3" />
          <h2 className="text-2xl font-bold">Upcoming Community Meetings</h2>
        </div>
        <p className="text-white/70 mb-6">
          Join our virtual and in-person community gatherings
        </p>
        
        <div className="space-y-4">
          <div className="glass-card p-4 hover:bg-white/20 transition-all cursor-pointer">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">Virtual Social Hour</h3>
                <p className="text-white/70">Connect with community members in our monthly social gathering</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Jun 20</p>
                <p className="text-white/70">7:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-4 hover:bg-white/20 transition-all cursor-pointer">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">Community Planning Meeting</h3>
                <p className="text-white/70">Help plan upcoming events and initiatives</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Jun 25</p>
                <p className="text-white/70">6:30 PM</p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-4 hover:bg-white/20 transition-all cursor-pointer">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">New Member Welcome</h3>
                <p className="text-white/70">Introduction session for new community members</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Jul 5</p>
                <p className="text-white/70">5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <button className="glass-button mt-6 w-full">View All Community Events</button>
      </div>
    </div>
  );
};

export default Community;
