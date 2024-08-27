import React from 'react';

// Restate the Research Problem and Objectives Component
const ResearchProblemAndObjectives = () => (
  <section>
    <h2>6.1 Restate the Research Problem and Objectives</h2>
    <h3>Restate the Research Problem</h3>
    <p>
      This dissertation aimed to address the growing need for effective predictive tools in crime analysis, focusing on drug-related crimes in urban environments. Specifically, the research sought to identify the most significant predictors of crime and develop a model that could be applied by law enforcement agencies to enhance public safety.
    </p>
    <h3>Recap the Research Objectives</h3>
    <p>
      The primary objectives of this research were (1) to analyze trends in crime data over the past decade, (2) to develop and validate a predictive model for drug-related crimes, and (3) to provide actionable insights that could inform crime prevention strategies in urban settings.
    </p>
  </section>
);

// Summary of Findings Component
const SummaryOfFindings = () => (
  <section>
    <h2>6.2 Summary of Findings</h2>
    <h3>Recap Key Findings</h3>
    <p>
      The analysis revealed several critical trends in crime data, including a noticeable decline in drug-related incidents in certain neighborhoods, which coincided with targeted policing efforts. The predictive model developed in this study demonstrated high accuracy, with factors such as time of day, proximity to public transport, and socioeconomic conditions emerging as the most significant predictors.
    </p>
    <h3>Link Findings to Research Questions</h3>
    <p>
      The study successfully answered the research questions by identifying both temporal and spatial patterns in crime data and validating a machine learning model capable of predicting drug-related crimes with a high degree of accuracy. These findings provide a robust foundation for data-driven crime prevention strategies.
    </p>
  </section>
);

// Implications for Practice Component
const ImplicationsForPractice = () => (
  <section>
    <h2>6.3 Implications for Practice</h2>
    <h3>Practical Applications</h3>
    <p>
      The predictive model developed in this study offers practical tools for law enforcement agencies, enabling more efficient allocation of resources by focusing efforts on high-risk areas and times. By providing early warnings of potential crime spikes, the model can support proactive policing strategies and reduce response times. Additionally, urban planners and policymakers can use the insights from this research to design safer neighborhoods, focusing on key risk factors identified in the analysis.
    </p>
    <h3>Broader Impact</h3>
    <p>
      Beyond immediate crime prevention, this research contributes to broader policy discussions on data-driven governance and public safety. The model’s success in predicting drug-related crimes highlights the potential of machine learning in transforming traditional approaches to urban planning and public security.
    </p>
    <h3>Recommendations for Implementation</h3>
    <p>
      For successful implementation, law enforcement agencies should consider integrating the predictive model into their existing crime management systems, complemented by regular updates to ensure that the model remains accurate as crime patterns evolve. Collaboration between data scientists, urban planners, and community stakeholders will be essential in translating these predictive insights into effective crime prevention strategies.
    </p>
  </section>
);

// Final Thoughts Component
const FinalThoughts = () => (
  <section>
    <h2>6.4 Final Thoughts</h2>
    <h3>Reflect on the Research Journey</h3>
    <p>
      This study represents a significant step towards integrating advanced data analysis techniques into crime prevention strategies. By combining criminological theory with modern predictive modeling, this research bridges the gap between academic inquiry and practical application, offering innovative solutions to one of the most pressing challenges facing urban communities today.
    </p>
    <h3>Highlight the Contribution to Knowledge</h3>
    <p>
      This dissertation contributes to the growing body of literature on predictive policing by introducing a novel approach that combines spatial, temporal, and socioeconomic factors. The findings not only deepen our understanding of crime dynamics but also provide a replicable framework for applying predictive models in various urban contexts.
    </p>
    <h3>Consider the Future of the Field</h3>
    <p>
      As cities continue to grow and evolve, the need for data-driven approaches to public safety will become increasingly critical. Future research should explore the integration of additional data sources, such as social media and IoT devices, to enhance predictive capabilities. Ultimately, the adoption of such models will be crucial in creating safer, smarter, and more resilient urban environments.
    </p>
  </section>
);

// Conclusion Component
const Conclusion = () => (
  <div>
    <h1>Conclusion</h1>
    <ResearchProblemAndObjectives />
    <SummaryOfFindings />
    <ImplicationsForPractice />
    <FinalThoughts />
  </div>
);

export default Conclusion;

