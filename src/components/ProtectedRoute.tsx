import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, userRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (allowedRoles && userRole && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on role
    const dashboardRoutes: Record<string, string> = {
      student: '/student-dashboard',
      teacher: '/teacher-dashboard',
      parent: '/parent-dashboard',
      admin: '/admin-dashboard',
    };
    
    return <Navigate to={dashboardRoutes[userRole] || '/'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;