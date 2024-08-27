import React from 'react';

// Research Design Component
const ResearchDesign = () => (
  <section>
    <h2>3.1 Research Design</h2>
    <p>
      The research design sets the foundation for the study by defining the overall approach and strategy used to answer the research questions.
    </p>
    <h3>Qualitative, Quantitative, or Mixed-Methods Approach</h3>
    <p>
      For this study, a <strong>Quantitative Approach</strong> is employed to analyze crime patterns and develop a predictive model for drug-related crimes in Boston. This approach is suitable as it allows for statistical analysis of large datasets and application of machine learning models.
    </p>
    <p>
      The <strong>Qualitative Approach</strong> might be used for supplementary analysis, such as expert interviews on predictive policing. However, the primary focus remains on quantitative methods due to the data-centric nature of the research.
    </p>
    <p>
      A <strong>Mixed-Methods Approach</strong> was considered but ultimately not chosen as the primary design, though it could enhance the study by combining quantitative analysis with qualitative insights.
    </p>
    <p>
      The quantitative design is justified as it supports the objective of analyzing and predicting crime patterns using statistical and machine learning techniques.
    </p>
  </section>
);

// Data Sources Component
const DataSources = () => (
  <section>
    <h2>3.2 Data Sources</h2>
    <h3>Primary vs. Secondary Data</h3>
    <p>
      The primary data source for this study is the <strong>Boston Crime Dataset</strong>, which contains detailed records of crimes reported in Boston between 2015 and 2023. This is secondary data, as it was collected by external entities and is publicly available.
    </p>
    <h3>Description of the Dataset</h3>
    <p>
      The Boston Crime Dataset includes over 300,000 records categorized by offense type, date, time, and location. Key attributes include drug-related crimes, geographic coordinates, and temporal data (e.g., time of day, day of the week, season).
    </p>
    <h3>Data Time Frame</h3>
    <p>
      The study covers data from January 2015 to December 2023, providing a comprehensive view of recent crime trends.
    </p>
    <h3>Data Quality and Reliability</h3>
    <p>
      The dataset is obtained from the City of Boston’s Open Data Portal, ensuring reliability and authority for research purposes.
    </p>
  </section>
);

// Data Collection Methods Component
const DataCollectionMethods = () => (
  <section>
    <h2>3.3 Data Collection Methods</h2>
    <h3>Data Acquisition</h3>
    <p>
      The dataset was downloaded from the City of Boston’s Open Data Portal, which provides access to real-time updates and historical records of crime reports.
    </p>
    <h3>Data Preprocessing</h3>
    <p>
      <strong>Data Cleaning:</strong> The dataset had missing values, especially in location and time fields. Imputation techniques were applied where possible, and missing data were excluded to maintain integrity.
    </p>
    <p>
      <strong>Normalization and Transformation:</strong> Geographic data were standardized using latitude and longitude coordinates. Time variables were converted into categorical variables (e.g., morning, afternoon, evening).
    </p>
    <p>
      <strong>Feature Engineering:</strong> New features included categorizing areas with high drug-related crime frequencies and creating indicators for high-crime zones.
    </p>
  </section>
);

// Analytical Approach Component
const AnalyticalApproach = () => (
  <section>
    <h2>3.4 Analytical Approach</h2>
    <h3>Overview of Analytical Techniques</h3>
    <p>
      The study utilizes a combination of spatial analysis, time series analysis, and machine learning to examine crime patterns and predict drug-related offenses.
    </p>
    <h3>Statistical Analysis</h3>
    <p>
      A regression analysis was performed to identify significant predictors of drug-related crimes, including demographic factors, time of day, and proximity to specific locations like bars and nightclubs.
    </p>
    <h3>Machine Learning Models</h3>
    <p>
      A <strong>Random Forest Classifier</strong> was chosen for its robustness in handling large datasets and modeling complex relationships between variables. 
    </p>
    <p>
      <strong>Model Training and Testing:</strong> The dataset was divided into training (80%) and testing (20%) sets, with cross-validation employed to ensure model generalizability.
    </p>
    <h3>Spatial and Temporal Analysis</h3>
    <p>
      Spatial analysis was conducted using GIS tools to visualize crime hotspots, while time series analysis identified seasonal trends and patterns in drug-related crimes.
    </p>
  </section>
);

// Ethical Considerations Component
const EthicalConsiderations = () => (
  <section>
    <h2>3.5 Ethical Considerations</h2>
    <h3>Data Privacy and Confidentiality</h3>
    <p>
      Although the dataset is publicly available, personal identifiers were anonymized to protect privacy. Data was stored securely and accessed only by authorized personnel.
    </p>
    <h3>Bias and Fairness</h3>
    <p>
      Measures were taken to minimize bias, ensuring that the model did not disproportionately target specific neighborhoods or demographic groups.
    </p>
    <h3>Compliance with Ethical Guidelines</h3>
    <p>
      The study adheres to ethical guidelines set by the university and follows best practices for research involving secondary data.
    </p>
  </section>
);

// Limitations of the Methodology Component
const LimitationsOfMethodology = () => (
  <section>
    <h2>3.6 Limitations of the Methodology</h2>
    <h3>Data Limitations</h3>
    <p>
      The dataset includes only reported crimes, which may result in underreporting biases, particularly for minor offenses.
    </p>
    <h3>Model Limitations</h3>
    <p>
      While the random forest model is effective for prediction, its complexity makes it less interpretable than simpler models, which may impact real-world implementation.
    </p>
    <h3>Generalizability</h3>
    <p>
      The model is based on data from Boston, which may limit its applicability to other cities with different crime dynamics and demographic characteristics.
    </p>
    <h3>Scalability</h3>
    <p>
      Scaling the model for real-time predictions would require integrating streaming data sources, which was beyond the scope of this study.
    </p>
  </section>
);

// Methodology Component
const Methodology = () => (
  <div>
    <h1>Methodology</h1>
    <ResearchDesign />
    <DataSources />
    <DataCollectionMethods />
    <AnalyticalApproach />
    <EthicalConsiderations />
    <LimitationsOfMethodology />
  </div>
);

export default Methodology;

