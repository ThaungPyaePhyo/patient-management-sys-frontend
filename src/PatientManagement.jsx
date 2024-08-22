import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import AddPatient from './AddPatient';

const PatientManagement = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/patients`)
      .then(response => {
        setPatients(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patients!', error);
      });
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <AddPatient fetchPatients={fetchPatients} />
      <Dashboard patients={patients} />
    </div>
  );
};

export default PatientManagement;
