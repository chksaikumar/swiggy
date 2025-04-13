import User from "./user";
import UserClass from "./classuser";

import { useState, useContext } from "react";

import UserContext from "./utils/context/UserContext";

const About = () => {
  const { user, setloggedinuser } = useContext(UserContext);

  console.log(user);
  return (
    <div>
      <label>Name : </label>
      <input
        value={user}
        className="border p-2 m-4"
        onChange={(e) => setloggedinuser(e.target.value)}
      ></input>
      <h1>Hello from the About us Component </h1>
      <User />
      <UserClass />
    </div>
  );
};

export default About;
