import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-64 h-screen">
      <div className="py-5 border-b-2 border-purple-800 flex justify-center">
        <img src="usm-esport.png" className="w-[140px] h-[140px]" />
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li className="border-b border-purple-800 text-center pb-4">
            <button
              className={`w-full px-4 py-2 text-xl hover:text-orange-800 text-orange-500 ${
                currentPath === "/" && "font-extrabold"
              }`}
              onClick={() => navigate("/")}
            >
              Dashboard
            </button>
          </li>
          <li className="border-b border-purple-800 text-center pb-4">
            <button
              className={`w-full px-4 py-2 text-xl hover:text-orange-800 text-orange-500 ${
                currentPath === "/schedule" && "font-extrabold"
              }`}
              onClick={() => navigate("/schedule")}
            >
              Schedule
            </button>
          </li>
          <li className="border-b border-purple-800 text-center pb-4">
            <button
              className={`w-full px-4 py-2 text-xl hover:text-orange-800 text-orange-500  ${
                currentPath === "/result" && "font-extrabold"
              }`}
              onClick={() => navigate("/result")}
            >
              Result
            </button>
          </li>
          <li className="border-b border-purple-800 text-center pb-4">
            <button
              className={`w-full px-4 py-2 text-xl hover:text-orange-800 text-orange-500 ${
                currentPath === "/teams" && "font-extrabold"
              }`}
              onClick={() => navigate("/teams")}
            >
              Teams/Players
            </button>
          </li>
          <li className="border-b border-purple-800 text-center pb-4">
            <button
              className={`w-full px-4 py-2 text-xl hover:text-orange-800 text-orange-500 ${
                currentPath === "/aboutus" && "font-extrabold"
              }`}
              onClick={() => navigate("/aboutus")}
            >
              About Us
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
