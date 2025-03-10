export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      chat_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          is_from_assistant: boolean | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_from_assistant?: boolean | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_from_assistant?: boolean | null
          user_id?: string | null
        }
        Relationships: []
      }
      conversations: {
        Row: {
          agent_path: Json | null
          flagged: boolean | null
          id: string
          metadata: Json | null
          sentiment_score: number | null
          session_id: string
          system_response: string
          timestamp: string | null
          user_input: string
        }
        Insert: {
          agent_path?: Json | null
          flagged?: boolean | null
          id?: string
          metadata?: Json | null
          sentiment_score?: number | null
          session_id: string
          system_response: string
          timestamp?: string | null
          user_input: string
        }
        Update: {
          agent_path?: Json | null
          flagged?: boolean | null
          id?: string
          metadata?: Json | null
          sentiment_score?: number | null
          session_id?: string
          system_response?: string
          timestamp?: string | null
          user_input?: string
        }
        Relationships: []
      }
      event_rsvps: {
        Row: {
          created_at: string | null
          email: string
          event_id: string | null
          id: string
          metadata: Json | null
          name: string | null
          rsvp_status: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          event_id?: string | null
          id?: string
          metadata?: Json | null
          name?: string | null
          rsvp_status: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          event_id?: string | null
          id?: string
          metadata?: Json | null
          name?: string | null
          rsvp_status?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_rsvps_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_rsvps_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category: string
          description: string
          end_date: string
          id: string
          last_updated: string | null
          location: Json | null
          metadata: Json | null
          organizer: string
          source: string | null
          start_date: string
          title: string
          website_url: string | null
        }
        Insert: {
          category: string
          description: string
          end_date: string
          id?: string
          last_updated?: string | null
          location?: Json | null
          metadata?: Json | null
          organizer: string
          source?: string | null
          start_date: string
          title: string
          website_url?: string | null
        }
        Update: {
          category?: string
          description?: string
          end_date?: string
          id?: string
          last_updated?: string | null
          location?: Json | null
          metadata?: Json | null
          organizer?: string
          source?: string | null
          start_date?: string
          title?: string
          website_url?: string | null
        }
        Relationships: []
      }
      knowledge_base: {
        Row: {
          category: string
          content: string
          embedding: string | null
          id: string
          last_updated: string | null
          metadata: Json | null
          source: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          category: string
          content: string
          embedding?: string | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          source?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          category?: string
          content?: string
          embedding?: string | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          source?: string | null
          tags?: string[] | null
          title?: string
        }
        Relationships: []
      }
      partner_categories: {
        Row: {
          description: string | null
          id: string
          metadata: Json | null
          name: string
        }
        Insert: {
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
        }
        Update: {
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
        }
        Relationships: []
      }
      partners: {
        Row: {
          api_key: string | null
          category: string
          contact_information: Json | null
          description: string | null
          id: string
          last_scraped: string | null
          logo_url: string | null
          metadata: Json | null
          name: string
          scraping_config: Json | null
          website_url: string
        }
        Insert: {
          api_key?: string | null
          category: string
          contact_information?: Json | null
          description?: string | null
          id?: string
          last_scraped?: string | null
          logo_url?: string | null
          metadata?: Json | null
          name: string
          scraping_config?: Json | null
          website_url: string
        }
        Update: {
          api_key?: string | null
          category?: string
          contact_information?: Json | null
          description?: string | null
          id?: string
          last_scraped?: string | null
          logo_url?: string | null
          metadata?: Json | null
          name?: string
          scraping_config?: Json | null
          website_url?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          heartbeat_id: string
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          heartbeat_id: string
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          heartbeat_id?: string
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      resource_categories: {
        Row: {
          description: string | null
          id: string
          metadata: Json | null
          name: string
          parent_id: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          parent_id?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resource_categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "resource_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      resources: {
        Row: {
          category: string
          contact_information: Json | null
          description: string
          embedding: string | null
          id: string
          last_updated: string | null
          metadata: Json | null
          source: string | null
          subcategory: string | null
          title: string
          website_url: string | null
        }
        Insert: {
          category: string
          contact_information?: Json | null
          description: string
          embedding?: string | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          source?: string | null
          subcategory?: string | null
          title: string
          website_url?: string | null
        }
        Update: {
          category?: string
          contact_information?: Json | null
          description?: string
          embedding?: string | null
          id?: string
          last_updated?: string | null
          metadata?: Json | null
          source?: string | null
          subcategory?: string | null
          title?: string
          website_url?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          created_at: string | null
          id: string
          last_active: string | null
          metadata: Json | null
          session_id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_active?: string | null
          metadata?: Json | null
          session_id: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_active?: string | null
          metadata?: Json | null
          session_id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          is_moderator: boolean | null
          last_login: string | null
          metadata: Json | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          is_moderator?: boolean | null
          last_login?: string | null
          metadata?: Json | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          is_moderator?: boolean | null
          last_login?: string | null
          metadata?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize:
        | {
            Args: {
              "": string
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      halfvec_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      halfvec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      halfvec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      hnsw_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      l2_norm:
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      l2_normalize:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      match_resources: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          id: string
          title: string
          description: string
          category: string
          contact_information: Json
          website_url: string
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      sparsevec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      upcoming_events: {
        Args: {
          days_ahead: number
        }
        Returns: {
          id: string
          title: string
          description: string
          start_date: string
          end_date: string
          location: Json
          organizer: string
          website_url: string
          category: string
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims:
        | {
            Args: {
              "": string
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
