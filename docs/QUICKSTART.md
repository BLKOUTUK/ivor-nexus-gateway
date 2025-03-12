
# IVOR Quick Start Guide

This guide will help you quickly set up and start working with the IVOR application.

## 🚀 Setup in 5 Minutes

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd ivor-app

# Install dependencies
npm install
```

### 2. Configure Supabase

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your Supabase URL and anon key from the API settings

> **Note**: For development, the project already has default Supabase credentials configured.

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:8080` to see IVOR running locally.

## 🔑 Authentication Testing

During development:
- Any Heartbeat ID will work for authentication
- Enter any text in the login field to simulate Heartbeat.chat authentication

## 💬 Testing the Chat

1. Navigate to the Home page
2. Type a message in the chat input
3. Press Enter or click the Send button
4. The system will respond with a predefined message in development

## 📋 Key Pages

- **/** - Home page with IVOR chat interface
- **/auth** - Authentication page
- **/resources** - Resource library (placeholder)
- **/events** - Events calendar (placeholder)
- **/community** - Community directory (placeholder)
- **/about** - About IVOR (placeholder)

## 🛠️ Common Development Tasks

### Adding a New Page

1. Create a new file in `src/pages/`
2. Add the route in `src/App.tsx`:

```tsx
<Route 
  path="/new-page" 
  element={
    <MainLayout>
      <NewPage />
    </MainLayout>
  } 
/>
```

### Adding a New Component

1. Create a new file in `src/components/`
2. Import and use the component where needed

### Working with Supabase

- Use the `supabase` client from `src/integrations/supabase/client.ts`
- For authentication, use the `useAuth` hook from `src/contexts/AuthContext.tsx`
- For database operations, use the helper functions in `src/utils/supabaseClient.ts`

## 📐 Design System

Key UI components and classes:

- **Cards**: Use the `glass-card` class for panel elements
- **Buttons**: Use the `glass-button` class for primary actions
- **Inputs**: Use the `glass-input` class for text inputs
- **Navigation**: Use `sidebar-link` for desktop and `mobile-nav-item` for mobile

## 🐞 Common Issues

### Authentication Problems

If authentication is not working:
- Check your Supabase configuration
- Ensure the Google OAuth provider is enabled in Supabase

### Styling Issues

If styles are not applied correctly:
- Make sure Tailwind is generating the classes: `npm run build:css`
- Check for class name typos

### Type Errors

If you encounter TypeScript errors:
- Check the type definitions in `src/integrations/supabase/types.ts`
- Ensure you're using the correct props for components

## 📚 Additional Resources

- [Full Technical Documentation](./TECHNICAL.md)
- [Supabase Documentation](https://supabase.io/docs)
- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
