// src/Appendix.js
import React from 'react';
import './Appendix.css'; // Add styles if needed

const Appendix = () => {
  return (
    <div className="appendix">
      <h1>Appendix</h1>
      <p>
        The appendix includes additional information and resources related to the dissertation.
        <br />
        <a href="http://localhost:8888/notebooks/tousedissertation.ipynb" target="_blank" rel="noopener noreferrer">
          Click here to view the Jupyter Notebook
        </a>
      </p>
    </div>
  );
};

export default Appendix;

