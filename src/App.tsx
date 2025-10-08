import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;