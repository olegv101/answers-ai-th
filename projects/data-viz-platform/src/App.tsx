import "./App.css";
import { Navigation } from "./components/Navigation";
import { Sidebar } from "./components/Sidebar";
import { DashboardMetrics } from "./components/DashboardMetrics";
import { ScenarioResults } from "./components/ScenarioResults";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

/**
 * ProtectedRoute Component
 * Wraps routes that require authentication.
 * Redirects to signin page if user is not authenticated.
 */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/signin" />;
  return children;
}

/**
 * Main App Component
 * Sets up routing and authentication context for the application.
 * Handles three main routes:
 * - /signin: Login page
 * - /signup: Registration page
 * - /*: All other routes (protected)
 */
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected routes wrapped in ProtectedRoute component */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

/**
 * MainLayout Component
 * Defines the main application layout structure for authenticated users.
 * Layout consists of:
 * - Sidebar: Navigation menu (left side)
 * - Main content area (right side):
 *   - Navigation bar (top)
 *   - Content area with:
 *     - Header
 *     - Scenario Results
 *     - Dashboard Metrics (bottom)
 */
function MainLayout() {
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-[#0E0D0D]">
      {/* Left sidebar navigation */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation bar */}
        <div className="px-2 py-3 lg:py-6">
          <Navigation />
        </div>

        {/* Main content container */}
        <div className="flex-1 p-3 lg:p-6 bg-[#161618] border border-[#525252] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[5px]">
          <div className="mx-auto h-full flex flex-col justify-between">
            {/* Upper content section */}
            <div className="space-y-3 lg:space-y-6">
              <Header />
              <ScenarioResults />
            </div>
            {/* Bottom metrics section */}
            <div className="mx-2 lg:mx-4 mb-2 lg:mb-4">
              <DashboardMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
