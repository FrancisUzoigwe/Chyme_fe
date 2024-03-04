import { createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import Landing from "../pages/auth/Landing"
import Register from "../pages/auth/Register"
import Signin from "../pages/auth/Signin"
import MainLayout from "../layout/MainLayout"
import HomeScreen from "../pages/home/HomeScreen"

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
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    }
])