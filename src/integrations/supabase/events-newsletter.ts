// src/integrations/openai/events-newsletter.ts
import axios from 'axios';
import { supabase } from '../supabase/client';

// Set up constants for the API endpoints
const N8N_BASE_URL = process.env.REACT_APP_N8N_BASE_URL || 'http://localhost:5678';
const EVENTS_ENDPOINT = `${N8N_BASE_URL}/webhook/get-events`;
const NEWSLETTER_ENDPOINT = `${N8N_BASE_URL}/webhook/subscribe-newsletter`;

/**
 * Fetch events based on search criteria
 * @param startDate Optional start date in YYYY-MM-DD format
 * @param endDate Optional end date in YYYY-MM-DD format
 * @param category Optional event category
 * @param location Optional event location
 * @param userId Optional user ID for tracking
 * @returns Promise with events data
 */
export async function getEvents(
  startDate?: string,
  endDate?: string,
  category?: string,
  location?: string,
  userId?: string
): Promise<any> {
  try {
    const response = await axios.post(EVENTS_ENDPOINT, {
      start_date: startDate,
      end_date: endDate,
      category,
      location,
      userId
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return {
      success: false,
      message: 'Error retrieving events. Please try again later.',
      events: []
    };
  }
}

/**
 * Subscribe a user to the newsletter
 * @param email User's email address
 * @param name Optional user's name
 * @param interests Optional array of interests
 * @param userId Optional user ID for tracking
 * @returns Promise with subscription result
 */
export async function subscribeToNewsletter(
  email: string,
  name?: string,
  interests?: string[],
  userId?: string
): Promise<any> {
  try {
    const response = await axios.post(NEWSLETTER_ENDPOINT, {
      email,
      name,
      interests,
      userId
    });
    
    return response.data;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      message: 'Error processing subscription. Please try again later.',
      status: 'error'
    };
  }
}

/**
 * Format events for the OpenAI agent response
 * @param events Array of events from the API
 * @returns Formatted string for the agent to use in responses
 */
export function formatEventsForAgent(eventsResponse: any): string {
  if (!eventsResponse.success || eventsResponse.count === 0) {
    return eventsResponse.message || 'No events found matching the criteria.';
  }
  
  let formattedResponse = `I found ${eventsResponse.count} events that may interest you:\n\n`;
  
  // Highlight upcoming events first if available
  if (eventsResponse.upcomingEvents && eventsResponse.upcomingEvents.length > 0) {
    formattedResponse += `**Happening Soon:**\n`;
    eventsResponse.upcomingEvents.slice(0, 3).forEach((event: any, index: number) => {
      formattedResponse += `${index + 1}. **${event.title}** - ${event.date} at ${event.time}\n   Location: ${event.location}\n   ${event.description?.substring(0, 100)}${event.description?.length > 100 ? '...' : ''}\n\n`;
    });
  }
  
  // If there are dates with multiple events, group them
  if (eventsResponse.groupedByDate) {
    formattedResponse += `**Events By Date:**\n`;
    
    // Get dates and sort them chronologically (simple string comparison works if YYYY-MM-DD format)
    const dates = Object.keys(eventsResponse.groupedByDate).sort();
    
    // Display events grouped by date (limiting to 5 dates to avoid overly long responses)
    dates.slice(0, 5).forEach((date: string) => {
      formattedResponse += `\n${date}:\n`;
      eventsResponse.groupedByDate[date].forEach((event: any, index: number) => {
        formattedResponse += `- **${event.title}** at ${event.time}, ${event.location}\n`;
      });
    });
    
    // If there are more dates than we displayed
    if (dates.length > 5) {
      formattedResponse += `\n...and events on ${dates.length - 5} more dates.\n`;
    }
  } else {
    // Fall back to a simple list if not grouped
    eventsResponse.events.slice(0, 5).forEach((event: any, index: number) => {
      formattedResponse += `${index + 1}. **${event.title}** - ${event.date} at ${event.time}\n   Location: ${event.location}\n   ${event.description?.substring(0, 100)}${event.description?.length > 100 ? '...' : ''}\n\n`;
    });
    
    if (eventsResponse.events.length > 5) {
      formattedResponse += `...and ${eventsResponse.events.length - 5} more events.\n`;
    }
  }
  
  // Add suggestions if available
  if (eventsResponse.suggestedCategories && eventsResponse.suggestedCategories.length > 0) {
    formattedResponse += `\nPopular event categories you might be interested in: ${eventsResponse.suggestedCategories.join(', ')}.\n`;
  }
  
  formattedResponse += `\nYou can ask me for more details about any of these events, or you can filter events by date, location, or category.`;
  
  return formattedResponse;
}

/**
 * Format newsletter subscription result for the OpenAI agent
 * @param subscriptionResult Result from the subscription API
 * @returns Formatted string for the agent to use in responses
 */
export function formatNewsletterResultForAgent(subscriptionResult: any): string {
  if (!subscriptionResult.success) {
    if (subscriptionResult.error === 'invalid_email') {
      return "It seems the email address you provided isn't valid. Could you please provide a valid email address for the newsletter subscription?";
    }
    return "I apologize, but I encountered an issue while trying to process your newsletter subscription. Please try again later or contact our support team for assistance.";
  }
  
  if (subscriptionResult.isNewSubscription) {
    return "Great news! You've been successfully subscribed to our newsletter. You'll receive updates about community events, resources, and stories. Thank you for joining our community!";
  } else {
    return "Thank you! Your newsletter subscription has been updated successfully. You'll continue to receive our newsletter with the latest community updates, events, and resources.";
  }
}

/**
 * Integration with OpenAI agent's function calling for events
 * This function handles the OpenAI function call for get_events
 */
export async function handleGetEventsFunction(args: any, userId?: string): Promise<any> {
  try {
    const { start_date, end_date, category, location } = args;
    
    const events = await getEvents(
      start_date,
      end_date,
      category,
      location,
      userId
    );
    
    return events;
  } catch (error) {
    console.error('Error in handleGetEventsFunction:', error);
    return {
      success: false,
      message: 'Sorry, I encountered an error while retrieving events.',
      events: []
    };
  }
}

/**
 * Integration with OpenAI agent's function calling for newsletter subscription
 * This function handles the OpenAI function call for subscribe_to_newsletter
 */
export async function handleSubscribeNewsletterFunction(args: any, userId?: string): Promise<any> {
  try {
    const { email, name, interests } = args;
    
    const result = await subscribeToNewsletter(
      email,
      name,
      interests,
      userId
    );
    
    return result;
  } catch (error) {
    console.error('Error in handleSubscribeNewsletterFunction:', error);
    return {
      success: false,
      message: 'Sorry, I encountered an error while processing your subscription.',
      status: 'error'
    };
  }
}

/**
 * Store event interaction (when a user asks about or views events)
 * This helps improve future recommendations
 */
export async function logEventInteraction(userId: string, eventIds: string[], searchParams: any): Promise<void> {
  if (!userId) return;
  
  try {
    await supabase
      .from('user_event_interactions')
      .insert({
        user_id: userId,
        event_ids: eventIds,
        query_params: searchParams,
        timestamp: new Date().toISOString()
      });
  } catch (error) {
    console.error('Error logging event interaction:', error);
    // Non-critical operation, so just log the error without throwing
  }
}

/**
 * Get user's event recommendations based on past interests
 * This can be used to suggest relevant events to the user
 */
export async function getEventRecommendations(userId: string): Promise<any> {
  if (!userId) {
    return {
      success: false,
      message: 'User ID required for recommendations',
      events: []
    };
  }
  
  try {
    // Get user's past interactions to determine interests
    const { data: interactions, error: interactionsError } = await supabase
      .from('user_event_interactions')
      .select('*')
      .eq('user_id', userId)
      .order('timestamp', { ascending: false })
      .limit(10);
    
    if (interactionsError) throw interactionsError;
    
    // If no past interactions, return general upcoming events
    if (!interactions || interactions.length === 0) {
      return getEvents();
    }
    
    // Extract categories and locations from past interactions
    const categories = new Set<string>();
    const locations = new Set<string>();
    
    interactions.forEach(interaction => {
      if (interaction.query_params?.category) {
        categories.add(interaction.query_params.category);
      }
      if (interaction.query_params?.location) {
        locations.add(interaction.query_params.location);
      }
    });
    
    // Get recommendations based on past interests
    // Prioritize most recent category and location if available
    const mostRecentCategory = categories.size > 0 ? Array.from(categories)[0] : undefined;
    const mostRecentLocation = locations.size > 0 ? Array.from(locations)[0] : undefined;
    
    return getEvents(undefined, undefined, mostRecentCategory, mostRecentLocation, userId);
  } catch (error) {
    console.error('Error getting event recommendations:', error);
    return {
      success: false,
      message: 'Error retrieving personalized recommendations',
      events: []
    };
  }
}
