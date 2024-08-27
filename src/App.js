import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import MainReport from './MainReport';
import CaseStudies from './CaseStudies';
import FutureWork from './FutureWork';
import ApiGuideline from './ApiGuideline';
import JupyterNotebook from './JupyterNotebook';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main-report" element={<MainReport />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/future-work" element={<FutureWork />} />
          <Route path="/api-guideline" element={<ApiGuideline />} />
          <Route path="/jupyter-notebook" element={<JupyterNotebook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

