import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import AboutComponent from "../Components/AboutComponent/AboutComponent";

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
    ],
  },
]);
