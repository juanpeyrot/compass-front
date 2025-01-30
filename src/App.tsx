import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/Home";
import { Dashboard } from "./pages";

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
