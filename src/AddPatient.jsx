import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPatient = ({ fetchPatients }) => {
  const [name, setName] = useState('');
  const [volunteerId, setVolunteerId] = useState('');
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/volunteers`)
      .then(response => {
        setVolunteers(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the volunteers!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/patients`, {
      name,
      volunteer_id: volunteerId
    })
    .then(response => {
      alert('Patient added successfully!');
      fetchPatients();
    })
    .catch(error => {
      console.error('There was an error adding the patient!', error);
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Patient</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Patient Name</label>
          <input 
            type="text" 
            id="name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter patient name" 
            required 
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="volunteer" className="block text-sm font-medium text-gray-700">Select Volunteer</label>
          <select 
            id="volunteer"
            value={volunteerId} 
            onChange={(e) => setVolunteerId(e.target.value)} 
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Volunteer</option>
            {volunteers.map((volunteer) => (
              <option key={volunteer.id} value={volunteer.id}>
                {volunteer.name}
              </option>
            ))}
          </select>
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default AddPatient;
