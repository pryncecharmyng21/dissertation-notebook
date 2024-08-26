// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Introduction from './Introduction';
import Methodology from './Methodology';
import DataAnalysis from './DataAnalysis';
import Applications from './Applications';
import Conclusion from './Conclusion'; // Ensure correct import
// Import other chapter components here

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/introduction">Introduction</Link></li>
            <li><Link to="/methodology">Methodology</Link></li>
            <li><Link to="/data-analysis">Data Analysis and Visualization</Link></li>
            <li><Link to="/applications">Applications and Use Cases</Link></li>
            <li><Link to="/conclusion">Conclusion and Future Work</Link></li>
            {/* Add links for other chapters here */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/conclusion" element={<Conclusion />} />
          {/* Define routes for other chapters here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

