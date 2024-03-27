import { Outlet } from "react-router-dom"
import AuthHeader from "../components/common/AuthHeader"
import Footer from "../components/common/Footer"

const AuthLayout = () => {
    return (
        <div>
            <AuthHeader />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout