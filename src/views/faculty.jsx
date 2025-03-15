import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import axios from 'axios';

function Faculty() {
  const [facultyData, setFacultyData] = useState([]); // State to store backend data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/faculty');
        console.log("API Response:", response.data);
        setFacultyData(response.data); // Store faculty data from the backend in facultyData
      } catch (err) {
        setError("Unable to Load at the moment");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2>Faculty</h2>
      <p>Faculty Information Goes Here</p>
      <Footer />
    </div>
  );
}
export default Faculty;
