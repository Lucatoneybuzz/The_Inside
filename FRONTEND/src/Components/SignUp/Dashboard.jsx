import React from 'react';

const Dashboard = () => {
  // Assuming user data is available, including the user's avatar URL
  const userData = {
    name: 'John Doe',
    avatarUrl: 'path_to_avatar.jpg',
    // Other user data...
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <div className="flex items-center justify-center mb-4">
          <img src={userData.avatarUrl} alt="User Avatar" className="h-20 w-20 rounded-full" />
        </div>
        <div className="text-center text-xl font-semibold">{userData.name}</div>
        <div className="mt-6">
          <ul>
            <li className="py-2 px-4 bg-gray-700 hover:bg-gray-600"><a href="#" className="block">Exclusive Content 1</a></li>
            <li className="py-2 px-4 bg-gray-700 hover:bg-gray-600"><a href="#" className="block">Exclusive Content 2</a></li>
            <li className="py-2 px-4 bg-gray-700 hover:bg-gray-600"><a href="#" className="block">Exclusive Content 3</a></li>
            {/* Add more exclusive content links */}
          </ul>
        </div>
      </div>
      <div className="w-3/4 p-8 bg-gray-100">
        {/* Main content area */}
        <h1 className="text-3xl font-semibold mb-4">Welcome, {userData.name}!</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">You</span> uploaded a new project.
            </li>
            <li className="mb-2">
              <span className="font-semibold">You</span> commented on a post.
            </li>
            {/* Add more recent activities */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
