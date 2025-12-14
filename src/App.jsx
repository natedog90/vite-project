import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

// Lazy load all route components
const Home = lazy(() => import("./components/Home"));
const Leadership = lazy(() => import("./components/LeaderShip"));
const Business = lazy(() => import("./components/Buisness"));
const Tech = lazy(() => import("./components/Tech"));
const Wellness = lazy(() => import("./components/Wellness"));
const CareerPlanning = lazy(() => import("./components/CareerPlanning"));
const ResumePage = lazy(() => import("./components/ResumePage"));
const Gallery = lazy(() => import("./components/Gallery"));

// Loading component
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      fontSize: "1.5rem",
    }}
  >
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <Router basename="/myportfolio">
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
