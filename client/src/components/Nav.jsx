import { useNavigate, useLocation } from "react-router-dom";
import { navData } from "../constants";
import { useState } from "react";

const NavItems = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <ul className="px-4 w-full">
      {navData.map(({ id, name, href }) => (
        <li key={id} className="py-4">
          <button
            className={`py-2 sm:hover:text-purple-500 text-orange-500 ${
              currentPath === href && "font-extrabold"
            }`}
            onClick={() => {
              navigate(href);
              setIsOpen(false);
            }}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="border-r-2 border-purple-400">
      <button
        onClick={toggleMenu}
        className={`sm:hidden flex p-4 ${
          !isOpen && "border-b border-purple-800 w-full"
        }`}
        aria-label="Toggle menu"
      >
        <img
          src={isOpen ? "close.png" : "hamburger.png"}
          alt="toggle"
          className="w-6 h-6"
        />
      </button>

      <nav className="sm:flex hidden w-52 h-[calc(100vh-82px)] ">
        <NavItems setIsOpen={setIsOpen} />
      </nav>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5 rounded-b-3xl">
          <NavItems setIsOpen={setIsOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
