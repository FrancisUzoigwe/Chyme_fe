import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import Landing from "../pages/auth/Landing"
import Register from "../pages/auth/Register"
import Signin from "../pages/auth/Signin"
import MainLayout from "../layout/MainLayout"
import HomeScreen from "../pages/home/HomeScreen"
import PrivateRoute from "./PrivateRoute"
import EmailScreen from "../pages/auth/EmailScreen"
import LoadingPage from "../pages/auth/LoadingPage"

export const mainRoute = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/signin",
        element: <Signin />
    },
    {
        path: "/api/:token/verify-account",
        element: <Signin />
    },
    {
        path: "/email",
        element: <EmailScreen />
    },
    {
        path: "/load",
        element: <LoadingPage />
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Landing />
            }
        ]
    },
    {
        path: "/auth",
        element: <PrivateRoute><MainLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    }
])