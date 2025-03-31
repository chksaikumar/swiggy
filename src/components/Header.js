import { LOGO, CART } from "./public/public";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/Hooks/online";
const Header = () => {
  const onlinestatus = useOnlineStatus();
  const [btnVal, setbtnVal] = useState("Login");

  return (
    <div className="headerbody">
      <div>
        <img src={LOGO} className="logo" alt="img "></img>
      </div>
      <div className="navbar">
        <ul className=" navro">
          <li>Online status : {onlinestatus === true ? "🟢" : "🔴"}</li>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About US</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>
            <a>
              <img
                src={CART}
                style={{ width: "50px", height: "50px" }}
                alt="Img"
              ></img>
            </a>
          </li>
          <button
            onClick={() => {
              btnVal === "Login" ? setbtnVal("Logout") : setbtnVal("Login");
            }}
            className="btn"
          >
            {btnVal}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
