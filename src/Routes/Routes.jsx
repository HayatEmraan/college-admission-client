import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Security/SignIn";
import SignUp from "../Security/SignUp";
import Client from "../LayOut/Client";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import NotFound from "../Pages/NotFound/NotFound";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import Details from "../Pages/Details/Details";
import Profile from "../Pages/Profile/Profile";
import Private from "./Private";
import MyCollege from "../Pages/MyCollege/MyCollege";
import Submission from "../Pages/Admission/Submission";

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
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission/:id",
        element: (
          <Private>
            <Submission />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://college-admission-server-ten.vercel.app/colleges/${params.id}`
          ),
      },
      {
        path: "my-college",
        element: (
          <Private>
            <MyCollege />
          </Private>
        ),
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "profile",
        element: (
          <Private>
            <Profile />
          </Private>
        ),
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://college-admission-server-ten.vercel.app/colleges/${params.id}`
          ),
      },
    ],
  },
  // 404 page
  {
    path: "*",
    element: <NotFound />,
  },
]);
