import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <h1 className="text-white text-xl font-bold">SYN</h1>
      <Link to="/camera">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Try the Camera
        </button>
      </Link>
    </header>
  );
}
