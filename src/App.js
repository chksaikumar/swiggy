import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./components/utils/context/UserContext";

import { Provider } from "react-redux";
import appstore from "./Redux/AppStore";
const Footer = () => {
  return <div className="FooterBody"></div>;
};

let APP = () => {
  const [loggedinuser, setloggedinuser] = useState();

  useEffect(() => {
    const Data = {
      Name: "sai",
    };
    setloggedinuser(Data.Name);
  }, []);

  return (
    <>
      <Provider store={appstore}>
        <UserContext.Provider value={{ user: loggedinuser, setloggedinuser }}>
          <Header />

          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<APP />);
export default APP;
