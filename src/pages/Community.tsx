
import React, { useState } from 'react';
import { Users, Globe, Phone, Mail, ExternalLink, Instagram, Twitter, Facebook } from 'lucide-react';

// Mock data for community partners
const mockPartners = [
  {
    id: 1,
    name: "Health Advocacy Alliance",
    logo: "https://placehold.co/200x200?text=HAA",
    description: "Providing healthcare advocacy and resources for underserved communities.",
    contactPerson: "Maria Johnson",
    email: "contact@healthalliance.org",
    phone: "(555) 123-4567",
    website: "https://healthalliance.org",
    address: "123 Main Street, Suite 400, Cityville, ST 12345",
    socialMedia: {
      twitter: "healthalliance",
      instagram: "healthallianceorg",
      facebook: "HealthAdvocacyAlliance"
    },
    category: "Health & Wellness"
  },
  {
    id: 2,
    name: "Cultural Heritage Foundation",
    logo: "https://placehold.co/200x200?text=CHF",
    description: "Preserving and celebrating Black LGBTQ+ cultural heritage and history.",
    contactPerson: "James Williams",
    email: "info@culturalheritagefdn.org",
    phone: "(555) 234-5678",
    website: "https://culturalheritagefdn.org",
    address: "456 History Lane, Townsburg, ST 23456",
    socialMedia: {
      twitter: "CulturalHeritage",
      instagram: "culturalheritage",
      facebook: "CulturalHeritageFdn"
    },
    category: "Arts & Culture"
  },
  {
    id: 3,
    name: "Justice & Rights Center",
    logo: "https://placehold.co/200x200?text=JRC",
    description: "Advancing legal protections and advocacy for the LGBTQ+ community.",
    contactPerson: "Taylor Robinson",
    email: "contact@justicerightsorg.org",
    phone: "(555) 345-6789",
    website: "https://justicerightsorg.org",
    address: "789 Freedom Avenue, Metropolis, ST 34567",
    socialMedia: {
      twitter: "JusticeRights",
      instagram: "justicerightsorg",
      facebook: "JusticeAndRightsCenter"
    },
    category: "Legal Support"
  },
  {
    id: 4,
    name: "Community Education Collective",
    logo: "https://placehold.co/200x200?text=CEC",
    description: "Promoting educational opportunities and scholarship programs.",
    contactPerson: "Alex Johnson",
    email: "info@educolllective.org",
    phone: "(555) 456-7890",
    website: "https://educolllective.org",
    address: "321 Learning Way, Scholarly City, ST 45678",
    socialMedia: {
      twitter: "EduCollective",
      instagram: "educollective",
      facebook: "CommunityEducationCollective"
    },
    category: "Education"
  },
  {
    id: 5,
    name: "Housing Equity Initiative",
    logo: "https://placehold.co/200x200?text=HEI",
    description: "Working toward fair housing and preventing housing discrimination.",
    contactPerson: "Jordan Smith",
    email: "contact@housinginitiative.org",
    phone: "(555) 567-8901",
    website: "https://housinginitiative.org",
    address: "654 Shelter Street, Homeville, ST 56789",
    socialMedia: {
      twitter: "HousingEquity",
      instagram: "housingequity",
      facebook: "HousingEquityInitiative"
    },
    category: "Housing"
  },
  {
    id: 6,
    name: "Financial Empowerment Group",
    logo: "https://placehold.co/200x200?text=FEG",
    description: "Providing financial literacy education and economic opportunity programs.",
    contactPerson: "Morgan Lee",
    email: "info@financialempowerment.org",
    phone: "(555) 678-9012",
    website: "https://financialempowerment.org",
    address: "987 Prosperity Road, Wealthtown, ST 67890",
    socialMedia: {
      twitter: "FinEmpowerment",
      instagram: "financialempowerment",
      facebook: "FinancialEmpowermentGroup"
    },
    category: "Financial Aid"
  }
];

// All unique categories
const partnerCategories = Array.from(new Set(mockPartners.map(partner => partner.category)));

const Community: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPartner, setExpandedPartner] = useState<number | null>(null);

  const filteredPartners = mockPartners.filter(partner => {
    const matchesCategory = selectedCategory ? partner.category === selectedCategory : true;
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="glass-card p-6 mb-8 animate-fade-in">
        <h1 className="text-4xl font-bold mb-2">Community Partners</h1>
        <p className="text-white/70">
          Organizations working to support and empower the community
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
                All Partners
              </button>
              {partnerCategories.map(category => (
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
              <input 
                type="text" 
                className="glass-input pl-4"
                placeholder="Search partners..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredPartners.map((partner) => (
              <div key={partner.id} className="glass-card p-6 animate-fade-in">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-ivor-teal/20 text-ivor-teal mb-3">
                          {partner.category}
                        </span>
                        <p className="text-white/80 mb-4">{partner.description}</p>
                      </div>
                      <div className="flex space-x-3 mt-2 md:mt-0">
                        {partner.socialMedia.twitter && (
                          <a href={`https://twitter.com/${partner.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                            <Twitter size={20} />
                          </a>
                        )}
                        {partner.socialMedia.instagram && (
                          <a href={`https://instagram.com/${partner.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                            <Instagram size={20} />
                          </a>
                        )}
                        {partner.socialMedia.facebook && (
                          <a href={`https://facebook.com/${partner.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                            <Facebook size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {expandedPartner === partner.id ? (
                      <div className="mt-4 space-y-3 animate-fade-in">
                        <div className="glass-card p-4">
                          <h4 className="font-bold mb-3">Contact Information</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Phone size={16} className="mr-2 text-ivor-amber" />
                              <span>{partner.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail size={16} className="mr-2 text-ivor-amber" />
                              <a href={`mailto:${partner.email}`} className="hover:text-ivor-amber transition-colors">{partner.email}</a>
                            </div>
                            <div className="flex items-center">
                              <Globe size={16} className="mr-2 text-ivor-amber" />
                              <a href={partner.website} target="_blank" rel="noopener noreferrer" className="hover:text-ivor-amber transition-colors flex items-center">
                                {partner.website.replace(/(^\w+:|^)\/\//, '')}
                                <ExternalLink size={14} className="ml-1" />
                              </a>
                            </div>
                            <div className="flex items-start">
                              <Users size={16} className="mr-2 mt-1 text-ivor-amber" />
                              <div>
                                <div>{partner.contactPerson}</div>
                                <div className="text-sm text-white/70">{partner.address}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button 
                          className="text-ivor-amber hover:text-ivor-teal transition-colors mt-2"
                          onClick={() => setExpandedPartner(null)}
                        >
                          Show Less
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="glass-button mt-4"
                        onClick={() => setExpandedPartner(partner.id)}
                      >
                        View Contact Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
