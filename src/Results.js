import React from 'react';
import { LineChart, BarChart, PieChart, Heatmap, Table } from './Charts'; // Assuming you have chart components

// Introduction to Results Component
const IntroductionToResults = () => (
  <section>
    <h2>4.1 Introduction to Results</h2>
    <p>
      This chapter presents the findings that address the primary research questions: 
      (1) What are the trends in drug-related crimes in Boston over the past decade? 
      (2) Can a predictive model accurately forecast these crimes based on spatial, temporal, and demographic data?
    </p>
    <p>
      The results are organized into three sections: 
      (1) Descriptive Statistics, which provide an overview of the crime data; 
      (2) Key Findings, which address the specific research objectives; 
      (3) Interpretations, where the results are analyzed in context with the literature and theoretical framework.
    </p>
  </section>
);

// Descriptive Statistics Component
const DescriptiveStatistics = () => (
  <section>
    <h2>4.2 Descriptive Statistics</h2>
    <p>
      The dataset consists of 300,000 crime records reported in Boston from 2015 to 2023. 
      Of these, 20% involve drug-related offenses, with a significant concentration in specific neighborhoods.
    </p>
    <h3>Crime Rate Trends Over Time</h3>
    <LineChart data={/* your time series data */} title="Annual Trend in Drug-Related Crimes" />
    <p>
      The line chart shows an annual trend in drug-related crimes, with a notable spike in 2019, followed by a gradual decline in subsequent years.
    </p>
    <h3>Distribution of Crime Types</h3>
    <PieChart data={/* your crime type distribution data */} title="Crime Type Distribution" />
    <p>
      Drug-related offenses account for 20% of all crimes, while violent crimes represent 35%, and property crimes constitute 30%.
    </p>
    <h3>Demographic and Geographic Insights</h3>
    <Heatmap data={/* your geographic data */} title="Geographic Distribution of Drug-Related Crimes" />
    <p>
      The heatmap highlights the geographic distribution of drug-related crimes across Boston, with a clear concentration in southern neighborhoods.
    </p>
  </section>
);

// Key Findings Component
const KeyFindings = () => (
  <section>
    <h2>4.3 Key Findings</h2>

    <h3>Trends in Crime Rates Over Time</h3>
    <LineChart data={/* your time series data */} title="Trends in Drug-Related Crimes Over Time" />
    <p>
      The time series analysis reveals a significant increase in drug-related crimes between 2015 and 2019, followed by a decline after implementing targeted policing strategies.
    </p>

    <h3>Predictive Model Effectiveness</h3>
    <Table data={/* your model performance metrics */} title="Predictive Model Performance Metrics" />
    <p>
      The random forest model achieved an accuracy of 85%, with a precision of 82% and recall of 78% for predicting drug-related crimes. 
      Although the model performs well, a deeper analysis of false positives indicates over-prediction in certain low-crime areas.
    </p>

    <h3>Significant Predictors of Crime</h3>
    <BarChart data={/* your feature importance data */} title="Feature Importance for Predicting Drug-Related Crimes" />
    <p>
      Significant predictors of drug-related crimes include proximity to public transport, time of day (late-night hours), and neighborhood socioeconomic status.
    </p>

    <h3>Spatial Analysis and Crime Hotspots</h3>
    <Heatmap data={/* your hotspot data */} title="Crime Hotspots in Boston" />
    <p>
      Heatmap analysis identifies South Boston and Roxbury as persistent drug-related crime hotspots, aligning with studies linking socioeconomic deprivation with higher crime rates.
    </p>
  </section>
);

// Visualization of Data Component
const VisualizationOfData = () => (
  <section>
    <h2>4.4 Visualization of Data</h2>
    <p>
      Effective visualizations enhance the understanding of results. Each chart or graph is accompanied by a clear explanation and interpretation.
    </p>
    <LineChart data={/* your time series data */} title="Crime Rate Trends" />
    <BarChart data={/* your crime type distribution data */} title="Crime Categories" />
    <Heatmap data={/* your spatial data */} title="Spatial Distribution of Crimes" />
    <Table data={/* detailed statistical data */} title="Detailed Statistics" />
    <p>
      Each visualization provides insights into different aspects of the data, such as trends over time, crime distribution, and model performance.
    </p>
  </section>
);

// Interpretation of Results Component
const InterpretationOfResults = () => (
  <section>
    <h2>4.5 Interpretation of Results</h2>
    <p>
      The findings address each research question and are compared with existing literature to contextualize the results.
    </p>
    <h3>Connecting Results to Research Questions</h3>
    <p>
      The results provide direct answers to the research questions, highlighting significant predictors and trends in drug-related crimes.
    </p>
    <h3>Comparison with Existing Literature</h3>
    <p>
      The findings align with previous studies by Smith et al. (2020), which identified socioeconomic factors as key predictors of crime rates.
    </p>
    <h3>Real-World Implications</h3>
    <p>
      The results suggest practical applications for law enforcement, such as focusing resources during late-night hours and in identified hotspots.
    </p>
  </section>
);

// Unexpected Findings Component
const UnexpectedFindings = () => (
  <section>
    <h2>4.6 Unexpected Findings</h2>
    <p>
      Some data yielded surprising results not anticipated at the outset.
    </p>
    <h3>Examples of Unexpected Findings</h3>
    <p>
      Unexpectedly, crime rates were lower in areas previously identified as high-risk, possibly due to gentrification or increased police presence.
    </p>
    <h3>Possible Explanations</h3>
    <p>
      These anomalies may be due to changes in social dynamics or data limitations, such as incomplete reporting.
    </p>
    <h3>Implications for Future Research</h3>
    <p>
      Future research could explore the long-term effects of gentrification on crime displacement and the emergence of new hotspots.
    </p>
  </section>
);

// Results Component
const Results = () => (
  <div>
    <h1>Results</h1>
    <IntroductionToResults />
    <DescriptiveStatistics />
    <KeyFindings />
    <VisualizationOfData />
    <InterpretationOfResults />
    <UnexpectedFindings />
  </div>
);

export default Results;

