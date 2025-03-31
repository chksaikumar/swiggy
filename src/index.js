import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About";
import APP from "./App";
import Error from "./components/Error";
import Contact from "./components/ContactUs";
import Body from "./components/Body";
import Menu from "./components/Menu";
// import Grocery from '/components/Grocery'
// import reportWebVitals from "./reportWebVitals";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"));
const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <APP />,

    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resid",
        element: <Menu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading sit tight......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);

// reportWebVitals();
