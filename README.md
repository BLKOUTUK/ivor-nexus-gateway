
# IVOR: Integrating Voices of Resilience

![IVOR Logo](/lovable-uploads/b6d0c34e-5be3-45c0-a630-79db1ca97500.png)

IVOR (Integrating Voices of Resilience) is a community resource platform designed to connect members of the Black queer community with knowledge, support, and historical resources. Named after Ivor Cummings, a figure in Black queer history, this application serves as a digital guide and conversational interface to community wisdom.

## 🌟 Features

- **AI-Powered Conversational Interface**: Chat with IVOR to discover resources, events, and community information
- **Community Authentication**: Integration with Heartbeat.chat community IDs for user authentication
- **Resource Library**: Curated collection of resources for the Black queer community
- **Event Calendar**: Upcoming community events and gatherings
- **Community Directory**: Connect with organizations and community members
- **Mobile Responsive**: Fully optimized for both desktop and mobile experiences

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account (for database and authentication)
- Heartbeat.chat community (for authentication integration)

### Installation

1. Clone the repository:
```sh
git clone <repository-url>
cd ivor-app
```

2. Install dependencies:
```sh
npm install
```

3. Configure environment variables:
- Create a `.env` file based on `.env.example`
- Add your Supabase URL and anon key

4. Start the development server:
```sh
npm run dev
```

5. Visit `http://localhost:8080` to see the application running

## 📱 Authentication Flow

IVOR uses a community-based authentication system that leverages existing Heartbeat.chat IDs:

1. Users enter their Heartbeat ID on the authentication page
2. The system verifies the ID through Supabase authentication (using Google OAuth as a placeholder)
3. Upon successful verification, a user profile is created/updated in the database
4. The user is granted access to the full platform features

> **Note**: In the development environment, any ID will work for testing purposes.

## 💬 Chat System

The IVOR chat system provides:

- Real-time conversation with the IVOR assistant
- Storage of conversation history in Supabase
- Personalized responses based on user context
- Resource recommendations based on conversation content

## 🧰 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **State Management**: React Context API, TanStack Query
- **Routing**: React Router
- **Database & Auth**: Supabase
- **Build Tools**: Vite
- **Icons**: Lucide React

## 📁 Project Structure

```
ivor-app/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   │   ├── layout/    # Layout components (Sidebar, MobileNavigation)
│   │   └── ui/        # UI components from shadcn/ui
│   ├── contexts/      # React contexts (AuthContext)
│   ├── hooks/         # Custom React hooks
│   ├── integrations/  # External service integrations (Supabase)
│   ├── lib/           # Utility functions and shared logic
│   ├── pages/         # Page components
│   └── utils/         # Helper functions
└── ...config files
```

## 👨‍💻 Development

### Key Concepts

1. **Authentication**:
   - Authentication state is managed through `AuthContext`
   - User profiles are stored in the `profiles` table in Supabase
   - Session management utilizes Supabase Auth

2. **Chat System**:
   - Conversations are stored in the `conversations` table
   - Messages include both user inputs and system responses
   - Each conversation is linked to the authenticated user

3. **Styling**:
   - The application uses Tailwind CSS for styling
   - Custom glass-card and glass-button styles provide a unique visual identity
   - Mobile-first approach with responsive design

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 🔮 Future Enhancements

- Integration with AI services for more intelligent responses
- Community content contribution system
- Direct connection with support resources
- Media sharing capabilities
- Enhanced user profiles and community connections

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Named in honor of Ivor Cummings, highlighting Black queer history
- Built with [Lovable](https://lovable.dev)
- Utilizes [Supabase](https://supabase.io) for backend services
- Integrates with [Heartbeat.chat](https://heartbeat.chat) for community authentication
