import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import VirtualClassroom from "./pages/VirtualClassroom";
import ContentLibrary from "./pages/ContentLibrary";
import Curriculum from "./pages/Curriculum";
import Assignments from "./pages/Assignments";
import TeacherPanel from "./pages/TeacherPanel";
import ParentPortal from "./pages/ParentPortal";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Accessibility from "./pages/Accessibility";
import Feedback from "./pages/Feedback";
import Achievements from "./pages/Achievements";
import MobileApp from "./pages/MobileApp";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import StudyMaterials from "./pages/StudyMaterials";
import CommunityForum from "./pages/CommunityForum";
import HelpCenter from "./pages/HelpCenter";
import Careers from "./pages/Careers";
import Partners from "./pages/Partners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/virtual-classroom" element={<VirtualClassroom />} />
          <Route path="/content-library" element={<ContentLibrary />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/teacher-panel" element={<TeacherPanel />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
