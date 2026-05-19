import { Link } from 'react-router-dom'

export default function Navbar() {
  const token = localStorage.getItem('token')

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          LaunchPad
        </Link>
        <div className="flex items-center gap-4">
          {token ? (
            <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600 font-medium">
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 font-medium">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
