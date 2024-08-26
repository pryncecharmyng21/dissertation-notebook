// src/CrimeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrimeList = () => {
  const [crimes, setCrimes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCrimeData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/crimes');
      setCrimes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('There was an error fetching the crime data!', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCrimeData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Crime Data</h1>
      <button onClick={fetchCrimeData}>Refresh Data</button>
      <ul>
        {crimes.map(crime => (
          <li key={crime.id}>{crime.category} - {crime.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default CrimeList;

