import { LOGO, CART } from "./public/public";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Hooks/online";

const Header = () => {
  const onlinestatus = useOnlineStatus();
  const [btnVal, setbtnVal] = useState("Login");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50  ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <img src={LOGO} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-gray-700 font-medium">
            <li className="flex items-center space-x-2">
              <span className="text-lg">
                {onlinestatus === true ? "🟢" : "🔴"}
              </span>
              <span className="hidden sm:inline">Online Status</span>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                Grocery
              </Link>
            </li>
            <li>
              <a href="#" className="relative">
                <img src={CART} alt="Cart" className="h-8 w-8 object-contain" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  3
                </span>
              </a>
            </li>
          </ul>
          {/* Login/Logout Button */}
          <button
            onClick={() => {
              btnVal === "Login" ? setbtnVal("Logout") : setbtnVal("Login");
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            {btnVal}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
