-- Insert sample courses
INSERT INTO public.courses (title, description, instructor_id, grade_level, subject, language, is_published, thumbnail_url)
VALUES 
  ('Mathematics Grade 10', 'Complete CBSE Mathematics curriculum for Grade 10', null, 'Grade 10', 'Mathematics', 'en', true, '/placeholder.svg'),
  ('Science Grade 9', 'Comprehensive Science course covering Physics, Chemistry, and Biology', null, 'Grade 9', 'Science', 'en', true, '/placeholder.svg'),
  ('English Literature', 'Explore classic and modern literature', null, 'Grade 11', 'English', 'en', true, '/placeholder.svg'),
  ('Computer Science Basics', 'Introduction to programming and computational thinking', null, 'Grade 8', 'Computer Science', 'en', true, '/placeholder.svg'),
  ('History of India', 'Journey through Indian history from ancient to modern times', null, 'Grade 10', 'History', 'en', true, '/placeholder.svg');

-- Insert sample achievements
INSERT INTO public.achievements (name, description, icon_url, category, points, level_required)
VALUES 
  ('First Steps', 'Complete your first lesson', '🎯', 'learning', 10, 1),
  ('Week Warrior', 'Maintain a 7-day streak', '🔥', 'streak', 50, 1),
  ('Quiz Master', 'Score 100% on 5 quizzes', '🏆', 'performance', 100, 2),
  ('Knowledge Seeker', 'Complete 10 lessons', '📚', 'learning', 75, 1),
  ('Rising Star', 'Reach Level 5', '⭐', 'level', 200, 5);

-- Insert sample weekly challenges
INSERT INTO public.weekly_challenges (title, description, target_type, target_value, reward_points, start_date, end_date, is_active)
VALUES 
  ('Study Marathon', 'Complete 5 lessons this week', 'lessons', 5, 100, CURRENT_DATE, CURRENT_DATE + INTERVAL '7 days', true),
  ('Quiz Champion', 'Score above 80% in 3 quizzes', 'quizzes', 3, 150, CURRENT_DATE, CURRENT_DATE + INTERVAL '7 days', true),
  ('Consistency Key', 'Study for 30 minutes daily', 'study_time', 210, 200, CURRENT_DATE, CURRENT_DATE + INTERVAL '7 days', true);

-- Insert sample forum categories
INSERT INTO public.forum_categories (name, description, icon, order_index)
VALUES 
  ('General Discussion', 'General topics and announcements', '💬', 1),
  ('Study Help', 'Get help with your studies', '📖', 2),
  ('Technical Support', 'Platform-related issues and questions', '🔧', 3),
  ('Parent Corner', 'Discussion space for parents', '👨‍👩‍👧‍👦', 4);