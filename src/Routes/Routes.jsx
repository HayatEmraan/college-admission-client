import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Security/SignIn";
import SignUp from "../Security/SignUp";
import Client from "../LayOut/Client";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "colleges",
        element: <SignIn />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  // 404 page
  {
    path: "*",
    element: <NotFound/>
  }
]);
