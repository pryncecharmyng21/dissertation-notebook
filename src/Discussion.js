import React from 'react';

// Summary of Findings Component
const SummaryOfFindings = () => (
  <section>
    <h2>5.1 Summary of Findings</h2>
    <p>
      This study sought to answer the following key research questions:
      (1) What are the trends in drug-related crimes over the past decade?
      (2) Can these crimes be effectively predicted using a machine learning model based on temporal, spatial, and demographic data?
    </p>
    <p>
      The analysis revealed a significant decline in drug-related crimes since 2019, coinciding with targeted policing initiatives.
      The predictive model demonstrated high accuracy in forecasting crime patterns, with features like proximity to public transport, time of day, and neighborhood socioeconomic status being the strongest predictors.
    </p>
    <p>
      These findings align with the objective of developing a data-driven predictive model for urban crime, providing actionable insights for law enforcement agencies.
    </p>
  </section>
);

// Comparison with Previous Studies Component
const ComparisonWithPreviousStudies = () => (
  <section>
    <h2>5.2 Comparison with Previous Studies</h2>
    <h3>Support for Existing Theories</h3>
    <p>
      The significant role of socioeconomic status in predicting crime aligns with established criminology theories that link economic deprivation to higher crime rates (Smith et al., 2020). Similar to findings by Johnson and Baker (2019), our analysis confirms that late-night hours are particularly predictive of drug-related crimes.
    </p>
    <h3>Contradictions and Differences</h3>
    <p>
      Contrary to prior studies that emphasize residential instability as a key crime predictor (Robinson, 2018), our model found that neighborhood proximity to public transport had a stronger influence. This divergence may be due to recent urban development trends that have reshaped local crime dynamics.
    </p>
    <h3>Contribution to Literature</h3>
    <p>
      While prior studies have explored crime prediction using demographic factors, this study contributes new insights by integrating spatial and temporal variables into a comprehensive predictive model, offering a more holistic approach to urban crime prevention.
    </p>
  </section>
);

// Implications of Findings Component
const ImplicationsOfFindings = () => (
  <section>
    <h2>5.3 Implications of Findings</h2>
    <h3>Theoretical Implications</h3>
    <p>
      The results suggest that traditional crime theories emphasizing socioeconomic factors need to be revisited in the context of modern urban environments, where spatial dynamics play an increasingly significant role. Our findings highlight the importance of integrating spatial analysis into predictive models, suggesting a shift towards more nuanced frameworks for understanding crime patterns.
    </p>
    <h3>Practical Implications</h3>
    <p>
      The predictive model developed in this study offers practical tools for law enforcement agencies to anticipate and mitigate drug-related crimes. By identifying high-risk times and locations, police can optimize resource allocation, focusing patrols and interventions where they are most needed. Additionally, policymakers could use these insights to design targeted community programs aimed at addressing the root causes of crime in specific neighborhoods.
    </p>
    <h3>Policy Recommendations</h3>
    <p>
      Our analysis suggests that urban planning initiatives should prioritize enhancing safety in areas near public transport hubs, which emerged as significant crime hotspots. Additionally, social programs targeting economic upliftment in high-crime neighborhoods could complement policing efforts in reducing crime rates.
    </p>
  </section>
);

// Limitations Component
const Limitations = () => (
  <section>
    <h2>5.4 Limitations</h2>
    <h3>Data Limitations</h3>
    <p>
      One limitation of this study is the reliance on a single city's crime data, which may limit the generalizability of the model to other regions. Additionally, missing or incomplete records, especially for demographic information, could introduce biases into the predictive model.
    </p>
    <h3>Methodological Limitations</h3>
    <p>
      While the random forest algorithm was effective in predicting crime, its interpretability is limited compared to simpler models. Future studies could explore more transparent algorithms or hybrid models that balance accuracy with interpretability. Furthermore, the model's predictive power may decline in rapidly changing environments where crime dynamics shift frequently.
    </p>
    <h3>Model Generalizability</h3>
    <p>
      The model was trained on data from Boston, a city with unique demographic and spatial characteristics. Applying this model to cities with different urban layouts, socioeconomic distributions, or crime trends may require recalibration or even the development of entirely new models.
    </p>
  </section>
);

// Suggestions for Future Research Component
const SuggestionsForFutureResearch = () => (
  <section>
    <h2>5.5 Suggestions for Future Research</h2>
    <h3>Expanding the Dataset</h3>
    <p>
      Future research could broaden the dataset to include crime data from multiple cities, enabling a comparative analysis that identifies universal versus context-specific crime predictors. Incorporating more recent data would also help test the model’s robustness over time.
    </p>
    <h3>Exploring Alternative Models</h3>
    <p>
      While this study used a random forest model, future research could explore deep learning techniques, which may offer improved accuracy in detecting complex crime patterns. Additionally, investigating ensemble methods that combine multiple models could enhance prediction reliability.
    </p>
    <h3>Longitudinal Studies</h3>
    <p>
      A longitudinal analysis spanning multiple decades could reveal how crime dynamics evolve in response to economic, political, and social changes. Such studies would provide a deeper understanding of the long-term effectiveness of various crime prevention strategies.
    </p>
    <h3>Ethical and Social Considerations</h3>
    <p>
      As predictive models become more prevalent, future research should explore the ethical implications of their use, particularly regarding potential biases against marginalized communities. Evaluating the social consequences of deploying such models in policing could guide the development of fairer, more equitable systems.
    </p>
  </section>
);

// Discussion Component
const Discussion = () => (
  <div>
    <h1>Discussion</h1>
    <SummaryOfFindings />
    <ComparisonWithPreviousStudies />
    <ImplicationsOfFindings />
    <Limitations />
    <SuggestionsForFutureResearch />
  </div>
);

export default Discussion;

