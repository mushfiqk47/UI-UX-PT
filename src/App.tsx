import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;