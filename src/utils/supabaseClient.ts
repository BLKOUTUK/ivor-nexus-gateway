
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export async function signInWithHeartbeatId(heartbeatId: string) {
  try {
    // This is a simplified implementation - in a real-world scenario, 
    // you would verify this ID with Heartbeat's API
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          // Store the heartbeat ID in the user metadata
          access_type: 'offline',
          prompt: 'consent',
        },
        redirectTo: `${window.location.origin}/auth/callback`,
      }
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error signing in with Heartbeat ID:', error);
    throw error;
  }
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
}

export async function saveConversation(userMessage: string, ivorResponse: string) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    // Using your existing conversations table
    const { data, error } = await supabase
      .from('conversations')
      .insert({
        user_input: userMessage,
        system_response: ivorResponse,
        session_id: user.id,
      });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error saving conversation:', error);
    throw error;
  }
}

export async function getUserConversations() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('User not authenticated');
    }

    // Get conversations for the current user
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('session_id', user.id)
      .order('timestamp', { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error getting user conversations:', error);
    return [];
  }
}
