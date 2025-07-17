 src/pages/Profile.jsx
jsx
Copy
Edit
import React from 'react';

function Profile() {
  const user = {
    name: 'John Doe',
    age: 28,
    email: 'john.doe@example.com',
    goal: 'Lose 5kg in 3 months',
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">👤 Your Profile</h1>
      
      <div className="space-y-2">
        <div>
          <span className="font-medium text-gray-700">Name: </span>
          <span>{user.name}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Age: </span>
          <span>{user.age}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Email: </span>
          <span>{user.email}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Goal: </span>
          <span>{user.goal}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;