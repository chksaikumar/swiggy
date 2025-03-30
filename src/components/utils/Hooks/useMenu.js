import { MENUURL } from "../../public/public";

import { useState, useEffect } from "react";
const useMenu = (resid) => {
  const [menuitems, setmenuitems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENUURL + resid);
    const jsondata = await data.json();
    setmenuitems(jsondata.data);
  };
  return menuitems;
};

export default useMenu;
