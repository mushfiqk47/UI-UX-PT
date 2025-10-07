import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import ProjectDetail from "@/pages/ProjectDetail";
import AllProjects from "@/pages/AllProjects";
import ContactPage from "@/pages/ContactPage";
import PricingPage from "@/pages/PricingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;