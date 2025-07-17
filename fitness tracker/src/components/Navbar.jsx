import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded ${
      location.pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-blue-600 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">🏋 Fitness Tracker</h1>
        <div className="space-x-2">
          <Link to="/" className={linkClass('/')}>Home</Link>
          <Link to="/workouts" className={linkClass('/workouts')}>Workouts</Link>
          <Link to="/profile" className={linkClass('/profile')}>Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;