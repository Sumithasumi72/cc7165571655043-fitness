import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">🏠 Welcome to Fitness Tracker</h1>
      <p className="text-gray-700 mb-6">
        Track your workouts, monitor progress, and stay fit!
      </p>
      <div className="space-x-4">
        <Link
          to="/workouts"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Workouts
        </Link>
        <Link
          to="/profile"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Go to Profile
        </Link>
      </div>
    </div>
  );
}

export default Home;