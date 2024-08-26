// src/TableOfContents.js
import React from 'react';
import { Link } from 'react-router-dom';

function TableOfContents() {
  return (
    <div>
      <h1>Table of Contents</h1>
      <ul>
        <li><Link to="/introduction">Chapter 1: Introduction</Link></li>
        <li><Link to="/methodology">Chapter 2: Methodology</Link></li>
        <li><Link to="/data-analysis">Chapter 3: Data Analysis and Visualization</Link></li>
        <li><Link to="/applications">Chapter 4: Applications and Use Cases</Link></li>
        <li><Link to="/conclusion">Chapter 5: Conclusion and Future Work</Link></li>
        <li><Link to="/appendix">Appendix</Link></li>
      </ul>
    </div>
  );
}

export default TableOfContents;

