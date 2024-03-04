import { Outlet } from "react-router-dom"
import AuthHeader from "../components/common/AuthHeader"
import Footer from "../components/common/Footer"

const AuthLayout = () => {
    return (
        <div>
            <AuthHeader />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AuthLayout