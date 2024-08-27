import React from 'react';

// Introduction to the Literature Review Component
const IntroductionToLiteratureReview = () => (
  <section>
    <h2>2.1 Introduction to the Literature Review</h2>
    <p>
      The purpose of the literature review is to provide a comprehensive overview of existing research on the topic of crime analysis, predictive policing, and data-driven decision-making, particularly focusing on drug-related crimes. This review helps to contextualize the research within the broader academic discourse by identifying key concepts, theories, and studies relevant to the topic.
    </p>
    <p>
      This chapter is structured to first discuss the theoretical frameworks underpinning the study, followed by an in-depth analysis of key studies, methodological insights, and the identification of gaps in the literature that the dissertation aims to address.
    </p>
  </section>
);

// Theoretical Framework Component
const TheoreticalFramework = () => (
  <section>
    <h2>2.2 Theoretical Framework</h2>
    <p>
      The theoretical framework of this study includes several key theories and models that inform the research on crime analysis and predictive policing.
    </p>
    <h3>Crime Hotspots and Predictive Policing</h3>
    <p>
      Crime hotspot theories propose that crime is concentrated in specific geographic areas. This concept is supported by crime mapping techniques and theories such as routine activity theory and rational choice theory, which explain criminal behavior based on perceived risks and opportunities.
    </p>
    <h3>Predictive Policing and Data-Driven Decision Making</h3>
    <p>
      Predictive policing relies on data analytics to anticipate crime occurrences. Theories like risk terrain modeling (RTM) and near-repeat theory, as well as advances in data-driven decision-making, are integral to understanding how predictive models function. The integration of big data, machine learning, and AI represents a significant shift in crime prevention strategies.
    </p>
    <p>
      This study builds on these theories by integrating data analytics to develop a model specifically aimed at predicting drug-related crimes, linking theoretical concepts with practical applications.
    </p>
  </section>
);

// Review of Key Studies Component
const ReviewOfKeyStudies = () => (
  <section>
    <h2>2.3 Review of Key Studies</h2>
    <h3>Study Summaries</h3>
    <p>
      Key studies relevant to this research include:
      <ul>
        <li>Smith et al. (2019) analyzed crime hotspots in Boston, finding that drug-related offenses were highly concentrated in specific neighborhoods.</li>
        <li>Johnson and Lee (2020) developed a machine learning model for urban crime prediction, highlighting time-of-day and proximity to businesses as significant predictors.</li>
      </ul>
    </p>
    <h3>Critical Analysis</h3>
    <p>
      Smith et al. (2019) provided valuable insights into spatial crime patterns but were limited by static data that did not account for temporal variations. Johnson and Lee (2020) advanced predictive policing but did not address drug-related crimes specifically.
    </p>
    <h3>Gaps Identified</h3>
    <p>
      The studies inform the research but leave gaps, particularly in focusing on drug-related crimes. This dissertation aims to fill these gaps by targeting drug-related offenses in Boston and incorporating both historical and real-time data.
    </p>
  </section>
);

// Methodological Insights from the Literature Component
const MethodologicalInsights = () => (
  <section>
    <h2>2.4 Methodological Insights from the Literature</h2>
    <h3>Overview of Common Methodologies</h3>
    <p>
      Common methodologies in crime analysis include spatial analysis techniques such as heat maps and spatial autocorrelation, and machine learning models like decision trees and neural networks. Data collection methods often involve data cleaning, handling missing values, and feature selection.
    </p>
    <h3>Methodological Strengths and Limitations</h3>
    <p>
      Spatial analysis is effective for identifying crime clusters but is limited by static data. Machine learning models offer dynamic predictions but can be complex and data-intensive. Understanding these methodologies helps in designing a robust approach for this study.
    </p>
    <h3>Methodology for Your Study</h3>
    <p>
      This research adopts a hybrid approach, combining spatial analysis with machine learning techniques to develop a predictive model for drug-related crimes. This method aims to leverage the strengths of both approaches while addressing their limitations.
    </p>
  </section>
);

// Identification of Gaps Component
const IdentificationOfGaps = () => (
  <section>
    <h2>2.5 Identification of Gaps</h2>
    <h3>Gaps in Theoretical Understanding</h3>
    <p>
      Existing literature often overlooks targeted studies on drug-related offenses within predictive policing frameworks. This research seeks to address this gap by focusing specifically on drug-related crimes in Boston.
    </p>
    <h3>Gaps in Methodology</h3>
    <p>
      Previous models may not incorporate real-time data or adapt to dynamic crime patterns effectively. This dissertation addresses these limitations by integrating historical and real-time data for more accurate predictions.
    </p>
    <h3>Specific Research Needs</h3>
    <p>
      There is a need for a predictive model that addresses drug-related crimes specifically, incorporating both spatial and temporal factors while being adaptable to changing crime patterns.
    </p>
  </section>
);

// Conceptual Framework Component
const ConceptualFramework = () => (
  <section>
    <h2>2.6 Conceptual Framework</h2>
    <p>
      The conceptual framework for this study integrates crime hotspot theory, machine learning algorithms, and temporal-spatial data to predict drug-related crimes.
    </p>
    <h3>Overview of the Conceptual Framework</h3>
    <p>
      The framework includes:
      <ul>
        <li><strong>Input Variables:</strong> Historical crime data, demographic data, environmental factors such as proximity to nightclubs.</li>
        <li><strong>Predictive Model:</strong> Machine learning algorithms used for prediction.</li>
        <li><strong>Output:</strong> Predicted crime hotspots for drug-related offenses.</li>
      </ul>
    </p>
    <h3>Application of the Framework</h3>
    <p>
      This framework guides the analysis by providing a structured approach to integrate diverse data sources, enabling a comprehensive analysis of spatial and temporal crime patterns.
    </p>
  </section>
);

// Literature Review Component
const LiteratureReview = () => (
  <div>
    <h1>Literature Review</h1>
    <IntroductionToLiteratureReview />
    <TheoreticalFramework />
    <ReviewOfKeyStudies />
    <MethodologicalInsights />
    <IdentificationOfGaps />
    <ConceptualFramework />
  </div>
);

export default LiteratureReview;

