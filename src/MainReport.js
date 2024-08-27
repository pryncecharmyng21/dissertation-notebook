import React from 'react';
import Introduction from './Introduction';
import LiteratureReview from './LiteratureReview';
import Methodology from './Methodology';
import DataAnalysis from './DataAnalysis';
import Discussion from './Discussion';
import Conclusion from './Conclusion';
import Appendix from './Appendix';
import './MainReport.css'; // Ensure you have styles for the report

function MainReport() {
  return (
    <div className="main-report">
      <h1>Main Dissertation Report</h1>
      
      <nav>
        <ul>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#literature-review">Literature Review</a></li>
          <li><a href="#methodology">Methodology</a></li>
          <li><a href="#data-analysis">Data Analysis and Visualization</a></li>
          <li><a href="#discussion">Discussion</a></li>
          <li><a href="#conclusion">Conclusion</a></li>
          <li><a href="#appendix">Appendix</a></li>
        </ul>
      </nav>

      <section id="introduction">
        <Introduction />
      </section>

      <section id="literature-review">
        <LiteratureReview />
      </section>

      <section id="methodology">
        <Methodology />
      </section>

      <section id="data-analysis">
        <DataAnalysis />
      </section>

      <section id="discussion">
        <Discussion />
      </section>

      <section id="conclusion">
        <Conclusion />
      </section>

      <section id="appendix">
        <Appendix />
      </section>
    </div>
  );
}

export default MainReport;

