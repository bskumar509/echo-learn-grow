export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          icon_url: string | null
          id: string
          level_required: number | null
          name: string
          points: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          level_required?: number | null
          name: string
          points?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          level_required?: number | null
          name?: string
          points?: number | null
        }
        Relationships: []
      }
      assessment_submissions: {
        Row: {
          answers: Json | null
          assessment_id: string | null
          id: string
          score: number | null
          submitted_at: string | null
          time_taken_seconds: number | null
          user_id: string
        }
        Insert: {
          answers?: Json | null
          assessment_id?: string | null
          id?: string
          score?: number | null
          submitted_at?: string | null
          time_taken_seconds?: number | null
          user_id: string
        }
        Update: {
          answers?: Json | null
          assessment_id?: string | null
          id?: string
          score?: number | null
          submitted_at?: string | null
          time_taken_seconds?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_submissions_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          created_at: string | null
          id: string
          lesson_id: string | null
          questions: Json | null
          time_limit_minutes: number | null
          title: string
          total_points: number | null
          type: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          questions?: Json | null
          time_limit_minutes?: number | null
          title: string
          total_points?: number | null
          type?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          lesson_id?: string | null
          questions?: Json | null
          time_limit_minutes?: number | null
          title?: string
          total_points?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      bookmarks: {
        Row: {
          content_id: string
          content_type: string
          created_at: string
          id: string
          title: string
          user_id: string
        }
        Insert: {
          content_id: string
          content_type: string
          created_at?: string
          id?: string
          title: string
          user_id: string
        }
        Update: {
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      class_students: {
        Row: {
          class_id: string | null
          enrolled_at: string | null
          id: string
          student_id: string
        }
        Insert: {
          class_id?: string | null
          enrolled_at?: string | null
          id?: string
          student_id: string
        }
        Update: {
          class_id?: string | null
          enrolled_at?: string | null
          id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_students_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          academic_year: string | null
          created_at: string | null
          grade_level: string | null
          id: string
          name: string
          school_id: string | null
          teacher_id: string | null
        }
        Insert: {
          academic_year?: string | null
          created_at?: string | null
          grade_level?: string | null
          id?: string
          name: string
          school_id?: string | null
          teacher_id?: string | null
        }
        Update: {
          academic_year?: string | null
          created_at?: string | null
          grade_level?: string | null
          id?: string
          name?: string
          school_id?: string | null
          teacher_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "classes_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      course_modules: {
        Row: {
          course_id: string | null
          created_at: string | null
          description: string | null
          id: string
          order_index: number | null
          title: string
        }
        Insert: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          order_index?: number | null
          title: string
        }
        Update: {
          course_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          order_index?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_modules_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          created_at: string | null
          curriculum_id: string | null
          description: string | null
          grade_level: string | null
          id: string
          instructor_id: string | null
          is_published: boolean | null
          language: string | null
          subject: string | null
          thumbnail_url: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          curriculum_id?: string | null
          description?: string | null
          grade_level?: string | null
          id?: string
          instructor_id?: string | null
          is_published?: boolean | null
          language?: string | null
          subject?: string | null
          thumbnail_url?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          curriculum_id?: string | null
          description?: string | null
          grade_level?: string | null
          id?: string
          instructor_id?: string | null
          is_published?: boolean | null
          language?: string | null
          subject?: string | null
          thumbnail_url?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_curriculum_id_fkey"
            columns: ["curriculum_id"]
            isOneToOne: false
            referencedRelation: "curricula"
            referencedColumns: ["id"]
          },
        ]
      }
      curricula: {
        Row: {
          board: string | null
          created_at: string | null
          grade_levels: string[] | null
          id: string
          name: string
          region: string | null
        }
        Insert: {
          board?: string | null
          created_at?: string | null
          grade_levels?: string[] | null
          id?: string
          name: string
          region?: string | null
        }
        Update: {
          board?: string | null
          created_at?: string | null
          grade_levels?: string[] | null
          id?: string
          name?: string
          region?: string | null
        }
        Relationships: []
      }
      feedback: {
        Row: {
          created_at: string | null
          id: string
          message: string
          response: string | null
          status: string | null
          subject: string | null
          type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          response?: string | null
          status?: string | null
          subject?: string | null
          type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          response?: string | null
          status?: string | null
          subject?: string | null
          type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      forum_categories: {
        Row: {
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          order_index: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          order_index?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          order_index?: number | null
        }
        Relationships: []
      }
      forum_posts: {
        Row: {
          author_id: string | null
          category_id: string | null
          content: string
          created_at: string | null
          id: string
          is_moderated: boolean | null
          is_pinned: boolean | null
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          author_id?: string | null
          category_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          is_moderated?: boolean | null
          is_pinned?: boolean | null
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          author_id?: string | null
          category_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          is_moderated?: boolean | null
          is_pinned?: boolean | null
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_posts_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "forum_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_replies: {
        Row: {
          author_id: string | null
          content: string
          created_at: string | null
          id: string
          is_moderated: boolean | null
          is_solution: boolean | null
          post_id: string | null
        }
        Insert: {
          author_id?: string | null
          content: string
          created_at?: string | null
          id?: string
          is_moderated?: boolean | null
          is_solution?: boolean | null
          post_id?: string | null
        }
        Update: {
          author_id?: string | null
          content?: string
          created_at?: string | null
          id?: string
          is_moderated?: boolean | null
          is_solution?: boolean | null
          post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_replies_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "forum_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      group_workspaces: {
        Row: {
          assignment_id: string | null
          class_id: string | null
          created_at: string | null
          created_by: string | null
          id: string
          max_members: number | null
          name: string
        }
        Insert: {
          assignment_id?: string | null
          class_id?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          max_members?: number | null
          name: string
        }
        Update: {
          assignment_id?: string | null
          class_id?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          max_members?: number | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_workspaces_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboards: {
        Row: {
          class_id: string | null
          id: string
          period: string
          points: number | null
          rank: number | null
          school_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          class_id?: string | null
          id?: string
          period: string
          points?: number | null
          rank?: number | null
          school_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          class_id?: string | null
          id?: string
          period?: string
          points?: number | null
          rank?: number | null
          school_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          content_data: Json | null
          content_type: string | null
          content_url: string | null
          created_at: string | null
          duration_minutes: number | null
          id: string
          module_id: string | null
          order_index: number | null
          title: string
        }
        Insert: {
          content_data?: Json | null
          content_type?: string | null
          content_url?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          module_id?: string | null
          order_index?: number | null
          title: string
        }
        Update: {
          content_data?: Json | null
          content_type?: string | null
          content_url?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          module_id?: string | null
          order_index?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "course_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      live_sessions: {
        Row: {
          class_id: string | null
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          meeting_url: string | null
          recording_url: string | null
          scheduled_at: string | null
          status: string | null
          teacher_id: string | null
          title: string
        }
        Insert: {
          class_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          meeting_url?: string | null
          recording_url?: string | null
          scheduled_at?: string | null
          status?: string | null
          teacher_id?: string | null
          title: string
        }
        Update: {
          class_id?: string | null
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          meeting_url?: string | null
          recording_url?: string | null
          scheduled_at?: string | null
          status?: string | null
          teacher_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "live_sessions_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          recipient_id: string | null
          sender_id: string | null
          subject: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id?: string | null
          sender_id?: string | null
          subject?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          recipient_id?: string | null
          sender_id?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          grade: string | null
          id: string
          name: string
          phone: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          grade?: string | null
          id?: string
          name: string
          phone?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          grade?: string | null
          id?: string
          name?: string
          phone?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      schools: {
        Row: {
          address: string | null
          board: string | null
          city: string | null
          country: string | null
          created_at: string | null
          id: string
          name: string
          state: string | null
        }
        Insert: {
          address?: string | null
          board?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name: string
          state?: string | null
        }
        Update: {
          address?: string | null
          board?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: string
          name?: string
          state?: string | null
        }
        Relationships: []
      }
      student_parent_links: {
        Row: {
          approved: boolean | null
          created_at: string | null
          id: string
          parent_id: string
          relationship: string | null
          student_id: string
        }
        Insert: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          parent_id: string
          relationship?: string | null
          student_id: string
        }
        Update: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          parent_id?: string
          relationship?: string | null
          student_id?: string
        }
        Relationships: []
      }
      support_tickets: {
        Row: {
          assigned_to: string | null
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          priority: string | null
          status: string | null
          subject: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string | null
          status?: string | null
          subject: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          assigned_to?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string | null
          status?: string | null
          subject?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_id: string | null
          earned_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          achievement_id?: string | null
          earned_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          achievement_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
        ]
      }
      user_analytics: {
        Row: {
          created_at: string | null
          device_type: string | null
          event_data: Json | null
          event_type: string
          id: string
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          device_type?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          device_type?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed_at: string | null
          content_id: string
          content_type: string
          created_at: string
          id: string
          progress_percentage: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          content_id: string
          content_type: string
          created_at?: string
          id?: string
          progress_percentage?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          progress_percentage?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_stats: {
        Row: {
          courses_completed: number | null
          created_at: string | null
          id: string
          last_active_date: string | null
          lessons_completed: number | null
          level: number | null
          quiz_score_average: number | null
          streak_days: number | null
          study_time_minutes: number | null
          total_points: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          courses_completed?: number | null
          created_at?: string | null
          id?: string
          last_active_date?: string | null
          lessons_completed?: number | null
          level?: number | null
          quiz_score_average?: number | null
          streak_days?: number | null
          study_time_minutes?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          courses_completed?: number | null
          created_at?: string | null
          id?: string
          last_active_date?: string | null
          lessons_completed?: number | null
          level?: number | null
          quiz_score_average?: number | null
          streak_days?: number | null
          study_time_minutes?: number | null
          total_points?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      weekly_challenges: {
        Row: {
          created_at: string | null
          description: string | null
          end_date: string
          id: string
          is_active: boolean | null
          reward_points: number | null
          start_date: string
          target_type: string | null
          target_value: number | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          end_date: string
          id?: string
          is_active?: boolean | null
          reward_points?: number | null
          start_date: string
          target_type?: string | null
          target_value?: number | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          end_date?: string
          id?: string
          is_active?: boolean | null
          reward_points?: number | null
          start_date?: string
          target_type?: string | null
          target_value?: number | null
          title?: string
        }
        Relationships: []
      }
      workspace_members: {
        Row: {
          id: string
          joined_at: string | null
          role: string | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          id?: string
          joined_at?: string | null
          role?: string | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          id?: string
          joined_at?: string | null
          role?: string | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "group_workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          check_role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Returns: boolean
      }
      is_parent_of: {
        Args: { student_id: string }
        Returns: boolean
      }
      is_teacher: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      app_role: "student" | "parent" | "teacher" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["student", "parent", "teacher", "admin"],
    },
  },
} as const
