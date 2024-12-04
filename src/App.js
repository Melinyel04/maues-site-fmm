import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cultura from "./pages/Cultura/Cultura";
import Culinária from "./pages/Culinária/Culinária";
import Geografia from "./pages/Geografia/Geografia";
import História from "./pages/História/História";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/culinaria" element={<Culinária />} />
          <Route path="/geografia" element={<Geografia />} />
          <Route path="/historia" element={<História />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
