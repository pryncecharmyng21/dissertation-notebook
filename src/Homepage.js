import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage">
      <h1>Welcome to the Dissertation Portal</h1>
      <p>Explore the various sections of the dissertation and access valuable resources:</p>

      <ul>
        <li><a href="https://data.police.uk/" target="_blank" rel="noopener noreferrer">UK Police Data API</a></li>
        <li><a href="http://localhost:8888" target="_blank" rel="noopener noreferrer">Jupyter Notebook</a></li>
        <li><a href="/main-report">Main Dissertation Report</a></li>
        <li><a href="/case-studies">Case Studies</a></li>
        <li><a href="/future-work">Future Work Insights</a></li>
        <li><a href="/api-guideline">API Usage Guidelines</a></li>
        <li><a href="/jupyter-notebook">Jupyter Notebook Instructions</a></li>
      </ul>
    </div>
  );
}

export default Homepage;

