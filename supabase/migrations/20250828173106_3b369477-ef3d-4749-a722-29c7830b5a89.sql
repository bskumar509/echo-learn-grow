-- Gamification Tables
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  category TEXT CHECK (category IN ('academic', 'social', 'streak', 'challenge')),
  points INTEGER DEFAULT 0,
  level_required INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  achievement_id UUID REFERENCES public.achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

CREATE TABLE public.user_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  total_points INTEGER DEFAULT 0,
  streak_days INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  courses_completed INTEGER DEFAULT 0,
  lessons_completed INTEGER DEFAULT 0,
  quiz_score_average DECIMAL(5,2),
  study_time_minutes INTEGER DEFAULT 0,
  last_active_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.leaderboards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  period TEXT NOT NULL CHECK (period IN ('weekly', 'monthly', 'all-time')),
  points INTEGER DEFAULT 0,
  rank INTEGER,
  class_id UUID,
  school_id UUID,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.weekly_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  target_type TEXT CHECK (target_type IN ('lessons', 'quizzes', 'study_time', 'collaboration')),
  target_value INTEGER,
  reward_points INTEGER,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Roles and Relationships
CREATE TYPE public.app_role AS ENUM ('student', 'parent', 'teacher', 'admin');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

CREATE TABLE public.student_parent_links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  parent_id UUID NOT NULL,
  relationship TEXT DEFAULT 'parent',
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, parent_id)
);

-- Classes and Schools
CREATE TABLE public.schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  country TEXT DEFAULT 'India',
  board TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  grade_level TEXT,
  teacher_id UUID,
  school_id UUID REFERENCES public.schools(id),
  academic_year TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.class_students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(class_id, student_id)
);

-- Live Learning
CREATE TABLE public.live_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  teacher_id UUID,
  class_id UUID REFERENCES public.classes(id),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  duration_minutes INTEGER,
  meeting_url TEXT,
  recording_url TEXT,
  status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.group_workspaces (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  class_id UUID REFERENCES public.classes(id),
  assignment_id UUID,
  created_by UUID,
  max_members INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.workspace_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workspace_id UUID REFERENCES public.group_workspaces(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  role TEXT DEFAULT 'member' CHECK (role IN ('leader', 'member')),
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(workspace_id, user_id)
);

-- Forums and Communication
CREATE TABLE public.forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.forum_categories(id),
  author_id UUID,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_moderated BOOLEAN DEFAULT TRUE,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.forum_posts(id) ON DELETE CASCADE,
  author_id UUID,
  content TEXT NOT NULL,
  is_solution BOOLEAN DEFAULT FALSE,
  is_moderated BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID,
  recipient_id UUID,
  subject TEXT,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Curriculum and Content
CREATE TABLE public.curricula (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  board TEXT,
  region TEXT,
  grade_levels TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  curriculum_id UUID REFERENCES public.curricula(id),
  grade_level TEXT,
  subject TEXT,
  language TEXT DEFAULT 'en',
  instructor_id UUID,
  thumbnail_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.course_modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES public.course_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content_type TEXT CHECK (content_type IN ('video', 'text', 'interactive', 'quiz', 'assignment')),
  content_url TEXT,
  content_data JSONB,
  duration_minutes INTEGER,
  order_index INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enhanced Assessments
CREATE TABLE public.assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES public.lessons(id),
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('quiz', 'drag-drop', 'fill-blank', 'matching', 'game')),
  questions JSONB,
  total_points INTEGER,
  time_limit_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.assessment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assessment_id UUID REFERENCES public.assessments(id),
  user_id UUID NOT NULL,
  answers JSONB,
  score DECIMAL(5,2),
  time_taken_seconds INTEGER,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Feedback and Support
CREATE TABLE public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  type TEXT CHECK (type IN ('bug', 'feature', 'content', 'general')),
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'resolved')),
  response TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE public.support_tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  category TEXT,
  subject TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'resolved', 'closed')),
  assigned_to UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics
CREATE TABLE public.user_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  event_type TEXT NOT NULL,
  event_data JSONB,
  session_id TEXT,
  device_type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on all tables
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaderboards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.weekly_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_parent_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.live_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.group_workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.curricula ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;

-- Security definer functions for role checking
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role AS $$
  SELECT role FROM public.user_roles WHERE user_roles.user_id = $1 LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.has_role(user_id UUID, check_role app_role)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = $1 AND role = $2
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.is_teacher()
RETURNS BOOLEAN AS $$
  SELECT public.has_role(auth.uid(), 'teacher'::app_role) OR public.has_role(auth.uid(), 'admin'::app_role);
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

CREATE OR REPLACE FUNCTION public.is_parent_of(student_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.student_parent_links 
    WHERE parent_id = auth.uid() AND student_parent_links.student_id = $1 AND approved = TRUE
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Basic RLS Policies
-- User achievements
CREATE POLICY "Users can view their achievements" ON public.user_achievements 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "System can insert achievements" ON public.user_achievements 
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- User stats
CREATE POLICY "Users can view their stats" ON public.user_stats 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their stats" ON public.user_stats 
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "System can insert stats" ON public.user_stats 
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Leaderboards (public view)
CREATE POLICY "Everyone can view leaderboards" ON public.leaderboards 
  FOR SELECT USING (TRUE);

-- Weekly challenges (public view)
CREATE POLICY "Everyone can view active challenges" ON public.weekly_challenges 
  FOR SELECT USING (is_active = TRUE);

-- Messages
CREATE POLICY "Users can view their messages" ON public.messages 
  FOR SELECT USING (auth.uid() = sender_id OR auth.uid() = recipient_id);
CREATE POLICY "Users can send messages" ON public.messages 
  FOR INSERT WITH CHECK (auth.uid() = sender_id);
CREATE POLICY "Recipients can update read status" ON public.messages 
  FOR UPDATE USING (auth.uid() = recipient_id);

-- Forums (public read, authenticated write)
CREATE POLICY "Everyone can view forum categories" ON public.forum_categories 
  FOR SELECT USING (TRUE);
CREATE POLICY "Everyone can view moderated posts" ON public.forum_posts 
  FOR SELECT USING (is_moderated = TRUE);
CREATE POLICY "Authenticated users can create posts" ON public.forum_posts 
  FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their posts" ON public.forum_posts 
  FOR UPDATE USING (auth.uid() = author_id);

-- Courses (public view)
CREATE POLICY "Everyone can view published courses" ON public.courses 
  FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Teachers can manage their courses" ON public.courses 
  FOR ALL USING (auth.uid() = instructor_id OR public.is_teacher());

-- Feedback
CREATE POLICY "Users can submit feedback" ON public.feedback 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their feedback" ON public.feedback 
  FOR SELECT USING (auth.uid() = user_id);

-- Support tickets
CREATE POLICY "Users can create tickets" ON public.support_tickets 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their tickets" ON public.support_tickets 
  FOR SELECT USING (auth.uid() = user_id);

-- User roles
CREATE POLICY "Users can view their roles" ON public.user_roles 
  FOR SELECT USING (auth.uid() = user_id);

-- Parent-student links
CREATE POLICY "Parents can view their links" ON public.student_parent_links 
  FOR SELECT USING (auth.uid() = parent_id OR auth.uid() = student_id);

-- Classes
CREATE POLICY "Teachers can manage their classes" ON public.classes 
  FOR ALL USING (auth.uid() = teacher_id OR public.is_teacher());
CREATE POLICY "Students can view their classes" ON public.classes 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.class_students 
      WHERE class_students.class_id = classes.id 
      AND class_students.student_id = auth.uid()
    )
  );

-- Create triggers for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_stats_updated_at BEFORE UPDATE ON public.user_stats
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_posts_updated_at BEFORE UPDATE ON public.forum_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON public.support_tickets
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default data
INSERT INTO public.curricula (name, board, region, grade_levels) VALUES
  ('CBSE', 'CBSE', 'National', ARRAY['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  ('ICSE', 'ICSE', 'National', ARRAY['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  ('Maharashtra State Board', 'State', 'Maharashtra', ARRAY['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  ('Tamil Nadu State Board', 'State', 'Tamil Nadu', ARRAY['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);

INSERT INTO public.forum_categories (name, description, icon, order_index) VALUES
  ('General Discussion', 'General topics and announcements', 'MessageCircle', 1),
  ('Study Help', 'Get help with your studies', 'HelpCircle', 2),
  ('Exam Preparation', 'Tips and resources for exams', 'BookOpen', 3),
  ('Parent Corner', 'Discussion for parents', 'Users', 4),
  ('Teacher Resources', 'Resources and discussion for teachers', 'GraduationCap', 5);