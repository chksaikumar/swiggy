import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
const Footer = () => {
  return <div className="FooterBody"></div>;
};

let APP = () => (
  <>
    <Header />
    <Outlet />
  </>
);

// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<APP />);
export default APP;
