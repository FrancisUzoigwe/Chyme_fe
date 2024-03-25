import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Register from "../pages/auth/Register";
import Signin from "../pages/auth/Signin";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import EmailScreen from "../pages/auth/EmailScreen";
import LoadingPage from "../pages/auth/LoadingPage";
import DashBoard from "../pages/home/DashBoard";
import Send from "../pages/home/Send";
import Pay from "../pages/home/Pay";
import Account from "../pages/home/Account";
import Budget from "../pages/home/Budget";
import Card from "../pages/home/Card";
import ViewProfile from "../pages/home/settings/ViewProfile";
import Security from "../pages/home/settings/Security";
import Statement from "../pages/home/settings/Statement";
import Cards from "../pages/home/settings/Cards";
import Legal from "../pages/home/settings/Legal";
import FAQs from "../pages/home/settings/FAQs";
import EditProfile from "../pages/home/settings/EditProfile";
import SendBank from "../pages/home/SendBank";
import HomeScreen from "../pages/LandingPages/HomeScreen/HomeScreen";
import Sendtousername from "../pages/home/Sendtousername";

export const mainRoute = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/api/:token/verify-account",
    element: <Signin />,
  },
  {
    path: "/email",
    element: <EmailScreen />,
  },
  {
    path: "/load",
    element: <LoadingPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
        {
            index: true,
            element: <HomeScreen/>
        }
    ]
},
  {
    path: "/auth",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "/auth/send",
        element: <Send />,
      },
      {
        path: "/auth/pay",
        element: <Pay />,
      },
      {
        path: "/auth/account",
        element: <Account />,
      },
      {
        path: "/auth/budget",
        element: <Budget />,
      },
      {
        path: "/auth/card",
        element: <Card />,
      },
      {
        path: "/auth/view-profile",
        element: <ViewProfile />,
      },
      {
        path: "/auth/view-profile/edit/:type",
        element: <EditProfile />,
      },
      {
        path: "/auth/security",
        element: <Security />,
      },
      {
        path: "/auth/statement",
        element: <Statement />,
      },
      {
        path: "/auth/cards",
        element: <Card />,
      },
      {
        path: "/auth/card",
        element: <Cards />,
      },
      {
        path: "/auth/legal",
        element: <Legal />,
      },
      {
        path: "/auth/FAQs",
        element: <FAQs />,
      },
      {
        path: '/auth/send/account',
        element: <SendBank/>
      },
      {
        path: '/auth/send/username',
        element: <Sendtousername/>
      }
    ],
  },
]);
