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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/signin" />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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

function MainLayout() {
  return (
    <div className="h-screen w-screen flex bg-[#0E0D0D]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="px-2 py-6">
          <Navigation />
        </div>

        <div className="flex-1 p-6 bg-[#161618] border border-[#525252] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[5px]">
          <div className="mx-auto h-full flex flex-col justify-between">
            <div>
              <Header />
              <ScenarioResults />
            </div>
            <div className="mx-4 mb-4">
              <DashboardMetrics />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
