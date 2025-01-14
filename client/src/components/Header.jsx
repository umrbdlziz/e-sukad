import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ isAdmin, setIsAdmin }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleAdminClick = () => {
    if (isAdmin) {
      // If already logged in, clicking the admin icon should log out
      setIsAdmin(false);
    } else {
      // Show login popup if not logged in
      setShowLoginPopup(true);
    }
  };

  const handleLogin = () => {
    // Replace this with your actual admin credentials check
    const validUsername = "admin";
    const validPassword = "password";

    if (
      credentials.username === validUsername &&
      credentials.password === validPassword
    ) {
      setIsAdmin(true);
      localStorage.setItem("admin", "true");
      setShowLoginPopup(false);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("admin");
  };

  return (
    <header className="border-b-2 border-purple-700 relative">
      <div className="flex flex-row justify-between items-center px-5 h-20 max-w-9xl mx-auto w-full">
        <div className="flex justify-center items-center gap-6 text-2xl font-bold">
          <img src="usm-esport.png" className="w-[50px] h-[50px]" alt="Logo" />
          <h1>{isAdmin ? "Welcome, Admin" : "Welcome, Public"}</h1>
        </div>
        <div className="flex flex-row gap-3">
          <img
            src="user.png"
            className="w-[25px] h-[25px] cursor-pointer"
            onClick={handleAdminClick}
            alt="User"
          />
          {isAdmin && (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          style={{ zIndex: 9999 }}
        >
          <div
            className="bg-white p-5 rounded shadow-lg w-[400px]"
            style={{ zIndex: 10000 }}
          >
            <h2 className="text-lg font-bold mb-4">Admin Login</h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="border rounded w-full py-2 px-3"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowLoginPopup(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  setIsAdmin: PropTypes.func.isRequired,
};

export default Header;
