import { useState } from "react";
import supabase from "../utils/supabase";
import PropTypes from "prop-types";
import bcrypt from "bcryptjs"; // Install with npm install bcryptjs'
import Cookies from "js-cookie";

const Header = ({ isAdmin, setIsAdmin }) => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isRegistering, setIsRegistering] = useState(false); // Toggle for Register/Login
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message for registration

  const handleAdminClick = () => {
    if (isAdmin) {
      handleLogout();
    } else {
      setShowLoginPopup(true);
    }
  };

  const handleLogin = async () => {
    try {
      const { data: admin, error } = await supabase
        .from("admins")
        .select("*")
        .eq("username", credentials.username)
        .single();

      if (error || !admin) {
        setError("Invalid username or password");
        return;
      }

      const isValid = await bcrypt.compare(
        credentials.password,
        admin.password
      );

      if (isValid) {
        setIsAdmin(true);
        const expires = new Date(new Date().getTime() + 10 * 1000);
        Cookies.set("isAdmin", "true", { expires });
        console.log(Cookies.get("isAdmin"));
        setShowLoginPopup(false);
        setError("");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("Something went wrong");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    Cookies.remove("isAdmin");
  };

  const handleRegister = async () => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(
        credentials.password,
        saltRounds
      );

      const { data, error } = await supabase
        .from("admins")
        .insert([{ username: credentials.username, password: hashedPassword }]);

      if (error) {
        setError("Username already exists or invalid input");
        return;
      }

      setSuccess("Admin registered successfully!");
      setIsRegistering(false); // Switch back to login after successful registration
      setCredentials({ username: "", password: "" });
      setError("");
    } catch (err) {
      console.error("Error registering admin:", err.message);
      setError("Something went wrong");
    }
  };

  return (
    <header className="border-b-2 border-purple-700 relative">
      <div className="flex flex-row justify-between items-center px-5 h-20 max-w-7xl mx-auto w-full">
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

      {/* Login/Register Popup */}
      {showLoginPopup && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
          style={{ zIndex: 9999 }}
        >
          <div
            className="bg-white p-5 rounded shadow-lg w-[400px]"
            style={{ zIndex: 10000 }}
          >
            <h2 className="text-lg font-bold mb-4">
              {isRegistering ? "Register Admin" : "Admin Login"}
            </h2>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}
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
              {/* <button
                className="text-blue-500 underline"
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setError("");
                  setSuccess("");
                }}
              >
                {isRegistering ? "Switch to Login" : "Switch to Register"}
              </button> */}
              <div>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setShowLoginPopup(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={isRegistering ? handleRegister : handleLogin}
                >
                  {isRegistering ? "Register" : "Login"}
                </button>
              </div>
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
