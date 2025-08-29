-- Add missing RLS policies for tables without policies

-- Achievements table (public read for discovery)
CREATE POLICY "Everyone can view achievements" ON public.achievements 
  FOR SELECT USING (TRUE);

-- Schools (public view for registration)
CREATE POLICY "Everyone can view schools" ON public.schools 
  FOR SELECT USING (TRUE);
CREATE POLICY "Admins can manage schools" ON public.schools 
  FOR ALL USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Live sessions (view for enrolled students)
CREATE POLICY "Teachers can manage sessions" ON public.live_sessions 
  FOR ALL USING (auth.uid() = teacher_id OR public.is_teacher());
CREATE POLICY "Students can view their sessions" ON public.live_sessions 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.class_students cs
      JOIN public.classes c ON cs.class_id = c.id
      WHERE cs.student_id = auth.uid() 
      AND c.id = live_sessions.class_id
    )
  );

-- Group workspaces
CREATE POLICY "Members can view workspaces" ON public.group_workspaces 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.workspace_members 
      WHERE workspace_id = group_workspaces.id 
      AND user_id = auth.uid()
    ) OR auth.uid() = created_by
  );
CREATE POLICY "Users can create workspaces" ON public.group_workspaces 
  FOR INSERT WITH CHECK (auth.uid() = created_by);

-- Workspace members
CREATE POLICY "Members can view membership" ON public.workspace_members 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.workspace_members wm2
      WHERE wm2.workspace_id = workspace_members.workspace_id 
      AND wm2.user_id = auth.uid()
    )
  );
CREATE POLICY "Workspace creators can manage members" ON public.workspace_members 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.group_workspaces 
      WHERE id = workspace_members.workspace_id 
      AND created_by = auth.uid()
    )
  );

-- Forum replies
CREATE POLICY "Everyone can view moderated replies" ON public.forum_replies 
  FOR SELECT USING (is_moderated = TRUE);
CREATE POLICY "Authenticated users can create replies" ON public.forum_replies 
  FOR INSERT WITH CHECK (auth.uid() = author_id);
CREATE POLICY "Authors can update their replies" ON public.forum_replies 
  FOR UPDATE USING (auth.uid() = author_id);

-- Curricula (public view)
CREATE POLICY "Everyone can view curricula" ON public.curricula 
  FOR SELECT USING (TRUE);

-- Course modules
CREATE POLICY "Everyone can view modules of published courses" ON public.course_modules 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.courses 
      WHERE courses.id = course_modules.course_id 
      AND courses.is_published = TRUE
    )
  );
CREATE POLICY "Teachers can manage modules" ON public.course_modules 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.courses 
      WHERE courses.id = course_modules.course_id 
      AND (courses.instructor_id = auth.uid() OR public.is_teacher())
    )
  );

-- Lessons
CREATE POLICY "Everyone can view lessons of published courses" ON public.lessons 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.course_modules cm
      JOIN public.courses c ON cm.course_id = c.id
      WHERE cm.id = lessons.module_id 
      AND c.is_published = TRUE
    )
  );
CREATE POLICY "Teachers can manage lessons" ON public.lessons 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.course_modules cm
      JOIN public.courses c ON cm.course_id = c.id
      WHERE cm.id = lessons.module_id 
      AND (c.instructor_id = auth.uid() OR public.is_teacher())
    )
  );

-- Assessments
CREATE POLICY "Everyone can view assessments of published courses" ON public.assessments 
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.lessons l
      JOIN public.course_modules cm ON l.module_id = cm.id
      JOIN public.courses c ON cm.course_id = c.id
      WHERE l.id = assessments.lesson_id 
      AND c.is_published = TRUE
    )
  );
CREATE POLICY "Teachers can manage assessments" ON public.assessments 
  FOR ALL USING (public.is_teacher());

-- Assessment submissions
CREATE POLICY "Users can submit assessments" ON public.assessment_submissions 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their submissions" ON public.assessment_submissions 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Teachers can view all submissions" ON public.assessment_submissions 
  FOR SELECT USING (public.is_teacher());

-- Class students
CREATE POLICY "Students can view their enrollments" ON public.class_students 
  FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Teachers can manage enrollments" ON public.class_students 
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.classes 
      WHERE classes.id = class_students.class_id 
      AND (classes.teacher_id = auth.uid() OR public.is_teacher())
    )
  );

-- User analytics
CREATE POLICY "Users can log their analytics" ON public.user_analytics 
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view their analytics" ON public.user_analytics 
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all analytics" ON public.user_analytics 
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix function search paths for security
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role AS $$
  SELECT role FROM public.user_roles WHERE user_roles.user_id = $1 LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

CREATE OR REPLACE FUNCTION public.has_role(user_id UUID, check_role app_role)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = $1 AND role = $2
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_teacher()
RETURNS BOOLEAN AS $$
  SELECT public.has_role(auth.uid(), 'teacher'::app_role) OR public.has_role(auth.uid(), 'admin'::app_role);
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

CREATE OR REPLACE FUNCTION public.is_parent_of(student_id UUID)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.student_parent_links 
    WHERE parent_id = auth.uid() AND student_parent_links.student_id = $1 AND approved = TRUE
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = public;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;