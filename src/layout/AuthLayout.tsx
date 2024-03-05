import { Outlet } from "react-router-dom"
import AuthHeader from "../components/common/AuthHeader"
import Footer from "../components/common/Footer"
import SiderBar from "../components/use/SiderBar"

const AuthLayout = () => {
    return (
        <div>
            <AuthHeader />
            <div>

                <Outlet /><SiderBar />
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout