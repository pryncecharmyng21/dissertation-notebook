// src/components/DataAnalysis.js
import React from 'react';
import './DataAnalysis.css';

const DataAnalysis = () => {
  return (
    <div className="data-analysis">
      <h1>Chapter 3: Data Analysis and Visualization</h1>

      <h2>Data Analysis</h2>
      <p>
        **Data Loading and Preprocessing:** The Python code provided covers the essential steps of loading and preprocessing the crime data. This includes reading the dataset from the CSV file, handling missing values, and performing data normalization. The preprocessing ensures that the data is in a clean and usable format for subsequent analyses.
      </p>
      <p>
        **Analytical Techniques:** Various analytical techniques are employed to uncover insights from the data. These include statistical analysis to identify trends and patterns, correlation analysis to understand relationships between different variables, and exploratory data analysis (EDA) to generate initial insights and hypotheses.
      </p>

      <h2>Visualizations</h2>
      <p>
        **Libraries Used:** Detailed visualizations are generated using Python libraries such as Matplotlib and Seaborn. These visualizations help in understanding the distribution of crime data, identifying trends over time, and comparing different crime categories.
      </p>
      <p>
        **Types of Visualizations:** Common visualizations include histograms for crime frequency, line plots for temporal trends, scatter plots for correlation analysis, and heatmaps for spatial distribution. These visualizations are crucial for interpreting the data and communicating insights effectively.
      </p>

      <h2>Integration with APIs</h2>
      <p>
        **API Interaction:** The Python analysis scripts are modified to interact with the Node.js API for retrieving data. This integration allows for real-time data retrieval and analysis, enabling the application to present up-to-date crime statistics and insights.
      </p>
      <p>
        **Data Retrieval:** The scripts use HTTP requests to fetch data from the Node.js API endpoints. The retrieved data is then processed and analyzed using the same techniques described earlier. This integration ensures that the analysis remains relevant and reflects the most current data available.
      </p>
    </div>
  );
};

export default DataAnalysis;

