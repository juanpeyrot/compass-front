import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Dashboard, LoginPage, HomePage, RegisterPage } from "./pages";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { AuthProvider } from "./components/AuthProvider";

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background flex flex-col bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
