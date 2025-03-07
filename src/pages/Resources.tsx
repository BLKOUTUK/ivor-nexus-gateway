
import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Mock data for resources
const resourceCategories = [
  "Health & Wellness",
  "Legal Support",
  "Education",
  "Housing",
  "Financial Aid",
  "Mental Health",
  "Arts & Culture",
  "History"
];

const mockResources = [
  {
    id: 1,
    title: "Community Health Network",
    category: "Health & Wellness",
    description: "Access to healthcare services focused on LGBTQ+ communities of color.",
    link: "#"
  },
  {
    id: 2,
    title: "Legal Advocacy Coalition",
    category: "Legal Support",
    description: "Free legal consultation and representation for civil rights issues.",
    link: "#"
  },
  {
    id: 3,
    title: "Educational Scholarship Fund",
    category: "Education",
    description: "Financial support for academic pursuits and educational advancement.",
    link: "#"
  },
  {
    id: 4,
    title: "Housing Justice Initiative",
    category: "Housing",
    description: "Resources for fair housing and tenant rights advocacy.",
    link: "#"
  },
  {
    id: 5,
    title: "Financial Empowerment Program",
    category: "Financial Aid",
    description: "Workshops and resources for financial literacy and economic stability.",
    link: "#"
  },
  {
    id: 6,
    title: "Mental Health Collective",
    category: "Mental Health",
    description: "Culturally competent mental health services and support groups.",
    link: "#"
  }
];

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter(resource => {
    const matchesCategory = selectedCategory ? resource.category === selectedCategory : true;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="glass-card p-6 mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Community Resources</h1>
        <p className="text-white/70">
          Discover resources and support services for the Black queer community
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <div className="glass-card p-4 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              <button 
                className={`w-full text-left px-3 py-2 rounded-lg transition-all ${selectedCategory === null ? 'bg-ivor-teal/20 text-white' : 'text-white/70 hover:bg-white/10'}`}
                onClick={() => setSelectedCategory(null)}
              >
                All Resources
              </button>
              {resourceCategories.map(category => (
                <button 
                  key={category}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all ${selectedCategory === category ? 'bg-ivor-teal/20 text-white' : 'text-white/70 hover:bg-white/10'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="glass-card p-4 mb-6 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input 
                type="text" 
                className="glass-input pl-10"
                placeholder="Search resources..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="group glass-card p-4 hover:bg-white/20 transition-all duration-300 animate-fade-in">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-ivor-teal/20 text-ivor-teal mb-2">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-white/70 mb-4">{resource.description}</p>
                <a href={resource.link} className="inline-block text-ivor-amber hover:text-ivor-teal transition-colors">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
