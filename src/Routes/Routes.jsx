import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomeComponent from "../Components/HomeComponent/HomeComponent";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration";
import MyProfileComponent from "../Components/MyProfileComponent/MyProfileComponent";
import Forget from "../Pages/Login/Forget";
import OnlineTest from "../Pages/OnlineTestPage/OnlineTest/OnlineTest";
import OnlineTestPage from "../Pages/OnlineTest/OnlineTestPage";
import QuizTimer from "../Pages/OnlineTestPage/QuizTimer/QuizTimer";
import DashboardHome from "../Components/Dashboarrd/DashboardHome";
import DashboardQuizCard from "../Components/Dashboarrd/DashboardQuizCard";
import AddQuiz from "../Components/Dashboarrd/AddQuiz";
import DashboardUpdateQuizCard from "../Components/Dashboarrd/UpdateQuiz/DashboardUpdateQuizCard";
import UpdateQuiz from "../Components/Dashboarrd/UpdateQuiz/UpdateQuiz";
import DashboardUsers from "../Components/Dashboarrd/DashboardUsers/DashboardUsers";

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
        element: <OnlineTestPage></OnlineTestPage>,
      },
      {
        path: "/onlineTest",
        element: <OnlineTest></OnlineTest>,
      },
      {
        path: "/onlineTest/:id",
        element: <QuizTimer></QuizTimer>,
      },
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/quiz",
        element: <DashboardQuizCard></DashboardQuizCard>,
      },
      {
        path: "/dashboard/update-quiz",
        element: <DashboardUpdateQuizCard></DashboardUpdateQuizCard>,
      },
      {
        path: "/dashboard/package/:quizId",
        element: <AddQuiz></AddQuiz>,
      },
      {
        path: "/dashboard/update-quiz/:quizId",
        element: <UpdateQuiz></UpdateQuiz>,
      },
      {
        path: "/dashboard/users",
        element: <DashboardUsers></DashboardUsers>,
      },
    ],
  },
]);
