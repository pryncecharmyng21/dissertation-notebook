// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backgroundImg from './background.png'; // Adjust path relative to `src` folder

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="home-content">
        <h1>Welcome to the Dissertation Overview</h1>
        <p>
          This dissertation explores the development of a Python library designed to interact with the UK Police API for analyzing crime data. 
          The research includes data acquisition, API development, and containerization techniques, providing a comprehensive approach to handling crime data.
          <br />
          <br />
          Navigate through the sections to explore:
        </p>
        <ul>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/methodology">Methodology</Link></li>
          <li><Link to="/data-analysis">Data Analysis and Visualization</Link></li>
          <li><Link to="/applications">Applications and Use Cases</Link></li>
          <li><Link to="/conclusion">Conclusion and Future Work</Link></li>
          <li><Link to="/literature-review">Literature Review</Link></li>
          <li><Link to="/design-methodology">Design and Methodology</Link></li>
          <li><Link to="/implementation">Implementation</Link></li>
          <li><Link to="/testing-validation">Testing and Validation</Link></li>
          <li><Link to="/references">References</Link></li>
          <li><Link to="/appendix">Appendix</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

