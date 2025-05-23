import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Dashboard, LoginPage, HomePage, RegisterPage, AccessProtectedLink, GithubAuth } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthProvider";
import { AccessLink } from "./pages/AccessLink";
import { AccessQR } from "./pages/AccessQR";

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
						<Route path="/github-auth" element={<GithubAuth />} />
						<Route path="/access-protected/:shortUrl" element={<AccessProtectedLink />} />
						<Route path="/track-qr" element={<AccessQR />}/>
						<Route path="/:shortUrl" element={<AccessLink />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
