import { DashboardLayout } from "../Components";
import { createBrowserRouter } from "react-router-dom";

import Send from "../Pages/DashboardPages/Send/Send";
import Budget from "../Pages/DashboardPages/Budget/Budget";
import Card from "../Pages/DashboardPages/Card/Card";
import Account from "../Pages/DashboardPages/Account/Account";
import Sendtousername from "../Pages/DashboardPages/Send/Sendtousername";
import SendBank from "../Pages/DashboardPages/Send/SendBank";
import ViewProfile from "../Pages/DashboardPages/Profile/ViewProfile";
import EditProfile from "../Pages/DashboardPages/Profile/EditProfile";
import Statement from "../Pages/DashboardPages/Statement/Statement";
import Legal from "../Pages/DashboardPages/Legal/Legal";
import SavedCards from "../Pages/DashboardPages/savedCards/SavedCards";
import Faq from "../Pages/DashboardPages/FAQ/Faq";
import Register from "../Pages/DashboardPages/AuthPages/Register";
import Signin from "../Pages/DashboardPages/AuthPages/Signin";
import EmailScreen from "../Pages/DashboardPages/AuthPages/EmailScreen";
import LoadingPage from "../Pages/LandingPages/LoadingPage/LoadingPage";
import HomeScreen from "../Pages/LandingPages/HomeScreen/HomeScreen";
import LandingPageLayout from "../Components/Layout/LandingPageLayout";
import Dashboardhome from "../Pages/DashboardPages/DashBoardHome/Dashboardhome";
import Pay from "../Pages/DashboardPages/Pay/Pay";
import PrivateRoute from "./PrivateRoute";

export const Element = createBrowserRouter([
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
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Dashboardhome />,
      },
      {
        path: "/dashboard/send",
        element: <Send />,
      },
      {
        path: "/dashboard/pay",
        element: <Pay />,
      },
      {
        path: "/dashboard/budget",
        element: <Budget />,
      },
      {
        path: "/dashboard/card",
        element: <Card />,
      },
      {
        path: "/dashboard/my-account",
        element: <Account />,
      },
      {
        path: "/dashboard/send/username",
        element: <Sendtousername />,
      },
      {
        path: "/dashboard/send/account",
        element: <SendBank />,
      },
      {
        path: "/dashboard/view-profile",
        element: <ViewProfile />,
      },
      {
        path: "/dashboard/view-profile/edit/:type",
        element: <EditProfile />,
      },
      {
        path: "/dashboard/statement",
        element: <Statement />,
      },
      {
        path: "/dashboard/legal",
        element: <Legal />,
      },
      {
        path: "/dashboard/cards",
        element: <SavedCards />,
      },
      {
        path: "/dashboard/FAQs",
        element: <Faq />,
      },
    ],
  },
]);
