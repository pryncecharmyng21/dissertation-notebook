import React from 'react';

// Background and Context Component
const BackgroundAndContext = () => (
  <section>
    <h2>1.1 Background and Context</h2>
    <p>
      Start by giving a wide-angle view of the area you're researching. For example, if your dissertation focuses on crime analysis, you might begin by discussing the overall importance of crime data in shaping public policy, urban planning, and community safety. You could mention how law enforcement agencies rely on accurate crime data to allocate resources effectively and how predictive models are increasingly being used in policing to anticipate where and when crimes are most likely to occur.
    </p>
    <p>
      Provide a brief history or global context. If your focus is on crime trends in a specific city like Boston, you might discuss how crime rates have evolved over the years in similar urban areas and how different cities have adopted technology-driven approaches to combat crime. You could also touch on the global shift towards using data analytics and machine learning in public administration.
    </p>
    <p>
      After providing a broad overview, gradually narrow down your focus to the specific area of your study. For instance, if your dissertation examines drug-related crimes, you could discuss how these types of crimes have been particularly challenging for law enforcement and why traditional methods have been insufficient. Explain the gap in the existing approaches that your study seeks to address.
    </p>
  </section>
);

// Problem Statement Component
const ProblemStatement = () => (
  <section>
    <h2>1.2 Problem Statement</h2>
    <p>
      Define the problem clearly. For instance, you might define the problem as, “Despite the advancements in crime data analysis, predicting and preventing drug-related crimes remains a significant challenge due to the complex and often hidden nature of such offenses.” This provides a clear starting point for your research and indicates that there is a gap in current knowledge or practice.
    </p>
    <p>
      Justify why this problem is significant. This might involve discussing the impact of drug-related crimes on public safety, healthcare costs, and community well-being. For example, you could state that, “Drug-related crimes not only pose direct threats to public safety but also contribute to long-term societal issues, including health crises, family breakdowns, and economic instability.”
    </p>
    <p>
      Explain how previous research has attempted to address this problem but has fallen short. Perhaps existing models are too simplistic, fail to account for certain variables, or are not easily adaptable to changing crime patterns.
    </p>
  </section>
);

// Research Questions Component
const ResearchQuestions = () => (
  <section>
    <h2>1.3 Research Questions</h2>
    <p>
      The primary research question should be broad yet specific enough to guide your study. For instance, “How have drug-related crime trends evolved over the past decade in Boston, and what predictive factors can be identified using data analytics?”
    </p>
    <p>
      Break down the primary question into specific sub-questions. Examples might include:
      <ul>
        <li>“What are the most common types of drug-related crimes in Boston?”</li>
        <li>“What time of day and locations are these crimes most likely to occur?”</li>
        <li>“Can a machine learning model accurately predict hotspots for drug-related crimes based on historical data?”</li>
      </ul>
    </p>
  </section>
);

// Aims and Objectives Component
const AimsAndObjectives = () => (
  <section>
    <h2>1.4 Aims and Objectives</h2>
    <p>
      Clearly articulate the broad aim of your dissertation. For example, “This dissertation aims to develop and validate a predictive model for drug-related crimes in Boston, using historical crime data and advanced data analysis techniques.”
    </p>
    <p>
      Break down the aim into concrete objectives, each contributing to the overall goal:
      <ul>
        <li>To analyze historical data on drug-related crimes in Boston from 2010 to 2023.</li>
        <li>To identify key patterns and trends in drug-related crimes based on location, time, and type.</li>
        <li>To design a machine learning model that can predict future occurrences of such crimes.</li>
        <li>To evaluate the model’s performance using accuracy metrics like precision, recall, and F1-score.</li>
      </ul>
    </p>
  </section>
);

// Significance of the Study Component
const SignificanceOfTheStudy = () => (
  <section>
    <h2>1.5 Significance of the Study</h2>
    <p>
      Discuss how your research will fill gaps in the existing literature. For example, you might state, “While many studies have explored predictive policing, few have specifically focused on drug-related crimes in urban settings, particularly in Boston. This research will contribute to a more nuanced understanding of crime dynamics in this context.”
    </p>
    <p>
      Highlight the real-world applications of your research. You could argue that, “The findings of this study could be instrumental in helping law enforcement agencies allocate resources more effectively and in developing targeted interventions for crime prevention in high-risk areas.”
    </p>
    <p>
      If relevant, discuss how your research could inform public policy. For instance, “The predictive model developed in this research could guide policymakers in designing data-driven approaches to tackling drug-related crime.”
    </p>
  </section>
);

// Structure of the Dissertation Component
const StructureOfTheDissertation = () => (
  <section>
    <h2>1.6 Structure of the Dissertation</h2>
    <p>
      Provide an overview of the dissertation structure. This gives readers a clear roadmap of what to expect in the following chapters:
      <ul>
        <li><strong>Chapter 1: Introduction</strong> - Introduces the research topic, background, problem statement, research questions, aims, and significance of the study.</li>
        <li><strong>Chapter 2: Literature Review</strong> - Reviews existing research and theories relevant to crime analysis, predictive policing, and data analytics, identifying gaps that this study addresses.</li>
        <li><strong>Chapter 3: Methodology</strong> - Explains the research design, data sources, data collection methods, analytical techniques, and ethical considerations.</li>
        <li><strong>Chapter 4: Results</strong> - Presents the findings of the data analysis, including statistical results and visualizations.</li>
        <li><strong>Chapter 5: Discussion</strong> - Interprets the results, comparing them with existing research and discussing the implications.</li>
        <li><strong>Chapter 6: Conclusion</strong> - Summarizes the key findings, discusses the study’s limitations, and offers recommendations for future research.</li>
        <li><strong>Appendices</strong> - Includes supplementary materials such as datasets, code, and additional visualizations.</li>
      </ul>
    </p>
  </section>
);

// Introduction Component
const Introduction = () => (
  <div>
    <h1>Introduction</h1>
    <BackgroundAndContext />
    <ProblemStatement />
    <ResearchQuestions />
    <AimsAndObjectives />
    <SignificanceOfTheStudy />
    <StructureOfTheDissertation />
  </div>
);

export default Introduction;

