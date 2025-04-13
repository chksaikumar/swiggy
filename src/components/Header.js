import { LOGO, CART } from "./public/public";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Hooks/online";
import UserContext from "./utils/context/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const onlinestatus = useOnlineStatus();
  const [btnVal, setbtnVal] = useState("Login");

  const { user } = useContext(UserContext);

  const cartdata = useSelector((store) => store.cart.items);
  // console.log(cartdata);
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
              <Link to="/cart" className="relative">
                <img src={CART} alt="Cart" className="h-8 w-8 object-contain" />
                <span
                  className={`absolute top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1 transition-all duration-300 ease-out transform
      ${cartdata.length > 0 ? "opacity-100 scale-100" : "opacity-0 scale-0"}
    `}
                >
                  {cartdata.length}
                </span>
              </Link>
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
          <h1>{user}</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
