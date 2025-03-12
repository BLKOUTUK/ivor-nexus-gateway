
# IVOR Technical Documentation

This document provides technical details about the IVOR application architecture, data models, and implementation decisions for developers working on the project.

## Architecture Overview

IVOR follows a client-side application architecture with the following components:

1. **React Frontend**: Single-page application built with React and TypeScript
2. **Supabase Backend**: Database, authentication, and serverless functions
3. **External Services**: Integration with Heartbeat.chat for community authentication

## Data Models

### Authentication & Users

**Profiles Table**
```sql
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  heartbeat_id TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);
```

**Row-Level Security (RLS) Policies**
- Users can view their own profiles
- Users can update their own profiles

### Conversations

**Conversations Table**
```sql
CREATE TABLE public.conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID NOT NULL,
  user_input TEXT NOT NULL,
  system_response TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);
```

**Chat Messages Table**
```sql
CREATE TABLE public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_from_assistant BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);
```

**Row-Level Security (RLS) Policies**
- Users can view their own chat messages
- Users can create chat messages

## Authentication Flow

1. **User Input**: User enters Heartbeat ID on the Auth page
2. **Authentication**: App makes authentication request to Supabase
3. **Token Generation**: Upon success, JWT token is generated and stored
4. **Profile Creation/Update**: User profile is created or updated in the profiles table
5. **Session Management**: AuthContext maintains and provides access to the authenticated user state

## React Contexts

### AuthContext

The `AuthContext` provides authentication state and methods throughout the application:

```typescript
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (heartbeatId: string) => Promise<void>;
  signOut: () => Promise<void>;
}
```

## Key Components

### MainLayout

The `MainLayout` component provides the application structure:
- Sidebar for desktop navigation
- Mobile navigation bar for smaller screens
- Content container for page components

### Sidebar & MobileNavigation

These components provide navigation and display user authentication state:
- Links to main application sections
- Auth status and sign-in/sign-out controls

### Chat Interface

The chat interface in the Home component includes:
- Message display area with scrolling capability
- Input area for user messages
- Send and microphone buttons
- Typing indicator for assistant responses

## Supabase Integration

### Client Initialization

```typescript
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "...";
const SUPABASE_PUBLISHABLE_KEY = "...";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
```

### Authentication Methods

```typescript
// Sign in with Heartbeat ID (through OAuth placeholder)
export async function signInWithHeartbeatId(heartbeatId: string) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: `${window.location.origin}/auth/callback`,
    }
  });
  // ...
}

// Get current authenticated user
export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Sign out user
export async function signOut() {
  await supabase.auth.signOut();
}
```

### Data Methods

```typescript
// Save conversation to Supabase
export async function saveConversation(userMessage: string, ivorResponse: string) {
  const { data: { user } } = await supabase.auth.getUser();
  
  const { data, error } = await supabase
    .from('conversations')
    .insert({
      user_input: userMessage,
      system_response: ivorResponse,
      session_id: user.id,
    });
  // ...
}

// Get user conversation history
export async function getUserConversations() {
  const { data: { user } } = await supabase.auth.getUser();
  
  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .eq('session_id', user.id)
    .order('timestamp', { ascending: false });
  // ...
}
```

## Styling System

The application uses a combination of:

1. **Tailwind CSS**: Utility-first CSS framework
2. **Custom CSS Classes**: 
   - `.glass-card` - For card elements with glass morphism effect
   - `.glass-input` - For text inputs with glass morphism effect
   - `.glass-button` - For buttons with glass morphism effect
   - `.sidebar-link` - For sidebar navigation items
   - `.mobile-nav-item` - For mobile navigation items
   - `.chat-bubble-user` - For user messages in the chat
   - `.chat-bubble-ivor` - For assistant messages in the chat

## Deployment

The application is deployed using Lovable's built-in deployment capabilities. For custom domain deployments, Netlify is recommended.

## Performance Considerations

1. **Message Pagination**: For long chat histories, implement pagination
2. **Debounced Typing**: For the chat interface, consider debounced typing detection
3. **Image Optimization**: Use responsive images with appropriate srcsets
4. **Authentication Caching**: Improve authentication token refresh mechanisms

## Security Considerations

1. **Heartbeat ID Validation**: In production, validate Heartbeat IDs against the actual Heartbeat.chat API
2. **Row-Level Security**: Ensure all tables have appropriate RLS policies
3. **Input Sanitization**: Sanitize all user inputs before storage
4. **Token Management**: Implement proper token refresh and invalidation

## Testing Approach

1. **Component Tests**: Use React Testing Library for component testing
2. **Authentication Tests**: Mock Supabase authentication for testing
3. **Integration Tests**: Test the full user flow from login to conversation
4. **Accessibility Tests**: Ensure the application meets WCAG standards

## Development Environment Setup

For local development:

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a local Supabase project
4. Update the Supabase URL and key in the environment variables
5. Run the development server: `npm run dev`
6. For authentication testing, any Heartbeat ID will work in development mode

## Troubleshooting

Common issues and solutions:

1. **Authentication Errors**: Check Supabase configuration and OAuth redirect URLs
2. **Database Connection Issues**: Verify Supabase API keys and RLS policies
3. **Styling Inconsistencies**: Run Tailwind build process to regenerate styles
4. **Build Errors**: Check TypeScript errors and missing dependencies
