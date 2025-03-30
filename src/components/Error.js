import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Something went wrong {err.status}</h1>
    </>
  );
};

export default Error;
