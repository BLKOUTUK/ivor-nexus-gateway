
import React, { useState } from 'react';
import { Calendar as CalendarIcon, List, Clock } from 'lucide-react';

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Community Book Discussion",
    date: new Date(2023, 5, 15),
    time: "6:00 PM - 8:00 PM",
    location: "Community Center, 123 Main St",
    description: "Join us for a discussion on 'Black Queer Identity' by Author Name.",
    category: "Education"
  },
  {
    id: 2,
    title: "Health & Wellness Fair",
    date: new Date(2023, 5, 18),
    time: "10:00 AM - 3:00 PM",
    location: "City Park Pavilion",
    description: "Free health screenings, wellness workshops, and community resources.",
    category: "Health"
  },
  {
    id: 3,
    title: "Pride Month Celebration",
    date: new Date(2023, 5, 25),
    time: "4:00 PM - 10:00 PM",
    location: "Downtown Square",
    description: "Celebration of Pride with performances, speakers, and community vendors.",
    category: "Community"
  },
  {
    id: 4,
    title: "Legal Rights Workshop",
    date: new Date(2023, 6, 2),
    time: "1:00 PM - 3:00 PM",
    location: "Community Legal Center",
    description: "Learn about legal rights and resources available to the community.",
    category: "Legal"
  },
  {
    id: 5,
    title: "Film Screening & Discussion",
    date: new Date(2023, 6, 10),
    time: "7:00 PM - 9:30 PM",
    location: "Community Theater",
    description: "Screening of documentary highlighting Black queer historical figures.",
    category: "Arts & Culture"
  }
];

type ViewMode = 'calendar' | 'list';

const Events: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="glass-card p-6 mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Community Events</h1>
        <p className="text-white/70">
          Stay connected with upcoming events and gatherings
        </p>
      </div>

      <div className="glass-card p-4 mb-6 animate-fade-in">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <div className="glass-card p-1 rounded-lg flex">
            <button 
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/20' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </button>
            <button 
              className={`p-2 rounded ${viewMode === 'calendar' ? 'bg-white/20' : ''}`}
              onClick={() => setViewMode('calendar')}
            >
              <CalendarIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="space-y-4">
          {mockEvents.map((event) => (
            <div key={event.id} className="glass-card p-4 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="glass-card p-3 w-20 h-20 flex flex-col items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">{event.date.getDate()}</span>
                  <span className="text-sm text-white/70">
                    {event.date.toLocaleString('default', { month: 'short' })}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <div className="flex items-center text-white/70 mb-2">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <p className="text-sm text-white/70 mb-2">{event.location}</p>
                  
                  {selectedEvent === event.id ? (
                    <>
                      <p className="text-white/80 mb-3">{event.description}</p>
                      <button 
                        className="text-ivor-amber hover:text-ivor-teal transition-colors text-sm"
                        onClick={() => setSelectedEvent(null)}
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <button 
                      className="text-ivor-amber hover:text-ivor-teal transition-colors text-sm"
                      onClick={() => setSelectedEvent(event.id)}
                    >
                      Show More
                    </button>
                  )}
                </div>
                <div className="mt-4 md:mt-0">
                  <button className="glass-button">RSVP</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card p-6 animate-fade-in">
          <div className="text-center text-white/70">
            <p>Calendar view will be implemented in the next version.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
