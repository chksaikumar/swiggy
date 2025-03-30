import { useState } from "react";

const User = () => {
  const [functionincrement, setfunctionincrement] = useState(0);

  const incrementHandeler = () => {
    setfunctionincrement(functionincrement + 1);
  };

  return (
    <div className="functionComponent">
      <h1>User Name : functionUser Name</h1>
      <button onClick={incrementHandeler}>Function trigger</button>
      <h1>{functionincrement}</h1>
    </div>
  );
};

export default User;
