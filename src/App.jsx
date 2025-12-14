import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components directly instead of lazy loading for now
import Home from "./components/Home";
import Leadership from "./components/LeaderShip";
import Business from "./components/Buisness";
import Tech from "./components/Tech";
import Wellness from "./components/Wellness";
import CareerPlanning from "./components/CareerPlanning";
import ResumePage from "./components/ResumePage";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/career-planning" element={<CareerPlanning />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
