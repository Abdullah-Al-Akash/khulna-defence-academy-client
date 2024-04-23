import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import MyProfileComponent from "../Components/MyProfileComponent/MyProfileComponent";
import OnlineTest from "../Components/OnlineTest/OnlineTest";
import Forget from "../Pages/Login/Forget";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeComponent></HomeComponent>,
      },
      {
        path: "/about",
        element: <AboutComponent></AboutComponent>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/forget",
        element: <Forget></Forget>,
      },
      {
        path: "/profile",
        element: <MyProfileComponent></MyProfileComponent>,
      },
      {
        path: "/test",
        element: <OnlineTest></OnlineTest>,
      },
    ],
  },
]);
