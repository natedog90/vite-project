import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Leadership from "./components/LeaderShip.jsx";
import Business from "./components/Buisness.jsx";
import Tech from "./components/Tech.jsx";
import Wellness from "./components/Wellness.jsx";
import CareerPlanning from "./components/CareerPlanning.jsx";
import Gallery from "./components/Gallery.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/career-planning" element={<CareerPlanning />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
