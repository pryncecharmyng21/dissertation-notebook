// src/TableOfContents.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TableOfContents.css'; // Optional: Add if you have custom styles for the Table of Contents

function TableOfContents() {
  return (
    <div className="table-of-contents-container">
      <h1 className="table-of-contents-header">Table of Contents</h1>
      <ul className="table-of-contents-list">
        <li><Link to="/introduction">Chapter 1: Introduction</Link></li>
        <li><Link to="/literature-review">Chapter 2: Literature Review</Link></li>
        <li><Link to="/methodology">Chapter 3: Methodology</Link></li>
        <li><Link to="/data-analysis">Chapter 4: Data Analysis and Visualization</Link></li>
        <li><Link to="/discussion">Chapter 5: Discussion</Link></li>
        <li><Link to="/conclusions">Chapter 6: Conclusion</Link></li>
        <li><Link to="/appendix">Appendix</Link></li>
      </ul>
    </div>
  );
}

export default TableOfContents;

