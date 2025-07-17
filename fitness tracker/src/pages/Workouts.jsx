import React, { useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Running', duration: 30, calories: 300 },
    { id: 2, name: 'Cycling', duration: 45, calories: 400 },
    { id: 3, name: 'Yoga', duration: 60, calories: 200 },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">💪 Your Workouts</h1>
      {workouts.length === 0 ? (
        <p className="text-gray-600">No workouts added yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left">Workout</th>
              <th className="border px-4 py-2 text-left">Duration (min)</th>
              <th className="border px-4 py-2 text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{workout.name}</td>
                <td className="border px-4 py-2">{workout.duration}</td>
                <td className="border px-4 py-2">{workout.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Workouts;