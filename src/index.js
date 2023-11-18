import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { path } from "./components/constants/constant";
import MyProfile from "./pages/MyProfile";

const myRoutes = createBrowserRouter([
  {
    path: path.home,
    element: <Login />,
  },
  {
    path: path.signup,
    element: <SignUp />,
  },
  {
    path: path.myProfile,
    element: <MyProfile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
