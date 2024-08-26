// src/components/Methodology.js
import React from 'react';
import './Methodology.css';

const Methodology = () => {
  return (
    <div className="methodology">
      <h1>Chapter 2: Methodology</h1>

      <h2>2.1 Data Acquisition and Preparation</h2>
      <p>
        **Data Source:** The dataset "combined_crime_data.csv" is used for this analysis. This dataset includes a comprehensive collection of crime data, including incident reports, geographical details, and time-stamped entries. The data is sourced from the UK Police API and has been aggregated to provide a broad overview of crime patterns across different regions.
      </p>
      <p>
        **Data Preparation:** Before analysis, the dataset undergoes a series of preprocessing steps to ensure its quality and suitability. These steps include data cleaning (removing duplicates and handling missing values), normalization (standardizing the format of entries), and transformation (converting categorical data into numerical formats). This preparation ensures that the data is accurate and ready for detailed analysis.
      </p>

      <h2>2.2 API Development</h2>
      <p>
        **Node.js Backend:** The backend for the application is developed using Node.js, which serves as a platform for building scalable and efficient APIs. The API endpoints are designed to interact with the "combined_crime_data.csv" dataset, allowing for querying, filtering, and retrieving crime data based on various parameters such as location, date range, and crime type.
      </p>
      <p>
        **Implementation:** The API endpoints are implemented using Express.js, a web application framework for Node.js. The backend includes routes for fetching data, handling search queries, and providing aggregated crime statistics. Middleware is used for error handling and logging, ensuring that the API operates reliably and efficiently.
      </p>

      <h2>2.3 Containerization with Docker</h2>
      <p>
        **Docker Setup:** Docker is used for containerizing the Node.js and Flask services, providing a consistent and isolated environment for deployment. Dockerfiles are created for both services to define the environment setup, including the installation of necessary dependencies and configuration settings.
      </p>
      <p>
        **Dockerfiles:** The Dockerfile for the Node.js service specifies the base image, copies application code into the container, installs dependencies, and sets up the entry point for running the application. Similarly, the Dockerfile for the Flask service includes steps for setting up the Python environment, installing dependencies, and running the Flask application.
      </p>
      <p>
        **Container Orchestration:** Docker Compose is used to manage and orchestrate the containers, defining the services, networks, and volumes required for the application. This setup ensures that the Node.js and Flask services can communicate seamlessly and operate together in a containerized environment.
      </p>
    </div>
  );
};

export default Methodology;

