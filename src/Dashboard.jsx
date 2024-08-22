import React from 'react';

const Dashboard = ({ patients }) => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Patient Management Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Code</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Volunteer Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{patient.name}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{patient.code}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{patient.volunteer.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
